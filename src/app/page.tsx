import type { Metadata } from "next";
import { Suspense } from "react";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Hero from "@/src/components/homepage/Hero";
import TourCategories from "@/src/components/homepage/TourCategories";
// Kept for reference — see the commented-out usage below.
// import Tourcat2 from "@/src/components/homepage/Tourcat2";
import PopularDestination from "@/src/components/homepage/PopularDestination";
import PlanYourTrip from "@/src/components/homepage/PlanYourTrip";
import PopularTours from "@/src/components/homepage/PopularTours";
import RecentGallery from "@/src/components/homepage/RecentGallery";
import Stats from "@/src/components/homepage/Stats";
import BrandTicker from "@/src/components/homepage/BrandTicker";
import Footer from "@/src/components/homepage/Footer";

// Title and description are inherited from the root layout.
export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      {/* Each below-the-fold carousel is its own Suspense boundary so React can
          hydrate them as separate units and yield to the main thread in between,
          instead of running one long task that blocks the hero paint. */}
      <Suspense>
        <TourCategories />
      </Suspense>
      <Suspense>
        <PopularDestination />
      </Suspense>
      <PlanYourTrip />
      <PopularTours />
      {/* Duplicate of <TourCategories /> above — same heading, images and links.
          Kept in the tree but not rendered: it doubled the destination cards in
          the DOM and the hydration work behind them. */}
      {/* <Tourcat2 /> */}
      <RecentGallery />
      <Stats />
      <BrandTicker />
      <Footer />
    </main>
  );
}