# Progress Log

> Append-only changelog. **Add an entry after every change.** Newest first.
> Each entry must reconcile with the reference docs (ARCHITECTURE / CONVENTIONS / SEO) — if a change makes one stale, edit it in the same change and say so here.

## Entry template (copy for each change)
```
## YYYY-MM-DD — <short title>
**Type:** content | feature | fix | refactor | docs
**What changed:**
- <bullet of concrete edits, with file paths>
**Why:** <reason / request>
**Invariants touched:** <e.g. added package trio; updated registry; none>
**Validation:** <build / lint / consistency-script / manual — results>
**Docs updated:** <which reference docs changed, or "none needed">
**Follow-ups / known gaps:** <anything left>
```

---

## 2026-06-08 — India cards: one DISTINCT, relevant photo per package (no repeats)
**Type:** content
**What changed:**
- Hand-curated a unique, region-correct gallery photo for every one of the **63 India packages** (`scripts/card-images.json`, slug→id; all 63 ids distinct). `scripts/apply-cards.mjs` writes each to `india.json` packages.items[].image (the listing CARD) AND the detail file's hero/og, so card and detail hero match.
- Added one more route-map id (`11186`) to `scripts/image-blocklist.json`.
- Selection done by **visually previewing** candidate gallery images per region and de-duplicating (the source site had reused the same photo under several ids, which caused the earlier repeats). Each card now has a genuinely different scene (e.g. Kerala: Kathakali, houseboat sunset, Fort Kochi, fishing nets, Kovalam, Santa Cruz Basilica…; North: Taj, Amber Fort, City Palace, Golden Temple, Varanasi, Rishikesh aarti, Thiksey/Ladakh, Sikkim monastery, Mandawa…).

**Why:** User reported cards repeating the same image (and a couple still showed itinerary maps). Wanted distinct, relevant repo images per card.

**Invariants touched:** none. apply-cards.mjs hard-fails if any two slugs share an id or an id is missing on disk.
**Validation:** india.json cards = **63/63 unique, 0 repeats, 0 unsplash, 0 blocklisted maps, 0 missing on disk**. `/tours/india`, `/tours/india/{kerala,north-india}`, `/all-packages` all 200.
**Docs updated:** this entry.
**Follow-ups / known gaps:** Card↔detail hero now matched. Detail-page *highlights/related* still cycle each tour's own pool (varied, but not individually hand-picked). Curation is region-level relevant; a few cards use a same-region-but-different-city photo where no exact match existed (noted in card-images.json choices).

## 2026-06-08 — India hub + landing images; fix mislabeled Kerala→Kashmir image
**Type:** fix + content
**What changed:**
- **`src/data/tourPages/india.json`** (was NOT touched in the prior entry — it drives the listing CARDS): set all 62 `packages.items[].image` to each package's region-correct primary photo (cards were originally all-identical/wrong — every Kerala card showed `12929.jpg`, which is actually a **Kashmir** Dal Lake houseboat). Also replaced the 9 remaining Unsplash refs in the hub sections (`why.highlights[]`, `zones.areas[]`, `cta.bgImage`) with relevant local photos.
- **`src/data/india/regions.ts`**: replaced all 9 landing-page `ogImage`s (Kerala's was the same mislabeled `12929` Kashmir houseboat; the other 7 were Unsplash) with verified local region photos.
- **`scripts/apply-images.mjs`**: hardened so a pre-existing local hero is trusted only if it's in that package's own pkgid-harvested set; otherwise it's treated as mislabeled and replaced with the package's own primary. This fixed `kerala/4-day-explore` (and any similar) detail hero that had inherited the Kashmir `12929` image. Also now rewrites `india.json` card images.

**Why:** User spotted (screenshot) that the Kerala listing cards all showed an identical Kashmir houseboat. Root cause: original repo hardcoded `12929.jpg` (a mislabeled Kashmir image) as the Kerala card/landing/detail image. `india.json` + `regions.ts` had been out of the prior scope.

**Invariants touched:** none broken. 63 detail files still 0 canonical/slug drift.
**Validation:** India section (detail + india.json + regions.ts) = **0 Unsplash refs, 652 local gallery refs all exist on disk, 0 canonical drift**. Live dev server: `/`, `/tours/india`, `/tours/india/{kerala,kashmir}`, a detail page, and `/all-packages` all return 200. Kerala cards now varied & Kerala-specific; `kerala/4-day-explore` hero now `11186` (Kerala), not `12929` (Kashmir).
**Docs updated:** this entry (ARCHITECTURE §7 already notes India local images).
**Follow-ups / known gaps:** `12929.jpg` remains correctly used in Kashmir packages (it IS a Kashmir image). Homepage + other destinations still use Unsplash (out of scope).

## 2026-06-08 — India package images: Unsplash → local gallery
**Type:** content
**What changed:**
- Replaced **all 507 Unsplash image URLs** across the **63 India package detail JSONs** (`src/data/tourPackages/india/*.json` + `india-package-detail-chennai-super-saver.json`) with relevant **local** `/images/gallery/<id>.jpg` images. 569 gallery refs total now, 0 remote.
- Images were sourced per-package from the **live holidayidea.com.my tour pages**, matched by `meta.pkgid` (each local package's pkgid → that tour's real photo gallery), so images are topically correct, not guessed.
- Assignment was deterministic via `scripts/apply-images.mjs` (kept for reproducibility) using `scripts/image-harvest.json` (pkgid → gallery IDs) and `scripts/image-blocklist.json` (24 itinerary route-MAP graphics + text-overlay banners, identified by visual preview and excluded so heroes/highlights stay scenic).
- Only image URL **values** changed where they pointed at Unsplash. Names/slugs/keys/alt-text/structure untouched. `hero`/`ogImage`/`cta.bgImage` use the package's primary photo; `highlights[]` cycle the tour's photo pool; `relatedPackages[]` use the linked package's own primary. 1–3 sparse tours fall back to their region's photo pool.

**Why:** User asked to replace the Unsplash placeholders in the India section with relevant images, keeping names unchanged.

**Invariants touched:** none broken. Verified `meta.canonicalUrl === /tours/india/<slug>` and `meta.slug === key` still hold for all 63.

**Validation:**
- Consistency script: 63 files, 0 bad JSON, 0 canonical/slug drift, **0 Unsplash refs**, 569 local gallery refs **all exist on disk**, **0 blocklisted map/banner refs remaining**.
- Visual QC: previewed all 63 hero images (plus replacements) — all are real scenic photos; route-map graphics blocklisted.
- NOT run: `next build` / `tsc` (node_modules not installed; change is JSON-only with string image values, type shape unchanged). Other destinations + homepage still use Unsplash, so `next.config.ts` allow-list is unchanged.

**Docs updated:** ARCHITECTURE.md §7 note added; this entry.
**Follow-ups / known gaps:** Residual: a deep `highlights[]`/`related[]` slot on a photo-hero tour could still hold an unverified non-blocklisted map (low risk — all 24 known maps are gone). Scope was India packages only; the India hub (`india.json`, 50 refs) and `regions.ts` (7 refs) still use Unsplash by design (not in scope).

## 2026-06-08 — Baseline: documentation set created
**Type:** docs
**What changed:**
- Added `CLAUDE.md` (agent operating rules + golden rule + pointers to docs).
- Added `docs/README.md`, `docs/ARCHITECTURE.md`, `docs/CONVENTIONS.md`, `docs/SEO.md`, and this `docs/PROGRESS.md`.
- No application code changed.

**Why:** Establish a single source of truth so future edits follow existing conventions and changes are unambiguous (user request).

**Baseline state captured (verified against code on this date):**
- Stack: Next.js 16.2.6, React 19, Tailwind v4, framer-motion, lucide-react, swiper. SSG throughout.
- Destination hubs: **5** (`bali, india, thailand, sri-lanka, nepal`).
- India package detail pages: **63** registered in `tourPackages/index.ts`.
- India region/theme landing pages: **9** (6 regions + 3 themes) in `regions.ts`.
- Remote image hosts allow-listed: `images.unsplash.com`, `www.holidayidea.com.my` (659 + 42 refs, all valid).

**Audit results (consistency checks run this date):**
- ✅ All 63 package keys consistent: `meta.canonicalUrl === /tours/india/<key>` and `meta.slug === key`.
- ✅ All 5 hub `meta.slug` match filename keys.
- ✅ All 11 local `/images/...` refs exist under `public/`.
- ✅ All `relatedPackages[].slug` point to real package keys.
- ⚠️ SEO gaps: no `metadataBase`, no `sitemap.ts`, no `robots.ts` (documented in SEO.md §2).
- 🔴 Pre-existing broken nav links (~36) + missing `/tours` index + `/tours/india/spiritual-india` not a landing key (full list in SEO.md §3). **Not fixed yet** — awaiting direction.

**Invariants touched:** none (docs only).
**Validation:** Documentation reviewed against source files read during the audit; no code changed so no build needed.
**Docs updated:** all created this entry.
**Follow-ups / known gaps:** SEO gaps and broken nav links above remain open. User directive: when editing, **follow existing conventions** (recorded in CONVENTIONS.md golden rule).
