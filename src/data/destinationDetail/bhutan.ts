import type { TourPackage } from "@/src/data/tourPages/types";

export interface BhutanLandingPage {
  key: string;
  label: string;
  kind: "region" | "theme";
  blurb: string;
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

// ─── Selectors ──────────────────────────────────────────────────────────────

const startsWith = (prefix: string) => (packages: TourPackage[]) =>
  packages.filter((p) => (p.slug ?? "").startsWith(prefix));

const matchesKeywords = (keywords: string[]) => (packages: TourPackage[]) =>
  packages.filter((p) => {
    const haystack = [p.name, p.slug ?? "", ...(p.highlights ?? [])]
      .join(" ")
      .toLowerCase();
    return keywords.some((k) => haystack.includes(k.toLowerCase()));
  });

// ─── Regions (by slug prefix) ────────────────────────────────────────────────

export const BHUTAN_REGIONS: BhutanLandingPage[] = [
  {
    key: "paro-thimphu",
    label: "Paro & Thimphu",
    kind: "region",
    blurb:
      "Bhutan's two essential valleys — Paro's Tiger's Nest Monastery and Thimphu's sacred capital. The core of every Bhutan journey.",
    select: startsWith("paro-thimphu/"),
    metaTitle:
      "Paro & Thimphu Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Paro and Thimphu with Dhesu Travel, trusted since 1988. Tiger's Nest Monastery hike, Tashichho Dzong, Buddha Dordenma, farmhouse experience and traditional hot stone bath. 100% private tours, daily departures.",
    h1: "Paro & Thimphu Tour Packages from Malaysia",
    intro:
      "Every Bhutan journey begins in Paro and passes through Thimphu — the two valleys that hold the kingdom's most iconic landmarks, deepest cultural heritage, and most memorable experiences. A Paro and Thimphu tour package from Malaysia is where Bhutan begins.\n\nParo sits at 2,235 metres in a wide, fertile valley ringed by pine-covered hills. Most visitors arrive here — the airport runway is one of the most dramatic in the world, threading between mountain peaks as the plane descends to land. From Paro, the journey moves through orchard country and farmland to Thimphu, the world's only national capital without a single traffic light.\n\nIn Thimphu, the spiritual heart of the kingdom reveals itself: the 52-metre golden Buddha Dordenma on Kuenselphodrang Hill. The Tashichho Dzong — fortress-monastery and seat of government, built in 1641. The National Memorial Chorten, circumambulated daily by Buddhist devotees. The Motithang Takin Preserve, home to Bhutan's curious national animal. And for those who want to go deeper, the Wangditse Nature Trail — a forest hike to a ridge monastery that most tour groups never reach.\n\nIn Paro, the heritage layer is equally rich. Paro Rinpung Dzong. The Ta Dzong National Museum. Simtokha Dzong, the oldest in the country. A traditional farmhouse experience with archery and Ema Datshi cooking. And the hike that defines Bhutan for most visitors: three hours up through pine and cedar forest to Taktsang Monastery — Tiger's Nest — perched on a sheer cliff face 900 metres above the valley.\n\nDhesu has been arranging Bhutan journeys for Malaysian travellers since 1988. Our Bhutanese guides are trusted long-term partners, not contractors. Every package is 100% private, with daily departures and no group minimums.",
    canonicalUrl: "/tours/bhutan/paro-thimphu",
    ogTitle: "Paro & Thimphu Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Tiger's Nest Monastery, Tashichho Dzong and farmhouse experiences in Bhutan's two essential valleys. Plan your trip with Dhesu, since 1988.",
    ogImage: "/images/gallery/2447.jpg",
  }
];


export const BHUTAN_THEMES: BhutanLandingPage[] = [
  {
    key: "kathmandu",
    label: "Bhutan + Kathmandu",
    kind: "theme",
    blurb:
      "Extend your Bhutan journey into Nepal's ancient capital — Boudhanath, Pashupatinath and Bhaktapur in one Himalayan circuit.",
    select: matchesKeywords(["Kathmandu", "Nepal", "Himalayan"]),
    metaTitle:
      "Bhutan & Kathmandu Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Combine Bhutan and Kathmandu in one Himalayan journey with Dhesu Travel, trusted since 1988. Tiger's Nest Monastery, Tashichho Dzong, Boudhanath Stupa, Pashupatinath Temple and Bhaktapur Durbar Square. 100% private tours from Malaysia.",
    h1: "Bhutan & Kathmandu Tour Packages from Malaysia",
    intro:
      "Two Himalayan kingdoms. One journey. The 8-Day Bhutan & Nepal Himalayan package combines everything that makes Bhutan extraordinary — Tiger's Nest, Tashichho Dzong, the world's only capital without traffic lights — with the UNESCO world heritage concentration of Kathmandu Valley, where a short flight across the Himalayas opens up a completely different Buddhist world.\n\nBhutan is the world's last Vajrayana Buddhist kingdom. Kathmandu is Nepal's ancient capital, a city where more UNESCO World Heritage Sites are concentrated in a single valley than almost anywhere else on earth: Boudhanath Stupa, one of the largest Buddhist stupas in Asia; Pashupatinath Temple, the most sacred Hindu site in Nepal, on the banks of the Bagmati River; Bhaktapur Durbar Square, a medieval city-state of carved wood temples and cobblestone courts preserved with extraordinary care.\n\nThe combination works because the two destinations share a common Himalayan Buddhist culture while being genuinely distinct from each other. Bhutan is austere, controlled, deliberately preserved. Kathmandu is layered, ancient, and alive in a way that is entirely its own. Together they deliver something no single destination can: the full sweep of Himalayan civilisation, from the Tiger's Nest cliff face to the golden spires of Boudhanath at dusk.\n\nNote: the Paro–Kathmandu flight leg is arranged separately (domestic Bhutan Airlines or Royal Bhutan Airlines). Dhesu handles all ground arrangements in both countries, with trusted local guides in Bhutan and Kathmandu throughout.",
    canonicalUrl: "/tours/bhutan/kathmandu",
    ogTitle: "Bhutan & Kathmandu Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Tiger's Nest + Boudhanath Stupa in one Himalayan journey. Plan your Bhutan & Kathmandu trip with Dhesu, since 1988.",
    ogImage: "/images/gallery/15045.jpg",
  },
  {
    key: "nature-trails",
    label: "Nature Trails",
    kind: "theme",
    blurb:
      "Forest hikes through orchards and pine, prayer-flag ridges, and the legendary Tiger's Nest trail above Paro Valley.",
    select: matchesKeywords([
      "Trail",
      "Hike",
      "Nature",
      "Wangditse",
      "Forest",
      "Trek",
    ]),
    metaTitle:
      "Bhutan Nature Trails & Hiking from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Hike Bhutan's trails with Dhesu Travel, trusted since 1988. Tiger's Nest Monastery hike, Wangditse Nature Trail, forest walks through apple orchards and prayer-flag ridges. 100% private tours from Malaysia.",
    h1: "Bhutan Nature Trails & Hiking Packages from Malaysia",
    intro:
      "Bhutan's trails are inseparable from its culture. Every forest path leads to a monastery. Every ridge view reveals another valley of dzongs and farmhouses. Hiking in Bhutan is not just exercise — it is the most immersive way to understand how the kingdom sits within its landscape.\n\nThe Tiger's Nest hike is the one every visitor comes for. Three hours up through stands of blue pine and rhododendron, past prayer flag clusters and rock-carved mantras, to Taktsang Monastery perched on a sheer cliff face 900 metres above Paro Valley. The hike is graded moderate — achievable by most reasonably fit travellers — and the views improve with every turn of the trail. A café sits at the halfway point for rest and refreshment. The monastery at the top contains the cave where Guru Rinpoche meditated in the 8th century. It is both a physical challenge and a spiritual destination.\n\nThe Wangditse Nature Trail in Thimphu is the experience most visitors discover and describe as the hidden gem of their trip. A two-hour walk from Thimphu through apple orchards, traditional farmhouses, and pine forest draped in prayer flags, emerging at Wangditse Monastery on a ridge above the valley with panoramic views of the Thimphu sprawl below and the mountains beyond. The trail is gentle and suitable for all fitness levels.\n\nDhesu has been guiding Malaysian travellers on Bhutan's trails since 1988. Our guides know the best light for Tiger's Nest photographs, the quietest hours on the Wangditse trail, and how to pace the hike for every group.",
    canonicalUrl: "/tours/bhutan/nature-trails",
    ogTitle: "Bhutan Nature Trails & Hiking from Malaysia | Dhesu Travel",
    ogDescription:
      "Tiger's Nest hike and forest trails through Bhutan's prayer-flag valleys. Plan your Bhutan hiking trip with Dhesu, since 1988.",
    ogImage: "/images/gallery/2447.jpg",
  }
];

// ─── Lookup helpers ──────────────────────────────────────────────────────────

export const BHUTAN_LANDING_PAGES: BhutanLandingPage[] = [
  ...BHUTAN_REGIONS,
  ...BHUTAN_THEMES,
];

const byKey: Record<string, BhutanLandingPage> = Object.fromEntries(
  BHUTAN_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Bhutan region or theme by its URL segment. Undefined if neither. */
export function getBhutanLandingPage(
  key: string,
): BhutanLandingPage | undefined {
  return byKey[key];
}

// Display order for the Bhutan page region/theme nav strip.
const NAV_ORDER = [
  "paro-thimphu",
  "nature-trails",
  "kathmandu",
];

export interface BhutanRegionCard {
  label: string;
  href: string;
  blurb: string;
  kind: "region" | "theme";
}

/** Cards for the Bhutan landing page region/theme section, in display order. */
export function getBhutanRegionCards(): BhutanRegionCard[] {
  return NAV_ORDER.map((key) => byKey[key]).map((p) => ({
    label: p.label,
    href: p.canonicalUrl,
    blurb: p.blurb,
    kind: p.kind,
  }));
}
