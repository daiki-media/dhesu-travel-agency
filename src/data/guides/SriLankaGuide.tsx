"use client";

import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, Section, TripRows } from "./primitives";

/**
 * Every string of copy is taken verbatim from
 * content-document/destinations-in-asia/Sri Lanka Tour Packages From
 * Malaysia_ Culture, Hill Country & Wildlife.docx — the draft's own order,
 * headings and wording. The opening paragraph is not repeated here; it is
 * the hero lead, set as `intro` on the landing page entry in
 * src/data/destinationDetail/sri-lanka.ts.
 *
 * Shape mirrors BaliGuide.tsx: same section devices, same type sizes, same
 * spacing.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/nine-arch-bridge.jpg";
const PHOTO_ALT = "A train crossing the Nine Arch Bridge at Ella, Sri Lanka";


const themes = [
  {
    theme: "Hill Country & Tea Culture",
    destinations: "Nuwara Eliya",
    highlights: "Tea plantations, Horton Plains National Park, colonial “Little England” charm",
  },
  {
    theme: "Cultural Heritage",
    destinations: "Kandy, Sigiriya",
    highlights: "Temple of the Tooth, Sigiriya Rock Fortress, ancient cities",
  },
  {
    theme: "Wildlife & Safari",
    destinations: "Yala National Park",
    highlights: "Jeep safaris, leopard and elephant spotting",
  },
  {
    theme: "Coastal & Beach",
    destinations: "Southern coastal belt",
    highlights: "Beach relaxation, often paired with cultural touring",
  },
  {
    theme: "Colombo & Modern Sri Lanka",
    destinations: "Colombo",
    highlights: "Urban exploration, shopping, dining",
  },
];

const byTheme = [
  {
    title: "Nuwara Eliya: Sri Lanka's “Little England”",
    body: "Nuwara Eliya is still considered one of the top locations in the country because of the beauty and serenity that it possesses in the form of the tea gardens. However, besides the tea gardens, there are many other tourist spots that can be visited in Nuwara Eliya, like Horton Plains National Park, Gregory Lake, and Sita Temple.",
  },
  {
    title: "Kandy and Sigiriya: Sri Lanka's Cultural Heart",
    body: "Kandy, with its famous Temple of the Tooth, acts as the spiritual and cultural hub for most Sri Lankan itineraries. Along with Sigiriya Rock Fortress, which is listed as a UNESCO World Heritage site and among the most popular monuments in Sri Lanka, this makes up the heart of most cultural tours, and gives an authentic feel of its rich history.",
  },
  {
    title: "Yala National Park: Wildlife Safari Experiences",
    body: "For people looking for some excitement along with wildlife during their visit, the Yala National Park has jeep safaris that have been known for sightings of leopards and elephants, both amidst one of the finest biodiversity in the whole of Sri Lanka. The safari has been known to be included in most itineraries as an alternative to other excursions.",
  },
];

const tripLengths = [
  {
    length: "4 days",
    focus: "A focused theme, such as hill country and cultural sites, without wildlife or extensive beach time",
  },
  {
    length: "6 days",
    focus: "A broader combination including culture, hill country, and a wildlife safari",
  },
  {
    length: "8+ days",
    focus: "A comprehensive journey covering cultural heritage, hill country, wildlife, and coastal relaxation",
  },
];

const included = [
  "Private transport between destinations, allowing 100% private touring rather than large shared coach groups",
  "Accommodation matched to your selected package tier",
  "Entrance fees to major cultural and natural sites",
  "Safari jeep arrangements where wildlife viewing is included",
  "A structured itinerary that can be adjusted for pacing and specific regional focus",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("sri-lanka", "sri-lanka-tour-travel-guide-2026");



export default function SriLankaGuide() {
  return (
    <>
      <Section label="Why Sri Lanka" heading="Why Sri Lanka has become so popular">
        <p className="text-gray-600 leading-relaxed">
          Travelers love Sri Lanka because of its small geographical size; instead of
          having to fly for hours from one place to another, in Sri Lanka, one gets the
          chance to experience completely different geographical and experiential zones
          in a short period of time. One can actually manage to do all that in just one
          week of travel.
        </p>
      </Section>

      <Section label="At a Glance" heading="Sri Lanka's core travel themes">
        <DataTable
          headers={["Theme", "Key destinations", "Highlights"]}
          widths={["w-1/4", undefined, undefined]}
          rows={themes.map((row) => [row.theme, row.destinations, row.highlights])}
        />
      </Section>

      <Section label="By Theme" heading="Sri Lanka's headline regions up close">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
          {byTheme.map((item) => (
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

      <Section label="Combining" heading="Combining culture, hill country & wildlife in one trip">
        <p className="text-gray-600 leading-relaxed mb-6">
          The small size of Sri Lanka means that it is actually possible to visit several
          different places on one trip in a relatively short amount of time. Indeed, a
          carefully crafted itinerary of 6 days could incorporate the cities of Colombo
          and Kandy, some hill country, and Yala game viewing thus allowing tourists to
          experience a bit of everything.
        </p>
        <TripRows
          rows={tripLengths.map((row) => ({
            label: row.length,
            detail: row.focus,
          }))}
        />
      </Section>

      <Section label="Inclusions" heading="What's typically included">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="When to Go" heading="Best time to visit Sri Lanka">
        <p className="text-gray-600 leading-relaxed">
          Because of the presence of two monsoons in Sri Lanka, which affect opposite
          sides of the country throughout the year, there is no one bad time to travel to
          this island destination as it largely depends on the part of the island that
          you wish to visit. It would be advisable to consult with a representative to
          plan your vacation accordingly.
        </p>
      </Section>

      <Section label="Choosing" heading="Choosing the right Sri Lanka itinerary">
        <p className="text-gray-600 leading-relaxed">
          Should you be tight on time and still looking for an experience that would cover
          your expectations sufficiently but not rush you too much, a 4-day trip to the
          hills and culture would do just fine. In case you want to include wildlife as
          well as gain a more rounded experience, you could consider an 8-day tour
          covering both culture, hill country, and a visit to Yala Safari Park.
        </p>
      </Section>

      <Section label="Cuisine" heading="Sri Lankan cuisine and local culture">
        <p className="text-gray-600 leading-relaxed">
          Sri Lankan food offers a distinctive blend of South Asian and Southeast Asian
          influences, with rice and curry forming the backbone of most meals, alongside
          fresh seafood along the coastal regions and Ceylon tea, unsurprisingly, being a
          genuine highlight given the country&rsquo;s tea-growing heritage. Many
          hill-country itineraries include a visit to an active tea factory, offering
          insight into the processing methods behind one of Sri Lanka&rsquo;s most famous
          exports, alongside the opportunity to sample freshly brewed tea on-site.
        </p>
      </Section>

      <Section label="Heritage" heading="Sri Lanka's multicultural heritage">
        <p className="text-gray-600 leading-relaxed">
          One of Sri Lanka&rsquo;s understated strengths as a travel destination is its
          genuine cultural and religious diversity, shaped by Buddhist, Hindu, Muslim, and
          Christian communities across the island. This is reflected in the range of
          religious and cultural sites included in many itineraries, from Kandy&rsquo;s
          Buddhist Temple of the Tooth to Hindu temples in the country&rsquo;s north and
          east, giving travellers a more layered understanding of the island beyond its
          natural scenery alone.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Plan your Sri Lanka adventure"
        body="From misty tea country to ancient temples to wildlife safaris, a consultant can help you build the right Sri Lanka itinerary. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
