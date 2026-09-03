"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { FaqAccordion } from "@/src/components/tours/TourPackageDetailTemplate";
import { company } from "@/src/data/company";
import { destinations } from "@/src/data/destinations";

// Copy from content-document/home&company/Daily Customized & Ready-Made
// Holidays, Trusted by Malaysian Travellers Since 1988.docx, taken verbatim.
// This block sits below the existing marketing sections; the sheet asks for the
// homepage to be optimised, not rebuilt.

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const whyAgency = [
  {
    want: "Confidence in an unfamiliar destination",
    how: "Curated itineraries built from decades of on-ground experience, not guesswork",
  },
  {
    want: "Value for money",
    how: "Negotiated group rates and package pricing that's often difficult to replicate booking piece by piece",
  },
  {
    want: "Support when plans change",
    how: "A real person to call if a flight is delayed or an itinerary needs adjusting",
  },
  {
    want: "Time saved",
    how: "A ready-made itinerary instead of dozens of hours comparing hotels, transport, and activities individually",
  },
  {
    want: "Local, on-ground knowledge",
    how: "Insight into which experiences are genuinely worth including and which are overrated",
  },
];

// The draft names six destinations; images and links come from the curated
// list in src/data/destinations.ts so nothing is duplicated here.
const trending = [
  { slug: "sri-lanka", blurb: "cultural heritage, hill country, and beach combinations" },
  { slug: "india", blurb: "from the Taj Mahal to Kerala's backwaters and Kashmir's mountains" },
  { slug: "indonesia", blurb: "honeymoon escapes, family holidays, and adventure add-ons" },
  { slug: "nepal", blurb: "Himalayan scenery paired with Kathmandu's cultural depth" },
  { slug: "vietnam", blurb: "Hanoi, Halong Bay, and Ho Chi Minh City itineraries" },
  { slug: "cambodia", blurb: "Angkor Wat and Siem Reap's temple heritage" },
];

// A genuine sequence, so the steps are numbered.
const planningSteps = [
  {
    title: "Browse or enquire",
    body: "Explore packages by destination, or reach out directly with a general idea of where you'd like to go.",
  },
  {
    title: "Get a tailored quote",
    body: "A consultant reviews your travel dates, group size, and preferences to put together pricing and options.",
  },
  {
    title: "Refine the details",
    body: "Adjust hotel categories, add or remove activities, and confirm your final itinerary.",
  },
  {
    title: "Book with confidence",
    body: "Confirm your trip with a licensed, IATA-registered agency backing the arrangements.",
  },
  {
    title: "Travel with support",
    body: "Access on-ground assistance and a point of contact throughout your trip.",
  },
];

const holidayTypes = [
  {
    option: "Ready-made packages",
    bestFor: "Travellers wanting a proven itinerary without extensive planning",
    expect: "Set inclusions, competitive group pricing, faster booking",
  },
  {
    option: "Fully customized trips",
    bestFor: "Travellers with specific dates, interests, or group needs",
    expect: "Tailored itinerary built around your exact preferences",
  },
];

const whatToCheck = [
  {
    check: "Industry credentials (IATA, PATA, MATTA)",
    why: "Confirms the agency operates under recognised industry standards and accountability",
  },
  {
    check: "Years in operation",
    why: "A longer track record generally signals consistent, reliable service through changing market conditions",
  },
  {
    check: "Transparency in pricing",
    why: "Clear, itemised quotes without hidden fees reflect a trustworthy booking process",
  },
  {
    check: "Range of destination expertise",
    why: "Broad coverage suggests genuine on-ground relationships, not just resold third-party packages",
  },
  {
    check: "Physical office and contact channels",
    why: "A real, reachable presence adds accountability beyond a purely online storefront",
  },
];

export default function PlanningGuide({
  faqs,
}: {
  /** Owned by the page so the same list drives the FAQPage markup. */
  faqs: { question: string; answer: string }[];
}) {
  const bySlug = Object.fromEntries(destinations.map((d) => [d.slug, d]));

  return (
    <>
      {/* ── WHY A TRAVEL AGENCY ───────────────────────────────────────────── */}
      <section className="py-12 lg:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-3xl mb-14"
          >
            <SectionLabel text="Why an Agency" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-5">
              Why Malaysian travellers still choose a travel agency in 2026
            </h2>
            {/* The draft opens here, before the argument below it. */}
            <p className="text-gray-500 text-lg leading-relaxed mb-5">
              The process of arranging a holiday vacation ought to be fun-filled and not
              stress-inducing. For more than three decades now, Dhesu Travel &amp; Tours has been
              assisting tourists from Malaysia to convert their dreams about the &ldquo;place that
              I would like to see someday&rdquo; into an organized holiday, regardless of where
              that place is, be it Bali, Varanasi, Nepal or any other destination.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed">
              Booking flights and hotels online has never been easier, yet thousands of
              Malaysians still choose to book their holidays through an established travel
              agency every year. The reasons tend to be consistent, whichever destination
              they&apos;re headed to.
            </p>
          </motion.div>

          {/* A want on the left, how it is met on the right — the draft's own
              two-column table, kept as a mapping rather than flattened. */}
          <div className="hidden md:grid grid-cols-12 gap-10 pb-4 border-b-2 border-teal-navy">
            <span className="col-span-5 text-xs uppercase tracking-[0.18em] font-semibold text-gray-400">
              What travellers want
            </span>
            <span className="col-span-7 text-xs uppercase tracking-[0.18em] font-semibold text-gray-400">
              How a travel agency delivers it
            </span>
          </div>
          <div className="md:border-t-0 border-t-2 border-teal-navy">
            {whyAgency.map((row) => (
              <motion.div
                key={row.want}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-10 border-b border-gray-200 py-7"
              >
                <p className="md:col-span-5 font-primary font-bold text-teal-navy text-lg leading-snug">
                  {row.want}
                </p>
                <div className="md:col-span-7 flex gap-4">
                  <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary hidden md:block" aria-hidden />
                  <p className="text-gray-600 text-[15px] leading-relaxed">{row.how}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start"
          >
            <div className="lg:col-span-7">
              <h3 className="font-primary font-bold text-teal-navy text-2xl leading-snug mb-4">
                30+ years of experience, built one trip at a time
              </h3>
              <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
                {company.legalName} has been offering travel and tours for individuals and
                families (including a minimum of two persons) since {company.foundedYear}.
                Daily there are possibilities of travelling to many places on various holidays
                like cultural tours, beach holiday, honeymoon tour, pilgrimage and adventure
                tour. This is not just any other firm which recently started giving travel
                services, but it has earned its entire reputation through travel and tour
                business.
              </p>
            </div>
            <div className="lg:col-span-5 border-l-2 border-primary pl-8">
              <p className="text-gray-400 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
                Our philosophy
              </p>
              <p className="font-secondary text-teal-navy text-3xl leading-snug">
                &ldquo;We aim to offer our customers the widest range of travel services at
                highly competitive prices.&rdquo;
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHERE MALAYSIANS ARE TRAVELLING ───────────────────────────────── */}
      <section className="py-12 lg:py-12 lg:py-16 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-3xl mb-14"
          >
            <SectionLabel text="Trending Now" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-5">
              Where Malaysians are travelling with Dhesu
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              The most searched and booked destinations reflect what Malaysian travellers are
              prioritising this year: a mix of value-for-money classics and increasingly
              popular new interests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trending.map((item, i) => {
              const dest = bySlug[item.slug];
              if (!dest) return null;
              return (
                <motion.div
                  key={item.slug}
                  custom={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                  variants={fadeUp}
                >
                  <Link
                    href={dest.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={dest.image}
                        alt={dest.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-primary font-bold text-teal-navy text-xl mb-2">
                        {dest.name}
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed">{item.blurb}</p>
                      <span className="mt-auto pt-5 text-primary-dark font-semibold text-sm">
                        View packages →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-gray-600 text-[15px] md:text-base leading-relaxed max-w-3xl mt-12"
          >
            Each of these destinations has dedicated itinerary options, ranging from short 3
            to 4 day getaways to more immersive 8 to 11 day journeys.
          </motion.p>
        </div>
      </section>

      {/* ── WHAT CUSTOMIZED MEANS + HOW PLANNING WORKS ────────────────────── */}
      <section className="py-12 lg:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-3xl mb-20"
          >
            <SectionLabel text="Customised, Really" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-5">
              What &ldquo;customized&rdquo; actually means
            </h2>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              There is an often held misunderstanding that when traveling through travel
              agencies, all packages must be inflexible and standardized. But the reality is
              that many of the itineraries offered act as a solid base for customization
              depending on your budget and the size of your group, accommodation level,
              activities, and even the speed at which you travel may be altered. And this is
              just one of the biggest benefits over creating your own DIY itinerary.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mb-10"
          >
            <SectionLabel text="How It Works" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-3xl md:text-4xl leading-tight">
              How the planning process works
            </h2>
          </motion.div>

          <ol className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-x-8 gap-y-10">
            {planningSteps.map((step, i) => (
              <motion.li
                key={step.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="border-t-2 border-gray-200 pt-5"
              >
                <span className="font-primary font-bold text-primary text-sm tracking-widest">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-primary font-bold text-teal-navy text-lg mt-2 mb-2.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{step.body}</p>
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── READY-MADE VS CUSTOMIZED ──────────────────────────────────────── */}
      <section className="py-12 lg:py-12 lg:py-16 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-3xl mb-12"
          >
            <SectionLabel text="Two Ways to Travel" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight">
              Ready-made vs. fully customized holidays
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {holidayTypes.map((item) => (
              <motion.div
                key={item.option}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 lg:p-10"
              >
                <h3 className="font-primary font-bold text-teal-navy text-2xl leading-snug mb-6">
                  {item.option}
                </h3>
                <p className="text-gray-400 text-xs uppercase tracking-[0.18em] font-semibold mb-2">
                  Best for
                </p>
                <p className="text-gray-600 text-[15px] leading-relaxed mb-6">{item.bestFor}</p>
                <p className="text-gray-400 text-xs uppercase tracking-[0.18em] font-semibold mb-2">
                  What to expect
                </p>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.expect}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-gray-600 text-[15px] md:text-base leading-relaxed max-w-3xl mt-12"
          >
            Both approaches draw on the same destination expertise and supplier relationships,
            so neither option compromises on quality; the difference is simply how much
            personalisation you want built in from the start.
          </motion.p>
        </div>
      </section>

      {/* ── COMPARING AGENCIES ────────────────────────────────────────────── */}
      <section className="py-12 lg:py-12 lg:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-3xl mb-14"
          >
            <SectionLabel text="Value and Trust" />
            <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight mb-5">
              What to look for when comparing travel agencies
            </h2>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              Consistency in the approach has been one of the hallmarks of the agency all along
              — the best selection of travel services available at truly competitive prices
              with accountability attached. Not all travel agencies offer the same level of
              service, and it&apos;s worth knowing what to check before committing to one,
              regardless of who you ultimately book with.
            </p>
          </motion.div>

          {/* A checklist, so it is set as one — five things to look for, laid
              out to be scanned rather than read straight through. */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
            {whatToCheck.map((row) => (
              <motion.div
                key={row.check}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className="border-t-2 border-gray-200 pt-6"
              >
                <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
                  {row.check}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{row.why}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-14 border-l-2 border-primary pl-8 max-w-3xl"
          >
            <p className="font-primary font-semibold text-teal-navy text-lg mb-3">
              A note on booking confidence in 2026
            </p>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              As a result of continued strong demand for travel in South East Asia and even
              internationally, there may be times when popular travel locations and travel
              windows are booked even farther ahead than travelers anticipate. Booking through a
              reputable agency provides access to up-to-date information and connections that
              may be the determining factor in booking your ideal travel schedule rather than
              having to settle for less than ideal travel plans. This is especially important
              during periods of high demand, such as school holidays and major festivals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="py-12 lg:py-12 lg:py-16 bg-pattern">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="lg:col-span-5"
            >
              <div className="lg:sticky lg:top-28">
                <SectionLabel text="Questions" />
                <h2 className="font-primary font-bold text-[#1a1a1a] text-4xl md:text-5xl leading-tight">
                  Frequently asked questions
                </h2>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={fadeUp}
              className="lg:col-span-7"
            >
              <FaqAccordion items={faqs} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CLOSING CTA ───────────────────────────────────────────────────── */}
      <section className="bg-teal-navy py-12 lg:py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <h2 className="font-primary font-bold text-white text-3xl md:text-5xl leading-tight mb-5">
              Start planning your next holiday
            </h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Whether you already know your destination or need help narrowing it down, a
              consultant can help turn your travel ideas into a properly planned itinerary.
              Reach out today for a free, personalised quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <Button variant="light" showArrow size="lg">
                  Get a Free Quote
                </Button>
              </Link>
              <Link href="/tours">
                <Button variant="transparent" showArrow size="lg">
                  Browse Destinations
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
