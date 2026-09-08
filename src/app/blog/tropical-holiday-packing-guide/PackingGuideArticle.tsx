"use client";

import Link from "next/link";
import BlogArticleLayout, {
  ArticleSection,
  ARTICLE_LINK,
  BlogTable,
  Bullets,
  Callout,
  Checklist,
  Figure,
  LEAD_LINK,
  P,
} from "@/src/components/blog/BlogArticleLayout";

/**
 * Holiday Idea sheet, row 39 — /blog/tropical-holiday-packing-guide.
 *
 * The most checklist-shaped of the six articles: the brief asks for practical,
 * shareable, evergreen copy, so every list is rendered as a scannable device
 * and nothing on the page is dated to a season or a year. The packing lists
 * are copied verbatim from the draft — an item that quietly appears or
 * disappears here is a defect, not an edit.
 */

const IMG = "/images/blog/tropical-holiday-packing-guide";

// The draft's own internal links. The lead names three destinations and links
// each to its old holidayidea.com.my listing; the dress-code paragraph links
// the old homepage, which on a general packing article has no more specific
// equivalent than our own homepage.
const BALI = "/tours/indonesia/bali";
const THAILAND = "/tours/thailand";
const VIETNAM = "/tours/vietnam";
const HOME = "/";

const SECTIONS = [
  { id: "clothing-essentials", label: "Clothing Essentials" },
  { id: "sun-and-heat-protection", label: "Sun & Heat Protection" },
  { id: "health-and-toiletries", label: "Health & Toiletries" },
  { id: "electronics-and-practical", label: "Electronics & Practical" },
  { id: "culturally-appropriate-dress", label: "Culturally Appropriate Dress" },
  { id: "what-to-leave-at-home", label: "What To Leave At Home" },
  { id: "packing-by-trip-length", label: "Packing By Trip Length" },
  { id: "pre-departure-checklist", label: "Pre-Departure Checklist" },
  { id: "combined-itineraries", label: "Combined Itineraries" },
  { id: "luggage-considerations", label: "Luggage Considerations" },
];

export default function PackingGuideArticle({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <BlogArticleLayout
      slug="tropical-holiday-packing-guide"
      category="Packing"
      title="Packing Guide for Tropical Destinations: The Complete Checklist"
      lead={
        <>
          There are distinct factors which determine why people should pack properly when
          planning to travel to a tropical region; the hot temperature, humidity,
          protection from rains, relaxing on the beaches, historical and temple sites that
          one should dress modestly for. This packing list includes everything needed while
          traveling to a tropical destination such as{" "}
          <Link href={BALI} className={LEAD_LINK}>
            Bali
          </Link>
          ,{" "}
          <Link href={THAILAND} className={LEAD_LINK}>
            Thailand
          </Link>
          ,{" "}
          <Link href={VIETNAM} className={LEAD_LINK}>
            Vietnam
          </Link>
          , etc.
        </>
      }
      heroImage={`${IMG}/tropical-beach-loungers.jpg`}
      heroAlt="A thatched parasol shading two loungers on white tropical sand"
      facts={["Bali · Thailand · Vietnam", "Evergreen checklist", "8 min read"]}
      sections={SECTIONS}
      faqs={faqs}
      closing={{
        heading: "Ready to Plan Your Tropical Getaway?",
        body: "Now that you know what to pack, let's plan where you're going. Explore our Bali, Vietnam, and Thailand holiday packages and request a free, personalised quote today.",
        href: "/tours",
        linkLabel: "Browse Holiday Packages",
      }}
    >
      {/* ── 1. CLOTHING ESSENTIALS ─────────────────────────────────────────── */}
      <ArticleSection
        id="clothing-essentials"
        eyebrow="Start Here"
        heading="Clothing Essentials"
      >
        <P>
          This packing list includes everything needed while traveling to a
          tropical destination such as{" "}
          <Link
            href="/tours/indonesia/bali-holiday-travel-guide-2026"
            className="text-primary-dark font-semibold underline underline-offset-4 hover:text-primary transition-colors"
          >
            Bali
          </Link>
          ,{" "}
          <Link
            href="/tours/thailand/phuket-krabi-holiday-guide-2026"
            className="text-primary-dark font-semibold underline underline-offset-4 hover:text-primary transition-colors"
          >
            Thailand
          </Link>
          ,{" "}
          <Link
            href="/tours/vietnam/vietnam-tour-travel-guide-2026"
            className="text-primary-dark font-semibold underline underline-offset-4 hover:text-primary transition-colors"
          >
            Vietnam
          </Link>
          , etc.
        </P>

        <BlogTable
          headers={["Item", "Why It's Essential"]}
          rows={[
            [
              "Lightweight, breathable clothing",
              "Cotton and linen handle heat and humidity far better than synthetic fabrics",
            ],
            [
              "A few modest outfits (covering shoulders/knees)",
              "Required for temple visits and many religious or cultural sites",
            ],
            [
              "Swimwear (2+ sets)",
              "Allows one to dry while the other is in use",
            ],
            [
              "A light rain jacket or packable poncho",
              "Tropical rain can arrive suddenly, even in the dry season",
            ],
            [
              "Comfortable walking shoes",
              "Essential for sightseeing days involving significant walking",
            ],
            [
              "Sandals or flip-flops",
              "Practical for beach areas and casual settings",
            ],
            [
              "A light cardigan or shawl",
              "Useful for air-conditioned interiors, which can be surprisingly cold",
            ],
          ]}
        />

        <Figure
          src={`${IMG}/surfer-walking-shoreline.jpg`}
          alt="A surfer carrying a board along the shoreline of a tropical beach"
        />
      </ArticleSection>

      {/* ── 2. SUN AND HEAT PROTECTION ─────────────────────────────────────── */}
      <ArticleSection
        id="sun-and-heat-protection"
        eyebrow="Daily Kit"
        heading="Sun and Heat Protection"
      >
        <Checklist
          items={[
            "Reef-safe sunscreen - Increasingly required or encouraged at many beach and marine destinations to protect local ecosystems",
            "A wide-brimmed hat or cap - Meaningful protection during extended outdoor sightseeing",
            "Sunglasses with UV protection - Both for comfort and genuine eye protection",
            "A reusable water bottle - Staying hydrated is genuinely important in tropical heat and humidity",
          ]}
        />

        <Figure
          src={`${IMG}/clear-shallow-bay.jpg`}
          alt="A clear shallow bay with rocks breaking the surface and palms along the shore"
        />
      </ArticleSection>

      {/* ── 3. HEALTH AND TOILETRIES ───────────────────────────────────────── */}
      <ArticleSection
        id="health-and-toiletries"
        eyebrow="Small Bag"
        heading="Health and Toiletries"
      >
        <BlogTable
          headers={["Item", "Notes"]}
          rows={[
            [
              "Insect repellent",
              "Particularly important in rural, forested, or evening outdoor settings",
            ],
            [
              "Basic first aid kit",
              "Plasters, antiseptic, any personal medication",
            ],
            [
              "Rehydration salts",
              "Useful given increased fluid loss in hot, humid climates",
            ],
            [
              "Motion sickness tablets",
              "Worth carrying if your itinerary includes boat trips or winding mountain roads",
            ],
            [
              "Hand sanitiser",
              "Practical for markets, street food stalls, and travel days",
            ],
          ]}
        />

        <Figure
          src={`${IMG}/rainforest-waterfall.jpg`}
          alt="A waterfall spilling down through dense rainforest"
        />
      </ArticleSection>

      {/* ── 4. ELECTRONICS AND PRACTICAL ITEMS ─────────────────────────────── */}
      <ArticleSection
        id="electronics-and-practical"
        eyebrow="Easily Forgotten"
        heading="Electronics and Practical Items"
      >
        <Checklist
          items={[
            "Universal travel adapter - Plug types vary by country; confirm your specific destination's standard",
            "Portable power bank - Useful for long sightseeing days away from charging points",
            "A dry bag or waterproof pouch - Protects electronics during boat trips, waterfalls, or sudden rain",
            "Copies of important documents - Both digital and printed, including passport, visa approvals, and travel insurance",
          ]}
        />

        <Figure
          src={`${IMG}/sunset-sailing-boat.jpg`}
          alt="A sailing boat silhouetted against a tropical sunset"
        />
      </ArticleSection>

      {/* ── 5. CULTURALLY APPROPRIATE DRESS ────────────────────────────────── */}
      <ArticleSection
        id="culturally-appropriate-dress"
        eyebrow="Get This Right"
        heading="Culturally Appropriate Dress: A Closer Look"
      >
        <P>
          <Link href={HOME} className={ARTICLE_LINK}>
            Many tropical destinations
          </Link>
          , particularly those with significant temple or religious site visits, have
          specific dress expectations that differ from general beach-holiday attire.
        </P>

        <BlogTable
          headers={["Destination Type", "Typical Dress Expectation"]}
          rows={[
            [
              "Temple and religious sites (Bali, Thailand, Cambodia)",
              "Shoulders and knees covered; sometimes a sarong is required and can be rented on-site",
            ],
            [
              "Muslim-majority destinations",
              "More modest general dress is appreciated, particularly outside resort areas",
            ],
            [
              "Beach and resort areas",
              "Standard beachwear is generally acceptable within resort boundaries",
            ],
          ]}
        />

        <Callout title="Pack the modest outfit separately from the beachwear">
          <p>
            Packing at least one or two specifically modest outfits, separate
            from beach attire, avoids scrambling to buy or rent appropriate
            clothing on the day of a planned temple visit.
          </p>
        </Callout>

        <Figure
          src={`${IMG}/temple-gate-modest-dress.jpg`}
          alt="A couple in covered-up clothing walking up to a stone temple gateway"
        />
      </ArticleSection>

      {/* ── 6. WHAT TO LEAVE AT HOME ───────────────────────────────────────── */}
      <ArticleSection
        id="what-to-leave-at-home"
        eyebrow="Leave Space"
        heading="What to Leave at Home"
      >
        <Bullets
          items={[
            {
              label: "Heavy, non-breathable fabrics",
              body: "These become genuinely uncomfortable in tropical humidity",
            },
            {
              label: "Excessive valuables",
              body: "Tropical destinations, like anywhere, carry some risk around theft in crowded tourist areas",
            },
            {
              label: "Overly formal attire",
              body: "Rarely needed outside of specific fine-dining occasions",
            },
            {
              label: "Too many shoe options",
              body: "One good walking pair and one casual sandal option usually covers most tropical itineraries",
            },
          ]}
        />

        <Figure
          src={`${IMG}/souvenir-shop-interior.jpg`}
          alt="The crowded interior of a souvenir and handicraft shop packed with goods"
        />
      </ArticleSection>

      {/* ── 7. PACKING LIST BY TRIP LENGTH ─────────────────────────────────── */}
      <ArticleSection
        id="packing-by-trip-length"
        eyebrow="How Much"
        heading="Packing List by Trip Length"
      >
        <BlogTable
          headers={["Trip Length", "Clothing Quantity Guidance"]}
          rows={[
            ["3–4 days", "4–5 outfits, 1 swimwear set, 1 modest outfit"],
            ["5–7 days", "6–7 outfits, 2 swimwear sets, 1–2 modest outfits"],
            [
              "8+ days",
              "Plan for laundry access rather than packing for every single day",
            ],
          ]}
        />

        <P>
          For longer trips, most tropical destinations offer accessible and
          affordable laundry services, making it unnecessary to pack an outfit
          for every day of an extended holiday.
        </P>
      </ArticleSection>

      {/* ── 8. PRE-DEPARTURE CHECKLIST ─────────────────────────────────────── */}
      <ArticleSection
        id="pre-departure-checklist"
        eyebrow="Before You Zip Up"
        heading="A Simple Pre-Departure Checklist"
      >
        <Checklist
          items={[
            "Check the specific weather forecast for your travel dates, not just general seasonal averages",
            "Confirm any dress code requirements for specific planned activities (temples, fine dining, cultural performances)",
            "Pack a mix of quick-dry and breathable fabrics rather than an entirely single-purpose wardrobe",
            "Separate a day bag with essentials (sunscreen, water bottle, rain protection) from your main luggage",
            "Confirm your destination's specific plug type and pack the right adapter",
          ]}
        />
      </ArticleSection>

      {/* ── 9. COMBINED ITINERARIES ────────────────────────────────────────── */}
      <ArticleSection
        id="combined-itineraries"
        eyebrow="Beach Plus Culture"
        heading="Packing for Combined Tropical and Cultural Itineraries"
      >
        <P>
          Most of the travel routes around Southeast Asia involve both relaxing
          on the beaches and exploring the culture, thus making it impossible to
          pack only with the beach in mind. Packing in such a way that separates
          your clothes into two categories of either &quot;for the beach or
          resort&quot; and &quot;for sightseeing at the cultural site&quot; will
          make it easy for you to access only the things you need each day.
        </P>

        <Figure
          src={`${IMG}/bamboo-forest-walk.jpg`}
          alt="A walkway running between towering stems of a bamboo forest"
        />
      </ArticleSection>

      {/* ── 10. LUGGAGE CONSIDERATIONS ─────────────────────────────────────── */}
      <ArticleSection
        id="luggage-considerations"
        eyebrow="The Bag Itself"
        heading="Luggage Considerations for Tropical Travel"
      >
        <BlogTable
          headers={["Luggage Type", "Best Suited For"]}
          rows={[
            [
              "Soft-sided luggage",
              "More flexible for varying pack sizes across a multi-stop itinerary",
            ],
            [
              "Hard-shell luggage",
              "Better protection for electronics and fragile souvenirs",
            ],
            [
              "A packable day bag",
              "Useful for daily excursions without carrying your full main luggage",
            ],
            [
              "Compression packing cubes",
              "Helps organise a mixed wardrobe (beachwear, modest outfits, layers) efficiently",
            ],
          ]}
        />

        <Figure
          src={`${IMG}/clifftop-headland.jpg`}
          alt="A green clifftop headland dropping to the sea below"
        />
      </ArticleSection>
    </BlogArticleLayout>
  );
}
