import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import MuslimFriendlyContent, { type MuslimFriendlyPackage } from "./MuslimFriendlyContent";
import { linkedFaqsAsText, type LinkedFaq } from "@/src/data/linkedFaq";
import {
  blogPosting,
  breadcrumbList,
  faqQuestions,
  graph,
  packageItemList,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 28. Title, meta description, H1 and copy are the
// DHE-02 copy's, verbatim. The site adds no "| Dhesu" suffix to page titles, so
// the copy's full title is used, not its shortened fallback.
// Per-country versions already exist at /tours/nepal/muslim-friendly and
// /tours/sri-lanka/muslim-friendly; this is the page above them.
const PATH = "/muslim-friendly-holiday-travel-guide";
const TITLE = "Muslim-Friendly Tour Packages 2026/27 from Malaysia | From RM1,288";
const DESCRIPTION =
  "Muslim-friendly tour packages from Malaysia: Nepal, Sri Lanka, India, Bali and Sabah. Halal meals arranged, prayer times planned. Licensed KKKP 1439. Get a quote.";

// The H1 as rendered by the hero.
const HEADLINE =
  "Muslim-Friendly Tour Packages from Malaysia: Halal Dining & Prayer-Planned Itineraries (2026/27)";
const HERO_IMAGE = "/images/tour-types/mosque-night-istanbul.jpg";

// datePublished is when this page was first committed; dateModified is the
// DHE-02 copy going live.
const DATE_PUBLISHED = "2026-09-03T14:46:05+07:00";
const DATE_MODIFIED = "2026-11-13T00:00:00+08:00";

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
};

// The package table of the copy, row for row. Owned by the page for the same
// reason as the FAQs below; it also drives the ItemList markup. The copy's link
// cells are placeholders, so packageHref is the package URL the DHE-02 brief
// gives for each row.
const packages: MuslimFriendlyPackage[] = [
  {
    name: "6D Nepal Mountain Discovery (Muslim-Friendly)",
    days: "6 Days / 5 Nights",
    price: "From RM2,088",
    muslimFriendly:
      "Arranged halal meals in Kathmandu & Pokhara, prayer breaks along the Trishuli highway, and visits to Nepali Jame Masjid",
    linkLabel: "View Nepal Package",
    packageHref: "/tours/nepal/muslim-friendly/",
  },
  {
    name: "4D Sri Lanka Nuwara Eliya Muslim-Friendly",
    days: "4 Days / 3 Nights",
    price: "From RM1,288",
    muslimFriendly:
      "Halal restaurants arranged in Colombo, Kandy & Nuwara Eliya, prayer stops near historic mosques including Red Mosque (Jami Ul-Alfar)",
    linkLabel: "View Sri Lanka Package",
    packageHref: "/tours/sri-lanka/nuwara-eliya/4-day-muslim-friendly/",
  },
  {
    name: "5D North India Golden Triangle (Muslim-Friendly Option)",
    days: "5 Days / 4 Nights",
    // The copy's "(Confirm price with client)" is a note to the team, not page text.
    price: "Request Quote",
    muslimFriendly:
      "Halal meals arranged in Delhi, Agra & Jaipur, guided visit to Jama Masjid Delhi, and scheduled Zohor/Asar prayer stops",
    linkLabel: "View Golden Triangle",
    packageHref: "/tours/india/golden-triangle/",
  },
  {
    name: "4D Kashmir Super Saver",
    days: "4 Days / 3 Nights",
    price: "From RM1,088",
    muslimFriendly:
      "Dal Lake cedar houseboat stay, daily halal Kashmiri meals arranged, and convenient prayer halts in Srinagar & Gulmarg",
    linkLabel: "View Kashmir Package",
    packageHref: "/tours/india/kashmir/",
  },
  {
    name: "Bali Private Muslim-Friendly Tours",
    days: "3D to 5D (Custom)",
    price: "From RM398",
    muslimFriendly:
      "Private vehicle & driver, halal meals arranged on request at Muslim-owned and vetted warungs, flexible Solat timing",
    linkLabel: "View Bali Tours",
    packageHref: "/tours/indonesia/bali/",
  },
  {
    name: "Sabah Nature & Island Getaways",
    days: "3D to 5D",
    price: "Request Quote",
    muslimFriendly:
      "Domestic Malaysian holiday with halal dining readily available, mosque stops mapped, and family-friendly private or group pacing",
    linkLabel: "View Sabah Tours",
    packageHref: "/tours/malaysia/sabah/",
  },
];

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs: LinkedFaq[] = [
  {
    question: "How much is a Muslim-friendly tour package from Malaysia?",
    answer: [
      "Land-arrangement prices start from RM398 per person for short private Bali tours, RM1,088 per person for our 4-day Kashmir package, RM1,288 per person for our 4-day Sri Lanka Nuwara Eliya Muslim-friendly tour, and RM2,088 per person for our 6-day Nepal Muslim-friendly package (based on twin sharing, excluding international flights). Multi-day Sabah and 5-day India Golden Triangle packages are quoted according to your travel dates and group size.",
    ],
  },
  {
    question: "Are meals halal on Dhesu Muslim-friendly tours?",
    answer: [
      "Yes—halal meals are arranged throughout your itinerary, and our guides recommend vetted halal restaurants and Muslim-owned eateries at every stop. Because official halal certification bodies vary by country (especially in destinations such as Nepal, India, and Bali), we arrange dining at Muslim-owned kitchens, locally recognized halal establishments, or dedicated seafood and vegetarian restaurants free from alcohol and non-halal ingredients.",
    ],
  },
  {
    question: "Can we join a Muslim-friendly group tour in December 2026?",
    answer: [
      "Yes. December 2026 falls during the Malaysian year-end school holidays, and we run both small-group departures and private family departures for Kashmir, Nepal, Sri Lanka, Bali, and Sabah. Because December flights and hotels fill up early, we recommend requesting a quote at least 6 to 8 weeks ahead to lock in twin-sharing rates and preferred dates.",
    ],
  },
  {
    question: "Do your guides plan daily prayer times and Friday Jumu'ah stops?",
    answer: [
      "Yes. Our local guides and drivers track daily Solat windows along your route and schedule stops at local mosques or clean prayer facilities with wudhu access. On Fridays, itineraries are timed so male guests can attend Jumu'ah prayers comfortably.",
    ],
  },
  {
    question: "Can we customize a private itinerary or add flights from Kuala Lumpur?",
    answer: [
      "Yes. Every package on this page can be customized for private families, couples, or corporate groups, and our Kuala Lumpur ticketing desk can quote return flights from KLIA alongside your land package.",
    ],
  },
];

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
  // The six package rows, each pointing at its package URL.
  packageItemList(
    PATH,
    packages.map((pkg) => ({
      name: pkg.name,
      url: pkg.packageHref,
      price: pkg.price,
      duration: pkg.days,
    })),
  ),
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
