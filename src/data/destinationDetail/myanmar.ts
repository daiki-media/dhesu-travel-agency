import type { TourPackage } from "@/src/data/tourPages/types";

/**
 * Landing pages under /tours/myanmar.
 *
 * Myanmar is new to the site: the hub (tourPages/myanmar.json) and this file
 * were both added for the Holiday Idea content plan.
 */
export interface MyanmarLandingPage {
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

export const MYANMAR_THEMES: MyanmarLandingPage[] = [
  {
    // Holiday Idea sheet, row 19. Meta title and description are copied
    // verbatim; the body copy is still in the .docx named in `intro`.
    key: "myanmar-tour-travel-guide-2026",
    label: "Myanmar Travel Guide 2026",
    kind: "theme",
    blurb:
      "A planning guide to Myanmar for Malaysian travellers: Bagan's temple plain, Yangon's pagodas and Inle Lake, and how to combine them.",
    // A country-level guide speaks to the whole range, so it lists every
    // Myanmar package rather than filtering to a subset.
    select: (packages) => packages,
    primaryKeyword: "myanmar tour package malaysia",
    metaTitle:
      "Myanmar Tour Packages From Malaysia: Bagan's Temples & Cultural Heritage",
    metaDescription:
      "Myanmar tour packages from Malaysia: Bagan's ancient temples, Yangon's golden pagodas, and Inle Lake's unique culture in one itinerary.",
    h1: "Myanmar Tour Packages From Malaysia: Bagan's Temples & Cultural Heritage",
    // Opening paragraph of the draft; the rest of the article is in
    // src/data/guides/MyanmarGuide.tsx.
    intro:
      "Myanmar is still an extremely fascinating country in terms of its unique temples in Bagan, which can be considered one of the most spectacular archaeological sites in the world.",
    canonicalUrl: "/tours/myanmar/myanmar-tour-travel-guide-2026",
    ogTitle:
      "Myanmar Tour Packages From Malaysia: Bagan's Temples & Cultural Heritage",
    ogDescription:
      "Myanmar tour packages from Malaysia: Bagan's ancient temples, Yangon's golden pagodas, and Inle Lake's unique culture in one itinerary.",
    ogImage: "/images/guides/golden-rock.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const MYANMAR_LANDING_PAGES: MyanmarLandingPage[] = [...MYANMAR_THEMES];

const byKey: Record<string, MyanmarLandingPage> = Object.fromEntries(
  MYANMAR_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Myanmar region or theme by its URL segment. Undefined if neither. */
export function getMyanmarLandingPage(
  key: string,
): MyanmarLandingPage | undefined {
  return byKey[key];
}
