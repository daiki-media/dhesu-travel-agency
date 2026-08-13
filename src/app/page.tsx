import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import { graph, orgRef, webPage } from "@/src/data/structuredData";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Hero from "@/src/components/homepage/Hero";
import TourCategories from "@/src/components/homepage/TourCategories";
// import Tourcat2 from "@/src/components/homepage/Tourcat2";
import PopularDestination from "@/src/components/homepage/PopularDestination";
import PlanYourTrip from "@/src/components/homepage/PlanYourTrip";
import PopularTours from "@/src/components/homepage/PopularTours";
import RecentGallery from "@/src/components/homepage/RecentGallery";
import Stats from "@/src/components/homepage/Stats";
import BrandTicker from "@/src/components/homepage/BrandTicker";
import Footer from "@/src/components/homepage/Footer";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

const homeJsonLd = graph([
  webPage({
    path: "/",
    name: "Dhesu Travel & Tours",
    description:
      "Daily customized and ready-made holidays worldwide from a Malaysian travel agent operating since 1988.",
    about: orgRef,
    mainEntity: orgRef,
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
      <PopularDestination />
      <PlanYourTrip />
      <PopularTours />
      {/* <Tourcat2 /> */}
      <RecentGallery />
      <Stats />
      <BrandTicker />
      <Footer />
    </main>
  );
}