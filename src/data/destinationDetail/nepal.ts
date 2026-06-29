// ─── Nepal region & theme landing pages ─────────────────────────────────────
// All package-selection logic and SEO copy for Nepal landing pages lives here
// so the route and templates stay thin. Regions select packages by slug
// prefix; themes select by keyword match against the package name and slug.

import type { TourPackage } from "@/src/data/tourPages/types";

export interface NepalLandingPage {
  /** URL segment, e.g. "kathmandu". Page lives at /tours/nepal/{key}. */
  key: string;
  /** Human label used in breadcrumbs, headings and nav. */
  label: string;
  kind: "region" | "theme";
  /** One-line summary used on the Nepal page region cards. */
  blurb: string;
  /** Pure selector over the Nepal packages.items array. */
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

export const NEPAL_REGIONS: NepalLandingPage[] = [
  {
    key: "kathmandu",
    label: "Kathmandu",
    kind: "region",
    blurb: "Ancient temples, UNESCO stupas and Himalayan sunrises from Nagarkot. Nepal's cultural capital.",
    select: startsWith("kathmandu/"),
    metaTitle: "Kathmandu Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Kathmandu with Dhesu Travel, trusted since 1988. Boudhanath Stupa, Pashupatinath, Swayambhunath and Nagarkot Himalayan sunrise, with private guides and airport transfers.",
    h1: "Kathmandu Tour Packages from Malaysia",
    intro:
      "Kathmandu is one of those cities that takes you completely by surprise. From a distance it sounds chaotic — and in parts it is — but every narrow lane opens into a courtyard with a temple carved over centuries, every hilltop has a stupa with painted watching eyes, and every dusk brings bells and incense smoke rising over the valley. A Kathmandu tour package from Malaysia puts you at the centre of it all. The sacred cremation ghats of Pashupatinath on the Bagmati River. The kora path around Boudhanath, one of the largest Buddhist stupas in the world, walked daily by monks and pilgrims. Swayambhunath on its hilltop with monkeys and prayer flags. Medieval Bhaktapur and Durbar Square exactly as they have been for six centuries. And above the valley, Nagarkot at 2,200 metres, where a clear morning brings the full Himalayan arc — Everest to the east, Annapurna to the west — turning gold as the sun rises. Dhesu has been arranging Himalayan journeys since 1988, with private guides, trusted accommodation and airport transfers organised from the moment you land.",
    canonicalUrl: "/tours/nepal/kathmandu",
    ogTitle: "Kathmandu Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Boudhanath, Pashupatinath and Nagarkot Himalayan sunrise. Plan your Kathmandu trip with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/47.jpg",
  },
  {
    key: "nagarkot",
    label: "Nagarkot",
    kind: "region",
    blurb: "A ridge at 2,200 metres with a 200-kilometre sweep of the Himalaya — Everest included — at sunrise.",
    select: startsWith("nagarkot/"),
    metaTitle: "Nagarkot Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Stay at Nagarkot with Dhesu Travel, trusted since 1988. Himalayan village lodge, golden sunrise over the peaks and Kathmandu valley sightseeing, with private guides and airport transfers.",
    h1: "Nagarkot Tour Packages from Malaysia",
    intro:
      "There are sunrises, and then there is Nagarkot. At 2,200 metres on the eastern rim of the Kathmandu Valley, the Nagarkot ridge offers one of the most extraordinary mountain panoramas in the world — a 200-kilometre arc of the Himalaya that includes Dhaulagiri, the Annapurnas, Manaslu, Ganesh Himal, Langtang and, on a perfect clear morning, the distant summit of Mount Everest itself. A Nagarkot tour package from Malaysia is built around that moment. You stay in a Himalayan village lodge on the ridge, walk the forest reserve trails and watch the sunset the evening you arrive. Then, before dawn, you are out with a cup of tea and the whole range emerging from darkness as the sky behind it shifts from black to deep blue to gold. Combined with the cultural heart of Kathmandu and medieval Bhaktapur, Nagarkot is the Himalayan experience that most short Nepal trips miss and most long Nepal trips remember most clearly. Dhesu has been arranging Himalayan journeys since 1988, with lodges chosen for the view, guides who know the ridge, and airport transfers handled.",
    canonicalUrl: "/tours/nepal/nagarkot",
    ogTitle: "Nagarkot Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Himalayan village lodge and golden sunrise over the peaks. Plan your Nagarkot trip with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/24.png",
  },
  {
    key: "kathmandu-pokhara",
    label: "Kathmandu & Pokhara",
    kind: "region",
    blurb: "Nepal's two great destinations in one: ancient temples in the capital, Phewa Lake and Annapurna sunrise in Pokhara.",
    select: startsWith("kathmandu-pokhara/"),
    metaTitle: "Kathmandu & Pokhara Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Kathmandu and Pokhara with Dhesu Travel, trusted since 1988. UNESCO temples, Nagarkot sunrise, Phewa Lake and Sarangkot, with private guides and airport transfers.",
    h1: "Kathmandu & Pokhara Tour Packages from Malaysia",
    intro:
      "The Kathmandu and Pokhara circuit is Nepal's most popular travel combination, and it is easy to understand why. These two cities are Nepal's essential experience — one ancient, urban and culturally intense, the other serene, lakeside and mountain-framed. A Kathmandu Pokhara tour package from Malaysia moves through both at the right pace. In Kathmandu, the UNESCO sites: the watching eyes of Boudhanath, the sacred ghats of Pashupatinath, the hilltop Monkey Temple of Swayambhunath and the medieval squares of Bhaktapur. In between, a night at Nagarkot for the Himalayan sunrise. In Pokhara, an early drive to Sarangkot as the Annapurna massif and Machapuchare ignite gold above the valley. A boat ride on Phewa Lake with the mountains reflected in still blue water. The World Peace Stupa on the hill across. It is a journey between two completely different versions of Nepal, each extraordinary on its own terms. Dhesu has been connecting Malaysian travellers with both since 1988, with private guides, private vehicles and every transfer handled.",
    canonicalUrl: "/tours/nepal/kathmandu-pokhara",
    ogTitle: "Kathmandu & Pokhara Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Nepal's two great cities: temples in Kathmandu and Phewa Lake in Pokhara. Plan your trip with Dhesu Travel, since 1988.",
    ogImage: "/images/gallery/43.jpg",
  },
  {
    key: "chitwan",
    label: "Chitwan",
    kind: "region",
    blurb: "UNESCO jungle national park with one-horned rhinos, jungle jeep safaris and Rapti River canoe rides.",
    select: startsWith("chitwan/"),
    metaTitle: "Chitwan National Park Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Visit Chitwan National Park with Dhesu Travel, trusted since 1988. Jeep safari, Rapti River canoe, one-horned rhino sightings and Tharu villages, with guides and airport transfers.",
    h1: "Chitwan National Park Tour Packages from Malaysia",
    intro:
      "Nepal is two completely different countries. The Himalayan north that most travellers see — temples, stupas, mountain views — and the subtropical south that most travellers miss: Chitwan National Park, a UNESCO World Heritage Site in the Terai lowlands where the mountains finally flatten into elephant grass and jungle. A Chitwan tour package from Malaysia adds this extraordinary dimension to the classic Nepal circuit. Jeep safaris through sal forest at dawn, when the one-horned rhinos are most active — Chitwan has the second-largest rhino population in the world. A dugout canoe drift down the Rapti River with gharial crocodiles on the sandbanks and kingfishers in the branches. Elephant bathing at the riverside. Evenings in a Tharu village learning how the indigenous people of the valley have lived alongside the wildlife for centuries. Combined with Kathmandu and Pokhara, Chitwan completes Nepal in a way that no Himalayan-only itinerary can. Dhesu has been running this full circuit since 1988, with wildlife guides who know the park and private vehicles that handle every inter-city transfer.",
    canonicalUrl: "/tours/nepal/chitwan",
    ogTitle: "Chitwan National Park Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Rhino safaris, Rapti River canoe and Tharu villages in Nepal's jungle lowlands. Plan with Dhesu Travel, since 1988.",
    ogImage: "/images/gallery/42.jpg",
  },
  {
    key: "muktinath",
    label: "Muktinath",
    kind: "region",
    blurb: "Sacred Himalayan shrine at 3,800m, revered by Hindus and Buddhists, above the ancient Mustang Valley.",
    select: startsWith("muktinath/"),
    metaTitle: "Muktinath Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Visit Muktinath with Dhesu Travel, trusted since 1988. Sacred temple at 3,800m, Kagbeni ancient village, Tato Pani hot springs and Pokhara, with private guides and airport transfers.",
    h1: "Muktinath Tour Packages from Malaysia",
    intro:
      "Above the reach of most Nepal itineraries, at 3,800 metres in the rain-shadow of the Annapurna range, stands Muktinath — one of the holiest pilgrimage sites in the Himalayan world. Sacred to both Hindus (as one of the 108 Vishnu Divya Desam shrines) and Tibetan Buddhists (as an important Dakini site), Muktinath draws pilgrims who have sometimes walked for weeks to reach it. A Muktinath tour package from Malaysia makes the journey achievable without the weeks of trekking — a short flight from Pokhara to the dramatic Jomsom airstrip, then a jeep ride up to the high plateau. At Muktinath, the 108 sacred water spouts, the eternal flame fed by natural gas seeps, the ancient Buddhist gompa and the vast empty landscape of the Mustang valley make this one of Nepal's most profound destinations. Below, the ancient walled village of Kagbeni guards the road to Upper Mustang. The Tato Pani hot springs offer a deeply welcome soak on the return journey. Combined with Pokhara and Kathmandu, a Muktinath journey is the most spiritually complete Nepal itinerary available. Dhesu has been arranging high-altitude Himalayan journeys since 1988.",
    canonicalUrl: "/tours/nepal/muktinath",
    ogTitle: "Muktinath Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Sacred Himalayan shrine at 3,800m and the ancient Mustang Valley. Plan your Muktinath trip with Dhesu Travel, since 1988.",
    ogImage: "/images/gallery/44.jpg",
  },
  {
    key: "lumbini",
    label: "Lumbini",
    kind: "region",
    blurb: "UNESCO World Heritage Site — the birthplace of the Buddha, with the ancient Maya Devi Temple and Ashoka Pillar.",
    select: startsWith("lumbini/"),
    metaTitle: "Lumbini Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Visit Lumbini with Dhesu Travel, trusted since 1988. Birthplace of the Buddha, Maya Devi Temple, Ashoka Pillar and World Monastery Zone, with private guides and airport transfers.",
    h1: "Lumbini Tour Packages from Malaysia",
    intro:
      "In the foothills of the Himalaya, in a garden that has been a place of pilgrimage for over two thousand years, stands the Maya Devi Temple — built over the exact spot where Prince Siddhartha Gautama was born in 623 BCE and later became the Buddha. A Lumbini tour package from Malaysia brings you to this UNESCO World Heritage Site, one of the most significant places in the Buddhist world. Walk the sacred garden at dawn, before the tour groups arrive, when the mist hangs over the Bodhi tree and the monks are chanting in the monasteries. See the Ashoka Pillar, erected by Emperor Ashoka in 249 BCE to mark the birthplace. Visit the World Monastery Zone, where 17 countries — Thailand, China, Sri Lanka, Japan, Germany, France, Myanmar, Tibet and more — have each built their own national Buddhist temple in their own architectural tradition. The result is one of the most remarkable collections of sacred architecture in the world. Lumbini combined with Kathmandu, Nagarkot and Pokhara makes for Nepal's most complete pilgrimage circuit. Dhesu has been arranging Buddhist pilgrimage journeys in Nepal since 1988, with experience handling both individual travellers and large group pilgrimages from Malaysian Buddhist associations.",
    canonicalUrl: "/tours/nepal/lumbini",
    ogTitle: "Lumbini Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "The birthplace of the Buddha and the UNESCO World Monastery Zone. Plan your Lumbini pilgrimage with Dhesu, since 1988.",
    ogImage: "/images/gallery/26.jpeg",
  },
];

// ─── Themes (by keyword match) ───────────────────────────────────────────────

export const NEPAL_THEMES: NepalLandingPage[] = [
  {
    key: "pokhara",
    label: "Pokhara",
    kind: "theme",
    blurb: "Phewa Lake, Sarangkot Annapurna sunrise and the World Peace Stupa. Nepal's most serene city.",
    select: matchesKeywords(["Pokhara", "Phewa", "Sarangkot", "Annapurna"]),
    metaTitle: "Pokhara Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Pokhara with Dhesu Travel, trusted since 1988. Phewa Lake, Sarangkot Annapurna sunrise and the World Peace Stupa, with private guides and airport transfers.",
    h1: "Pokhara Tour Packages from Malaysia",
    intro:
      "Pokhara is the Nepal that gets under your skin and refuses to leave. The first morning on Phewa Lake, with the Annapurna range reflected upside-down in still water and a wooden boat drifting across the blue — it is one of those images that stays. A Pokhara tour package from Malaysia brings you to this mountain-lake city, Nepal's most relaxed destination, and builds around it the sunrise experiences that make it extraordinary. Sarangkot, a hill above the town, is the classic spot for the Annapurna dawn — the whole massif including Machapuchare (the sacred Fishtail Mountain) turning from grey to gold as the valley below sleeps. The World Peace Stupa across the lake. The Davi's Falls for a dramatic subterranean waterfall. The Tibetan refugee settlement and its carpet weavers. And for the more energetic, the gateway to Nepal's greatest treks — the Annapurna Base Camp trail begins here. Pokhara is included in most of our Nepal packages as either the highlight or a half-way point, because it is the part of the trip that most Malaysian travellers remember longest. Dhesu has been arranging Pokhara visits since 1988.",
    canonicalUrl: "/tours/nepal/pokhara",
    ogTitle: "Pokhara Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Phewa Lake, Sarangkot Annapurna sunrise and the World Peace Stupa. Plan your Pokhara trip with Dhesu, since 1988.",
    ogImage: "/images/gallery/43.jpg",
  },
  {
    key: "muslim-friendly",
    label: "Muslim Friendly Nepal",
    kind: "theme",
    blurb: "Nepal's wonders with halal dining guidance, prayer-time awareness and a Muslim-aware private guide.",
    select: matchesKeywords(["Muslim Friendly", "Muslim"]),
    metaTitle: "Muslim Friendly Nepal Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Muslim friendly Nepal tour packages from Malaysia. Halal dining guidance, prayer-time awareness and private guides. Dhesu Travel, trusted since 1988.",
    h1: "Muslim Friendly Nepal Tour Packages from Malaysia",
    intro:
      "Nepal is increasingly popular with Malaysian Muslim travellers, and with good reason: the country is welcoming, the culture is fascinating, and the practical logistics — halal food, prayer times, private guiding — are entirely manageable with the right team. A Muslim-friendly Nepal tour package from Malaysia from Dhesu handles all of this. Kathmandu has a well-established Indian Muslim restaurant scene in Thamel and Lazimpat, with certified halal kitchens. Pokhara's lakeside has halal and vegetarian options. Our guides understand the importance of prayer schedules and build breaks into the itinerary accordingly — your private vehicle means you are never at the mercy of a group coach. We provide prayer times for your specific travel dates, the nearest masjid to each hotel, and qiblat direction information with every booking. Nepal's sacred Buddhist and Hindu sites are open to all respectful visitors, and walking the Boudhanath kora alongside monks and pilgrims, or standing at the Nagarkot ridge as the Himalaya turns gold, are experiences that transcend any single faith. Dhesu has been serving Malaysian Muslim travellers on Himalayan journeys since 1988.",
    canonicalUrl: "/tours/nepal/muslim-friendly",
    ogTitle: "Muslim Friendly Nepal Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Nepal for Muslim travellers: halal dining, prayer-time guidance and private tours. Plan with Dhesu Travel, since 1988.",
    ogImage: "/images/gallery/20.jpg",
  },
];

// ─── Lookup helpers ──────────────────────────────────────────────────────────

export const NEPAL_LANDING_PAGES: NepalLandingPage[] = [
  ...NEPAL_REGIONS,
  ...NEPAL_THEMES,
];

const byKey: Record<string, NepalLandingPage> = Object.fromEntries(
  NEPAL_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Nepal region or theme by its URL segment. Undefined if neither. */
export function getNepalLandingPage(key: string): NepalLandingPage | undefined {
  return byKey[key];
}

// Display order for the Nepal page region/theme nav strip.
const NAV_ORDER = [
  "kathmandu",
  "pokhara",
  "nagarkot",
  "kathmandu-pokhara",
  "chitwan",
  "muktinath",
  "lumbini",
  "muslim-friendly",
];

export interface NepalRegionCard {
  label: string;
  href: string;
  blurb: string;
  kind: "region" | "theme";
}

/** Cards for the Nepal landing page region/theme section, in display order. */
export function getNepalRegionCards(): NepalRegionCard[] {
  return NAV_ORDER.map((key) => byKey[key]).map((p) => ({
    label: p.label,
    href: p.canonicalUrl,
    blurb: p.blurb,
    kind: p.kind,
  }));
}
