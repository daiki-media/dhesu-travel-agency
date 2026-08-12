/**
 * Build-time responsive image pipeline.
 *
 * `output: "export"` means the Next.js image optimizer (which needs a running
 * server) is unavailable, so we pre-render every variant here instead and point
 * `next/image` at them through the custom loader in `src/lib/image-loader.js`.
 *
 *   public/images/gallery/87.jpg  ->  public/_img/images/gallery/87/{256,384,...}.webp
 *
 * The width ladder must stay in sync with `images.deviceSizes` + `images.imageSizes`
 * in next.config.ts, otherwise `next/image` will request a width we never wrote.
 */
import { createHash } from "node:crypto";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SOURCE_DIR = path.join(ROOT, "public", "images");
const OUT_DIR = path.join(ROOT, "public", "_img", "images");
const CACHE_FILE = path.join(ROOT, "node_modules", ".cache", "dhesu-images.json");

/** Keep in sync with next.config.ts (imageSizes then deviceSizes, ascending). */
export const WIDTH_LADDER = [256, 384, 640, 828, 1200, 1920];

const RASTER = new Set([".jpg", ".jpeg", ".png"]);
const WEBP = { quality: 74, effort: 5 };
const WEBP_FLAT = { lossless: true, effort: 6 };
/**
 * Flat artwork (logos, the section background pattern) is mostly large areas of
 * one colour plus an alpha channel — exactly the case where lossy WebP balloons
 * and resampling destroys the runs that lossless compression relies on. Those
 * get encoded losslessly at native width instead.
 */
const FLAT_ENTROPY = 2;

/**
 * Full-bleed background photography, listed by source path.
 *
 * These sources are low-resolution and full of JPEG noise (the hero measures
 * 7.7 entropy out of a possible 8), which WebP faithfully — and expensively —
 * preserves: the 640x480 hero cost 90 KB. They are always displayed upscaled,
 * behind a 40% black overlay, so a mild denoise is invisible in place while
 * roughly halving the bytes on the LCP image. Do not add gallery or card
 * imagery here; those are viewed at or near their natural size.
 */
const SOFTEN = new Set(["gallery/12615.jpg", "gallery/140.jpg"]);

const CONCURRENCY = Math.max(2, Math.min(8, os.cpus().length - 1));

async function walk(dir) {
  const out = [];
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(full)));
    else if (RASTER.has(path.extname(entry.name).toLowerCase())) out.push(full);
  }
  return out;
}

async function readCache() {
  try {
    return JSON.parse(await fs.readFile(CACHE_FILE, "utf8"));
  } catch {
    return {};
  }
}

/** Identify a source by content + settings so edits invalidate but re-runs don't. */
async function fingerprint(file) {
  const buf = await fs.readFile(file);
  return createHash("sha1")
    .update(buf)
    .update(JSON.stringify([WIDTH_LADDER, WEBP, WEBP_FLAT, FLAT_ENTROPY, [...SOFTEN].sort()]))
    .digest("hex");
}

async function convert(file) {
  const rel = path.relative(SOURCE_DIR, file);
  const stem = rel.slice(0, -path.extname(rel).length).split(path.sep).join("/");
  const destDir = path.join(OUT_DIR, ...stem.split("/"));
  await fs.mkdir(destDir, { recursive: true });

  const input = sharp(file, { failOn: "none" });
  const [{ width: srcWidth = 0, hasAlpha }, { entropy }] = await Promise.all([
    input.metadata(),
    input.stats(),
  ]);
  const isFlat = Boolean(hasAlpha) && entropy < FLAT_ENTROPY;
  const soften = SOFTEN.has(stem + path.extname(rel).toLowerCase());

  let bytes = 0;

  if (isFlat) {
    const buffer = await sharp(file, { failOn: "none" }).webp(WEBP_FLAT).toBuffer();
    for (const target of WIDTH_LADDER) {
      await fs.writeFile(path.join(destDir, `${target}.webp`), buffer);
      bytes += buffer.byteLength;
    }
    return { rel, bytes, srcBytes: (await fs.stat(file)).size };
  }

  let lastBuffer = null;
  let lastWidth = 0;

  for (const target of WIDTH_LADDER) {
    // Never upscale: once the ladder passes the source width, reuse the biggest
    // render we already made so the loader can still request any rung safely.
    let buffer;
    if (lastBuffer && target >= srcWidth && lastWidth >= srcWidth) {
      buffer = lastBuffer;
    } else {
      const pipeline = sharp(file, { failOn: "none" }).resize({
        width: target,
        withoutEnlargement: true,
      });
      buffer = await (soften ? pipeline.median(3) : pipeline).webp(WEBP).toBuffer();
      lastBuffer = buffer;
      lastWidth = Math.min(target, srcWidth || target);
    }
    await fs.writeFile(path.join(destDir, `${target}.webp`), buffer);
    bytes += buffer.byteLength;
  }

  return { rel, bytes, srcBytes: (await fs.stat(file)).size };
}

async function main() {
  const files = (await walk(SOURCE_DIR)).sort();
  const cache = await readCache();
  const nextCache = {};

  const stale = [];
  for (const file of files) {
    const rel = path.relative(SOURCE_DIR, file).split(path.sep).join("/");
    const hash = await fingerprint(file);
    nextCache[rel] = hash;
    // Re-render when the source changed or an output went missing.
    const outPath = path.join(OUT_DIR, ...rel.slice(0, -path.extname(rel).length).split("/"), `${WIDTH_LADDER.at(-1)}.webp`);
    const present = await fs.access(outPath).then(() => true, () => false);
    if (cache[rel] !== hash || !present) stale.push(file);
  }

  if (stale.length === 0) {
    console.log(`[images] ${files.length} sources already optimized — nothing to do.`);
    return;
  }

  console.log(`[images] optimizing ${stale.length}/${files.length} source images at ${CONCURRENCY}x…`);

  let srcTotal = 0;
  let outTotal = 0;
  let done = 0;
  const queue = [...stale];

  await Promise.all(
    Array.from({ length: CONCURRENCY }, async () => {
      for (let file = queue.pop(); file; file = queue.pop()) {
        const { bytes, srcBytes } = await convert(file);
        srcTotal += srcBytes;
        outTotal += bytes;
        if (++done % 50 === 0) console.log(`[images]   ${done}/${stale.length}`);
      }
    })
  );

  await fs.mkdir(path.dirname(CACHE_FILE), { recursive: true });
  await fs.writeFile(CACHE_FILE, JSON.stringify(nextCache, null, 2));

  const mb = (n) => (n / 1024 / 1024).toFixed(1);
  console.log(
    `[images] done — ${mb(srcTotal)} MB of sources -> ${mb(outTotal)} MB across ${WIDTH_LADDER.length} widths.`
  );
}

main().catch((error) => {
  console.error("[images] failed:", error);
  process.exit(1);
});
