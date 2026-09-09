// Drops Next's persisted fetch-cache entries for the CMS.
//
// The CMS fetches use `cache: "force-cache"` because output: "export" refuses
// to prerender a route that made an uncached fetch. Next writes those responses
// to .next/cache/fetch-cache with no expiry, so without this a build after
// publishing a post keeps rebuilding the previous build's post list.
import { readdirSync, readFileSync, rmSync } from "node:fs";
import { join } from "node:path";

const DIR = ".next/cache/fetch-cache";
const HOST = "cms.dhesu.com";

let files;
try {
  files = readdirSync(DIR);
} catch {
  process.exit(0);
}

let dropped = 0;
for (const file of files) {
  const path = join(DIR, file);
  let url;
  try {
    url = JSON.parse(readFileSync(path, "utf8")).data?.url ?? "";
  } catch {
    continue;
  }
  if (url.includes(HOST)) {
    rmSync(path, { force: true });
    dropped++;
  }
}

if (dropped) console.log(`Cleared ${dropped} cached ${HOST} response(s).`);
