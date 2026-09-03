"use client";

import Link from "next/link";
import BlogArticleLayout, {
  ArticleSection,
  Bullets,
  Callout,
  Checklist,
  DataTable,
  FigurePair,
  P,
} from "@/src/components/blog/BlogArticleLayout";

/**
 * "Solo vs. Group Travel: Which Suits Your Next Trip?" — Holiday Idea sheet row 41.
 *
 * Every sentence, table row and FAQ answer is copied verbatim from the approved
 * draft in content-document/travel-blog/. Only the section eyebrows, the facts
 * chips, the on-this-page labels and the callout title are written here, because
 * the shell needs them and the draft has no equivalent.
 *
 * The sheet asks for a soft sell toward the Group & Incentive Travel page. The
 * comparison itself stays two-sided: the pull lives in the closing CTA and in a
 * single in-prose link, placed where the draft is already talking about private
 * and small-group formats.
 */

const IMG = "/images/blog/solo-vs-group-travel-guide";

const SECTIONS = [
  { id: "core-trade-off", label: "The Core Trade-Off" },
  { id: "cost-comparison", label: "Cost Comparison" },
  { id: "when-solo-works", label: "When Solo Works" },
  { id: "when-group-works", label: "When Group Works" },
  { id: "safety-and-support", label: "Safety and Support" },
  { id: "middle-ground", label: "A Middle Ground" },
  { id: "questions-to-ask", label: "Questions to Ask" },
  { id: "solo-and-group-over-time", label: "Not Mutually Exclusive" },
  { id: "how-formats-evolved", label: "How Formats Evolved" },
];

export default function SoloVsGroupArticle({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <BlogArticleLayout
      slug="solo-vs-group-travel-guide"
      category="Travel Styles"
      title="Solo vs. Group Travel: Which Suits Your Next Trip?"
      lead="It is not just a question of personal choice whether one decides to travel alone or with a group, because traveling either way makes a difference in how costly, logistical, safe, and enjoyable the journey will be. The following guide evaluates both forms of traveling objectively in terms of what really matters."
      heroImage={`${IMG}/group-dolphin-cruise.jpg`}
      heroAlt="A boatful of travellers watching a dolphin leap clear of the water beside them"
      facts={["Solo vs group", "Cost · safety · flexibility", "8 min read"]}
      sections={SECTIONS}
      faqs={faqs}
      closing={{
        heading: "Find the Right Travel Format for You",
        body: "Whether you want full independence or the support of a well-planned group itinerary, there's a format that fits your travel style. Explore our Group & Incentive Travel options and request a free, personalised quote today.",
        href: "/group-incentive-travel-packages",
        linkLabel: "See Group Travel Options",
      }}
    >
      <ArticleSection
        id="core-trade-off"
        eyebrow="Side by Side"
        heading="The Core Trade-Off"
      >
        <DataTable
          headers={["Factor", "Solo Travel", "Group Travel"]}
          rows={[
            [
              "Flexibility",
              "Complete control over itinerary and pace",
              "Fixed schedule, shared decision-making",
            ],
            [
              "Cost",
              "Often higher per-person costs (no shared rates)",
              "Group rates typically reduce per-person costs",
            ],
            [
              "Social experience",
              "Independent, self-directed",
              "Built-in social connection with fellow travellers",
            ],
            [
              "Safety and support",
              "Requires more self-reliance",
              "Structured support and shared problem-solving",
            ],
            [
              "Planning effort",
              "Full research burden on the individual",
              "Itinerary and logistics largely pre-planned",
            ],
            [
              "Best for",
              "Highly independent travellers, specific personal goals",
              "First-time destinations, travellers wanting less planning burden",
            ],
          ]}
        />
        <FigurePair
          items={[
            {
              src: `${IMG}/solo-cliff-viewpoint.jpg`,
              alt: "A lone traveller sitting on a coastal clifftop, looking out over the sea",
            },
            {
              src: `${IMG}/friends-colonial-street.jpg`,
              alt: "A group of friends jumping together for a photo on a colonial street",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="cost-comparison"
        eyebrow="The Numbers"
        heading="Cost Comparison: Where the Numbers Actually Differ"
      >
        <DataTable
          headers={["Cost Category", "Solo Travel Impact", "Group Travel Impact"]}
          rows={[
            [
              "Accommodation",
              "Often pays full single-room rate",
              "Group rates or shared arrangements reduce cost",
            ],
            [
              "Transport",
              "No bundled group discounts",
              "Coach/transfer costs shared and negotiated in bulk",
            ],
            [
              "Activities and entrance fees",
              "Standard individual pricing",
              "Group booking discounts often apply",
            ],
            [
              "Guides",
              "Full cost if hiring privately",
              "Shared cost across the group",
            ],
          ]}
        />
        <P>
          {"While group travel may not necessarily be cheaper, depending highly on the trip involved, there is no doubt that the structure of group travel is cheaper than solo travel when it comes to high accommodation and transport costs."}
        </P>
        <FigurePair
          items={[
            {
              src: `${IMG}/solo-meadow-walk.jpg`,
              alt: "A lone traveller crossing an open mountain meadow on foot",
            },
            {
              src: `${IMG}/london-open-top-bus.jpg`,
              alt: "An open-top sightseeing bus full of passengers passing a city landmark",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="when-solo-works"
        eyebrow="The Case for Solo"
        heading="When Solo Travel Makes the Most Sense"
      >
        <Checklist
          items={[
            "You have a highly specific itinerary or personal goal that doesn't fit a standard group format",
            "You genuinely enjoy the independence of making every decision yourself",
            "You're revisiting a destination you already know well",
            "Your travel dates and pace need to remain fully flexible",
            "You're comfortable managing logistics, problem-solving, and safety considerations independently",
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="when-group-works"
        eyebrow="The Case for Group"
        heading="When Group Travel Makes the Most Sense"
      >
        <Checklist
          items={[
            "You're visiting an unfamiliar destination for the first time and want structured guidance",
            "You want to minimise the time and effort spent on research and planning",
            "You value built-in social connection during your trip",
            "You're travelling to a destination with genuine logistical complexity (multi-country routes, limited English infrastructure)",
            "You want the cost efficiencies of shared group rates on accommodation and transport",
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="safety-and-support"
        eyebrow="When Things Go Wrong"
        heading="Safety and Support Considerations"
      >
        <DataTable
          headers={["Situation", "Solo Travel", "Group Travel"]}
          rows={[
            [
              "Flight delay or booking issue",
              "Self-managed, though a travel agent can still assist remotely",
              "Group leader or agency point of contact typically handles coordination",
            ],
            [
              "Medical emergency",
              "Requires independent navigation of local healthcare systems",
              "Group support and established emergency protocols available",
            ],
            [
              "Getting lost or disoriented",
              "Full reliance on personal research and navigation",
              "Structured itinerary reduces this risk significantly",
            ],
            [
              "Unfamiliar cultural norms",
              "Requires independent research",
              "Guide typically provides real-time cultural context",
            ],
          ]}
        />
        <FigurePair
          items={[
            {
              src: `${IMG}/zipline-forest.jpg`,
              alt: "A zipline rider crossing high above a forest canopy alone",
            },
            {
              src: `${IMG}/glacier-coach-excursion.jpg`,
              alt: "Travellers stepping off an excursion coach at a glacier viewpoint",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="middle-ground"
        eyebrow="Between the Two"
        heading="A Middle Ground: Semi-Independent Group Travel"
      >
        <Callout title="Not every group tour is a big coach tour">
          <p>
            {"What needs to be considered is that “group travel” is not always necessarily the big bus tour type that comes to mind. In many modern packages, even those of "}
            <Link
              href="/group-incentive-travel-packages"
              className="text-white underline decoration-primary underline-offset-4 hover:text-primary transition-colors"
            >
              {"private and smaller group kinds"}
            </Link>
            {", there exists something of a perfect compromise, with the logistical and organizational benefits of group travel but without the big group social element that certain travelers would prefer to avoid."}
          </p>
        </Callout>
        <DataTable
          headers={["Travel Format", "Group Size", "Flexibility Level"]}
          rows={[
            [
              "Large coach group tour",
              "20–40+ travellers",
              "Lower; fixed schedule for the whole group",
            ],
            [
              "Small group tour",
              "6–15 travellers",
              "Moderate; some flexibility within a shared itinerary",
            ],
            [
              "Private family/small group",
              "2–6 travellers",
              "High; itinerary built specifically around your group",
            ],
            ["Fully independent (solo)", "1 traveller", "Highest; complete control"],
          ]}
        />
        <FigurePair
          items={[
            {
              src: `${IMG}/private-garden-swing.jpg`,
              alt: "A couple sharing a private garden swing on their own itinerary",
            },
            {
              src: `${IMG}/group-desert-gathering.jpg`,
              alt: "A group of travellers sharing tea around a table set up in the desert",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="questions-to-ask"
        eyebrow="Your Decision"
        heading="Questions to Ask Yourself Before Choosing"
      >
        <Bullets
          items={[
            "How comfortable am I with independent problem-solving in an unfamiliar destination?",
            "Do I want social interaction built into my trip, or is solitude part of the appeal?",
            "How much time and energy do I realistically want to spend on trip planning?",
            "Does my destination have logistical complexity that would benefit from structured support?",
            "What's my priority: maximum flexibility, or maximum ease and cost efficiency?",
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="solo-and-group-over-time"
        eyebrow="Trip by Trip"
        heading="Solo and Group Travel Aren't Mutually Exclusive Over Time"
      >
        <P>
          {"Many experienced travellers move between solo and group formats depending on the specific trip, rather than committing permanently to one style. A first visit to a logistically complex destination might warrant a group tour for ease and structure, while a return visit to a now-familiar destination might be approached solo for greater flexibility and a more personal pace. Thinking of this as a per-trip decision, rather than a fixed personal identity, often leads to a better match between travel style and destination."}
        </P>
      </ArticleSection>

      <ArticleSection
        id="how-formats-evolved"
        eyebrow="What's Changed"
        heading="How Group Travel Formats Have Evolved"
      >
        <P>
          {"Group travel has evolved greatly from the image most individuals have of this form of travel; that of a huge, inflexible coach tour, which is what comes to mind when one hears the phrase. Contemporary versions of group or semigroup travel provide greater flexibility in terms of free time, small group size for a more personal experience, and participation in itinerary planning compared to conventional forms of group travel in past years."}
        </P>
      </ArticleSection>
    </BlogArticleLayout>
  );
}
