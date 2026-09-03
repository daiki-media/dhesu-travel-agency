"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PackageCard, SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { InquiryForm } from "@/src/components/tours/TourPackageDetailTemplate";
import { company } from "@/src/data/company";
import type { TourPackage, TourPageData } from "@/src/data/tourPages/types";

/**
 * Layout for the Holiday Idea destination guides at /tours/<country>/<guide>.
 *
 * A guide is an article, not a bookable package, so it borrows the package
 * detail page's shape — hero flush to the bottom of a gradient, a facts strip,
 * then a wide reading column beside a sticky enquiry rail — without the price
 * card, which a guide has no number for.
 *
 * TourRegionTemplate is deliberately untouched: it still serves the forty-odd
 * live region pages, and restyling it here would change all of them.
 */

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
};

export interface TourGuideTemplateProps {
  /** Small label above the h1, e.g. "Bali Travel Guide 2026". */
  label: string;
  h1: string;
  /** Lead paragraph, shown under the h1 in the hero. */
  intro: string;
  heroImage: string;
  /** Short factual chips under the hero, e.g. "Daily departures". */
  facts?: string[];
  /** The guide's own copy. */
  children: React.ReactNode;
  /** Packages belonging to the parent destination; empty for new countries. */
  packages: TourPackage[];
  cta: TourPageData["cta"];
  destination: string;
  destinationLabel: string;
}

export default function TourGuideTemplate({
  label,
  h1,
  intro,
  heroImage,
  facts = [],
  children,
  packages,
  cta,
  destination,
  destinationLabel,
}: TourGuideTemplateProps) {
  // TourPageData's cta has no WhatsApp number — that field belongs to the
  // package type. Use the company record, which is where it actually lives.
  const whatsapp = company.whatsapp[0].number;
  const [headline, ...rest] = h1.split(":");
  const accent = rest.join(":").trim();

  return (
    <main className="bg-white overflow-x-hidden">
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[420px] lg:min-h-[500px] flex items-end">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <Image
            src={heroImage}
            alt={label}
            fill
            priority
            fetchPriority="high"
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pb-12 pt-20 w-full">
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap items-center gap-1.5 text-white/60 text-xs mb-5 font-primary"
          >
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/tours" className="hover:text-white transition-colors">
              Destinations
            </Link>
            <span>/</span>
            <Link
              href={`/tours/${destination}`}
              className="hover:text-white transition-colors"
            >
              {destinationLabel}
            </Link>
            <span>/</span>
            <span className="text-white/90">{label}</span>
          </motion.nav>

          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
          >
            {label}
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.1, ease: easeOut }}
            className="font-primary font-bold text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-3 max-w-4xl"
          >
            {headline}
            {accent && <span className="text-red-300">: {accent}</span>}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
            className="text-white/80 text-base lg:text-lg max-w-2xl leading-relaxed"
          >
            {intro}
          </motion.p>
        </div>
      </section>

      {/* ── FACTS STRIP ──────────────────────────────────────────────────── */}
      {facts.length > 0 && (
        <div className="bg-[#f8f8f8] border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4 flex flex-wrap gap-x-6 gap-y-2">
            {facts.map((fact) => (
              <div key={fact} className="flex items-center gap-2 text-sm text-gray-600">
                <span className="h-px w-4 bg-primary" aria-hidden />
                <span>{fact}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ── READING COLUMN + STICKY ENQUIRY RAIL ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 lg:gap-14">
          <div className="min-w-0 space-y-16">{children}</div>

          <div className="hidden lg:block">
            <div className="sticky top-24">
              <InquiryForm packageName={h1} whatsapp={whatsapp} />
              <div className="mt-4 text-center text-sm text-gray-500 space-y-1">
                <p>Or call us directly</p>
                <a
                  href={`tel:${cta.phone.replace(/\s/g, "")}`}
                  className="font-bold text-primary block hover:underline"
                >
                  {cta.phone}
                </a>
                <a
                  href={`mailto:${cta.email}`}
                  className="text-gray-400 text-xs hover:text-primary transition-colors block"
                >
                  {cta.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ─────────────────────────────────────────────────────
          The guide's job is to feed the itineraries, so they sit right after
          the article. New destinations have none yet and skip this entirely. */}
      {packages.length > 0 && (
        <section className="py-12 lg:py-12 lg:py-16 bg-pattern">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="max-w-2xl mb-10"
            >
              <SectionLabel text={`${destinationLabel} Packages`} />
              <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight">
                Itineraries you can book from this guide
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {packages.slice(0, 6).map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} slug={destination} />
              ))}
            </div>

            {packages.length > 6 && (
              <div className="text-center mt-12">
                <Link
                  href={`/tours/${destination}/all-packages`}
                  className="btn-base btn-light px-8 py-3.5 text-base font-primary inline-block"
                >
                  <span className="btn-content">
                    View All {destinationLabel} Packages
                  </span>
                </Link>
              </div>
            )}
          </div>
        </section>
      )}

      {/* ── MOBILE ENQUIRY ───────────────────────────────────────────────── */}
      <section className="lg:hidden px-6 py-12">
        <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl mb-6">
          Plan Your Trip
        </h2>
        <InquiryForm packageName={h1} whatsapp={whatsapp} />
      </section>

      {/* ── CTA BANNER ───────────────────────────────────────────────────── */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src={cta.bgImage} alt="" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-primary font-bold text-white text-3xl md:text-4xl leading-tight mb-3">
              {cta.heading}
            </h2>
            <p className="text-white/75 text-base mb-8">{cta.subheading}</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/${whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-[#20b858] transition-colors"
              >
                WhatsApp {cta.phone}
              </a>
              <a
                href={`mailto:${cta.email}`}
                className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-7 py-3.5 rounded-xl font-semibold text-sm hover:bg-white/10 transition-colors"
              >
                {cta.email}
              </a>
            </div>
            <p className="text-white/40 text-xs mt-6">{cta.address}</p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
