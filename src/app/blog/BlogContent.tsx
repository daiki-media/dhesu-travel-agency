"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { company } from "@/src/data/company";

/**
 * Index for the blog articles published in the CMS.
 *
 * The cards carry each post's own meta description, so what a reader sees here
 * is what a search result shows them. The list arrives from cms.dhesu.com,
 * newest first, and is fetched by the route in page.tsx at build time.
 */

export type BlogCard = {
  href: string;
  category: string;
  title: string;
  blurb: string;
  image: string;
  alt: string;
};

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

export default function BlogContent({ articles }: { articles: BlogCard[] }) {
  const [lead, ...rest] = articles;
  if (!lead) return null;

  return (
    <div className="bg-white">
      {/* ── MASTHEAD ─────────────────────────────────────────────────────
          A flat teal band rather than a photo hero: the articles below carry
          the photography, and a second image here would compete with them. */}
      <section className="bg-teal-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-end">
            <div className="lg:col-span-7">
              <p className="font-secondary text-primary text-2xl md:text-3xl mb-2">
                Travel Blog
              </p>
              <h1 className="font-primary font-bold text-white text-3xl md:text-4xl lg:text-5xl leading-[1.08]">
                Travel guides for Malaysian travellers
              </h1>
            </div>
            <p className="lg:col-span-5 text-white/70 text-[15px] md:text-base leading-relaxed lg:border-l lg:border-white/20 lg:pl-10">
              Destination timing, visa requirements, packing and budgeting — the
              practical questions that come up before every trip, answered by a
              travel agent planning holidays since {company.foundedYear}.
            </p>
          </div>
        </div>
      </section>

      {/* ── LEAD ARTICLE ─────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <Link href={lead.href} className="group block">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-12 items-center">
                <div className="relative h-60 md:h-80 lg:h-[24rem] rounded-2xl overflow-hidden">
                  <Image
                    src={lead.image}
                    alt={lead.alt}
                    fill
                    priority
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 600px"
                  />
                </div>
                <div>
                  <span className="inline-block bg-primary text-white text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
                    {lead.category}
                  </span>
                  <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl lg:text-[2.25rem] leading-[1.15] group-hover:text-primary-dark transition-colors">
                    {lead.title}
                  </h2>
                  <p className="mt-4 text-gray-500 text-[15px] md:text-base leading-relaxed max-w-xl">
                    {lead.blurb}
                  </p>
                  <span className="mt-6 inline-block text-primary-dark font-semibold text-sm">
                    Read the guide →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── THE REST ─────────────────────────────────────────────────────── */}
      <section className="pb-12 lg:pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionLabel text="All Articles" />
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {rest.map((article, i) => (
              <motion.li
                key={article.href}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                transition={{ delay: i * 0.05 }}
              >
                <Link href={article.href} className="group flex h-full flex-col">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 380px"
                    />
                  </div>
                  <p className="mt-4 text-primary font-semibold text-xs uppercase tracking-widest font-primary">
                    {article.category}
                  </p>
                  <h2 className="mt-2 font-primary font-bold text-teal-navy text-lg leading-snug group-hover:text-primary-dark transition-colors">
                    {article.title}
                  </h2>
                  <p className="mt-2.5 text-gray-500 text-sm leading-relaxed">
                    {article.blurb}
                  </p>
                  <span className="mt-auto pt-4 text-primary-dark font-semibold text-sm">
                    Read the guide →
                  </span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
