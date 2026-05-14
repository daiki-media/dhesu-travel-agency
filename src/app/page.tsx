import "./globals.css";
import Navbar from "@/src/components/Navbar"
import HeroSection from "@/src/components/homepage2/HeroSection"
import PromoCards from "@/src/components/homepage2/PromoCards"
import AboutUs from "@/src/components/homepage2/AboutUs"
import Testimonial from "@/src/components/homepage2/Testimonial"
import OurAdvantage from "@/src/components/homepage2/OurAdvantage"

export default function Home() {
  return (
    <>
    <Navbar />
      <HeroSection />
      <PromoCards />
      <OurAdvantage />
      <AboutUs />
      <Testimonial />
    </>
  );
}
