"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, MapPin, Star } from "lucide-react";

const featuredDestinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    location: "Indonesia",
    image: "https://www.holidayidea.com.my/upload/gallery/10531.jpg",
    rating: 4.8,
    price: "RM 899",
    url: "https://www.holidayidea.com.my/BALI"
  },
  {
    id: 2,
    name: "Tokyo, Japan",
    location: "Japan",
    image: "https://www.holidayidea.com.my/upload/gallery/14620.jpg",
    rating: 4.9,
    price: "RM 1,299",
    url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Japan"
  },
  {
    id: 3,
    name: "Paris, France",
    location: "France",
    image: "https://www.holidayidea.com.my/upload/gallery/13579.jpg",
    rating: 4.7,
    price: "RM 1,499",
    url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Paris"
  },
  {
    id: 4,
    name: "Maldives",
    location: "Maldives",
    image: "https://www.holidayidea.com.my/upload/gallery/14156.jpg",
    rating: 4.9,
    price: "RM 2,199",
    url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Maldives"
  },
  {
    id: 5,
    name: "Bangkok, Thailand",
    location: "Thailand",
    image: "https://www.holidayidea.com.my/upload/gallery/15256.22",
    rating: 4.6,
    price: "RM 599",
    url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Bangkok"
  },
  {
    id: 6,
    name: "Seoul, South Korea",
    location: "South Korea",
    image: "https://www.holidayidea.com.my/upload/gallery/1636",
    rating: 4.8,
    price: "RM 1,099",
    url: "https://www.holidayidea.com.my/promo/search-travel.php?s=Seoul"
  }
];

export default function FeaturedDestinations() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="relative py-24 bg-gradient-to-b from-secondary/10 to-secondary/70 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div
          >
            <span className="text-primary font-bold text-sm uppercase tracking-wider border-l-4 border-primary pl-3">
              EXPLORE DESTINATIONS
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-4 mb-4 text-gray-900">
              Popular Destinations
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the world's most amazing places with our exclusive travel packages
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDestinations.map((dest, idx) => (
            <div
              key={dest.id}
              className="group relative"
            >
              <Link href={dest.url} target="_blank">
                <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-lg">
                  {/* Image */}
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Rating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-1 shadow-lg">
                    <Star size={14} className="text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-bold text-gray-800">{dest.rating}</span>
                  </div>

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-1 text-sm mb-2">
                      <MapPin size={14} />
                      <span>{dest.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{dest.name}</h3>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-2xl font-bold text-primary">{dest.price}</span>
                        <span className="text-sm"> /person</span>
                      </div>
                      <div
                        className="gradient rounded-full p-2 shadow-lg"
                      >
                        <ChevronRight size={20} />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div
          className="text-center mt-12"
        >
          <Link
            href="https://www.holidayidea.com.my/promo/search-travel.php"
            className="inline-flex items-center gap-2 gradient px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl group"
          >
            View All Destinations
            <ChevronRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}