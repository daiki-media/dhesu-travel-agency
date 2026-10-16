"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import AllPagesHero from "@/src/components/AllPagesHero";
import CtaSection from "@/src/components/CtaSection";
import LinkedFaqSection from "@/src/components/LinkedFaqSection";
import type { LinkedFaq } from "@/src/data/linkedFaq";
import { DataTable } from "@/src/data/guides/primitives";

const PHOTO = {
  hero: "/images/tour-types/mosque-night-istanbul.jpg",
  heroAlt: "A large mosque lit up at dusk above the water in Istanbul",
  practice: "/images/tour-types/mosque-interior-blue.jpg",
  practiceAlt: "The tiled interior and prayer carpet of an Ottoman mosque",
  destinations: "/images/tour-types/mf-indonesia.jpg",
  destinationsAlt: "The stupas of Borobudur at first light, Java",
  prayer: "/images/tour-types/abu-dhabi-grand-mosque.jpg",
  prayerAlt: "The white domes of Sheikh Zayed Grand Mosque in Abu Dhabi",
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const INLINE_LINK =
  "font-semibold text-teal-navy underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors";

const BODY = "text-gray-600 text-[15px] leading-relaxed";

const L = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <Link href={href} className={INLINE_LINK}>
    {children}
  </Link>
);

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

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className="text-gray-600 text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

const checklist = [
  "Which meals are included, and which are halal-certified or Muslim-owned?",
  "Is hotel breakfast prepared in a halal kitchen?",
  "Where will we pray on long drives and at airports?",
  "How is Friday planned?",
  "Can the hotel provide a Qibla direction and, if needed, remove alcohol from the minibar?",
  "What is the plan if a halal restaurant is closed or unavailable?",
  "Does my insurance meet my needs, including takaful?",
  "Who do I call during the trip if something goes wrong?",
];

export default function MuslimFriendlyContent({ faqs }: { faqs: LinkedFaq[] }) {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <AllPagesHero
        image={PHOTO.hero}
        imageAlt={PHOTO.heroAlt}
        eyebrow="Tour Types"
        title="Muslim-Friendly Tour Packages from Malaysia: "
        titleAccent="Halal Food, Prayer Facilities and Itineraries"
        intro={
          <>
            A good Muslim-friendly holiday is more than a nice hotel and a good view. You need to
            know where you&rsquo;ll eat on day three, where you&rsquo;ll pray on a long drive, and
            whether Friday has been planned around Jumu&rsquo;ah. This guide explains how to judge
            a halal claim, which destinations suit Malaysian Muslims, and what to ask before you
            book. Dhesu is licensed by the Ministry of Tourism Malaysia (KKKP 1439) and has planned
            trips for Malaysians since 1988.
          </>
        }
        actions={[{ label: "Request a free quote", href: "/contact-us/" }]}
      />

      {/* ── WHAT IT MEANS ─────────────────────────────────────────────────── */}
      <Section
        label="In Practice"
        heading={"What “Muslim-Friendly” Means for Halal Food, Prayer and Itinerary Pacing"}
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <DataTable
              minWidth={480}
              widths={["w-1/4"]}
              headers={["Area", "What to look for"]}
              rows={[
                [
                  "Halal food",
                  "Certified restaurants where certification exists, and clear answers about hotel breakfast kitchens where it doesn’t",
                ],
                ["Prayer", "Mosque locations near major stops and realistic prayer buffers in the daily plan"],
                ["Pacing", "Long transfers broken up, with Friday planned around Jumu’ah"],
                ["Comfort", "Alcohol-free options and activities that suit your modesty preferences"],
              ]}
            />
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-[420px] overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.practice}
              alt={PHOTO.practiceAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── HALAL CERTIFICATION ───────────────────────────────────────────── */}
      <Section
        label="Halal Certification"
        heading="Halal Certification Abroad: How to Check a Halal Claim Before You Book"
        className="bg-teal-light/40"
      >
        <p className={`${BODY} max-w-3xl mb-8`}>
          &ldquo;Halal-friendly&rdquo; can mean anything from certified kitchens to &ldquo;no pork
          on the menu&rdquo;. Ask who certified it, whether the whole kitchen is certified or only
          some dishes, and what the backup option is along the route. Then check with the official
          body for that country:
        </p>
        <DataTable
          headers={["Country", "Who certifies halal", "What to know"]}
          rows={[
            ["Malaysia", "JAKIM and state religious authorities", "Verify certificates on JAKIM’s official halal portal"],
            ["Indonesia", "BPJPH, under the Ministry of Religious Affairs", "A national halal label has applied since 2022"],
            ["UAE", "Federal and emirate-level authorities", "Hotels commonly publish their halal status"],
            [
              "India",
              "No single national regulator",
              "Private certifiers operate, and many Muslim-owned restaurants are uncertified, so ask your guide to confirm",
            ],
            ["Sri Lanka and Nepal", "Limited or changing certification", "Rely on Muslim-owned restaurants and direct confirmation"],
          ]}
        />
        <p className={`${BODY} max-w-3xl mt-8`}>
          For comparing destinations, the Mastercard-CrescentRating Global Muslim Travel Index is
          the standard industry reference. It&rsquo;s a guide, not a guarantee for any single
          restaurant.
        </p>
      </Section>

      {/* ── DESTINATIONS ──────────────────────────────────────────────────── */}
      <Section
        label="Where It Works"
        heading="Muslim-Friendly Holiday Destinations from Malaysia"
        className="bg-white"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <ul className="space-y-4">
              <Bullet>
                <strong>Indonesia:</strong> halal food is the norm, and{" "}
                <L href="/tours/indonesia/bali/">Bali</L> offers resort comfort with plenty of
                choice.
              </Bullet>
              <Bullet>
                <strong>Nepal and Sri Lanka:</strong> Dhesu runs dedicated{" "}
                <L href="/tours/nepal/muslim-friendly/">Muslim-friendly tours in Nepal</L> and{" "}
                <L href="/tours/sri-lanka/muslim-friendly/">Sri Lanka</L>, with halal arrangements
                planned in advance.
              </Bullet>
              <Bullet>
                <strong>India:</strong> the <L href="/tours/india/golden-triangle/">Golden Triangle</L>{" "}
                includes a 5 day Muslim-friendly package.{" "}
                <L href="/tours/india/kashmir/">Kashmir</L> is a Muslim-majority region where halal
                food is widespread, and <L href="/tours/india/kerala/">Kerala</L> has a large Muslim
                community and Malabar-style cooking.
              </Bullet>
              <Bullet>
                <strong>Malaysian Borneo:</strong> the{" "}
                <L href="/tours/malaysia/">Sabah and Sarawak tours</L> keep halal and prayer
                planning simple.
              </Bullet>
            </ul>
            <p className={`${BODY} mt-8`}>
              <strong>Built to order:</strong> Turkey, Egypt, the UAE and parts of Europe are
              popular with Muslim travellers but have no fixed Dhesu packages yet. We plan them on
              request, and the UAE has the strongest halal and prayer infrastructure of the group.
              Send a <L href="/custom-itinerary-request/">custom itinerary request</L> with your
              dates and group size.
            </p>
          </div>
          <div className="lg:col-span-5 relative h-64 lg:h-[380px] overflow-hidden rounded-2xl">
            <Image
              src={PHOTO.destinations}
              alt={PHOTO.destinationsAlt}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
          </div>
        </div>
      </Section>

      {/* ── PRAYER ────────────────────────────────────────────────────────── */}
      <Section
        label="Prayer Times"
        heading="Prayer Facilities and Prayer Time Planning During Your Tour"
        className="bg-teal-light/40"
      >
        <ul className="space-y-4 max-w-3xl">
          <Bullet>
            <strong>Daily rhythm:</strong> your guide should know the nearest mosque or prayer space
            for each stop, and the day should allow time to pray without rushing.
          </Bullet>
          <Bullet>
            <strong>Fridays:</strong> plan lighter sightseeing around Jumu&rsquo;ah where possible.
          </Bullet>
          <Bullet>
            <strong>Airports and transfers:</strong> many large airports have prayer rooms, but
            facilities vary. Carry a travel prayer mat and a Qibla app.
          </Bullet>
          <Bullet>
            <strong>Combining or shortening prayers:</strong> follow your own scholar&rsquo;s
            guidance and tell your guide the timings you need.
          </Bullet>
        </ul>
        <p className={`${BODY} max-w-3xl mt-8 mb-6`}>
          An example of how a prayer-friendly sightseeing day can be shaped (timings vary by season
          and city):
        </p>
        <DataTable
          minWidth={480}
          widths={["w-1/4"]}
          headers={["Part of the day", "How it’s planned"]}
          rows={[
            ["Before departure", "Subuh at the hotel, then breakfast"],
            ["Morning", "Main sightseeing, with a buffer before Zuhur"],
            ["Lunch", "Halal lunch near a mosque or prayer space, with Zuhur and, if you choose, Asar"],
            ["Afternoon", "Lighter activities, shopping or a scenic drive"],
            ["Evening", "Maghrib and Isyak at the hotel, then dinner"],
          ]}
        />
      </Section>

      {/* ── HALAL FOOD ABROAD ─────────────────────────────────────────────── */}
      <Section
        label="Halal Food"
        heading="Halal Food Abroad: Hidden Ingredients, Airline Meals and Hotel Breakfast"
        className="bg-white"
      >
        <ul className="space-y-4 max-w-3xl">
          <Bullet>
            <strong>Hidden ingredients:</strong> ask about stocks, sauces, desserts and gelatin,
            especially in countries where pork or alcohol is used in cooking. This is a common issue
            in Europe.
          </Bullet>
          <Bullet>
            <strong>Airline meals:</strong> request a Muslim meal when you book, or well before
            departure, because airlines need advance notice.
          </Bullet>
          <Bullet>
            <strong>Hotel breakfast:</strong> ask whether it comes from a halal-certified kitchen, or
            only that pork is not served. In non-Muslim countries the safest fallback is vegetarian
            or seafood options.
          </Bullet>
          <Bullet>
            <strong>Packed snacks:</strong> carry halal snacks for long transfers and early starts.
          </Bullet>
          <Bullet>
            <strong>Cross-contamination:</strong> if a restaurant serves both halal and non-halal
            food, ask how the kitchen separates them.
          </Bullet>
        </ul>
      </Section>

      {/* ── MODEST DRESS ──────────────────────────────────────────────────── */}
      <Section
        label="Modest Dress"
        heading="Modest Dress and Women Travellers on Muslim-Friendly Tours"
        className="bg-teal-light/40"
      >
        <ul className="space-y-4 max-w-3xl">
          <Bullet>
            <strong>Mosques and temples:</strong> cover hair, shoulders and knees where required, and
            carry a scarf. Many non-Muslim temples also require covered shoulders and knees.
          </Bullet>
          <Bullet>
            <strong>Beach resorts:</strong> places like Bali have mixed beaches, so modest swimwear
            such as a burkini keeps you comfortable.
          </Bullet>
          <Bullet>
            <strong>Hijab-friendly travel:</strong> pack breathable fabrics for hot cities, and
            warmer layers for the hills.
          </Bullet>
          <Bullet>
            <strong>Group comfort:</strong> tell us beforehand if you&rsquo;d prefer female-friendly
            arrangements, such as room layout or seating, so they can be discussed in advance.
          </Bullet>
        </ul>
      </Section>

      {/* ── FAMILIES ──────────────────────────────────────────────────────── */}
      <Section
        label="Families"
        heading="Travelling With Elderly Parents and Children on a Muslim-Friendly Holiday"
        className="bg-white"
      >
        <ul className="space-y-4 max-w-3xl">
          <Bullet>
            <strong>Pace:</strong> choose slower routes with fewer hotel changes, such as{" "}
            <L href="/tours/india/kerala/">Kerala&rsquo;s backwaters and hill stations</L>.
          </Bullet>
          <Bullet>
            <strong>Prayer comfort:</strong> seniors may need chairs for prayer and shorter walks
            between stops, so mention this at booking.
          </Bullet>
          <Bullet>
            <strong>Meals:</strong> children and older travellers often need predictable halal
            meals, so plan these first.
          </Bullet>
          <Bullet>
            <strong>Larger families:</strong> a private vehicle and guide let everyone keep to the
            same schedule. For multi-generation trips, our{" "}
            <L href="/group-incentive-travel-packages/">group travel packages</L> can be planned
            around one group.
          </Bullet>
        </ul>
      </Section>

      {/* ── TAKAFUL ───────────────────────────────────────────────────────── */}
      <Section
        label="Insurance"
        heading="Takaful Travel Insurance for Muslim Travellers"
        className="bg-teal-light/40"
      >
        <p className={`${BODY} max-w-3xl`}>
          Many Malaysian providers offer takaful-based travel cover as an alternative to
          conventional insurance. If this matters to you, check the policy type before you buy,
          because insurance is not included in most packages. Tell the team what you need when you
          book.
        </p>
      </Section>

      {/* ── DATES ─────────────────────────────────────────────────────────── */}
      <Section
        label="Key Dates"
        heading="Hari Raya, Ramadan and School Holiday Dates for Muslim-Friendly Travel"
        className="bg-white"
      >
        <p className={`${BODY} max-w-3xl mb-8`}>
          These 2027 dates are astronomical estimates and will be confirmed by the official moon
          sighting.
        </p>
        <DataTable
          headers={["Period", "Expected timing", "Planning note"]}
          rows={[
            ["Ramadan", "From around 8 February 2027", "Many Muslim travellers avoid long trips"],
            [
              "Hari Raya Aidilfitri",
              "Around 10 March 2027",
              <>
                A very busy window, so book early. See the{" "}
                <L href="/raya-holiday-travel-deals-2026/">Raya holiday packages</L>
              </>,
            ],
            ["Hari Raya Aidiladha", "Around 17 May 2027", "A shorter break, popular for city and beach trips"],
            [
              "School holidays",
              "Varies by year",
              <>
                Families can check the{" "}
                <L href="/school-holiday-travel-deals-2026/">school holiday travel deals</L>
              </>,
            ],
          ]}
        />
        <p className={`${BODY} max-w-3xl mt-8`}>
          Availability depends on the package and your dates. Send your preferred dates and group
          size through the <L href="/contact-us/">quote form</L> and the team will confirm
          what&rsquo;s available.
        </p>
      </Section>

      {/* ── CHECKLIST ─────────────────────────────────────────────────────── */}
      <Section
        label="Before Booking"
        heading="Checklist: What to Ask Before Booking a Muslim-Friendly Tour Package"
        className="bg-teal-light/40"
      >
        <ol className="space-y-4 max-w-3xl">
          {checklist.map((item, i) => (
            <li key={item} className="flex gap-4">
              <span className="font-primary font-bold text-primary text-[15px] w-6 shrink-0">
                {i + 1}.
              </span>
              <span className={BODY}>{item}</span>
            </li>
          ))}
        </ol>
      </Section>

      {/* ── PLATE BEFORE THE FAQ ──────────────────────────────────────────── */}
      <section className="py-12 lg:py-16 bg-white">
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
      <CtaSection
        heading="Plan Your Muslim-Friendly Holiday"
        body="Tell us where you’d like to go, your dates and who is travelling."
        actions={[
          { label: "Request a free quote", href: "/contact-us/" },
          { label: "WhatsApp us on +6019 336 4465", href: "https://wa.me/60193364465" },
        ]}
      />
    </>
  );
}
