"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { tourPages } from "@/src/data/tourPages";
import { getGuidePages } from "@/src/data/destinationDetail";
import CtaSection from "@/src/components/CtaSection";
import LinkedFaqSection from "@/src/components/LinkedFaqSection";
import type { LinkedFaq } from "@/src/data/linkedFaq";
import { Bullet, DataTable, INLINE_LINK, Section } from "@/src/data/guides/primitives";
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

// Derive destination cards from tourPages.
//
// Every hub is listed, including the newer destinations whose itineraries are
// still being built. Those already have a full planning guide, so the card
// counts what is actually there — guides and packages named separately — rather
// than calling a destination "Coming Soon" while an article sits behind it.
const plural = (n: number, noun: string) => `${n} ${noun}${n !== 1 ? "s" : ""}`;

const destinations = Object.values(tourPages).map((d) => {
  const count = d.packages?.items?.length ?? 0;
  const guides = getGuidePages(d.meta.slug).length;
  return {
    name: d.meta.name,
    tagline: d.hero.badge,
    body: d.hero.body,
    image: d.hero.bgImage,
    href: `/tours/${d.meta.slug}`,
    packageCount:
      count > 0
        ? plural(count, "Package")
        : guides > 0
          ? plural(guides, "Travel Guide")
          : "Coming Soon",
    highlights: d.zones.areas.slice(0, 4).map((a) => a.name),
    badge: d.meta.region ?? "",
    tagColor: d.meta.hubCardColor ?? "gray",
  };
});

const BODY = "text-gray-600 text-[15px] leading-relaxed";
const H3 = "font-primary font-bold text-[#1a1a1a] text-xl mt-12 mb-5";

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

const byDestination: [string, string, string, string, string, string][] = [
  ["India", "/tours/india/", "63", "Taj Mahal, Kerala backwaters, Kashmir, Varanasi", "Golden Triangle", "/tours/india/golden-triangle/"],
  ["Indonesia", "/tours/indonesia/", "27", "Bali, Borobudur, Bromo, Lake Toba", "Bali tours", "/tours/indonesia/bali/"],
  ["Vietnam", "/tours/vietnam/", "19", "Halong Bay, Hoi An, Hanoi", "3 day Hanoi and Halong Bay", "/tours/vietnam/north-vietnam/3-day-hanoi-halong-bay-super-saver/"],
  ["Sri Lanka", "/tours/sri-lanka/", "12", "Ancient cities, tea hills, leopards", "6 day wildlife safari", "/tours/sri-lanka/yala-national-park/6-day-wildlife-safari/"],
  ["Nepal", "/tours/nepal/", "8", "Himalayan peaks, Pokhara, Kathmandu", "Muslim-friendly Nepal", "/tours/nepal/muslim-friendly/"],
  ["Thailand", "/tours/thailand/", "6", "Bangkok, Phuket, Krabi, Chiang Mai", "Phuket and Krabi", "/tours/thailand/phuket-krabi-holiday-guide-2026/"],
  ["Cambodia", "/tours/cambodia/", "5", "Angkor Wat, Siem Reap, Phnom Penh", "3 day Angkor tour", "/tours/cambodia/siem-reap/3-day-angkor-khmer-empire/"],
  ["Bhutan", "/tours/bhutan/", "4", "Tiger’s Nest, Paro Valley", "Bhutan packages", "/tours/bhutan/"],
  ["Malaysia (Borneo)", "/tours/malaysia/", "4", "Sabah and Sarawak rainforest and wildlife", "Borneo packages", "/tours/malaysia/"],
  ["Laos", "/tours/laos/", "1", "Luang Prabang, Vientiane", "Laos package", "/tours/laos/"],
];

export default function ToursIndexContent({ faqs }: { faqs: LinkedFaq[] }) {
  return (
    <>

      <main>
        {/* ── Page Header ─────────────────────────────────────────────── */}
        <section className="bg-[#faf9f7] border-b border-gray-100 py-12 lg:py-16 px-5 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="max-w-3xl mx-auto"
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
            <div className="space-y-4 text-gray-500 text-lg leading-relaxed">
              <p>
                Dhesu has been planning holidays for Malaysian travellers since 1988. Our range now
                covers more than 140 packages across India, Indonesia, Vietnam, Sri Lanka, Nepal,
                Thailand, Cambodia, Bhutan, Laos and Malaysian Borneo, each with hand-picked hotels,
                an English-speaking guide and airport transfers arranged. Pick a destination below,
                or narrow things down by travel style, season or budget.
              </p>
              <p>
                We are licensed by the Ministry of Tourism Malaysia (KKKP 1439) and accredited by
                IATA, PATA and MATTA. Many of our customers tell us the biggest advantage is having a
                real team in Kuala Lumpur to call, which is a big part of{" "}
                <L href="/why-book-with-a-travel-agent-2026/">
                  why Malaysians still book through a travel agent
                </L>{" "}
                rather than piecing a trip together online. If you&rsquo;re curious about how the
                company grew from a single office to a name Malaysians trust,{" "}
                <L href="/about-us/">the Dhesu Travel story</L> tells it.
              </p>
            </div>
          </motion.div>
        </section>

        {/* ── Browse by Destination ────────────────────────────────────── */}
        <section className="max-w-6xl mx-auto px-5 py-12 lg:py-16 md:py-24">
          <Section label="Destinations" heading="Browse by Destination">
            <DataTable
              headers={["Destination", "Packages", "Known for", "Good place to start"]}
              rows={byDestination.map(([name, href, count, known, start, startHref]) => [
                <L key={href} href={href}>
                  {name}
                </L>,
                count,
                known,
                <L key={startHref} href={startHref}>
                  {start}
                </L>,
              ])}
            />
          </Section>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            {destinations.map((dest, i) => (
              <motion.div
                key={dest.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="h-full"
              >
                <Link
                  href={dest.href}
                  className="group flex h-full flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300 bg-white"
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
                      fetchPriority={i === 0 ? "high" : "auto"}
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
                      <h3 className="text-white font-primary font-bold text-4xl leading-none">
                        {dest.name}
                      </h3>
                    </div>

                    {/* Package count pill */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#1a1a1a] text-xs font-semibold px-3 py-1 rounded-full">
                      {dest.packageCount}
                    </div>
                  </div>

                  {/* Card body.
                      Blurbs and zone counts differ per destination, so the
                      body is clamped and the footer pushed down with mt-auto —
                      otherwise cards in the same row end at different heights. */}
                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-primary font-semibold text-sm mb-1 line-clamp-1">
                      {dest.tagline}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-3">
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

                    <div className="mt-auto flex items-center gap-1.5 text-primary font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                      Explore {dest.name}
                      <ArrowRight size={15} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
            className="max-w-4xl"
          >
            <h3 className={H3}>India: our biggest range</h3>
            <p className={BODY}>
              With 63 packages, India is where most first-time visitors need a little steering.
              Short on leave and want the classics? The{" "}
              <L href="/tours/india/golden-triangle/">Delhi Agra Jaipur Golden Triangle</L> fits
              into five days. Prefer a slower, greener pace?{" "}
              <L href="/tours/india/kerala/">Kerala&rsquo;s backwaters and Munnar tea hills</L> suit
              families and couples. If you&rsquo;re after snow or houseboats on still water,{" "}
              <L href="/tours/india/kashmir/">Kashmir</L> delivers both, depending on the season.
              Travellers drawn to the Ganges often start with{" "}
              <L href="/tours/india/varanasi/">Varanasi and the evening Ganga Aarti</L>, and anyone
              wanting cool mountain air can look at the{" "}
              <L href="/tours/india/north-india/9-day-shimla-manali/">9 day Shimla and Manali tour</L>.
            </p>

            <h3 className={H3}>Indonesia: more than Bali</h3>
            <p className={BODY}>
              Bali is the entry point, whether you want the budget-friendly{" "}
              <L href="/tours/indonesia/bali/3-day-super-saver/">3 day Super Saver</L>, the popular{" "}
              <L href="/tours/indonesia/bali/4-day-best-of-bali/">4 day Best of Bali</L> or a longer{" "}
              <L href="/tours/indonesia/bali/5-day-bliss-temples-highlands-sunset/">
                5 day trip through temples, highlands and sunset spots
              </L>
              . Travellers who&rsquo;ve already done Bali often move on to{" "}
              <L href="/tours/indonesia/yogyakarta/4-day-best-seller-borobudur/">
                Borobudur on a Yogyakarta trip
              </L>
              , a{" "}
              <L href="/tours/indonesia/surabaya-bromo/4-day-bromo-sunrise-adventure/">
                4WD sunrise at Mount Bromo
              </L>
              , the{" "}
              <L href="/tours/indonesia/medan-lake-toba/3-day-lake-toba/">volcanic lake at Toba</L>{" "}
              or a quieter{" "}
              <L href="/tours/indonesia/lombok/3-day-lombok-island/">island break in Lombok</L>.
              There&rsquo;s even a{" "}
              <L href="/tours/indonesia/jakarta-bandung/4-day-whoosh-bullet-train/">
                4 day Jakarta and Bandung trip on the Whoosh bullet train
              </L>
              . If it&rsquo;s your first visit to the island, our{" "}
              <L href="/tours/indonesia/bali-holiday-travel-guide-2026/">Bali holiday travel guide</L>{" "}
              covers areas, timing and what to book first.
            </p>
          </motion.div>
        </section>

        {/* ── Browse by Travel Style ───────────────────────────────────── */}
        <section className="bg-[#faf9f7] border-t border-gray-100 py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-5">
            <Section label="Travel Style" heading="Browse by Travel Style">
              <ul className="space-y-4 max-w-4xl">
                <Bullet>
                  <strong>Romance:</strong> couples often choose the{" "}
                  <L href="/tours/indonesia/bali/4-day-romantic-escape-pool-villa/">
                    4 day Bali pool villa escape
                  </L>
                  , and the{" "}
                  <L href="/honeymoon-holiday-guide-2026/">honeymoon ideas we&rsquo;ve put together</L>{" "}
                  cover other destinations that work well for newlyweds.
                </Bullet>
                <Bullet>
                  <strong>Muslim-friendly travel:</strong> Nepal and Sri Lanka both have dedicated
                  programmes, and the way we plan{" "}
                  <L href="/muslim-friendly-holiday-travel-guide/">
                    halal meals and prayer-friendly days
                  </L>{" "}
                  applies across our other destinations too. Specific options are available for{" "}
                  <L href="/tours/nepal/muslim-friendly/">Nepal</L> and{" "}
                  <L href="/tours/sri-lanka/muslim-friendly/">Sri Lanka</L>.
                </Bullet>
                <Bullet>
                  <strong>Pilgrimage and spiritual travel:</strong> the{" "}
                  <L href="/tours/india/north-india/11-day-buddhist-pilgrimage/">
                    11 day Buddhist pilgrimage through North India
                  </L>{" "}
                  follows the Buddha&rsquo;s footsteps, while Hindu travellers often add Ayodhya and
                  Rishikesh to a <L href="/tours/india/varanasi/">Varanasi trip</L>. Anyone planning
                  the high Himalayan route should first look at what&rsquo;s involved in a{" "}
                  <L href="/blog/muktinath-yatra-guide-from-malaysia/">
                    Muktinath Yatra from Malaysia
                  </L>
                  .
                </Bullet>
                <Bullet>
                  <strong>Wildlife:</strong> leopards are the draw on the{" "}
                  <L href="/tours/sri-lanka/yala-national-park/6-day-wildlife-safari/">
                    6 day safari through Yala National Park in Sri Lanka
                  </L>
                  .
                </Bullet>
                <Bullet>
                  <strong>Mountains and snow:</strong> Himalayan scenery runs from{" "}
                  <L href="/tours/india/kashmir/">Kashmir&rsquo;s Gulmarg</L> to{" "}
                  <L href="/tours/india/north-india/9-day-shimla-manali/">Shimla and Manali</L> and
                  across the border to <L href="/tours/bhutan/">Bhutan</L>.
                </Bullet>
                <Bullet>
                  <strong>Cruises:</strong> our{" "}
                  <L href="/star-cruise-holiday-guide-2026/">Star Cruise packages</L> suit families
                  and groups, and first-timers can pick up{" "}
                  <L href="/blog/star-cruise-packing-tips/">packing and onboard tips</L> before
                  sailing.
                </Bullet>
                <Bullet>
                  <strong>Companies and large groups:</strong>{" "}
                  <L href="/group-incentive-travel-packages/">group and incentive packages</L> can be
                  built around a budget, and{" "}
                  <L href="/blog/group-incentive-trip-ideas/">trip ideas sorted by cost per head</L>{" "}
                  help with early planning.
                </Bullet>
              </ul>
            </Section>
          </div>
        </section>

        {/* ── Browse by Season and Occasion ────────────────────────────── */}
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-5">
            <Section label="Season" heading="Browse by Season and Occasion">
              <p className={`${BODY} max-w-4xl`}>
                Peak travel windows book up fast. Families planning around the mid-year break can
                check the <L href="/school-holiday-travel-deals-2026/">school holiday deals</L>,
                while December travellers have a separate set of{" "}
                <L href="/year-end-holiday-travel-deals-2026/">year-end holiday offers</L>. For
                festive trips, there are{" "}
                <L href="/raya-holiday-travel-deals-2026/">Hari Raya holiday packages</L>, and any
                current discounts are listed under <L href="/promotions/">promotions</L>.
              </p>
            </Section>
          </div>
        </section>

        {/* ── Browse by Budget ─────────────────────────────────────────── */}
        <section className="bg-[#faf9f7] border-t border-gray-100 py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-5">
            <Section label="Budget" heading="Browse by Budget">
              <DataTable
                minWidth={480}
                widths={["w-1/4"]}
                headers={["Budget (per person)", "Trips to consider"]}
                rows={[
                  [
                    "Under RM1,000",
                    <>
                      <L href="/tours/india/kerala/">3 day Kerala</L>,{" "}
                      <L href="/tours/india/north-india/3-day-varanasi-ganga-aarti/">3 day Varanasi</L>,{" "}
                      <L href="/tours/indonesia/bali/4-day-best-of-bali/">4 day Best of Bali</L>
                    </>,
                  ],
                  [
                    "RM1,000 to RM2,500",
                    <>
                      <L href="/tours/india/kashmir/4-day-super-saver/">4 day Kashmir Super Saver</L>,{" "}
                      <L href="/tours/india/golden-triangle/">5 day Golden Triangle</L>,{" "}
                      <L href="/tours/india/north-india/9-day-shimla-manali/">9 day Shimla and Manali</L>
                    </>,
                  ],
                  [
                    "Over RM2,500",
                    <>
                      <L href="/tours/india/kashmir/">Longer Kashmir itineraries</L>,{" "}
                      <L href="/tours/india/north-india/11-day-sacred-trails/">11 day Sacred Trails</L>{" "}
                      and multi-city India combinations
                    </>,
                  ],
                ]}
              />
              <p className={`${BODY} mt-6 max-w-4xl`}>
                Prices on each destination page are &ldquo;From&rdquo; rates per person. Anyone
                weighing up a bigger trip will find that a{" "}
                <L href="/blog/kashmir-trip-cost-from-malaysia/">
                  breakdown of what Kashmir actually costs from Malaysia
                </L>{" "}
                is a useful template for budgeting other long-haul holidays too.
              </p>
            </Section>
          </div>
        </section>

        {/* ── Destinations We Build to Order ───────────────────────────── */}
        <section className="py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-5">
            <Section label="On Request" heading="Destinations We Build to Order">
              <p className={`${BODY} max-w-4xl`}>
                China, Hong Kong, Myanmar, Dubai, Europe, Australia and Mauritius don&rsquo;t have
                fixed packages yet, but we plan them on request. The overview pages for{" "}
                <L href="/tours/china/">China</L>, <L href="/tours/hong-kong/">Hong Kong</L>,{" "}
                <L href="/tours/myanmar/">Myanmar</L>, <L href="/tours/dubai/">Dubai</L>,{" "}
                <L href="/tours/europe/">Europe</L>, <L href="/tours/australia/">Australia</L> and{" "}
                <L href="/tours/mauritius/">Mauritius</L> show what&rsquo;s possible. Send your
                travel dates through a{" "}
                <L href="/custom-itinerary-request/">custom itinerary request</L> and our team will
                come back with a plan.
              </p>
            </Section>
          </div>
        </section>

        <LinkedFaqSection faqs={faqs} heading="Frequently Asked Questions" />

        <CtaSection
          heading="Plan Your Trip"
          body="Not sure where to go? Tell us your dates, budget and who’s travelling, and we’ll suggest a shortlist."
          actions={[
            { label: "Send a custom itinerary request", href: "/custom-itinerary-request/" },
            { label: "WhatsApp us on +6019 336 4465", href: "https://wa.me/60193364465" },
          ]}
        />
      </main>

    </>
  );
}
