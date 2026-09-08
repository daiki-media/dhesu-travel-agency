import type { TourPackage } from "@/src/data/tourPages/types";

/**
 * Landing pages under /tours/australia.
 *
 * Australia is new to the site: the hub (tourPages/australia.json) and this
 * file were both added for the Holiday Idea content plan.
 */
export interface AustraliaLandingPage {
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

export const AUSTRALIA_THEMES: AustraliaLandingPage[] = [
  {
    // Holiday Idea sheet, row 24. Meta title and description are copied
    // verbatim; the body copy is still in the .docx named in `intro`.
    key: "australia-holiday-travel-guide-2026",
    label: "Australia Travel Guide 2026",
    kind: "theme",
    blurb:
      "A planning guide to Australia for Malaysian travellers: Sydney against Melbourne, family itineraries, and timing around school holidays.",
    // A country-level guide speaks to the whole range, so it lists every
    // Australia package rather than filtering to a subset.
    select: (packages) => packages,
    primaryKeyword: "australia holiday package malaysia",
    metaTitle:
      "Australia Holiday Packages From Malaysia: Sydney, Melbourne & Family Travel",
    metaDescription:
      "Australia holiday packages from Malaysia — Sydney, Melbourne, and family-friendly itineraries timed around school holiday periods.",
    h1: "Australia Holiday Packages From Malaysia: Sydney, Melbourne & Family Travel",
    // Opening paragraph of the draft; the rest of the article is in
    // src/data/guides/AustraliaGuide.tsx.
    intro:
      "Australia remains a consistently popular destination for Malaysian families, particularly during school holiday periods, thanks to its combination of iconic city landmarks, accessible nature experiences, and a relatively easy adjustment in terms of time zone and general comfort.",
    canonicalUrl: "/tours/australia/australia-holiday-travel-guide-2026",
    ogTitle:
      "Australia Holiday Packages From Malaysia: Sydney, Melbourne & Family Travel",
    ogDescription:
      "Australia holiday packages from Malaysia — Sydney, Melbourne, and family-friendly itineraries timed around school holiday periods.",
    ogImage: "/images/guides/sydney-opera-house.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const AUSTRALIA_LANDING_PAGES: AustraliaLandingPage[] = [
  ...AUSTRALIA_THEMES,
];

const byKey: Record<string, AustraliaLandingPage> = Object.fromEntries(
  AUSTRALIA_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up an Australia region or theme by its URL segment. Undefined if neither. */
export function getAustraliaLandingPage(
  key: string,
): AustraliaLandingPage | undefined {
  return byKey[key];
}
