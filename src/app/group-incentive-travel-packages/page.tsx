import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import GroupIncentiveContent from "./GroupIncentiveContent";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 29. Title and description are copied verbatim; the
// body copy comes from content-document/tour-types/.
const PATH = "/group-incentive-travel-packages";
const TITLE = "Group & Incentive Travel: Corporate Packages That Reward and Build Teams";
const DESCRIPTION =
  "Corporate group and incentive travel packages from Malaysia \u2014 reward top performers, plan company retreats, and build team culture. Request a quote.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "incentive travel malaysia",
  alternates: { canonical: PATH },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PATH,
    images: [{ url: "/images/tour-types/resort-grounds.jpg" }],
    type: "website",
  },
};

// Owned by the page, not the component: the accordion is a client component, and
// exporting an array from one hands the server a client reference rather than
// the array. The same list drives the rendered FAQ and the FAQPage markup.
const faqs = [
  {
    question:
      "What is the minimum number of people needed for an incentive travel deal from the company?",
    answer:
      "It depends on the destination and type of travel. Both small groups of executives and large groups of employees are possible with proper planning.",
  },
  {
    question: "What is the method of corporate group travel pricing and billing?",
    answer:
      "Corporate reservations usually imply the use of formal itemized quotes and billing by companies.",
  },
  {
    question:
      "Is there an opportunity for different levels of the company incentive travel based on the performance of the employees?",
    answer:
      "There is an option to structure packages in different price brackets within the same program.",
  },
  {
    question: "How early should one plan a corporate incentive trip?",
    answer:
      "It is recommended that planning be done several months in advance, especially when considering larger groups.",
  },
  {
    question: "What are good destinations for regional corporate travel?",
    answer:
      "Some destinations in South East Asia such as Bali, Thailand, and Vietnam are some of the common destinations due to their cost-effectiveness and flight duration.",
  },
  {
    question: "Is it possible to incorporate team building as part of the trip?",
    answer:
      "It is possible to have team building incorporated within the trip in the itinerary.",
  },
  {
    question: "Does a single point of contact come with corporate bookings?",
    answer:
      "It is not necessary for internal employees to coordinate different suppliers because there will be a single consultant who will organize everything on behalf of the company.",
  },
  {
    question: "How do we request a formal quote for our company's group trip?",
    answer:
      "Submit your group size, destination interest, budget range, and trip objectives through the request-a-quote process to begin a detailed consultation.",
  },
];

const groupIncentiveJsonLd = graph([
  webPage({
    path: PATH,
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    image: "/images/tour-types/resort-grounds.jpg",
    hasBreadcrumb: true,
    mainEntity: faqQuestions(faqs),
  }),
  breadcrumbList(PATH, [
    { name: "Home", url: "/" },
    { name: "Group & Incentive Travel" },
  ]),
]);

export default function GroupIncentivePage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={groupIncentiveJsonLd} />
      <GroupIncentiveContent faqs={faqs} />
    </main>
  );
}
