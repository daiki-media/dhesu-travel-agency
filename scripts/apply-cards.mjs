// Apply the hand-curated DISTINCT card images (scripts/card-images.json) to:
//   1) india.json packages.items[].image  (the listing CARD)
//   2) the package detail file's hero.heroImage + meta.ogImage (so hero matches card)
// Only slugs present in the curated map are touched — safe to run incrementally as
// regions get filled. Guarantees no two cards share an image (map values are unique).
import fs from "fs";
import path from "path";

const curated = JSON.parse(fs.readFileSync("scripts/card-images.json", "utf8")).map;
const ex = new Set(fs.readdirSync("public/images/gallery").filter((f) => f.endsWith(".jpg")).map((f) => f.slice(0, -4)));
const url = (id) => `/images/gallery/${id}.jpg`;

// uniqueness + existence guard
const ids = Object.values(curated).map(String);
const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
if (dup.length) { console.error("DUPLICATE ids in card-images.json:", [...new Set(dup)]); process.exit(1); }
const missing = ids.filter((id) => !ex.has(id));
if (missing.length) { console.error("MISSING ids on disk:", missing); process.exit(1); }

// detail files by slug
const dir = "src/data/tourPackages";
const bySlug = {};
(function w(d) {
  for (const e of fs.readdirSync(d, { withFileTypes: true })) {
    const p = path.join(d, e.name);
    if (e.isDirectory()) w(p);
    else if (e.name.endsWith(".json")) {
      const j = JSON.parse(fs.readFileSync(p, "utf8"));
      bySlug[j.meta.slug] = { p, j };
    }
  }
})(dir);

// 1) india.json cards
const indiaFile = "src/data/tourPages/india.json";
const india = JSON.parse(fs.readFileSync(indiaFile, "utf8"));
let cards = 0;
for (const it of india.packages.items) {
  if (it.slug && curated[it.slug]) { it.image = url(curated[it.slug]); cards++; }
}
fs.writeFileSync(indiaFile, JSON.stringify(india, null, 2) + "\n");

// 2) detail hero + og
let heroes = 0;
for (const [slug, id] of Object.entries(curated)) {
  const rec = bySlug[slug];
  if (!rec) { console.warn("no detail file for", slug); continue; }
  rec.j.hero.heroImage = url(id);
  rec.j.meta.ogImage = url(id);
  fs.writeFileSync(rec.p, JSON.stringify(rec.j, null, 2) + "\n");
  heroes++;
}

console.log(`Curated slugs: ${Object.keys(curated).length} | cards set: ${cards} | detail heroes set: ${heroes}`);
