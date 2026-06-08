# Dhesu Travel & Tours — Documentation

This folder is the **single source of truth** for how the site is built and how to change it safely. Keep it in lockstep with the code: if a change makes any statement here false, update the doc in the same change.

## Index

1. **[ARCHITECTURE.md](ARCHITECTURE.md)** — the map: stack, folders, routing, data flow, components, styling.
2. **[CONVENTIONS.md](CONVENTIONS.md)** — the rules: load-bearing invariants, naming, and copy-paste **recipes** for every common edit (add a package, a destination, an India landing page, a static page). Includes the validation checklist.
3. **[SEO.md](SEO.md)** — metadata, canonical URLs, JSON-LD, OpenGraph, sitemap/robots status, and the SEO rules every new page must satisfy.
4. **[PROGRESS.md](PROGRESS.md)** — dated changelog of everything we change. **Append here after every task.**

## How to use these docs

- **Before editing:** read the relevant section + the recipe in CONVENTIONS.md.
- **While editing:** follow the existing pattern exactly (golden rule — see [/CLAUDE.md](../CLAUDE.md)).
- **After editing:** run the validation checklist, then add a PROGRESS.md entry and fix any doc that the change made stale.

## Conventions for the docs themselves
- Keep statements **factual and current**. No aspirational text in ARCHITECTURE/CONVENTIONS/SEO — those describe what *is*. Plans/intentions go in PROGRESS.md.
- When counts change (e.g. number of packages), update the number in ARCHITECTURE.md and note it in PROGRESS.md.
- Cross-link with relative paths so links work on GitHub and locally.
