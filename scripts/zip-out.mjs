// Packs the static export in `out/` into `out.zip` so the build can be
// uploaded to the shared Apache host in one go. Runs automatically after
// `npm run build` via the `postbuild` script.
import { createWriteStream, existsSync, rmSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { ZipArchive } from "archiver";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = resolve(root, "out");
const zipPath = resolve(root, "out.zip");

if (!existsSync(outDir)) {
  console.error("[zip-out] No `out/` directory found — skipping zip.");
  process.exit(0);
}

// Start from a clean archive so a failed run never leaves a stale zip behind.
rmSync(zipPath, { force: true });

const output = createWriteStream(zipPath);
const archive = new ZipArchive({ zlib: { level: 9 } });

output.on("close", () => {
  const mb = (archive.pointer() / 1024 / 1024).toFixed(2);
  console.log(`[zip-out] out.zip created (${mb} MB)`);
});

archive.on("warning", (err) => {
  if (err.code === "ENOENT") console.warn(`[zip-out] ${err.message}`);
  else throw err;
});

archive.on("error", (err) => {
  throw err;
});

archive.pipe(output);
// Zip the *contents* of out/, not the folder itself, so extracting on the
// server drops index.html straight into the web root.
archive.directory(outDir, false);
await archive.finalize();
