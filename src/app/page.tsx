import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import { faqQuestions, graph, orgRef, webPage } from "@/src/data/structuredData";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Hero from "@/src/components/homepage/Hero";
import TourCategories from "@/src/components/homepage/TourCategories";
// import Tourcat2 from "@/src/components/homepage/Tourcat2";
import PlanYourTrip from "@/src/components/homepage/PlanYourTrip";
import PopularTours from "@/src/components/homepage/PopularTours";
import RecentGallery from "@/src/components/homepage/RecentGallery";
import Stats from "@/src/components/homepage/Stats";
import BrandTicker from "@/src/components/homepage/BrandTicker";
import WhyChooseDhesu from "@/src/components/homepage/WhyChooseDhesu";
import HomeFaq from "@/src/components/homepage/HomeFaq";
import HomeCta from "@/src/components/homepage/HomeCta";
import Footer from "@/src/components/homepage/Footer";

// Holiday Idea sheet, row 6. Before this the homepage set no title at all and
// inherited the root layout's.
const TITLE =
  "Daily Customized & Ready-Made Holidays, Trusted by Malaysian Travellers Since 1988";
const DESCRIPTION =
  "Malaysia's trusted travel agency for 30+ years. Customized and ready-made holidays to Sri Lanka, India, Bali, Nepal, Vietnam & more. Get a free quote.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: "travel agency malaysia",
  alternates: {
    canonical: "/",
  },
};

const FAQS = [
  {
    question: "Since when has Dhesu Travel & Tours been operating?",
    answer:
      "Dhesu Travel & Tours was founded in 1988, providing over 30 years of continuous experience in organizing holiday trips for Malaysian tourists.",
  },
  {
    question: "Can I customize a pre-packaged trip?",
    answer:
      "Yes, you can personalize most pre-packaged trips in terms of hotel class, attractions, and pace of travel. Consult a travel agent about personalizing a trip according to your needs.",
  },
  {
    question: "What is the smallest group size for traveling?",
    answer:
      "Most of our packages are intended for individual and family travelers. The minimum number of travelers is two.",
  },
  {
    question: "Is it cheaper to book through a travel agency or DIY online?",
    answer:
      "It depends on the destination and complexity. Group rates and package bundling often make agency pricing competitive, especially for multi-stop itineraries.",
  },
  {
    question: "Which are some of the popular destinations at the moment?",
    answer:
      "Some of the destinations that are currently searched and booked by Malaysian travellers include Sri Lanka, India, Bali, Nepal, Vietnam, and Cambodia.",
  },
  {
    question: "Is Dhesu Travel & Tours a licensed travel agency?",
    answer:
      "Yes, this agency is licensed to conduct its services and operations in accordance with IATA, PATA, and MATTA licenses.",
  },
  {
    question: "How early should I make my reservation?",
    answer:
      "It depends on the destination and time of the year. However, you are recommended to make your reservations months prior in order to be sure of availability and discounts.",
  },
  {
    question: "How do I obtain an estimate for my holidays?",
    answer:
      "You will need to provide us with your travel requirements in order for us to give you a free and non-binding quote.",
  },
];

const homeJsonLd = graph([
  webPage({
    path: "/",
    name: "Dhesu Travel & Tours",
    description:
      "Daily customized and ready-made holidays worldwide from a Malaysian travel agent operating since 1988.",
    type: ["WebPage", "FAQPage"],
    about: orgRef,
    mainEntity: faqQuestions(FAQS),
  }),
]);

export default function Home() {
  return (
    <main>
      <JsonLd data={homeJsonLd} />
      <TopBar />
      <Navbar />
      <Hero />
      <TourCategories />
      <PlanYourTrip />
      <PopularTours />
      {/* <Tourcat2 /> */}
      <RecentGallery />
      <WhyChooseDhesu />
      <Stats />
      <BrandTicker />
      <HomeFaq faqs={FAQS} />
      <HomeCta />
      <Footer />
    </main>
  );
}