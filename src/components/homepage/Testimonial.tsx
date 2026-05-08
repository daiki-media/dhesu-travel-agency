"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Quote, ChevronRight,  Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Adventure Enthusiast",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    text: "Dhesu Travel made our trip to Japan absolutely seamless. From the hidden temples in Kyoto to the bustle of Tokyo, every detail was handled with precision. Highly recommended!",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Solo Traveler",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    text: "The Budget Explorer package is a game changer. I never thought I could see Paris and Amsterdam on such a reasonable budget without sacrificing comfort. Amazing experience!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emma & David",
    role: "Honeymooners",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop",
    text: "Our luxury getaway to the Maldives was a dream come true. The Dhesu team went above and beyond to ensure our honeymoon was special. We'll be booking again next year!",
    rating: 5,
  },
];

export default function Testimonial() {
  return (
    <section className="bg-gradient-to-b from-secondary/10 to-secondary/70 py-24 text-white overflow-hidden relative">
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="text-sm font-black uppercase tracking-[0.4em] text-primary mb-4">
            Voices of Travelers
          </h2>
          <h3 className="text-5xl lg:text-6xl font-black uppercase tracking-tighter leading-none">
            What They <span className="text-gradient">Say About Us</span>
          </h3>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-main bg-[#111] p-8 border border-white/5 hover:border-primary/30 transition-colors group"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-br from-primary to-primarydark p-3 rounded-xl shadow-lg transform group-hover:rotate-12 transition-transform">
                <Quote size={24} fill="white" stroke="white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-primary text-primary" />
                ))}
              </div>

              {/* Text */}
              <p className="text-lg text-white/70 italic leading-relaxed mb-8">
                "{item.text}"
              </p>

              {/* Profile info */}
              <div className="flex items-center gap-4 border-t border-white/10 pt-6">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-primary">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg uppercase tracking-tight">{item.name}</h4>
                  <p className="text-sm text-primary font-medium">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Link */}
        <div className="mt-16 text-center">
          <button className=" gradient font-bold p-6 rounded-full uppercase tracking-widest text-sm flex items-center justify-center gap-2 mx-auto">
            View All 1,500+ Reviews <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}