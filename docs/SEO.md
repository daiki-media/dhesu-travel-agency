# SEO

> What SEO mechanisms exist, what's missing, and the rules new pages must follow.
> Last reconciled with code / audited: **2026-06-08**.

## 1. What's implemented (the pattern to copy)

Every tour route does all of this — replicate it for new pages.

### 1.1 Per-route metadata (`generateMetadata`)
Returns: `title`, `description`, `keywords`, `alternates.canonical`, and `openGraph` (`title`, `description`, `url`, `images:[{url}]`, `type:"website"`). Sourced from the page's JSON `meta` (or, for India landings, the `IndiaLandingPage` object).

### 1.2 JSON-LD structured data (inline `<script type="application/ld+json">`)
| Page type | Schemas emitted |
|---|---|
| Package detail (`/tours/<dest>/<...>`) | `Product` (with `offers` in MYR), `FAQPage` (from `faq.items`), `BreadcrumbList` (from `hero.breadcrumb`) |
| India region/theme landing (`/tours/india/<key>`) | `BreadcrumbList`, `CollectionPage` (ItemList of selected packages, with `offers` where price exists) |

> Built inline in the route files with `JSON.stringify`. The `schema` block present in some package JSONs is **not** currently read — the route constructs the JSON-LD itself. If you start consuming the JSON `schema`, document it here.

### 1.3 Root metadata
`src/app/layout.tsx` sets a global default `title`/`description` and `<html lang="en">`.

### 1.4 Static generation
All tour pages are pre-rendered (`generateStaticParams`) → fully crawlable static HTML.

## 2. Gaps (present absence — only add if explicitly requested)

| Missing | Effect | Notes |
|---|---|---|
| `metadataBase` | Relative canonical/OG URLs (`/tours/...`, `/images/...`) aren't expanded to absolute; Next logs a build warning; social unfurls may be incomplete. | One line in `layout.tsx`: `metadataBase: new URL("https://dhesu.travel")`. **Convention today = absent**; if added, switch canonicals consciously and note in PROGRESS.md. |
| `src/app/sitemap.ts` | No sitemap → slower/partial indexing. | Can be generated from `tourSlugs`, `packageSlugs`, `INDIA_LANDING_PAGES`. |
| `src/app/robots.ts` | No robots directives / sitemap pointer. | |
| Twitter card / OG image dimensions / per-page `lang` | Minor polish. | |

## 3. Known broken links (pre-existing — do not add more; fix only when asked)

The nav (`NavbarData.ts`) advertises pages that don't exist yet. As of the audit:

- **`/tours` (index) has no `page.tsx`** → the top-level "Destinations" and "Tour Packages" nav items 404.
- **Unbuilt destination hubs** linked in nav: indonesia, vietnam, cambodia, malaysia, philippines, laos, southeast-asia, bhutan, maldives, dubai-uae, egypt, africa, turkey-greece, china, south-korea, japan, australia, europe, canada.
- **Unbuilt "By Interest" pages**: honeymoon-packages, muslim-friendly-tours, group-tours, all-inclusive-holidays.
- **Unbuilt package links**: all 5 Bali links + all 5 Indonesia links in the "Tour Packages" mega-menu.
- **`/tours/india/spiritual-india`** — linked in nav but **not** a key in `regions.ts` (so it 404s).
- **Non-tour pages with no route**: `/blog` (+ 6 article links), `/about-us`, `/contact`, `/plan-my-trip`, `/incentive-travel`.

**Pages that DO resolve today:** `/`, `/tours/{bali,india,thailand,sri-lanka,nepal}`, those hubs' `/all-packages`, the **9** India landing pages, and the **63** India package detail pages.

## 4. Rules for new pages (checklist)

- [ ] `generateMetadata` (or `metadata`) with title, description, keywords, canonical, OpenGraph — matching existing routes.
- [ ] Appropriate JSON-LD for the page kind, built the same inline way.
- [ ] Canonical + OG URLs use the same relative-path style as existing routes.
- [ ] Only link to it from nav once the route resolves (avoid creating new broken links).
- [ ] Images via `next/image` from local `public/` or an allow-listed host.
- [ ] FAQ content lives in `faq.items` so the FAQ rich result populates.
- [ ] Add a PROGRESS.md entry; if you touch the SEO mechanism, update this file.
