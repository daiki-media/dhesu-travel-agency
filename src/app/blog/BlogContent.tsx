"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { company } from "@/src/data/company";

/**
 * Index for the six Holiday Idea blog articles.
 *
 * The cards carry the sheet's own meta title and description, so what a reader
 * sees here is what a search result shows them. The article list itself is
 * declared in BlogArticleLayout — this page adds the longer blurb and the
 * category chip, which only the index needs.
 */

const easeOut: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
};

const articles = [
  {
    href: "/blog/best-time-to-visit-bali-2026",
    category: "Destination Timing",
    title: "Best Time to Visit Bali: A Month-by-Month Guide",
    blurb:
      "When's the best time to visit Bali? A month-by-month breakdown of weather, crowds, and pricing to help you plan the perfect trip.",
    image: "/images/blog/best-time-to-visit-bali-2026/uluwatu-coastline.jpg",
    alt: "Surf breaking below the cliffs of southern Bali",
  },
  {
    href: "/blog/malaysia-travel-visa-guide-2026",
    category: "Travel Admin",
    title:
      "Visa Requirements for Malaysian Travellers: A Practical Guide by Destination",
    blurb:
      "A practical visa guide for Malaysian travellers covering popular destinations — visa-free access, e-visas, and where requirements often change.",
    image:
      "/images/blog/malaysia-travel-visa-guide-2026/border-flag-ceremony.jpg",
    alt: "Guards and national flags at a land border ceremony",
  },
  {
    href: "/blog/budget-family-travel-tips-2026",
    category: "Family Budget",
    title: "Budget Travel Tips for Families: Getting More From Every Ringgit",
    blurb:
      "Practical budget travel tips for Malaysian families — save on flights, accommodation, and activities without compromising on a great holiday.",
    image: "/images/blog/budget-family-travel-tips-2026/family-banana-boat.jpg",
    alt: "Four people laughing on a banana boat ride",
  },
  {
    href: "/blog/tropical-holiday-packing-guide",
    category: "Packing",
    title: "Packing Guide for Tropical Destinations: The Complete Checklist",
    blurb:
      "A complete packing checklist for tropical destinations like Bali, Thailand, and Vietnam — clothing, essentials, and what to leave at home.",
    image:
      "/images/blog/tropical-holiday-packing-guide/tropical-beach-loungers.jpg",
    alt: "A thatched parasol and loungers on white sand",
  },
  {
    href: "/blog/halal-travel-guide-malaysia",
    category: "Halal Travel",
    title: "Halal Travel Guide: Ranking the Best Muslim-Friendly Destinations",
    blurb:
      "A practical halal travel guide ranking the best Muslim-friendly destinations by food access, prayer facilities, and overall travel ease.",
    image: "/images/blog/halal-travel-guide-malaysia/hagia-sophia-aerial.jpg",
    alt: "Hagia Sophia and its grounds seen from above in Istanbul",
  },
  {
    href: "/blog/solo-vs-group-travel-guide",
    category: "Travel Styles",
    title: "Solo vs. Group Travel: Which Suits Your Next Trip?",
    blurb:
      "Solo or group travel — which fits your next trip? Compare cost, safety, flexibility, and experience to decide what suits you best.",
    image:
      "/images/blog/solo-vs-group-travel-guide/group-dolphin-cruise.jpg",
    alt: "A boatful of travellers watching a dolphin leap alongside",
  },
];

const [lead, ...rest] = articles;

export default function BlogContent() {
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
