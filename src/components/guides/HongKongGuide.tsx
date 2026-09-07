"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";

/**
 * Body copy is taken verbatim from
 * content-document/destinations-in-asia/Hong Kong Tour Packages From
 * Malaysia_ Disneyland, Family Fun & Shopping.docx — the draft's own order,
 * headings and wording. The opening paragraph is not repeated here; it is
 * the hero lead, set as `intro` on src/data/destinationDetail/hong-kong.ts.
 *
 * Shape follows BaliGuide.tsx in this folder: same section devices, same type
 * sizes, same spacing. Hong Kong has no packages on the site yet, so no
 * prices, durations or package names are invented beyond what the draft
 * itself gives.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/avenue-of-stars.jpg";
const PHOTO_ALT = "The Bruce Lee statue on the Avenue of Stars, Tsim Sha Tsui";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const shoppingDistricts = [
  "Causeway Bay and Tsim Sha Tsui — Major shopping malls and international brand retail",
  "Mong Kok — Bustling street markets, including the famous Ladies' Market, for a more local, budget-friendly shopping experience",
  "Stanley Market — A more relaxed, waterside market experience, popular for souvenirs and local crafts",
];

const beyondHighlights = [
  "Victoria Peak — Panoramic skyline views via tram, one of the city's most iconic experiences",
  "Star Ferry — A short, scenic harbour crossing between Hong Kong Island and Kowloon",
  "Temple Street Night Market — Street food, fortune tellers, and a lively evening atmosphere",
  "Ngong Ping 360 and the Big Buddha — A cable car journey to Lantau Island's giant seated Buddha statue",
];

const itineraryDays = [
  { day: "Day 1", focus: "Arrival, settling in, evening at Temple Street Night Market" },
  { day: "Day 2", focus: "Hong Kong Disneyland (full day)" },
  { day: "Day 3", focus: "Victoria Peak, Star Ferry, and Hong Kong Island sightseeing" },
  { day: "Day 4", focus: "Shopping day across Causeway Bay, Mong Kok, or Tsim Sha Tsui" },
  { day: "Day 5", focus: "Ngong Ping 360 and Big Buddha (or departure)" },
];

const included = [
  "Accommodation matched to your selected package tier, often centrally located near key attractions and transport links",
  "Theme park tickets were included (Hong Kong Disneyland or similar attractions)",
  "Airport transfers",
  "A structured itinerary that can be adjusted for shopping time, additional attractions, or pacing preferences",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("hong-kong", "hong-kong-tour-travel-guide-2026");

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

export default function HongKongGuide() {
  return (
    <>
      <Section label="Why Hong Kong" heading="Why Hong Kong works so well for short getaways">
        <p className="text-gray-600 leading-relaxed">
          Unlike places which would require you to travel long distances to make it worth your
          while, Hong Kong&rsquo;s small size and efficient transportation system makes it
          possible for travelers to actually enjoy their vacation by going to theme parks,
          doing some shopping, eating, and enjoying the view from the top of buildings, all in
          a short span of 4 or 5 days.
        </p>
      </Section>

      <Section label="Disneyland" heading="Hong Kong Disneyland: the family favourite">
        <p className="text-gray-600 leading-relaxed">
          For the family tourist group, Hong Kong Disneyland serves as the highlight of their
          travel plan. This is because Hong Kong Disneyland is one of the smaller Disney parks
          in the world; hence, it can be covered in just one day without tiring the family.
          Most travel plans incorporate a day at Disneyland with other activities as well.
        </p>
      </Section>

      <Section label="Shopping" heading="Shopping districts worth knowing">
        <p className="text-gray-600 leading-relaxed mb-6">
          Hong Kong&rsquo;s reputation as a shopping destination is well earned, with distinct
          districts offering different experiences:
        </p>
        <ul className="space-y-4">
          {shoppingDistricts.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
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

      <Section label="Beyond the Highlights" heading="Beyond Disneyland and shopping">
        <p className="text-gray-600 leading-relaxed mb-6">
          While theme parks and shopping headline most itineraries, Hong Kong offers meaningful
          additional experiences worth including:
        </p>
        <ul className="space-y-4">
          {beyondHighlights.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Suggested Route" heading="Suggested itinerary structure">
        <div className="overflow-x-auto mb-6">
          <table className="w-full min-w-[480px] border-collapse text-left">
            <thead>
              <tr className="border-b-2 border-teal-navy">
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3 pr-6 w-1/4">
                  Days
                </th>
                <th className="font-primary font-bold text-teal-navy text-xs uppercase tracking-widest pb-3">
                  Focus
                </th>
              </tr>
            </thead>
            <tbody>
              {itineraryDays.map((row) => (
                <tr key={row.day} className="border-b border-gray-200">
                  <td className="py-5 pr-6 font-primary font-bold text-[#1a1a1a] text-[15px] align-top">
                    {row.day}
                  </td>
                  <td className="py-5 text-gray-600 text-[15px] leading-relaxed align-top">
                    {row.focus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-gray-600 leading-relaxed">
          This structure works well for a standard 4 to 5 day trip and can be adjusted to
          prioritise more shopping time, an additional theme park day, or a more relaxed
          overall pace depending on your group&rsquo;s preferences.
        </p>
      </Section>

      <Section label="Inclusions" heading="What's typically included in a Hong Kong package">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="When to Go" heading="Best time to visit Hong Kong">
        <p className="text-gray-600 leading-relaxed">
          Hong Kong is a year-round destination, though autumn (October to December) generally
          offers the most comfortable weather, avoiding both summer&rsquo;s heat and humidity
          and the occasional typhoon risk during peak summer months. Winter can bring cooler
          temperatures, which some travellers find a pleasant change from Malaysia&rsquo;s
          consistent tropical climate.
        </p>
      </Section>

      <Section label="Families" heading="Is Hong Kong good for families with young children?">
        <p className="text-gray-600 leading-relaxed">
          Yes, Hong Kong is widely considered one of the more manageable international
          destinations for family travel with young children, thanks to its compact size,
          efficient public transport, and the relatively contained scale of Hong Kong
          Disneyland compared to larger theme park destinations. The city&rsquo;s overall
          walkability and safety also make it a comfortable choice for parents travelling with
          children for the first time internationally.
        </p>
      </Section>

      <Section label="Food" heading="Hong Kong's food scene deserves its own focus">
        <p className="text-gray-600 leading-relaxed">
          Hong Kong&rsquo;s culinary reputation is genuinely world-class, spanning everything
          from Michelin-starred fine dining to unpretentious local dai pai gong street stalls.
          Dim sum remains an essential experience for most visitors, traditionally enjoyed over
          a leisurely breakfast or lunch, while the city&rsquo;s night markets offer a more
          casual, budget-friendly way to sample local specialties like egg waffles and fish
          balls. Given how central food is to Hong Kong&rsquo;s identity, many itineraries are
          built in unstructured time specifically for exploring neighbourhood eateries, rather
          than filling every meal with pre-planned restaurant bookings.
        </p>
      </Section>

      <Section label="Getting Around" heading="Getting around Hong Kong">
        <p className="text-gray-600 leading-relaxed">
          One of Hong Kong&rsquo;s understated strengths as a travel destination is its
          exceptionally efficient public transport network, particularly the MTR subway
          system, which makes independent exploration between structured itinerary days
          genuinely easy even for first-time visitors. This efficiency is part of why Hong Kong
          works so well as a manageable short getaway — travellers spend comparatively little
          time on transport logistics relative to the amount of sightseeing and experience
          packed into a short trip.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Plan your Hong Kong getaway"
        body="From Disneyland magic to skyline views to bustling markets, a consultant can help you plan the perfect short Hong Kong trip. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
