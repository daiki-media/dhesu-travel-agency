import type { TourPackage } from "@/src/data/tourPages/types";

/**
 * Landing pages under /tours/europe.
 *
 * Europe is new to the site: the hub (tourPages/europe.json) and this file were
 * both added for the Holiday Idea content plan. Note that Europe is a region
 * rather than a country — it sits alongside the countries in /tours because the
 * content plan treats it as one destination.
 */
export interface EuropeLandingPage {
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

export const EUROPE_THEMES: EuropeLandingPage[] = [
  {
    // Holiday Idea sheet, row 23. Meta title and description are copied
    // verbatim; the body copy is still in the .docx named in `intro`.
    key: "europe-tour-travel-guide-2026",
    label: "Europe Travel Guide 2026",
    kind: "theme",
    blurb:
      "A planning guide to Europe for Malaysian travellers: which multi-country routes work, what the Schengen visa involves, and how long each route needs.",
    // A destination-level guide speaks to the whole range, so it lists every
    // Europe package rather than filtering to a subset.
    select: (packages) => packages,
    primaryKeyword: "europe tour package from malaysia",
    metaTitle: "Europe Tour Packages From Malaysia: Multi-Country Group Tours",
    metaDescription:
      "Multi-country Europe tour packages from Malaysia, with Schengen visa guidance. Group tours covering major cities and iconic landmarks.",
    h1: "Europe Tour Packages From Malaysia: Multi-Country Group Tours",
    // Opening paragraph of the draft; the rest of the article is in
    // src/data/guides/EuropeGuide.tsx.
    intro:
      "A tour to Europe is usually a rare thing in the life of Malaysians, which is the very reason multi-nation group tours are still in fashion — they make it possible to visit many countries’ attractions in one trip without the hassle of organising it independently across different languages, currencies and modes of transport.",
    canonicalUrl: "/tours/europe/europe-tour-travel-guide-2026",
    ogTitle: "Europe Tour Packages From Malaysia: Multi-Country Group Tours",
    ogDescription:
      "Multi-country Europe tour packages from Malaysia, with Schengen visa guidance. Group tours covering major cities and iconic landmarks.",
    ogImage: "/images/guides/st-marks-square.jpg",
  },
  {
    // Holiday Idea sheet, row 27. That row is a single cross-destination page;
    // its Content Notes say "Cross-link Bali, Mauritius, Europe", so it is
    // split into one page per destination. The sheet's own title and
    // description describe the comparison, not any one destination, so the
    // strings below are NOT sheet copy.
    // TODO(seo): confirm this per-destination wording with the content team.
    key: "honeymoon-holiday-guide-2026",
    label: "Europe Honeymoons 2026",
    primaryKeyword: "europe honeymoon package malaysia",
    kind: "theme",
    blurb:
      "Europe for couples: which routes suit a honeymoon pace, and how to balance sightseeing with time to yourselves.",
    select: (packages) => packages,
    metaTitle: "Europe Honeymoon Packages From Malaysia: Romantic Routes 2026",
    metaDescription:
      "Europe honeymoon packages from Malaysia — romantic cities, scenic rail and coastal escapes. Compare Europe against Bali and Mauritius.",
    h1: "Europe Honeymoon Packages From Malaysia",
    // The draft's own Europe paragraph; the rest of the article is in
    // src/data/guides/EuropeHoneymoonGuide.tsx.
    intro:
      "For those couples that would like to see their honeymoon not only as a romantic escape but also as a vacation that can provide them with some cultural knowledge as well as give them the chance to see various attractions, a multi-nation European tour will provide something entirely different from the beach resort kind of honeymoon.",
    canonicalUrl: "/tours/europe/honeymoon-holiday-guide-2026",
    ogTitle: "Europe Honeymoon Packages From Malaysia: Romantic Routes 2026",
    ogDescription:
      "Europe honeymoon packages from Malaysia — romantic cities, scenic rail and coastal escapes. Compare Europe against Bali and Mauritius.",
    ogImage: "/images/guides/santorini-oia.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const EUROPE_LANDING_PAGES: EuropeLandingPage[] = [...EUROPE_THEMES];

const byKey: Record<string, EuropeLandingPage> = Object.fromEntries(
  EUROPE_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Europe region or theme by its URL segment. Undefined if neither. */
export function getEuropeLandingPage(
  key: string,
): EuropeLandingPage | undefined {
  return byKey[key];
}
