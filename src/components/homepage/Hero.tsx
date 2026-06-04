"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import SearchHero from '@/src/components/homepage/SearchHero';
import ArrowUp from "@/src/components/icons/ArrowUp";
import ArrowDown from "@/src/components/icons/ArrowDown";
import Button from "../Button"; // Ensure your Button component supports 'rounded-full'
const slides = [
  {
    bg: "https://www.holidayidea.com.my/promo/img/frntbck2.jpg",
    subtitle: "Get unforgettable pleasure with us",
    title1: "Natural Wonder",
    title2: "of the world",
  },
  {
    bg: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop",
    subtitle: "Experience amazing adventures",
    title1: "Discover Hidden",
    title2: "Gem Destinations",
  },
  {
    bg: "https://www.holidayidea.com.my/upload/gallery/140.jpg",
    subtitle: "Travel the world with us",
    title1: "Explore the",
    title2: "Beautiful World",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
  const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="relative h-[700px] bg-slate-900 overflowX-hidden">
      {/* Background slides */}
      <AnimatePresence initial={false}>
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[current].bg}
            alt={slides[current].title1}
            fill
            priority
            className="object-cover scale-105" // Slight scale for a cinematic feel
            sizes="100vw"
          />
        </motion.div>
      </AnimatePresence>

      {/* Darker Overlay to match image_a30918.jpg */}
      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* Main Content */}
      <div className="relative z-10 h-full max-w-8xl mx-auto px-8 flex items-center">
        <div className="max-w-8xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Subtitle with Script Font */}
              <p className="font-secondary text-white text-3xl md:text-4xl mb-4 drop-shadow-md opacity-90">
                {slides[current].subtitle}
              </p>
              {/* Bold Header */}
              <h1 className="font-primary text-5xl md:text-8xl font-bold text-white leading-[1.05] mb-10 tracking-tight">
                {slides[current].title1}
                <br />
                {slides[current].title2}
              </h1>
            </motion.div>
          </AnimatePresence>

          {/* Action Buttons */}
          <motion.div
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <Button variant="light" showArrow size="lg">Explore Tours</Button>
            <Button variant="transparent" showArrow size="lg"> Our Services</Button>
          </motion.div>
        </div>
      </div>

      {/* Right Side Navigation (Exactly as image_a30918.jpg) */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <button
          onClick={goPrev}
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary-dark transition-colors duration-900 ease-in-out mb-4"
        >
          <ArrowUp />
        </button>

        {/* The Vertical Indicator Track */}
        <div className="relative flex flex-col gap-7 items-center py-2">
            <div className="absolute w-[2px] h-full bg-white/30 left-1/2 -translate-x-1/2" />
            {slides.map((_, i) => (
                <div 
                    key={i} 
                    className={`relative z-10 w-2 h-2 rounded-full transition-all duration-500 ${
                        i === current ? "bg-primary-dark scale-150 shadow-[0_0_10px_#1EB1D1]" : "bg-white/60"
                    }`}
                />
            ))}
        </div>

        <button
          onClick={goNext}
          className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-primary-dark transition-colors duration-900 ease-in-out mt-4"
        >
          <ArrowDown />
        </button>
      </div>
       <SearchHero/>
    </section>
  );
}