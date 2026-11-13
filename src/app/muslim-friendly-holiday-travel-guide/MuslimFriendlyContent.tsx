"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import Button from "@/src/components/Button";
import CtaSection from "@/src/components/CtaSection";
import LinkedFaqSection from "@/src/components/LinkedFaqSection";
import type { LinkedFaq } from "@/src/data/linkedFaq";

/** One row of the copy's package table. */
export type MuslimFriendlyPackage = {
  name: string;
  days: string;
  /** The "From (RM, per person twin)" column, as written. */
  price: string;
  /** The "What is Muslim-friendly" column. */
  muslimFriendly: string;
  /** The "Link" column's text. */
  linkLabel: string;
  packageHref: string;
};

const PHOTO = {
  hero: "/images/tour-types/mosque-night-istanbul.jpg",
  heroAlt: "A large mosque lit up at dusk above the water in Istanbul",
  prayer: "/images/tour-types/abu-dhabi-grand-mosque.jpg",
  prayerAlt: "The white domes of Sheikh Zayed Grand Mosque in Abu Dhabi",
};

// The copy's own WhatsApp link and message, as written.
const QUOTE_WHATSAPP_HREF =
  "https://wa.me/60193202877?text=Hi%20Dhesu%20Travel%2C%20I%20would%20like%20a%20quote%20for%20a%20Muslim-friendly%20tour%20package.";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BODY = "text-gray-600 text-[15px] leading-relaxed";

const INLINE_LINK =
  "font-semibold text-teal-navy underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors";

// ─── Copy ──────────────────────────────────────────────────────────────────────

const TABLE_HEADERS = [
  "Package",
  "Days",
  "From (RM, per person twin)",
  "What is Muslim-friendly",
  "Link",
];

const travellerGroups: { lead: string; text: string }[] = [
  {
    lead: "Families with Children & Elderly Parents:",
    text: "Private air-conditioned vans or coaches reduce walking fatigue, with flexible rest stops, interconnecting or ground-floor room requests, and familiar halal meal choices so young children and seniors eat comfortably.",
  },
  {
    lead: "Couples & Honeymooners:",
    text: "Enjoy private airport transfers, scenic boutique stays—such as Dal Lake houseboats in Kashmir or private pool villas in Bali—and unhurried sightseeing schedules that leave time for Maghrib and dinner without rushing.",
  },
  {
    lead: "Corporate, Alumni & Small Private Groups (6 to 30+ Pax):",
    text: "Group departures include dedicated tour leaders, coordinated Friday Jumu'ah mosque stops, and customizable meal budgets tailored to Malaysian palates.",
  },
];

const whyReasons: { lead: string; text: string }[] = [
  {
    lead: "Licensed Malaysian Tour Operator (MOTAC KKKP 1439):",
    text: "Established in Kuala Lumpur since 1988 and accredited by IATA, PATA, and MATTA, giving Malaysian families full regulatory protection and local support.",
  },
  {
    lead: "Halal Meals Arranged & Vetted:",
    text: "We coordinate meals at recognized halal eateries, Muslim-owned kitchens, or dedicated seafood and vegetarian restaurants with zero alcohol served at group tables.",
  },
  {
    lead: "Prayer Times Planned Into Daily Routes:",
    text: "Daily driving legs are timed around Subuh, Zohor, Asar, Maghrib, and Isyak so your guide can stop at local mosques, Islamic centres, or clean prayer rooms with wudhu access.",
  },
  {
    lead: "Friday Jumu'ah Coordination:",
    text: "When your itinerary spans a Friday, routes are adjusted so male travellers can attend Jumu'ah congregational prayers at accessible city or regional masjids.",
  },
];

// ─── Building blocks ───────────────────────────────────────────────────────────

function Section({
  label,
  heading,
  children,
  className = "",
}: {
  label?: string;
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
          {label && <SectionLabel text={label} />}
          <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-6 max-w-3xl">
            {heading}
          </h2>
          {children}
        </motion.div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className={BODY}>{children}</span>
    </li>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function MuslimFriendlyContent({
  faqs,
  packages,
}: {
  faqs: LinkedFaq[];
  packages: MuslimFriendlyPackage[];
}) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <AllPagesHero
        image={PHOTO.hero}
        imageAlt={PHOTO.heroAlt}
        eyebrow="Tour Types"
        title="Muslim-Friendly Tour Packages from Malaysia: Halal Dining & Prayer-Planned Itineraries (2026/27)"
        intro={
          <>
            Planning an international holiday that respects your daily prayer routine and dietary
            standards should feel effortless. Finding reputable halal restaurants, locating clean
            wudhu and prayer spaces during intercity transfers, and scheduling Friday Jumu&apos;ah
            prayers often take hours of advance research.
          </>
        }
      />

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="pt-12 lg:pt-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <p className={`${BODY} max-w-3xl`}>
            At Dhesu Travel (MOTAC Licence KKKP 1439, operating from Kuala Lumpur since 1988), we
            design Muslim-friendly tour packages from Malaysia across South and Southeast Asia.
            Whether you are planning a family escape to Kashmir, a scenic highland rail journey in
            Sri Lanka, a private villa retreat in Bali, or a nature getaway in Sabah, every
            itinerary is built around arranged halal meals, realistic Solat intervals, and
            experienced local guides.
          </p>
        </div>
      </section>

      {/* ── PACKAGES AND PRICES ───────────────────────────────────────────── */}
      <Section
        label="Packages"
        heading="Muslim-Friendly Holiday Packages and Prices 2026/27"
        className="bg-white"
      >
        <p className={`${BODY} max-w-3xl mb-8`}>
          Compare our 2026/27 Muslim-friendly tour packages departing from Malaysia below. All
          prices are land-arrangement starting rates per person based on twin sharing, excluding
          international flights unless stated otherwise.
        </p>
        {/* Wide table, so it scrolls inside its own container on a phone. */}
        <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[760px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                {TABLE_HEADERS.map((header) => (
                  <th
                    key={header}
                    className="py-3 pr-6 font-primary font-bold text-teal-navy text-xs uppercase tracking-widest align-bottom"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {packages.map((pkg) => (
                <tr key={pkg.name} className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-primary font-bold text-[#1a1a1a] text-[15px] leading-snug align-top">
                    {pkg.name}
                  </td>
                  <td className="py-4 pr-6 text-[15px] text-gray-600 align-top whitespace-nowrap">
                    {pkg.days}
                  </td>
                  <td className="py-4 pr-6 text-[15px] font-semibold text-teal-navy align-top whitespace-nowrap">
                    {pkg.price}
                  </td>
                  <td className="py-4 pr-6 text-[15px] text-gray-600 leading-relaxed align-top">
                    {pkg.muslimFriendly}
                  </td>
                  <td className="py-4 text-[15px] align-top whitespace-nowrap">
                    <Link href={pkg.packageHref} className={INLINE_LINK}>
                      {pkg.linkLabel}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className={`${BODY} max-w-3xl mt-6`}>
          Price Validity Notice: Starting prices shown above are valid for travel periods through
          31 March 2027 (excluding peak school holiday, Hari Raya, and year-end surcharges),
          subject to hotel availability and twin-sharing occupancy. Contact Dhesu Travel for an
          exact quote based on your travel dates and group size.
        </p>
      </Section>

      {/* ── FAMILIES, COUPLES AND GROUPS ──────────────────────────────────── */}
      <Section
        heading="Muslim Holiday Package for Families, Couples and Groups"
        className="bg-teal-light/40"
      >
        <p className={`${BODY} max-w-3xl mb-8`}>
          Whether you are comparing a multi-generational <strong>muslim holiday package</strong>{" "}
          or flexible <strong>muslim package holidays</strong> with private transport, Dhesu Travel
          tailors the pacing, rooming, and meal stops around who you are travelling with:
        </p>
        <ul className="space-y-4 max-w-3xl">
          {travellerGroups.map((group) => (
            <Bullet key={group.lead}>
              <strong>{group.lead}</strong> {group.text}
            </Bullet>
          ))}
        </ul>
      </Section>

      {/* ── WHY DHESU ─────────────────────────────────────────────────────── */}
      <Section
        label="Why Dhesu"
        heading="Why Malaysians Choose Dhesu for Muslim-Friendly Travel"
        className="bg-white"
      >
        <ul className="space-y-4 max-w-3xl">
          {whyReasons.map((reason) => (
            <Bullet key={reason.lead}>
              <strong>{reason.lead}</strong> {reason.text}
            </Bullet>
          ))}
        </ul>
        <div className="mt-10">
          <Link href="/contact-us/">
            <Button variant="light" showArrow>
              Contact Us
            </Button>
          </Link>
        </div>
      </Section>

      {/* ── PLATE BEFORE THE FAQ ──────────────────────────────────────────── */}
      <section className="pb-12 lg:pb-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="relative h-64 md:h-96 overflow-hidden rounded-2xl"
          >
            <Image
              src={PHOTO.prayer}
              alt={PHOTO.prayerAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <LinkedFaqSection faqs={faqs} heading="Frequently Asked Questions" />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      {/* Heading, body, WhatsApp and office lines are the copy's. The office
          line replaces the band's default address line. */}
      <CtaSection
        heading="Request a Free Muslim-Friendly Tour Quote"
        body={
          <>
            Tell us your destination, travel dates, and number of adults and children. Our Kuala
            Lumpur team will send a tailored itinerary and itemized quotation within one working
            day.
            <br />
            <br />
            <strong className="text-white/90">Office:</strong>{" "}
            Level 2 &amp; 3, Wisma Dhesu, No. 5, Jalan Bangsar Utama 3, 59000 Kuala Lumpur (MOTAC
            Licence KKKP 1439)
          </>
        }
        actions={[{ label: "WhatsApp: +6019 320 2877", href: QUOTE_WHATSAPP_HREF }]}
        showAddress={false}
      />
    </>
  );
}
