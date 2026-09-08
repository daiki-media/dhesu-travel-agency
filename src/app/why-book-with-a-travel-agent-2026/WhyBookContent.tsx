"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AllPagesHero from "@/src/components/AllPagesHero";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";

// Every string of copy below is taken from
// content-document/home&company/Why Book With a Travel Agent Instead of Doing It Yourself.docx.
// Nothing is rewritten; only the draft's own order is preserved.

// Photography for this page only, so it does not collide with the imagery the
// other Holiday Idea pages still need. Sourced from the Dhesu gallery archive.
const PHOTO = {
  hero: "/images/why-book/savannah-plains.jpg",
  fort: "/images/why-book/hillside-fort.jpg",
  citySunset: "/images/why-book/harbour-city-sunset.jpg",
  mountainRoad: "/images/why-book/mountain-pass-road.jpg",
  mosque: "/images/why-book/mosque-interior.jpg",
  desert: "/images/why-book/desert-traveller.jpg",
  footbridge: "/images/why-book/hillside-footbridge.jpg",
  lagoon: "/images/why-book/turquoise-lagoon.jpg",
  temple: "/images/why-book/temple-illuminated.jpg",
};

/** Full-bleed image with a caption, used to break up long stretches of prose. */
function Figure({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={`relative overflow-hidden rounded-2xl ${className}`}>
      <Image src={src} alt={alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
    </div>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const practiceList = [
  "Knowing which attractions are worth the queue and which are overrated tourist traps",
  "Sequencing a multi-city itinerary so travel time between stops is realistic, not exhausting",
  "Matching hotel locations to your actual itinerary, rather than just the cheapest listing",
  "Flagging seasonal considerations (monsoon timing, festival closures, extreme heat) that a booking site won't surface",
];

const bookingApproaches = [
  {
    approach: "Fully DIY",
    note: "self-booked",
    advantage: "Maximum control over every choice",
    tradeOff: "Time-intensive; no bundled pricing; full risk if something goes wrong",
  },
  {
    approach: "Online travel agency",
    note: "OTA",
    advantage: "Convenient, instant booking",
    tradeOff: "Limited personalised support; generic, non-customized itineraries",
  },
  {
    approach: "Traditional travel agent",
    note: "what Dhesu does",
    advantage: "Personalised planning, group rates, real support",
    tradeOff: "Slightly less granular control over every micro-decision",
  },
];

const supportSituations = [
  "A connecting flight is cancelled or significantly delayed",
  "A hotel booking has an error or the property doesn't match what was described",
  "You want to adjust your itinerary mid-trip",
  "A local guide or transport arrangement doesn't show up as expected",
];

const complexTrips = [
  "Multi-country itineraries requiring coordinated transport and logistics across borders",
  "Destinations with limited English-language infrastructure, where local support matters more",
  "Pilgrimage or culturally specific travel, where getting the sequencing and access right requires genuine local knowledge",
  "First-time visits to unfamiliar regions, where you don't yet know what you don't know",
];

// The draft writes these as "Label - explanation"; split so the label can lead.
const diyPitfalls = [
  {
    label: "Mismatched connections",
    body: "Booking flights and ground transport separately without accounting for realistic transfer times between them",
  },
  {
    label: "Underestimating logistics in unfamiliar destinations",
    body: "Not realising that a “short drive” on a map can take significantly longer on local roads or terrain",
  },
  {
    label: "Missing seasonal or cultural considerations",
    body: "Booking during a religious holiday or festival period that closes key attractions, without realising it in advance",
  },
  {
    label: "No fallback plan",
    body: "Having no established point of contact if a hotel booking falls through or a local operator cancels last minute",
  },
];

/** Script eyebrow, borrowing the Montez face the homepage hero uses. */
function Eyebrow({ children, tone = "dark" }: { children: string; tone?: "dark" | "light" }) {
  return (
    <p
      className={`font-secondary text-2xl md:text-3xl mb-2 ${
        tone === "light" ? "text-white/80" : "text-primary"
      }`}
    >
      {children}
    </p>
  );
}

/** List item marked with a short rule instead of an icon tile. */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className="text-gray-600 text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

/** Heading rail on the left, argument on the right. */
function Argument({
  eyebrow,
  heading,
  children,
}: {
  eyebrow: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14"
    >
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="font-primary font-bold text-[#1a1a1a] text-[1.75rem] md:text-[2rem] leading-[1.2] tracking-[-0.01em]">
            {heading}
          </h2>
        </div>
      </div>
      <div className="lg:col-span-8 lg:pt-3">{children}</div>
    </motion.div>
  );
}

export default function WhyBookContent({
  faqs,
}: {
  /** Owned by the page so the same list drives the FAQPage markup. */
  faqs: { question: string; answer: string }[];
}) {
  return (
    <>
      <AllPagesHero
        image={PHOTO.hero}
        imageAlt="Zebra grazing on open plains beneath a distant mountain"
        eyebrow="Planning advice"
        title="Why Book With a Travel Agent"
        titleAccent="Instead of Doing It Yourself?"
        size="lg"
        actions={[
          { label: "Request a Free Quote", href: "/contact" },
          { label: "Browse Destinations", href: "/tours" },
        ]}
      >
      </AllPagesHero>

      {/* ── LEAD ─────────────────────────────────────────────────────────── */}
      <section className="pt-12 pb-10 lg:pt-14 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-4xl text-[#1a1a1a] text-lg md:text-xl leading-[1.6]"
          >
            With hundreds of websites that allow you to compare flights, mobile
            applications that help you reserve hotels, and an abundance of travel blogs, it
            might be reasonable to question whether there is any reason to book a trip via a
            travel agent. However, self-booking and booking via a travel agent tackle
            completely different issues — and a lot of times booking through a travel agent
            wins.
          </motion.p>
        </div>
      </section>

      {/* ── THE COMPARISON SPINE ──────────────────────────────────────────
          The draft's own three-way trade-off, given the weight of the page.
          The third band resolves into the brand's anchor colour. */}
      <section className="pb-10 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-2xl mb-12"
          >
            <Eyebrow>Three ways to book</Eyebrow>
            <h2 className="font-primary font-bold text-[#1a1a1a] text-[1.75rem] md:text-[2rem] leading-[1.2] tracking-[-0.01em]">
              The Core Trade-Off
            </h2>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mt-6">
              When it all comes down to self-booking, then one is in total control of making
              each decision, but one is also carrying the total research load and taking full
              responsibility for any mistakes made. The travel agent takes on this burden for
              you in return for a little bit of flexibility, which for many travelers,
              particularly first-time visitors, is well worth the trade-off.
            </p>
          </motion.div>

          <div className="hidden md:grid grid-cols-12 gap-8 pb-4 border-b border-gray-200">
            <span className="col-span-3 text-xs uppercase tracking-[0.18em] font-semibold text-gray-400">
              Approach
            </span>
            <span className="col-span-4 text-xs uppercase tracking-[0.18em] font-semibold text-gray-400">
              Typical advantage
            </span>
            <span className="col-span-5 text-xs uppercase tracking-[0.18em] font-semibold text-gray-400">
              Typical trade-off
            </span>
          </div>

          {bookingApproaches.map((row, i) => {
            const resolved = i === bookingApproaches.length - 1;
            return (
              <motion.div
                key={row.approach}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className={
                  resolved
                    ? "grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 bg-teal-navy text-white rounded-xl px-6 md:px-8 py-9 mt-4"
                    : "grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-8 border-b border-gray-200 px-0 md:px-8 py-8"
                }
              >
                <div className="md:col-span-3">
                  <p
                    className={`font-primary font-bold text-lg leading-snug ${
                      resolved ? "text-white" : "text-[#1a1a1a]"
                    }`}
                  >
                    {row.approach}
                  </p>
                  <p
                    className={`text-xs mt-1 ${
                      resolved ? "text-primary" : "text-gray-400"
                    }`}
                  >
                    {row.note}
                  </p>
                </div>
                <p
                  className={`md:col-span-4 text-[15px] leading-relaxed ${
                    resolved ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {row.advantage}
                </p>
                <p
                  className={`md:col-span-5 text-[15px] leading-relaxed ${
                    resolved ? "text-white/70" : "text-gray-600"
                  }`}
                >
                  {row.tradeOff}
                </p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ── IMAGE BREAK ───────────────────────────────────────────────────
          A pause between the argument's setup and its evidence. */}
      <section className="pb-10 lg:pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-5 gap-5"
          >
            <Figure
              src={PHOTO.footbridge}
              alt="A footbridge curving through forested hills"
              className="md:col-span-3 h-64 md:h-[22rem]"
            />
            <Figure
              src={PHOTO.temple}
              alt="An illuminated temple reflected in water after dark"
              className="md:col-span-2 h-64 md:h-[22rem]"
            />
          </motion.div>
        </div>
      </section>

      {/* ── CUSTOM ITINERARIES ────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-teal-light/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Argument eyebrow="Built from experience" heading="Custom Itineraries, Not Search Results">
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              Anyone can search &ldquo;best things to do in Bali&rdquo; and get a list. What a
              travel agent offers is different: an itinerary shaped by actual traveller
              feedback, seasonal knowledge, and an understanding of how activities and
              destinations fit together logistically.
            </p>
            <p className="font-primary font-semibold text-teal-navy mt-8 mb-5">
              What this looks like in practice:
            </p>
            <ul className="space-y-4">
              {practiceList.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
            <Figure
              src={PHOTO.fort}
              alt="A hillside fort above a lake, reached on a guided day trip"
              className="mt-8 h-64 md:h-80"
            />
          </Argument>
        </div>
      </section>

      {/* ── GROUP RATES ───────────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Argument eyebrow="Pricing" heading="Rates You Cannot Reach on Your Own">
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              The travel agencies also benefit from negotiated discounts with the hotels,
              ground transportation companies, and other operators. In particular, this
              discount is often not available to individuals who would like to purchase the
              services by themselves. One can see this advantage in action when looking at
              multi-inclusion packages which are more economically priced than their
              individual components online.
            </p>
            <Figure
              src={PHOTO.citySunset}
              alt="A harbour city skyline at sunset"
              className="mt-8 h-64 md:h-80"
            />
          </Argument>
        </div>
      </section>

      {/* ── ON-GROUND SUPPORT ─────────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-teal-light/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Argument eyebrow="When plans break" heading="Local Support When You Need It">
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              Maybe the single most overlooked benefit of working with a travel agent may not
              become clear until things start going wrong like a missed flight, an incorrect
              reservation or an unexpected change in your schedule. Having an actual person to
              call who knows your complete itinerary and who knows the locals can help you
              turn a potentially difficult situation around, instead of having to figure it
              out all on your own in a foreign land.
            </p>
            <Figure
              src={PHOTO.mountainRoad}
              alt="A winding mountain pass road cut into a steep valley"
              className="mt-8 h-64 md:h-80"
            />
            <p className="font-primary font-semibold text-teal-navy mt-8 mb-5">
              Situations where this support genuinely matters:
            </p>
            <ul className="space-y-4">
              {supportSituations.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
          </Argument>
        </div>
      </section>

      {/* ── TIME SAVED + COMPLEX DESTINATIONS ─────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12 lg:space-y-14">
          <Argument eyebrow="Hours, not weeks" heading="Research and Planning, Handled">
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              A well-rounded research for a multi-destination holiday that involves flight
              bookings, hotel research, itinerary preparation, visa application, and
              arrangement of activities can consume hours even weeks. In one consultation, a
              travel agent compiles all the research by utilizing institutionalized knowledge
              he has gained over many years of doing the same kind of work.
            </p>
          </Argument>

          <Argument
            eyebrow="Where it matters most"
            heading="Complex or Unfamiliar Destinations"
          >
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed mb-8">
              DIY booking tends to work well for simple, familiar trips — a short beach
              holiday to a well-known destination you&rsquo;ve visited before. It becomes
              considerably harder for:
            </p>
            <ul className="space-y-4">
              {complexTrips.map((item) => (
                <Bullet key={item}>{item}</Bullet>
              ))}
            </ul>
            <Figure
              src={PHOTO.mosque}
              alt="The tiled interior of a historic mosque"
              className="mt-8 h-64 md:h-80"
            />
          </Argument>
        </div>
      </section>

      {/* ── WHAT GOES WRONG ───────────────────────────────────────────────
          Staggered so the four read as a scan, not a grid of boxes. */}
      <section className="py-10 lg:py-12 bg-teal-light/40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="max-w-2xl mb-12"
          >
            <Eyebrow>A realistic look</Eyebrow>
            <h2 className="font-primary font-bold text-[#1a1a1a] text-[1.75rem] md:text-[2rem] leading-[1.2] tracking-[-0.01em] mb-6">
              What Goes Wrong With DIY Booking
            </h2>
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              It&rsquo;s worth being specific about the kinds of problems that self-booked
              trips run into most often, since these are exactly the scenarios where a travel
              agent&rsquo;s value becomes obvious in hindsight:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {diyPitfalls.map((item, i) => (
              <motion.div
                key={item.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
                variants={fadeUp}
                className={i % 2 === 1 ? "md:mt-10" : undefined}
              >
                <span className="block h-[2px] w-10 bg-primary mb-5" aria-hidden />
                <h3 className="font-primary font-bold text-teal-navy text-xl leading-snug mb-3">
                  {item.label}
                </h3>
                <p className="text-gray-600 text-[15px] leading-relaxed">{item.body}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="text-gray-600 text-[15px] md:text-base leading-relaxed max-w-2xl mt-12"
          >
            None of these are necessarily deal-breaking mistakes, but they&rsquo;re the kind of
            friction that a travel agent&rsquo;s experience is specifically designed to help you
            avoid.
          </motion.p>
        </div>
      </section>

      {/* ── WHEN DIY MAKES SENSE + THE BOTTOM LINE ────────────────────────
          The concession, then the conclusion, on the anchor colour. */}
      <section className="bg-teal-navy">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-10 lg:py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16"
          >
            <div className="lg:col-span-5">
              <p className="text-white/50 text-xs uppercase tracking-[0.18em] font-semibold mb-4">
                Being honest about it
              </p>
              <h3 className="font-primary font-bold text-white text-2xl leading-snug mb-5">
                When DIY booking genuinely makes sense
              </h3>
              <p className="text-white/70 text-[15px] leading-relaxed">
                However, to be honest, self-booking can be quite an acceptable alternative in
                certain cases when one has to go for a brief trip to a familiar and easily
                accessible destination or for people who like doing all the bookings themselves
                because of their independence. The necessity of a travel agent depends on the
                level of complexity and unfamiliarity of the destination.
              </p>
            </div>

            <div className="lg:col-span-7 lg:border-l lg:border-white/15 lg:pl-16">
              <Eyebrow tone="light">The bottom line</Eyebrow>
              <p className="font-primary font-bold text-white text-[1.75rem] md:text-[2rem] leading-[1.3] tracking-[-0.01em]">
                Traveling through a travel agent doesn&rsquo;t mean that all the decisions will
                be outsourced; rather, it means that the traveler will get expert advice,
                better deals in packages, and support when needed the most.
              </p>
              <p className="text-white/60 text-[15px] leading-relaxed mt-6 max-w-xl">
                This is especially true for those travelers who go to new places or take long
                trips. It is hard to duplicate this value without traveling agents.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── GETTING THE MOST VALUE ────────────────────────────────────────── */}
      <section className="py-10 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <Argument
            eyebrow="Before you call"
            heading="How to Get the Most Value From a Travel Agent"
          >
            <p className="text-gray-600 text-[15px] md:text-base leading-relaxed">
              Just reserving via an agent is not a ticket to having the best trip. Some
              research done beforehand can enable the consultant to create a good fit for you.
              Knowing your budget, what you would prioritize (relaxing, exploring, or
              adventure), any physical constraints with your party, as well as fixed dates,
              will allow the consultant to make specific suggestions, rather than trying to
              work according to some general template.
            </p>
            <Figure
              src={PHOTO.desert}
              alt="A traveller pausing at a desert overlook at sunset"
              className="mt-8 h-64 md:h-80"
            />
          </Argument>
        </div>
      </section>

      <FaqSection faqs={faqs} label="Still wondering" heading="Frequently Asked Questions" />

      <CtaSection
        eyebrow="Ready when you are"
        image={PHOTO.lagoon}
        imageAlt="A calm turquoise lagoon fringed by trees"
        heading="Let an Experienced Consultant Plan Your Next Trip"
        body="Skip the hours of research and get a personalised itinerary backed by decades of destination expertise. Request a free quote today."
      />
    </>
  );
}
