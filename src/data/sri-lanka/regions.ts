// ─── Sri Lanka destination landing pages ─────────────────────────────────────
// 7 destinations matching the live site, plus the Muslim-friendly theme.
// Selectors use pkgid so the filter is exact regardless of name wording.

import type { TourPackage } from "@/src/data/tourPages/types";

export interface SriLankaLandingPage {
  /** URL segment, e.g. "kandy". Page lives at /tours/sri-lanka/{key}. */
  key: string;
  /** Human label used in breadcrumbs, headings and nav. */
  label: string;
  kind: "region" | "theme";
  /** One-line summary used on the Sri Lanka page destination cards. */
  blurb: string;
  /** Pure selector over the Sri Lanka packages.items array. */
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

const matchesPkgIds =
  (ids: string[]) =>
  (packages: TourPackage[]): TourPackage[] =>
    packages.filter((p) => ids.includes(p.pkgid ?? ""));

// ─── Destinations ────────────────────────────────────────────────────────────

export const SRI_LANKA_REGIONS: SriLankaLandingPage[] = [
  {
    key: "kandy",
    label: "Kandy",
    kind: "region",
    blurb:
      "The last royal capital of Sri Lanka's ancient kings, set around a sacred lake with the Temple of the Tooth Relic at its heart.",
    select: matchesPkgIds(["422", "423", "424", "87", "425", "666", "2456", "2375", "667", "2194"]),
    metaTitle:
      "Kandy Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Kandy, Sri Lanka's last royal capital, with Dhesu Travel — trusted since 1988. Temple of the Sacred Tooth Relic, Kandyan cultural shows and the scenic mountain road from Colombo. Private tours from Malaysia.",
    h1: "Kandy Tour Packages from Malaysia",
    intro:
      "Kandy is where Sri Lanka feels oldest and most itself. The last royal capital of the ancient kings, set in a natural bowl of misty hills around a lake, with the Temple of the Sacred Tooth Relic at its centre — one of the most important Buddhist sites in the world. Pilgrims come from across Asia to walk the golden corridors and hear the drumming at the evening puja. The Kandy Lake reflects the roofline of the temple at dusk, and the lanes that wind uphill from the water are lined with spice shops, gem dealers and colonial-era rest houses that have barely changed in a century. The Pinnawala Elephant Orphanage is an hour west on the road from Colombo; the Royal Botanical Gardens at Peradeniya are five minutes from the city centre. The cultural show each evening — Kandyan drumming, fire-walking and traditional dance — is one of the finest performances in South Asia. Kandy sits at the heart of the island and nearly every Sri Lanka package from Dhesu passes through it. We have been arranging Kandy visits for Malaysian travellers since 1988.",
    canonicalUrl: "/tours/sri-lanka/kandy",
    ogTitle: "Kandy Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Temple of the Sacred Tooth Relic, Kandyan cultural shows and mountain scenery. Plan your Kandy visit with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/2168.jpg",
  },
  {
    key: "nuwara-eliya",
    label: "Nuwara Eliya",
    kind: "region",
    blurb:
      "Sri Lanka's cool hill station at 1,900 metres — endless tea estates, the Horton Plains cliff walk and the scenic mountain railway.",
    select: matchesPkgIds(["423", "424", "87", "425", "666", "2456", "2375", "667", "2194"]),
    metaTitle:
      "Nuwara Eliya Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Nuwara Eliya and Sri Lanka's Hill Country with Dhesu Travel — trusted since 1988. Tea estates, Horton Plains World's End cliff and the scenic mountain railway. Private tours from Malaysia.",
    h1: "Nuwara Eliya Tour Packages from Malaysia",
    intro:
      "Nuwara Eliya is the most surprising corner of Sri Lanka. At 1,868 metres above sea level, the air is cool enough for a sweater, the roads disappear into walls of tea bushes on both sides, and the British colonial bungalows are so well preserved that the place earned the nickname Little England. The drive up from Kandy alone — through hairpin bends, past waterfalls and the Ramboda Pass — is one of the finest mountain roads in South Asia. A Nuwara Eliya tour package from Malaysia builds around the best of the hill country: working tea estates where you walk the rows and learn how Ceylon tea goes from leaf to cup; the Horton Plains National Park for the World's End cliff walk, where the highland plateau drops 870 metres to the lowland jungle below; Gregory Lake and its rose gardens; and the scenic railway that winds through the Ella Gap with views that remain impossible to capture. The hill country combines naturally with Kandy below and Colombo as a gateway, and most of our packages do exactly that. Dhesu has been arranging hill country journeys since 1988.",
    canonicalUrl: "/tours/sri-lanka/nuwara-eliya",
    ogTitle: "Nuwara Eliya Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Tea estates, Horton Plains and the scenic mountain railway. Plan your Nuwara Eliya trip with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/423.jpg",
  },
  {
    key: "colombo",
    label: "Colombo",
    kind: "region",
    blurb:
      "Sri Lanka's layered capital — Dutch colonial quarters, Buddhist temples, spice bazaars and a waterfront promenade on the Indian Ocean.",
    select: (packages) => packages,
    metaTitle:
      "Colombo Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Colombo with Dhesu Travel — trusted since 1988. Dutch colonial heritage, Gangaramaya Temple, Pettah Bazaar and Galle Face Green waterfront. Private Sri Lanka tours from Malaysia.",
    h1: "Colombo Tour Packages from Malaysia",
    intro:
      "Colombo is the city most visitors arrive in and leave too quickly. It deserves more time. Layered over centuries of colonial rule — Portuguese, Dutch and British — and built on a Sinhalese and Tamil foundation that goes back millennia, Colombo is one of the most interesting cities in South Asia. The Old Dutch Hospital, now a restaurant and boutique complex, sits in the Fort district alongside colonial government buildings and the city's oldest mosque. In the Pettah Bazaar, one of the busiest markets in the Indian Ocean region, you can buy everything from spices to gems to mobile phones in a single city block. The Gangaramaya Temple is a layered accumulation of Buddhist architecture, art and devotional objects that tells the whole history of the city in one complex. The National Museum has the best collection of Sri Lankan antiquities outside of the island's archaeological sites. And Galle Face Green — the colonial-era promenade facing the Indian Ocean — is where all of Colombo comes at sunset for kite flying, street food and the first sea breeze of the evening. Every Sri Lanka package from Dhesu begins and ends in Colombo. Most include a city tour. Dhesu has been arranging Colombo visits since 1988.",
    canonicalUrl: "/tours/sri-lanka/colombo",
    ogTitle: "Colombo Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Dutch colonial heritage, Gangaramaya Temple and Galle Face Green. Plan your Colombo visit with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/425.jpg",
  },
  {
    key: "yala-national-park",
    label: "Yala National Park",
    kind: "region",
    blurb:
      "The world's highest wild leopard density, elephant herds and dawn jeep safaris through Sri Lanka's finest national park.",
    select: matchesPkgIds(["666", "2456", "2375"]),
    metaTitle:
      "Yala National Park Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Yala National Park wildlife safaris with Dhesu Travel — trusted since 1988. World-record leopard density, elephant herds and Kataragama Temple. Private tours from Malaysia.",
    h1: "Yala National Park Tour Packages from Malaysia",
    intro:
      "Yala National Park is one of the greatest wildlife experiences in Asia — not because it is the largest park, but because it has the highest density of wild leopards anywhere on earth. Dawn jeep safaris through the scrub forest and rocky outcrops regularly produce sightings: leopards resting in trees, elephant herds crossing the road, sloth bears ambling through the undergrowth, crocodiles on the riverbanks, and peacocks everywhere. The park is also a significant birding destination, with over 200 species. The sacred Kataragama temple complex, revered by Buddhists, Hindus and Muslims alike, sits just outside the park boundary. A Yala National Park tour package from Malaysia typically pairs the wildlife safari with the Cultural Triangle and Kandy en route, making the most of the drive south from Colombo through the lowland plains. Dhesu has been arranging Yala safaris since 1988 and we know the guides who know the leopard territories.",
    canonicalUrl: "/tours/sri-lanka/yala-national-park",
    ogTitle: "Yala National Park Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "World-record leopard density and elephant herds at Yala. Plan your wildlife safari with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/3370.png",
  },
  {
    key: "jaffna",
    label: "Jaffna",
    kind: "region",
    blurb:
      "The Tamil heartland of the north — Jaffna Fort, Nallur Kovil, Nainativu sacred island and a culture closer to Tamil Nadu than Colombo.",
    select: matchesPkgIds(["2455", "667", "2194"]),
    metaTitle:
      "Jaffna Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Jaffna and northern Sri Lanka with Dhesu Travel — trusted since 1988. Dutch Fort, Nallur Kandaswamy Kovil, Nainativu Island and Tamil culture. Private tours from Malaysia.",
    h1: "Jaffna Tour Packages from Malaysia",
    intro:
      "Jaffna is Sri Lanka's most culturally distinct destination — a city with its own language, cuisine, architecture and spiritual traditions that feel closer to Tamil Nadu across the Palk Strait than to Colombo five hours south. Most foreign visitors have never been here, which means the experience is entirely authentic. The 17th-century Dutch Fort at Jaffna is one of the largest surviving colonial fortifications in Asia — still intact, still imposing. The Nallur Kandaswamy Kovil is the most important Hindu temple in the north, with a gopuram tower of intricate stone carvings and a daily ritual attended by pilgrims in white dhotis and jasmine garlands. The Jaffna local market has the freshest seafood on the island and street food unlike anything in the south. The most extraordinary experience is the boat journey to Nainativu Island — where the Nagapooshani Amman Hindu temple and the ancient Nagadeepa Buddhist shrine share one small island in the Palk Strait, and pilgrims of both faiths arrive side by side. Anuradhapura, the first ancient capital of Sri Lanka, lies on the road south from Jaffna. Dhesu has been arranging northern Sri Lanka journeys since 1988.",
    canonicalUrl: "/tours/sri-lanka/jaffna",
    ogTitle: "Jaffna Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Jaffna Fort, Nainativu Island and Tamil heritage. Plan your northern Sri Lanka journey with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/11301.jpg",
  },
  {
    key: "sigiriya",
    label: "Sigiriya",
    kind: "region",
    blurb:
      "A 5th-century palace on a 200-metre granite monolith rising from the jungle — one of the most dramatic archaeological sites in Asia.",
    select: matchesPkgIds(["87", "2206", "2455", "2375"]),
    metaTitle:
      "Sigiriya Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Sigiriya Rock Fortress and Sri Lanka's Cultural Triangle with Dhesu Travel — trusted since 1988. Ancient frescoes, water gardens and Dambulla Cave Temple. Private tours from Malaysia.",
    h1: "Sigiriya Tour Packages from Malaysia",
    intro:
      "Sigiriya is the single most striking sight in Sri Lanka — a granite monolith rising 200 metres from the flat jungle floor, with a 5th-century palace built on top and a set of water gardens at the base that still function today. A Sri Lankan king carved staircases into the rock face, painted frescoes of celestial maidens on the cliff wall, and laid out a pleasure garden of symmetrical pools and fountains. All of it survives. The climb takes about an hour and the view from the top stretches to the horizon in every direction — forest, paddy fields, distant hills and the glint of reservoirs built by the same ancient civilisation. Dambulla Cave Temple, Sri Lanka's largest and best-preserved cave complex, is 20 minutes south of Sigiriya — 150 golden Buddha statues and ceiling paintings that cover 2,000 square metres. Together they form the core of the Cultural Triangle. Polonnaruwa, the second ancient capital with stone carvings that rival Angkor Wat, is close by. A Sigiriya tour package from Malaysia covers all of this with a private vehicle and an English-speaking guide who knows when to arrive before the crowds. Dhesu has been arranging Cultural Triangle journeys since 1988.",
    canonicalUrl: "/tours/sri-lanka/sigiriya",
    ogTitle: "Sigiriya Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Sigiriya Rock Fortress, Dambulla Cave Temple and Sri Lanka's Cultural Triangle. Plan your visit with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/86.jpg",
  },
  {
    key: "kataragama",
    label: "Kataragama",
    kind: "region",
    blurb:
      "One of Sri Lanka's most sacred pilgrimage sites — revered by Buddhists, Hindus and Muslims, beside the edge of Yala National Park.",
    select: matchesPkgIds(["425", "2375", "667", "2194"]),
    metaTitle:
      "Kataragama Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Visit Kataragama with Dhesu Travel — trusted since 1988. Sri Lanka's most sacred multi-faith pilgrimage complex beside Yala National Park. Private tours from Malaysia.",
    h1: "Kataragama Tour Packages from Malaysia",
    intro:
      "Kataragama is unlike anywhere else in Sri Lanka. This small town on the edge of the dry zone, just outside the boundary of Yala National Park, holds one of the most important pilgrimage sites in South Asia — a complex of shrines revered simultaneously by Buddhists, Hindus and Muslims who come to worship side by side. The Maha Devale, dedicated to the war god Skanda (Murugan), is the centre of the complex and the focus of the famous Esala Perehera procession in July and August, when elephants and fire-walkers circle the shrine. For Sri Lankan pilgrims, Kataragama carries the same weight that Mecca carries for Muslims or Jerusalem for Christians. As a visitor, the atmosphere — especially at dusk when the oil lamps are lit and the drumming begins — is one of the most affecting experiences on the island. The drive from Colombo follows the south coast through Galle and the beaches before turning inland through the elephant country of the south. Yala National Park is minutes from the town. Dhesu has been arranging southern Sri Lanka journeys since 1988.",
    canonicalUrl: "/tours/sri-lanka/kataragama",
    ogTitle: "Kataragama Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Sri Lanka's most sacred multi-faith pilgrimage town beside Yala. Plan your Kataragama visit with Dhesu Travel, trusted since 1988.",
    ogImage: "/images/gallery/13371.jpg",
  },
];

// ─── Themes ─────────────────────────────────────────────────────────────────

export const SRI_LANKA_THEMES: SriLankaLandingPage[] = [
  {
    key: "muslim-friendly",
    label: "Muslim Friendly Sri Lanka",
    kind: "theme",
    blurb:
      "Halal meals arranged, prayer times built into the schedule, and a private guide who understands Muslim traveller needs.",
    select: (packages) =>
      packages.filter((p) =>
        [p.name, ...(p.highlights ?? [])].join(" ").toLowerCase().includes("muslim"),
      ),
    metaTitle:
      "Muslim Friendly Sri Lanka Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Muslim friendly Sri Lanka tour packages from Malaysia. Halal meals, prayer-time awareness and private English-speaking guides. Dhesu Travel, trusted since 1988.",
    h1: "Muslim Friendly Sri Lanka Tour Packages from Malaysia",
    intro:
      "Sri Lanka is one of the most welcoming countries in Asia for Muslim travellers. Around 10 percent of the population is Muslim, and Sri Lanka's long history as a trading port means halal food is widely available, especially in Colombo, Kandy, Galle and along the coast. A Muslim-friendly Sri Lanka tour package from Dhesu handles all the practical details: halal meals confirmed at restaurants vetted for our Muslim clients, prayer times included in the daily schedule, and qibla direction information and the nearest masjid provided for each hotel. Your private vehicle means you are never at the mercy of a group coach timetable. Sri Lanka's Buddhist and Hindu sacred sites are open to respectful visitors of all faiths — climbing Sigiriya, walking the kora around Kandy Lake at dawn, or standing at the World's End cliff in Horton Plains are experiences that transcend any single tradition. Dhesu has been arranging Muslim-friendly Sri Lanka journeys for Malaysian travellers since 1988.",
    canonicalUrl: "/tours/sri-lanka/muslim-friendly",
    ogTitle:
      "Muslim Friendly Sri Lanka Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Halal meals, prayer-time scheduling and private tours. Plan your Muslim-friendly Sri Lanka trip with Dhesu Travel, since 1988.",
    ogImage: "/images/gallery/424.jpg",
  },
];

// ─── Lookup helpers ──────────────────────────────────────────────────────────

export const SRI_LANKA_LANDING_PAGES: SriLankaLandingPage[] = [
  ...SRI_LANKA_REGIONS,
  ...SRI_LANKA_THEMES,
];

const byKey: Record<string, SriLankaLandingPage> = Object.fromEntries(
  SRI_LANKA_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Sri Lanka destination or theme by its URL segment. */
export function getSriLankaLandingPage(
  key: string,
): SriLankaLandingPage | undefined {
  return byKey[key];
}

const NAV_ORDER = [
  "kandy",
  "nuwara-eliya",
  "colombo",
  "yala-national-park",
  "jaffna",
  "sigiriya",
  "kataragama",
  "muslim-friendly",
];

export interface SriLankaRegionCard {
  label: string;
  href: string;
  blurb: string;
  kind: "region" | "theme";
}

/** Cards for the Sri Lanka landing page destination section, in display order. */
export function getSriLankaRegionCards(): SriLankaRegionCard[] {
  return NAV_ORDER.map((key) => byKey[key]).map((p) => ({
    label: p.label,
    href: p.canonicalUrl,
    blurb: p.blurb,
    kind: p.kind,
  }));
}
