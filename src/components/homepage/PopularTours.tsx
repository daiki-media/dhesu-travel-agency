"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { MapPin, Clock, Users, ArrowRight, Star} from "lucide-react";

const tours = [
  {
    name: "Greece Tour Package",
    location: "Athens, Greece",
    days: "7 Days / 6 Nights",
    people: "Max 12 People",
    rating: 4.8,
    reviews: 124,
    price: "$980.00",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=700&auto=format&fit=crop",
    badge: "Popular",
  },
  {
    name: "Italy Tour Package",
    location: "Amalfi, Italy",
    days: "5 Days / 4 Nights",
    people: "Max 10 People",
    rating: 4.8,
    reviews: 98,
    price: "$980.00",
    image:
      "https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=700&auto=format&fit=crop",
    badge: "",
  },
  {
    name: "Dubai Tour Package",
    location: "Dubai, UAE",
    days: "6 Days / 5 Nights",
    people: "Max 15 People",
    rating: 4.8,
    reviews: 210,
    price: "$980.00",
    image:
      "https://images.unsplash.com/photo-1582672060674-bc2bd808a8b5?q=80&w=700&auto=format&fit=crop",
    badge: "Featured",
  },
  {
    name: "Switzerland Tour",
    location: "Swiss Alps",
    days: "8 Days / 7 Nights",
    people: "Max 8 People",
    rating: 4.8,
    reviews: 87,
    price: "$980.00",
    image:
      "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?q=80&w=700&auto=format&fit=crop",
    badge: "",
  },
];

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
          <p className="font-dancing text-primary-dark text-2xl md:text-3xl mb-2">
            Best Place For You
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-navy mb-4">
            Most Popular Tour
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-[15px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.name}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-shadow duration-400 group cursor-pointer"
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3]">
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
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="font-bold text-teal-navy text-[16px] mb-2 group-hover:text-primary transition-colors duration-200">
                  {tour.name}
                </h3>

                {/* Stars */}
                <div className="flex items-center gap-1.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={13} className="text-amber-400" />
                  ))}
                  <span className="text-gray-500 text-xs ml-1">({tour.rating} Rating)</span>
                </div>

                {/* Details */}
                <div className="flex flex-col gap-1.5 mb-4 text-[13px] text-gray-500">
                  <span className="flex items-center gap-1.5">
                    <MapPin size={12} className="text-primary" /> {tour.location}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={12} className="text-primary" /> {tour.days}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Users size={12} className="text-primary" /> {tour.people}
                  </span>
                </div>

                {/* Price + button */}
                <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                  <div>
                    <span className="text-xl font-bold text-primary">{tour.price}</span>
                    <span className="text-gray-400 text-xs">/Person</span>
                  </div>
                  <button className="flex items-center gap-1.5 bg-primary-dark text-white px-4 py-2 rounded-full text-xs font-semibold hover:bg-primary transition-colors duration-200">
                    Book Now <ArrowRight size={10} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
