"use client";

import Link from "next/link";
import BlogArticleLayout, {
  ArticleSection,
  ARTICLE_LINK,
  BlogTable,
  Bullets,
  Figure,
  FigurePair,
  LEAD_LINK,
  P,
} from "@/src/components/blog/BlogArticleLayout";

/**
 * "Best Time to Visit Bali: A Month-by-Month Guide" — Holiday Idea sheet row 36.
 *
 * Every sentence, table row and FAQ answer is copied verbatim from the approved
 * draft in content-document/travel-blog/. Only the section eyebrows, the facts
 * chips and the on-this-page labels are written here, because the shell needs
 * them and the draft has no equivalent.
 */

const IMG = "/images/blog/best-time-to-visit-bali-2026";

// The draft's own internal links. The .docx points at the old holidayidea.com.my
// site: /BALI/ for the three Bali anchors, and the Thailand and Vietnam search
// listings for the comparison table.
const BALI = "/tours/indonesia/bali";
const THAILAND = "/tours/thailand";
const VIETNAM = "/tours/vietnam";

const SECTIONS = [
  { id: "two-main-seasons", label: "Two Main Seasons" },
  { id: "month-by-month", label: "Month by Month" },
  { id: "choosing-timing", label: "Choosing Your Timing" },
  { id: "rainy-season", label: "The Rainy Season" },
  { id: "school-holidays", label: "School Holidays" },
  { id: "regional-weather", label: "Weather Across Bali" },
  { id: "nearby-destinations", label: "Nearby Destinations" },
  { id: "bali-experiences", label: "Planning Experiences" },
];

export default function BestTimeBaliArticle({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <BlogArticleLayout
      slug="best-time-to-visit-bali-2026"
      category="Destination Timing"
      title="Best Time to Visit Bali From Malaysia: Month-by-Month Guide"
      lead={
        <>
          &ldquo;The ideal time to visit Bali&rdquo; is not one size fits all, it really
          does depend on whether you value sunny skies, crowd avoidance, or budget
          friendliness most highly. This guide will help you to understand the ins and outs
          of{" "}
          <Link href={BALI} className={LEAD_LINK}>
            Bali&rsquo;s
          </Link>{" "}
          weather and tourist seasons on a month-by-month basis.
        </>
      }
      heroImage={`${IMG}/uluwatu-coastline.jpg`}
      heroAlt="Clifftop coastline at Uluwatu in southern Bali, with surf breaking against the rocks below"
      facts={["Bali · Indonesia", "Dry season: Apr–Oct", "8 min read"]}
      sections={SECTIONS}
      faqs={faqs}
      closing={{
        heading: "Plan Your Bali Trip at the Right Time",
        body: "Whether you're chasing sunshine or better pricing, timing your Bali trip well makes a real difference. Explore our Bali holiday packages and request a free, personalised quote today.",
        href: "/tours/indonesia/bali-holiday-travel-guide-2026",
        linkLabel: "See Bali Holiday Packages",
      }}
    >
      <ArticleSection
        id="two-main-seasons"
        eyebrow="The Basics"
        heading="Bali's Two Main Seasons"
      >
        <BlogTable
          headers={["Season", "Months", "General Conditions"]}
          rows={[
            [
              "Dry Season",
              "April–October",
              "Lower rainfall, more consistent sunshine, higher demand",
            ],
            [
              "Wet Season",
              "November–March",
              "Higher rainfall, more humidity, generally lower prices and crowds",
            ],
          ]}
        />
        <FigurePair
          items={[
            {
              src: `${IMG}/dry-season-beach-boats.jpg`,
              alt: "Boats and jet skis lined up on a bright Bali beach under a clear sky",
            },
            {
              src: `${IMG}/jukung-beach-morning.jpg`,
              alt: "A traditional Balinese jukung outrigger boat resting on a quiet beach in the morning",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="month-by-month"
        eyebrow="The Calendar"
        heading="Month-by-Month Breakdown"
      >
        <BlogTable
          headers={["Month", "Weather", "Crowd Level", "Notes"]}
          rows={[
            [
              "January",
              "Wet, humid",
              "Moderate",
              "Rain typically comes in short, intense bursts rather than all-day downpours",
            ],
            [
              "February",
              "Wet, humid",
              "Moderate",
              "Similar to January; still a reasonable time for flexible travellers",
            ],
            [
              "March",
              "Transitioning to dry",
              "Moderate",
              "A good shoulder-season option with improving weather",
            ],
            [
              "April",
              "Dry season begins",
              "Moderate–High",
              "Weather improving; good balance of conditions and crowds",
            ],
            [
              "May",
              "Dry, comfortable",
              "High",
              "One of the most favourable months overall",
            ],
            [
              "June",
              "Dry, comfortable",
              "High",
              "School holiday season drives up demand and pricing",
            ],
            [
              "July",
              "Dry, peak season",
              "Very High",
              "Peak international tourist season; book well ahead",
            ],
            [
              "August",
              "Dry, peak season",
              "Very High",
              "Similar to July; highest demand and pricing of the year",
            ],
            [
              "September",
              "Dry, comfortable",
              "High",
              "Weather remains favourable with slightly reduced crowds",
            ],
            [
              "October",
              "Dry season ending",
              "Moderate–High",
              "Good weather with a gradual reduction in peak-season crowds",
            ],
            [
              "November",
              "Wet season begins",
              "Moderate",
              "Rain becomes more frequent; still travelable with flexibility",
            ],
            [
              "December",
              "Wet, festive season",
              "High",
              "Year-end holiday demand drives up crowds and pricing despite the rain",
            ],
          ]}
        />
        <Figure
          src={`${IMG}/tegallalang-rice-terrace.jpg`}
          alt="Green terraced rice fields stepping down a hillside at Tegallalang in central Bali"
        />
      </ArticleSection>

      <ArticleSection
        id="choosing-timing"
        eyebrow="Your Priorities"
        heading="Choosing Timing Based on What Matters Most to You"
      >
        <BlogTable
          headers={["Priority", "Recommended Timing"]}
          rows={[
            ["Guaranteed dry weather", "May, June, or September"],
            [
              "Avoiding the biggest crowds",
              "April, October, or shoulder months in the wet season (November, March)",
            ],
            [
              "Best overall value/pricing",
              "Wet season months outside of December (January–March, November)",
            ],
            [
              "Willing to accept some rain for lower prices",
              "November–March, excluding the December peak",
            ],
          ]}
        />
        <Figure
          src={`${IMG}/pandawa-beach-swings.jpg`}
          alt="Beach swings and parasols set out on the sand at Pantai Pandawa in southern Bali"
        />
      </ArticleSection>

      <ArticleSection
        id="rainy-season"
        eyebrow="Rainfall"
        heading="Understanding Bali's Rainy Season Realistically"
      >
        <P>
          {"A common misconception is that Bali's rainy season means constant, trip-ruining rain. In practice, rain during the wet season tends to arrive in shorter, more intense bursts, often in the afternoon or evening, rather than continuous all-day downpours. This means sightseeing, beach time, and outdoor activities are often still very feasible with some flexible scheduling around the day's weather patterns."}
        </P>
        <Figure
          src={`${IMG}/jungle-coffee-tasting.jpg`}
          alt="A tasting flight of small coffee and tea cups laid out on a table at a jungle plantation in Bali"
        />
      </ArticleSection>

      <ArticleSection
        id="school-holidays"
        eyebrow="Peak Demand"
        heading="School Holiday Considerations"
      >
        <P>
          {"Because Bali is such a popular destination for Malaysian families, school holiday periods (particularly the mid-year and year-end breaks) see significantly higher demand regardless of the general weather season. If your travel dates are fixed around a school holiday period, it's worth booking further in advance, since these windows combine peak season pricing with peak demand pricing simultaneously."}
        </P>
        <Figure
          src={`${IMG}/kayaking-clear-water.jpg`}
          alt="Two people kayaking side by side in clear turquoise water off the Bali coast"
        />
      </ArticleSection>

      <ArticleSection
        id="regional-weather"
        eyebrow="Geography"
        heading="Regional Weather Variation Within Bali"
      >
        <BlogTable
          headers={["Area", "Typical Climate Character"]}
          rows={[
            [
              "Southern beach areas (Kuta, Seminyak, Uluwatu)",
              "Generally drier and hotter than the highlands",
            ],
            [
              "Ubud and central highlands",
              "Cooler, with more frequent rainfall due to elevation",
            ],
            [
              "Northern coast",
              "Often drier than the south, with less tourist infrastructure",
            ],
          ]}
        />
        <P>
          If your itinerary spans{" "}
          <Link href={BALI} className={ARTICLE_LINK}>
            multiple areas of Bali
          </Link>
          , it&rsquo;s worth noting that weather can genuinely differ between the coast and
          the highlands on the same day.
        </P>
        <FigurePair
          items={[
            {
              src: `${IMG}/batur-crater-lake.jpg`,
              alt: "The crater lake below Mount Batur seen from the highlands of northern Bali",
            },
            {
              src: `${IMG}/ubud-palace-temple.jpg`,
              alt: "A carved Balinese temple gateway at the palace in Ubud",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="nearby-destinations"
        eyebrow="Comparison"
        heading="How Bali's Timing Compares to Neighbouring Destinations"
      >
        <BlogTable
          headers={["Destination", "Dry Season Timing", "How It Compares to Bali"]}
          rows={[
            [
              <Link key="bali" href={BALI} className={ARTICLE_LINK}>
                Bali
              </Link>,
              "April–October",
              "Baseline for comparison",
            ],
            [
              <Link key="thailand" href={THAILAND} className={ARTICLE_LINK}>
                Thailand (Phuket/Krabi)
              </Link>,
              "November–April",
              "Roughly opposite pattern; good alternative during Bali's wet season",
            ],
            [
              <Link key="vietnam" href={VIETNAM} className={ARTICLE_LINK}>
                Vietnam
              </Link>,
              "Varies significantly by region",
              "North and South Vietnam have different optimal windows",
            ],
          ]}
        />
        <P>
          {"This contrast is useful for travellers with flexible destination preferences, if Bali's weather doesn't align with your available travel dates, a destination with an opposite seasonal pattern, like Thailand, might be a better-timed alternative."}
        </P>
      </ArticleSection>

      <ArticleSection
        id="bali-experiences"
        eyebrow="Activities"
        heading="Planning Around Specific Bali Experiences"
      >
        <P>
          {"Certain Bali experiences are more weather-dependent than others, which is worth factoring into your timing decision if a specific activity is a priority."}
        </P>
        <Bullets
          items={[
            {
              label: "Sunset cruises and beach days",
              body: "Best enjoyed during the dry season for reliably clear skies",
            },
            {
              label: "Temple and cultural sightseeing",
              body: "Generally feasible year-round, with less weather sensitivity",
            },
            {
              label: "ATV and outdoor adventure activities",
              body: "Best planned during drier months to avoid muddy or disrupted conditions",
            },
            {
              label: "Spa and wellness-focused stays",
              body: "Largely weather-independent, making them well suited to wet season travel",
            },
          ]}
        />
        <Figure
          src={`${IMG}/bali-sunset-ceremony.jpg`}
          alt="A beachfront ceremony lit by lanterns as the sun sets over the sea in Bali"
        />
      </ArticleSection>
    </BlogArticleLayout>
  );
}
