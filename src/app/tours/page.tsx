"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import { tourPages } from "@/src/data/tourPages";

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.12, ease: easeOut },
  }),
};

const badgeColors: Record<string, string> = {
  orange: "bg-orange-100 text-orange-700",
  blue: "bg-blue-100 text-blue-700",
  green: "bg-green-100 text-green-700",
  purple: "bg-purple-100 text-purple-700",
  red: "bg-red-100 text-red-700",
  teal: "bg-teal-100 text-teal-700",
  gray: "bg-gray-100 text-gray-600",
};

// Derive destination cards from tourPages — only show destinations with packages.
const destinations = Object.values(tourPages)
  .filter((d) => d.packages?.items?.length > 0)
  .map((d) => ({
    name: d.meta.name,
    tagline: d.hero.badge,
    body: d.hero.body,
    image: d.hero.bgImage,
    href: `/tours/${d.meta.slug}`,
    packageCount: `${d.packages.items.length} Package${d.packages.items.length !== 1 ? "s" : ""}`,
    highlights: d.zones.areas.slice(0, 4).map((a) => a.name),
    badge: d.meta.region ?? "",
    tagColor: d.meta.hubCardColor ?? "gray",
  }));

export default function ToursIndexPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        {/* ── Page Header ─────────────────────────────────────────────── */}
        <section className="bg-[#faf9f7] border-b border-gray-100 py-16 px-5 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-2xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-primary font-semibold text-sm uppercase tracking-widest font-primary">
                All Destinations
              </span>
              <span className="w-8 h-[2px] bg-primary" />
            </div>
            <h1 className="font-primary font-bold text-4xl md:text-5xl text-[#1a1a1a] leading-tight mb-4">
              Tour Packages from Malaysia
            </h1>
            <p className="text-gray-500 text-lg leading-relaxed">
              35+ years of trusted travel expertise. Hand-picked itineraries,
              private guides and full on-ground support — wherever you go.
            </p>
          </motion.div>
        </section>

        {/* ── Destination Cards ────────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-5 py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-8">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
              >
                <Link
                  href={dest.href}
                  className="group block rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white"
                >
                  {/* Image */}
                  <div className="relative h-72 w-full overflow-hidden">
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={i === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    {/* Destination name overlay */}
                    <div className="absolute bottom-0 left-0 p-6">
                      {dest.badge && (
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full mb-3 inline-block ${badgeColors[dest.tagColor]}`}
                        >
                          {dest.badge}
                        </span>
                      )}
                      <h2 className="text-white font-primary font-bold text-4xl leading-none">
                        {dest.name}
                      </h2>
                    </div>

                    {/* Package count pill */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-xs font-semibold px-3 py-1 rounded-full">
                      {dest.packageCount}
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-6">
                    <p className="text-primary font-semibold text-sm mb-1">
                      {dest.tagline}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4">
                      {dest.body}
                    </p>

                    {/* Highlights from zones */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {dest.highlights.map((h) => (
                        <span
                          key={h}
                          className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full"
                        >
                          {h}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                      View {dest.name} Packages
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ── More Coming Soon ─────────────────────────────────────────── */}
        <section className="bg-[#faf9f7] border-t border-gray-100 py-16 px-5 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-xl mx-auto"
          >
            <h2 className="font-primary font-bold text-2xl text-[#1a1a1a] mb-3">
              More Destinations Launching Soon
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Thailand, Sri Lanka, Bali, Indonesia, Maldives and more are being
              added. In the meantime, our team can arrange any destination —
              just ask.
            </p>
            <a
              href="/plan-my-trip"
              className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200"
            >
              Plan a Custom Trip
              <ArrowRight size={15} />
            </a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
