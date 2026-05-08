"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const destinations = [
  {
    id: 0,
    title: "Travel in Paris",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 1,
    title: "Travel in Japan",
    image: "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Travel in Roma",
    image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TravelHero() {
  const [index, setIndex] = useState(1); // Start with Japan (center)

  const nextStep = () => {
    setIndex((prev) => (prev === destinations.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? destinations.length - 1 : prev - 1));
  };

  // Logic to determine if a slide is left, center, or right
  const getCardStyles = (i: number) => {
    const isCenter = i === index;
    const isLeft = i === (index - 1 + destinations.length) % destinations.length;
    const isRight = i === (index + 1) % destinations.length;

    if (isCenter) return { x: "0%", scale: 1, zIndex: 30, opacity: 1 };
    if (isLeft) return { x: "-45%", scale: 0.85, zIndex: 10, opacity: 0.8 };
    if (isRight) return { x: "45%", scale: 0.85, zIndex: 10, opacity: 0.8 };
    return { x: "0%", scale: 0.5, zIndex: 0, opacity: 0 }; // Hidden others
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* Background & Overlays (Same as your original) */}
      <div className="absolute inset-0">
        <Image 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop" 
            alt="Background" fill className="object-cover" 
        />
        <div className="absolute inset-0 bg-black/45" />
      </div>

      <div className="container relative z-10 container-main grid min-h-screen items-center lg:grid-cols-[0.8fr_1.2fr] gap-10">
        
        {/* LEFT CONTENT (Same as your original code) */}
        <div className="max-w-[600px]">
          <div className="mb-6 flex">
            {[...Array(5)].map((_, i) => <ChevronRight key={i} size={42} className="-mr-5" />)}
          </div>
          <div className="relative border-l-[8px] border-white pl-8">
            <h1 className="text-[70px] lg:text-[100px] font-black uppercase leading-[0.9] tracking-tighter">
              Explore <br />
                <span className="text-gradient">
                  The World
                </span>
            </h1>
          </div>
          <p className="mt-8 text-lg text-white/80">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
          <button className="mt-10 flex items-center gap-4 rounded-full gradient px-10 py-5 text-xl font-bold uppercase hover:scale-105 transition-transform">
            BOOK NOW <ChevronRight className="rounded-full border border-white/30 p-1" size={32} />
          </button>
        </div>

        {/* RIGHT SLIDER (Framer Motion) */}
        <div className="relative flex h-[700px] items-center justify-center">
          
          {/* Nav Buttons */}
          <button onClick={prevStep} className="absolute left-4 z-50 h-16 w-16 rounded-full border-[5px] border-white gradient flex items-center justify-center hover:scale-110 transition shadow-2xl">
            <ChevronLeft size={34} />
          </button>
          
          <button onClick={nextStep} className="absolute right-4 z-50 h-16 w-16 rounded-full border-[5px] border-white gradient flex items-center justify-center hover:scale-110 transition shadow-2xl">
            <ChevronRight size={34} />
          </button>

          {/* Cards Container */}
          <div className="relative w-full h-full flex items-center justify-center">
            {destinations.map((item, i) => {
              const style = getCardStyles(i);
              
              return (
                <motion.div
                  key={item.id}
                  initial={false}
                  animate={style}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute w-[380px] cursor-pointer"
                  onClick={() => setIndex(i)}
                >
                  <div className="bg-white p-5 shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                    <div className="relative h-[380px] w-full overflow-hidden rounded-[30px]">
                      <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    
                    <div className="pt-6 pb-2 text-black">
                      <h3 className="text-3xl font-black">{item.title}</h3>
                      <p className="mt-2 text-sm text-black/60 leading-relaxed">
                        Lorem ipsum praesent ac massa at ligula reet est iaculis.
                      </p>
                      <button className="mt-6 flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-bold gradient uppercase">
                        Read More <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}