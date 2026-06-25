import type { TourPackage } from "@/src/data/tourPages/types";

export interface CambodiaLandingPage {
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

export const CAMBODIA_REGIONS: CambodiaLandingPage[] = [
  {
    key: "siem-reap",
    label: "Siem Reap",
    kind: "region",
    blurb:
      "Gateway to the Angkor Archaeological Park. Ancient temples, Tonle Sap lake, Pub Street nightlife and the sacred Kulen Mountain. Every Cambodia journey starts here.",
    select: startsWith("siem-reap/"),
    metaTitle:
      "Siem Reap Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Siem Reap with Dhesu Travel, trusted since 1988. Angkor Wat temple circuit, Tonle Sap lake cruise, Phnom Kulen National Park, River of a Thousand Lingas and Pub Street. 100% private tours, daily departures from Malaysia.",
    h1: "Siem Reap Tour Packages from Malaysia",
    intro:
      "Siem Reap is where Cambodia begins. Every tour package from Malaysia that visits the country passes through this city — and for good reason. Siem Reap sits at the edge of the Angkor Archaeological Park, the largest collection of religious monuments on earth, and it anchors one of the most extraordinary travel experiences in Southeast Asia.\n\nThe city itself is more than a staging post for temples. Siem Reap has its own rhythm: the old French quarter with tree-lined streets and colonial shophouses, the Old Market with its stalls of silk and spices, Artisan D'Angkor where traditional Khmer craftsmanship is kept alive, and Pub Street where the evenings go on longer than planned. The Royal Gardens, the Preah Ang Chek and Preah Ang Chorm Shrine — the Sisters Temple — and Wat Preah Prom Rath are all within the city and worth half a day on arrival.\n\nBut Siem Reap is most famous for what lies just beyond it. A short tuk-tuk ride north opens the Angkor complex: Angkor Wat itself, built by Khmer King Suryavarman II in the early 12th century and covering more than 400 acres; the great walled city of Angkor Thom with its five gates guarded by 54 towers of gods and demons; the Bayon with its 200 serenely smiling stone faces; Ta Prohm, where fig tree roots split ancient walls in the scene that became Tomb Raider; Pre Rup, the pyramid temple where sunset crowds gather on the upper tiers to watch the light change over the jungle.\n\nFor those who want more than the main circuit, Siem Reap has two outstanding additions. Tonle Sap Lake — Southeast Asia's largest freshwater lake — lies 15 kilometres south of the city. A boat cruise takes you through Chong Kneas into a world of floating villages, floating schools and floating markets that has existed here for generations. Phnom Kulen National Park, a half-day drive north, is the sacred mountain where the Khmer Empire was born in AD 802. The River of a Thousand Lingas flows here with Hindu deities carved into the sandstone riverbed. A giant reclining Buddha sits at the summit. Waterfalls drop through jungle you can swim in.\n\nDhesu has been arranging Siem Reap packages for Malaysian travellers since 1988. Halal and vegetarian meals can be arranged at no extra cost. Mosque visits — Masjid AN NEAKMAH is in Siem Reap — are included on request. All packages are 100% private with daily departures.",
    canonicalUrl: "/tours/cambodia/siem-reap",
    ogTitle: "Siem Reap Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Angkor Wat, Tonle Sap lake cruise and the sacred Kulen Mountain. Plan your Siem Reap trip with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/14632.jpg",
  },
  {
    key: "phnom-penh",
    label: "Phnom Penh",
    kind: "region",
    blurb:
      "Cambodia's riverside capital where the Mekong meets the Tonle Sap. Royal Palace, Silver Pagoda, the Toul Sleng Museum and a sunset cruise on the Mekong.",
    select: startsWith("siem-reap-phnom-penh/"),
    metaTitle:
      "Phnom Penh Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Explore Phnom Penh with Dhesu Travel, trusted since 1988. Royal Palace, Silver Pagoda, Toul Sleng Genocide Museum, Mekong River sunset cruise and Siem Reap temple circuit. 100% private tours from Malaysia.",
    h1: "Phnom Penh Tour Packages from Malaysia",
    intro:
      "Phnom Penh sits at one of the great river confluences of Asia, where the Mekong and the Tonle Sap meet in a wide expanse of brown water that swells enormously in the monsoon season and drops back each dry season, driving the rhythms of Cambodian life. The city the French called the Pearl of Asia is layered, complex and more rewarding the longer you stay in it.\n\nThe riverfront is where most visitors begin. A wide esplanade lined with parks, restaurants and bars runs south from the Royal Palace, with views across the water to the opposite bank and, on clear evenings, some of the finest sunset light in Southeast Asia. Behind the esplanade, the Royal Palace compound contains some of the kingdom's most important buildings. The Silver Pagoda — so called for its floor of 5,000 silver tiles weighing one tonne each — houses a 17th-century emerald Buddha and a life-size solid gold Buddha studded with 9,584 diamonds. The surrounding walls are painted with a 600-panel mural of the Reamker, Cambodia's version of the Ramayana.\n\nA short walk north, Wat Phnom sits atop the only hill in the city — a small artificial mound, but the highest point in Phnom Penh and the origin of the capital's name. The legend of Madame Penh, who found four Buddha statues washed up on a tree trunk in the river and built a sanctuary here in 1372, is the founding story of the city. Nearby, Wat Ounalom — established that same year — is the centre of Cambodian Buddhism and the seat of the country's Buddhist patriarch.\n\nToul Sleng Genocide Museum is the site that defines modern Cambodian history. The former Tuol Svay Prey High School was converted by the Khmer Rouge into Security Prison S-21 between 1975 and 1979. Of the estimated 17,000 people held here, fewer than a dozen survived. The museum holds photographs, records and preserved cells exactly as they were found by Vietnamese forces in 1979. It is a difficult visit and an essential one.\n\nThe Russian Market in the south of the city is the best market in Phnom Penh for silk, silverwork, handicrafts and local food. The Central Market — a 1930s French-colonial building with a cross-shaped dome — stocks everything from food to jewellery in a vast covered hall. The Independence Monument, built in 1958 to mark independence from France, is modelled on the towers of Angkor Wat.\n\nFor most packages from Malaysia, Phnom Penh is reached from Siem Reap by tourist express bus (approximately six hours) or by domestic flight. The journey by road passes through the Cambodian countryside — rice fields, sugar palms, traditional wooden houses on stilts — with a stop at Skuon Market, where fried tarantulas are the famous local snack.\n\nEvery Phnom Penh package from Dhesu includes a Mekong River sunset cruise, departing from the riverfront and passing Diamond Island, fishing villages and stilted river communities as the city lights come on. It is consistently the highlight guests mention last when they describe the trip.\n\nDhesu has been arranging Cambodia packages for Malaysian travellers since 1988. Halal and vegetarian meals can be arranged at no extra cost. Masjid Al-Serkal is located in Phnom Penh and can be included in the itinerary on request. All packages are 100% private with daily departures.",
    canonicalUrl: "/tours/cambodia/phnom-penh",
    ogTitle: "Phnom Penh Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Royal Palace, Toul Sleng Museum and a Mekong sunset cruise. Plan your Phnom Penh trip with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/16413.jpeg",
  },
];

// ─── Themes ──────────────────────────────────────────────────────────────────

export const CAMBODIA_THEMES: CambodiaLandingPage[] = [
  {
    key: "angkor-wat",
    label: "Angkor Wat",
    kind: "theme",
    blurb:
      "The largest religious monument ever built. A full-day guided circuit through Angkor Wat, Angkor Thom, the Bayon, Ta Prohm and the Pre Rup sunset temple.",
    select: matchesKeywords([
      "Angkor Wat",
      "Angkor Thom",
      "Bayon",
      "Ta Prohm",
      "Khmer Empire",
      "Angkor",
    ]),
    metaTitle:
      "Angkor Wat Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Visit Angkor Wat with Dhesu Travel, trusted since 1988. Full-day guided circuit: Angkor Wat, Angkor Thom, Bayon Temple, Ta Prohm (Tomb Raider), Pre Rup sunset, Banteay Kdei and more. 100% private tours from Malaysia.",
    h1: "Angkor Wat Tour Packages from Malaysia",
    intro:
      "Angkor Wat is the reason most people come to Cambodia. The largest religious monument ever built — 400 acres of stone galleries, towers, moats and libraries constructed in the early 12th century by Khmer King Suryavarman II — stands at the centre of an archaeological complex so vast that a full day barely covers its main circuit. Every Cambodia tour package from Malaysia that includes Siem Reap includes at least one full day here. It is never enough.\n\nThe main temple of Angkor Wat faces west — unusual for a Hindu temple, which traditionally faces east. The approach is a 350-metre causeway across the moat, the profile of the five lotus towers rising ahead of you in the morning light. Inside, the outer gallery walls are covered in some of the most detailed bas-reliefs in the world: 800 metres of carved stone narrative depicting scenes from Hindu mythology, the battle of Kurukshetra, and the army of Suryavarman II in procession. The central tower, reached by steep stairs, stands 65 metres above the surrounding plain and was the earthly representation of Mount Meru, home of the gods.\n\nAngkor Thom, two kilometres north, is not a temple but a walled royal city covering nine square kilometres — larger than medieval Paris at its height. Five gates mark the cardinal directions and the diagonal axes of the city. The South Gate is the most famous: a causeway flanked by 54 gods on one side and 54 demons on the other, all pulling at a giant serpent in the creation myth of the Churning of the Ocean of Milk. At the centre of Angkor Thom stands the Bayon — a Buddhist temple built by King Jayavarman VII in the late 12th century, with 54 towers each bearing four enormous faces gazing in all directions. Over 200 faces in total. At certain times of day, in certain light, the effect is quietly overwhelming.\n\nWithin the Angkor Thom walls: the Baphuon Temple, a 11th-century pyramid structure rising 43 metres above its enclosure; the Terrace of Elephants, a 350-metre royal viewing platform carved with life-size elephants and their mahouts; and the Terrace of the Leper King, with its remarkable double walls of underworld figures carved in densely packed rows.\n\nEast of Angkor Thom, Ta Prohm is the temple most people have seen in photographs without realising it. Built in 1186 as a Buddhist monastery dedicated to the mother of Jayavarman VII, it was deliberately left partly unrestored — the roots of silk-cotton and strangler fig trees have been allowed to remain as they were found, splitting stone walls and lifting flagstones in a scene that feels closer to a ruin than a monument. This is the filming location for Tomb Raider (2001) and the reason many visitors have a particular image of Angkor in their minds before they arrive.\n\nNearby, Banteay Kdei and Srah Srang sit together — a 10th-century Buddhist temple complex of intricate carvings and a royal bathing reservoir that still holds water today. The reservoir's grand stone landing stage, with its lion and garuda guardians, is one of the most atmospheric spots on the whole circuit at sunrise.\n\nPre Rup, at the southern end of the circuit, is the traditional sunset temple. A Hindu pyramid of brick, laterite and sandstone built in 961 AD, it rises on three tiers to five lotus towers at the summit. Visitors climb to the top in the late afternoon and wait as the light drops behind the jungle to the west. It is one of the most reliably rewarding hours of any Cambodia trip.\n\nAll Angkor Wat packages from Dhesu include a licensed English-speaking guide who knows not just the history but the logistics: the right arrival time to beat the tour groups to the main temple, the least-visited corners of Angkor Thom, the spot on the upper level of Banteay Kdei that almost no one finds. Angkor entrance passes are arranged as part of every package. Temple dress code applies throughout — smart casual with covered shoulders and knees.\n\nDhesu has been guiding Malaysian travellers through Angkor since 1988. Halal and vegetarian meals can be arranged at no extra cost. Masjid AN NEAKMAH in Siem Reap can be included on request. All packages are 100% private with daily departures.",
    canonicalUrl: "/tours/cambodia/angkor-wat",
    ogTitle: "Angkor Wat Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Full-day guided Angkor circuit: Angkor Wat, Bayon, Ta Prohm and the Pre Rup sunset. Plan your trip with Dhesu, trusted since 1988.",
    ogImage: "/images/gallery/16408.jpeg",
  },
];

// ─── Combined list ────────────────────────────────────────────────────────────

export const CAMBODIA_LANDING_PAGES: CambodiaLandingPage[] = [
  ...CAMBODIA_REGIONS,
  ...CAMBODIA_THEMES,
];

const byKey: Record<string, CambodiaLandingPage> = Object.fromEntries(
  CAMBODIA_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Cambodia region or theme by its URL segment. Undefined if neither. */
export function getCambodiaLandingPage(
  key: string,
): CambodiaLandingPage | undefined {
  return byKey[key];
}

// Display order for the Cambodia hub page region/theme nav strip.
const NAV_ORDER = [
  "phnom-penh",
  "siem-reap",
  "angkor-wat",
];

export interface CambodiaRegionCard {
  label: string;
  href: string;
  blurb: string;
  kind: "region" | "theme";
}

/** Cards for the Cambodia hub page region/theme section, in display order. */
export function getCambodiaRegionCards(): CambodiaRegionCard[] {
  return NAV_ORDER.map((key) => byKey[key]).map((p) => ({
    label: p.label,
    href: p.canonicalUrl,
    blurb: p.blurb,
    kind: p.kind,
  }));
}