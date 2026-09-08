import type { TourPackage } from "@/src/data/tourPages/types";

/**
 * Landing pages under /tours/mauritius.
 *
 * Mauritius is new to the site: the hub (tourPages/mauritius.json) and this
 * file were both added for the Holiday Idea content plan.
 */
export interface MauritiusLandingPage {
  key: string;
  label: string;
  kind: "region" | "theme";
  blurb: string;
  select: (packages: TourPackage[]) => TourPackage[];
  primaryKeyword?: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

// ─── Themes ──────────────────────────────────────────────────────────────────

export const MAURITIUS_THEMES: MauritiusLandingPage[] = [
  {
    // Holiday Idea sheet, row 25. Meta title and description are copied
    // verbatim; the body copy is still in the .docx named in `intro`.
    key: "mauritius-honeymoon-travel-guide-2026",
    label: "Mauritius Travel Guide 2026",
    kind: "theme",
    blurb:
      "A planning guide to Mauritius for Malaysian couples: how the coasts differ, what to look for in a resort, and how long to stay.",
    // A destination-level guide speaks to the whole range, so it lists every
    // Mauritius package rather than filtering to a subset.
    select: (packages) => packages,
    primaryKeyword: "mauritius honeymoon package malaysia",
    metaTitle:
      "Mauritius Honeymoon Packages From Malaysia: Island Luxury for Couples",
    metaDescription:
      "Mauritius honeymoon packages from Malaysia — luxury beach resorts, private experiences, and island romance. Get a free, personalised quote today.",
    h1: "Mauritius Honeymoon Packages From Malaysia: Island Luxury for Couples",
    // Opening paragraph of the draft; the rest of the article is in
    // src/data/guides/MauritiusGuide.tsx.
    intro:
      "Mauritius is well-known internationally as one of the world’s top destinations for honeymoons. The attractiveness of Mauritius to honeymooning couples from Malaysia lies in the perfect combination of its turquoise lagoons, luxury resorts, and romantic privacy.",
    canonicalUrl: "/tours/mauritius/mauritius-honeymoon-travel-guide-2026",
    ogTitle:
      "Mauritius Honeymoon Packages From Malaysia: Island Luxury for Couples",
    ogDescription:
      "Mauritius honeymoon packages from Malaysia — luxury beach resorts, private experiences, and island romance. Get a free, personalised quote today.",
    ogImage: "/images/guides/le-morne-aerial.jpg",
  },
  {
    // Holiday Idea sheet, row 27. That row is a single cross-destination page;
    // its Content Notes say "Cross-link Bali, Mauritius, Europe", so it is
    // split into one page per destination. The sheet's own title and
    // description describe the comparison, not any one island, so the strings
    // below are NOT sheet copy.
    // TODO(seo): confirm this per-destination wording with the content team.
    // Note this sits close to row 25 above, which is already honeymoon-framed —
    // worth checking the two are not competing for the same query.
    key: "honeymoon-holiday-guide-2026",
    label: "Mauritius Honeymoons 2026",
    primaryKeyword: "mauritius honeymoon package malaysia",
    kind: "theme",
    blurb:
      "Mauritius for couples, compared against the alternatives: how it differs from a Bali or Europe honeymoon on cost, pace and travel time.",
    select: (packages) => packages,
    metaTitle: "Mauritius vs Bali vs Europe: Choosing Your Honeymoon 2026",
    metaDescription:
      "Comparing honeymoon destinations from Malaysia — how Mauritius measures up against Bali and Europe on cost, travel time and pace.",
    h1: "Choosing Your Honeymoon: Mauritius, Bali or Europe",
    // This page is framed as the comparison itself, so it opens with the
    // draft's own opening paragraph rather than one destination's section.
    // The rest of the article is in src/data/guides/MauritiusHoneymoonGuide.tsx.
    intro:
      "Selecting a honeymoon destination is one of the most important choices travelers make during their vacations. It is not just about the scenic beauty; it is about the pace and privacy of the place that will make it memorable.",
    canonicalUrl: "/tours/mauritius/honeymoon-holiday-guide-2026",
    ogTitle: "Mauritius vs Bali vs Europe: Choosing Your Honeymoon 2026",
    ogDescription:
      "Comparing honeymoon destinations from Malaysia — how Mauritius measures up against Bali and Europe on cost, travel time and pace.",
    ogImage: "/images/guides/mauritius-resort-pool.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const MAURITIUS_LANDING_PAGES: MauritiusLandingPage[] = [
  ...MAURITIUS_THEMES,
];

const byKey: Record<string, MauritiusLandingPage> = Object.fromEntries(
  MAURITIUS_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Mauritius region or theme by its URL segment. Undefined if neither. */
export function getMauritiusLandingPage(
  key: string,
): MauritiusLandingPage | undefined {
  return byKey[key];
}
