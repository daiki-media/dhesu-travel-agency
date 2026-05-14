"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ZoomIn } from "lucide-react";

const images = [
  {
    src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?q=80&w=700&auto=format&fit=crop",
    alt: "Beach relaxation",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?q=80&w=600&auto=format&fit=crop",
    alt: "River boat",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=800&auto=format&fit=crop",
    alt: "Skiing adventure",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=600&auto=format&fit=crop",
    alt: "Friends selfie",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=700&auto=format&fit=crop",
    alt: "Cruise ship",
    span: "row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=600&auto=format&fit=crop",
    alt: "Mountain valley",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop",
    alt: "Tropical island",
    span: "",
  },
];

export default function RecentGallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-dancing text-primary-dark text-2xl md:text-3xl mb-2">
            Make Your Tour More Pleasure
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-navy">
            Recent Gallery
          </h2>
        </motion.div>

        {/* Mosaic grid */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 grid-rows-2 gap-4 h-[600px]"
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {images.map((img, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer ${img.span}`}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.05 * i + 0.2 }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-600 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn size={20} className="text-primary-dark" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
