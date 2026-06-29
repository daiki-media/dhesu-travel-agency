import type { TourPackage } from "@/src/data/tourPages/types";

export interface LaosLandingPage {
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

// ─── Regions ────────────────────────────────────────────────────────────────

export const LAOS_REGIONS: LaosLandingPage[] = [
  {
    key: "vientiane",
    label: "Vientiane",
    kind: "region",
    blurb:
      "Laos's golden capital on the Mekong. Pha That Luang stupa, Wat Si Saket's 6,840 Buddha images, Haw Phra Kaew royal temple and the Patuxai monument — the quietest, most charming capital in Southeast Asia.",
    select: startsWith("vientiane-"),
    metaTitle:
      "Vientiane Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Vientiane with Dhesu Travel, trusted since 1988. Pha That Luang golden stupa, Wat Si Saket, Haw Phra Kaew royal temple and Patuxai monument. 100% private Laos tours with daily departures from Malaysia.",
    h1: "Vientiane Tour Packages from Malaysia",
    intro:
      "Vientiane is Southeast Asia's most underestimated capital — a riverside city of golden stupas, French colonial boulevards and Buddhist temples that move at a pace entirely their own. Where Bangkok has noise and Phnom Penh has energy and Hanoi has urgency, Vientiane has something quieter and harder to describe: a Buddhist calm that has settled into the architecture, the streets, and the people who live in them.\n\nThe city sits on a broad bend of the Mekong River, facing Thailand across the water. The riverside promenade — Fa Ngum Road — is where Vientiane comes to walk in the evenings, when the sun drops behind the hills on the Thai side and the river goes copper and the street food vendors set up along the banks. It is one of the most relaxed evening scenes in Southeast Asia.\n\nFour landmarks define a proper visit to Vientiane, and all four can be covered meaningfully in a single afternoon.\n\nPha That Luang — the Great Stupa — is the most important Buddhist monument in Laos and the symbol that appears on the national seal. A gold-covered stupa 45 metres tall, it stands on the site of a 3rd-century Khmer temple and was founded in its current form by King Setthathirath in 1566. The stupa represents Mount Meru, the centre of the Buddhist universe. The surrounding cloister contains 30 smaller stupas, each representing a tenet of Buddhist law. In November, the That Luang Festival — the largest Buddhist celebration in Laos — fills the grounds with monks, pilgrims and golden lanterns.\n\nWat Si Saket, built in 1818, is the oldest wat in Vientiane to survive intact. The cloister walls contain niches holding 6,840 miniature Buddha images in silver, bronze and stone — some centuries old, some placed here in the last decade. The main hall holds a further 2,052 images. Walking the cloister takes time. Each image is slightly different and the accumulation of devotion the space represents is genuinely moving.\n\nHaw Phra Kaew was built in 1565 by King Setthathirath to house the Emerald Buddha — a sacred jade image now kept in Bangkok's Wat Phra Kaew after it was taken by the Siamese in 1779. The original temple was destroyed in 1828 and rebuilt in the 1930s as a national museum of Lao Buddhist art. The current collection includes lacquered thrones, gilded wooden screens, bronze and stone Buddha images, and 18th-century religious manuscripts.\n\nPatuxai — the Victory Gate — was built between 1957 and 1968, funded partly by American foreign aid intended for airport construction. The architect used the cement for a monument modelled on the Arc de Triomphe but decorated with traditional Lao Buddhist and Hindu motifs: apsaras, garuda, and naga in place of French classical reliefs. The interior is a maze of souvenir stalls and shrine rooms; the roof terrace gives the best views of Vientiane's broad, largely flat cityscape.\n\nEvery Laos package from Dhesu that visits Vientiane includes all four sites with a licensed English-speaking guide. Halal meal arrangements are available at no extra cost — Masjid Al-Azhar is located in Vientiane and can be included in the itinerary on request. All packages are privately arranged with flexible departure dates.",
    canonicalUrl: "/tours/laos/vientiane",
    ogTitle: "Vientiane Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Pha That Luang, Wat Si Saket and the quietest capital in Southeast Asia. Plan your Vientiane trip with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/16470.jpg",
  },
  {
    key: "luang-prabang",
    label: "Luang Prabang",
    kind: "region",
    blurb:
      "Southeast Asia's most beautifully preserved UNESCO city. Wat Xieng Thong, the Royal Palace Museum, Kuang Si Waterfall and Mount Phousi sunset — all on a peninsula between the Mekong and Nam Khan rivers.",
    select: startsWith("vientiane-"),
    metaTitle:
      "Luang Prabang Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Luang Prabang with Dhesu Travel, trusted since 1988. UNESCO World Heritage old town, Wat Xieng Thong, Royal Palace Museum, Kuang Si Waterfall and Mount Phousi sunset. Private Laos tours from Malaysia.",
    h1: "Luang Prabang Tour Packages from Malaysia",
    intro:
      "Luang Prabang has been called the most beautiful town in Southeast Asia — and unlike most superlatives attached to tourist destinations, this one holds up. UNESCO inscribed the city in 1995, citing the 'unique fusion of traditional Lao wooden architecture and European colonial buildings, set in a mountainous environment on the confluence of the Mekong and Nam Khan rivers.' Twenty-five years later, that fusion is still intact. The monks still walk in alms procession before dawn. The wooden shophouses are still occupied. The temples are still in daily use.\n\nThe city occupies a narrow peninsula between two rivers: the Mekong to the north and west, the Nam Khan to the south. The tip of the peninsula, where the rivers meet, is the oldest part of the town — a cluster of temples, French colonial buildings and traditional Lao wooden houses that have remained essentially unchanged since the 1950s. Walking the length of the main street — Sisavangvong Road — takes less than twenty minutes, but most people take considerably longer because there is too much to look at.\n\nWat Xieng Thong anchors the northern tip of the peninsula, beside the Mekong. Built by King Setthathirath in 1560 and never destroyed — while every other major temple in Laos was damaged or razed at least once — it is the oldest intact temple in the city and the finest example of Luang Prabang temple architecture. The sweeping curved roof descends in tiers almost to the ground level. The rear wall of the main hall is covered in the famous mosaic Tree of Life — Buddha's descent into the world represented as a spreading tree, set in coloured glass fragments on a black background. The royal funerary carriage house beside the main temple contains a gilded hearse 12 metres tall, used to transport royal remains to the cremation ground. The riverside gate faces the Mekong — early morning light through this gate is one of Luang Prabang's great photographs.\n\nThe Royal Palace Museum — Haw Kham, the golden palace — was built in 1904 during the French protectorate as a residence for King Sisavang Vong. It was converted to a national museum in 1975 after the abolition of the monarchy. The throne room is preserved intact with its original gilded furniture, French colonial fittings, and Lao mural paintings of village life. The Phra Bang audience hall houses the sacred Phra Bang Buddha image, a Khmer bronze from the 9th century that is the most important religious object in Laos. Rooms display gifts from foreign heads of state including John F. Kennedy and the Soviet government. The palace forecourt contains the last remaining royal cars.\n\nMount Phousi rises 100 metres above the peninsula from its exact centre. The name translates as 'sacred hill.' A stupa — That Chomsi — sits at the summit, visible from all directions across the city. The climb takes fifteen minutes via 328 stone steps. The view from the top encompasses the entire Luang Prabang basin: the Mekong curving through the valley, the Nam Khan joining it at the peninsula tip, the temple roofs, the French villas, and the mountains rising in all directions. At sunset, most of Luang Prabang makes this climb.\n\nKuang Si Waterfall, 29 kilometres south of town, is the city's essential half-day excursion. Three tiers of travertine cascades drop through jungle into natural pools in a colour that has to be seen to be believed — a turquoise-blue so vivid it looks artificially lit, produced by the high calcium carbonate content of the water. The main cascade drops 50 metres. The lower pools are suitable for swimming. The Free the Bears sanctuary at the base houses rescued Asiatic black bears. Go before 09:30 to beat the groups.\n\nEvery Luang Prabang package from Dhesu arrives via the Laos-China high-speed railway from Vientiane — a two-hour journey through karst mountains that is the most enjoyable train ride in mainland Southeast Asia. All packages are privately arranged with a licensed English-speaking guide. Halal meals can be arranged on request throughout the itinerary.",
    canonicalUrl: "/tours/laos/luang-prabang",
    ogTitle: "Luang Prabang Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "UNESCO Luang Prabang — Wat Xieng Thong, Kuang Si Waterfall and the finest sunset view in Laos. Plan your trip with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/16471.jpg",
  },
];

// ─── Combined list ────────────────────────────────────────────────────────────

export const LAOS_LANDING_PAGES: LaosLandingPage[] = [...LAOS_REGIONS];

const byKey: Record<string, LaosLandingPage> = Object.fromEntries(
  LAOS_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Laos region by its URL segment. Undefined if not found. */
export function getLaosLandingPage(key: string): LaosLandingPage | undefined {
  return byKey[key];
}

// Display order for the Laos hub page region nav strip.
const NAV_ORDER = ["vientiane", "luang-prabang"];

export interface LaosRegionCard {
  label: string;
  href: string;
  blurb: string;
  kind: "region" | "theme";
}

/** Cards for the Laos hub page region section, in display order. */
export function getLaosRegionCards(): LaosRegionCard[] {
  return NAV_ORDER.map((key) => byKey[key]).map((p) => ({
    label: p.label,
    href: p.canonicalUrl,
    blurb: p.blurb,
    kind: p.kind,
  }));
}
