# Conventions & Recipes

> The rules to follow and the exact steps for common edits. **Golden rule: match existing patterns; don't invent new ones.**
> Last reconciled with code: **2026-06-08**.

## A. Load-bearing invariants (break these → silent 404 or build error)

1. **Package trio must agree.** For every package detail JSON:
   `registry key` (in `tourPackages/index.ts`) **=** `meta.slug` **=** the tail of `meta.canonicalUrl`, and
   `meta.canonicalUrl === "/tours/<destination>/<key>"`.
   The route guards on this (`[...packageSlug]/page.tsx`): a mismatch returns `notFound()`.
2. **Register everything.** A JSON file is invisible until it is *both* `import`ed *and* added to the map in the matching `index.ts`. Folders are not scanned.
3. **Destination hub key = filename = `meta.slug`.** Add it to the `tourPages` map or it won't appear in `tourSlugs`/static params.
4. **India landing keys are unique** across `REGIONS` + `THEMES` (single `byKey` lookup). Region pages select by **slug prefix**, theme pages by **keyword**.
5. **`relatedPackages[].slug` must be a real package registry key**, or the "You Might Also Like" link 404s.
6. **Remote images only from allow-listed hosts** (`next.config.ts`). New host → add it there first.
7. **Local images** referenced as `/images/...` must exist under `public/`.
8. **Shared exports** stay put: `PackageCard`/`SectionLabel` in `TourDestinationTemplate.tsx`; `PackageDetailData` type in `TourPackageDetailTemplate.tsx`. Moving them ripples through imports.

## B. Naming conventions

- Slugs: lowercase, hyphenated, duration-first where applicable: `4-day-explore`, `9-day-shimla-manali`.
- Package registry key: `"<region>/<slug>"`, e.g. `"kerala/4-day-explore"`.
- Package JSON filename: replace `/` with `--`: `kerala--4-day-explore.json`, placed in `src/data/tourPackages/india/`.
- Import variable: camelCase of the key: `kerala4DayExplore`.
- Prices: `"RM988"` / `"From RM988"` / `"RM1,488"` (string, MYR). Keep the existing per-file style.
- IDs (`pkg.id`, `relatedPackages[].id`): descriptive kebab, e.g. `india-5d-kerala-important-places`.

## C. SEO conventions

Every new page **must** match the existing mechanism (full detail in [SEO.md](SEO.md)):
- Export `generateMetadata` returning `title`, `description`, `keywords`, `alternates.canonical`, and `openGraph` (title/description/url/images/type).
- Emit JSON-LD with inline `<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(obj)}} />`, using the same `@type`s already used for that page kind (detail → Product + FAQPage + BreadcrumbList; listing → BreadcrumbList + CollectionPage).
- Canonical/OG URLs are written as the same **relative** paths used today (`/tours/...`). Do not switch to absolute unless `metadataBase` is introduced as a deliberate, documented change.

## D. Component / styling conventions

- Reuse `Button` (`variant="light|dark|transparent"`, `size`, `showArrow`) instead of new button markup.
- Reuse `SectionLabel` for the red eyebrow label and `PackageCard` for package cards.
- Reuse the `fadeUp` framer-motion variant + `initial="hidden" whileInView="visible" viewport={{once:true}}` pattern for scroll reveals.
- Use theme tokens/classes: `text-primary`, `bg-primary`, `bg-pattern`, `font-primary`, `font-secondary`, the `.btn-*` classes — not ad-hoc hex values. Brand red is `#FF0000` / dark `#990000` (see ARCHITECTURE §6).
- New templates are `"use client"` only if they use state/motion/events (all current tour templates are).

---

# Recipes

## R1 — Add a new India package detail page
1. Create `src/data/tourPackages/india/<region>--<slug>.json` matching `PackageDetailData` (copy an existing file like `kerala--4-day-explore.json` as a skeleton).
2. Set the trio: `meta.slug = "<region>/<slug>"`, `meta.canonicalUrl = "/tours/india/<region>/<slug>"`. (Registry key below must equal `meta.slug`.)
3. In `src/data/tourPackages/index.ts`:
   - add `import <camelKey> from "./india/<region>--<slug>.json";`
   - add `"<region>/<slug>": <camelKey> as PackageDetailData,` to `packageDetails`.
4. Fill `faq.items` (feeds FAQ rich result), `meta.ogImage`, and `relatedPackages` (slugs must be real keys).
5. Images: use `/images/gallery/<id>.jpg` (must exist) or an allow-listed remote host.
6. The package will now appear: as a detail page, in `/tours/india/all-packages`, and on any region/theme landing whose selector matches its slug/keywords. To feature it in nav, see R5.
7. Validate (§Validation) → update PROGRESS.md.

## R2 — Add packages for a NEW destination (e.g. Bali)
> Currently only India has detail JSON; other destinations have hubs but their cards fall back to `/contact` when `slug` is missing.
1. The detail route catch-all already supports any destination (it derives `destination` from each JSON's `meta.canonicalUrl`). So you can add `src/data/tourPackages/bali/*.json`.
2. Decide the registry key scheme. Keys are global in `packageDetails`; today they are `"<region>/<slug>"` for India. For Bali use a non-colliding key, e.g. `"bali/4-day-best-of-bali"`, with `meta.canonicalUrl = "/tours/bali/4-day-best-of-bali"`.
3. Import + map them in `tourPackages/index.ts` exactly as R1.
4. In `tourPages/bali.json`, give each `packages.items[].slug` so the hub cards link to the detail page (card link is `/tours/<dest>/<slug>`).
5. India-only landing logic (`regions.ts`) does **not** apply to other destinations — don't reuse it. If a destination needs region pages, that's a new, documented pattern (discuss first).
6. Validate → update PROGRESS.md (and ARCHITECTURE counts).

## R3 — Add / edit a destination hub
1. Create `src/data/tourPages/<dest>.json` matching `TourPageData` (copy `india.json`/`bali.json`).
2. Register in `tourPages/index.ts`: import + add `"<dest>": <dest>Data as TourPageData`.
3. `meta.slug` must equal `<dest>`. Fill `hero.bgImage`, `packages.items` (with `slug` if detail pages exist), `cta` (phone/email/address as in ARCHITECTURE §8).
4. Validate → PROGRESS.md.

## R4 — Add an India region or theme landing page
1. In `src/data/india/regions.ts`, add an object to `REGIONS` (slug-prefix selector) or `THEMES` (keyword selector).
2. Set unique `key`, `label`, `kind`, `blurb`, `select`, all `meta*`/`og*` fields, `h1`, `intro`, `canonicalUrl = "/tours/india/<key>"`.
3. Add the `key` to `NAV_ORDER` if it should show in the India hub card grid.
4. It auto-registers in `INDIA_LANDING_PAGES` (static params + lookup). Validate → PROGRESS.md.

## R5 — Edit the navigation
1. Edit `src/components/navbar/NavbarData.ts` only (data-driven; `Navbar.tsx` renders it).
2. **Only link to targets that resolve** (see SEO.md broken-link list). A link is valid if it is `/`, an existing hub, an existing India landing key, an existing package key, or a built static page.
3. Validate → PROGRESS.md.

## R6 — Add a static page (contact, about, blog, etc.)
1. Create `src/app/<route>/page.tsx`. Reuse `TopBar`, `Navbar`, `Footer` and the `Button`/`SectionLabel` components for visual consistency.
2. Export `metadata` (or `generateMetadata`) with title/description/canonical/OG, matching the tour routes' style.
3. After it exists, you may add/enable its nav link (R5).
4. Validate → PROGRESS.md.

---

# Validation

Run after any content/structure change. (Commands assume the repo root.)

1. **Type/build check:** `npm run build` (catches type errors, bad imports, missing image hosts, and renders all static params). At minimum `npx tsc --noEmit`.
2. **Lint:** `npm run lint`.
3. **Consistency check (the invariants in §A).** Use this script (adapt as the data grows):
   - every `packageDetails` key has a matching imported file;
   - each package's `meta.canonicalUrl === "/tours/<dest>/<key>"` and `meta.slug === key`;
   - all `/images/...` refs exist under `public/`;
   - all `relatedPackages[].slug` are real keys;
   - all nav `/tours/*` hrefs resolve to a hub / landing / package.
   > A reference implementation of these checks was used in the 2026-06-08 audit (see PROGRESS.md). Re-run an equivalent script before declaring a change done.
4. **Manual spot check:** `npm run dev`, visit the new/edited URL and one page that links to it.
5. **Update [PROGRESS.md](PROGRESS.md)**; if architecture/conventions changed, edit those docs in the same change.
