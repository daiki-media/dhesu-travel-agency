import type { TourPackage } from "@/src/data/tourPages/types";
import type { GuidePageExtras, IntroLink } from "./types";

/**
 * Landing pages under /tours/china.
 *
 * China is new to the site: the hub (tourPages/china.json) and this file were
 * both added for the Holiday Idea content plan. Region pages for Beijing,
 * Shanghai and Xi'an are still to come.
 */
export interface ChinaLandingPage extends GuidePageExtras {
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
  /** The draft's own hyperlink inside `intro`, when it has one. */
  introLink?: IntroLink;
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
    // DHS-T3: the guide no longer targets a "package" keyword (that is the hub's),
    // so no keywords meta. Kept as "" because primaryKeyword marks a guide page
    // (getGuidePages); an empty value is not emitted by the route.
    primaryKeyword: "",
    metaTitle: "China Travel Guide for Malaysians: Entry, Weather, Tips",
    metaDescription:
      "Detailed China travel guide for Malaysians: visa-free entry guidelines, best seasons, top scenic destinations, and practical transit tips.",
    h1: "China Travel Guide for Malaysians: Entry, Weather, Tips",
    // DHS-T3: the previous creative headline line, kept as a sub-heading.
    subheading: "Major Cities & the Great Wall",
    // Opening paragraph of the draft; the rest of the article is in
    // src/data/guides/ChinaGuide.tsx.
    intro:
      "From the history of the Forbidden City in Beijing and its world-famous Wall, to Shanghai’s stunning modern architecture, to the incredible natural scenery of Zhangjiajie and the ancient wonder of Xi’an, there is much to see and experience in China. This guide takes a look at what there is to see in China for Malaysia’s travelers, visas required, and city-hopping itineraries.",
    introLink: { text: "China", href: "/tours/china" },
    // DHS-T3: intro link from the guide to its hub, exact anchor from the sheet.
    hubLine: {
      text: "Ready to book? See our China tour packages from Malaysia.",
      link: { text: "China tour packages from Malaysia", href: "/tours/china/" },
    },
    canonicalUrl: "/tours/china/china-tour-travel-guide-2026",
    ogTitle: "China Travel Guide for Malaysians: Entry, Weather, Tips",
    ogDescription:
      "Detailed China travel guide for Malaysians: visa-free entry guidelines, best seasons, top scenic destinations, and practical transit tips.",
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
