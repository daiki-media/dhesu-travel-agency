import type { TourPackage } from "@/src/data/tourPages/types";

/**
 * Landing pages under /tours/thailand.
 *
 * Phuket and Krabi are live regions, with their packages, prices and inclusions
 * migrated from the Phuket and Krabi listings on the previous site. Bangkok and
 * Chiang Mai are still to come — they have no packages in the registry yet, so
 * they appear on the hub as descriptive zones rather than priced cards.
 */
export interface ThailandLandingPage {
  key: string;
  label: string;
  kind: "region" | "theme";
  blurb: string;
  select: (packages: TourPackage[]) => TourPackage[];
  primaryKeyword?: string;
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

const matchesKeywords = (keywords: string[]) => (packages: TourPackage[]) =>
  packages.filter((p) => {
    const haystack = [p.name, p.slug ?? "", ...(p.highlights ?? [])]
      .join(" ")
      .toLowerCase();
    return keywords.some((k) => haystack.includes(k.toLowerCase()));
  });

const startsWith = (prefix: string) => (packages: TourPackage[]) =>
  packages.filter((p) => (p.slug ?? "").startsWith(prefix));

// ─── Regions ────────────────────────────────────────────────────────────────

export const THAILAND_REGIONS: ThailandLandingPage[] = [
  {
    // Packages, prices and inclusions migrated from the Phuket listing on the
    // previous site (holidayidea.com.my search-travel.php?s=Phuket).
    key: "phuket",
    label: "Phuket",
    kind: "region",
    blurb:
      "Thailand's largest island: Phang Nga Bay and James Bond Island by speedboat, Phi Phi and Maya Bay, the Sino-Portuguese Old Town, and Patong after dark.",
    select: startsWith("phuket/"),
    primaryKeyword: "phuket package malaysia",
    metaTitle:
      "Phuket Tour Packages from Malaysia | James Bond Island, Phi Phi & FantaSea | Dhesu Travel",
    metaDescription:
      "Phuket packages from Malaysia with Dhesu Travel, trusted since 1988. James Bond Island and Phang Nga Bay speedboat tours, Phi Phi and Maya Bay, Phuket Old Town and the FantaSea show. 3 packages from RM728 per person.",
    h1: "Phuket Tour Packages from Malaysia",
    intro:
      "Phuket is the easiest beach holiday a Malaysian traveller can take — under two hours from Kuala Lumpur, and developed enough that a three-day trip is genuinely worth the flight. Three packages from RM728 cover the island's headline experiences.\n\nPhang Nga Bay is the reason most people come. A speedboat runs north-east from the pier into sheltered green water crowded with limestone karsts, stopping at the sea caves of Panak Island, at Khao Ping Kan and the offshore stack of Koh Tapu — James Bond Island, named for the 1974 film The Man with the Golden Gun — and at Koh Panyee, a fishing village built on stilts above the sea with its own floating football pitch. A canoe takes you through Tham Lod Cave along the way.\n\nThe Phi Phi Islands are the other great day out, in open sea to the south-east: Maya Bay, Pileh Lagoon's enclosed emerald water, Monkey Beach and Tonsai Bay for snorkelling. Our four-day package includes both boat days.\n\nOn land, Promthep Cape gives the island's best sunset panorama, Wat Chalong is Phuket's largest and most significant Buddhist temple, and Phuket Old Town is a grid of preserved Sino-Portuguese shophouses built on tin-mining wealth. Evenings belong to Patong, or to the Palace of the Elephants theatre at Phuket FantaSea. Dhesu has been arranging Thailand holidays for Malaysians since 1988.",
    canonicalUrl: "/tours/thailand/phuket",
    ogTitle: "Phuket Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "James Bond Island, Phi Phi, Phuket Old Town and the FantaSea show. 3 packages from RM728. Plan your Phuket trip with Dhesu, since 1988.",
    ogImage: "/images/guides/phang-nga-longtail.jpg",
  },
  {
    // Packages, prices and inclusions migrated from the Krabi listing on the
    // previous site (holidayidea.com.my search-travel.php?s=Krabi).
    key: "krabi",
    label: "Krabi",
    kind: "region",
    blurb:
      "The quieter half of southern Thailand: the four-island boat route from Ao Nang, Hong Lagoon and kayaking, and a rainforest interior of hot springs and the Emerald Pool.",
    select: startsWith("krabi/"),
    primaryKeyword: "krabi package malaysia",
    metaTitle:
      "Krabi Tour Packages from Malaysia | 4 Islands, Hong Lagoon & Emerald Pool | Dhesu Travel",
    metaDescription:
      "Krabi packages from Malaysia with Dhesu Travel, trusted since 1988. The four-island boat tour, Hong Lagoon and kayaking, Emerald Pool, hot springs and Tiger Cave Temple. 3 packages from RM528 per person.",
    h1: "Krabi Tour Packages from Malaysia",
    intro:
      "Krabi is what travellers choose when they want southern Thailand without Phuket's volume. The limestone is more dramatic, the beaches are quieter and the pace is slower. Three packages from RM528 cover both the coast and the interior.\n\nThe four-island tour is the classic day, leaving Ao Nang by traditional longtail boat or speedboat: Phranang Cave beneath the Railay headland, with its shrine to a princess spirit still honoured by local fishermen; Chicken Island, named for the limestone formation at its tip and the best snorkelling of the day; the white sandbar that emerges beside Tup Island at low tide; and Poda Island's wide beach and clear shallow water.\n\nNorth of Ao Nang lie the Hong Islands, and Hong Lagoon — a still, shallow pool almost entirely enclosed by sheer limestone walls, entered by boat through a narrow gap that opens with the tide. Our four-day package adds that day, with kayaking beneath the cliffs at Hong Island.\n\nInland, an hour from the coast, the rainforest holds the Hot Spring Waterfalls — thermal water at bath temperature running through worn limestone basins — and the Emerald Pool, a spring-fed pool of luminous green. Tiger Cave Temple, a meditation centre among limestone caves and ancient trees, sits on the way back to the sea. Dhesu has been arranging Thailand holidays for Malaysians since 1988.",
    canonicalUrl: "/tours/thailand/krabi",
    ogTitle: "Krabi Tour Packages from Malaysia | Dhesu Travel",
    ogDescription:
      "Four islands by longtail boat, Hong Lagoon and kayaking, the Emerald Pool and Tiger Cave Temple. 3 packages from RM528. Dhesu Travel, since 1988.",
    ogImage: "/images/guides/phuket-island-cove.jpg",
  },
];

// ─── Themes ──────────────────────────────────────────────────────────────────

export const THAILAND_THEMES: ThailandLandingPage[] = [
  {
    // Holiday Idea sheet, row 12. Meta title and description are copied
    // verbatim; the body copy is still in the .docx named in `intro`.
    key: "phuket-krabi-holiday-guide-2026",
    label: "Phuket & Krabi Guide 2026",
    kind: "theme",
    blurb:
      "Southern Thailand's two headline islands in one trip: how Phuket and Krabi differ, how to island-hop between them, and how long to give each.",
    select: matchesKeywords(["Phuket", "Krabi", "Phi Phi", "James Bond Island"]),
    primaryKeyword: "phuket krabi holiday package",
    metaTitle:
      "Phuket & Krabi Holiday Packages from Malaysia: The Best of Southern Thailand's Islands",
    metaDescription:
      "Combine Phuket and Krabi in one island-hopping Thailand holiday. Beaches, island tours, and relaxed itineraries for Malaysian travellers.",
    h1: "Phuket & Krabi Holiday Packages: The Best of Southern Thailand's Islands",
    // Opening paragraph of the draft; the rest of the article is in
    // src/data/guides/PhuketKrabiGuide.tsx.
    intro:
      "Phuket and Krabi are among the most popular beach resorts in the south of Thailand, and although both of them make excellent stand-alone destinations, taking a combination tour of the two to enjoy greater variety has become the choice of many tourists coming from Malaysia. This travel guide will help you understand the attractions of both places and how to combine them into one tour.",
    canonicalUrl: "/tours/thailand/phuket-krabi-holiday-guide-2026",
    ogTitle:
      "Phuket & Krabi Holiday Packages from Malaysia: The Best of Southern Thailand's Islands",
    ogDescription:
      "Combine Phuket and Krabi in one island-hopping Thailand holiday. Beaches, island tours, and relaxed itineraries for Malaysian travellers.",
    ogImage: "/images/guides/phang-nga-longtail.jpg",
  },
];

// ─── Combined list ───────────────────────────────────────────────────────────

export const THAILAND_LANDING_PAGES: ThailandLandingPage[] = [
  ...THAILAND_REGIONS,
  ...THAILAND_THEMES,
];

const byKey: Record<string, ThailandLandingPage> = Object.fromEntries(
  THAILAND_LANDING_PAGES.map((p) => [p.key, p]),
);

/** Look up a Thailand region or theme by its URL segment. Undefined if neither. */
export function getThailandLandingPage(
  key: string,
): ThailandLandingPage | undefined {
  return byKey[key];
}
