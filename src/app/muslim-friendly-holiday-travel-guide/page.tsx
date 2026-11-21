import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import MuslimFriendlyContent, { type MuslimFriendlyPackage } from "./MuslimFriendlyContent";
import { linkedFaqsAsText, type LinkedFaq } from "@/src/data/linkedFaq";
import {
  blogPosting,
  breadcrumbList,
  faqQuestions,
  graph,
  nodeId,
  offer,
  orgRef,
  parsePrice,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 28. Title and meta description are the DHE-102
// handover's, verbatim (its first-choice title, not the alternates); the H1 and
// the copy the handover does not name stay as DHE-02 wrote them.
// Per-country versions already exist at /tours/nepal/muslim-friendly and
// /tours/sri-lanka/muslim-friendly; this is the page above them.
const PATH = "/muslim-friendly-holiday-travel-guide";
const TITLE = "Muslim Travel & Holiday Packages from Malaysia | From RM398";
const DESCRIPTION =
  "Muslim travel packages from Malaysia: Nepal, Sri Lanka, India, Bali, Sabah. Halal meals arranged, prayer times planned. From RM398. Get a free quote.";

// The H1 as rendered by the hero.
const HEADLINE =
  "Muslim-Friendly Tour Packages from Malaysia: Halal Dining & Prayer-Planned Itineraries (2026/27)";
const HERO_IMAGE = "/images/tour-types/mosque-night-istanbul.jpg";

// datePublished is when this page was first committed; dateModified is the
// DHE-102 copy going live.
const DATE_PUBLISHED = "2026-09-03T14:46:05+07:00";
const DATE_MODIFIED = "2026-11-21T00:00:00+08:00";

// The handover asks for the same title and description on og: and twitter:.
export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "muslim tour package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: HERO_IMAGE }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: [HERO_IMAGE],
  },
};

// The DHE-102 package table, row for row. Owned by the page for the same reason
// as the FAQs below; it also drives the ItemList markup. The link sits on the
// package name, to the URL the handover gives for each row.
const packages: MuslimFriendlyPackage[] = [
  {
    name: "6 Days Best of Nepal (Muslim Friendly)",
    packageHref: "/tours/nepal/kathmandu-pokhara/6-day-muslim-friendly/",
    days: "6D/5N",
    price: "2,088",
    muslimFriendly:
      "Halal restaurant list for every stop, prayer breaks built into each day, prayer times and qiblat guidance for your dates",
  },
  {
    name: "4 Days Beautiful Sri Lanka (Muslim Friendly)",
    packageHref: "/tours/sri-lanka/nuwara-eliya/4-day-muslim-friendly/",
    days: "4D/3N",
    price: "1,288",
    muslimFriendly:
      "Halal lunches on Days 2 and 3, prayer times in the daily schedule, a stop near Colombo’s Jami Ul-Alfar Mosque",
  },
  {
    name: "5 Days Delhi Agra Jaipur + Taj Mahal (Muslim Friendly)",
    packageHref: "/tours/india/north-india/5-day-golden-triangle-muslim/",
    days: "5D/4N",
    price: "1,388",
    muslimFriendly: "Halal meals included, Taj Mahal sunrise, Old Delhi near Jama Masjid",
  },
  {
    name: "4 Days Kashmir Super Saver",
    packageHref: "/tours/india/kashmir/4-day-super-saver/",
    days: "4D/3N",
    price: "1,088",
    muslimFriendly:
      "Dal Lake houseboat night, breakfast and dinner included, halal food and prayer facilities easy to find in a Muslim-majority region",
  },
  {
    name: "3 Days Bali Super Saver",
    packageHref: "/tours/indonesia/bali/3-day-super-saver/",
    days: "3D/2N",
    price: "398",
    muslimFriendly: "Private driver-guide, halal meals arranged on request",
  },
  {
    name: "3 Days KK + Bongawan River Cruise & Sky Mirror Beach",
    packageHref: "/tours/malaysia/sabah/3-day-kk-bongawan-cruise-dream-beach/",
    days: "3D/2N",
    price: "498",
    muslimFriendly: "Halal meals standard, private driver-guide, no flight out of the country",
  },
];

// Package URLs the handover links from the intro and the FAQ answers.
const NEPAL = "/tours/nepal/kathmandu-pokhara/6-day-muslim-friendly/";
const SRI_LANKA = "/tours/sri-lanka/nuwara-eliya/4-day-muslim-friendly/";
const GOLDEN_TRIANGLE = "/tours/india/north-india/5-day-golden-triangle-muslim/";
const KASHMIR = "/tours/india/kashmir/4-day-super-saver/";
const BALI = "/tours/indonesia/bali/3-day-super-saver/";
const SABAH = "/tours/malaysia/sabah/3-day-kk-bongawan-cruise-dream-beach/";

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
// Questions, answers and links are the DHE-102 handover's, verbatim.
const faqs: LinkedFaq[] = [
  {
    question: "How much is a Muslim holiday package from Malaysia?",
    answer: [
      "It depends on where you go and for how long. Starting prices per person, land only, are RM398 for the ",
      { text: "3-day Bali Super Saver", href: BALI },
      ", RM498 for a ",
      { text: "3-day Sabah trip from Kota Kinabalu", href: SABAH },
      ", RM1,088 for the ",
      { text: "4-day Kashmir Super Saver", href: KASHMIR },
      ", RM1,288 for the ",
      { text: "4-day Sri Lanka tour", href: SRI_LANKA },
      ", RM1,388 for the ",
      { text: "5-day Golden Triangle", href: GOLDEN_TRIANGLE },
      " and RM2,088 for the ",
      { text: "6-day Nepal tour", href: NEPAL },
      ". Flights from KL are extra.",
    ],
  },
  {
    question: "Are the meals halal on a Muslim travel package?",
    answer: [
      "Halal is planned into every trip, but how meals are covered changes from one package to the next. The Golden Triangle tour includes halal meals. Sri Lanka gives you breakfast plus halal lunches on Days 2 and 3, and dinner is paid separately with suggestions near your hotel. Nepal includes breakfast and a list of halal restaurants for lunch and dinner. Sabah halal meals are standard, and in Bali they’re arranged on request. Halal certification works differently in each country, so in places like Nepal, India and Bali we book Muslim-owned kitchens and locally recognised halal restaurants.",
    ],
  },
  {
    question: "How are prayer times handled during the trip?",
    answer: [
      "Your guide and driver keep track of the Solat windows along the route and plan stops at mosques or clean prayer rooms with wudhu access. On the Nepal and Sri Lanka tours, prayer times from Subuh to Isyak for your exact dates come with your booking confirmation. The hotel list shows the nearest masjid for each stay, and hotels can show you the qiblat direction if you ask.",
    ],
  },
  {
    question: "Can we attend Friday Jumu’ah prayers?",
    answer: [
      "Yes. If your trip includes a Friday, that day is timed so the men can get to Jumu’ah at a masjid that’s easy to reach. Mention it when you enquire and the route gets planned around it.",
    ],
  },
  {
    question: "Is a Muslim holiday package suitable for couples and families?",
    answer: [
      "It suits both. Couples tend to pick the Kashmir houseboat or the Bali pool villa, and many narrow it down through ",
      { text: "honeymoon destination ideas for Malaysian couples", href: "/honeymoon-holiday-guide-2026/" },
      ". Families get a private vehicle and stops whenever they’re needed, so grandparents and small kids aren’t rushed.",
    ],
  },
  {
    question: "Can we still travel in December 2026, or book for Hari Raya?",
    answer: [
      "December is close, so send your dates now and we’ll check what’s still open. Flights and hotels fill early in the year-end school holidays, which is why asking 6 to 8 weeks ahead is the safer habit, and the ",
      { text: "year-end holiday deals", href: "/year-end-holiday-travel-deals-2026/" },
      " and ",
      { text: "Raya holiday packages", href: "/raya-holiday-travel-deals-2026/" },
      " book up on the same pattern.",
    ],
  },
  {
    question: "Which Muslim travel package is easiest for a first trip?",
    answer: [
      "Sri Lanka is the shortest international flight from KL at around 3.5 hours, and the 4-day tour starts from RM1,288. Nepal is 4.5 to 5 hours in the air over 6 days, from RM2,088. Sabah is a domestic flight of about 1 hour 15 minutes. If none of these fits, a ",
      { text: "custom itinerary request", href: "/custom-itinerary-request/" },
      " with your dates and group size gets you something built around you.",
    ],
  },
  {
    question: "Can we customise an itinerary or add flights from Kuala Lumpur?",
    answer: [
      "Yes. Every package can be adjusted for private families, couples or corporate groups, and the Kuala Lumpur ticketing desk can quote return flights from KLIA alongside your land package.",
    ],
  },
];

/**
 * The six table rows as an ItemList whose entries are the packages themselves:
 * each a Product/TouristTrip (the repo's tour type) with an Offer carrying the
 * row's From price, as on the year-end page. Every value is one the row
 * displays; the Offer's url is the package page the row's name links to.
 */
function muslimFriendlyItemList(items: MuslimFriendlyPackage[]) {
  return {
    "@type": "ItemList",
    "@id": nodeId(PATH, "packages"),
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: items.length,
    itemListElement: items.map((pkg, i) => {
      const base = offer({ url: pkg.packageHref, price: pkg.price });
      return {
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": ["Product", "TouristTrip"],
          name: pkg.name,
          description: pkg.muslimFriendly,
          url: pkg.packageHref,
          brand: orgRef,
          provider: orgRef,
          additionalProperty: [
            { "@type": "PropertyValue", name: "Duration", value: pkg.days },
          ],
          ...(base ? { offers: { ...base, price: Number(parsePrice(pkg.price)) } } : {}),
        },
      };
    }),
  };
}

// The organisation (TravelAgency) node is emitted site-wide by the root layout,
// so the nodes here reference it by @id rather than declaring a second one.
const muslimFriendlyJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: HERO_IMAGE,
    hasBreadcrumb: true,
    mainEntity: faqQuestions(linkedFaqsAsText(faqs)),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Muslim-Friendly Tour Packages" },
  ]),
  muslimFriendlyItemList(packages),
  // No byline in the copy, so the helper credits the agency as author.
  blogPosting({
    path: PATH,
    headline: HEADLINE,
    description: DESCRIPTION,
    image: HERO_IMAGE,
    datePublished: DATE_PUBLISHED,
    dateModified: DATE_MODIFIED,
  }),
]);

export default function MuslimFriendlyPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={muslimFriendlyJsonLd} />
      <MuslimFriendlyContent faqs={faqs} packages={packages} />
    </main>
  );
}
