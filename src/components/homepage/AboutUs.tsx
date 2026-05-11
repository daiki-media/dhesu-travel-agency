"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden bg-white py-24 text-black">
      {/* Background Decorative Element (Subtle logo mark or shape) */}
      <div className="absolute -left-20 top-0 opacity-5 select-none">
        <h2 className="text-[200px] font-black uppercase leading-none">DHESU</h2>
      </div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          
          {/* LEFT SIDE: Overlapping Images (Matching your reference) */}
          <div className="relative h-[500px] w-full">
            {/* Background Image (The larger one) */}
            <div 
              className="absolute left-0 top-0 h-[350px] w-[80%] overflow-hidden rounded-main shadow-2xl"
            >
              <Image
                src="https://www.holidayidea.com.my/upload/gallery/14156.jpg"
                alt="Travel Landscape"
                fill
                className="object-cover"
              />
            </div>

            {/* Foreground Image (The overlapping one) */}
            <div 
              className="absolute bottom-0 right-0 z-20 h-[300px] w-[70%] overflow-hidden rounded-main border-[10px] border-white shadow-[-20px_20px_50px_rgba(0,0,0,0.2)]"
            >
              <Image
                src="https://www.holidayidea.com.my/upload/gallery/15256.jpg"
                alt="Travel Experience"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <span className="text-sm font-black uppercase tracking-[0.3em] text-primary">
                Since 1988
              </span>
              <h2 className="text-5xl font-black uppercase leading-[1.1] tracking-tighter lg:text-6xl">
                About <br />
                <span className="text-gradient">Dhesu Travel</span>
              </h2>
            </div>

            <div className="h-1.5 w-20 bg-primary" />

            <p className="text-lg leading-relaxed text-muted">
              The goal of Dhesu (formerly Gerry&apos;s Travel) was realized in 1988 with a 
              vision to redefine the air travel industry. As an IATA-based agency, we provide 
              a wide range of services to the business and leisure sectors.
            </p>

            <p className="text-lg leading-relaxed text-muted">
              With offices spanning across the globe, Dhesu is still expanding today despite 
              its modest origins. We benefit greatly from our extensive national 
              infrastructure and operational excellence.
            </p>

            {/* CTA Button */}
            <button 
              className="group mt-4 flex items-center gap-4 self-start text-xl font-black uppercase tracking-widest text-black"
            >
              Read Our Story 
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition-colors group-hover:bg-primarydark">
                <ArrowRight size={24} />
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}