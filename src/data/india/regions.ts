// ─── India region & theme landing pages ────────────────────────────────────────
// All package-selection logic and SEO copy for the nine India landing pages lives
// here so the route and templates stay thin. Regions select packages by slug
// prefix (e.g. "kerala/"); themes select by keyword match against the package
// name, highlights and slug.

import type { TourPackage } from "@/src/data/tourPages/types";

export interface IndiaLandingPage {
  /** URL segment, e.g. "kerala" or "golden-triangle". Page lives at /tours/india/{key}. */
  key: string;
  /** Human label used in breadcrumbs, headings and nav, e.g. "Delhi Agra Jaipur". */
  label: string;
  kind: "region" | "theme";
  /** One-line summary used on the India page "Explore by Region & Theme" cards. */
  blurb: string;
  /** Pure selector over the India packages.items array. */
  select: (packages: TourPackage[]) => TourPackage[];
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  canonicalUrl: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: string;
}

// ─── Selectors ──────────────────────────────────────────────────────────────────

const startsWith = (prefix: string) => (packages: TourPackage[]) =>
  packages.filter((p) => (p.slug ?? "").startsWith(prefix));

const matchesKeywords = (keywords: string[]) => (packages: TourPackage[]) =>
  packages.filter((p) => {
    const haystack = [p.name, p.slug ?? "", ...(p.highlights ?? [])]
      .join(" ")
      .toLowerCase();
    return keywords.some((k) => haystack.includes(k.toLowerCase()));
  });

// ─── Regions (by slug prefix) ───────────────────────────────────────────────────

export const REGIONS: IndiaLandingPage[] = [
  {
    key: "kerala",
    label: "Kerala",
    kind: "region",
    blurb: "Backwaters, Munnar tea hills and Fort Kochi. The slow, green south at its most restful.",
    select: startsWith("kerala/"),
    metaTitle: "Kerala Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Kerala with Dhesu Travel, trusted since 1988. Alleppey backwaters, Munnar tea hills and Fort Kochi, with English-speaking guides and transfers.",
    h1: "Kerala Tour Packages from Malaysia",
    intro:
      "There is a reason people describe Kerala as God's Own Country. The pace here is different, slower, greener, softer at the edges. A Kerala tour package from Malaysia takes you drifting through the Alleppey backwaters on a converted rice barge, past villages where life still runs to the rhythm of the water. Up in the hills, the tea estates of Munnar roll out in every shade of green and the air turns cool and clean. Down on the coast, Fort Kochi blends Portuguese churches, Chinese fishing nets and old spice warehouses into something wholly its own. Add a Kathakali performance, a plate of Keralan seafood and an Ayurvedic massage, and the appeal becomes obvious. Every Dhesu Kerala package, arranged with care since 1988, comes with English-speaking guides and airport transfers handled, so all you have to do is slow right down.",
    canonicalUrl: "/tours/india/kerala",
    ogTitle: "Kerala Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Backwaters, tea hills and Fort Kochi. Plan your Kerala trip with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/12929.jpg",
  },
  {
    key: "south-india",
    label: "South India",
    kind: "region",
    blurb: "Dravidian temples, Mysore palaces and the Nilgiri hills, reached by toy train through the forest.",
    select: startsWith("south-india/"),
    metaTitle: "South India Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Discover South India with Dhesu Travel, trusted since 1988. Dravidian temples, Mysore palaces and the Nilgiri hills, with guides and airport transfers.",
    h1: "South India Tour Packages from Malaysia",
    intro:
      "South India is the India that surprises first-time visitors. Ancient Dravidian temples with towering, sculpted gopurams. Palaces in Mysore lit up like jewellery boxes. Hill stations like Ooty reached by a toy train that creaks through eucalyptus forest. A South India tour package from Malaysia moves at a civilised pace through Tamil Nadu, Karnataka and beyond, where the food is fragrant, the coffee is strong and the welcome is warm. Wander the bazaars of Chennai, ride up into the Nilgiri Hills, and stand before the Brihadeeswara Temple in Thanjavur to feel the weight of a thousand years of history. It is cultural, colourful and rarely crowded with tourists. Dhesu has been arranging South India journeys since 1988, with English-speaking guides who know the temples, the routes and the right place for lunch, and airport transfers sorted from the moment you land.",
    canonicalUrl: "/tours/india/south-india",
    ogTitle: "South India Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Temples, palaces and hill stations. Plan your South India trip with Dhesu Travel, trusted since 1988.",
    ogImage:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&auto=format&fit=crop",
  },
  {
    key: "north-india",
    label: "North India",
    kind: "region",
    blurb: "The Taj Mahal, Jaipur forts, the Himalayas and the sacred Ganga. India at its most iconic.",
    select: startsWith("north-india/"),
    metaTitle: "North India Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "See North India with Dhesu Travel, trusted since 1988. The Taj Mahal, Jaipur forts, the Himalayas and Rishikesh, with English-speaking guides and transfers.",
    h1: "North India Tour Packages from Malaysia",
    intro:
      "North India is where most people picture India before they arrive. The Taj Mahal at sunrise. The forts and pink bazaars of Jaipur. The chaos and grandeur of Old Delhi. The Himalayas rising behind hill towns like Shimla and Manali, and the sacred Ganga at Haridwar and Rishikesh. A North India tour package from Malaysia can be as iconic or as off-beat as you like, from the classic Golden Triangle to snow at the Rohtang Pass or a desert safari in Rajasthan. It is loud, layered and endlessly photogenic, the kind of place that rewards curiosity at every turn. Dhesu has been sending Malaysians north since 1988. That means English-speaking guides who know their Mughal history, hotels with rooms that actually deliver the view, routes that dodge the worst of the traffic, and airport transfers handled, so the only thing left for you to do is take it all in.",
    canonicalUrl: "/tours/india/north-india",
    ogTitle: "North India Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Taj Mahal, Jaipur, the Himalayas and Rishikesh. Plan your North India trip with Dhesu Travel, trusted since 1988.",
    ogImage:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&auto=format&fit=crop",
  },
  {
    key: "east-india",
    label: "East India",
    kind: "region",
    blurb: "Kolkata's colonial grandeur, Bengali culture and heritage travel free of the tourist crush.",
    select: startsWith("east-india/"),
    metaTitle: "East India Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Visit East India with Dhesu Travel, trusted since 1988. Kolkata's colonial heritage, Victoria Memorial and Howrah Bridge, with guides and airport transfers.",
    h1: "East India Tour Packages from Malaysia",
    intro:
      "East India does not shout for attention, and that is exactly its charm. This is the India of Kolkata, the old capital of the British Raj, where grand colonial architecture sits beside yellow taxis, sweet shops and some of the warmest, most literary people in the country. An East India tour package from Malaysia brings you to the Victoria Memorial in white marble, the bustle of Howrah Bridge, the calm of Dakshineswar Temple and lanes that smell of street food and strong Bengali tea. It is heritage travel with real soul, refreshingly free of the tourist crush you find elsewhere. Whether you are drawn by history, culture or simply somewhere different, Dhesu has been arranging India journeys since 1988, with English-speaking guides who bring the stories to life and airport transfers taken care of from the moment you arrive.",
    canonicalUrl: "/tours/india/east-india",
    ogTitle: "East India Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Kolkata's colonial heritage and Bengali culture. Plan your East India trip with Dhesu Travel, trusted since 1988.",
    ogImage:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&auto=format&fit=crop",
  },
  {
    key: "west-india",
    label: "West India",
    kind: "region",
    blurb: "Mumbai and Bollywood, the Shirdi shrine, Nashik vineyards and the beaches of Goa.",
    select: startsWith("west-india/"),
    metaTitle: "West India Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Tour West India with Dhesu Travel, trusted since 1988. Mumbai and Bollywood, Shirdi, Nashik and Goa's beaches, with English-speaking guides and transfers.",
    h1: "West India Tour Packages from Malaysia",
    intro:
      "West India runs from the bright lights of Mumbai to the beaches of Goa and the quiet pull of the Shirdi shrine. A West India tour package from Malaysia can take you behind the scenes of a Bollywood studio, along Marine Drive at dusk, and through the Gateway of India before the crowds arrive. From there the region opens up: the devotional calm of Sai Baba's Shirdi and Shani Shingnapur, the vineyards around Nashik, and the palm-lined sands and Portuguese churches of Goa. It is a region of contrasts, energetic one moment and deeply peaceful the next. Dhesu has been arranging India travel since 1988, so every West India package comes with English-speaking guides who know the city and the shrines, sensible routes between them, and airport transfers handled, leaving you free to enjoy the mix.",
    canonicalUrl: "/tours/india/west-india",
    ogTitle: "West India Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Mumbai, Bollywood, Shirdi and Goa. Plan your West India trip with Dhesu Travel, trusted since 1988.",
    ogImage:
      "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?w=1200&auto=format&fit=crop",
  },
  {
    key: "kashmir",
    label: "Kashmir",
    kind: "region",
    blurb: "Dal Lake houseboats, the green meadows of Gulmarg and the pine valleys of Pahalgam.",
    select: startsWith("kashmir/"),
    metaTitle: "Kashmir Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Experience Kashmir with Dhesu Travel, trusted since 1988. Dal Lake houseboats, Gulmarg meadows and Pahalgam valleys, with guides and airport transfers.",
    h1: "Kashmir Tour Packages from Malaysia",
    intro:
      "Kashmir has a way of stopping people mid-sentence. A Kashmir tour package from Malaysia begins on Dal Lake, where wooden houseboats sit on still water and shikaras glide past at dawn. In summer, the meadows of Gulmarg turn an impossible green and the gondola climbs toward the snow line. In winter, the whole valley is white and the same slopes draw skiers. Pahalgam offers pine valleys and mountain rivers, while the Mughal gardens of Srinagar bloom in tidy terraces above the lake. It is cool when the plains are hot, beautiful in every season, and unlike anywhere else in India. Dhesu has been sending Malaysians to Kashmir since 1988, with trusted houseboat owners, English-speaking guides who know the valley, and airport transfers arranged, so you can simply settle in and let the most beautiful corner of India do the rest.",
    canonicalUrl: "/tours/india/kashmir",
    ogTitle: "Kashmir Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Dal Lake houseboats, Gulmarg and Pahalgam. Plan your Kashmir trip with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/14620.jpg",
  },
];

// ─── Themes (by keyword match) ──────────────────────────────────────────────────

export const THEMES: IndiaLandingPage[] = [
  {
    key: "golden-triangle",
    label: "Delhi Agra Jaipur",
    kind: "theme",
    blurb: "Delhi, Agra and Jaipur in one classic loop, the route most first-timers start with.",
    select: matchesKeywords(["Golden Triangle", "Delhi Agra Jaipur"]),
    metaTitle: "Delhi Agra Jaipur Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Travel Delhi Agra Jaipur with Dhesu Travel, trusted since 1988. The Golden Triangle, Taj Mahal at sunrise and Jaipur forts, with guides and transfers.",
    h1: "Delhi Agra Jaipur Tour Packages from Malaysia",
    intro:
      "The Golden Triangle is where most India journeys begin, and for good reason. A Delhi Agra Jaipur tour package from Malaysia links three unforgettable cities in one neat loop. Delhi sets the tone with its spice markets, Mughal monuments and the lanes of Chandni Chowk. Agra delivers the moment everyone comes for: the Taj Mahal at sunrise, turning from grey to gold as the sun lifts. Jaipur, the Pink City, finishes with hilltop forts, the City Palace and bazaars piled high with textiles and trinkets. It is the classic first-timer route, rich in history yet easy to travel, and it still takes your breath away in person. Dhesu has been running this circuit since 1988, with English-speaking guides who bring the history alive, hotels chosen for comfort, routes that beat the traffic, and airport transfers handled from start to finish.",
    canonicalUrl: "/tours/india/golden-triangle",
    ogTitle: "Delhi Agra Jaipur Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "The classic Golden Triangle of Delhi, Agra and Jaipur. Plan it with Dhesu Travel, trusted since 1988.",
    ogImage:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&auto=format&fit=crop",
  },
  {
    key: "taj-mahal",
    label: "Taj Mahal",
    kind: "theme",
    blurb: "Trips built around sunrise at the Taj Mahal, with Agra Fort and Fatehpur Sikri alongside.",
    select: matchesKeywords(["Taj Mahal"]),
    metaTitle: "Taj Mahal Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "See the Taj Mahal with Dhesu Travel, trusted since 1988. Sunrise at Agra, Agra Fort and Fatehpur Sikri, with English-speaking guides and airport transfers.",
    h1: "Taj Mahal Tour Packages from Malaysia",
    intro:
      "Some sights live up to the hype, and the Taj Mahal is one of them. A Taj Mahal tour package from Malaysia is built around that one extraordinary morning in Agra, when you watch the white marble shift colour with the rising sun and understand why it is called the greatest monument to love ever built. Around it, the trip fills out beautifully: the red sandstone of Agra Fort, the abandoned splendour of Fatehpur Sikri, and onward links to Delhi, Jaipur or even Kashmir, depending on how much time you have. Whether you want a short, focused trip or the Taj as the centrepiece of a longer journey, it never disappoints. Dhesu has been arranging Taj Mahal trips since 1988, with English-speaking guides, sunrise timings planned to avoid the crowds, comfortable hotels and airport transfers all taken care of.",
    canonicalUrl: "/tours/india/taj-mahal",
    ogTitle: "Taj Mahal Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Sunrise at the Taj Mahal, Agra Fort and Fatehpur Sikri. Plan your trip with Dhesu Travel, trusted since 1988.",
    ogImage:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1200&auto=format&fit=crop",
  },
  {
    key: "varanasi",
    label: "Varanasi",
    kind: "theme",
    blurb: "Dawn boat rides on the Ganga and the Ganga Aarti at dusk in one of earth's oldest cities.",
    select: matchesKeywords(["Varanasi"]),
    metaTitle: "Varanasi Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Discover Varanasi with Dhesu Travel, trusted since 1988. Ganga Aarti, sunrise boat rides and Sarnath, with English-speaking guides and airport transfers.",
    h1: "Varanasi Tour Packages from Malaysia",
    intro:
      "Varanasi is not a comfortable city, and that is the point. One of the oldest living cities on earth, it sits on the banks of the Ganga, where life and death play out openly along the ghats. A Varanasi tour package from Malaysia puts you on a boat at dawn, drifting past pilgrims bathing in the river as the sun comes up, and again at dusk for the Ganga Aarti at Dashashwamedh Ghat, a ceremony of fire, flowers and bells performed every single evening for centuries. Add Sarnath, where the Buddha gave his first sermon, and nearby Ayodhya, and the spiritual weight of it stays with you long after you leave. It is confronting, deeply real and impossible to forget. Dhesu has been guiding Malaysians here since 1988, with English-speaking guides, well-timed boat rides and airport transfers handled with care.",
    canonicalUrl: "/tours/india/varanasi",
    ogTitle: "Varanasi Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Ganga Aarti, sunrise boat rides and Sarnath. Plan your Varanasi trip with Dhesu Travel, trusted since 1988.",
    ogImage:
      "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&auto=format&fit=crop",
  },
];

// ─── Lookup helpers ─────────────────────────────────────────────────────────────

export const INDIA_LANDING_PAGES: IndiaLandingPage[] = [...REGIONS, ...THEMES];

const byKey: Record<string, IndiaLandingPage> = Object.fromEntries(
  INDIA_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a region (first) or theme by its URL segment. Undefined if neither. */
export function getIndiaLandingPage(key: string): IndiaLandingPage | undefined {
  return byKey[key];
}

// Display order for the India page region/theme nav strip.
const NAV_ORDER = [
  "kerala",
  "south-india",
  "north-india",
  "east-india",
  "golden-triangle",
  "taj-mahal",
  "kashmir",
  "west-india",
  "varanasi",
];

export interface IndiaRegionCard {
  label: string;
  href: string;
  blurb: string;
  kind: "region" | "theme";
}

/** Cards for the India landing page "Explore by Region & Theme" section, in display order. */
export function getIndiaRegionCards(): IndiaRegionCard[] {
  return NAV_ORDER.map((key) => byKey[key]).map((p) => ({
    label: p.label,
    href: p.canonicalUrl,
    blurb: p.blurb,
    kind: p.kind,
  }));
}
