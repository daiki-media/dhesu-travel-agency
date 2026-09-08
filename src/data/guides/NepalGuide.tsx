"use client";

import Link from "next/link";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, INLINE_LINK, Section } from "./primitives";

/**
 * Every string of copy is taken verbatim from
 * content-document/destinations-in-asia/Nepal Tour Packages From Malaysia_
 * Himalayan Views Without the Hardcore Trek.docx — the draft's own order,
 * headings and wording. The opening paragraph is not repeated here; it is
 * the hero lead, set as `intro` on the landing page entry in
 * src/data/destinationDetail/nepal.ts.
 *
 * Shape mirrors BaliGuide.tsx: same section devices, same type sizes, same
 * spacing.
 */

// In-article break image. Chosen to match what this page is actually
// about, not to decorate it; see public/images/guides/.
const PHOTO = "/images/guides/patan-durbar.jpg";
const PHOTO_ALT = "Patan Durbar Square in the Kathmandu Valley, Nepal";

// The draft's own internal links. The .docx still points at the old
// holidayidea.com.my search pages (search-travel.php?s=<place>&c=25, and a bare
// s=Nepal for the country-wide ones); each is remapped to the page that now
// covers it. Anchors the draft left unlinked — Sarangkot, Chitwan — stay
// unlinked rather than being second-guessed.
const NEPAL = "/tours/nepal";
const KATHMANDU = "/tours/nepal/kathmandu";
const NAGARKOT = "/tours/nepal/nagarkot";
const POKHARA = "/tours/nepal/pokhara";


const coreDestinations: {
  destination: React.ReactNode;
  character: string;
  highlights: string;
}[] = [
  {
    destination: (
      <Link href={KATHMANDU} className={INLINE_LINK}>
        Kathmandu
      </Link>
    ),
    character: "Nepal's cultural and historic capital",
    highlights: "Durbar Square, the Living Goddess (Kumari) tradition, temples",
  },
  {
    destination: (
      <Link href={NAGARKOT} className={INLINE_LINK}>
        Nagarkot
      </Link>
    ),
    character: "Hilltop village above the clouds",
    highlights: "Sunrise views over the Himalayan range, including Everest on clear days",
  },
  {
    destination: (
      <Link href={POKHARA} className={INLINE_LINK}>
        Pokhara
      </Link>
    ),
    character: "Lakeside city at the base of the Annapurna range",
    highlights: "Phewa Lake, mountain views, a more relaxed pace",
  },
  {
    destination: "Sarangkot",
    character: "Viewpoint near Pokhara",
    highlights: "Sunrise views over Annapurna",
  },
  {
    destination: "Chitwan National Park",
    character: "Lowland wildlife reserve",
    highlights: "Jungle safaris, rhino and wildlife spotting",
  },
];

const byDestination: { title: string; body: React.ReactNode }[] = [
  {
    title: "Kathmandu: Nepal's Cultural Heart",
    body: (
      <>
        <Link href={KATHMANDU} className={INLINE_LINK}>
          Kathmandu
        </Link>{" "}
        forms an important part of almost all the itineraries of Nepal, because it houses
        the famous Durbar Square, and one of the most unique cultural practices of the
        country – Kumari, which is the term for a living goddess in Nepal. She is basically
        a young girl who is revered as the living god.
      </>
    ),
  },
  {
    title: "Nagarkot: The Himalayan Village Above the Clouds",
    body: (
      <>
        This location has come to be the one most sought after in any travel itinerary in
        Nepal since it provides an experience of the Himalayas in an easy manner that does
        not require any tough trekking. Rising early at the break of dawn in this{" "}
        <Link href={NAGARKOT} className={INLINE_LINK}>
          peaceful hill town
        </Link>{" "}
        and watching the sunrise on the snow capped mountains is an experience to
        remember.
      </>
    ),
  },
  {
    title: "Pokhara: Lakeside Serenity at the Foot of the Annapurna Range",
    body: (
      <>
        While{" "}
        <Link href={POKHARA} className={INLINE_LINK}>
          Pokhara
        </Link>{" "}
        is quite a bit different from Kathmandu in terms of pace, it is a tranquil lakeside
        town where one can see the reflection of the Annapurna mountain range in Phewa Lake
        on a clear day. It is also the starting point for shorter treks to Sarangkot,
        another sunrise viewing spot.
      </>
    ),
  },
  {
    title: "Chitwan National Park: Nepal's Wildlife Side",
    body: "If you are looking for a place where mountains and culture can be combined with wildlife, then Chitwan National Park is what you should visit in Nepal. The safari in the jungles provides an opportunity to see rhinos and other wild life species in Nepal’s terai region which is totally a different experience from the mountain scenery seen in other parts of Nepal.",
  },
];

const itineraryCombinations = [
  {
    focus: "Kathmandu + Nagarkot",
    duration: "4 days",
    suited: "Travellers wanting a short but complete taste of Nepal's culture and mountain views",
  },
  {
    focus: "Kathmandu, Nagarkot & Pokhara",
    duration: "6 days",
    suited: "A more complete Nepal experience combining culture, mountains, and lakeside relaxation",
  },
  {
    focus: "Kathmandu + Chitwan Wildlife Safari",
    duration: "8 days",
    suited: "Travellers wanting to add wildlife and nature alongside cultural and mountain sightseeing",
  },
];

const included = [
  "Private transport between destinations",
  "Accommodation matched to your selected package tier",
  "Entrance fees to major cultural sites, viewpoints, and (where included) national park safaris",
  "A structured itinerary with realistic pacing, avoiding overly ambitious daily schedules given Nepal's mountainous terrain",
  "Guided sightseeing at key cultural and natural landmarks",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("nepal", "nepal-tour-travel-guide-2026");



export default function NepalGuide() {
  return (
    <>
      <Section label="Beyond Trekking" heading="Nepal beyond hardcore trekking">
        <p className="text-gray-600 leading-relaxed">
          But it should be said immediately that this conception is incorrect. In order to
          be able to appreciate the beauty of Nepalese mountain peaks, one does not need
          any experience in trekking. There are many places in Nepal, like Nagarkot and
          Sarangkot, where you can enjoy the sunrise over the Himalayas without walking a
          long distance but only by going either on foot or by car.
        </p>
      </Section>

      <Section label="At a Glance" heading="Nepal's core destinations">
        <DataTable
          headers={["Destination", "Character", "Highlights"]}
          widths={["w-1/4", undefined, undefined]}
          rows={coreDestinations.map((row) => [row.destination, row.character, row.highlights])}
        />
      </Section>

      <Section label="By Destination" heading="Kathmandu, Nagarkot, Pokhara & Chitwan">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-9">
          {byDestination.map((item) => (
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

      <Section label="Combinations" heading="Suggested itinerary combinations">
        <DataTable
          headers={["Package focus", "Typical duration", "Best suited for"]}
          widths={["w-1/3", undefined, undefined]}
          rows={itineraryCombinations.map((row) => [row.focus, row.duration, row.suited])}
        />
      </Section>

      <Section label="Inclusions" heading="What's typically included">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="Fitness" heading="Is Nepal physically demanding?">
        <p className="text-gray-600 leading-relaxed">
          This is one of the most frequently expressed fears, and the truth of the matter
          is that it all really depends on your itinerary choice. Cultural and
          viewpoint-oriented itineraries (such as Kathmandu, Nagarkot, Pokhara) usually do
          not involve any hard walking and are suitable for most tourists who are in
          decent physical condition. It&rsquo;s only when you take a look at real
          multi-day trekking itineraries to the mountains of the Himalayas that you would
          need good physical fitness.
        </p>
      </Section>

      <Section label="When to Go" heading="Best time to visit Nepal">
        <p className="text-gray-600 leading-relaxed">
          Nepal&rsquo;s mountain views are weather-dependent, and visibility for sunrise
          viewpoints like Nagarkot and Sarangkot varies by season. Generally, the
          post-monsoon autumn months and early spring tend to offer clearer mountain
          visibility, though this can vary year to year. It&rsquo;s worth discussing
          timing with a consultant, particularly if unobstructed Himalayan views are a
          priority for your trip.
        </p>
      </Section>

      <Section label="Altitude" heading="Altitude and comfort considerations">
        <p className="text-gray-600 leading-relaxed">
          The fact remains that even itineraries not associated with treks in Nepal come
          with certain elevations that need to be known in advance. Kathmandu is an area
          of medium elevation, whereas Nagarkot and Pokhara have certain elevated areas,
          which are nowhere near the high{" "}
          <Link href={NEPAL} className={INLINE_LINK}>
            Himalayan trekking regions
          </Link>{" "}
          in terms of altitude.
          However, people do not experience any negative impacts due to the
          above-mentioned elevations; still people who have certain medical problems can
          inform about the same during planning of the trip.
        </p>
      </Section>

      <Section label="Etiquette" heading="Nepal's cultural etiquette worth knowing">
        <p className="text-gray-600 leading-relaxed">
          The{" "}
          <Link href={NEPAL} className={INLINE_LINK}>
            Nepalese culture
          </Link>
          , which is predominantly Buddhist and Hindu, has many rules
          of etiquette one should be aware of before visiting the temples and shrines, for
          example, taking off one&rsquo;s shoes when entering a temple, covering up when
          visiting shrines, walking clockwise around religious structures, like stupas,
          etc. It is usual for a tour guide to explain these customs during the trip;
          however, it is better if a visitor knows at least a little about them
          beforehand.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Plan your Nepal journey"
        body="Experience the Himalayas, rich culture, and even wildlife, without the demands of a hardcore trek. Request a free, personalised quote today."
        actions={[{ label: "Request a Free Quote", href: "/contact-us" }]}
      />
    </>
  );
}
