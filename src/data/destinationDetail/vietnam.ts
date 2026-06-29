import type { TourPackage } from "@/src/data/tourPages/types";

export interface VietnamLandingPage {
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

export const VIETNAM_REGIONS: VietnamLandingPage[] = [
  {
    key: "north-vietnam",
    label: "North Vietnam",
    kind: "region",
    blurb:
      "Halong Bay's UNESCO limestone karsts, Hanoi's Old Quarter temples, Sapa's terraced rice fields and Fansipan — Vietnam's highest summit.",
    select: startsWith("north-vietnam/"),
    metaTitle:
      "North Vietnam Tour Packages from Malaysia | Hanoi, Halong Bay, Sapa | Dhesu Travel",
    metaDescription:
      "Explore North Vietnam with Dhesu Travel, trusted since 1988. Halong Bay UNESCO cruise, Hanoi Old Quarter, Sapa mountain trekking and Fansipan cable car. 7 packages from RM688 per person.",
    h1: "North Vietnam Tour Packages from Malaysia",
    intro:
      "North Vietnam is where Vietnam begins for most travellers from Malaysia — and where most decide they need to come back. Seven packages from RM688 cover the full sweep of the north, from the ancient streets of Hanoi to the UNESCO-listed limestone wonder of Halong Bay and the terraced highlands of Sapa.\n\nHanoi is the starting point: the Old Quarter's 36 guild streets, Hoan Kiem Lake and Ngoc Son Temple, the Ho Chi Minh Mausoleum and Museum, and the water puppet theatre — a uniquely northern Vietnamese art form performed on a lake stage. The food in Hanoi is its own reason to visit: pho bo, bun cha, banh mi and ca phe trung (egg coffee) in a city that takes street food seriously.\n\nHalong Bay is the UNESCO World Heritage Site that defines Vietnam for most of the world: 2,000 limestone karsts and islands rising from emerald-green water, explored by overnight cruise. Sung Sot Cave (Surprising Cave) is the largest in the bay. Titov Island has a summit with a 360-degree view of the karst field. At night, the bay is completely still and the stars are extraordinary.\n\nSapa, in the Hoang Lien Son mountains near the Chinese border, offers a completely different Vietnam: terraced rice fields carved into vertiginous slopes, hill tribe villages (H'mong, Red Dao, Tay, Giay), and Fansipan — Vietnam's highest peak at 3,147 metres — reached by the world's longest three-rope cable car. Dhesu has been sending Malaysian travellers north since 1988.",
    canonicalUrl: "/tours/vietnam/north-vietnam",
    ogTitle: "North Vietnam Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Halong Bay cruise, Hanoi Old Quarter and Sapa mountain trekking. 7 packages from RM688. Plan your North Vietnam trip with Dhesu, since 1988.",
    ogImage: "/images/gallery/16404.jpg",
  },
  {
    key: "central-vietnam",
    label: "Central Vietnam",
    kind: "region",
    blurb:
      "Hoi An's lantern-lit ancient town, Hue's Imperial Citadel, Ba Na Hills Golden Bridge, and the scenic coastal train between Danang and Hue.",
    select: startsWith("central-vietnam/"),
    metaTitle:
      "Central Vietnam Tour Packages from Malaysia | Danang, Hue, Hoi An | Dhesu Travel",
    metaDescription:
      "Discover Central Vietnam with Dhesu Travel, trusted since 1988. Hoi An Ancient Town UNESCO, Hue Imperial Citadel, Ba Na Hills Golden Bridge, Danang beaches. 4 packages from RM688 per person.",
    h1: "Central Vietnam Tour Packages from Malaysia",
    intro:
      "Central Vietnam is the stretch of coast and mountains between Da Nang's beaches and Hue's imperial ruins — a region that packs more UNESCO World Heritage Sites and iconic images into a short distance than almost anywhere else in Southeast Asia.\n\nHoi An is the centrepiece: a perfectly preserved 15th-century merchant port where Japanese traders, Chinese merchants, and Vietnamese craftsmen built a town so beautiful the whole thing is listed as a UNESCO World Heritage Site. The Thu Bon River reflects hundreds of coloured silk lanterns at night. The tailors on Le Loi Street can copy any garment in 24 hours. The morning market sells the ingredients for the cooking class you'll take in the afternoon. The Japanese Covered Bridge — 400 years old — still stands at the western end of the ancient town.\n\nHue, an hour north by road (or by the spectacular coastal train that clips the Hai Van Pass above the ocean), was Vietnam's imperial capital for 143 years under the Nguyen Dynasty. The Imperial Citadel, modelled on Beijing's Forbidden City, is the largest UNESCO site in Vietnam. The Royal Tombs outside the city walls are elaborate garden complexes where emperors still seem present.\n\nBa Na Hills, 25 kilometres from Da Nang, sits above the clouds on a 1,500-metre ridge. The Golden Bridge — two giant stone hands lifting a gold pedestrian walkway through the mist — has become one of Vietnam's most photographed images. Dhesu has been arranging Central Vietnam journeys since 1988.",
    canonicalUrl: "/tours/vietnam/central-vietnam",
    ogTitle: "Central Vietnam Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Hoi An lanterns, Hue Imperial Citadel and Ba Na Hills Golden Bridge. 4 packages from RM688. Plan your Central Vietnam trip with Dhesu, since 1988.",
    ogImage: "/images/gallery/16405.jpg",
  },
  {
    key: "south-vietnam",
    label: "South Vietnam",
    kind: "region",
    blurb:
      "Ho Chi Minh City's museums and Cu Chi Tunnels, Mekong Delta floating markets, Dalat's flower gardens, and Mui Ne's sand dunes.",
    select: startsWith("south-vietnam/"),
    metaTitle:
      "South Vietnam Tour Packages from Malaysia | Ho Chi Minh, Dalat, Mui Ne | Dhesu Travel",
    metaDescription:
      "Explore South Vietnam with Dhesu Travel, trusted since 1988. Ho Chi Minh City, Cu Chi Tunnels, Mekong Delta, Dalat City of Eternal Spring and Mui Ne beach. 5 packages from RM1,388 per person.",
    h1: "South Vietnam Tour Packages from Malaysia",
    intro:
      "South Vietnam moves at a different speed from the north — faster in the city, slower on the river, cooler in the highlands. Five packages from RM1,388 cover the full range: the kinetic energy of Ho Chi Minh City, the hypnotic calm of the Mekong Delta, the cool mountain air of Dalat, and the golden sand and warm sea of Mui Ne.\n\nHo Chi Minh City (Saigon) is the largest city in Vietnam and one of the most energetic in Southeast Asia. The War Remnants Museum presents the American War with unflinching directness. The Independence Palace, where the war ended on 30 April 1975, is still frozen in 1970s furnishings and underground bunkers. Ben Thanh Market is the city's commercial heartbeat. The best street food in Vietnam is here, served from plastic stools on pavement corners that have been operating for generations.\n\nThe Cu Chi Tunnels, 40 kilometres northwest of the city, are an underground city that sheltered tens of thousands of Viet Cong fighters during the war — 250 kilometres of hand-dug tunnels at three levels, with kitchens, hospitals, and command rooms underground. Crawling through the widened tourist section makes the history visceral.\n\nDalat, in the central highlands 300 kilometres north of Ho Chi Minh City, is Vietnam's 'City of Eternal Spring' — cool, flower-filled, and built by the French as a hill station in the early 20th century. Asia's longest alpine coaster runs through the pine forests. Mui Ne, on the coast, has red and white sand dunes that shift with the wind and a long beach protected from the south monsoon by its east-facing orientation. Dhesu has been arranging South Vietnam journeys for Malaysian travellers since 1988.",
    canonicalUrl: "/tours/vietnam/south-vietnam",
    ogTitle: "South Vietnam Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Ho Chi Minh City, Cu Chi Tunnels, Dalat and Mui Ne. 5 packages from RM1,388. Plan your South Vietnam trip with Dhesu, since 1988.",
    ogImage: "/images/gallery/2088.jpg",
  },
  {
    key: "phu-quoc",
    label: "Phu Quoc Island",
    kind: "region",
    blurb:
      "The world's longest sea cable car, pristine beaches, island hopping and Duong Dong Night Market. Vietnam's most loved tropical island.",
    select: startsWith("phu-quoc/"),
    metaTitle:
      "Phu Quoc Island Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Discover Phu Quoc with Dhesu Travel, trusted since 1988. World's longest sea cable car, snorkelling, island hopping, Duong Dong Night Market and pristine beaches. 3 packages from RM688 per person.",
    h1: "Phu Quoc Island Tour Packages from Malaysia",
    intro:
      "Phu Quoc is Vietnam's largest island — 574 square kilometres of tropical forest, white sand beaches, and warm Gulf of Thailand water in the far southwest. Three packages from RM688 cover the island's most important experiences, from a budget-friendly three-day introduction to a comprehensive five-day exploration of every corner.\n\nThe Vinpearl Cable Car (Hon Thom Cable Car) stretches 7.9 kilometres from An Thoi to Hon Thom Island — the longest three-rope cable car system over the sea in the world, passing above turquoise water and smaller islands en route. The views of Phu Quoc's southern archipelago from the gondola are extraordinary. On Hon Thom Island, Aquatopia Water Park and the beaches are the main draws.\n\nPhu Quoc's beaches run from the long, tourist-facing Long Beach on the west coast to the quieter Sao Beach on the southeast — the latter regularly rated among the best beaches in Southeast Asia, with powder-white sand and shallow, calm water. Island hopping to the An Thoi archipelago in the south reveals smaller islands with intact coral reefs for snorkelling.\n\nDuong Dong Night Market, in Phu Quoc town, is the island's social and culinary centre every evening — fresh seafood priced by weight, Vietnamese street food, tropical fruit, and the fish sauce that has made Phu Quoc famous since the 17th century. Ho Quoc Pagoda, on a hillside above the east coast, offers one of the most dramatic temple settings in Vietnam, looking out over the sea toward Cambodia. Dhesu has been arranging Phu Quoc journeys for Malaysian travellers since 1988.",
    canonicalUrl: "/tours/vietnam/phu-quoc",
    ogTitle: "Phu Quoc Island Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "World's longest sea cable car, snorkelling and island hopping on Phu Quoc. 3 packages from RM688. Plan your island trip with Dhesu, since 1988.",
    ogImage: "/images/gallery/2411.jpg",
  },
  {
    key: "nha-trang",
    label: "Nha Trang",
    kind: "region",
    blurb:
      "Vietnam's premier beach city. Cobalt-blue water, coral reefs, mud baths and a chain of offshore islands on the South China Sea.",
    select: startsWith("nha-trang/"),
    metaTitle:
      "Nha Trang Tour Packages from Malaysia | Dhesu Travel & Tours",
    metaDescription:
      "Visit Nha Trang with Dhesu Travel, trusted since 1988. Cobalt-blue beaches, coral reef snorkelling, Vinpearl island, Thap Ba mud baths and Po Nagar Cham towers. Custom packages available from Malaysia.",
    h1: "Nha Trang Tour Packages from Malaysia",
    intro:
      "Nha Trang sits on one of the most beautiful bays in Southeast Asia — a 6-kilometre crescent of white sand beach backed by the city, with the South China Sea's cobalt water in front and a chain of 19 offshore islands within 20 minutes by boat. It is Vietnam's beach city, where Malaysian visitors come for the combination of sea, diving, and the kind of unhurried pace the city manages to maintain despite being a fully functioning urban centre.\n\nThe coral reefs around Nha Trang's islands — particularly around Mun Island (Hon Mun), Vietnam's first marine protected area — offer some of the best diving and snorkelling conditions in the country. Visibility can reach 15 metres in the dry season. The sea temperature stays around 26°C year-round.\n\nThap Ba Hot Springs, 7 kilometres from the city centre, is Nha Trang's most distinctive experience: mineral-rich mud baths followed by outdoor thermal pools in a garden setting — a deeply Vietnamese version of a spa that has no equivalent anywhere else in the country. The Po Nagar Cham Towers, on a hilltop above the Cai River mouth, are the oldest standing monuments in Vietnam — built between the 7th and 12th centuries by the Cham Kingdom that preceded Vietnamese rule.\n\nVinpearl Island, reached by cable car from the mainland, houses Vietnam's largest amusement and water park complex, set on the island's own beach. Nha Trang packages are available on request — contact Dhesu for a custom itinerary. We have been arranging Vietnam journeys for Malaysian travellers since 1988.",
    canonicalUrl: "/tours/vietnam/nha-trang",
    ogTitle: "Nha Trang Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Cobalt-blue beach, coral reef diving and mud baths in Nha Trang. Custom packages on request. Plan your trip with Dhesu, since 1988.",
    ogImage: "/images/gallery/2089.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const VIETNAM_LANDING_PAGES: VietnamLandingPage[] = VIETNAM_REGIONS;

const byKey: Record<string, VietnamLandingPage> = Object.fromEntries(
  VIETNAM_LANDING_PAGES.map((p) => [p.key, p]),
);

export function getVietnamLandingPage(
  key: string,
): VietnamLandingPage | undefined {
  return byKey[key];
}

const NAV_ORDER = [
  "north-vietnam",
  "central-vietnam",
  "south-vietnam",
  "phu-quoc",
  "nha-trang",
];

export interface VietnamRegionCard {
  label: string;
  href: string;
  blurb: string;
  kind: "region" | "theme";
}

export function getVietnamRegionCards(): VietnamRegionCard[] {
  return NAV_ORDER.map((key) => byKey[key]).map((p) => ({
    label: p.label,
    href: p.canonicalUrl,
    blurb: p.blurb,
    kind: p.kind,
  }));
}
