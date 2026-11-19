import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import YearEndContent, { type YearEndPackage } from "./YearEndContent";
import { getTourPage } from "@/src/data/tourPages";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  nodeId,
  offer,
  orgRef,
  parsePrice,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 33. Title, meta description and all body copy are
// DHE-101's final page copy (Downloads/Year-End Holiday Packages 2026_ final
// page copy for the dev.docx, Rohan), verbatim. The site adds no title
// template, so the copy's "| Dhesu" is part of the title as written.
const PATH = "/year-end-holiday-travel-deals-2026";
const TITLE = "Year End Holiday Packages 2026 From RM398 | Dhesu";
const DESCRIPTION =
  "Year end holiday packages from Malaysia for the Dec 2026 school holidays. Bali, Vietnam, Sri Lanka, Nepal, Kashmir and India from RM398. Get a free quote.";
const HERO_IMAGE = "/images/seasonal/winter-ice-festival.jpg";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "year end vacation, year end holiday package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: HERO_IMAGE }],
    type: "website",
  },
};

// The card photo and tag come from the package its "Book Now" opens, so the
// card here is the one visitors already know from the hub.
function cardArt(packageHref: string): Pick<YearEndPackage, "image" | "tag" | "tagColor"> {
  const [destination, ...rest] = packageHref.replace(/^\/tours\/|\/$/g, "").split("/");
  const slug = rest.join("/");
  const pkg = getTourPage(destination)?.packages.items.find((p) => p.slug === slug);
  if (!pkg) throw new Error(`No package card for ${packageHref}`);
  return { image: pkg.image, tag: pkg.tag, tagColor: pkg.tagColor };
}

// DHE-101's twelve packages, in the copy's order. Name, duration, price,
// dates, Muslim-friendly line, description and the "Book Now" link are the
// copy's. Owned by the page because it also drives the ItemList markup.
const packageRows: Omit<YearEndPackage, "image" | "tag" | "tagColor">[] = [
  {
    name: "Bali 3 Days Super Saver Year End Holiday Package",
    duration: "3 Days / 2 Nights",
    price: "From RM398",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "Halal meals on request",
    description:
      "The cheapest way into a December holiday. Uluwatu cliff temple with the Kecak fire dance, seafood BBQ at Jimbaran Bay and the Tegalalang rice terraces.",
    packageHref: "/tours/indonesia/bali/3-day-super-saver/",
  },
  {
    name: "Hanoi and Halong Bay 3 Days Year End Travel Package",
    duration: "3 Days / 2 Nights",
    price: "From RM688",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "Ask us",
    description:
      "Hanoi’s old quarter and a scenic cruise on Halong Bay, packed into a long weekend.",
    packageHref: "/tours/vietnam/north-vietnam/3-day-hanoi-halong-bay-super-saver/",
  },
  {
    name: "Angkor and Khmer Empire 3 Days Year End Holiday Package",
    duration: "3 Days / 2 Nights",
    price: "From RM888",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "Ask us",
    description:
      "A private three day trip to Siem Reap built around Angkor and the temples of the Khmer Empire.",
    packageHref: "/tours/cambodia/siem-reap/3-day-angkor-khmer-empire/",
  },
  {
    name: "Sri Lanka 3 Days Kandy and Colombo December Holiday Package",
    duration: "3 Days / 2 Nights",
    price: "From RM888",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "Ask us, or choose the dedicated Muslim-friendly Sri Lanka trip below",
    description:
      "The Temple of the Sacred Tooth Relic, an evening Kandy cultural show and a Colombo city tour. December to March is the best all-round window for the island.",
    packageHref: "/tours/sri-lanka/kandy/3-day-kandy-colombo/",
  },
  {
    name: "Nepal 4 Days Super Saver Year End Holiday Package",
    duration: "4 Days / 3 Nights",
    price: "From RM888",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "Ask us, or choose the dedicated Muslim-friendly Nepal trip below",
    description:
      "Pashupatinath, the Monkey Temple at Swayambhunath and Himalayan views from Nagarkot. October to December gives Nepal its clearest mountain air.",
    packageHref: "/tours/nepal/kathmandu/4-day-super-saver/",
  },
  {
    name: "Best of Bali 4 Days Year End Holiday Package",
    duration: "4 Days / 3 Nights",
    price: "From RM988",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "Halal meals on request",
    description:
      "Our bestselling Bali trip. Uluwatu and the Kecak dance, Tegalalang rice terraces, Tanah Lot at sunset and Tirta Empul temple.",
    packageHref: "/tours/indonesia/bali/4-day-best-of-bali/",
  },
  {
    name: "Kashmir 4 Days Super Saver Year End Travel Package",
    duration: "4 Days / 3 Nights",
    price: "From RM1,088",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "Ask us (halal food is easy to find in Kashmir)",
    description:
      "A night on a Dal Lake houseboat, the Mughal gardens and Srinagar sightseeing. This one stays in Srinagar and does not include Gulmarg, so choose the ski resort package below if snow is the goal.",
    packageHref: "/tours/india/kashmir/4-day-super-saver/",
  },
  {
    name: "Bali 5 Days Bliss December Holiday Package",
    duration: "5 Days / 4 Nights",
    price: "From RM1,188",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "Halal meals on request",
    description:
      "The fuller Bali trip. The highland circuit, the floating temple at Bedugul, Uluwatu with the Kecak dance and an optional Nusa Penida day.",
    packageHref: "/tours/indonesia/bali/5-day-bliss-temples-highlands-sunset/",
  },
  {
    name: "Sri Lanka 4 Days Muslim-Friendly Year End Holiday Package",
    duration: "4 Days / 3 Nights",
    price: "From RM1,288",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "Yes, halal meals included",
    description:
      "Kandy, the tea hills of Nuwara Eliya, a beach and hill resort stay and waterfall stops along the way.",
    packageHref: "/tours/sri-lanka/nuwara-eliya/4-day-muslim-friendly/",
  },
  {
    name: "India Golden Triangle 5 Days Year End Holiday Package",
    duration: "5 Days / 4 Nights",
    price: "From RM1,388",
    dates: "Private departure, any date in December 2026",
    muslimFriendly: "On request, tell us your needs when you enquire",
    description:
      "Old Delhi, the Taj Mahal and Jaipur’s forts. October to March is the comfortable season for North India, so December works well.",
    packageHref: "/tours/india/north-india/5-day-golden-triangle/",
  },
  {
    name: "Kashmir 5 Days Ski Resort and Cable Car Snow Holiday Package",
    duration: "5 Days / 4 Nights",
    price: "From RM1,688",
    dates:
      "Snow season, December 2026 to February 2027. Snow usually settles from late December.",
    muslimFriendly: "Ask us (halal food is easy to find in Kashmir)",
    description:
      "Gulmarg ski resort, a ride on the Gondola cable car and a houseboat night on Dal Lake. For plenty of Malaysians it is their first real snow.",
    packageHref: "/tours/india/kashmir/5-day-ski-resort-cable-car/",
  },
  {
    name: "Nepal 6 Days Best of Nepal Muslim-Friendly Year End Holiday Package",
    duration: "6 Days / 5 Nights",
    price: "From RM2,088",
    dates: "Private departure, any date in December 2026",
    muslimFriendly:
      "Yes, halal dining guidance, prayer-time awareness and a Muslim-aware private guide",
    description:
      "A private guided trip with a Phewa Lake boat ride, Nagarkot sunrise and the Kathmandu heritage circuit.",
    packageHref: "/tours/nepal/kathmandu-pokhara/6-day-muslim-friendly/",
  },
];

const packages: YearEndPackage[] = packageRows.map((row) => ({
  ...row,
  ...cardArt(row.packageHref),
}));

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs = [
  {
    question: "When are the December 2026 school holidays in Malaysia?",
    answer:
      "Group A states (Kedah, Kelantan, Terengganu and Johor) break from 4 to 31 December 2026. Group B (Kuala Lumpur, Selangor, Penang, Melaka, Perak, Pahang, Sabah, Sarawak, Putrajaya and Labuan) breaks from 5 to 31 December.",
  },
  {
    question: "What is the cheapest year end holiday package from Malaysia?",
    answer:
      "The 3 day Bali Super Saver starts from RM398 per person. The 3 day Hanoi and Halong Bay trip starts from RM688, and the Angkor, Kandy and Colombo, and Nepal Super Saver trips all start from RM888.",
  },
  {
    question: "Is it too late to book a year end holiday package for December?",
    answer:
      "December is close, so the better dates are going. Because our packages are private tours, we can still check what is open for your dates. Send them to us on WhatsApp and we will tell you straight.",
  },
  {
    question: "Do year end travel prices go up at Christmas and New Year?",
    answer:
      "Yes. Departures between 24 December 2026 and 1 January 2027 carry seasonal flight and hotel peak surcharges. The From prices on this page are starting rates, so ask for a quote on your exact dates.",
  },
  {
    question: "Which year end holiday packages are Muslim-friendly?",
    answer:
      "The 4 day Sri Lanka package includes halal meals, and the 6 day Nepal package is a dedicated Muslim-friendly trip. For any other package, tell us your requirements when you enquire and we plan around them.",
  },
  {
    question: "Where can I see snow on a December holiday from Malaysia?",
    answer:
      "Kashmir is the one on this page. Snow usually settles around Gulmarg from late December, and January is often the heaviest. The 5 day ski resort package includes the Gondola cable car, and daytime temperatures sit around 2 to 8°C, so pack warm.",
  },
  {
    question: "Are the year end holiday package prices per person, and are flights included?",
    answer:
      "They are per person for the land package. International flights from Kuala Lumpur are quoted separately unless a package says otherwise, and we can add them on request.",
  },
  {
    question: "Can I change a year end holiday package or book for a big group?",
    answer:
      "Yes. Hotels, pace and activities can all be adjusted, and anything changed is repriced before you commit. For larger groups, send us the headcount and dates and we put together one quote.",
  },
];

/**
 * The twelve cards as an ItemList whose entries are the packages themselves:
 * each a Product/TouristTrip (the repo's tour type) with an Offer carrying the
 * card's From price. Every value is one the card displays; the Offer's url is
 * the package page its "Book Now" opens.
 */
function yearEndItemList(items: YearEndPackage[]) {
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
          description: pkg.description,
          image: pkg.image,
          url: pkg.packageHref,
          brand: orgRef,
          provider: orgRef,
          additionalProperty: [
            { "@type": "PropertyValue", name: "Duration", value: pkg.duration },
          ],
          ...(base ? { offers: { ...base, price: Number(parsePrice(pkg.price)) } } : {}),
        },
      };
    }),
  };
}

const yearEndJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: HERO_IMAGE,
    hasBreadcrumb: true,
    mainEntity: faqQuestions(faqs),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Year-End Holiday Deals 2026" },
  ]),
  yearEndItemList(packages),
]);

export default function YearEndPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={yearEndJsonLd} />
      <YearEndContent faqs={faqs} packages={packages} />
    </main>
  );
}
