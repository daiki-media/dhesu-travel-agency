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

// Holiday Idea sheet, row 28. The title is unchanged here (DHS-T3 owns it); the
// description is the "Meta Description" line of the DHS-T4 copy, verbatim.
// Per-country versions already exist at /tours/nepal/muslim-friendly and
// /tours/sri-lanka/muslim-friendly; this is the page above them.
const PATH = "/muslim-friendly-holiday-travel-guide";
const TITLE = "Muslim-Friendly Tour Packages: Travel With Confidence and Convenience";
const DESCRIPTION =
  "Explore verified Muslim-friendly tour packages from Malaysia with Dhesu Travel (MOTAC KKKP 1439). Enjoy handpicked halal dining, guaranteed prayer intervals, and authentic cultural exploration across Asia. Packages start from RM1,088 per person.";

// datePublished is when this page was first committed; dateModified is the
// DHS-T4 copy going live.
// The H1 as rendered by the hero (title + titleAccent).
const HEADLINE =
  "Muslim-Friendly Tour Packages Hub: Verified Itineraries, Halal Dining, and Prayer Schedules";
const HERO_IMAGE = "/images/tour-types/mosque-night-istanbul.jpg";

const DATE_PUBLISHED = "2026-09-03T14:46:05+07:00";
const DATE_MODIFIED = "2026-11-05T00:00:00+08:00";

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

// The package table of the copy, rendered as cards. Owned by the page for the
// same reason as the FAQs below; it also drives the ItemList markup.
// nameHref is where the name column links; packageHref is the "Direct Package
// Link" column. Prices are the copy's, as written.
const packages: MuslimFriendlyPackage[] = [
  {
    name: "Kashmir Super Saver",
    nameHref: "/tours/india/kashmir/",
    duration: "4 Days / 3 Nights",
    price: "RM 1,088",
    inclusions:
      "Srinagar houseboat stay, Shikara ride on Dal Lake, Gulmarg gondola base excursion, certified halal meals",
    packageHref: "/tours/india/kashmir/4-day-super-saver/",
  },
  {
    name: "North India Golden Triangle",
    nameHref: "/tours/india/golden-triangle/",
    duration: "5 Days / 4 Nights",
    price: "RM 1,650",
    inclusions:
      "Delhi, Agra, and Jaipur; visits to Jama Masjid & Taj Mahal; designated prayer halts; private AC transport",
    packageHref: "/tours/india/north-india/5-day-golden-triangle-muslim/",
  },
  {
    name: "Nepal Mountain Discovery",
    nameHref: "/tours/nepal/",
    duration: "6 Days / 5 Nights",
    price: "RM 2,180",
    inclusions:
      "Kathmandu & Pokhara valley, Himalayan viewpoint at Sarangkot, visits to local community masjids, halal-friendly dining",
    packageHref: "/tours/nepal/kathmandu-pokhara/6-day-muslim-friendly/",
  },
  {
    name: "Sri Lanka Hill Country Escape",
    nameHref: "/tours/sri-lanka/",
    duration: "4 Days / 3 Nights",
    price: "RM 1,420",
    inclusions:
      "Colombo, Kandy, and Nuwara Eliya tea estates; scenic hill railway trip; halal culinary circuit",
    packageHref: "/tours/sri-lanka/nuwara-eliya/4-day-muslim-friendly/",
  },
  {
    name: "Classic Bali Private Retreat",
    nameHref: "/tours/indonesia/",
    duration: "4 Days / 3 Nights",
    price: "RM 1,290",
    inclusions:
      "Ubud cultural touring, private pool villa options, Tanah Lot sunset, certified halal-certified warungs",
    packageHref: "/tours/indonesia/bali/",
  },
  {
    name: "Grand Kashmir & Ladakh",
    nameHref: "/tours/india/kashmir/",
    duration: "7 Days / 6 Nights",
    price: "RM 3,450",
    inclusions:
      "Srinagar, Pahalgam, Sonamarg & Leh; historic Jama Masjid Srinagar; high-altitude scenic transfers",
    packageHref: "/tours/india/kashmir/",
  },
];

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs: LinkedFaq[] = [
  {
    question: "Which Muslim-friendly tour package from Malaysia is cheapest?",
    answer: [
      "Our most economical package is the 4-Day Kashmir Super Saver, starting at RM 1,088 per person (land arrangement). This itinerary covers traditional houseboat stays on Dal Lake, scenic transport across Srinagar and Gulmarg, daily halal meals, and dedicated prayer stops, delivering strong value without cutting corners on comfort.",
    ],
  },
  {
    question: "Do your guides know prayer times and halal restaurants?",
    answer: [
      "Yes. Our regional tour guides and drivers are trained to accommodate Muslim travel routines. They monitor local prayer calls, identify clean wudhu amenities, schedule prayer breaks along travel routes, and take you exclusively to verified halal restaurants, Muslim-run kitchens, or vetted vegetarian and seafood dining locations.",
    ],
  },
  {
    question: "How are Friday Jumu'ah prayers managed during our trip?",
    answer: [
      "When your tour dates cover a Friday, our operational teams align driving times to stop at accessible local central mosques. Your guide coordinates parking and drop-off to ensure sufficient time for the Khutbah and congregational prayers before continuing with the afternoon's sightseeing schedule.",
    ],
  },
  {
    question: "Can itineraries be customized for private family or senior groups?",
    answer: [
      "Yes. Every package listed on our hub can be converted into a bespoke private tour. We adjust walking paces, supply private multi-seater vans, arrange ground-floor hotel rooms, and incorporate specific dietary requirements upon request.",
    ],
  },
  {
    question: "What documents are required for booking?",
    answer: [
      "Malaysian passport holders must have at least six months of validity from the date of travel. Our operations team provides up-to-date guidance on destination-specific visas, electronic entry cards, and country regulations during the booking process.",
    ],
  },
];

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
  // The six package cards, each pointing at its direct package link.
  packageItemList(
    PATH,
    packages.map((pkg) => ({
      name: pkg.name,
      url: pkg.packageHref,
      price: pkg.price,
      duration: pkg.duration,
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
