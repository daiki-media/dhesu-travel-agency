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
  priceNote: string;
  tag: string;
  tagColor: "red" | "green" | "orange" | "purple" | "pink" | "teal" | "blue";
  highlights: string[];
  image: string;
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
