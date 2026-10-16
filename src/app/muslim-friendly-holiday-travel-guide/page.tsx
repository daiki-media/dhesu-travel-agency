import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import MuslimFriendlyContent from "./MuslimFriendlyContent";
import { linkedFaqsAsText, type LinkedFaq } from "@/src/data/linkedFaq";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 28. Title and description are copied verbatim.
// Per-country versions already exist at /tours/nepal/muslim-friendly and
// /tours/sri-lanka/muslim-friendly; this is the page above them.
const PATH = "/muslim-friendly-holiday-travel-guide";
const TITLE = "Muslim-Friendly Tour Packages: Travel With Confidence and Convenience";
const DESCRIPTION =
  "Muslim-friendly holiday packages from Malaysia with halal food arrangements and prayer facility access. Travel with confidence and convenience.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "muslim tour package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: "/images/tour-types/mosque-night-istanbul.jpg" }],
    type: "website",
  },
};

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs: LinkedFaq[] = [
  {
    question: "What makes a package Muslim-friendly rather than a normal tour?",
    answer: [
      "In a regular package, halal food and prayer are left to chance. In a Muslim-friendly one they’re planned: meals are arranged with halal in mind, prayer stops are built into the day, and activities are chosen with modesty in mind.",
    ],
  },
  {
    question: "Which destinations are easiest for a first Muslim-friendly trip?",
    answer: [
      "Indonesia is the simplest, because halal food is the norm and flights are short. Kashmir and Kerala are also easy for halal access, and a short Golden Triangle trip suits travellers who want heritage sites.",
    ],
  },
  {
    question: "Can I be sure of halal food at hotels?",
    answer: [
      "Not automatically. Ask whether breakfast is prepared in a halal-certified kitchen and whether included meals are halal or only pork-free. In non-Muslim countries, a hotel may offer vegetarian or seafood options instead of certified halal meat.",
    ],
  },
  {
    question: "How do I know a restaurant’s halal claim is genuine?",
    answer: [
      "Look for a certificate from a recognised body, such as JAKIM in Malaysia or BPJPH in Indonesia. In countries without a single regulator, like India, a Muslim-owned restaurant is a good sign but isn’t the same as certification.",
    ],
  },
  {
    question: "How are prayers handled during sightseeing?",
    answer: [
      "Good itineraries leave buffers around prayer times and note where the nearest mosque or prayer space is. Fridays and long transfer days need extra thought. Tell your guide your prayer needs when you book.",
    ],
  },
  {
    question: "Is Europe suitable for Muslim-friendly travel?",
    answer: [
      "Yes, but it takes more planning. Halal options are growing in big cities, though prayer spaces are less common than in Muslim-majority countries. We arrange ",
      { text: "European trips", href: "/tours/europe/" },
      " to order.",
    ],
  },
  {
    question: "Does a Muslim-friendly package cost more?",
    answer: [
      "Not necessarily. The cost depends on the destination, hotel and season rather than the label. Some routes add a little for halal-certified meals, so ask for a quote that shows what’s included.",
    ],
  },
  {
    question: "Can I combine a Muslim-friendly tour with a family holiday?",
    answer: [
      "Yes. Family routes such as Kerala and Bali combine halal convenience with activities for children and grandparents, and the slower pace suits mixed-age groups.",
    ],
  },
];

const muslimFriendlyJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: "/images/tour-types/mosque-night-istanbul.jpg",
    hasBreadcrumb: true,
    mainEntity: faqQuestions(linkedFaqsAsText(faqs)),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Muslim-Friendly Tour Packages" },
  ]),
]);

export default function MuslimFriendlyPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={muslimFriendlyJsonLd} />
      <MuslimFriendlyContent faqs={faqs} />
    </main>
  );
}
