"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { FaqAccordion } from "@/src/components/tours/TourPackageDetailTemplate";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import Button from "@/src/components/Button";

/**
 * Every string of copy is taken verbatim from
 * content-document/destinations-in-asia/Phuket & Krabi Holiday Packages_ The
 * Best of Southern Thailand's Islands.docx — the draft's own order, headings
 * and wording. The opening paragraph is not repeated here; it is the hero
 * lead, set as `intro` on the landing page entry in
 * src/data/destinationDetail/thailand.ts.
 *
 * Shape mirrors BaliGuide.tsx: same section devices, same type sizes, same
 * spacing.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/phuket-island-cove.jpg";
const PHOTO_ALT = "Longtail boats moored in a palm-fringed cove in the Andaman Sea";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const characterTable = [
  {
    destination: "Phuket",
    character: "Larger island, more developed, wider dining and nightlife options",
    bestFor: "Travellers wanting resort comforts and a livelier atmosphere",
  },
  {
    destination: "Krabi",
    character: "Dramatic limestone cliffs, quieter beaches, more relaxed pace",
    bestFor: "Travellers prioritising scenery, nature, and a slower rhythm",
  },
];

const whatToExpect = [
  {
    title: "What to Expect in Phuket",
    body: "There is a good blend of beach and urban facilities that Phuket provides. Patong Beach is still the most popular beach of the island when it comes to night-time enjoyment. However, there are also other quiet beaches like Kata and Karon that provide a more laid-back beach experience without being too distant from Phuket's facilities. There are also many islands near Phuket where tourists usually visit during their stay on the island.",
  },
  {
    title: "What to Expect in Krabi",
    body: "The natural landscape of Krabi consists of beautiful karsts of limestones rising up from the ocean, especially around Railay Beach, a beautiful peninsula that can be reached via boat since it is surrounded by cliffs which make road access impossible. Krabi is usually less developed compared to Phuket, as it is more suited for travelers interested in combining beach life with hiking and rock climbing.",
  },
];

const islandHopping = [
  "Phi Phi Islands - Dramatic cliffs, clear water, and Maya Bay's iconic scenery",
  "James Bond Island (Koh Tapu) - A striking limestone pillar made famous by the film franchise, located in Phang Nga Bay",
  "Railay Beach - Krabi's cliff-bound peninsula, accessible only by boat",
  "Emerald Pool and Tiger Cave Temple - Inland nature and cultural stops near Krabi town",
  "Panyee Village - A Muslim fishing village built on stilts over the water in Phang Nga Bay",
];

const itineraryStructure = [
  {
    days: "Days 1–2",
    focus: "Arrival and settling into Phuket; beach time and orientation",
  },
  {
    days: "Day 3",
    focus: "Island-hopping day trip (Phi Phi Islands or James Bond Island)",
  },
  { days: "Day 4", focus: "Transfer to Krabi by road or boat" },
  {
    days: "Days 5–6",
    focus: "Krabi exploration, including Railay Beach and inland attractions",
  },
  { days: "Day 7", focus: "Departure or extension" },
];

const included = [
  "Accommodation in both Phuket and Krabi, matched to your selected package tier",
  "Transfer between the two destinations",
  "Selected island-hopping day trips with boat transport",
  "Entrance fees to included attractions",
  "A structured itinerary that can be adjusted for pacing and specific inclusions",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("thailand", "phuket-krabi-holiday-guide-2026");

/** Section wrapper: label, heading, then the body. */
function Section({
  label,
  heading,
  children,
}: {
  label: string;
  heading: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={fadeUp}
    >
      <SectionLabel text={label} />
      <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl md:text-3xl leading-tight mb-6">
        {heading}
      </h2>
      {children}
    </motion.div>
  );
}

/** List item marked with a short rule rather than an icon tile. */
function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="mt-[0.7rem] h-px w-5 shrink-0 bg-primary" aria-hidden />
      <span className="text-gray-600 text-[15px] leading-relaxed">{children}</span>
    </li>
  );
}

export default function PhuketKrabiGuide() {
  return (
    <>
      <Section label="Why Combine" heading="Why combine Phuket and Krabi?">
        <p className="text-gray-600 leading-relaxed mb-6">
          While only separated by a relatively brief water or land journey, Phuket and
          Krabi have their own unique personality. As Thailand&rsquo;s largest island,
          Phuket has more nightlife, shopping, and facilities, while Krabi is renowned for
          its stunning cliffs, calm beaches, and relaxed pace. Getting both islands in one
          vacation ensures that you experience the excitement of an island and also the
          tranquility of nature.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6 w-1/4">
                  Destination
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6">
                  Character
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3">
                  Best for
                </th>
              </tr>
            </thead>
            <tbody>
              {characterTable.map((row) => (
                <tr key={row.destination} className="border-b border-gray-200">
                  <td className="py-5 pr-6 font-primary font-bold text-[#1a1a1a] text-[15px] align-top">
                    {row.destination}
                  </td>
                  <td className="py-5 pr-6 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.character}
                  </td>
                  <td className="py-5 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section label="By Island" heading="What to expect on each island">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
          {whatToExpect.map((item) => (
            <div key={item.title}>
              <span className="block h-[2px] w-10 bg-primary mb-4" aria-hidden />
              <h3 className="font-primary font-bold text-teal-navy text-lg leading-snug mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[15px] leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="relative h-64 md:h-80 overflow-hidden rounded-2xl"
      >
        <Image
          src={PHOTO}
          alt={PHOTO_ALT}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 66vw"
        />
      </motion.div>

      <Section label="Island-Hopping" heading="Island-hopping highlights worth including">
        <p className="text-gray-600 leading-relaxed mb-6">
          A combined Phuket-Krabi itinerary typically includes access to some of the
          region&rsquo;s most photographed natural attractions, often via longtail boat or
          speedboat day trips:
        </p>
        <ul className="space-y-4">
          {islandHopping.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Itinerary" heading="Suggested itinerary structure">
        <div className="border-t-2 border-teal-navy">
          {itineraryStructure.map((row) => (
            <div
              key={row.days}
              className="grid grid-cols-1 sm:grid-cols-12 gap-1 sm:gap-8 border-b border-gray-200 py-5"
            >
              <p className="sm:col-span-3 font-primary font-bold text-[#1a1a1a] text-[15px]">
                {row.days}
              </p>
              <p className="sm:col-span-9 text-gray-600 text-[15px] leading-relaxed">
                {row.focus}
              </p>
            </div>
          ))}
        </div>
        <p className="text-gray-600 leading-relaxed mt-6">
          This structure can be adjusted based on your total trip length, with shorter
          versions focusing on just one destination plus a single island-hopping day, and
          longer versions allowing more relaxed time in both locations.
        </p>
      </Section>

      <Section label="When to Go" heading="Best time to visit Phuket and Krabi">
        <p className="text-gray-600 leading-relaxed">
          The islands in Southern Thailand usually have both a dry season and a wet
          season. The best time for enjoying activities on the beaches or going from one
          island to another by boat is the dry season which normally lasts from November
          to April, because the wet season brings more rainfall and more rough waters,
          especially in the case of traveling to distant islands.
        </p>
      </Section>

      <Section label="Inclusions" heading="What's typically included">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Choosing" heading="Choosing between Phuket-only, Krabi-only, or combined">
        <p className="text-gray-600 leading-relaxed">
          For those who want their holiday to include nightlife and shopping, along with
          more choices for eating out and staying at resorts, then a Phuket-only holiday
          might be for you. However, if natural beauty and tranquility are the key things
          that you are looking for, then the Krabi-focused holiday can be done separately.
          But for most people visiting for the first time, an ideal way would be to combine
          both holidays.
        </p>
      </Section>

      <Section label="Food" heading="Food and local experiences beyond the beaches">
        <p className="text-gray-600 leading-relaxed">
          However, it&rsquo;s not just the landscape that makes these islands of Southern
          Thailand worth visiting because the culinary side of Southern Thailand,
          especially seafood and curries with unique spices, differs from the Bangkok one,
          and the tourists can enjoy it while being there. Night markets on the Phuket
          Island as well as Krabi town are popular and easy ways to try local cuisine
          without paying lots of money, and it&rsquo;s common that travelers&rsquo;
          schedules have some free time for them.
        </p>
      </Section>

      <Section label="Practical Tips" heading="Practical considerations for beach and island travel">
        <p className="text-gray-600 leading-relaxed">
          There are a couple of practical issues that should be taken into account before
          arranging your Phuket Krabi boat trip. The fact is that island tours usually
          depend on weather conditions, and although tour operators are professionals in
          handling seasonal weather fluctuations, you may consider adding a bit of
          flexibility to your plans, as there will be no alternative date for an
          absolutely crucial day in case you miss it. Also, sun protection is very
          important in this area because of the strong equatorial sun and reef safe
          sunblock is strongly recommended.
        </p>
      </Section>

      <Section label="Questions" heading="Frequently asked questions">
        <FaqAccordion items={faqs} />
      </Section>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={fadeUp}
        className="border-l-2 border-primary pl-8"
      >
        <h2 className="font-primary font-bold text-[#1a1a1a] text-2xl leading-tight mb-3">
          Plan your Southern Thailand island-hopping trip
        </h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Combine the best of Phuket and Krabi in one seamlessly planned holiday. Request
          a free, personalised quote today.
        </p>
        <Link href="/contact">
          <Button variant="light" showArrow size="lg">
            Request a Free Quote
          </Button>
        </Link>
      </motion.div>
    </>
  );
}
