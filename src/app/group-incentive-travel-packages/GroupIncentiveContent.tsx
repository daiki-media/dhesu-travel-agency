"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";

/**
 * Body copy is taken verbatim from
 * content-document/tour-types/Group & Incentive Travel_ Corporate Packages
 * That Reward and Build Teams.docx — the draft's own order, headings and
 * wording.
 *
 * Layout device: this page argues a difference, so its recurring shape is two
 * facing columns — ordinary leisure travel on the left, what changes for a
 * corporate group on the right. The quote process is the one genuine sequence
 * on the page, so it is the only thing numbered.
 */

const PHOTO = {
  hero: "/images/tour-types/resort-grounds.jpg",
  heroAlt: "Landscaped grounds and pool walkway at a resort",
  venue: "/images/tour-types/function-pavilion.jpg",
  venueAlt: "An open-sided function pavilion set up with seating and a screen",
  band: "/images/tour-types/corp-band-florence.jpg",
  bandAlt: "Florence and the Arno at sunset",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const contrast = [
  {
    leisure: "Individual or family-focused planning",
    corporate: "Group logistics across many travelling employees",
  },
  {
    leisure: "Flexible, personal preferences",
    corporate: "Aligned with company objectives (reward, team-building, milestone)",
  },
  {
    leisure: "Single point of decision-making",
    corporate: "Coordination with HR, management, and event planning stakeholders",
  },
  {
    leisure: "Standard booking process",
    corporate: "Formal quotations, invoicing, and corporate accountability",
  },
  {
    leisure: "Individual payment",
    corporate: "Centralised company billing and budget management",
  },
];

const tripTypes = [
  {
    type: "Incentive rewards trips",
    image: "/images/tour-types/corp-incentive-reward.jpg",
    alt: "The Dubai skyline lit up at night",
    purpose: "Recognising top-performing employees, sales teams, or business units",
  },
  {
    type: "Company retreats",
    image: "/images/tour-types/corp-retreat.jpg",
    alt: "A shaded villa deck opening onto a quiet beach",
    purpose:
      "Strengthening internal culture and strategic alignment away from the office",
  },
  {
    type: "Conference or event travel",
    image: "/images/tour-types/corp-conference.jpg",
    alt: "A large open venue laid out with seating and long tables",
    purpose:
      "Coordinating group travel around a specific business event or conference",
  },
  {
    type: "Team-building trips",
    image: "/images/tour-types/corp-team-building.jpg",
    alt: "Two safari vehicles of travellers watching a leopard cross the track",
    purpose: "Structured activities designed to improve collaboration and morale",
  },
  {
    type: "Milestone celebration trips",
    image: "/images/tour-types/corp-milestone.jpg",
    alt: "Candlelit tables set out along the sand at dusk in Bali",
    purpose: "Marking significant company anniversaries or achievements",
  },
];

const clientNeeds = [
  {
    term: "Formal, itemised quotations",
    detail:
      "Clear, professional documentation suitable for internal approval processes",
  },
  {
    term: "Flexible group sizing",
    detail:
      "Ability to scale from small executive groups to large company-wide trips",
  },
  {
    term: "Single point of contact",
    detail:
      "One dedicated consultant managing the full logistics, rather than requiring internal staff to coordinate multiple vendors",
  },
  {
    term: "Budget transparency",
    detail: "Clear breakdowns that support internal budget approval and reporting",
  },
  {
    term: "Contingency planning",
    detail:
      "Experience managing group logistics if plans need to change close to departure",
  },
];

const destinationTypes = [
  {
    type: "Regional Southeast Asia (Bali, Thailand, Vietnam)",
    image: "/images/tour-types/bali-cliff-club.jpg",
    alt: "A cliff-top pool and terrace above the sea at sunset in Bali",
    why: "Shorter flight times, cost-effective for larger groups",
  },
  {
    type: "Structured resort destinations",
    image: "/images/tour-types/corp-structured-resort.jpg",
    alt: "A resort pool ringed by palms and open-sided pavilions",
    why: "Built-in meeting spaces and team-activity infrastructure",
  },
  {
    type: "Iconic, aspirational destinations (Europe, Dubai)",
    image: "/images/tour-types/corp-iconic-europe.jpg",
    alt: "The old town of Bern inside a bend of the river",
    why: "Stronger reward value for top-tier incentive programmes",
  },
];

const considerations = [
  {
    term: "Group size flexibility",
    detail:
      "Confirming venue and activity capacity that genuinely accommodates your group size, not just a generic package.",
  },
  {
    term: "Dietary and accessibility needs",
    detail: "Managing varied requirements across a larger group of travellers.",
  },
  {
    term: "Structured team activities",
    detail:
      "Coordinating team-building exercises or structured programme elements alongside leisure time.",
  },
  {
    term: "Approval and documentation timelines",
    detail:
      "Corporate bookings often require internal sign-off processes, which affects planning timelines compared to individual travel.",
  },
  {
    term: "Budget tiering",
    detail:
      "Structuring packages across different budget levels if the trip includes multiple seniority tiers or reward categories.",
  },
];

const quoteProcess = [
  {
    step: "Initial enquiry",
    what: "Share your group size, destination interest, budget range, and trip purpose",
  },
  {
    step: "Consultation",
    what: "A dedicated consultant discusses objectives and constraints in detail",
  },
  {
    step: "Formal proposal",
    what: "Receive an itemised quotation suitable for internal approval",
  },
  {
    step: "Refinement",
    what: "Adjust inclusions, activities, or budget tier based on internal feedback",
  },
  {
    step: "Confirmation & logistics",
    what:
      "Finalise booking with centralised coordination through a single point of contact",
  },
];

const hrQuestions = [
  {
    ask: "Can the itinerary include time for a business session or awards presentation?",
    answer:
      "Yes, most corporate itineraries can incorporate structured business elements alongside leisure time.",
  },
  {
    ask: "How do we handle participants with different dietary or accessibility needs across a large group?",
    answer:
      "This should be gathered upfront during the planning stage and factored into venue and activity selection.",
  },
  {
    ask: "What happens if a participant needs to cancel close to departure?",
    answer:
      "Discuss cancellation and contingency policies specifically with your consultant before finalising the group booking.",
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

function DefinitionRow({ term, detail }: { term: string; detail: string }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 border-b border-gray-200 py-6">
      <p className="sm:col-span-4 font-primary font-bold text-teal-navy text-[15px] leading-snug">
        {term}
      </p>
      <p className="sm:col-span-8 text-gray-600 text-[15px] leading-relaxed">{detail}</p>
    </div>
  );
}

export default function GroupIncentiveContent({
  faqs,
}: {
  /** Owned by the page so the same list drives the FAQPage markup. */
  faqs: { question: string; answer: string }[];
}) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <AllPagesHero
        image={PHOTO.hero}
        imageAlt={PHOTO.heroAlt}
        eyebrow="Corporate Travel"
        title="Group &amp; Incentive Travel"
        titleAccent="Corporate Packages That Reward and Build Teams"
        intro="Incentive travel has been proven to be among the best ways through which firms can reward their top employees, develop company culture, and celebrate important company milestones, and organizing a successful incentive trip entails much more than just organizing an ordinary leisure vacation. This section highlights everything there is to know about corporate groups and incentive travel and how a travel partner helps with the same."
        actions={[{ label: "Request a Formal Quote", href: "/contact" }]}
      />

      {/* ── THE CONTRAST ──────────────────────────────────────────────────
          Two facing columns: the same trip, planned two different ways. */}
      <Section
        label="The Difference"
        heading="What Sets Corporate Group Travel Apart"
        className="bg-white"
      >
        <div className="border-t-2 border-teal-navy">
          <div className="hidden sm:grid sm:grid-cols-2 gap-8 py-4 border-b border-gray-200">
            <p className="font-primary font-bold text-gray-400 text-xs uppercase tracking-widest">
              Standard leisure travel
            </p>
            <p className="font-primary font-bold text-primary text-xs uppercase tracking-widest">
              Corporate group &amp; incentive travel
            </p>
          </div>
          {contrast.map((row) => (
            <div
              key={row.corporate}
              className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-8 border-b border-gray-200 py-6"
            >
              <p className="text-gray-400 text-[15px] leading-relaxed sm:pr-6">
                <span className="sm:hidden block text-xs uppercase tracking-widest font-semibold mb-1">
                  Standard
                </span>
                {row.leisure}
              </p>
              <p className="text-gray-700 text-[15px] leading-relaxed sm:border-l-2 sm:border-primary sm:pl-8">
                <span className="sm:hidden block text-xs uppercase tracking-widest font-semibold text-primary mb-1">
                  Corporate
                </span>
                {row.corporate}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── TRIP TYPES ────────────────────────────────────────────────────── */}
      <Section
        label="Trip Types"
        heading="Common Types of Corporate Group Travel"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tripTypes.map((row) => (
            <div key={row.type} className="flex h-full flex-col">
              <div className="relative h-48 w-full overflow-hidden rounded-2xl mb-5">
                <Image
                  src={row.image}
                  alt={row.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                {row.type}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{row.purpose}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── WHAT CLIENTS NEED ─────────────────────────────────────────────── */}
      <Section
        label="Requirements"
        heading="What Corporate Clients Typically Need From a Travel Partner"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7 border-t-2 border-teal-navy">
            {clientNeeds.map((row) => (
              <DefinitionRow key={row.term} term={row.term} detail={row.detail} />
            ))}
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-[430px] overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.venue}
              alt={PHOTO.venueAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── DESTINATIONS ──────────────────────────────────────────────────── */}
      <Section
        label="Where To Go"
        heading="Destinations Popular for Corporate Group Travel"
        className="bg-teal-light/40"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinationTypes.map((row) => (
            <div key={row.type} className="flex h-full flex-col">
              <div className="relative h-52 w-full overflow-hidden rounded-2xl mb-5">
                <Image
                  src={row.image}
                  alt={row.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                {row.type}
              </h3>
              <p className="mt-auto text-gray-600 text-[15px] leading-relaxed">{row.why}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── PLANNING CONSIDERATIONS ───────────────────────────────────────── */}
      <Section
        label="Planning"
        heading="Planning Considerations Specific to Group Travel"
        className="bg-white"
      >
        <div className="border-t-2 border-teal-navy max-w-4xl">
          {considerations.map((row) => (
            <DefinitionRow key={row.term} term={row.term} detail={row.detail} />
          ))}
        </div>
      </Section>

      {/* ── THE QUOTE PROCESS ─────────────────────────────────────────────
          The one real sequence on the page, so the one thing numbered. */}
      <section className="py-12 lg:py-12 lg:py-16 bg-teal-navy">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={fadeUp}
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-white/70 font-semibold text-sm uppercase tracking-widest font-primary">
                The Process
              </span>
            </div>
            <h2 className="font-primary font-bold text-white text-2xl md:text-3xl leading-tight mb-8 max-w-3xl">
              The Request-a-Quote Process for Corporate Clients
            </h2>

            <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
              {quoteProcess.map((row, i) => (
                <li key={row.step} className="border-t border-white/20 pt-5">
                  <span className="font-primary font-bold text-primary text-sm tracking-widest">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-primary font-bold text-white text-base leading-snug mt-2 mb-2">
                    {row.step}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">{row.what}</p>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </section>

      {/* ── WHY AN ESTABLISHED AGENCY ─────────────────────────────────────── */}
      <Section
        label="Accountability"
        heading="Why Companies Choose an Established Agency for Corporate Travel"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <p className="lg:col-span-7 text-gray-600 leading-relaxed">
            There is greater responsibility involved when dealing with corporate and incentive
            travel than there is when arranging individual vacations after all, not only the
            internal clients, but also the budget holders and even big groups of employees are
            counting on you to arrange everything properly. Using an officially recognized
            travel agency instead of an independent one means using their skills, experience,
            and accountability when needed.
          </p>
          <div className="lg:col-span-5 border-l-2 border-primary pl-8">
            <p className="text-gray-400 text-xs uppercase tracking-[0.18em] font-semibold mb-3">
              Our philosophy
            </p>
            <p className="font-secondary text-teal-navy text-3xl leading-snug">
              &ldquo;We aim to offer our customers the widest range of travel services at
              highly competitive prices.&rdquo;
            </p>
          </div>
        </div>
      </Section>

      {/* ── MEASURING SUCCESS ─────────────────────────────────────────────── */}
      <Section
        label="Results"
        heading="Measuring Success for Incentive Travel Programmes"
        className="bg-teal-light/40"
      >
        <p className="text-gray-600 leading-relaxed max-w-3xl">
          A company spending money on travel incentives usually expects to receive more from
          their investment than just the satisfaction of &ldquo;the trip went ahead.&rdquo;
          The proper incentives program may involve the collection of feedback, the
          explanation to the travelers about the purpose of the travel (recognition,
          motivation, cohesion), and in some cases the clear indication of what performance
          criteria need to be met before the travel.
        </p>
      </Section>

      {/* ── HR AND MANAGEMENT QUESTIONS ───────────────────────────────────── */}
      <Section
        label="From HR"
        heading="Common Questions From HR and Management Teams"
        className="bg-white"
      >
        <div className="space-y-8 max-w-4xl">
          {hrQuestions.map((row) => (
            <div key={row.ask}>
              <p className="font-primary font-bold text-teal-navy text-lg leading-snug mb-2">
                {row.ask}
              </p>
              <p className="text-gray-600 text-[15px] leading-relaxed">{row.answer}</p>
            </div>
          ))}
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
              src={PHOTO.band}
              alt={PHOTO.bandAlt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <FaqSection faqs={faqs} heading="Frequently Asked Questions" />

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <CtaSection
        heading="Request a Corporate Group Travel Quote"
        body="Whether it&rsquo;s a reward trip, retreat, or milestone celebration, a dedicated consultant can manage the full logistics for your team. Request a free, formal quote today."
        actions={[{ label: "Request a Formal Quote", href: "/contact" }]}
      />
    </>
  );
}
