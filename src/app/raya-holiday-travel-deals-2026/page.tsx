import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import RayaContent from "./RayaContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 34. Title and description are copied verbatim; the
// body copy comes from content-document/sesional&school-holiday/.
const PATH = "/raya-holiday-travel-deals-2026";
const TITLE = "Raya Holiday Packages: Festive Travel Made Muslim-Friendly";
const DESCRIPTION =
  "Raya holiday packages from Malaysia — Muslim-friendly destinations with halal food and prayer access, timed perfectly around the festive break.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "raya holiday package malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: "/images/seasonal/ortakoy-mosque.jpg" }],
    type: "website",
  },
};

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs = [
  {
    question: "What distinguishes a Raya holiday package from other packages?",
    answer:
      "It explicitly guarantees halal meals, incorporates the timing of prayers into the tour planning, and sometimes arranges leisurely family-focused schedules.",
  },
  {
    question: "What locations are ideal for a Raya holiday?",
    answer:
      "Turkey, Indonesia, and UAE are some examples of locations that offer good halal access along with cultural/ festive experiences.",
  },
  {
    question: "Is it better to go during the Raya festival or right after?",
    answer:
      "It depends on the personal choice as people prefer to go right after for celebrate at their homes.",
  },
  {
    question: "When should I make my booking for a Raya holiday?",
    answer:
      "Booking four to six months in advance would be recommended due to the sharp increase in prices and demands for such holidays.",
  },
  {
    question: "Are halal dining arrangements guaranteed in Raya packages?",
    answer:
      'A properly planned Raya package confirms halal-certified dining specifically, rather than relying on general "halal-friendly" assumptions.',
  },
  {
    question: "Is Raya travel suitable for multi-generational family groups?",
    answer:
      "Yes, though it's worth discussing specific mobility, pacing, and group logistics needs with your consultant when planning a larger family trip.",
  },
  {
    question: "Do Raya dates change every year?",
    answer:
      "Yes, since Raya follows the Islamic lunar calendar, exact dates shift annually, making early confirmation of projected dates important for planning.",
  },
  {
    question: "Can domestic travel be part of a Raya holiday plan?",
    answer:
      "Yes, some families choose to celebrate Raya at home before travelling internationally during the remainder of the holiday window.",
  },
];

const rayaJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: "/images/seasonal/ortakoy-mosque.jpg",
    hasBreadcrumb: true,
    mainEntity: faqQuestions(faqs),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Raya Holiday Packages" },
  ]),
]);

export default function RayaPage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={rayaJsonLd} />
      <RayaContent faqs={faqs} />
    </main>
  );
}
