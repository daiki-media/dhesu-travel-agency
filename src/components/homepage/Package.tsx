"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, ChevronRight } from "lucide-react";

const packages = [
  {
    id: 1,
    title: "BUDGET EXPLORER",
    image: "https://www.holidayidea.com.my/upload/gallery/10531.jpg",
    features: ["Daily breakfast", "Travel insurance", "Guided city tour", "3-star hotel"],
  },
  {
    id: 2,
    title: "ADVENTURE THRILL",
    image: "https://www.holidayidea.com.my/upload/gallery/14620.jpg",
    features: ["Daily breakfast", "Travel insurance", "Guided city tour", "3-star hotel"],
  },
  {
    id: 3,
    title: "LUXURY GETAWAY",
    image: "https://www.holidayidea.com.my/upload/gallery/13579.jpg",
    features: ["Daily breakfast", "Travel insurance", "Guided city tour", "3-star hotel"],
  },
];

export default function SpecialPackages() {
  return (
    <section className="bg-primarydark/10 py-20 text-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-4xl lg:text-5xl font-black uppercase tracking-tighter">
            Special <span className="text-gradient">Packages</span>
          </h2>
          <div className="mt-2 h-1.5 w-24 bg-primary" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, idx) => (
            <div
              key={pkg.id}
              className="group relative overflow-hidden rounded-[24px] bg-secondary/50 p-5 shadow-2xl transition-all hover:bg-secondary"
            >
              {/* Image Container */}
              <div className="relative h-[240px] w-full overflow-hidden rounded-[20px]">
                <Image
                  src={pkg.image}
                  alt={pkg.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Subtle dark overlay on image */}
                <div className="absolute inset-0 bg-black/10" />
              </div>

              {/* Content */}
              <div className="mt-6 px-2">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-white">
                  {pkg.title}
                </h3>

                {/* Features Grid (Matching your image) */}
                <div className="mt-5 grid grid-cols-2 gap-y-3">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <CheckCircle2 size={18} className="text-white opacity-80" />
                      <span className="text-sm font-medium text-white/70">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Book Now Button (Using your global .gradient class) */}
                <button className="gradient mt-8 flex w-full items-center justify-center gap-2 rounded-full py-4 text-lg font-bold uppercase transition-all active:scale-95">
                  BOOK NOW
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}