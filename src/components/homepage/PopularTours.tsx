"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Users, Star } from "lucide-react";
import Button from "@/src/components/Button";
import { featuredTours } from "@/src/data/featuredTours";

// Show the first four on the homepage; the rest live on /tours.
const tours = featuredTours.slice(0, 4);

export default function PopularTours() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-pattern" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-4"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-secondary text-primary-dark text-2xl md:text-3xl mb-2">
            Best Place For You
          </p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-teal-navy mb-4">
            Most Popular Tours
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
            Our bestselling private packages across Asia — every price is per person on twin
            sharing, with all transfers, entrance fees and an English-speaking guide included.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.href}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-400 group flex flex-col"
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {/* Image */}
              <Link href={tour.href} className="relative overflow-hidden aspect-[4/3] block">
                <Image
                  src={tour.image}
                  alt={tour.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                {tour.badge && (
                  <span className="absolute top-3 left-3 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {tour.badge}
                  </span>
                )}
              </Link>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <Link href={tour.href}>
                  <h3 className="font-bold text-teal-navy text-[16px] mb-2 group-hover:text-primary transition-colors duration-200">
                    {tour.name}
                  </h3>
                </Link>

                {/* Stars */}
                <div className="flex items-center gap-1.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="text-amber-400" />
                  ))}
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1.5 mb-4 text-[13px] text-gray-500 flex-1">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-primary" /> {tour.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} className="text-primary" /> {tour.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={12} className="text-primary" /> {tour.groupSize}
                  </span>
                </div>

                {/* Price + button */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xl font-bold text-primary">{tour.price}</span>
                      <span className="text-gray-400 text-xs line-through">
                        {tour.originalPrice}
                      </span>
                    </div>
                    <span className="text-gray-400 text-xs">/person</span>
                  </div>
                  <Link href={tour.href}>
                    <Button variant="dark" size="sm">Book Now</Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View all */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 20, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/tours">
            <Button variant="light" showArrow size="lg">
              View All Tour Packages
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
