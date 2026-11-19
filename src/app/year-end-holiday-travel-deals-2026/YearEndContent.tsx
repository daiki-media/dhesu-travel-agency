"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { PackageCard, SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import Button from "@/src/components/Button";
import FaqSection from "@/src/components/FaqSection";
import { whatsappHref } from "@/src/lib/whatsapp";
import type { TourPackage } from "@/src/data/tourPages/types";

/** One of DHE-101's packages, rendered as a standard package card. */
export type YearEndPackage = {
  name: string;
  /** "3 Days / 2 Nights", as the copy writes it. */
  duration: string;
  price: string;
  dates: string;
  muslimFriendly: string;
  description: string;
  /** The package page the card's "Book Now" opens. */
  packageHref: string;
  /** Card photo and tag, from that package. */
  image: string;
  tag: string;
  tagColor: TourPackage["tagColor"];
};

/**
 * A package in the shape PackageCard reads. The card links to
 * /tours/{slug}/{pkg.slug}, so packageHref is split into those two parts; the
 * copy's description goes in `blurb`, the card's one-paragraph slot.
 */
function toCard(pkg: YearEndPackage): { card: TourPackage; slug: string } {
  const [slug, ...rest] = pkg.packageHref.replace(/^\/tours\/|\/$/g, "").split("/");
  return {
    slug,
    card: {
      id: pkg.packageHref,
      slug: rest.join("/"),
      name: pkg.name,
      blurb: pkg.description,
      duration: pkg.duration,
      price: pkg.price,
      priceNote: "per person",
      tag: pkg.tag,
      tagColor: pkg.tagColor,
      image: pkg.image,
    },
  };
}

/**
 * All copy on this page is DHE-101's final page copy (Downloads/Year-End
 * Holiday Packages 2026_ final page copy for the dev.docx, Rohan), verbatim:
 * its order, headings, wording and links. The section labels above the
 * headings are the site's design device, not copy.
 */

const PHOTO = {
  hero: "/images/seasonal/winter-ice-festival.jpg",
  heroAlt: "Visitors at an outdoor winter ice festival",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const BODY = "text-gray-600 text-[15px] leading-relaxed";

const INLINE_LINK =
  "font-semibold text-teal-navy underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors";

// Same underline, set for the dark CTA band.
const DARK_LINK =
  "font-semibold text-white underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors";

const CONTACT = "/contact-us/";

// The copy's school holiday list, as written (Group A includes Johor).
const schoolHolidays = [
  {
    term: "Group A (Kedah, Kelantan, Terengganu, Johor)",
    detail: "4 December to 31 December 2026",
  },
  {
    term: "Group B (Kuala Lumpur, Selangor, Penang, Melaka, Perak, Pahang, Sabah, Sarawak, Putrajaya, Labuan)",
    detail: "5 December to 31 December 2026",
  },
  {
    term: "Peak surcharge window",
    detail:
      "24 December 2026 to 1 January 2027. Departures in this window carry seasonal flight and hotel surcharges, so the From prices below are starting rates.",
  },
];

// The copy's budget table, row for row; each entry links to its package.
const budgetRows: { band: string; items: { label: string; href: string; price: string }[] }[] = [
  {
    band: "Under RM1,000",
    items: [
      { label: "Bali 3 Days Super Saver", href: "/tours/indonesia/bali/3-day-super-saver/", price: "RM398" },
      {
        label: "Hanoi and Halong Bay 3 Days",
        href: "/tours/vietnam/north-vietnam/3-day-hanoi-halong-bay-super-saver/",
        price: "RM688",
      },
      { label: "Angkor 3 Days", href: "/tours/cambodia/siem-reap/3-day-angkor-khmer-empire/", price: "RM888" },
      { label: "Sri Lanka Kandy and Colombo", href: "/tours/sri-lanka/kandy/3-day-kandy-colombo/", price: "RM888" },
      { label: "Nepal 4 Days Super Saver", href: "/tours/nepal/kathmandu/4-day-super-saver/", price: "RM888" },
      { label: "Best of Bali 4 Days", href: "/tours/indonesia/bali/4-day-best-of-bali/", price: "RM988" },
    ],
  },
  {
    band: "RM1,000 to RM1,500",
    items: [
      { label: "Kashmir 4 Days Super Saver", href: "/tours/india/kashmir/4-day-super-saver/", price: "RM1,088" },
      {
        label: "Bali 5 Days Bliss",
        href: "/tours/indonesia/bali/5-day-bliss-temples-highlands-sunset/",
        price: "RM1,188",
      },
      {
        label: "Sri Lanka 4 Days Muslim Friendly",
        href: "/tours/sri-lanka/nuwara-eliya/4-day-muslim-friendly/",
        price: "RM1,288",
      },
      {
        label: "India Golden Triangle 5 Days",
        href: "/tours/india/north-india/5-day-golden-triangle/",
        price: "RM1,388",
      },
    ],
  },
  {
    band: "RM1,500 and above",
    items: [
      {
        label: "Kashmir 5 Days Ski Resort and Cable Car",
        href: "/tours/india/kashmir/5-day-ski-resort-cable-car/",
        price: "RM1,688",
      },
      {
        label: "Nepal 6 Days Muslim Friendly",
        href: "/tours/nepal/kathmandu-pokhara/6-day-muslim-friendly/",
        price: "RM2,088",
      },
    ],
  },
];

/** Section wrapper: label, heading, then the body. */
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

export default function YearEndContent({
  faqs,
  packages,
}: {
  /** Owned by the page so the same list drives the FAQPage markup. */
  faqs: { question: string; answer: string }[];
  /** Owned by the page so the same list drives the ItemList markup. */
  packages: YearEndPackage[];
}) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <AllPagesHero
        image={PHOTO.hero}
        imageAlt={PHOTO.heroAlt}
        eyebrow="Seasonal"
        title="Year End Holiday Packages 2026 from Malaysia"
        intro={
          <>
            Malaysian school holidays run from 4 December to 31 December 2026 for Group A
            states and from 5 December for Group B. That long break rolls straight into
            Christmas and New Year, so year end travel gets busy fast. Flights fill up, hotel
            rates move and the good dates go first.
          </>
        }
      />

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="pt-12 lg:pt-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <p className={`${BODY} max-w-3xl`}>
            Below are 12 year end holiday packages from Dhesu with real From prices, so you can
            see what fits your budget before you message us. They start at RM398 per person for
            a 3 day Bali trip and go up to RM2,088 for a 6 day Nepal tour. Every one is a private
            tour, so you agree the dates with our team inside the holiday window instead of
            waiting for a group to fill.
          </p>
        </div>
      </section>

      {/* ── SCHOOL HOLIDAY DATES ──────────────────────────────────────────── */}
      <Section
        label="School Holidays"
        heading="December 2026 School Holiday Dates for Year End Travel"
        className="bg-white"
      >
        <ul className="border-t-2 border-teal-navy max-w-4xl">
          {schoolHolidays.map((row) => (
            <li
              key={row.term}
              className="border-b border-gray-200 py-5 text-[15px] leading-relaxed text-gray-600"
            >
              <strong className="font-primary font-bold text-teal-navy">{row.term}:</strong>{" "}
              {row.detail}
            </li>
          ))}
        </ul>
        <div className="mt-8">
          <Link href={CONTACT}>
            <Button variant="light" showArrow>
              Send us your dates for a free quote
            </Button>
          </Link>
        </div>
      </Section>

      {/* ── PACKAGES ──────────────────────────────────────────────────────── */}
      <Section
        label="Packages"
        heading="Year End Holiday Packages from Malaysia With Real Prices"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          {packages.map((pkg, i) => {
            const { card, slug } = toCard(pkg);
            return (
              <PackageCard
                key={card.id}
                pkg={card}
                index={i}
                slug={slug}
                details={[
                  { label: "Dates", text: pkg.dates },
                  { label: "Muslim-friendly", text: pkg.muslimFriendly },
                ]}
              />
            );
          })}
        </div>
        {/* The copy's small print under the cards. */}
        <p className="mt-10 max-w-3xl text-gray-500 text-sm leading-relaxed">
          From prices are per person for the land package. Departures between 24 December 2026
          and 1 January 2027 carry peak surcharges. Hotel level, group size and dates change the
          final price, so we send a written quote before you pay.{" "}
          <Link href={CONTACT} className={INLINE_LINK}>
            Send us your dates for a free quote
          </Link>
          .
        </p>
      </Section>

      {/* ── BY BUDGET ─────────────────────────────────────────────────────── */}
      <Section label="By Budget" heading="Year End Holiday Deals by Budget" className="bg-white">
        <div className="overflow-x-auto -mx-6 px-6 lg:mx-0 lg:px-0">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="py-3 pr-6 font-primary font-bold text-teal-navy text-xs uppercase tracking-widest align-bottom">
                  Budget per person
                </th>
                <th className="py-3 font-primary font-bold text-teal-navy text-xs uppercase tracking-widest align-bottom">
                  Year end holiday packages
                </th>
              </tr>
            </thead>
            <tbody>
              {budgetRows.map((row) => (
                <tr key={row.band} className="border-b border-gray-200">
                  <td className="py-4 pr-6 font-primary font-bold text-[#1a1a1a] text-[15px] leading-snug align-top whitespace-nowrap">
                    {row.band}
                  </td>
                  <td className={`py-4 align-top ${BODY}`}>
                    {row.items.map((item, i) => (
                      <span key={item.href}>
                        {i > 0 && ", "}
                        <Link href={item.href} className={INLINE_LINK}>
                          {item.label}
                        </Link>{" "}
                        ({item.price})
                      </span>
                    ))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* ── WHY LATE DECEMBER COSTS MORE ──────────────────────────────────── */}
      <Section
        label="Peak Season"
        heading="Why Year End Travel Costs More in Late December"
        className="bg-teal-light/40"
      >
        <div className="space-y-5 max-w-3xl">
          <p className={BODY}>
            Year end is not like the mid-year break. The school holiday, Christmas and New Year
            all land in the same four weeks, and families and companies are chasing the same
            dates. That pushes flights and hotels up, mostly in the last week of December. It is
            why the peak surcharge window exists, and why a year end holiday starting on 20
            December can cost noticeably less than the same trip on 27 December.
          </p>
          <p className={BODY}>
            If you can move your dates, leaving early in the school holiday or after the New
            Year rush is the easiest way to save. If you can’t, tell us your exact dates and we
            will say what is open and what the surcharge looks like before you commit to
            anything.
          </p>
          <p className={BODY}>
            December also suits a few of these places well. Sri Lanka’s beaches and hills are
            at their best from December to March, and{" "}
            <Link href="/tours/sri-lanka/sri-lanka-tour-travel-guide-2026/" className={INLINE_LINK}>
              our Sri Lanka travel guide
            </Link>{" "}
            explains how the monsoon seasons split the island. Nepal’s mountain views are
            clearest from October to December. Kashmir turns to snow, which is why people book
            Gulmarg now, and the{" "}
            <Link href="/blog/kashmir-trip-cost-from-malaysia/" className={INLINE_LINK}>
              Kashmir trip cost breakdown for Malaysians
            </Link>{" "}
            shows what a full trip adds up to once flights are in.
          </p>
        </div>
      </Section>

      {/* ── MUSLIM-FRIENDLY ───────────────────────────────────────────────── */}
      <Section
        label="Muslim-Friendly"
        heading="Muslim-Friendly Year End Holiday Packages"
        className="bg-white"
      >
        <p className={`${BODY} max-w-3xl`}>
          Two of the year end holiday packages above are built as Muslim-friendly trips from the
          start: the 4 day Sri Lanka tour with halal meals included, and the 6 day Nepal tour
          with halal dining guidance and a Muslim-aware private guide. For every other package,
          tell us what you need when you enquire and we plan meals and prayer times around it.
          How that works across other routes is covered in{" "}
          <Link href="/muslim-friendly-holiday-travel-guide/" className={INLINE_LINK}>
            our Muslim-friendly holiday travel guide
          </Link>
          .
        </p>
      </Section>

      {/* ── COMPANIES AND BIG FAMILIES ────────────────────────────────────── */}
      <Section
        label="Groups"
        heading="Year End Holiday Trips for Companies and Big Families"
        className="bg-teal-light/40"
      >
        <p className={`${BODY} max-w-3xl`}>
          Plenty of companies like to close the year with a retreat or incentive trip, and
          extended families often want to travel together during the same school break. Both are
          quoted by headcount and room setup rather than per package, so it is better to start
          with a message than a booking. Details on{" "}
          <Link href="/group-incentive-travel-packages/" className={INLINE_LINK}>
            group and incentive travel packages for companies and clubs
          </Link>{" "}
          are on their own page.
        </p>
      </Section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FaqSection faqs={faqs} heading="Frequently Asked Questions" />

      {/* ── CTA ───────────────────────────────────────────────────────────────
          The house CTA band, without CtaSection's buttons: the copy's two
          calls to action are inline links in its paragraph. The WhatsApp one
          carries the DHESU-WEB-YEAREND code that tells these leads apart in
          GHL and GA4. */}
      <section className="relative py-12 lg:py-16 overflow-hidden bg-teal-navy">
        <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center" data-reveal>
          <h2 className="font-primary font-bold text-white leading-tight mb-4 text-3xl md:text-5xl">
            Book Your Year End Holiday Package Now
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
            December is already filling up, and prices only go one way from here. Send us your
            dates, how many of you are travelling and the ages of any children, and we will come
            back with a written quote and what is currently open. You can{" "}
            <Link href={CONTACT} className={DARK_LINK}>
              request a free quote through our contact page
            </Link>
            , or{" "}
            <a
              href={whatsappHref("yearend")}
              target="_blank"
              rel="noopener noreferrer"
              className={DARK_LINK}
            >
              message us on WhatsApp about last-minute December departures
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
