import { company } from "@/src/data/company";
import { destinations } from "@/src/data/destinations";
import { SITE_URL } from "@/src/data/site";

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

export function GET(): Response {
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
- [Contact](${SITE_URL}/contact/): enquiry form, phone, WhatsApp and office address.
- [Sitemap](${SITE_URL}/sitemap.xml): machine-readable list of every page.

## Destinations

${destinationLines}

## Booking and enquiries

Tours are quoted and booked directly with the agency; there is no online checkout.
An enquiry form is at ${SITE_URL}/contact/, or use the phone/WhatsApp numbers below.

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
