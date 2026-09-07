import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import AboutContent from "./AboutContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  orgRef,
  webPage,
} from "@/src/data/structuredData";

const TITLE =
  "About Dhesu Travel & Tours: 30+ Years of Planning Malaysian Holidays";
const DESCRIPTION =
  "Learn about Dhesu Travel & Tours' 30+ year history, credentials, and why thousands of Malaysian travellers trust us to plan their holidays.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "travel agency malaysia trusted",
  alternates: {
    canonical: "/about-us",
  },
};
const FAQS = [
  {
    question: "In which year did Dhesu Travel & Tours commence operations?",
    answer:
      "The establishment of Dhesu Travel & Tours dates back to 1988, making the business entity over three decades old in terms of travel experience.",
  },
  {
    question: "What does IATA registration imply for the customer?",
    answer:
      "IATA registration is a symbol of credible status within the world of airlines and travel and assures the customer of dependable ticketing/booking process.",
  },
  {
    question: "Is Dhesu Travel & Tours a KKKP-registered travel agency of Malaysia?",
    answer: "Yes, the company is a KKKP-registered travel agency of Malaysia.",
  },
  {
    question: "In what kind of travels do Dhesu specialise?",
    answer:
      "The company specialises in travelling for individuals and families, such as cultural, religious, beach, and adventure travels in destinations around the globe.",
  },
  {
    question: "Where is Dhesu Travel & Tours based?",
    answer:
      "The agency is based at Wisma Dhesu in Bangsar, Kuala Lumpur, with staff available for in-person, telephone, and even online consultations.",
  },
  {
    question:
      "What is the significance of the agency's experience in relation to your travel plans?",
    answer:
      "Experience indicates reliability over the years through changes within the industry environment, unlike a new and unregistered agency.",
  },
  {
    question: "Does Dhesu provide group travel arrangements or individual travel?",
    answer:
      "Dhesu Travel & Tours offers individual and family tourism, comprising a minimum of two tourists, as well as group travel depending on the country visited.",
  },
  {
    question: "How do I get in touch with Dhesu Travel & Tours?",
    answer:
      "You can contact the agency using the telephone and WhatsApp numbers 019 336 4465 | 019 263 8877 / 03 2287 5525, or visit the office in Bangsar.",
  },
];
const aboutJsonLd = graph([
  webPage({
    path: "/about-us",
    name: TITLE,
    description: DESCRIPTION,
    type: ["AboutPage", "FAQPage"],
    hasBreadcrumb: true,
    about: orgRef,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/about-us", [
    { name: "Home", url: "/" },
    { name: "About Us" },
  ]),
]);

export default function AboutUsPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={aboutJsonLd} />
      <AboutContent faqs={FAQS} />
    </main>
  );
}
