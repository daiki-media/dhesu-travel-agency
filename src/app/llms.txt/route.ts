import { company } from "@/src/data/company";
import { destinations } from "@/src/data/destinations";
import { SITE_URL } from "@/src/data/site";
import { getBlogList } from "@/src/lib/cms";

/**
 * /llms.txt — a plain-text brief for AI agents and LLM-backed browsers.
 *
 * The emerging llms.txt convention gives an agent one small, unambiguous file
 * describing what the site is and where the useful pages live, instead of
 * making it infer that from rendered marketing HTML. Generated from the same
 * company/destination data the pages use, so it cannot drift out of sync.
 *
 * Statically exported to /llms.txt at build time (output: "export").
 */
export const dynamic = "force-static";

/**
 * The theme, seasonal and blog pages from the Holiday Idea content plan.
 *
 * Destinations come from the `destinations` module below, but these pages are
 * not destinations — an agent asked "does this agency do Muslim-friendly
 * travel" or "when should I go to Bali" has no way to reach them from the
 * destination list alone.
 */
const holidayIdeaPages = [
  ["/muslim-friendly-holiday-travel-guide/", "Muslim-friendly packages: halal food arrangements and prayer facility access."],
  ["/group-incentive-travel-packages/", "Corporate group and incentive travel, including MICE and company retreats."],
  ["/star-cruise-holiday-guide-2026/", "Star Cruise sailings from Malaysia: itineraries, cabin categories and onboard facilities."],
  ["/school-holiday-travel-deals-2026/", "Family packages timed to the 2026 Malaysian school holiday windows."],
  ["/year-end-holiday-travel-deals-2026/", "Year-end and festive-season travel, the busiest booking window of the year."],
  ["/raya-holiday-travel-deals-2026/", "Raya packages built around Muslim-friendly destinations."],
];

export async function GET(): Promise<Response> {
  // Blog articles come from the CMS, so a post published there reaches this
  // file on the next build without anyone editing it.
  const blogArticles: [string, string][] = (await getBlogList()).map((post) => [
    `/blog/${post.slug}/`,
    post.meta_description ?? post.title,
  ]);

  const hours = company.hours.map((h) => `- ${h.days}: ${h.time}`).join("\n");
  const phones = company.phones.map((p) => `- ${p.label}: ${p.display}`).join("\n");
  const emails = company.emails.map((e) => `- ${e.label}: ${e.address}`).join("\n");
  const accreditations = company.accreditations
    .map((a) => `- ${a.abbr} (${a.name}): ${a.description}`)
    .join("\n");

  const destinationLines = destinations
    .map(
      (d) =>
        `- [${d.name}](${SITE_URL}${d.href}/): ${d.tourCount} packages from ${d.fromPrice} per person. ${d.blurb}`
    )
    .join("\n");

  const body = `# ${company.tradingName}

> ${company.legalName} (Co. No. ${company.companyNo}) is a Malaysian travel agency
> based in Kuala Lumpur, operating since ${company.foundedYear}. ${company.philosophy}
> All tour packages are private departures — own driver-guide, no strangers on the tour.
> Prices are quoted per person on twin-sharing in Malaysian Ringgit (MYR/RM).

## Key pages

- [Home](${SITE_URL}/): overview of destinations and featured packages.
- [All tours](${SITE_URL}/tours/): every destination hub and the full package list.
- [About us](${SITE_URL}/about-us/): company background, licensing and accreditations.
- [Why book with a travel agent](${SITE_URL}/why-book-with-a-travel-agent-2026/): what an agent adds over booking each component yourself.
- [Travel blog](${SITE_URL}/blog/): practical guides on timing, visas, packing and budgeting.
- [Promotions](${SITE_URL}/promotions/): where package deals run and how to ask for current pricing.
- [Request a custom itinerary](${SITE_URL}/custom-itinerary-request/): high-intent enquiry page for a trip built to order.
- [Contact](${SITE_URL}/contact-us/): enquiry form, phone, WhatsApp and office address.
- [Sitemap](${SITE_URL}/sitemap.xml): machine-readable list of every page.

## Holiday ideas

${holidayIdeaPages.map(([href, blurb]) => `- [${href}](${SITE_URL}${href}): ${blurb}`).join("\n")}

## Travel guides

Informational articles, not package pages. Each carries schema.org FAQPage data.

${blogArticles.map(([href, blurb]) => `- [${href}](${SITE_URL}${href}): ${blurb}`).join("\n")}

## Destinations

${destinationLines}

## Booking and enquiries

Tours are quoted and booked directly with the agency; there is no online checkout.
An enquiry form is at ${SITE_URL}/contact-us/, or use the phone/WhatsApp numbers below.

${phones}
${emails}
- WhatsApp: ${company.whatsapp.map((w) => w.display).join(", ")}

## Office

${company.address.full}
Coordinates: ${company.address.lat}, ${company.address.lng}

### Opening hours (Malaysia time, UTC+8)

${hours}

## Licensing and accreditation

${accreditations}

## Notes for agents

- Individual package pages carry schema.org TouristTrip data with price,
  currency, duration and availability — prefer that over parsing prose.
- Prices shown are "from" rates for the lowest season and twin-sharing occupancy;
  the final quote depends on travel dates, group size and hotel choice.
- The site is a static export; all content is present in the initial HTML and
  needs no JavaScript execution to read.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
