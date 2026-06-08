// One-off: replace Unsplash image URLs in the 63 India package JSONs with
// relevant LOCAL gallery images harvested from the live holidayidea.com.my tour
// pages (matched by pkgid). Names/slugs/keys/alt-text are NOT touched — only the
// image URL string values, and only where they currently point at unsplash.
import fs from "fs";
import path from "path";

const harvest = JSON.parse(fs.readFileSync("scripts/image-harvest.json", "utf8"));
const blocklist = new Set(
  JSON.parse(fs.readFileSync("scripts/image-blocklist.json", "utf8")).ids.map(String),
);
const gdir = "public/images/gallery";
const exists = new Set(
  fs.readdirSync(gdir).filter((f) => f.endsWith(".jpg")).map((f) => f.slice(0, -4)),
);
const url = (id) => `/images/gallery/${id}.jpg`;
const localOk = (id) => exists.has(String(id));
const blocked = (id) => blocklist.has(String(id));

// Collect the 63 package files.
const dir = "src/data/tourPackages";
const files = [];
(function w(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) w(p);
    else if (e.name.endsWith(".json")) files.push(p);
  }
})(dir);

const meta = [];
const bySlug = {};
for (const f of files) {
  const j = JSON.parse(fs.readFileSync(f, "utf8"));
  const rec = { f, j, pkgid: String(j.meta.pkgid), slug: j.meta.slug, region: j.meta.slug.split("/")[0] };
  meta.push(rec);
  bySlug[rec.slug] = rec;
}

// Frequency across packages → shared banner/cross-sell images (appear in >=3 tours).
const freq = {};
for (const ids of Object.values(harvest)) {
  for (const id of new Set(ids.map(String))) freq[id] = (freq[id] || 0) + 1;
}
const generic = (id) => (freq[String(id)] || 0) >= 3;

// Per-package topical pool: harvested ids that exist locally and aren't generic.
const pool = {};
for (const m of meta) {
  const out = [];
  const seen = new Set();
  for (const id of harvest[m.pkgid] || []) {
    const s = String(id);
    if (seen.has(s) || !localOk(s) || generic(s) || blocked(s)) continue;
    seen.add(s);
    out.push(s);
  }
  pool[m.pkgid] = out;
}

// Region pools (fallback) + global pool (last resort).
const regionPool = {};
for (const m of meta) {
  regionPool[m.region] ||= [];
  for (const id of pool[m.pkgid]) if (!regionPool[m.region].includes(id)) regionPool[m.region].push(id);
}
const globalPool = [...new Set(Object.values(regionPool).flat())];

const effPool = (m) =>
  pool[m.pkgid].length ? pool[m.pkgid] : (regionPool[m.region]?.length ? regionPool[m.region] : globalPool);

// Primary image per package: keep current local hero if it's already a valid local
// gallery image; otherwise the first topical image; otherwise region/global.
// Each package's OWN images = the IDs harvested from its live tour page (by pkgid).
// A pre-existing local hero is trusted ONLY if it's one of those (region-correct);
// otherwise it was mislabeled (e.g. a Kashmir houseboat reused on Kerala) and we
// use the package's own first photo instead.
const ownIds = {};
for (const m of meta) ownIds[m.pkgid] = new Set((harvest[m.pkgid] || []).map(String));

const primary = {};
for (const m of meta) {
  const h = m.j.hero?.heroImage;
  const mm = typeof h === "string" && h.match(/\/images\/gallery\/(\d+)\.jpg/);
  const keep = mm && localOk(mm[1]) && !blocked(mm[1]) && ownIds[m.pkgid].has(mm[1]);
  primary[m.pkgid] = keep ? mm[1] : effPool(m)[0];
}

const isU = (s) => typeof s === "string" && s.includes("unsplash");
let total = 0;
const report = [];

for (const m of meta) {
  const { j } = m;
  const p = effPool(m);
  const pick = (i) => url(p[i % p.length]);
  let n = 0;

  // Hero / OG / CTA always use the package's region-correct primary photo (this
  // also overwrites any mislabeled pre-existing local hero, e.g. Kerala→Kashmir).
  const prim = url(primary[m.pkgid]);
  for (const set of [
    () => { if (j.hero && j.hero.heroImage !== prim) { j.hero.heroImage = prim; return 1; } return 0; },
    () => { if (j.meta && j.meta.ogImage !== prim) { j.meta.ogImage = prim; return 1; } return 0; },
    () => { if (j.cta && j.cta.bgImage !== prim) { j.cta.bgImage = prim; return 1; } return 0; },
  ]) n += set();

  if (Array.isArray(j.highlights?.items)) {
    j.highlights.items.forEach((h, i) => { if (isU(h.image)) { h.image = pick(i + 1); n++; } });
  }
  if (Array.isArray(j.relatedPackages)) {
    j.relatedPackages.forEach((r, i) => {
      if (!isU(r.image)) return;
      const tgt = bySlug[r.slug];
      let id = tgt ? primary[tgt.pkgid] : null;
      if (!id || !localOk(id)) id = p[i % p.length];
      r.image = url(id);
      n++;
    });
  }

  if (n > 0) { fs.writeFileSync(m.f, JSON.stringify(j, null, 2) + "\n"); total += n; }
  report.push({ slug: m.slug, n, own: pool[m.pkgid].length, fallback: pool[m.pkgid].length === 0 });
}

// ── Destination hub: india.json listing-card images ──────────────────────────
// Cards on /tours/india, /all-packages and region pages read packages.items[].image
// from this file. Point each card at its package's region-correct primary photo so
// cards are varied and correct (originally all Kerala cards shared one Kashmir image).
const slugPrim = {};
for (const m of meta) slugPrim[m.slug] = url(primary[m.pkgid]);
const indiaFile = "src/data/tourPages/india.json";
const india = JSON.parse(fs.readFileSync(indiaFile, "utf8"));
let cardN = 0;
for (const it of india.packages.items) {
  if (it.slug && slugPrim[it.slug] && it.image !== slugPrim[it.slug]) {
    it.image = slugPrim[it.slug];
    cardN++;
  }
}
fs.writeFileSync(indiaFile, JSON.stringify(india, null, 2) + "\n");
console.log(`india.json listing-card images updated: ${cardN}`);

let remaining = 0;
for (const f of files) remaining += (fs.readFileSync(f, "utf8").match(/unsplash/g) || []).length;

console.log(`Replaced ${total} image URLs across ${report.filter((r) => r.n).length} files.`);
console.log(`Unsplash refs remaining in package files: ${remaining}`);
const fb = report.filter((r) => r.fallback);
console.log(`\nPackages with no own gallery (used region fallback): ${fb.length}`);
fb.forEach((r) => console.log(`  - ${r.slug}`));
console.log("\nPer-file (replaced / own-pool size):");
report.sort((a, b) => (a.slug < b.slug ? -1 : 1)).forEach((r) => console.log(`  ${r.slug}: ${r.n} / ${r.own}`));
