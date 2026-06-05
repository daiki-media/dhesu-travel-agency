"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";
import { PackageCard, SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import type { TourPackage, TourPageData } from "@/src/data/tourPages/types";

// ─── Animation ──────────────────────────────────────────────────────────────────
const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: easeOut },
  }),
};

export interface TourRegionTemplateProps {
  label: string;
  h1: string;
  intro: string;
  heroImage: string;
  packages: TourPackage[];
  cta: TourPageData["cta"];
}

// ─── Region / Theme Listing Template ────────────────────────────────────────────
export default function TourRegionTemplate({
  label,
  h1,
  intro,
  heroImage,
  packages,
  cta,
}: TourRegionTemplateProps) {
  return (
    <main className="bg-white overflow-x-hidden">

      {/* ── HERO HEADER ───────────────────────────────────────────────────────── */}
      <section className="relative min-h-[380px] lg:min-h-[440px] flex items-center">
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
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60 z-[1]" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 w-full">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-white/70 text-sm mb-5 font-primary"
          >
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link href="/tours/india" className="hover:text-white transition-colors">India</Link>
            <span>/</span>
            <span className="text-white">{label}</span>
          </motion.nav>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: easeOut }}
            className="font-primary font-bold text-white text-4xl md:text-6xl leading-[1.05] mb-4 max-w-3xl"
          >
            {h1}
          </motion.h1>
        </div>
      </section>

      {/* ── INTRO + PACKAGES GRID ─────────────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Intro */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="max-w-3xl mb-14"
          >
            <SectionLabel text="India Packages" />
            <p className="text-gray-600 text-lg leading-relaxed">{intro}</p>
          </motion.div>

          {/* Count */}
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-gray-500 text-sm mb-8"
          >
            {packages.length} {packages.length === 1 ? "package" : "packages"} available.
          </motion.p>

          {/* Cards grid */}
          {packages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
              {packages.map((pkg, i) => (
                <PackageCard key={pkg.id} pkg={pkg} index={i} slug="india" />
              ))}
            </div>
          ) : (
            <p className="text-gray-500">No packages available yet. Please check back soon.</p>
          )}

          {/* Back to all India packages */}
          <div className="text-center mt-12">
            <Link href="/tours/india/all-packages">
              <Button variant="light" showArrow size="lg">
                View All India Packages
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ────────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={cta.bgImage}
            alt={`${label} CTA`}
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

            <p className="text-white/60 text-sm">{cta.address}</p>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
