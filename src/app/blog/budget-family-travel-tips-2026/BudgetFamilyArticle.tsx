"use client";

import Link from "next/link";
import BlogArticleLayout, {
  ArticleSection,
  Bullets,
  Checklist,
  DataTable,
  Figure,
  FigurePair,
  P,
} from "@/src/components/BlogArticleLayout";

/**
 * Holiday Idea sheet, row 38 — "Budget Travel Tips for Families".
 *
 * Every sentence, table row and FAQ answer is the approved draft's own wording.
 * The draft carries no prices or percentages by design, so none are added here.
 * The sheet's note ("ties into School Holiday + group packages") is honoured by
 * linking out of the draft's own phrases about school-holiday windows and
 * package pricing rather than by bolting a promo block onto the article.
 */

const IMG = "/images/blog/budget-family-travel-tips-2026";

const linkClass =
  "font-semibold text-primary-dark underline decoration-primary/40 underline-offset-2 hover:text-primary transition-colors";

const SECTIONS = [
  { id: "booking-strategies", label: "Booking Strategies" },
  { id: "budget-destinations", label: "Budget Destinations" },
  { id: "family-accommodation", label: "Accommodation" },
  { id: "on-the-ground-costs", label: "On-the-Ground Costs" },
  { id: "package-deal-value", label: "Package Deal Value" },
  { id: "timing-your-trip", label: "Timing Your Trip" },
  { id: "setting-a-budget", label: "Setting a Budget" },
  { id: "age-considerations", label: "Age Considerations" },
  { id: "low-cost-activities", label: "Low-Cost Activities" },
  { id: "involving-children", label: "Involving Children" },
];

export default function BudgetFamilyArticle({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <BlogArticleLayout
      slug="budget-family-travel-tips-2026"
      category="Family Budget"
      title="Budget Travel Tips for Families: Getting More From Every Ringgit"
      lead="Family travel does not have to be either an exciting vacation or sticking to the budget there is a way to do both. It only takes some effort and planning to make your family travel budget go further without cutting back on experiences. In this article, we will explore the best methods for saving on family travel."
      heroImage={`${IMG}/family-banana-boat.jpg`}
      heroAlt="Four people laughing together on a banana boat ride"
      facts={["Family travel", "Southeast Asia focus", "9 min read"]}
      sections={SECTIONS}
      faqs={faqs}
      closing={{
        heading: "Plan an Affordable Family Holiday",
        body: "A well-planned package can stretch your family travel budget further than booking everything separately. Explore our School Holiday Deals and request a free, personalised quote today.",
        href: "/school-holiday-travel-deals-2026",
        linkLabel: "See School Holiday Deals",
      }}
    >
      <ArticleSection
        id="booking-strategies"
        eyebrow="Booking"
        heading="Booking Strategies That Save the Most Money"
      >
        <DataTable
          headers={["Strategy", "Why It Works"]}
          rows={[
            [
              <>
                Book outside peak{" "}
                <Link href="/school-holiday-travel-deals-2026" className={linkClass}>
                  school holiday
                </Link>{" "}
                windows when possible
              </>,
              "Flight and hotel pricing drop significantly outside fixed high-demand periods",
            ],
            [
              "Book bundled packages instead of individual components",
              <>
                <Link href="/group-incentive-travel-packages" className={linkClass}>
                  Group and package pricing
                </Link>{" "}
                is often more cost-efficient than separate bookings
              </>,
            ],
            [
              "Book several months ahead for fixed-date trips",
              "Early booking generally secures better pricing before demand-driven increases",
            ],
            [
              "Compare package inclusions carefully",
              "A slightly higher-priced package with more inclusions can be better value than a cheaper one with hidden extra costs",
            ],
          ]}
        />
        <Figure
          src={`${IMG}/krabi-limestone-beach.jpg`}
          alt="Limestone karsts rising above a pale sand beach"
        />
      </ArticleSection>

      <ArticleSection
        id="budget-destinations"
        eyebrow="Destinations"
        heading="Choosing Budget-Friendly Destinations"
      >
        <DataTable
          headers={["Destination Type", "Why It's Budget-Friendly"]}
          rows={[
            [
              "Short-haul Southeast Asia (Bali, Vietnam, Thailand)",
              "Lower flight costs and generally lower on-the-ground pricing",
            ],
            [
              "Off-peak timing for any destination",
              "Even premium destinations become more affordable outside peak season",
            ],
            [
              "Destinations with favourable currency exchange",
              "Stronger Ringgit value against local currency stretches your budget further",
            ],
            [
              "Destinations with all-inclusive resort options",
              "Bundled meals and activities reduce unpredictable daily spending",
            ],
          ]}
        />
        <FigurePair
          items={[
            {
              src: `${IMG}/wat-arun-river.jpg`,
              alt: "Riverside temple spires lit at dusk in Bangkok",
            },
            {
              src: `${IMG}/hill-town-high-street.jpg`,
              alt: "Pedestrian high street lined with shops in a hill town",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="family-accommodation"
        eyebrow="Where You Stay"
        heading="Accommodation Strategies for Families"
      >
        <Bullets
          items={[
            {
              label: "Family rooms or connecting rooms",
              body: "Often more cost-effective than booking two separate standard rooms",
            },
            {
              label: "Self-catering or apartment-style stays",
              body: "Reduces dining costs by allowing some meal preparation",
            },
            {
              label: "Consider location trade-offs",
              body: "A slightly less central hotel with good transport links can offer meaningful savings",
            },
            {
              label: "Check age-based free-stay policies",
              body: "Many hotels offer free or discounted stays for young children sharing a room with parents",
            },
          ]}
        />
        <Figure
          src={`${IMG}/family-hotel-room.jpg`}
          alt="Simple twin-bed hotel room with a window looking outside"
        />
      </ArticleSection>

      <ArticleSection
        id="on-the-ground-costs"
        eyebrow="Daily Spending"
        heading="Managing On-the-Ground Costs"
      >
        <DataTable
          headers={["Expense Category", "Money-Saving Approach"]}
          rows={[
            [
              "Meals",
              "Balance a few special dining experiences with more budget-friendly local eating",
            ],
            [
              "Activities",
              "Prioritise a few key paid attractions rather than trying to do everything",
            ],
            [
              "Local transport",
              "Research public transport options rather than defaulting to taxis for every trip",
            ],
            [
              "Souvenirs",
              "Set a per-person budget in advance to avoid impulse overspending",
            ],
          ]}
        />
        <Figure
          src={`${IMG}/local-market-stalls.jpg`}
          alt="Busy local market stalls hung with clothes and everyday goods"
        />
      </ArticleSection>

      <ArticleSection
        id="package-deal-value"
        eyebrow="Packages"
        heading="The Value of Package Deals for Families Specifically"
      >
        <P>
          <Link href="/group-incentive-travel-packages" className={linkClass}>
            Family vacation packages
          </Link>{" "}
          typically offer much greater value than arranging a vacation on an
          individual basis due to the fact that there are simply more elements
          involved in booking a family vacation. These include securing
          accommodation for the entire family as well as purchasing tickets for
          different activities and means of transportation.
        </P>
      </ArticleSection>

      <ArticleSection
        id="timing-your-trip"
        eyebrow="Timing"
        heading="Timing Your Trip for Maximum Value"
      >
        <DataTable
          headers={["Approach", "Trade-Off"]}
          rows={[
            [
              <>
                Travel during{" "}
                <Link href="/school-holiday-travel-deals-2026" className={linkClass}>
                  school holidays
                </Link>
              </>,
              "Higher cost, but aligns with children's actual availability",
            ],
            [
              "Travel during shoulder season (just before/after peak)",
              "Meaningful savings with only modest weather or crowd trade-offs",
            ],
            [
              "Travel well off-peak",
              "Maximum savings, but requires flexibility around school schedules",
            ],
          ]}
        />
        <P>
          For families with some flexibility, even shifting travel dates by a
          week or two outside the most intense peak demand window can produce
          noticeable savings.
        </P>
        <Figure
          src={`${IMG}/mughal-garden-terraces.jpg`}
          alt="Formal terraced garden with fountains running down the centre"
        />
      </ArticleSection>

      <ArticleSection
        id="setting-a-budget"
        eyebrow="Budgeting"
        heading="Setting a Realistic Family Travel Budget"
      >
        <Checklist
          items={[
            "Estimate total trip cost first, then work backward - Include flights, accommodation, activities, meals, and a contingency buffer, rather than budgeting only for flights and hotels.",
            "Build in a buffer for unplanned costs - Unexpected expenses (an extra activity, a taxi instead of walking in bad weather) are common and worth planning for.",
            "Decide your non-negotiables in advance - Knowing which experiences matter most helps you allocate more budget there and save elsewhere.",
            "Track spending during the trip - A simple daily check-in helps avoid budget surprises by the end of the holiday.",
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="age-considerations"
        eyebrow="By Age"
        heading="Age-Specific Considerations for Budget Family Travel"
      >
        <DataTable
          headers={["Age Group", "Budget Consideration"]}
          rows={[
            [
              "Infants and toddlers",
              "Often free or heavily discounted on flights and some attractions",
            ],
            [
              "Young children",
              "Family-rate attraction tickets and kids' menus can meaningfully reduce costs",
            ],
            [
              "Teenagers",
              "Full-price tickets typically apply; factor this into per-person budgeting",
            ],
          ]}
        />
        <Figure
          src={`${IMG}/parent-child-temple-gate.jpg`}
          alt="A parent and small child sitting together in a stone temple gateway"
        />
      </ArticleSection>

      <ArticleSection
        id="low-cost-activities"
        eyebrow="Free Days"
        heading="Free and Low-Cost Activities Worth Prioritising"
      >
        <P>
          Traveling does not always require having substantial funds at hand.
          There are a number of locations with valuable opportunities to engage
          in various activities for free or very little money, including beaches,
          markets, historically interesting cities with walking trails and
          cultural attractions, that can be the core of your budget tour plan,
          with the rest of your time spent on paid tours.
        </P>
        <DataTable
          headers={["Low-Cost Activity Type", "Example"]}
          rows={[
            [
              "Public beaches",
              "Widely available and free at most beach destinations",
            ],
            [
              "Local markets",
              "Cultural immersion and affordable local food, often more interesting than tourist restaurants",
            ],
            [
              "Walking tours (free or low-cost)",
              "Many cities offer free or donation-based guided walking tours",
            ],
            [
              "Public parks and gardens",
              "A relaxing, budget-friendly break between paid activities",
            ],
          ]}
        />
        <FigurePair
          items={[
            {
              src: `${IMG}/public-beach-umbrella.jpg`,
              alt: "A parasol and empty loungers on a quiet public beach",
            },
            {
              src: `${IMG}/forest-waterfall.jpg`,
              alt: "A waterfall falling through dense green forest",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="involving-children"
        eyebrow="Kids"
        heading="Involving Children in Budget Planning"
      >
        <P>
          In cases where there are older children in the family, getting them
          involved in the process of budgeting in some areas of the travel can
          not only prove to be a good method for managing funds, but will also be
          an effective way of teaching them how to budget. The advantage of such
          a method is that the children will not ask for extra spending during
          the course of travel since they know what their budget is.
        </P>
      </ArticleSection>
    </BlogArticleLayout>
  );
}
