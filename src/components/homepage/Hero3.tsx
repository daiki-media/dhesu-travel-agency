"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

const destinations = [
  { id: 1, title: "SRI LANKA", category: "TARVEL DEALS", image: "https://www.holidayidea.com.my/upload/gallery/10532.jpg" },
  { id: 2, title: "INDIA", category: "TRAVEL DEALS", image: "https://www.holidayidea.com.my/upload/gallery/10531.jpg" },
  { id: 3, title: "HIMALAYAS", category: "TRAVEL DEALS", image: "https://www.holidayidea.com.my/upload/gallery/14150.jpg" },
];

export default function ExactAlaskaHero() {
  const [index, setIndex] = useState(1);
  const nextSlide = () => setIndex((prev) => (prev + 1) % destinations.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + destinations.length) % destinations.length);

  const current = destinations[index];
  const prev = destinations[(index - 1 + destinations.length) % destinations.length];
  const next = destinations[(index + 1) % destinations.length];

  return (
    <section className="relative min-h-[950px] w-full">
      {/* Background Image - Exactly like */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://www.holidayidea.com.my/promo/img/frntbck.jpg"
          alt="dhesu"
          fill
          className="object-cover object-center brightness-90"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark to-transparent" />
      </div>

      <div className="relative z-10 flex flex-col items-center pt-24">
        <div className="relative mb-4 flex flex-col items-center">
          <h1 className="text-[12vw] font-black leading-none tracking-tighter text-white/90 lg:text-[180px]">
             <span className="text-gradient">
               EXPLORE
             </span>
          </h1>
          <p className="mt-[-10px] text-sm font-bold uppercase tracking-[0.6em] text-white lg:text-base">
            Lets Plan Your Trip Now
          </p>
        </div>

        {/* Card Grid - Positioned to overlap the landscape */}
        <div className="mt-16 flex w-full items-end justify-center px-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-0">
            
            {/* Side Card (Left) */}
            <div className="hidden transform transition-all duration-500 md:block md:translate-y-12">
              <AlaskaCard item={prev} />
            </div>

            {/* Center Active Card (Taller/Larger) */}
            <div className="z-30 scale-105 shadow-2xl rounded-lg">
              <AlaskaCard item={current} isActive />
            </div>

            {/* Side Card (Right) */}
            <div className="hidden transform transition-all duration-500 md:block md:translate-y-12">
              <AlaskaCard item={next} />
            </div>
          </div>
        </div>

        {/* Navigation Arrows positioned on the sides of the center card */}
        <div className="absolute left-1/2 top-[70%] z-40 flex w-full max-w-[500px] -translate-x-1/2 justify-between px-4">
           <button onClick={prevSlide} className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg hover:bg-secondary-dark transition-all">
             <ChevronLeft size={28} strokeWidth={3} />
           </button>
           <button onClick={nextSlide} className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-white shadow-lg hover:bg-secondary-dark transition-all">
             <ChevronRight size={28} strokeWidth={3} />
           </button>
        </div>
      </div>

      {/* Decorative Topo Lines Background at the bottom */}
      <div className="absolute bottom-0 h-[200px] w-full bg-white opacity-100" 
           style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>
    </section>
  );
}

function AlaskaCard({ item, isActive }: { item: any; isActive?: boolean }) {
  return (
    <div className={`flex flex-col bg-white shadow-xl rounded-lg min-w-[350px] ${isActive ? 'z-20' : 'z-10'}`}>
      <div className={`relative w-full overflow-hidden ${isActive ? 'h-[320px]' : 'h-[280px]'}`}>
        <Image src={item.image} alt={item.title} fill className="object-cover rounded-t-lg" />
      </div>
      
      <div className="flex flex-col items-center p-8 text-center">
        <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
          {item.category}
        </span>
        <h3 className="mt-2 text-4xl font-black uppercase tracking-tighter text-secondary">
          {item.title}
        </h3>
        
        <p className="mt-6 max-w-[220px] text-[13px] leading-relaxed text-gray-700">
          Cook Inlet and the Kenai Peninsula are known for some of the best Alaskan fishing charters. 
          Our cabins keep you close to the action.
        </p>

        <button className="mt-8 bg-secondary px-8 py-3 text-xs font-bold uppercase tracking-widest text-white transition-colors hover:bg-secondary-dark">
          Read More
        </button>
      </div>
    </div>
  );
}