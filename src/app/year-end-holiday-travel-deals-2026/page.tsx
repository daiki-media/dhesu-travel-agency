import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import YearEndContent, { type YearEndPackage } from "./YearEndContent";
import { getTourPage } from "@/src/data/tourPages";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  packageItemList,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 33. Title and description are DHE-08's
// (Downloads/Dhesu Page Update.docx, 11 Nov 2026), verbatim; the rest of the
// body copy comes from content-document/sesional&school-holiday/.
const PATH = "/year-end-holiday-travel-deals-2026";
const TITLE = "Year-End Holiday Packages Dec 2026 from Malaysia | From RM398";
const DESCRIPTION =
  "Explore year-end holiday packages from Malaysia for the December 2026 school holidays (5 to 31 Dec 2026). Featured deals to Bali, Vietnam, Kashmir, Golden Triangle, Sri Lanka & Nepal. Book with Dhesu Travel.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "year end vacation, year end holiday package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: "/images/seasonal/winter-ice-festival.jpg" }],
    type: "website",
  },
};

// The card photo, tag and duration of a row come from the package its card
// links to, so the card here is the one visitors already know from the hub.
function cardArt(
  packageHref: string,
): Pick<YearEndPackage, "image" | "tag" | "tagColor" | "duration"> {
  const [destination, ...rest] = packageHref.replace(/^\/tours\/|\/$/g, "").split("/");
  const slug = rest.join("/");
  const pkg = getTourPage(destination)?.packages.items.find((p) => p.slug === slug);
  if (!pkg) throw new Error(`No package card for ${packageHref}`);
  return { image: pkg.image, tag: pkg.tag, tagColor: pkg.tagColor, duration: pkg.duration ?? "" };
}

// DHE-08's featured products, in its order. Name, price, description and the
// link on the name are the copy's; the card's "Book Now" opens the package
// behind that price. Owned by the page because it also drives the ItemList.
const packageRows: Omit<YearEndPackage, "image" | "tag" | "tagColor" | "duration">[] = [
  {
    name: "Bali 3D Super Saver",
    price: "From RM398",
    nameHref: "/tours/indonesia/bali/",
    description:
      "Budget-friendly island getaway covering key cultural sites, beaches, and local dining during the December holiday window.",
    packageHref: "/tours/indonesia/bali/3-day-super-saver/",
  },
  {
    name: "Vietnam Hanoi & Halong 3D",
    price: "From RM688",
    nameHref: "/tours/vietnam/",
    description:
      "Classic northern Vietnam itinerary featuring Hanoi historic quarters and a Halong Bay scenic cruise.",
    packageHref: "/tours/vietnam/north-vietnam/3-day-hanoi-halong-bay-super-saver/",
  },
  {
    name: "Kashmir Snow Experience 4D",
    price: "From RM1,088",
    nameHref: "/tours/india/kashmir/",
    description:
      "Winter alpine package featuring Srinagar houseboats, Gulmarg snow slopes, and scenic valley transfers.",
    packageHref: "/tours/india/kashmir/4-day-super-saver/",
  },
  {
    name: "Golden Triangle India 5D",
    price: "From RM1,388",
    nameHref: "/tours/india/golden-triangle/",
    description:
      "Comprehensive cultural circuit covering Delhi, Agra (Taj Mahal), and Jaipur with structured guided tours.",
    packageHref: "/tours/india/north-india/5-day-golden-triangle/",
  },
  {
    name: "Sri Lanka Highlights",
    price: "From RM888",
    nameHref: "/tours/sri-lanka/",
    description:
      "Tropical exploration route encompassing heritage monuments, tea plantation highlands, and coastal stops.",
    packageHref: "/tours/sri-lanka/kandy/3-day-kandy-colombo/",
  },
  {
    name: "Nepal Muslim-Friendly Tour 6D",
    price: "From RM2,088",
    nameHref: "/tours/nepal/muslim-friendly/",
    description:
      "Tailored mountain and valley itinerary featuring halal-certified meal arrangements and dedicated prayer stops across Kathmandu and Pokhara.",
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
    question: "Why is the end-of-year period considered the busiest time for traveling?",
    answer:
      "This is the time when there are the longest school holidays in Malaysia coupled with Christmas and New Year travel needs worldwide.",
  },
  // DHE-08 updated these two with the 2026 school holiday dates. They replace
  // the booking-window answer and the Australia/Japan/Europe one, which went
  // with the generic destination cards.
  {
    question: "When should I book my December 2026 year-end holiday package?",
    answer:
      "For maximum flight availability and standard hotel rates, we recommend booking your December 2026 tour by September or October. The official Malaysian school holiday period runs from 4/5 December to 31 December 2026. Peak travel demand occurs during the festive window between 24 December 2026 and 1 January 2027, where seats sell out early and seasonal peak surcharges apply.",
  },
  {
    question: "Are Dhesu Travel packages suitable for family travel during school holidays?",
    answer:
      "Yes, all featured year-end packages are structured specifically for family groups traveling during the December school holiday period (4 Dec – 31 Dec 2026). Itineraries like the Bali 3D Super Saver and Vietnam Hanoi & Halong 3D offer balanced schedules suitable for all age groups, while our Nepal Muslim-Friendly Tour 6D provides full halal meal planning and prayer stop arrangements for multi-generational Muslim family trips.",
  },
  {
    question: "Can I arrange for the New Year Eve party on my own separately?",
    answer:
      "Yes, but it is better to fix it before coming here because these parties usually take place according to a schedule and at a limited number of places.",
  },
  {
    question: "Does year-end pricing impact all locations equally?",
    answer:
      "No; those locations which happen to be in their own peak season (such as Australian summer season) usually experience the highest prices increase.",
  },
  {
    question: "Will it be easy to get a good deal if I book closer to year-end?",
    answer:
      "No, since it will be much more difficult to get access to good options in terms of flights, hotels, and other experiences at that time.",
  },
  {
    question: "Is year-end a good time for an incentive travel trip?",
    answer: "Yes; many companies prefer having an incentive travel trip at year-end.",
  },
  {
    question: "What's the ideal trip length for a year-end holiday?",
    answer:
      "This depends on your specific school or work break length, though the extended year-end window often allows for longer trips than other holiday periods.",
  },
];

const yearEndJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: "/images/seasonal/winter-ice-festival.jpg",
    hasBreadcrumb: true,
    mainEntity: faqQuestions(faqs),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Year-End Holiday Deals 2026" },
  ]),
  // The six featured cards, each pointing at the package behind its price.
  packageItemList(
    PATH,
    packages.map((pkg) => ({
      name: pkg.name,
      url: pkg.packageHref,
      price: pkg.price,
      duration: pkg.duration,
    })),
  ),
]);

export default function YearEndPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={yearEndJsonLd} />
      <YearEndContent faqs={faqs} packages={packages} />
    </main>
  );
}
