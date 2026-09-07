"use client";

import Link from "next/link";
import BlogArticleLayout, {
  ArticleSection,
  Bullets,
  Callout,
  Checklist,
  DataTable,
  Figure,
  FigurePair,
  P,
} from "@/src/components/BlogArticleLayout";

/**
 * "Halal Travel Guide: Ranking the Best Muslim-Friendly Destinations" —
 * Holiday Idea sheet row 40.
 *
 * Every sentence, table row and FAQ answer is copied verbatim from the approved
 * draft in content-document/travel-blog/. The article makes religious-practice
 * claims about real places, so nothing here is rewritten, softened or extended —
 * in particular the draft's distinction between formal halal certification and a
 * "no pork" / "Muslim-owned" claim, which is lifted into the Callout word for
 * word. Only the section eyebrows, the facts chips and the on-this-page labels
 * are written here, because the shell needs them and the draft has no equivalent.
 *
 * The sheet's brief for this row is "Supports Muslim-Friendly Tour page; strong
 * differentiator content", so the consultant line, and the closing CTA, point at
 * /muslim-friendly-holiday-travel-guide.
 */

const IMG = "/images/blog/halal-travel-guide-malaysia";

const SECTIONS = [
  { id: "what-makes-it-halal-friendly", label: "What Counts as Halal-Friendly" },
  { id: "destination-rankings", label: "Rankings by Ease" },
  { id: "turkey", label: "Turkey" },
  { id: "indonesia", label: "Indonesia" },
  { id: "uae", label: "UAE" },
  { id: "egypt", label: "Egypt" },
  { id: "western-destinations", label: "Western Destinations" },
  { id: "practical-tips", label: "Practical Tips" },
  { id: "trip-goals", label: "Matching Trip Goals" },
  { id: "family-considerations", label: "Family Considerations" },
  { id: "halal-travel-checklist", label: "Your Halal Checklist" },
];

export default function HalalTravelArticle({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <BlogArticleLayout
      slug="halal-travel-guide-malaysia"
      category="Halal Travel"
      title="Halal Travel Guide: Ranking the Best Muslim-Friendly Destinations"
      lead={
        'Some destinations make halal traveling easier than others, and being able to comprehend the differences that actually exist among destinations instead of presuming that all marketing claims about being "halal-friendly" are alike will help you set realistic expectations before booking your travel plans. This guide rates the most popular destinations based on their accessibility when it comes to food, prayer, and culture.'
      }
      heroImage={`${IMG}/hagia-sophia-aerial.jpg`}
      heroAlt="The Hagia Sophia and its surrounding grounds seen from above in Istanbul, Turkey"
      facts={["4 ease tiers", "Turkey · Indonesia · UAE · Egypt", "8 min read"]}
      sections={SECTIONS}
      faqs={faqs}
      closing={{
        heading: "Explore Muslim-Friendly Destinations",
        body: "From Turkey's rich heritage to Indonesia's accessible familiarity, find a destination that fits your halal travel needs. See our Muslim-Friendly Tour Packages and request a free, personalised quote today.",
        href: "/muslim-friendly-holiday-travel-guide",
        linkLabel: "See Muslim-Friendly Packages",
      }}
    >
      <ArticleSection
        id="what-makes-it-halal-friendly"
        eyebrow="The Criteria"
        heading="What Makes a Destination Genuinely Halal-Friendly"
      >
        <DataTable
          headers={["Factor", "Why It Matters"]}
          rows={[
            [
              "Halal certification prevalence",
              "Widespread, verifiable certification versus scattered, unverified claims",
            ],
            [
              "Mosque accessibility",
              "Convenient prayer facility access relative to tourist areas",
            ],
            [
              "Cultural familiarity",
              "General comfort level around modest dress and Islamic customs",
            ],
            [
              "Language and communication",
              "Ease of confirming halal status directly with restaurants and hotels",
            ],
            [
              "Tourism infrastructure specifically catering to Muslim travellers",
              "Dedicated Muslim-friendly hotel and tour options",
            ],
          ]}
        />
        <Figure
          src={`${IMG}/istanbul-spice-bazaar.jpg`}
          alt="A shopper browsing a spice and Turkish delight stall inside an Istanbul bazaar"
        />
      </ArticleSection>

      <ArticleSection
        id="destination-rankings"
        eyebrow="The Ranking"
        heading="Destination Rankings by Halal Travel Ease"
      >
        <DataTable
          headers={["Tier", "Destinations", "Why"]}
          rows={[
            [
              "Easiest",
              "Turkey, Indonesia, UAE, Malaysia's regional neighbours (Brunei)",
              "Majority-Muslim populations with widespread, reliable halal infrastructure",
            ],
            [
              "Straightforward with Planning",
              "Egypt, select parts of Southeast Asia",
              "Strong Islamic heritage and halal access, though requiring some destination-specific research",
            ],
            [
              "Requires More Research",
              "Major European and Western cities",
              "Growing halal options in cosmopolitan areas, but requires specific advance verification",
            ],
            [
              "More Limited",
              "Remote or less touristed regions globally",
              "Halal certification and mosque access can be genuinely sparse; extra planning required",
            ],
          ]}
        />
        <Figure
          src={`${IMG}/cappadocia-balloons.jpg`}
          alt="Hot-air balloons rising over the rock formations of Cappadocia, Turkey"
        />
      </ArticleSection>

      <ArticleSection
        id="turkey"
        eyebrow="Easiest Tier"
        heading="Turkey: Islamic Heritage Meets Modern Tourism"
      >
        <P>
          {"Turkish society has a rich history and culture linked to Islam along with an advanced tourism industry that ensures widespread provision of halal foods and mosques. The city of Istanbul is particularly attractive to Muslim tourists because it provides a good combination of historic mosques and halal food along with other cosmopolitan features."}
        </P>
        <FigurePair
          items={[
            {
              src: `${IMG}/galata-bosphorus.jpg`,
              alt: "The Galata waterfront in Istanbul seen from across the Bosphorus",
            },
            {
              src: `${IMG}/bursa-green-tomb.jpg`,
              alt: "The tiled facade of the Green Tomb in Bursa, Turkey",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="indonesia"
        eyebrow="Easiest Tier"
        heading="Indonesia: Accessible and Culturally Familiar"
      >
        <P>
          {"As the world's most populous Muslim-majority country, Indonesia (including "}
          <Link
            href="/tours/indonesia/bali-holiday-travel-guide-2026"
            className="text-primary-dark underline underline-offset-2 hover:text-primary"
          >
            Bali
          </Link>
          {", despite its Hindu-majority local population) offers straightforward halal food access throughout most tourist areas, alongside a broadly familiar cultural context for Malaysian Muslim travellers specifically, given shared regional and linguistic ties."}
        </P>
        <Figure
          src={`${IMG}/medan-grand-mosque.jpg`}
          alt="The Grand Mosque of Medan in Indonesia, seen from the street"
        />
      </ArticleSection>

      <ArticleSection
        id="uae"
        eyebrow="Easiest Tier"
        heading="UAE: Modern Infrastructure With Strong Halal Access"
      >
        <P>
          {"The UAE, particularly "}
          <Link
            href="/tours/dubai/dubai-holiday-travel-guide-2026"
            className="text-primary-dark underline underline-offset-2 hover:text-primary"
          >
            Dubai
          </Link>
          {" and Abu Dhabi, combines a majority-Muslim population with world-class modern tourism infrastructure, resulting in extensive halal dining options and readily accessible prayer facilities even within major shopping malls and tourist attractions."}
        </P>
        <FigurePair
          items={[
            {
              src: `${IMG}/dubai-fountain-night.jpg`,
              alt: "The Dubai Fountain lit up at night below the city skyline",
            },
            {
              src: `${IMG}/abu-dhabi-palace-hotel.jpg`,
              alt: "A large domed palace hotel in Abu Dhabi, United Arab Emirates",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="egypt"
        eyebrow="With Planning"
        heading="Egypt: Deep Heritage With Some Extra Planning"
      >
        <P>
          {"Egypt offers profound Islamic historical significance alongside its famous ancient heritage sites, and halal food is generally straightforward to find. That said, tourist-area pricing and infrastructure can vary more than in some other destinations, so working with a knowledgeable consultant helps ensure smoother logistics."}
        </P>
        <Figure
          src={`${IMG}/egypt-museum-colossus.jpg`}
          alt="A colossal pharaonic statue standing in a museum hall in Egypt"
        />
      </ArticleSection>

      <ArticleSection
        id="western-destinations"
        eyebrow="More Research"
        heading="Western Destinations: Growing but Requires Verification"
      >
        <P>
          {"There has been a significant development in the provision of halal food in major cities of Europe, North America, and Australia in recent years, especially in places where there are substantial Muslim populations. However, it is much less prevalent than in predominantly Muslim countries, which makes it important to do research prior to travel."}
        </P>
        <Figure
          src={`${IMG}/european-street-walk.jpg`}
          alt="A person walking along a quiet residential street in a European city"
        />
      </ArticleSection>

      <ArticleSection
        id="practical-tips"
        eyebrow="Before You Go"
        heading="Practical Tips for Halal Travel in Any Destination"
      >
        <Callout title="Verify certification, not just claims">
          <p>
            {'"No pork" or "Muslim-owned" isn\'t the same as formal halal certification; ask specifically when it matters to you.'}
          </p>
        </Callout>
        <Bullets
          items={[
            {
              label: "Research mosque locations near your itinerary in advance",
              body: "Rather than searching on the day you need one.",
            },
            {
              label: "Pack modest clothing options",
              body: "Even in destinations with generally liberal dress norms, having appropriate attire for mosque visits is worth planning for.",
            },
            {
              label: "Confirm hotel breakfast and dining arrangements",
              body: "Ask specifically whether kitchens are halal-certified, not just whether pork is excluded from the menu.",
            },
          ]}
        />
        <P>
          <span className="font-semibold text-teal-navy">
            {"Consider working with a consultant experienced in "}
            <Link
              href="/muslim-friendly-holiday-travel-guide"
              className="text-primary-dark underline underline-offset-2 hover:text-primary"
            >
              Muslim-friendly travel
            </Link>
          </span>
          {' — Particularly for destinations outside the "easiest" tier, where pre-vetting details saves considerable on-the-ground uncertainty.'}
        </P>
      </ArticleSection>

      <ArticleSection
        id="trip-goals"
        eyebrow="Matching Up"
        heading="Combining Halal Travel With Specific Trip Goals"
      >
        <DataTable
          headers={["Trip Goal", "Well-Suited Halal-Friendly Destination"]}
          rows={[
            ["Beach and relaxation", "Indonesia (Bali), UAE"],
            ["Cultural and historical depth", "Turkey, Egypt"],
            ["Family-friendly modern attractions", "UAE"],
            [
              <Link
                key="raya"
                href="/raya-holiday-travel-deals-2026"
                className="underline underline-offset-2 hover:text-primary"
              >
                Festive/Raya travel
              </Link>,
              "Turkey, Indonesia, UAE",
            ],
            ["Shorter flight time from Malaysia", "Indonesia"],
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="family-considerations"
        eyebrow="Travelling as a Family"
        heading="Halal Travel and Family Considerations"
      >
        <P>
          {"In the case of families having Muslims children accompanying them while on a journey, there would be another factor associated with being at the destination where Muslims live. This makes the traveling experience less strange for the younger generation. Thus, it should also be taken into consideration along with other practical issues related to halal food and mosques."}
        </P>
      </ArticleSection>

      <ArticleSection
        id="halal-travel-checklist"
        eyebrow="Checklist"
        heading="Building a Halal Travel Checklist for Your Next Trip"
      >
        <Checklist
          items={[
            "Confirm halal certification status of key restaurants along your itinerary before departure",
            "Research mosque locations near your accommodation and major sightseeing stops",
            "Pack appropriate modest clothing for mosque visits, regardless of the destination's general dress norms",
            "Confirm your hotel's breakfast and included dining arrangements specifically",
            "Discuss any specific halal or prayer-related needs with your travel consultant before booking",
          ]}
        />
      </ArticleSection>
    </BlogArticleLayout>
  );
}
