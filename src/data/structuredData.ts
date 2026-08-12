/**
 * schema.org payloads, built from the single source of truth in company.ts.
 *
 * These exist for two audiences: search engines (rich results — prices,
 * breadcrumbs, FAQs) and AI agents, which rely on structured data to work out
 * what a business offers rather than scraping prose. Every value here is drawn
 * from real company data; nothing is invented.
 *
 * Per-page payloads (Product, FAQPage, BreadcrumbList) are built in the tour
 * route from the schema already authored in the package JSON; they reference
 * the organisation below by @id rather than repeating it.
 */
import { company } from "@/src/data/company";
import { SITE_URL, absoluteUrl } from "@/src/data/site";

const ORGANISATION_ID = `${SITE_URL}/#organisation`;

/** Maps company.hours onto schema.org openingHoursSpecification. */
const DAY_NAMES: Record<string, string[]> = {
  "Monday – Friday": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  Saturday: ["Saturday"],
};

const openingHours = company.hours
  .filter((h) => !h.closed && DAY_NAMES[h.days])
  .map((h) => {
    const [opens, closes] = h.time.split("–").map((t) => t.trim());
    const to24 = (t: string) => {
      const m = t.match(/^(\d{1,2})\.(\d{2})\s*(am|pm)$/i);
      if (!m) return undefined;
      let hour = Number(m[1]) % 12;
      if (m[3].toLowerCase() === "pm") hour += 12;
      return `${String(hour).padStart(2, "0")}:${m[2]}`;
    };
    return {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: DAY_NAMES[h.days],
      opens: to24(opens),
      closes: to24(closes),
    };
  })
  .filter((h) => h.opens && h.closes);

/** The travel agency itself — referenced by @id from the per-page payloads. */
export const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  "@id": ORGANISATION_ID,
  name: company.tradingName,
  legalName: company.legalName,
  url: `${SITE_URL}/`,
  logo: absoluteUrl("/_img/images/dhesu_logos/640.webp"),
  image: absoluteUrl("/_img/images/dhesu_logos/640.webp"),
  description: company.philosophy,
  foundingDate: String(company.foundedYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: `${company.address.line1}, ${company.address.line2}`,
    addressLocality: company.address.city,
    postalCode: company.address.postcode,
    addressCountry: "MY",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: company.address.lat,
    longitude: company.address.lng,
  },
  telephone: company.phones.map((p) => p.tel),
  email: company.emails[0].address,
  sameAs: [company.socials.facebook],
  openingHoursSpecification: openingHours,
  // KKKP 1439 — Ministry of Tourism Malaysia licence, plus trade memberships.
  hasCredential: company.accreditations.map((a) => `${a.abbr} — ${a.name}`),
  areaServed: { "@type": "Country", name: "Malaysia" },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: company.tradingName,
  publisher: { "@id": ORGANISATION_ID },
  inLanguage: "en",
};
