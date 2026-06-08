# CLAUDE.md — Dhesu Travel & Tours

> Operating instructions for any AI agent (and humans) working in this repo.
> **Golden rule: follow the conventions already in the codebase. Do not invent new patterns, libraries, file layouts, or SEO mechanisms.**

This file is intentionally short. The full documentation lives in [`docs/`](docs/README.md) and is the source of truth:

| Doc | What it covers |
|---|---|
| [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) | Stack, folder layout, routing, data flow, components |
| [docs/CONVENTIONS.md](docs/CONVENTIONS.md) | Invariants + step-by-step recipes for every kind of edit |
| [docs/SEO.md](docs/SEO.md) | SEO machinery, what exists, gaps, and the rules |
| [docs/PROGRESS.md](docs/PROGRESS.md) | Running changelog — **update this after every change** |

## What this project is
A **Next.js 16 (App Router) + Tailwind v4** marketing/booking site for a Malaysian travel agency (Dhesu, "trusted since 1988"). Content is **data-as-JSON**: a few templates render typed JSON files. Currency MYR, audience Malaysia, leads go to WhatsApp.

## The non-negotiable rules (details in docs/CONVENTIONS.md)
1. **Content = typed JSON + a registry entry.** Folders are not auto-scanned. Add the import + map entry in the matching `index.ts` / `regions.ts`.
2. **Keep the trio in sync** for a package: registry key **=** `meta.slug` **=** `meta.canonicalUrl` as `/tours/<destination>/<key>`. The route 404s if they drift.
3. **SEO the existing way**: per-route `generateMetadata` (title/description/keywords/canonical/openGraph) **plus** inline JSON-LD `<script type="application/ld+json">` blocks. Copy the shape from existing routes.
4. **Reuse shared pieces**: `PackageCard` & `SectionLabel` (from `TourDestinationTemplate.tsx`), `Button`, the `PackageDetailData` type (from `TourPackageDetailTemplate.tsx`), the `fadeUp` framer-motion variants, and Tailwind theme tokens (`text-primary`, `bg-pattern`, `font-primary/secondary`).
5. **Images**: remote URLs only from hosts allow-listed in `next.config.ts`; local images under `public/`.
6. **After any change, update [docs/PROGRESS.md](docs/PROGRESS.md)** and reconcile the reference docs so they never contradict the code.

## Workflow for every task
1. Read the relevant `docs/` section first.
2. Make the change following the matching recipe in `docs/CONVENTIONS.md`.
3. Run the consistency checks (see docs/CONVENTIONS.md §Validation).
4. Add a dated entry to `docs/PROGRESS.md`; if the change alters architecture/conventions, edit those docs in the same commit so docs and code stay in lockstep.
