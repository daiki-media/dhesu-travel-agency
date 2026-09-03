import type { TourPackage } from "@/src/data/tourPages/types";

/**
 * Landing pages under /tours/china.
 *
 * China is new to the site: the hub (tourPages/china.json) and this file were
 * both added for the Holiday Idea content plan. Region pages for Beijing,
 * Shanghai and Xi'an are still to come.
 */
export interface ChinaLandingPage {
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

export const CHINA_THEMES: ChinaLandingPage[] = [
  {
    // Holiday Idea sheet, row 17. Meta title and description are copied
    // verbatim; the body copy is still in the .docx named in `intro`.
    key: "china-tour-travel-guide-2026",
    label: "China Travel Guide 2026",
    kind: "theme",
    blurb:
      "A planning guide to China for Malaysian travellers: which cities to combine, what the visa involves, and how long each route really needs.",
    // A country-level guide speaks to the whole range, so it lists every
    // China package rather than filtering to a subset.
    select: (packages) => packages,
    primaryKeyword: "china tour package malaysia",
    metaTitle: "China Tour Packages From Malaysia: Major Cities & the Great Wall",
    metaDescription:
      "China tour packages from Malaysia: Beijing, Shanghai, the Great Wall, and more. Visa requirements and multi-city itinerary options explained.",
    h1: "China Tour Packages From Malaysia: Major Cities & the Great Wall",
    // Opening paragraph of the draft; the rest of the article is in
    // src/components/guides/ChinaGuide.tsx.
    intro:
      "From the history of the Forbidden City in Beijing and its world-famous Wall, to Shanghai’s stunning modern architecture, to the incredible natural scenery of Zhangjiajie and the ancient wonder of Xi’an, there is much to see and experience in China.",
    canonicalUrl: "/tours/china/china-tour-travel-guide-2026",
    ogTitle: "China Tour Packages From Malaysia: Major Cities & the Great Wall",
    ogDescription:
      "China tour packages from Malaysia: Beijing, Shanghai, the Great Wall, and more. Visa requirements and multi-city itinerary options explained.",
    ogImage: "/images/guides/forbidden-city.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const CHINA_LANDING_PAGES: ChinaLandingPage[] = [...CHINA_THEMES];

const byKey: Record<string, ChinaLandingPage> = Object.fromEntries(
  CHINA_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a China region or theme by its URL segment. Undefined if neither. */
export function getChinaLandingPage(key: string): ChinaLandingPage | undefined {
  return byKey[key];
}
