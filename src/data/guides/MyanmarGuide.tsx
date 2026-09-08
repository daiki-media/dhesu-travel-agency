"use client";

import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, Section } from "./primitives";

/**
 * Body copy is taken verbatim from
 * content-document/destinations-in-asia/Myanmar Tour Packages From
 * Malaysia_ Bagan's Temples & Cultural Heritage.docx — the draft's own
 * order, headings and wording. The opening paragraph is not repeated here;
 * it is the hero lead, set as `intro` on
 * src/data/destinationDetail/myanmar.ts.
 *
 * Shape follows BaliGuide.tsx in this folder: same section devices, same type
 * sizes, same spacing. Myanmar has no packages on the site yet, so no
 * prices, durations or package names are invented beyond what the draft
 * itself gives.
 */

// No in-article photograph. The asset library has no second photograph of
// this destination at a usable size, and a stand-in from somewhere else
// would misrepresent the page, so the section runs without one.


const baganExperiences = [
  "Sunrise or sunset viewpoints overlooking the temple plain",
  "Horse cart or e-bike tours between individual temple sites",
  "Hot air balloon rides over the temple landscape (seasonal, weather-dependent)",
  "Visits to specific major temples, such as Ananda Temple and Shwezigon Pagoda",
];

const itineraries = [
  {
    focus: "Bagan only",
    duration: "3–4 days",
    suits: "Travellers primarily interested in the temple landscape with limited time",
  },
  {
    focus: "Yangon + Bagan",
    duration: "5–6 days",
    suits:
      "A well-rounded cultural introduction combining Myanmar's largest city with its most iconic temples",
  },
  {
    focus: "Yangon + Bagan + Inle Lake",
    duration: "7–8 days",
    suits: "A comprehensive itinerary covering Myanmar's major cultural and scenic highlights",
  },
];

const included = [
  "Domestic transport between destinations (often domestic flights, given distances between regions)",
  "Accommodation matched to your selected package tier",
  "Entrance fees to major temple sites and pagodas",
  "Guided sightseeing with local knowledge of Myanmar's Buddhist heritage and history",
  "A structured itinerary respecting appropriate pacing for temple exploration",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("myanmar", "myanmar-tour-travel-guide-2026");



export default function MyanmarGuide() {
  return (
    <>
      <Section label="Bagan" heading="Bagan: a temple landscape like nowhere else">
        <p className="text-gray-600 leading-relaxed mb-6">
          In comparison with other sites in South East Asia, this site is quite different from
          others as it contains an extremely big flat plane with ancient temples and pagodas
          constructed in the period of 9th-13th centuries. In other temple sites, everything is
          concentrated in a small area; however, here it is located on a very big plane. This
          is what makes this place unique, especially during sunrise and sunset.
        </p>
        <p className="font-primary font-bold text-teal-navy text-lg leading-snug mb-4">
          Popular ways to experience Bagan
        </p>
        <ul className="space-y-4">
          {baganExperiences.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Yangon" heading="Yangon: Myanmar's cultural and commercial hub">
        <p className="text-gray-600 leading-relaxed">
          For most tour packages in Myanmar, the first stop is always in Yangon, which is the
          biggest city in the country and also its former capital. There is a famous stupa
          there called the Shwedagon Pagoda that is one of the most important Buddhist sites in
          Myanmar. Another interesting thing about Yangon is its colonial architecture.
        </p>
      </Section>

      <Section label="Inle Lake" heading="Inle Lake: a distinctive way of life">
        <p className="text-gray-600 leading-relaxed">
          For travellers with more time, Inle Lake offers a genuinely unique cultural
          experience centred on the lake&rsquo;s distinctive stilt-house villages and
          traditional leg-rowing fishing technique, practised by the local Intha people.
          Floating gardens, local handicraft workshops, and a markedly different pace from
          Bagan and Yangon make Inle Lake a worthwhile addition for travellers wanting a fuller
          picture of Myanmar&rsquo;s regional diversity.
        </p>
      </Section>

      <Section label="Suggested Routes" heading="Suggested itinerary combinations">
        <DataTable
          headers={["Package focus", "Typical duration", "Best suited for"]}
          widths={["w-1/4", undefined, undefined]}
          rows={itineraries.map((row) => [row.focus, row.duration, row.suits])}
        />
      </Section>

      <Section label="Inclusions" heading="What's typically included in a Myanmar package">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Good to Know" heading="Practical considerations before booking">
        <p className="text-gray-600 leading-relaxed">
          The travel scenario in Myanmar, such as visa restrictions, entry rules, and regional
          accessibilities, has undergone much more change over the past few years compared to
          many of its neighboring destinations. It is especially crucial to verify information
          regarding the travel alerts, visa requirements for Malaysian citizens, and regional
          accessibilities before planning your visit to Myanmar, as circumstances may be quite
          different from what one might have expected based on past experience.
        </p>
      </Section>

      <Section label="When to Go" heading="Best time to visit Myanmar">
        <p className="text-gray-600 leading-relaxed">
          Myanmar&rsquo;s dry season, roughly November through February, generally offers the
          most comfortable conditions for temple exploration and sightseeing, avoiding both the
          intense pre-monsoon heat and the heavier rains of the wet season. This period also
          tends to align with the most reliable conditions for hot air balloon flights over
          Bagan, for travellers interested in that specific experience.
        </p>
      </Section>

      <Section label="Etiquette" heading="Myanmar's distinctive cultural etiquette">
        <p className="text-gray-600 leading-relaxed">
          Myanmar&rsquo;s Buddhist culture dictates certain etiquette which needs to be known
          before you embark on your tour there, such as the fact that you need to remove both
          shoes and socks (not only shoes) when entering temples, and dress modestly within all
          religious locations. Photographing monks and any other ceremonies requires some tact,
          and in most cases, it is best if you have the permission of those photographed. This
          can normally be done by a guide.
        </p>
      </Section>

      <Section label="Food" heading="Myanmar's cuisine and local life">
        <p className="text-gray-600 leading-relaxed">
          Myanmar&rsquo;s food culture reflects its position between India, China, and
          Southeast Asia, resulting in a distinctive cuisine that&rsquo;s less internationally
          known than its neighbours&rsquo; but genuinely worth exploring. Tea leaf salad
          (lahpet thoke), a fermented tea leaf dish unique to Myanmar, and mohinga, a
          fish-based noodle soup often considered the country&rsquo;s unofficial national dish,
          are worth seeking out as part of a well-rounded cultural itinerary alongside the
          temple sightseeing that typically headlines most trips.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Plan your Myanmar cultural journey"
        body="From Bagan&rsquo;s ancient temple plain to Yangon&rsquo;s golden pagodas, a consultant can help you plan a meaningful Myanmar itinerary. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact-us" }]}
      />
    </>
  );
}
