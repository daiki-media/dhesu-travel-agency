"use client";

import Link from "next/link";
import BlogArticleLayout, {
  ArticleSection,
  Bullets,
  Callout,
  DataTable,
  Figure,
  FigurePair,
  H3,
  P,
} from "@/src/components/blog/BlogArticleLayout";

/**
 * Blog article — "Visa Requirements for Malaysian Travellers".
 *
 * Holiday Idea sheet row 37 asks for a hub page, so the destination table is
 * the centrepiece: it is the thing a reader arrives for, and each destination
 * that has a guide on the site links straight to it.
 *
 * Every sentence, table row and FAQ answer is copied verbatim from
 * content-document/travel-blog/. Visa rules are legally sensitive — nothing
 * here is paraphrased, updated or added, and the draft's own hedging is left
 * exactly as written.
 */

const SECTIONS = [
  { id: "visa-categories", label: "Visa Categories" },
  { id: "destination-snapshot", label: "By Destination" },
  { id: "why-rules-change", label: "Why Rules Change" },
  { id: "schengen-visa", label: "Schengen Visa" },
  { id: "common-mistakes", label: "Common Mistakes" },
  { id: "transit-visas", label: "Transit Visas" },
  { id: "after-booking", label: "After You Book" },
];

/**
 * The destination column of the snapshot table.
 *
 * Only destinations that actually appear in the draft's table are listed, and
 * only those with a published guide carry a link — the UK has none, so it is
 * rendered as plain text.
 */
const GUIDE_LINKS: Record<string, string> = {
  "Indonesia (Bali)": "/tours/indonesia/bali-holiday-travel-guide-2026",
  Thailand: "/tours/thailand/phuket-krabi-holiday-guide-2026",
  Vietnam: "/tours/vietnam/vietnam-tour-travel-guide-2026",
  Cambodia: "/tours/cambodia/cambodia-tour-travel-guide-2026",
  China: "/tours/china/china-tour-travel-guide-2026",
  India: "/tours/india/india-tour-travel-guide-2026",
  "Sri Lanka": "/tours/sri-lanka/sri-lanka-tour-travel-guide-2026",
  Nepal: "/tours/nepal/nepal-tour-travel-guide-2026",
  "UAE (Dubai)": "/tours/dubai/dubai-holiday-travel-guide-2026",
  Australia: "/tours/australia/australia-holiday-travel-guide-2026",
  "Schengen Europe": "/tours/europe/europe-tour-travel-guide-2026",
  "Hong Kong": "/tours/hong-kong/hong-kong-tour-travel-guide-2026",
  Myanmar: "/tours/myanmar/myanmar-tour-travel-guide-2026",
};

function Destination({ name }: { name: string }) {
  const href = GUIDE_LINKS[name];
  if (!href) return <>{name}</>;
  return (
    <Link
      href={href}
      className="underline decoration-primary/40 underline-offset-4 hover:text-primary-dark transition-colors"
    >
      {name}
    </Link>
  );
}

/** Destination, category and note — copied row for row from the draft. */
const DESTINATIONS: [string, string, string][] = [
  [
    "Indonesia (Bali)",
    "Visa-free for short tourist stays",
    "Standard ASEAN reciprocal arrangement",
  ],
  [
    "Thailand",
    "Visa-free for short tourist stays",
    "Standard ASEAN reciprocal arrangement",
  ],
  [
    "Vietnam",
    "Visa-free for short tourist stays",
    "Confirm permitted stay duration before booking longer trips",
  ],
  [
    "Cambodia",
    "E-visa or visa on arrival",
    "Requires advance application or arrival processing",
  ],
  [
    "China",
    "Visa exemption arrangements for short stays",
    "Confirm current conditions, as policy has evolved",
  ],
  ["India", "E-visa required", "Apply online in advance of travel"],
  [
    "Sri Lanka",
    "Electronic Travel Authorization (ETA) required",
    "Apply online before travel",
  ],
  ["Nepal", "Visa on arrival or e-visa", "Both options generally available"],
  [
    "UAE (Dubai)",
    "Visa-free or visa on arrival for short stays",
    "Confirm specific conditions for your passport",
  ],
  [
    "Australia",
    "Electronic Travel Authority (ETA) required",
    "Apply online before travel",
  ],
  [
    "Schengen Europe",
    "Schengen visa required",
    "Apply through the embassy of your main destination country",
  ],
  [
    "UK",
    "Visa required (or ETA, depending on current policy)",
    "Not part of the Schengen Area; separate process",
  ],
  [
    "Hong Kong",
    "Visa-free for short tourist stays",
    "Standard short-stay tourist arrangement",
  ],
  [
    "Myanmar",
    "Visa requirements have varied; confirm current status",
    "Check current travel advisories given evolving conditions",
  ],
];

export default function VisaGuideArticle({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <BlogArticleLayout
      slug="malaysia-travel-visa-guide-2026"
      category="Travel Admin"
      title="Visa Requirements for Malaysian Travellers: A Practical Guide by Destination"
      lead="From the numerous questions asked by individuals when planning for travel, one of the most commonly asked is a very simple one; will I need a visa? The thing that needs to be noted about visa requirements is that they are subject to change without any notice, hence making the information given below a general guide."
      heroImage="/images/blog/malaysia-travel-visa-guide-2026/border-flag-ceremony.jpg"
      heroAlt="Uniformed border guards and national flags at a land border crossing ceremony"
      facts={["14 destinations", "Schengen included", "9 min read"]}
      sections={SECTIONS}
      faqs={faqs}
      closing={{
        heading: "Get Current Visa Guidance for Your Trip",
        body: "Visa requirements can change, and getting it wrong can mean missing your trip entirely. Speak with a consultant who can confirm current requirements for your specific destination and travel dates.",
        href: "/contact",
        linkLabel: "Speak to a Consultant",
      }}
    >
      <ArticleSection
        id="visa-categories"
        eyebrow="The Four Types"
        heading="General Visa Categories Malaysian Travellers Encounter"
      >
        <DataTable
          headers={["Category", "What It Means"]}
          rows={[
            [
              "Visa-free entry",
              "No visa required for short tourist stays, typically under a set number of days",
            ],
            [
              "Visa on arrival",
              "A visa is issued at the port of entry, usually requiring a fee and some documentation",
            ],
            [
              "E-visa / Electronic Travel Authority",
              "An online application completed before travel, often faster than a traditional embassy visa",
            ],
            [
              "Traditional embassy visa",
              "Requires an in-person or documented application process before travel, sometimes with an interview",
            ],
          ]}
        />
        <Figure
          src="/images/blog/malaysia-travel-visa-guide-2026/uae-heritage-village.jpg"
          alt="Sand-coloured gateway of a heritage village in the United Arab Emirates"
          caption="A heritage village gateway in the United Arab Emirates."
        />
      </ArticleSection>

      <ArticleSection
        id="destination-snapshot"
        eyebrow="Destination Hub"
        heading="Visa Snapshot by Popular Destination"
      >
        <FigurePair
          items={[
            {
              src: "/images/blog/malaysia-travel-visa-guide-2026/bangkok-grand-palace.jpg",
              alt: "Gilded spires of the Grand Palace complex in Bangkok, Thailand",
            },
            {
              src: "/images/blog/malaysia-travel-visa-guide-2026/agra-fort-gateway.jpg",
              alt: "Red sandstone gateway of the Mughal-era Agra Fort in India",
            },
          ]}
        />
        <DataTable
          headers={[
            "Destination",
            "General Category (confirm before booking)",
            "Notes",
          ]}
          rows={DESTINATIONS.map(([destination, category, notes]) => [
            <Destination key={destination} name={destination} />,
            category,
            notes,
          ])}
          caption="A general guide only — requirements are subject to change without any notice. Destination names link to our travel guide where one exists."
        />
        <FigurePair
          items={[
            {
              src: "/images/blog/malaysia-travel-visa-guide-2026/kandy-temple-tooth.jpg",
              alt: "Visitors outside the white Temple of the Sacred Tooth Relic in Kandy, Sri Lanka",
            },
            {
              src: "/images/blog/malaysia-travel-visa-guide-2026/swayambhu-stupa.jpg",
              alt: "Prayer flags strung from the Swayambhunath stupa in Kathmandu, Nepal",
            },
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="why-rules-change"
        eyebrow="Behind The Policy"
        heading="Why Visa Information Changes and Why You Should Always Verify"
      >
        <P>
          The visa policies may differ from government to government and there
          could be various reasons behind such policies like the bilateral
          relations between two nations, security issues, tourism promotion
          policies or even simply because this particular country reciprocates
          the visa policy of Malaysia towards its citizens.
        </P>
        <P>
          Traveling on information which used to be relevant a year or two back
          but is no longer relevant will result in the traveler being denied
          boarding into the country. One of the most practical reasons for
          travelers to opt for a travel agent would be that the consultant
          verifies visa requirements before making the bookings.
        </P>
        <Figure
          src="/images/blog/malaysia-travel-visa-guide-2026/harbin-central-street.jpg"
          alt="European-style shopfronts along Central Street in Harbin, China"
          caption="Central Street in Harbin, China."
        />
      </ArticleSection>

      <ArticleSection
        id="schengen-visa"
        eyebrow="Europe"
        heading="The Schengen Visa: What Malaysian Travellers Need to Know"
      >
        <P>
          Because European trips typically span multiple countries, the Schengen
          visa deserves specific attention.
        </P>
        <DataTable
          headers={["Schengen Visa Basics", "Details"]}
          rows={[
            [
              "Coverage",
              "Travel across all Schengen member countries on a single visa",
            ],
            [
              "Typical stay limit",
              "Up to 90 days within any 180-day period for tourist visits",
            ],
            [
              "Application point",
              "Embassy or consulate of your main destination or first port of entry",
            ],
            [
              "Processing time",
              "Apply several weeks ahead of travel to allow adequate processing",
            ],
            [
              "Non-Schengen exceptions",
              "The UK and Ireland are not part of the Schengen Area and require separate consideration",
            ],
          ]}
        />
        <Figure
          src="/images/blog/malaysia-travel-visa-guide-2026/swiss-lake-steamer.jpg"
          alt="A lake steamer passing an alpine village in Switzerland"
          caption="A lake steamer on a Swiss alpine lake."
        />

        <H3>Practical Steps for Managing Visa Requirements</H3>
        <Bullets
          items={[
            {
              label: "Check requirements as early as possible",
              body: "Ideally as soon as you're seriously considering a destination, not after booking flights.",
            },
            {
              label: "Prepare documentation in advance",
              body: "E-visas and embassy visas often require specific documents (photos, bank statements, itinerary proof) that take time to gather.",
            },
            {
              label: "Build in processing time buffer",
              body: "Don't assume the fastest-case processing time; delays happen, especially during peak travel seasons.",
            },
            {
              label: "Reconfirm close to your travel date",
              body: "Especially for destinations where policy has changed in recent years.",
            },
            {
              label: "Keep copies of visa approvals accessible",
              body: "Both digital and printed, in case of technical issues at check-in or immigration.",
            },
          ]}
        />
        <Figure
          src="/images/blog/malaysia-travel-visa-guide-2026/tower-bridge-london.jpg"
          alt="Tower Bridge spanning the River Thames in London"
          caption="Tower Bridge, London — outside the Schengen Area."
        />
      </ArticleSection>

      <ArticleSection
        id="common-mistakes"
        eyebrow="Avoid These"
        heading="Common Visa Mistakes Travellers Make"
      >
        <Bullets
          items={[
            "Assuming visa-free access applies for any length of stay, when most arrangements have a maximum duration",
            "Not checking passport validity requirements (many countries require 6 months of validity beyond your travel dates)",
            "Applying for a Schengen visa through the wrong country's embassy when visiting multiple Schengen countries",
            "Leaving e-visa applications until the last minute, risking processing delays",
            "Not accounting for connecting flights through countries with their own separate transit visa requirements",
          ]}
        />
      </ArticleSection>

      <ArticleSection
        id="transit-visas"
        eyebrow="Connections"
        heading="Transit Visa Considerations"
      >
        <P>
          {
            "One of the most overlooked aspects of visa processing includes flights that have connections via another country. Certain transit flights, especially those which might involve a longer stop at the airport, may necessitate another visa for the specific transit country based on your country of origin. It’s always a good idea to do research in case you have a transit country in your route plan which isn’t necessarily your destination country."
          }
        </P>
        <Figure
          src="/images/blog/malaysia-travel-visa-guide-2026/busselton-jetty.jpg"
          alt="The long timber Busselton Jetty stretching over turquoise water in Western Australia"
          caption="Busselton Jetty, Western Australia."
        />
      </ArticleSection>

      <ArticleSection
        id="after-booking"
        eyebrow="Before You Fly"
        heading="What Happens If Visa Requirements Change After You've Booked"
      >
        <Callout title="Reconfirm close to departure, not just at booking">
          <p>
            {
              "Because visa policy is set independently by each country's government, it's technically possible for requirements to change between the time you book your trip and your actual travel date. While this is relatively uncommon for well-established travel routes, it underscores the value of reconfirming requirements close to departure rather than relying solely on information gathered at the time of booking, particularly for destinations where policy has shown more volatility in recent years."
            }
          </p>
        </Callout>
      </ArticleSection>
    </BlogArticleLayout>
  );
}
