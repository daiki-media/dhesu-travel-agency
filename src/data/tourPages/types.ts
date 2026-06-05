// ─── Shared schema for every /tours/{destination} hub page ──────────────────────
// One JSON file per destination implements this shape. The dynamic route at
// src/app/tours/[destination]/page.tsx loads the matching JSON and feeds it to
// the TourDestinationTemplate component.

export interface TourStat {
  value: string;
  label: string;
}

export interface TourHighlight {
  icon: string;
  title: string;
  body: string;
  image: string;
  places: string[];
}

export interface TourZone {
  name: string;
  tag: string;
  tagColor: "red" | "green" | "orange" | "blue" | "purple" | "teal" | "pink";
  description: string;
  image: string;
  vibe: string;
  /** Optional link to a matching region/theme landing page. */
  href?: string;
}

export interface TourSeason {
  name: string;
  months: string;
  badge: string;
  badgeColor: "red" | "blue";
  description: string;
  icon: "sun" | "rain";
}

export interface TripOption {
  days: string;
  label: string;
  description: string;
  recommended?: boolean;
}

export interface TourPackage {
  id: string;
  /** Clean SEO slug, e.g. "4-day-best-of-bali" → /tours/{destination}/{slug} */
  slug?: string;
  name: string;
  duration: string;
  price: string;
  /** Pre-discount price, shown struck through next to `price`, e.g. "RM478" */
  originalPrice?: string;
  priceNote: string;
  /** Savings copy, e.g. "Save RM159 per couple" */
  saving?: string;
  tag: string;
  tagColor:
    | "red"
    | "green"
    | "orange"
    | "purple"
    | "pink"
    | "teal"
    | "blue"
    | "gray"
    | "gold"
    | "saffron";
  highlights: string[];
  image: string;
  /** External booking/package ID from the source system */
  pkgid?: string;
  popular?: boolean;
}

export interface TrustPoint {
  icon: "shield" | "clock" | "map" | "tag";
  title: string;
  description: string;
}

export interface TourPageData {
  meta: {
    /** Display name used in copy and buttons, e.g. "Bali" */
    name: string;
    title: string;
    description: string;
    slug: string;
    targetKeyword: string;
  };
  hero: {
    badge: string;
    headline: string;
    headlineAccent: string;
    body: string;
    bgImage: string;
    stats: TourStat[];
  };
  why: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    highlights: TourHighlight[];
  };
  zones: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    areas: TourZone[];
  };
  bestTime: {
    sectionLabel: string;
    heading: string;
    body: string;
    seasons: TourSeason[];
  };
  tripLength: {
    sectionLabel: string;
    heading: string;
    options: TripOption[];
  };
  packages: {
    sectionLabel: string;
    heading: string;
    subheading: string;
    ctaNote: string;
    items: TourPackage[];
    viewAllPackage?: {
      text: string;
      link: string;
    };
  };
  whyBook: {
    sectionLabel: string;
    heading: string;
    body: string;
    points: TrustPoint[];
  };
  cta: {
    heading: string;
    subheading: string;
    phone: string;
    email: string;
    address: string;
    bgImage: string;
  };
}
