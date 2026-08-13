import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/src/components/JsonLd";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import TourPackageDetailTemplate, {
  type PackageDetailData,
} from "@/src/components/tours/TourPackageDetailTemplate";
import TourRegionTemplate from "@/src/components/tours/TourRegionTemplate";
import packageDetails, { getPackageDetail } from "@/src/data/tourPackages";
import { getTourPage } from "@/src/data/tourPages";
import {
  allLandingPageParams,
  getLandingPage,
  type LandingPage,
} from "@/src/data/destinationDetail";
import {
  breadcrumbList,
  faqQuestions,
  graph,
  nodeId,
  packageItemList,
  touristDestination,
  tourProduct,
  webPage,
} from "@/src/data/structuredData";

type PageProps = {
  params: Promise<{ destination: string; packageSlug: string[] }>;
};

// Single-segment region/theme pages (e.g. /tours/india/kerala) live in the same
// catch-all as the two-segment package detail pages.
//
// Pre-render every registered package detail page plus every destination's
// region/theme landing pages at build time. Detail paths come from the package
// registry (keyed by slug; destination is derived from each canonical URL).
export function generateStaticParams() {
  const detailParams = Object.values(packageDetails).map((data) => {
    const path = data.meta.canonicalUrl.replace(/^\/+tours\/+/, "");
    const [destination, ...packageSlug] = path.split("/");
    return { destination, packageSlug };
  });

  const landingParams = allLandingPageParams.map(({ destination, key }) => ({
    destination,
    packageSlug: [key],
  }));

  return [...detailParams, ...landingParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { destination, packageSlug } = await params;

  // A single segment under a destination is a region or theme landing page.
  if (packageSlug.length === 1) {
    const page = getLandingPage(destination, packageSlug[0]);
    if (page) {
      return {
        title: page.metaTitle,
        description: page.metaDescription,
        alternates: { canonical: page.canonicalUrl },
        openGraph: {
          title: page.ogTitle,
          description: page.ogDescription,
          url: page.canonicalUrl,
          images: [{ url: page.ogImage }],
          type: "website",
        },
      };
    }
  }

  const slug = packageSlug.join("/");
  const data = getPackageDetail(slug);

  // Guard against cross-country slug reuse: only serve when the package's
  // canonical URL actually belongs to this destination.
  if (!data || data.meta.canonicalUrl !== `/tours/${destination}/${slug}`) {
    return { title: "Package Not Found | Dhesu Travel & Tours" };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.keywords,
    alternates: { canonical: data.meta.canonicalUrl },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: data.meta.canonicalUrl,
      images: [{ url: data.meta.ogImage }],
      type: "website",
    },
  };
}

/**
 * Graph for a region/theme landing page.
 *
 * Regions are real places, so they get a TouristDestination the page is `about`.
 * Themes ("Honeymoon", "Golden Triangle") are just a way of grouping packages —
 * marking them up as a place would be asserting something the page never says,
 * so they get the listing and breadcrumb only.
 */
function landingPageJsonLd(
  page: LandingPage,
  destination: string,
  destinationLabel: string,
  packages: { name: string; slug?: string }[]
) {
  const path = page.canonicalUrl;
  const hubPath = `/tours/${destination}`;

  return graph([
    webPage({
      path,
      name: page.h1,
      description: page.metaDescription,
      type: "CollectionPage",
      image: page.ogImage,
      hasBreadcrumb: true,
      ...(page.kind === "region"
        ? { about: { "@id": nodeId(path, "destination") } }
        : {}),
      mainEntity: { "@id": nodeId(path, "packages") },
    }),
    breadcrumbList(path, [
      { name: "Home", url: "/" },
      { name: "Tours", url: "/tours" },
      { name: destinationLabel, url: hubPath },
      { name: page.label },
    ]),
    page.kind === "region"
      ? touristDestination({
          path,
          name: page.label,
          description: page.metaDescription,
          image: page.ogImage,
        })
      : null,
    packageItemList(
      path,
      packages
        .filter((pkg) => pkg.slug)
        .map((pkg) => ({ name: pkg.name, url: `${hubPath}/${pkg.slug}` }))
    ),
  ]);
}

/**
 * Graph for a package detail page.
 *
 * The page is both a WebPage and — because the identical questions and answers
 * are rendered in the FAQ accordion — an FAQPage. The tour itself is a separate
 * node pointing back at the page via `mainEntityOfPage`, which keeps one node
 * per entity instead of two page-level types fighting over the same URL.
 */
function packageDetailJsonLd(data: PackageDetailData) {
  const path = data.meta.canonicalUrl;
  const name = `${data.hero.title} ${data.hero.titleAccent}`.trim();

  return graph([
    webPage({
      path,
      name: data.meta.title,
      description: data.meta.description,
      type: ["WebPage", "FAQPage"],
      image: data.meta.ogImage,
      hasBreadcrumb: true,
      about: { "@id": nodeId(path, "tour") },
      mainEntity: faqQuestions(data.faq.items),
    }),
    breadcrumbList(
      path,
      data.hero.breadcrumb.map((crumb) => ({ name: crumb.label, url: crumb.href }))
    ),
    tourProduct({
      path,
      name,
      description: data.meta.description,
      image: data.meta.ogImage,
      sku: data.meta.pkgid,
      price: data.quickFacts.startingPrice,
      originalPrice: data.quickFacts.originalPrice,
      duration: data.quickFacts.duration,
      groupSize: data.quickFacts.groupSize,
      itinerary: data.itinerary.days.map((day) => ({
        day: day.day,
        title: day.title,
      })),
    }),
  ]);
}

export default async function TourPackageDetailPage({ params }: PageProps) {
  const { destination, packageSlug } = await params;

  // ── Single segment: region or theme listing page ──
  if (packageSlug.length === 1) {
    const page = getLandingPage(destination, packageSlug[0]);

    if (page) {
      const hub = getTourPage(destination);
      if (!hub) {
        notFound();
      }

      const packages = page.select(hub.packages.items);

      return (
        <>
          <JsonLd
            data={landingPageJsonLd(page, destination, hub.meta.name, packages)}
          />
          <TopBar />
          <Navbar />
          <TourRegionTemplate
            label={page.label}
            h1={page.h1}
            intro={page.intro}
            heroImage={page.ogImage}
            packages={packages}
            cta={hub.cta}
            destination={destination}
            destinationLabel={hub.meta.name}
          />
          <Footer />
        </>
      );
    }
  }

  // ── Two or more segments: package detail page ──
  const slug = packageSlug.join("/");
  const data = getPackageDetail(slug);

  if (!data || data.meta.canonicalUrl !== `/tours/${destination}/${slug}`) {
    notFound();
  }

  return (
    <>
      <JsonLd data={packageDetailJsonLd(data)} />
      <TopBar />
      <Navbar />
      <TourPackageDetailTemplate data={data} />
      <Footer />
    </>
  );
}
