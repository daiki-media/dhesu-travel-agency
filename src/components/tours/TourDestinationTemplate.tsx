"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";
import ArrowRight from "@/src/components/icons/ArrowRight";
import type {
  TourPageData,
  TourPackage,
  TourZone,
  TourHighlight,
} from "@/src/data/tourPages/types";

// ─── Animation Variants ───────────────────────────────────────────────────────
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
};

const tagColors: Record<string, string> = {
  red: "bg-red-100 text-primary",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
  purple: "bg-purple-100 text-purple-700",
  pink: "bg-pink-100 text-pink-700",
  teal: "bg-teal-100 text-teal-700",
  blue: "bg-blue-100 text-blue-700",
  gray: "bg-gray-100 text-gray-700",
  gold: "bg-amber-100 text-amber-700",
  saffron: "bg-orange-100 text-orange-600",
};

// ─── Section Label ─────────────────────────────────────────────────────────────
export function SectionLabel({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 mb-3">
      <span className="w-8 h-[2px] bg-primary" />
      <span className="text-primary font-semibold text-sm uppercase tracking-widest font-primary">
        {text}
      </span>
    </div>
  );
}

// ─── Package Card ──────────────────────────────────────────────────────────────
export function PackageCard({
  pkg,
  index,
  slug,
}: {
  pkg: TourPackage;
  index: number;
  slug: string;
}) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className={`relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col ${
        pkg.popular ? "ring-2 ring-primary" : ""
      }`}
    >
      {/* Popular badge */}
      {pkg.popular && (
        <div className="absolute top-3 left-3 z-10 bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full font-primary">
          Most Popular
        </div>
      )}

      {/* Duration pill */}
      <div className="absolute top-3 right-3 z-10 bg-black/50 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
        {pkg.duration}
      </div>

      {/* Image */}
      <div className="relative h-60 w-full overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {/* Tag */}
        <span
          className={`text-xs font-semibold px-2 py-0.5 rounded-full w-fit mb-2 ${
            tagColors[pkg.tagColor] ?? "bg-gray-100 text-gray-600"
          }`}
        >
          {pkg.tag}
        </span>

        <h3 className="font-primary font-bold text-[#1a1a1a] text-lg mb-3 leading-snug">
          {pkg.name}
        </h3>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4 flex-1">
          {pkg.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Saving badge */}
        {pkg.saving && (
          <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded-full w-fit mb-3">
            {pkg.saving}
          </span>
        )}

        {/* Price + CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-primary font-bold text-xl font-primary">{pkg.price}</span>
              {pkg.originalPrice && (
                <span className="text-gray-400 text-sm line-through">{pkg.originalPrice}</span>
              )}
            </div>
            <span className="text-gray-400 text-xs">{pkg.priceNote}</span>
          </div>
          <Link href={pkg.slug ? `/tours/${slug}/${pkg.slug}` : "/contact"}>
            <Button variant="light" size="sm" showArrow>
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Zone Card ─────────────────────────────────────────────────────────────────
function ZoneCard({ area, index }: { area: TourZone; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="group relative rounded-2xl overflow-hidden h-72 cursor-pointer"
    >
      {area.href && (
        <Link
          href={area.href}
          aria-label={`View ${area.name} packages`}
          className="absolute inset-0 z-20"
        />
      )}
      <Image
        src={area.image}
        alt={area.name}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-500"
        sizes="(max-width: 768px) 100vw, 25vw"
      />
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      {/* Tag */}
      <div className="absolute top-4 left-4">
        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full font-primary">
          {area.tag}
        </span>
      </div>

      {/* Bottom content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white font-primary font-bold text-xl">{area.name}</h3>
          <span className="text-white/70 text-xs border border-white/30 px-2 py-0.5 rounded-full">
            {area.vibe}
          </span>
        </div>
        <p className="text-white/80 text-sm leading-relaxed line-clamp-2">{area.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Why Highlight Card ────────────────────────────────────────────────────────
function HighlightCard({ item, index }: { item: TourHighlight; index: number }) {
  return (
    <motion.div
      custom={index}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
      className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300"
    >
      <div className="relative h-60 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-6">
        <h3 className="font-primary font-bold text-[#1a1a1a] text-xl mb-3">{item.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">{item.body}</p>
        <div className="flex flex-wrap gap-2">
          {item.places.map((place) => (
            <span
              key={place}
              className="text-xs bg-red-50 text-primary font-medium px-2.5 py-1 rounded-full"
            >
              {place}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ─── Reusable Destination Hub Template ─────────────────────────────────────────
export default function TourDestinationTemplate({
  data,
}: {
  data: TourPageData;
}) {
  const { meta, hero, why, zones, bestTime, tripLength, packages, whyBook, cta } = data;

  return (
    <main className="bg-white overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[620px] lg:min-h-[700px] flex items-center">
        {/* BG Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={hero.bgImage}
            alt={meta.name}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55 z-[1]" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 font-primary"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white" />
              {hero.badge}
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: easeOut }}
              className="font-primary font-bold text-white text-5xl md:text-7xl leading-[1.05] mb-2"
            >
              {hero.headline}
            </motion.h1>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: easeOut }}
              className="font-primary font-bold text-primary text-5xl md:text-7xl leading-[1.05] mb-6"
            >
              {hero.headlineAccent}
            </motion.h1>

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-white/90 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
            >
              {hero.body}
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex gap-4 flex-wrap"
            >
              <Link href="#packages">
                <Button variant="light" showArrow size="lg">View Packages</Button>
              </Link>
              <Link href="/contact">
                <Button variant="transparent" showArrow size="lg">Contact Us</Button>
              </Link>
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-wrap gap-8 mt-14 pt-10 border-t border-white/20"
          >
            {hero.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-white font-primary font-bold text-3xl">{stat.value}</p>
                <p className="text-white/70 text-sm mt-0.5">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── WHY ────────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
          >
            <SectionLabel text={why.sectionLabel} />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-4">
              {why.heading}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">{why.subheading}</p>
          </motion.div>

          {/* 2x2 Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {why.highlights.map((item, i) => (
              <HighlightCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── ZONES ─────────────────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-2xl mb-14"
          >
            <SectionLabel text={zones.sectionLabel} />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-4">
              {zones.heading}
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">{zones.subheading}</p>
          </motion.div>

          {/* 4-col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {zones.areas.map((area, i) => (
              <ZoneCard key={area.name} area={area} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* ── BEST TIME + TRIP LENGTH ────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Best Time */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionLabel text={bestTime.sectionLabel} />
                <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight mb-3">
                  {bestTime.heading}
                </h2>
                <p className="text-gray-500 mb-8">{bestTime.body}</p>
              </motion.div>

              <div className="space-y-5">
                {bestTime.seasons.map((season, i) => (
                  <motion.div
                    key={season.name}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className="flex gap-5 p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                      {season.icon === "sun" ? (
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-9H21M3 12H2m15.36-6.36l-.71.71M6.34 17.66l-.71.71M17.66 17.66l.71.71M6.34 6.34l.71.71M12 7a5 5 0 100 10A5 5 0 0012 7z" />
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999A5.002 5.002 0 003 15z" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-primary font-bold text-[#1a1a1a] text-lg">{season.name}</h3>
                        <span
                          className={`text-xs font-semibold px-2 py-0.5 rounded-full ${
                            season.badgeColor === "red"
                              ? "bg-red-100 text-primary"
                              : "bg-blue-100 text-blue-700"
                          }`}
                        >
                          {season.badge}
                        </span>
                      </div>
                      <p className="text-primary text-sm font-semibold mb-1">{season.months}</p>
                      <p className="text-gray-600 text-sm leading-relaxed">{season.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Trip Length */}
            <div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <SectionLabel text={tripLength.sectionLabel} />
                <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight mb-10">
                  {tripLength.heading}
                </h2>
              </motion.div>

              <div className="space-y-5">
                {tripLength.options.map((opt, i) => (
                  <motion.div
                    key={opt.days}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    className={`relative p-6 rounded-2xl border-2 transition-all duration-300 ${
                      opt.recommended
                        ? "border-primary bg-white shadow-lg"
                        : "border-gray-100 bg-gray-50 hover:border-red-200"
                    }`}
                  >
                    {opt.recommended && (
                      <div className="absolute -top-3 left-6">
                        <span className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full font-primary">
                          Recommended
                        </span>
                      </div>
                    )}
                    <div className="flex items-start gap-4">
                      <div
                        className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          opt.recommended ? "bg-primary" : "bg-gray-200"
                        }`}
                      >
                        <span
                          className={`font-primary font-bold text-sm text-center leading-tight ${
                            opt.recommended ? "text-white" : "text-gray-600"
                          }`}
                        >
                          {opt.days}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-primary font-bold text-[#1a1a1a] text-lg mb-1">
                          {opt.label}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{opt.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────────────────────── */}
      <section id="packages" className="py-20 lg:py-28 bg-pattern scroll-mt-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Header */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-14"
          >
            <SectionLabel text={packages.sectionLabel} />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-4">
              {packages.heading}
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">{packages.subheading}</p>
          </motion.div>

          {/* Cards grid — preview the first 6, full list lives on /all-packages */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
            {packages.items.slice(0, 6).map((pkg, i) => (
              <PackageCard key={pkg.id} pkg={pkg} index={i} slug={meta.slug} />
            ))}
          </div>

          {/* Custom note */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center text-gray-500 mt-10 text-sm"
          >
            {packages.ctaNote}{" "}
            <Link href="/contact" className="text-primary font-semibold hover:underline">
              Contact us to customise.
            </Link>
          </motion.p>
          {/* View all — shown when there are more packages than the preview */}
          {(packages.viewAllPackage || packages.items.length > 6) && (
            <div className="text-center mt-12">
              <Link
                href={packages.viewAllPackage?.link ?? `/tours/${meta.slug}/all-packages`}
              >
                <Button variant="light" showArrow size="lg">
                  {packages.viewAllPackage?.text ?? `View All ${meta.name} Packages`}
                </Button>
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* ── WHY BOOK WITH DHESU ────────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: text */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <SectionLabel text={whyBook.sectionLabel} />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-6">
                {whyBook.heading}
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-10">{whyBook.body}</p>
              <Link href="/contact">
                <Button variant="light" showArrow size="lg">Get Your {meta.name} Quote</Button>
              </Link>
            </motion.div>

            {/* Right: 2x2 trust points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {whyBook.points.map((point, i) => (
                <motion.div
                  key={point.title}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                  className="p-6 bg-gray-50 rounded-2xl hover:bg-red-50 transition-colors duration-300"
                >
                  {/* Icon */}
                  <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center mb-4">
                    {point.icon === "shield" && (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                    )}
                    {point.icon === "clock" && (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    )}
                    {point.icon === "map" && (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                    )}
                    {point.icon === "tag" && (
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-5 5a2 2 0 01-2.828 0l-7-7A2 2 0 013 8V4a1 1 0 011-1z" /></svg>
                    )}
                  </div>
                  <h3 className="font-primary font-bold text-[#1a1a1a] text-lg mb-2">{point.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0">
          <Image
            src={cta.bgImage}
            alt={`${meta.name} CTA`}
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/65" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-primary font-bold text-white text-4xl md:text-5xl leading-tight mb-4">
              {cta.heading}
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              {cta.subheading}
            </p>

            {/* Contact options */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={`https://wa.me/${cta.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-base btn-light px-8 py-3.5 text-base font-primary"
              >
                <span className="btn-content flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                  WhatsApp {cta.phone}
                </span>
              </a>
              <a
                href={`mailto:${cta.email}`}
                className="btn-base btn-transparent px-8 py-3.5 text-base font-primary"
              >
                <span className="btn-content">{cta.email}</span>
              </a>
            </div>

            {/* Address */}
            <p className="text-white/60 text-sm">{cta.address}</p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
