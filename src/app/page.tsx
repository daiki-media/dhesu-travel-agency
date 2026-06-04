import "./index.css"
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Hero from "@/src/components/homepage/Hero";
import TourCategories from "@/src/components/homepage/TourCategories";
import Tourcat2 from "@/src/components/homepage/Tourcat2";
import PopularDestination from "@/src/components/homepage/PopularDestination";
import PlanYourTrip from "@/src/components/homepage/PlanYourTrip";
import PopularTours from "@/src/components/homepage/PopularTours";
import RecentGallery from "@/src/components/homepage/RecentGallery";
import Stats from "@/src/components/homepage/Stats";
import BrandTicker from "@/src/components/homepage/BrandTicker";
import BlogSection from "@/src/components/homepage/BlogSection";
import Footer from "@/src/components/homepage/Footer";

export default function Home() {
  return (
    <main>
      <TopBar />
      <Navbar />
      <Hero />
      <TourCategories />
      <PopularDestination />
      <PlanYourTrip />
      <PopularTours />
      <Tourcat2 />
      <RecentGallery />
      <Stats />
      <BrandTicker />
      <BlogSection />
      <Footer />
    </main>
  );
}