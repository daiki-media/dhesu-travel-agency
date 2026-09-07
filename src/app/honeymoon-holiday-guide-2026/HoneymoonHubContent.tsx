"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";

/**
 * The honeymoon hub named in the Holiday Idea sheet.
 *
 * There is no content-document draft for this row, so the connective copy here
 * is written to the sheet's brief ("cross-link Bali, Mauritius and Europe as
 * honeymoon-suited destinations"). Each destination's summary is its own
 * guide's blurb and opening paragraph, so the three cards stay consistent with
 * the pages they point at.
 *
 * TODO(content): replace the connective copy once the writers supply a draft.
 */

const PHOTO = {
  hero: "/images/guides/mauritius-resort-pool.jpg",
  heroAlt: "A resort pool opening onto the sea at dusk in Mauritius",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Each entry mirrors the destination guide it links to; the summaries are those
// guides' own blurbs so the hub never claims something the guide does not.
const destinations = [
  {
    name: "Bali",
    href: "/tours/indonesia/honeymoon-holiday-guide-2026",
    image: "/images/guides/tanah-lot-sunset.jpg",
    alt: "The sea temple at Tanah Lot silhouetted against a Bali sunset",
    suits: "Short honeymoons, privacy, no stopover",
    summary:
      "Bali for couples: private pool villas, sunset cruises and the quieter corners of the island, with the practicalities handled.",
    detail:
      "A trip to Bali will continue to be the best choice for couples from Malaysia to spend their honeymoon as the place is very romantic and offers private villas, cruises, and dinners under candlelight amidst the terraced fields and cliffs.",
  },
  {
    name: "Mauritius",
    href: "/tours/mauritius/honeymoon-holiday-guide-2026",
    image: "/images/guides/mauritius-resort-garden.jpg",
    alt: "A resort garden running down to the beach in Mauritius",
    suits: "Resort weeks, beach privacy, a slower pace",
    summary:
      "Mauritius for couples, compared against the alternatives: how it differs from a Bali or Europe honeymoon on cost, pace and travel time.",
    detail:
      "Selecting a honeymoon destination is one of the most important choices travellers make. It is not just about the scenic beauty; it is about the pace and privacy of the place that will make it memorable.",
  },
  {
    name: "Europe",
    href: "/tours/europe/honeymoon-holiday-guide-2026",
    image: "/images/guides/santorini-oia.jpg",
    alt: "White houses and blue domes above the caldera at Oia, Santorini",
    suits: "Longer trips, sightseeing alongside romance",
    summary:
      "Europe for couples: which routes suit a honeymoon pace, and how to balance sightseeing with time to yourselves.",
    detail:
      "For couples who want their honeymoon to be a romantic escape and a chance to see a range of cultures and attractions, a multi-nation European tour offers something entirely different from a beach resort honeymoon.",
  },
];

// Qualitative only. Flight times and prices are deliberately left out here so
// the hub cannot drift out of step with the individual guides.
const compare = [
  {
    factor: "Travel time from Malaysia",
    bali: "Shortest — direct, no stopover",
    mauritius: "Longer, but a single hop",
    europe: "Longest, usually with a connection",
  },
  {
    factor: "Typical trip length",
    bali: "A short honeymoon works well",
    mauritius: "A resort week or ten days",
    europe: "The longest of the three",
  },
  {
    factor: "Pace",
    bali: "Stay put, explore in short trips",
    mauritius: "Slow, resort-based",
    europe: "Moves between cities",
  },
  {
    factor: "Best for",
    bali: "Privacy and villa living",
    mauritius: "Beaches and resort comfort",
    europe: "Culture and sightseeing",
  },
];

function Section({
  label,
  heading,
  children,
  className = "",
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeUp}
        >
          <SectionLabel text={label} />
          <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-6 max-w-3xl">
            {heading}
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

export default function HoneymoonHubContent({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <>
      <AllPagesHero
        image={PHOTO.hero}
        imageAlt={PHOTO.heroAlt}
        eyebrow="Tour Types"
        title="Honeymoon Packages From Malaysia"
        titleAccent="Comparing the Top Destinations"
        intro="Choosing where to go is the first real decision of a honeymoon, and it is less about which destination is best than which one matches the pace and privacy you want. Here is how Bali, Mauritius and Europe differ for couples travelling from Malaysia."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />

      <Section
        label="Side by Side"
        heading="How the three compare"
        className="bg-white"
      >
        <p className="text-gray-600 leading-relaxed mb-8 max-w-3xl">
          None of these is the &ldquo;best&rdquo; honeymoon destination in the abstract.
          They differ on how far you travel, how long you need, and whether you want to
          settle into one place or keep moving. Use the table to narrow it down, then read
          the full guide for the one that fits.
        </p>

        {/* Wide table, so it scrolls inside its own container on a phone. */}
        <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="py-3 pr-6 font-primary font-bold text-gray-400 text-xs uppercase tracking-widest">
                  Factor
                </th>
                {destinations.map((d) => (
                  <th
                    key={d.name}
                    className="py-3 pr-6 font-primary font-bold text-primary text-xs uppercase tracking-widest"
                  >
                    {d.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row.factor} className="border-b border-gray-200">
                  <td className="py-4 pr-6 text-[15px] font-semibold text-teal-navy align-top">
                    {row.factor}
                  </td>
                  <td className="py-4 pr-6 text-[15px] text-gray-600 align-top">{row.bali}</td>
                  <td className="py-4 pr-6 text-[15px] text-gray-600 align-top">
                    {row.mauritius}
                  </td>
                  <td className="py-4 pr-6 text-[15px] text-gray-600 align-top">{row.europe}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        label="The Three Guides"
        heading="Read the full guide for your shortlist"
        className="bg-pattern"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((d) => (
            <Link key={d.href} href={d.href} className="group block">
              <div className="relative h-52 rounded-2xl overflow-hidden">
                <Image
                  src={d.image}
                  alt={d.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 100vw, 360px"
                />
              </div>
              <p className="mt-5 text-primary text-xs uppercase tracking-[0.18em] font-semibold">
                {d.suits}
              </p>
              <h3 className="mt-2 font-primary font-bold text-teal-navy text-xl leading-snug group-hover:text-primary transition-colors">
                {d.name} honeymoons
              </h3>
              <p className="mt-3 text-gray-600 text-[15px] leading-relaxed">{d.summary}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section label="In More Detail" heading="What each one is actually like">
        <div className="space-y-10">
          {destinations.map((d) => (
            <div key={d.name} className="border-l-2 border-primary pl-8">
              <h3 className="font-primary font-bold text-teal-navy text-lg mb-3">
                {d.name}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4 max-w-3xl">{d.detail}</p>
              <Link
                href={d.href}
                className="text-primary font-semibold text-[15px] underline underline-offset-4 hover:text-teal-navy transition-colors"
              >
                Read the {d.name} honeymoon guide
              </Link>
            </div>
          ))}
        </div>
      </Section>

      <FaqSection faqs={faqs} heading="Honeymoon planning questions" />

      <CtaSection
        image={PHOTO.hero}
        imageAlt={PHOTO.heroAlt}
        heading="Plan a Honeymoon Built Around the Two of You"
        body="Tell us your dates and the kind of trip you have in mind, and a consultant will put together a costed honeymoon itinerary — from as few as two travellers."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
