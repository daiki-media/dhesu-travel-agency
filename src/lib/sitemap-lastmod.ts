// Build-time only (used by src/app/sitemap.ts): reads git history and the
// filesystem, so never import this from a client component.
//
// <lastmod> for a page is the newest change to the files that hold that page's
// own content: its route folder, its JSON/TS data, its approved-copy component.
// Shared templates, layout, header and footer are deliberately left out — a
// footer tweak does not change what a page says, and Google discounts lastmod
// values that move on every build.
//
// "Change" means the last git commit that touched the file. A file with
// uncommitted edits (or a build without git history) falls back to the file's
// modification time on disk.
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const rel = (p: string) => p.split(path.sep).join("/");

type DateIndex = { files: Map<string, Date>; dirty: Set<string> | null };

let cached: DateIndex | null = null;

function git(args: string[]): string | null {
  try {
    return execFileSync("git", ["-c", "core.quotepath=off", ...args], {
      cwd: ROOT,
      encoding: "utf8",
      maxBuffer: 64 * 1024 * 1024,
      stdio: ["ignore", "pipe", "ignore"],
    });
  } catch {
    return null;
  }
}

/** Last commit date of every file under src/, read in one git call. */
function index(): DateIndex {
  if (cached) return cached;
  const files = new Map<string, Date>();
  const log = git(["log", "--format=__C%cI", "--name-only", "--no-renames", "--", "src"]);
  let current: Date | null = null;
  for (const line of (log ?? "").split("\n")) {
    if (line.startsWith("__C")) current = new Date(line.slice(3));
    else if (line && current && !files.has(line)) files.set(line, current);
  }
  const status = log === null ? null : git(["status", "--porcelain", "--untracked-files=all", "--", "src"]);
  const dirty =
    status === null ? null : new Set(status.split("\n").filter(Boolean).map((l) => l.slice(3)));
  cached = { files, dirty };
  return cached;
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else out.push(full);
  }
  return out;
}

function fileDate(file: string): Date | null {
  const key = rel(path.relative(ROOT, file));
  const { files, dirty } = index();
  const committed = files.get(key);
  if (committed && dirty !== null && !dirty.has(key)) return committed;
  // Uncommitted, untracked, or no git history at all: the disk is the truth.
  try {
    return fs.statSync(file).mtime;
  } catch {
    return committed ?? null;
  }
}

/**
 * Newest change across the given files and folders (paths relative to the
 * project root). Missing paths are ignored.
 */
export function lastModified(...sources: (string | undefined)[]): Date | undefined {
  let newest: Date | undefined;
  for (const source of sources) {
    if (!source) continue;
    const full = path.join(ROOT, source);
    if (!fs.existsSync(full)) continue;
    const files = fs.statSync(full).isDirectory() ? walk(full) : [full];
    for (const file of files) {
      const date = fileDate(file);
      if (date && (!newest || date > newest)) newest = date;
    }
  }
  return newest;
}

/** `dir/<name>.<ext>` matched case-insensitively (Indonesia.json is keyed "indonesia"). */
export function findFile(dir: string, name: string, exts: string[]): string | undefined {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return undefined;
  const wanted = new Set(exts.map((ext) => `${name}${ext}`.toLowerCase()));
  const hit = fs.readdirSync(full).find((f) => wanted.has(f.toLowerCase()));
  return hit ? `${dir}/${hit}` : undefined;
}

/**
 * Registry key → source file, read from a registry module such as
 * src/data/pageContent/index.tsx (`"india/kashmir": { body: <KashmirBody /> }`)
 * or src/data/guides/index.tsx (`"india/...": <IndiaGuide />`), by matching the
 * component each key renders to the file it is imported from.
 */
export function registryFiles(registry: string): Map<string, string> {
  const dir = path.posix.dirname(registry);
  const text = fs.readFileSync(path.join(ROOT, registry), "utf8");

  const componentFile = new Map<string, string>();
  for (const m of text.matchAll(/import\s+(?:(\w+)|\{([^}]+)\})\s+from\s+"\.\/([^"]+)"/g)) {
    const names = m[1] ? [m[1]] : m[2].split(",").map((n) => n.trim().split(/\s+as\s+/).pop()!);
    const file = findFile(path.posix.dirname(`${dir}/${m[3]}`), path.posix.basename(m[3]), [".tsx", ".ts"]);
    if (file) for (const name of names) if (name) componentFile.set(name, file);
  }

  const out = new Map<string, string>();
  for (const m of text.matchAll(/^\s*"?([\w/-]+)"?\s*:\s*(?:\{\s*body:\s*)?<(\w+)/gm)) {
    const file = componentFile.get(m[2]);
    if (file) out.set(m[1], file);
  }
  return out;
}

/** Every package JSON, keyed by the canonical path it declares. */
export function packageFilesByUrl(): Map<string, string> {
  const dir = "src/data/tourPackages";
  const out = new Map<string, string>();
  for (const file of walk(path.join(ROOT, dir))) {
    if (!file.endsWith(".json")) continue;
    const data = JSON.parse(fs.readFileSync(file, "utf8"));
    const url = data?.meta?.canonicalUrl;
    if (typeof url === "string") out.set(url.replace(/\/+$/, ""), rel(path.relative(ROOT, file)));
  }
  return out;
}

/** Plain data modules (camelCase .ts, e.g. landingFaqs.ts) in a content folder. */
export function siblingDataFiles(dir: string): string[] {
  const full = path.join(ROOT, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => /^[a-z]\w*\.ts$/.test(f))
    .map((f) => `${dir}/${f}`);
}
