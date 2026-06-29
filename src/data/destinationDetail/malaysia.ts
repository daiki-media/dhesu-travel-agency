import type { TourPackage } from "@/src/data/tourPages/types";

export interface MalaysiaLandingPage {
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

export const MALAYSIA_REGIONS: MalaysiaLandingPage[] = [
  {
    key: "sabah",
    label: "Sabah",
    kind: "region",
    blurb:
      "Malaysian Borneo's most visited state. Kota Kinabalu's island-dotted bay, UNESCO Kinabalu National Park, the cool highland town of Kundasang at 6,000 feet, and five ethnic tribes in one cultural village — all within 90 minutes of the city.",
    select: startsWith("sabah/"),
    metaTitle:
      "Sabah Tour Packages from Kuala Lumpur | Dhesu Travel & Tours",
    metaDescription:
      "Explore Sabah, Malaysian Borneo with Dhesu Travel, trusted since 1988. Kota Kinabalu island hopping, UNESCO Kinabalu National Park, Kundasang highlands, Mari Mari Cultural Village. 100% private tours, from RM498.",
    h1: "Sabah Tour Packages — Malaysian Borneo",
    intro:
      "Sabah occupies the northeastern corner of Borneo — the world's third-largest island — and packs more natural and cultural diversity into one state than most countries can claim. Within 90 minutes of Kota Kinabalu International Airport you can be standing in UNESCO-listed cloud forest at 1,500 metres, snorkelling on coral reefs in one of Malaysia's oldest marine parks, looking at Mount Kinabalu across a valley from a highland farm at 1,800 metres, or sitting inside a reconstruction of an indigenous Sabah longhouse while a Dusun tribesman demonstrates traditional fire-starting.\n\nKota Kinabalu — KK to everyone who lives there — is the state capital and the only city. It faces west across a bay scattered with islands, and the sunset from the KK Waterfront or Tanjung Aru beach is among the most reliably spectacular in Malaysia. The city itself is compact and walkable: the Filipino Handicraft Market, the waterfront night market, the Signal Hill lookout, and the Sabah State Museum can be covered on foot. But the real Sabah begins outside the city.\n\nTunku Abdul Rahman National Park — Malaysia's first marine national park, established in 1974 — comprises five islands 15 to 40 minutes by boat from the Jesselton Jetty in the city centre. Manukan Island has the best beach: a kilometre of white sand on the western shore, with snorkelling on healthy hard and soft coral reefs immediately off the beach. Sapi Island adds the Coral Flyer — a 250-metre zipline strung 20 metres above the water between Sapi and neighbouring Gaya Island, with a top speed of 60 km/h. Both islands can be combined in a single day. Gaya Island — the largest in the park — has a sandbar at low tide where wild proboscis monkeys come down from the jungle to play on the exposed sandbanks.\n\nMount Kinabalu at 4,095 metres is the highest peak between the Himalayas and Papua New Guinea. The surrounding Kinabalu National Park — inscribed as a UNESCO World Heritage Site in 2000 — protects one of the most biodiverse ecosystems on Earth: 5,000 plant species (including the world's largest known flower, Rafflesia arnoldii), 326 bird species, and more than 100 mammal species. A guided nature trail through the park's lower slopes — the Silau-Silau Trail and the Pitcher Plant Trail — passes through montane oak forest, cloud forest, and the extraordinary world of carnivorous Nepenthes pitcher plants. The trail does not require a permit and is included in all Dhesu Sabah packages.\n\nKundasang is the highland town that Sabah keeps mostly to itself. At 1,800 metres in the Crocker Range directly opposite Mount Kinabalu across the valley, the town's primary draw is one of the most dramatic views in Malaysia: granite peaks rising 2,000 metres above a green valley floor, with highland vegetable farms and dairy cattle in the middle distance. Desa Cow Farm — a working dairy farm established in the 1990s to produce fresh milk for the local market — has become one of Sabah's most photographed sites because of the combination of Frisian cattle, New Zealand-style highland pasture, and Mount Kinabalu directly behind. The temperature at Kundasang drops to 15–18°C at night — bring a jacket.\n\nSosodikon Hill, a 15-minute drive from Kundasang town, is a rounded grassy hill at around 1,800 metres that offers arguably the best accessible sunrise viewpoint in Sabah. The Mount Kinabalu massif turns pink, then orange, then golden as the sun rises behind and beside it, with the highland valley below still in pre-dawn shadow. A pre-dawn drive from Kundasang hotel, arriving by 05:30, gives the best light.\n\nMari Mari Cultural Village, 25 minutes from Kota Kinabalu, brings together the five major indigenous peoples of Sabah in a single site. The Dusun (Sabah's largest indigenous group, historically cultivators and the original Kinabalu people), the Rungus (longhouse builders from the Kudat peninsula), the Lundayeh (highland farmers from the Borneo interior), the Bajau (the Sea People — boat-builders and fishermen of the Sulu Sea), and the Murut (interior forest peoples who maintained the last headhunting traditions in Sabah until the early 20th century) each have an authentic longhouse built by tribal descendants on site. Demonstrations include blowpipe shooting with traditional bamboo darts, fire-starting by friction, traditional tattoo art, rice wine brewing, and the Murut Lansaran — a community trampoline made from split bamboo strips, used historically for ritual celebrations. Lunch and dinner are included in full-day programmes.\n\nEvery Sabah package from Dhesu is 100% private — your own driver-guide, your own air-conditioned vehicle, your own schedule. Halal meals are standard throughout. All entrance fees, park permits, and island boat transfers are included in the stated price. Group discounts are available from three adults.\n\nPackages depart from Kota Kinabalu International Airport, which is served by direct flights from Kuala Lumpur (1 hour 15 minutes), Singapore (2.5 hours), and major Malaysian cities.",
    canonicalUrl: "/tours/malaysia/sabah",
    ogTitle: "Sabah Tour Packages from KL | Dhesu Travel & Tours",
    ogDescription:
      "Kota Kinabalu islands, UNESCO Kinabalu Park, Kundasang highlands and Mari Mari Cultural Village. Private Sabah tours from RM498 per person with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/14253.jpg",
  },
  {
    key: "sarawak",
    label: "Sarawak",
    kind: "region",
    blurb:
      "Malaysian Borneo's largest and least-visited state. Kuching's colonial waterfront, Bako National Park's proboscis monkeys, UNESCO Gunung Mulu cave systems, and Iban longhouses on the Skrang River. Custom packages available on request.",
    select: startsWith("sarawak/"),
    metaTitle:
      "Sarawak Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Sarawak, Malaysian Borneo with Dhesu Travel, trusted since 1988. Kuching city, Bako National Park, Gunung Mulu caves, Iban longhouse river tours. Custom itineraries available on request.",
    h1: "Sarawak Tour Packages — Malaysian Borneo",
    intro:
      "Sarawak is Malaysia's largest state by area — bigger than Peninsular Malaysia — and among its least visited. It occupies the southwestern portion of Borneo, stretching from the Malay border near Brunei in the north to the Indonesian state of Kalimantan in the south and east. The capital, Kuching, sits on the Sarawak River 30 kilometres from the South China Sea and manages the remarkable feat of being simultaneously a functioning city with a sophisticated food scene, a well-preserved colonial waterfront, and an immediate gateway to some of the most intact primary rainforest in Southeast Asia.\n\nThe name Sarawak is most associated in Malaysian history with the White Rajahs — the Brooke dynasty that governed the territory as a personal kingdom from 1841 to 1946. James Brooke, a British adventurer who helped quell a rebellion for the Sultan of Brunei, was rewarded with the title Rajah of Sarawak. His family ruled the territory for three generations, building a colonial administration, suppressing piracy and headhunting, and protecting the indigenous Iban and Dayak peoples from the depredations of the Dutch colonial government across the border in Kalimantan. The Fort Margherita museum in Kuching, built by Charles Brooke in 1879, preserves this history in some detail.\n\nBako National Park, 37 kilometres from Kuching and accessible by a 25-minute boat ride from Bako village, is the oldest national park in Sarawak and one of the most accessible wildlife viewing destinations in Borneo. The park protects 27 square kilometres of coastal primary forest at the mouth of the Sarawak River. Proboscis monkeys — the extraordinary large-nosed primates endemic to Borneo — live in groups along the forest edge and can be seen from the main boardwalk trails in the early morning and evening. Silver langurs, long-tailed macaques, bearded pigs, and monitor lizards are common. The park also protects pitcher plants of several species including Nepenthes gracilis and Nepenthes rafflesiana growing naturally along the sandstone plateau trails.\n\nGunung Mulu National Park, a four-seat Twin Otter flight or a two-day river journey from Miri, contains the most spectacular cave systems in the world. The Sarawak Chamber — discovered in 1980 — is the world's largest known underground chamber by area: 700 metres long, 400 metres wide, and 70 metres high. The entire Kuala Lumpur International Airport main terminal could fit inside it, with room to spare. The Deer Cave system contains the world's largest cave passage: 2.2 kilometres long, 174 metres wide, and 122 metres high. Every evening at dusk, between 2 and 3.5 million wrinkle-lipped bats spiral out of the Deer Cave entrance in a column that takes 40 minutes to empty — one of the great wildlife spectacles of Asia. Mulu National Park was inscribed as a UNESCO World Heritage Site in 2000.\n\nIban longhouse stays on the Skrang, Lemanak, and Batang Ai river systems bring travellers directly into the living culture of Sarawak's largest indigenous group. The Iban — formerly called Sea Dayak by the colonial administration — are the most numerous of Borneo's indigenous peoples and the ones who maintained the most elaborate warrior culture, including headhunting traditions that persisted in some remote areas until the 1930s. Traditional Iban longhouses on the river systems remain inhabited communities, not reconstructions. A visit includes a welcome ceremony with tuak rice wine, a guided tour of the longhouse interior, traditional weaving and beadwork demonstrations, cooking over open fires, and overnight stays on bamboo sleeping platforms — an experience that is genuinely different from anything available in Peninsular Malaysia.\n\nSarawak packages from Dhesu are arranged on request and built around your specific interests, travel dates, and preferred style of accommodation. The destination has a range from comfortable eco-lodges and Kuching boutique hotels to basic longhouse homestays and national park chalets. Contact us to discuss options.",
    canonicalUrl: "/tours/malaysia/sarawak",
    ogTitle: "Sarawak Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Kuching's colonial waterfront, Bako National Park proboscis monkeys, UNESCO Mulu caves and Iban longhouse river tours. Custom Sarawak packages with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/14252.jpg",
  },
];

// ─── Combined list ────────────────────────────────────────────────────────────

export const MALAYSIA_LANDING_PAGES: MalaysiaLandingPage[] = [
  ...MALAYSIA_REGIONS,
];

const byKey: Record<string, MalaysiaLandingPage> = Object.fromEntries(
  MALAYSIA_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Malaysia region by its URL segment. Undefined if not found. */
export function getMalaysiaLandingPage(
  key: string,
): MalaysiaLandingPage | undefined {
  return byKey[key];
}

// Display order for the Malaysia hub page region nav strip.
const NAV_ORDER = ["sabah", "sarawak"];

export interface MalaysiaRegionCard {
  label: string;
  href: string;
  blurb: string;
  kind: "region" | "theme";
}

/** Cards for the Malaysia hub page region section, in display order. */
export function getMalaysiaRegionCards(): MalaysiaRegionCard[] {
  return NAV_ORDER.map((key) => byKey[key]).map((p) => ({
    label: p.label,
    href: p.canonicalUrl,
    blurb: p.blurb,
    kind: p.kind,
  }));
}
