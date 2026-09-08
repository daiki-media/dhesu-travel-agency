import type { TourPackage } from "@/src/data/tourPages/types";
import type { IntroLink } from "./types";

/**
 * Landing pages under /tours/dubai.
 *
 * Dubai is new to the site: the hub (tourPages/dubai.json) and this file were
 * both added for the Holiday Idea content plan.
 */
export interface DubaiLandingPage {
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

export const DUBAI_THEMES: DubaiLandingPage[] = [
  {
    // Holiday Idea sheet, row 21. Meta title and description are copied
    // verbatim; the body copy is still in the .docx named in `intro`.
    key: "dubai-holiday-travel-guide-2026",
    label: "Dubai Travel Guide 2026",
    kind: "theme",
    blurb:
      "A planning guide to Dubai for Malaysian travellers: how family, honeymoon and luxury trips differ, and where the desert safari fits in.",
    // A country-level guide speaks to the whole range, so it lists every
    // Dubai package rather than filtering to a subset.
    select: (packages) => packages,
    primaryKeyword: "dubai holiday package malaysia",
    metaTitle:
      "Dubai Holiday Packages From Malaysia: Family, Honeymoon & Luxury Options",
    metaDescription:
      "Dubai holiday packages from Malaysia — family, honeymoon, and luxury options with desert safari add-ons. Get a free, personalised quote today.",
    h1: "Dubai Holiday Packages From Malaysia: Family, Honeymoon & Luxury Options",
    // Opening paragraph of the draft; the rest of the article is in
    // src/data/guides/DubaiGuide.tsx.
    intro:
      "Dubai has become one of the most multipurpose destinations for tourism among Malaysians regardless of whether the vacation is a family vacation with amusement parks, a honeymoon in a five star hotel, or simply a luxurious holiday vacation. Below is a description of some of the different holidays one can enjoy in Dubai and how to go about it.",
    introLink: { text: "enjoy in Dubai", href: "/tours/dubai" },
    canonicalUrl: "/tours/dubai/dubai-holiday-travel-guide-2026",
    ogTitle:
      "Dubai Holiday Packages From Malaysia: Family, Honeymoon & Luxury Options",
    ogDescription:
      "Dubai holiday packages from Malaysia — family, honeymoon, and luxury options with desert safari add-ons. Get a free, personalised quote today.",
    ogImage: "/images/guides/burj-khalifa-skyline.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const DUBAI_LANDING_PAGES: DubaiLandingPage[] = [...DUBAI_THEMES];

const byKey: Record<string, DubaiLandingPage> = Object.fromEntries(
  DUBAI_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Dubai region or theme by its URL segment. Undefined if neither. */
export function getDubaiLandingPage(key: string): DubaiLandingPage | undefined {
  return byKey[key];
}
