/**
 * Post-processing for the static export. Two passes, in order:
 *
 *   1. aliasPrefetchPayloads — Next 16 writes its segment-prefetch payloads into
 *      nested directories (`__next.tours/$d$destination/__PAGE__.txt`) but the
 *      client requests the same path with dots (`__next.tours.$d$destination.
 *      __PAGE__.txt`), so every prefetch 404s. Writing a flat alias beside each
 *      payload fixes it on any static host, with no rewrite rules.
 *
 *   2. pruneExport — `next build` copies all of `public/` into `out/`, but
 *      nothing links to `/images/**` any more: every reference goes through the
 *      WebP variants in `/_img/**` (via src/lib/image-loader.ts, and index.css
 *      for the background pattern). Drops the originals, then any generated
 *      variant no emitted page actually references.
 *
 * Order matters: the prune pass decides what to keep by scanning the emitted
 * files, so the aliases must exist before it runs.
 */
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(ROOT, "out");
const IMAGES = path.join(OUT, "images");
const OPTIMIZED = path.join(OUT, "_img", "images");

const PREFIX = "__next.";
const RASTER = new Set([".jpg", ".jpeg", ".png"]);
const SCANNABLE = new Set([".html", ".css", ".txt", ".js", ".json", ".xml"]);
const MB = (n) => (n / 1024 / 1024).toFixed(1);

const exists = (p) => fs.access(p).then(() => true, () => false);

async function walk(dir, out = []) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, out);
    else out.push(full);
  }
  return out;
}

async function pruneEmptyDirs(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) await pruneEmptyDirs(path.join(dir, entry.name));
  }
  if ((await fs.readdir(dir)).length === 0) await fs.rmdir(dir);
}

// ── 1. Prefetch aliases ──────────────────────────────────────────────────────

async function aliasPrefetchPayloads(dir, stats) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    if (!entry.isDirectory()) continue;
    const full = path.join(dir, entry.name);

    if (entry.name.startsWith(PREFIX)) {
      for (const file of await walk(full)) {
        const rel = path.relative(full, file).split(path.sep).join(".");
        await fs.copyFile(file, path.join(dir, `${entry.name}.${rel}`));
        stats.written++;
        stats.bytes += (await fs.stat(file)).size;
      }
      continue;
    }

    await aliasPrefetchPayloads(full, stats);
  }
}

// ── 2. Prune ─────────────────────────────────────────────────────────────────

async function pruneExport() {
  if (!(await exists(IMAGES))) return;
  if (!(await exists(OPTIMIZED))) {
    console.warn("[postbuild] out/_img missing — leaving originals in place.");
    return;
  }

  let removed = 0;
  let bytes = 0;

  // Originals whose optimized twin actually shipped.
  for (const file of await walk(IMAGES)) {
    if (!RASTER.has(path.extname(file).toLowerCase())) continue;
    const rel = path.relative(IMAGES, file);
    const stem = rel.slice(0, -path.extname(rel).length);
    if (!(await exists(path.join(OPTIMIZED, stem)))) continue;
    bytes += (await fs.stat(file)).size;
    await fs.rm(file);
    removed++;
  }
  await pruneEmptyDirs(IMAGES);
  console.log(`[postbuild] removed ${removed} unreferenced originals (${MB(bytes)} MB).`);

  // Generated variants nothing links to.
  const referenced = new Set();
  for (const file of await walk(OUT)) {
    if (file.startsWith(path.join(OUT, "_img"))) continue;
    if (!SCANNABLE.has(path.extname(file).toLowerCase())) continue;
    const text = await fs.readFile(file, "utf8");
    for (const m of text.matchAll(/\/_img\/[A-Za-z0-9_@%./-]+?\.webp/g)) {
      referenced.add(decodeURIComponent(m[0]));
    }
  }

  let dropped = 0;
  let droppedBytes = 0;
  for (const file of await walk(path.join(OUT, "_img"))) {
    const url = "/" + path.relative(OUT, file).split(path.sep).join("/");
    if (referenced.has(url)) continue;
    droppedBytes += (await fs.stat(file)).size;
    await fs.rm(file);
    dropped++;
  }
  await pruneEmptyDirs(path.join(OUT, "_img"));
  console.log(
    `[postbuild] removed ${dropped} unreferenced variants (${MB(droppedBytes)} MB); ${referenced.size} kept.`
  );
}

// ── Run ──────────────────────────────────────────────────────────────────────

if (!(await exists(OUT))) {
  console.warn("[postbuild] out/ missing — nothing to do.");
} else {
  const stats = { written: 0, bytes: 0 };
  await aliasPrefetchPayloads(OUT, stats);
  console.log(`[postbuild] wrote ${stats.written} prefetch aliases (${MB(stats.bytes)} MB).`);
  await pruneExport();
}
