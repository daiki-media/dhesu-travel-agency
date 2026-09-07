import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import PackingGuideArticle from "./PackingGuideArticle";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  webPage,
} from "@/src/data/structuredData";

// Holiday Idea sheet, row 39. Title and description are copied verbatim.
const TITLE = "Tropical Destination Packing Guide for Malaysian Travellers";
const DESCRIPTION =
  "A complete packing checklist for Malaysian tourists heading to tropical destinations like Bali, Thailand, and Vietnam — essentials and what to leave at home.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "packing list tropical holiday",
  alternates: {
    canonical: "/blog/tropical-holiday-packing-guide",
  },
};

// Taken verbatim from the "Frequently Asked Questions" section of the draft.
// Lives here rather than in the article component so the same list can feed
// both the rendered accordion and the FAQPage markup below.
const FAQS = [
  {
    question: "Which item is the most crucial when going on a tropical vacation?",
    answer:
      "It is lightweight and airy clothing as well as protective accessories like sunscreen, hats, and sunglasses that would be useful no matter what kind of destination you choose.",
  },
  {
    question: "Do I have to pack specific clothing when visiting temples?",
    answer:
      "Yes, since most temples require covering of shoulders and knees, you should always have at least one modest outfit apart from beach clothes.",
  },
  {
    question: "Is reef-safe sunscreen required?",
    answer:
      "Yes, since more tropical beach resorts ask their visitors to use only reef-safe sunscreen products.",
  },
  {
    question: "Is it necessary to pack rain gear even in the dry season?",
    answer:
      "Yes, because it might rain even in the dry season and having rain gear would not hurt.",
  },
  {
    question: "How many outfits should I pack for a week-long tropical trip?",
    answer:
      "Generally 6 to 7 outfits, plus 2 swimwear sets and 1 to 2 modest outfits for cultural or religious site visits.",
  },
  {
    question: "Do I need to pack for every day on a longer trip?",
    answer:
      "No, most tropical destinations offer accessible laundry services, making it unnecessary to pack a full outfit for every single day of an extended trip.",
  },
  {
    question: "What electronics essentials should I not forget?",
    answer:
      "A universal travel adapter and a portable power bank are the most commonly forgotten but genuinely useful electronics essentials.",
  },
  {
    question: "Is insect repellent really necessary for beach-focused trips?",
    answer:
      "It's still worth packing, particularly for evening outdoor activities or any inland, forested, or rural excursions included in your itinerary.",
  },
];

// The FAQ markup is safe because the same questions and answers are rendered
// on the page, in the accordion at the foot of the article.
const articleJsonLd = graph([
  webPage({
    path: "/blog/tropical-holiday-packing-guide",
    name: TITLE,
    description: DESCRIPTION,
    type: ["WebPage", "FAQPage"],
    hasBreadcrumb: true,
    mainEntity: faqQuestions(FAQS),
  }),
  breadcrumbList("/blog/tropical-holiday-packing-guide", [
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: "Packing Guide for Tropical Destinations" },
  ]),
]);

export default function TropicalHolidayPackingGuidePage() {
  return (
    <main className="bg-white overflow-x-hidden">
      <JsonLd data={articleJsonLd} />
      <PackingGuideArticle faqs={FAQS} />
    </main>
  );
}
