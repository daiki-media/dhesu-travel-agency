"use client";

import Link from "next/link";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, Section } from "./primitives";

/**
 * Every string of copy is taken verbatim from
 * content-document/destinations-in-asia/India Tour Packages From Malaysia_
 * Taj Mahal, Kerala, Kashmir & Beyond.docx — the draft's own order, headings
 * and wording. The opening paragraph is not repeated here; it is the hero
 * lead, set as `intro` on the landing page entry in
 * src/data/destinationDetail/india.ts.
 *
 * Shape mirrors BaliGuide.tsx: same section devices, same type sizes, same
 * spacing.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/hawa-mahal.jpg";
const PHOTO_ALT = "The honeycomb facade of Hawa Mahal in Jaipur, Rajasthan";


const regionalItineraries = [
  {
    region: "Taj Mahal & Golden Triangle",
    destinations: "Delhi, Agra, Jaipur",
    knownFor: "India's most iconic monument, royal Rajasthan heritage",
  },
  {
    region: "Kerala",
    destinations: "Backwaters, Munnar, Thekkady",
    knownFor: "Houseboat stays, tea plantations, “God's Own Country”",
  },
  {
    region: "Kashmir",
    destinations: "Srinagar, Gulmarg, Pahalgam",
    knownFor: "Houseboats, cable car rides, Himalayan scenery",
  },
  {
    region: "Himachal Pradesh",
    destinations: "Shimla, Manali",
    knownFor: "Colonial hill stations, mountain views, cooler climate",
  },
  {
    region: "Varanasi & Spiritual India",
    destinations: "Varanasi, Prayagraj, Ayodhya",
    knownFor: "Ganga Aarti, sacred rivers, temple pilgrimage",
  },
  {
    region: "South India Temples",
    destinations: "Tirupati, Kanchipuram, Chennai",
    knownFor: "Ancient temple architecture and pilgrimage circuits",
  },
];

const regionDetails = [
  {
    title: "The Taj Mahal & Golden Triangle Circuit",
    body: "This circuit is still among the most favored destinations for tourists to India for the first time. The Taj Mahal of Agra stands out as the finest Indo-Islamic structure, and this is owing to the rhythmic proportions of its solid and void spaces along with light and shadow. In combination with the historical landmarks of Delhi and the royal Rajasthani heritage of Jaipur, it provides a good introduction to Indian history and architecture in North India.",
  },
  {
    title: "Kashmir: Himalayan Scenery and Houseboat Stays",
    body: "Commonly known as the “Switzerland of India,” Kashmir is a place where the scenery differs greatly from that of the rest of India, having snowcapped mountains, lakes of alpine nature, and houseboats to stay at, on Dal Lake, Srinagar. Common tours also include cable cars through mountain scenery in Gulmarg, as well as gardens of the Mughal period.",
  },
  {
    title: "Himachal Pradesh: Shimla & Manali",
    body: "Those who desire to experience cool weather as well as the old-world charm of a colonial hill-station can enjoy themselves in Shimla and Manali. Shimla is the erstwhile summer capital of British India and boasts of colonial architecture and the scenic beauty of the mountains from its bustling Mall Road, whereas Manali lies on the banks of the Beas river.",
  },
  {
    title: "Varanasi and Spiritual India Journeys",
    body: "For people who want to have a trip that is more spiritual or a pilgrimage journey, Varanasi is the place from which some of the most spiritually charged itineraries in India originate. Tours usually include the enchanting Ganga Aarti ritual, a boat journey on the holy Ganges river, and trips to some well-known temples, and some of the itineraries even organise Pind Daan prayer for those who want to honor their dead family members. The extended itineraries may also take in Prayagraj, Ayodhya, or the temple itineraries of South India.",
  },
];

const choosingTable = [
  {
    priority: "Iconic architecture and a classic first-time itinerary",
    consider: "Delhi-Agra-Jaipur Golden Triangle",
  },
  {
    priority: "Relaxation, nature, and backwater scenery",
    consider: "Kerala",
  },
  {
    priority: "Dramatic mountain scenery and a unique houseboat experience",
    consider: "Kashmir",
  },
  {
    priority: "Cooler climate and colonial hill station charm",
    consider: "Shimla & Manali",
  },
  {
    priority: "Spiritual and pilgrimage-focused travel",
    consider: "Varanasi and South India temple circuits",
  },
];

const included = [
  "Private transport between destinations within your chosen region",
  "Accommodation matched to your selected package tier, including specialty stays like houseboats where relevant",
  "Entrance fees to major monuments and cultural sites",
  "Selected meals and signature experiences specific to each region",
  "A structured, adjustable day-by-day itinerary",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("india", "india-tour-travel-guide-2026");



export default function IndiaGuide() {
  return (
    <>
      <Section label="Why India" heading="Why India appeals so strongly to Malaysian travellers">
        <p className="text-gray-600 leading-relaxed">
          Apart from the diverse nature of the landscape, India has special importance for
          travelers from Malaysia due to cultural ties, religious affinity, and ancestry.
          Such factors make India one of the few places that offer a holiday experience
          that is also a spiritual journey, in addition to being a place where you get the
          chance to explore another culture &ndash; thus making India always popular
          among travelers.
        </p>
      </Section>

      <Section label="At a Glance" heading="India's major regional itineraries">
        <DataTable
          headers={["Region / Focus", "Key destinations", "Known for"]}
          widths={["w-1/4", undefined, undefined]}
          rows={regionalItineraries.map((row) => [row.region, row.destinations, row.knownFor])}
        />
      </Section>

      <Section label="By Region" heading="Circuits worth building your trip around">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
          {regionDetails.map((item) => (
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

      <GuideFigure src={PHOTO} alt={PHOTO_ALT} />

      <Section label="Kerala" heading="Kerala: backwaters and “God's Own Country”">
        <p className="text-gray-600 leading-relaxed">
          Kerala is always counted amongst the top choices for Indian travel destinations
          from Malaysia, and there is a good reason for this Kerala is among the 10
          paradises of the world, according to National Geographic. A usual Kerala tour
          will combine exploration of culture, food, and nature, with an overnight journey
          in a house boat through the backwaters of Kerala, coupled with tea gardens in
          Munnar and wildlife in Thekkady. Travellers wanting to add Thekkady&rsquo;s
          spice country and Periyar wildlife to the Kerala classics can see how that looks
          in practice on our{" "}
          <Link href="/tours/india/kerala/6-day-beautiful-thekkady" className="text-primary underline">
            6-day Kerala &amp; Thekkady itinerary
          </Link>
          .
        </p>
      </Section>

      <Section label="Choosing" heading="Choosing the right India itinerary">
        <DataTable
          headers={["If your priority is…", "Consider…"]}
          widths={["w-1/2", undefined]}
          rows={choosingTable.map((row) => [row.priority, row.consider])}
        />
      </Section>

      <Section label="Inclusions" heading="What's typically included">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Trip Length" heading="Trip length guidance">
        <p className="text-gray-600 leading-relaxed">
          The average duration for single-region India trips like the Golden Triangle or
          Kerala is between 4 and 6 days, whereas more spiritual or multi-region tours can
          last up to 8 to 11 days or more. Taking into account the size of India, it would
          take extra days to incorporate more than two different regions on one trip.
        </p>
      </Section>

      <Section label="Practical Tips" heading="Practical considerations for traveling in India">
        <p className="text-gray-600 leading-relaxed">
          Given the size and diverse nature of the country, a couple of logistical
          considerations need to be taken into account while you make your plan for your
          tour. There is going to be a good amount of driving time between destinations in
          any particular area in comparison to some other destination, making realistic
          scheduling even more important. The dress code at religious places is more
          conservative than that of ordinary tourist sites, and it is advisable to find
          out about the dress code for the temple/shrine visits you have planned
          beforehand.
        </p>
      </Section>

      <Section label="Combine" heading="Combining India with Nepal">
        <p className="text-gray-600 leading-relaxed">
          Given their shared border and closely connected cultural and Himalayan
          geography, India and Nepal are sometimes combined into a single, longer
          itinerary, particularly for travellers with a spiritual or Himalayan focus. This
          kind of combination works especially well for journeys connecting North
          India&rsquo;s cultural sites with{" "}
          <Link href="/tours/nepal" className="text-primary underline">
            Nepal&rsquo;s Kathmandu and mountain viewpoints
          </Link>
          , offering a broader Himalayan and subcontinental experience without needing two
          entirely separate trips.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Start planning your India journey"
        body="From the Taj Mahal to Kerala&apos;s backwaters to spiritual Varanasi, a consultant can help you choose the right region and build your ideal itinerary. Request a free quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
