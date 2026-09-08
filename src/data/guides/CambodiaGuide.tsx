"use client";

import Link from "next/link";
import FaqSection from "@/src/components/FaqSection";
import CtaSection from "@/src/components/CtaSection";
import { getGuideFaqs } from "@/src/data/guideFaqs";
import { Bullet, DataTable, GuideFigure, INLINE_LINK, Section } from "./primitives";

const PHOTO = "/images/guides/ta-prohm.jpg";
const PHOTO_ALT = "Fig roots growing over the ruins of Ta Prohm at Angkor";

// The draft's own internal links. The .docx still points at the old
// holidayidea.com.my search pages (search-travel.php?s=<place>&c=75, and a bare
// s=Cambodia for the country-wide ones); each is remapped to the page that now
// covers it. The Vietnam links are not the draft's — they were already on the
// page and are kept, since the draft's copy names Vietnam three times.
const CAMBODIA = "/tours/cambodia";
const SIEM_REAP = "/tours/cambodia/siem-reap";
const PHNOM_PENH = "/tours/cambodia/phnom-penh";
const VIETNAM = "/tours/vietnam";


const temples = [
  "Angkor Wat — The iconic centrepiece, best experienced with expert guides who can explain its history and architectural significance",
  "Angkor Thom and Bayon Temple — Known for its distinctive giant stone faces",
  "Ta Prohm — Famous for its dramatic tree roots overtaking the ancient structures, made internationally recognisable through film",
  "Banteay Srei — Known for its intricate, finely detailed pink sandstone carvings",
];

const tripStyles = [
  {
    style: "Cambodia only (Siem Reap-focused)",
    duration: "4 days",
    suits: "Travellers primarily interested in the Angkor temple complex and Tonle Sap Lake",
  },
  {
    style: "Cambodia + Phnom Penh",
    duration: "5–6 days",
    suits: "Travellers wanting a more complete picture of Cambodia beyond Siem Reap",
  },
  {
    style: "Cambodia + Vietnam combined",
    duration: "8+ days",
    suits: "Travellers wanting a broader Southeast Asia cultural journey in one trip",
  },
];

const included = [
  "Private transport within Cambodia",
  "Accommodation matched to your selected package tier",
  "Expert-guided temple touring at Angkor Wat and surrounding sites",
  "Tonle Sap Lake cruise where included",
  "A structured itinerary with realistic pacing for temple exploration, which can be physically tiring in Cambodia's heat",
];

// Shared with the route, which emits the same list as FAQPage markup.
const faqs = getGuideFaqs("cambodia", "cambodia-tour-travel-guide-2026");



export default function CambodiaGuide() {
  return (
    <>
      <Section
        label="Getting Started"
        heading="Why Siem Reap anchors almost every Cambodia itinerary"
      >
        <p className="text-gray-600 leading-relaxed">
          The City of Siem Reap is the gateway city to the famous{" "}
          <Link href={SIEM_REAP} className={INLINE_LINK}>
            Angkor archaeological park
          </Link>
          , and this makes it the obvious first stop in Cambodia for almost every tourist
          who comes here. Not only does Siem Reap have the benefit of being close to Angkor Wat,
          but it is a tourist destination in its own right.
        </p>
      </Section>

      <Section label="Temples" heading="Angkor Wat and the wider temple complex">
        <p className="text-gray-600 leading-relaxed mb-6">
          Angkor Wat itself is only the most famous of dozens of temples spread across the
          wider Angkor archaeological park, and most well-planned itineraries include several
          of these sites, not just the headline temple.
        </p>
        <p className="font-primary font-bold text-teal-navy text-lg leading-snug mb-4">
          Commonly included temple sites
        </p>
        <ul className="space-y-4 mb-6">
          {temples.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
        <p className="text-gray-600 leading-relaxed">
          Exploring these sites typically requires at least a full day, and many travellers
          dedicate two days to properly appreciate the scale and detail of the complex without
          feeling rushed.
        </p>
      </Section>

      <Section label="Add-On" heading="Tonle Sap Lake: Cambodia's floating villages">
        <p className="text-gray-600 leading-relaxed">
          Aside from the temples, Tonle Sap Lake presents a completely unique opportunity in
          that it involves a boat ride through Southeast Asia&rsquo;s largest lake. The trip
          includes floating villages where the entire community lives atop the lake&rsquo;s
          waters. It is often combined with visits to Angkor Wat to complete the Siem Reap tour
          experience.
        </p>
      </Section>

      <Section label="Beyond Siem Reap" heading="Beyond Siem Reap: Phnom Penh">
        <p className="text-gray-600 leading-relaxed">
          Siem Reap may be the highlight of most itineraries to Cambodia, however, the
          capital of{" "}
          <Link href={PHNOM_PENH} className={INLINE_LINK}>
            Phnom Penh
          </Link>{" "}
          gives travelers an alternative perspective to visit, such as the Royal Palace,
          Silver Pagoda, and the history of the country within the last few years.
          While most itineraries to Cambodia will concentrate only on Siem Reap, one can
          include Phnom Penh in their itinerary to get a glimpse of the entire country.
        </p>
      </Section>

      <GuideFigure src={PHOTO} alt={PHOTO_ALT} />

      <Section label="Multi-Country" heading="Combining Cambodia with Vietnam">
        <p className="text-gray-600 leading-relaxed mb-8">
          Given that both Cambodia and{" "}
          <Link href={VIETNAM} className={INLINE_LINK}>
            Vietnam
          </Link>{" "}
          are close neighbours with short flight and travel distances, putting together both
          countries in one itinerary tour package has been gaining popularity, sometimes
          described as part of the &ldquo;Iconic Asean&rdquo; package tours. This will give
          visitors a chance to visit the historic Angkor Wat while enjoying the unique features
          of Vietnam at the same time.
        </p>
        <DataTable
          headers={["Trip style", "Typical duration", "Best suited for"]}
          widths={["w-1/4", undefined, undefined]}
          rows={tripStyles.map((row) => [row.style, row.duration, row.suits])}
        />
      </Section>

      <Section label="Inclusions" heading="What's typically included">
        <ul className="space-y-4">
          {included.map((item) => (
            <Bullet key={item}>{item}</Bullet>
          ))}
        </ul>
      </Section>

      <Section label="When to Go" heading="Best time to visit Cambodia">
        <p className="text-gray-600 leading-relaxed">
          Cambodia&rsquo;s dry season, roughly November through April, generally offers the
          most comfortable conditions for temple exploration, avoiding both the intense heat
          that can precede the rains and the heavier rainfall of the wet season. Given how much
          walking is involved in exploring the Angkor complex, timing your visit around cooler,
          drier conditions can make a meaningful difference to overall comfort.
        </p>
      </Section>

      <Section label="Choosing" heading="Choosing the right Cambodia itinerary">
        <p className="text-gray-600 leading-relaxed">
          In case you are interested in Angkor Wat first and foremost and have only 4 days for
          your stay, this itinerary will allow you to visit all important temples, as well as
          Tonle Sap Lake without too much traveling. In case you are interested in getting to
          know the country a little bit better, visiting Phnom Penh will help you understand
          the modern face of Cambodia beyond its ancient past. In case you are planning to
          travel around the region, a combination with{" "}
          <Link href={VIETNAM} className={INLINE_LINK}>
            Vietnam
          </Link>{" "}
          will be a perfect choice.
        </p>
      </Section>

      <Section label="Culture" heading="Cambodian culture beyond the temples">
        <p className="text-gray-600 leading-relaxed">
          While Angkor Wat dominates most itineraries, Cambodia&rsquo;s living culture offers
          additional depth worth including. Traditional Apsara dance performances, depicting
          stories from Khmer mythology through intricate hand and body movements, are commonly
          offered as an evening experience in Siem Reap, providing cultural context that
          complements the historical temple sites during the day.{" "}
          <Link href={CAMBODIA} className={INLINE_LINK}>
            Cambodian cuisine
          </Link>
          , distinct from its Thai and Vietnamese neighbours despite some overlapping
          ingredients, is also worth exploring through the city&rsquo;s growing range of restaurants blending
          traditional and modern approaches.
        </p>
      </Section>

      <Section label="Good to Know" heading="Practical considerations for temple exploration">
        <p className="text-gray-600 leading-relaxed">
          Given how much of a Cambodia itinerary revolves around outdoor temple exploration, a
          few practical considerations are worth planning around. Modest dress is expected at
          religious sites, meaning shoulders and knees should generally be covered even in
          Cambodia&rsquo;s tropical heat. Starting temple visits early in the morning, both to
          catch favourable light for photography and to avoid the most intense midday heat, is
          a strategy most well-planned itineraries build in as standard practice.
        </p>
      </Section>

      <FaqSection faqs={faqs} layout="stacked" />

      <CtaSection
        variant="card"
        heading="Plan your Cambodia &amp; Angkor Wat journey"
        body={
          <>
            Discover the grandeur of Angkor Wat and Cambodia&rsquo;s rich heritage, with the
            option to combine it with{" "}
            <Link
              href={VIETNAM}
              className="text-white underline decoration-primary decoration-2 underline-offset-4 hover:text-primary transition-colors"
            >
              Vietnam
            </Link>
            . Request a free, personalised quote today.
          </>
        }
        actions={[{ label: "Request a Free Quote", href: "/contact" }]}
      />
    </>
  );
}
