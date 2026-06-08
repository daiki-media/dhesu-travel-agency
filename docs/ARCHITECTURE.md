# Architecture

> Describes **what the codebase is today**. Update this whenever structure changes.
> Last reconciled with code: **2026-06-08**.

## 1. Stack

| Layer | Technology |
|---|---|
| Framework | **Next.js 16.2.6**, App Router, React Server Components |
| UI runtime | **React 19.2.4** |
| Styling | **Tailwind CSS v4** via `@tailwindcss/postcss` (no `tailwind.config.js`; theme defined in CSS) |
| Animation | **framer-motion** ^12 |
| Icons | **lucide-react** (nav) + hand-rolled SVG components in `src/components/icons/` |
| Carousel | **swiper** ^12 |
| Language | **TypeScript** ^5, `strict: true` |
| Rendering | **100% static** — every dynamic route uses `generateStaticParams` (SSG) |

**Path alias:** `@/*` → `./*` (repo root). So imports look like `@/src/components/...`.

**Scripts** (`package.json`): `dev` (`next dev`), `build` (`next build`), `start` (`next start`), `lint` (`eslint`).

## 2. Repository layout

```
dhesu-travel-agency/
├── CLAUDE.md                  # agent operating rules → points here
├── docs/                      # ← this documentation
├── next.config.ts             # remote image allow-list
├── postcss.config.mjs         # tailwind v4 plugin
├── tsconfig.json              # @/* alias
├── public/
│   └── images/                # ~13,200 committed images (bulk of repo size)
│       ├── gallery/           # 13,219 jpgs referenced by id, e.g. /images/gallery/12929.jpg
│       ├── dhesu_logos.png    # nav logo
│       ├── dhesu-logo2.png
│       └── category_bg_1.png  # used by .bg-pattern
└── src/
    ├── app/                   # routes (App Router)
    │   ├── layout.tsx         # root layout, fonts, <metadata>
    │   ├── page.tsx           # homepage (composes homepage/* sections)
    │   ├── index.css          # Tailwind import + @theme tokens + custom CSS
    │   ├── not-found.tsx      # 404
    │   ├── favicon.ico
    │   └── tours/
    │       └── [destination]/
    │           ├── page.tsx                 # /tours/<dest>  (hub)
    │           ├── all-packages/page.tsx    # /tours/<dest>/all-packages
    │           └── [...packageSlug]/page.tsx# /tours/<dest>/<...>  (landing OR detail)
    ├── components/
    │   ├── Button.tsx                 # shared button (variant/size/showArrow)
    │   ├── homepage/                  # homepage sections (TopBar, Hero, Footer, etc.)
    │   ├── navbar/
    │   │   ├── Navbar.tsx             # sticky nav, mega-menu, mobile accordion
    │   │   └── NavbarData.ts          # nav link tree (data)
    │   ├── icons/                     # ArrowRight, ArrowDown, SocialIcons, ...
    │   └── tours/                     # the 4 page templates (see §5)
    ├── constants/
    │   └── theme.ts                   # legacy/unused color object — NOT the live theme (see §6)
    └── data/                          # all content (see §4)
        ├── tourPages/                 # destination hub JSON + types + registry
        ├── tourPackages/              # package-detail JSON + registry
        ├── india/regions.ts          # India region/theme landing logic + copy
        └── travelData.js             # legacy promo data (older format, homepage)
```

## 3. Routing & rendering

All tour content is statically generated. There are **three** dynamic route files, all under `src/app/tours/[destination]/`.

### 3.1 `/tours/[destination]` — destination hub
`page.tsx`
- `generateStaticParams()` → one entry per `tourSlugs` (`bali, india, thailand, sri-lanka, nepal`).
- `generateMetadata()` → from `data.meta` (+ canonical + OG).
- Loads JSON via `getTourPage(destination)`; `notFound()` if absent.
- India only: also passes `getIndiaRegionCards()` to render the "Explore by Region & Theme" grid.
- Renders `TopBar → Navbar → TourDestinationTemplate → Footer`.

### 3.2 `/tours/[destination]/all-packages` — full package grid
`all-packages/page.tsx` — same data source, renders `TourAllPackagesTemplate` (all `packages.items`, not just the preview 6).

### 3.3 `/tours/[destination]/[...packageSlug]` — catch-all (does **two** jobs)
`[...packageSlug]/page.tsx`
- **1 segment under India** (e.g. `/tours/india/kerala`) → an India **region/theme landing page**. Resolved via `getIndiaLandingPage(key)`; renders `TourRegionTemplate` with `BreadcrumbList` + `CollectionPage` JSON-LD.
- **2+ segments** (e.g. `/tours/india/kerala/4-day-explore`) → a **package detail page**. Resolved via `getPackageDetail(slug)`; renders `TourPackageDetailTemplate` with `Product` + `FAQPage` + `BreadcrumbList` JSON-LD.
- `generateStaticParams()` returns both: every package (destination derived from each JSON's `meta.canonicalUrl`) **and** every India landing key.
- **Guard:** serves a detail page only if `data.meta.canonicalUrl === /tours/<destination>/<slug>`; otherwise `notFound()`. This is the invariant in [CONVENTIONS.md](CONVENTIONS.md).

### 3.4 Routes that DON'T exist yet
`/tours` (index), `/blog`, `/about-us`, `/contact`, `/plan-my-trip`, `/incentive-travel`, and every non–(bali/india/thailand/sri-lanka/nepal) destination. The nav links to many of these (see [SEO.md](SEO.md) §broken links).

## 4. Data layer (`src/data/`)

Content is typed JSON, imported and registered in TypeScript index files. **Nothing is auto-discovered from the filesystem** — an unregistered JSON does not exist as a page.

### 4.1 Destination hubs — `tourPages/`
- `types.ts` — `TourPageData` interface (hero, why, zones, bestTime, tripLength, packages, whyBook, cta) + sub-types (`TourPackage`, `TourZone`, `TourHighlight`, `TourSeason`, `TripOption`, `TrustPoint`, `TourStat`).
- `bali.json`, `india.json`, `thailand.json`, `sri-lanka.json`, `nepal.json` — one per destination (**5 total**).
- `index.ts` — `tourPages` map, `tourSlugs`, `getTourPage(slug)`.

### 4.2 Package details — `tourPackages/`
- `india/*.json` — **63 registered India packages**. Filenames use `--` where the slug has `/` (e.g. `kerala--4-day-explore.json` ↔ key `kerala/4-day-explore`). One legacy file lives at the top level (`india-package-detail-chennai-super-saver.json` ↔ key `south-india/3-day-chennai-super-saver`).
- `index.ts` — imports every JSON, maps `"<region>/<slug>" → data`, exports `packageDetails`, `packageSlugs`, `getPackageDetail(slug)`.
- The shape is `PackageDetailData`, **exported from `src/components/tours/TourPackageDetailTemplate.tsx`** (meta, hero, quickFacts, inclusions, overview, highlights, itinerary, hotelOptions, whyBook, seoContent, faq, relatedPackages, cta). JSON files may also carry a `schema` block (not currently read by the template; route builds JSON-LD itself).

### 4.3 India landings — `india/regions.ts`
- `IndiaLandingPage` interface + two arrays: `REGIONS` (6: kerala, south-india, north-india, east-india, west-india, kashmir) and `THEMES` (3: golden-triangle, taj-mahal, varanasi) = **9 landing pages**.
- Each has a `select(packages)` pure function: regions filter by **slug prefix** (`startsWith("kerala/")`), themes filter by **keyword match** against name/slug/highlights.
- Exports `INDIA_LANDING_PAGES`, `getIndiaLandingPage(key)`, `getIndiaRegionCards()` (ordered cards for the India hub).

### 4.4 Legacy — `travelData.js`
`promoData` array of promo cards (older shape, MYR prices, `holidayidea.com.my` images) consumed by some homepage sections. Not part of the tours data model.

## 5. Templates (`src/components/tours/`)

| File | Renders | Notes |
|---|---|---|
| `TourDestinationTemplate.tsx` | `/tours/<dest>` hub | **Also exports `SectionLabel` and `PackageCard`** used by the other three templates. ~750 lines. |
| `TourAllPackagesTemplate.tsx` | `/tours/<dest>/all-packages` | Imports `PackageCard`, `SectionLabel`. |
| `TourRegionTemplate.tsx` | India region/theme landing | Imports `PackageCard`, `SectionLabel`. |
| `TourPackageDetailTemplate.tsx` | package detail | **Exports the `PackageDetailData` type.** Contains the client `InquiryForm` (WhatsApp deep-link, no backend) + `FaqAccordion` + an inclusion-icon SVG map. ~810 lines. |

All four are `"use client"` and use the same `fadeUp` framer-motion variant and Tailwind tokens.

## 6. Styling

- **Live theme** is in `src/app/index.css` via Tailwind v4 `@theme`:
  - `--color-primary: #FF0000`, `--color-primary-dark: #990000`, `--color-primary-hover: #0EA2B5`, `--color-teal-navy: #1B3A4A`, `--color-teal-light: #EBF9FC`.
  - `:root` also sets `--primary-color`/`--title-color` used by the custom button CSS.
- Custom CSS in the same file: `.btn-base/.btn-light/.btn-dark/.btn-transparent` (sliding hover fill), swiper pagination overrides, `@keyframes marquee` + `.animate-marquee`, `.bg-pattern` (uses `/images/category_bg_1.png`), `.dest-swiper` coverflow blur.
- **Fonts** (loaded in `layout.tsx` via `next/font/google`): Manrope → `--font-primary` (class `.font-primary`), Montez → `--font-secondary` (class `.font-secondary`), Montserrat → `--font-montserrat`.
- ⚠️ `src/constants/theme.ts` exports a *different* color set (`#e63946`, etc.) and is **not** the live theme. Treat as dead/legacy unless a component imports it. Do not "fix" colors there expecting site-wide effect.

## 7. Images

- `next/image` everywhere. **Remote hosts must be allow-listed** in `next.config.ts` — currently `images.unsplash.com` and `www.holidayidea.com.my` only.
- Local images live in `public/images/`; gallery images are referenced by numeric id (`/images/gallery/<id>.jpg`).
- **India package detail pages use local gallery images** (sourced from the live site by `pkgid`; see PROGRESS.md 2026-06-08). The India hub (`india.json`), `regions.ts`, other destinations, and the homepage still use Unsplash/remote.

## 8. Contact / business facts (appear throughout JSON)

- WhatsApp/phone: **+6019 336 4465** (`60193364465`). Email: **tours@dhesu.travel**.
- Address: *Level 2 and 3, Wisma Dhesu, No. 5 Jalan Bangsar Utama 3, 59000 Kuala Lumpur.*
- Currency **MYR (RM)**. Positioning: *"trusted since 1988"*, MATTA & IATA registered.
- Lead capture = WhatsApp deep links + `mailto:`. **There is no form backend.**
