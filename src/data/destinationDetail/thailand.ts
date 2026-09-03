import type { TourPackage } from "@/src/data/tourPages/types";

/**
 * Landing pages under /tours/thailand.
 *
 * Thailand has had a hub (tourPages/thailand.json) but no landing pages until
 * now — this file exists so the Holiday Idea guide has somewhere to live.
 * Region pages for Bangkok, Phuket, Krabi and Chiang Mai are still to come.
 */
export interface ThailandLandingPage {
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


// ─── Selectors ──────────────────────────────────────────────────────────────

const matchesKeywords = (keywords: string[]) => (packages: TourPackage[]) =>
  packages.filter((p) => {
    const haystack = [p.name, p.slug ?? "", ...(p.highlights ?? [])]
      .join(" ")
      .toLowerCase();
    return keywords.some((k) => haystack.includes(k.toLowerCase()));
  });

// ─── Themes ──────────────────────────────────────────────────────────────────

export const THAILAND_THEMES: ThailandLandingPage[] = [
  {
    // Holiday Idea sheet, row 12. Meta title and description are copied
    // verbatim; the body copy is still in the .docx named in `intro`.
    key: "phuket-krabi-holiday-guide-2026",
    label: "Phuket & Krabi Guide 2026",
    kind: "theme",
    blurb:
      "Southern Thailand's two headline islands in one trip: how Phuket and Krabi differ, how to island-hop between them, and how long to give each.",
    select: matchesKeywords(["Phuket", "Krabi", "Phi Phi", "James Bond Island"]),
    primaryKeyword: "phuket krabi holiday package",
    metaTitle:
      "Phuket & Krabi Holiday Packages: The Best of Southern Thailand's Islands",
    metaDescription:
      "Combine Phuket and Krabi in one island-hopping Thailand holiday. Beaches, island tours, and relaxed itineraries for Malaysian travellers.",
    h1: "Phuket & Krabi Holiday Packages: The Best of Southern Thailand's Islands",
    // Opening paragraph of the draft; the rest of the article is in
    // src/components/guides/PhuketKrabiGuide.tsx.
    intro:
      "Phuket and Krabi are among the most popular beach resorts in the south of Thailand, and although both of them make excellent stand-alone destinations, taking a combination tour of the two to enjoy greater variety has become the choice of many tourists coming from Malaysia.",
    canonicalUrl: "/tours/thailand/phuket-krabi-holiday-guide-2026",
    ogTitle:
      "Phuket & Krabi Holiday Packages: The Best of Southern Thailand's Islands",
    ogDescription:
      "Combine Phuket and Krabi in one island-hopping Thailand holiday. Beaches, island tours, and relaxed itineraries for Malaysian travellers.",
    ogImage: "/images/guides/phang-nga-longtail.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const THAILAND_LANDING_PAGES: ThailandLandingPage[] = [
  ...THAILAND_THEMES,
];

const byKey: Record<string, ThailandLandingPage> = Object.fromEntries(
  THAILAND_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Thailand region or theme by its URL segment. Undefined if neither. */
export function getThailandLandingPage(
  key: string,
): ThailandLandingPage | undefined {
  return byKey[key];
}
