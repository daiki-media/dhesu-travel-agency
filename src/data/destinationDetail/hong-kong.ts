import type { TourPackage } from "@/src/data/tourPages/types";

/**
 * Landing pages under /tours/hong-kong.
 *
 * Hong Kong is new to the site: the hub (tourPages/hong-kong.json) and this
 * file were both added for the Holiday Idea content plan.
 */
export interface HongKongLandingPage {
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

export const HONG_KONG_THEMES: HongKongLandingPage[] = [
  {
    // Holiday Idea sheet, row 18. Meta title and description are copied
    // verbatim; the body copy is still in the .docx named in `intro`.
    key: "hong-kong-tour-travel-guide-2026",
    label: "Hong Kong Travel Guide 2026",
    kind: "theme",
    blurb:
      "A planning guide to Hong Kong for Malaysian travellers: Disneyland, the shopping districts, and how much fits into a short getaway.",
    // A country-level guide speaks to the whole range, so it lists every
    // Hong Kong package rather than filtering to a subset.
    select: (packages) => packages,
    primaryKeyword: "hong kong tour package malaysia",
    metaTitle:
      "Hong Kong Tour Packages From Malaysia: Disneyland, Family Fun & Shopping",
    metaDescription:
      "Hong Kong tour packages from Malaysia: Disneyland, family attractions, and shopping. Compact itineraries perfect for short getaways.",
    h1: "Hong Kong Tour Packages From Malaysia: Disneyland, Family Fun & Shopping",
    // Opening paragraph of the draft; the rest of the article is in
    // src/components/guides/HongKongGuide.tsx.
    intro:
      "The allure of Hong Kong for the average Malaysian holidaymaker, most especially family groups, is due to the city’s distinctive offering of state-of-the-art theme park entertainment, bustling shopping areas, and a convenient and easily-navigable urban layout.",
    canonicalUrl: "/tours/hong-kong/hong-kong-tour-travel-guide-2026",
    ogTitle:
      "Hong Kong Tour Packages From Malaysia: Disneyland, Family Fun & Shopping",
    ogDescription:
      "Hong Kong tour packages from Malaysia: Disneyland, family attractions, and shopping. Compact itineraries perfect for short getaways.",
    ogImage: "/images/guides/victoria-harbour.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const HONG_KONG_LANDING_PAGES: HongKongLandingPage[] = [
  ...HONG_KONG_THEMES,
];

const byKey: Record<string, HongKongLandingPage> = Object.fromEntries(
  HONG_KONG_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Hong Kong region or theme by its URL segment. Undefined if neither. */
export function getHongKongLandingPage(
  key: string,
): HongKongLandingPage | undefined {
  return byKey[key];
}
