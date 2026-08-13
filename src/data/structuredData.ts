/**
 * schema.org payloads, built from the single source of truth in company.ts.
 *
 * These exist for two audiences: search engines (rich results — prices,
 * breadcrumbs, FAQs) and AI agents, which rely on structured data to work out
 * what a business offers rather than scraping prose. Every value here is drawn
 * from real company data or from copy that is actually rendered on the page;
 * nothing is invented.
 *
 * ── How the graph fits together ──────────────────────────────────────────────
 * The root layout emits the two site-wide nodes once:
 *
 *   TravelAgency  @id  {SITE_URL}/#organization
 *   WebSite       @id  {SITE_URL}/#website   → publisher: {@id: #organization}
 *
 * Every page then emits a single `@graph` document whose nodes reference those
 * two by `@id` instead of repeating them:
 *
 *   WebPage       @id  {pageUrl}#webpage     → isPartOf: {@id: #website}
 *                                             breadcrumb: {@id: #breadcrumb}
 *   BreadcrumbList@id  {pageUrl}#breadcrumb
 *   Product/Trip  @id  {pageUrl}#tour        → provider/seller: {@id: #organization}
 *                                             mainEntityOfPage: {@id: #webpage}
 *
 * That keeps one canonical node per entity across the whole site, which is what
 * both Google and the schema.org validator expect — as opposed to a pile of
 * disconnected `<script>` blocks each redeclaring the organisation.
 */
import { company } from "@/src/data/company";
import { SITE_URL, absoluteUrl } from "@/src/data/site";

/** Canonical `@id`s for the two nodes the root layout emits site-wide. */
export const ORGANISATION_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** Reference to the organisation node, for use as provider/seller/publisher. */
export const orgRef = { "@id": ORGANISATION_ID };

/** `@id` for a node hanging off a page, e.g. nodeId("/tours/india", "webpage"). */
export function nodeId(path: string, fragment: string): string {
  return `${absoluteUrl(path)}#${fragment}`;
}

/**
 * Wraps nodes into the one JSON-LD document a page emits.
 *
 * A single `@graph` (rather than one <script> per node) is what lets the nodes
 * cross-reference each other by `@id` — consumers resolve references within the
 * document instead of having to stitch separate blocks back together.
 */
export function graph(nodes: unknown[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes.filter(Boolean),
  };
}

// ─── Site-wide nodes ───────────────────────────────────────────────────────────

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

/** Trade bodies Dhesu belongs to — listed on /about-us and the package pages. */
const memberships = company.accreditations
  .filter((a) => a.abbr !== "KKKP 1439")
  .map((a) => ({
    "@type": "Organization",
    name: a.name,
    alternateName: a.abbr,
  }));

/** The Ministry of Tourism licence — a credential, not a membership. */
const tourismLicence = company.accreditations.find((a) => a.abbr === "KKKP 1439");

/** The travel agency itself — referenced by @id from every per-page payload. */
export const organisationSchema = {
  "@type": "TravelAgency",
  "@id": ORGANISATION_ID,
  name: company.tradingName,
  legalName: company.legalName,
  url: `${SITE_URL}/`,
  logo: {
    "@type": "ImageObject",
    "@id": `${SITE_URL}/#logo`,
    url: absoluteUrl("/_img/images/dhesu_logos/640.webp"),
    contentUrl: absoluteUrl("/_img/images/dhesu_logos/640.webp"),
    caption: company.tradingName,
  },
  image: { "@id": `${SITE_URL}/#logo` },
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
  contactPoint: [
    ...company.phones.map((p) => ({
      "@type": "ContactPoint",
      contactType: "customer service",
      telephone: p.tel,
      areaServed: "MY",
      availableLanguage: ["en", "ms"],
    })),
    ...company.emails.map((e) => ({
      "@type": "ContactPoint",
      contactType: e.label,
      email: e.address,
    })),
  ],
  // Only profiles we have actually verified belong to Dhesu.
  sameAs: [company.socials.facebook],
  openingHoursSpecification: openingHours,
  memberOf: memberships,
  ...(tourismLicence
    ? {
        hasCredential: {
          "@type": "EducationalOccupationalCredential",
          credentialCategory: "license",
          name: company.licenseNo,
          description: tourismLicence.description,
          recognizedBy: {
            "@type": "GovernmentOrganization",
            name: tourismLicence.name,
          },
        },
      }
    : {}),
  areaServed: { "@type": "Country", name: "Malaysia" },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${SITE_URL}/`,
  name: company.tradingName,
  description: company.philosophy,
  publisher: orgRef,
  inLanguage: "en",
};

// ─── Per-page building blocks ──────────────────────────────────────────────────

export type Crumb = {
  name: string;
  /** Site-relative path. Omitted on the final crumb (the current page). */
  url?: string | null;
};

/**
 * BreadcrumbList for a page.
 *
 * Google allows the last item to omit `item` (it is the page you are already
 * on), which is how the tour data authors its trailing crumb.
 */
export function breadcrumbList(path: string, crumbs: Crumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": nodeId(path, "breadcrumb"),
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      ...(crumb.url ? { item: crumb.url } : {}),
    })),
  };
}

type WebPageOptions = {
  /** Site-relative path of the page, matching its canonical URL. */
  path: string;
  name: string;
  description?: string;
  /** WebPage subtype(s): "CollectionPage", "AboutPage", ["WebPage","FAQPage"]… */
  type?: string | string[];
  /** Site-relative path of the page's lead image, if it has one. */
  image?: string;
  /** Set when the page also emits a breadcrumbList() for the same path. */
  hasBreadcrumb?: boolean;
  /** The thing the page is primarily about — usually a {"@id"} reference. */
  mainEntity?: unknown;
  about?: unknown;
};

/**
 * The WebPage node that anchors a page's graph.
 *
 * Everything else on the page points back at this node's `@id`, and this node
 * points up at the site-wide WebSite/TravelAgency pair.
 */
export function webPage({
  path,
  name,
  description,
  type = "WebPage",
  image,
  hasBreadcrumb,
  mainEntity,
  about,
}: WebPageOptions) {
  const id = nodeId(path, "webpage");
  return {
    "@type": type,
    "@id": id,
    url: path,
    name,
    ...(description ? { description } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    ...(image
      ? {
          primaryImageOfPage: {
            "@type": "ImageObject",
            "@id": nodeId(path, "primaryimage"),
            url: image,
          },
          image: { "@id": nodeId(path, "primaryimage") },
        }
      : {}),
    ...(hasBreadcrumb ? { breadcrumb: { "@id": nodeId(path, "breadcrumb") } } : {}),
    ...(about ? { about } : {}),
    ...(mainEntity ? { mainEntity } : {}),
    publisher: orgRef,
    inLanguage: "en",
  };
}

/**
 * Question nodes for a FAQPage.
 *
 * Only call this when the identical questions and answers are rendered on the
 * page — Google treats FAQ markup that is not visible as a policy violation.
 */
export function faqQuestions(items: { question: string; answer: string }[]) {
  return items.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  }));
}

// ─── Price helpers ─────────────────────────────────────────────────────────────

/**
 * Pulls the numeric amount out of the price strings shown on the page.
 *
 * Handles "From RM988", "RM1,488" and "RM1,488 per person" alike. Deliberately
 * takes the *first* number only: a range like "RM988 – RM1,200" would otherwise
 * concatenate into a nonsense "9881200".
 */
export function parsePrice(value: string | undefined | null): string | undefined {
  if (!value) return undefined;
  const match = value.replace(/,/g, "").match(/\d+(?:\.\d+)?/);
  return match ? match[0] : undefined;
}

/** Currency for every price displayed on the site. */
export const PRICE_CURRENCY = "MYR";

type OfferOptions = {
  /** Site-relative URL the offer is bookable from. */
  url: string;
  /** The "from" price as displayed, e.g. "From RM988". */
  price: string | undefined | null;
  /** Struck-through pre-discount price as displayed, e.g. "RM1186". */
  originalPrice?: string | null;
  id?: string;
};

/**
 * An Offer built only from prices the page actually displays.
 *
 * Returns undefined when no price is shown, so pages without pricing emit no
 * offer at all rather than a placeholder.
 */
export function offer({ url, price, originalPrice, id }: OfferOptions) {
  const amount = parsePrice(price);
  if (!amount) return undefined;

  const listPrice = parsePrice(originalPrice);

  return {
    "@type": "Offer",
    ...(id ? { "@id": id } : {}),
    url,
    price: amount,
    priceCurrency: PRICE_CURRENCY,
    availability: "https://schema.org/InStock",
    seller: orgRef,
    // The struck-through "was" price shown beside the current one.
    ...(listPrice && listPrice !== amount
      ? {
          priceSpecification: {
            "@type": "UnitPriceSpecification",
            priceType: "https://schema.org/ListPrice",
            price: listPrice,
            priceCurrency: PRICE_CURRENCY,
          },
        }
      : {}),
  };
}

// ─── Tour listings ─────────────────────────────────────────────────────────────

export type ListedPackage = {
  name: string;
  /** Site-relative URL of the package detail page. */
  url: string;
  price?: string | null;
  duration?: string | null;
  image?: string | null;
};

/**
 * ItemList for a page that lists tour packages as cards.
 *
 * Each entry carries only what the card itself shows: name, link, price and
 * duration. Google reads this as a carousel-style list of the linked pages; the
 * full detail (offers, itinerary) lives on each package page's own Product node.
 */
export function packageItemList(path: string, packages: ListedPackage[]) {
  return {
    "@type": "ItemList",
    "@id": nodeId(path, "packages"),
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: packages.length,
    itemListElement: packages.map((pkg, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: pkg.name,
      url: pkg.url,
    })),
  };
}

type TourProductOptions = {
  /** Site-relative canonical path of the package page. */
  path: string;
  name: string;
  description: string;
  /** Site-relative path of the hero image. */
  image: string;
  sku?: string;
  /** Displayed "from" price, e.g. "From RM988". */
  price?: string | null;
  /** Displayed struck-through price, e.g. "RM1186". */
  originalPrice?: string | null;
  /** Displayed duration, e.g. "4 Days / 3 Nights". */
  duration?: string | null;
  /** Displayed group size, e.g. "Private & flexible". */
  groupSize?: string | null;
  /** Day-by-day headings as rendered in the itinerary section. */
  itinerary?: { day: number; title: string }[];
};

/**
 * The tour package itself.
 *
 * Typed as both Product and TouristTrip: it is a bookable, priced offering
 * (Product, which is what Google reads for price snippets) *and* a guided trip
 * with an itinerary and a provider (TouristTrip, which is what describes the
 * offering accurately for schema.org consumers and AI agents). One node with
 * two types beats two nodes describing the same thing — no duplication, one
 * `@id` for anything else to reference.
 *
 * Every field maps to something rendered on the page: the hero title, the quick
 * facts strip (price, was-price, duration, group size) and the itinerary
 * headings.
 */
export function tourProduct({
  path,
  name,
  description,
  image,
  sku,
  price,
  originalPrice,
  duration,
  groupSize,
  itinerary,
}: TourProductOptions) {
  // Duration and group size have no first-class property on Product or
  // TouristTrip, so they ride along as additionalProperty rather than being
  // forced into a field that does not mean that.
  const facts = [
    duration && { "@type": "PropertyValue", name: "Duration", value: duration },
    groupSize && { "@type": "PropertyValue", name: "Group size", value: groupSize },
  ].filter(Boolean);

  const offers = offer({
    url: path,
    price,
    originalPrice,
    id: nodeId(path, "offer"),
  });

  return {
    "@type": ["Product", "TouristTrip"],
    "@id": nodeId(path, "tour"),
    name,
    description,
    image,
    url: path,
    ...(sku ? { sku } : {}),
    brand: orgRef,
    provider: orgRef,
    ...(facts.length ? { additionalProperty: facts } : {}),
    ...(itinerary?.length
      ? {
          itinerary: {
            "@type": "ItemList",
            numberOfItems: itinerary.length,
            itemListElement: itinerary.map((day) => ({
              "@type": "ListItem",
              position: day.day,
              name: day.title,
            })),
          },
        }
      : {}),
    ...(offers ? { offers } : {}),
    mainEntityOfPage: { "@id": nodeId(path, "webpage") },
  };
}

// ─── Destinations ──────────────────────────────────────────────────────────────

type TouristDestinationOptions = {
  /** Site-relative canonical path of the destination page. */
  path: string;
  name: string;
  description: string;
  image?: string;
  /**
   * Sub-areas of the destination, as rendered in the "explore by region" cards.
   * Only pass real places — themes ("Honeymoon", "Taj Mahal tours") are not
   * destinations and must not be marked up as one.
   */
  containsPlace?: { name: string; description?: string }[];
};

/**
 * TouristDestination for a place the site sells tours to.
 *
 * Attached to the page via the WebPage node's `about`, so the place entity and
 * the tour listing on the same page stay connected rather than floating free.
 */
export function touristDestination({
  path,
  name,
  description,
  image,
  containsPlace,
}: TouristDestinationOptions) {
  return {
    "@type": "TouristDestination",
    "@id": nodeId(path, "destination"),
    name,
    description,
    ...(image ? { image } : {}),
    url: path,
    ...(containsPlace?.length
      ? {
          containsPlace: containsPlace.map((place) => ({
            "@type": "TouristDestination",
            name: place.name,
            ...(place.description ? { description: place.description } : {}),
          })),
        }
      : {}),
  };
}

// ─── Articles ──────────────────────────────────────────────────────────────────

type BlogPostingOptions = {
  /** Site-relative canonical path of the post. */
  path: string;
  headline: string;
  description?: string;
  /** Site-relative path of the featured image. */
  image: string;
  /** Author name as credited by the post's byline. */
  authorName: string;
  /** ISO-8601 date, e.g. "2026-03-14". */
  datePublished: string;
  dateModified?: string;
};

/**
 * BlogPosting for an article page.
 *
 * NOTE: unused at the time of writing — the site has no /blog section (see the
 * note in components/navbar/NavbarData.ts). Kept here so that when posts are
 * added the route only has to call this and emit it alongside webPage() and
 * breadcrumbList(), rather than reinventing the author/publisher wiring.
 */
export function blogPosting({
  path,
  headline,
  description,
  image,
  authorName,
  datePublished,
  dateModified,
}: BlogPostingOptions) {
  return {
    "@type": "BlogPosting",
    "@id": nodeId(path, "article"),
    headline,
    ...(description ? { description } : {}),
    image,
    author: { "@type": "Person", name: authorName },
    publisher: orgRef,
    datePublished,
    dateModified: dateModified ?? datePublished,
    inLanguage: "en",
    mainEntityOfPage: { "@id": nodeId(path, "webpage") },
  };
}
