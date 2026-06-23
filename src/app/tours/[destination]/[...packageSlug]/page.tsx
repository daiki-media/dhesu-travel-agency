import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import TourPackageDetailTemplate from "@/src/components/tours/TourPackageDetailTemplate";
import TourRegionTemplate from "@/src/components/tours/TourRegionTemplate";
import packageDetails, { getPackageDetail } from "@/src/data/tourPackages";
import { getTourPage } from "@/src/data/tourPages";
import { getIndiaLandingPage, INDIA_LANDING_PAGES } from "@/src/data/india/regions";
import { getNepalLandingPage, NEPAL_LANDING_PAGES } from "@/src/data/nepal/regions";
import { getSriLankaLandingPage, SRI_LANKA_LANDING_PAGES } from "@/src/data/sri-lanka/regions";

type PageProps = {
  params: Promise<{ destination: string; packageSlug: string[] }>;
};

// Single-segment region/theme pages (e.g. /tours/india/kerala) live in the same
// catch-all as the two-segment package detail pages.
//
// Pre-render every registered package detail page plus the India region/theme
// landing pages at build time. Detail paths come from the package registry
// (keyed by slug; destination is derived from each canonical URL). Region/theme
// paths are single-segment under /tours/india.
export function generateStaticParams() {
  const detailParams = Object.values(packageDetails).map((data) => {
    const path = data.meta.canonicalUrl.replace(/^\/+tours\/+/, "");
    const [destination, ...packageSlug] = path.split("/");
    return { destination, packageSlug };
  });

  const indiaLandingParams = INDIA_LANDING_PAGES.map((page) => ({
    destination: "india",
    packageSlug: [page.key],
  }));

  const nepalLandingParams = NEPAL_LANDING_PAGES.map((page) => ({
    destination: "nepal",
    packageSlug: [page.key],
  }));

  const sriLankaLandingParams = SRI_LANKA_LANDING_PAGES.map((page) => ({
    destination: "sri-lanka",
    packageSlug: [page.key],
  }));

  return [...detailParams, ...indiaLandingParams, ...nepalLandingParams, ...sriLankaLandingParams];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { destination, packageSlug } = await params;

  // Single segment under India: a region or theme landing page.
  if (destination === "india" && packageSlug.length === 1) {
    const page = getIndiaLandingPage(packageSlug[0]);
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

  // Single segment under Nepal: a region or theme landing page.
  if (destination === "nepal" && packageSlug.length === 1) {
    const page = getNepalLandingPage(packageSlug[0]);
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

  // Single segment under Sri Lanka: a region or theme landing page.
  if (destination === "sri-lanka" && packageSlug.length === 1) {
    const page = getSriLankaLandingPage(packageSlug[0]);
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

export default async function TourPackageDetailPage({ params }: PageProps) {
  const { destination, packageSlug } = await params;

  // ── Single segment under India: region or theme listing page ──
  if (destination === "india" && packageSlug.length === 1) {
    const page = getIndiaLandingPage(packageSlug[0]);
    if (!page) {
      notFound();
    }

    const india = getTourPage("india");
    if (!india) {
      notFound();
    }

    const packages = page.select(india.packages.items);

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "India", item: "/tours/india" },
        { "@type": "ListItem", position: 3, name: page.label, item: page.canonicalUrl },
      ],
    };

    const collectionJsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: page.h1,
      description: page.metaDescription,
      url: page.canonicalUrl,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: packages.length,
        itemListElement: packages.map((pkg, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: pkg.name,
          url: `/tours/india/${pkg.slug}`,
          ...(pkg.price ? { offers: { "@type": "Offer", price: pkg.price.replace(/[^\d.]/g, ""), priceCurrency: "MYR" } } : {}),
        })),
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
        <TopBar />
        <Navbar />
        <TourRegionTemplate
          label={page.label}
          h1={page.h1}
          intro={page.intro}
          heroImage={page.ogImage}
          packages={packages}
          cta={india.cta}
        />
        <Footer />
      </>
    );
  }

  // ── Single segment under Nepal: region or theme listing page ──
  if (destination === "nepal" && packageSlug.length === 1) {
    const page = getNepalLandingPage(packageSlug[0]);
    if (!page) {
      notFound();
    }

    const nepal = getTourPage("nepal");
    if (!nepal) {
      notFound();
    }

    const packages = page.select(nepal.packages.items);

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Nepal", item: "/tours/nepal" },
        { "@type": "ListItem", position: 3, name: page.label, item: page.canonicalUrl },
      ],
    };

    const collectionJsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: page.h1,
      description: page.metaDescription,
      url: page.canonicalUrl,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: packages.length,
        itemListElement: packages.map((pkg, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: pkg.name,
          url: `/tours/nepal/${pkg.slug}`,
          ...(pkg.price ? { offers: { "@type": "Offer", price: pkg.price.replace(/[^\d.]/g, ""), priceCurrency: "MYR" } } : {}),
        })),
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
        <TopBar />
        <Navbar />
        <TourRegionTemplate
          label={page.label}
          h1={page.h1}
          intro={page.intro}
          heroImage={page.ogImage}
          packages={packages}
          cta={nepal.cta}
        />
        <Footer />
      </>
    );
  }

  // ── Single segment under Sri Lanka: region or theme listing page ──
  if (destination === "sri-lanka" && packageSlug.length === 1) {
    const page = getSriLankaLandingPage(packageSlug[0]);
    if (!page) {
      notFound();
    }

    const sriLanka = getTourPage("sri-lanka");
    if (!sriLanka) {
      notFound();
    }

    const packages = page.select(sriLanka.packages.items);

    const breadcrumbJsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "/" },
        { "@type": "ListItem", position: 2, name: "Sri Lanka", item: "/tours/sri-lanka" },
        { "@type": "ListItem", position: 3, name: page.label, item: page.canonicalUrl },
      ],
    };

    const collectionJsonLd = {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: page.h1,
      description: page.metaDescription,
      url: page.canonicalUrl,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: packages.length,
        itemListElement: packages.map((pkg, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: pkg.name,
          url: `/tours/sri-lanka/${pkg.slug}`,
          ...(pkg.price ? { offers: { "@type": "Offer", price: pkg.price.replace(/[^\d.]/g, ""), priceCurrency: "MYR" } } : {}),
        })),
      },
    };

    return (
      <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
        />
        <TopBar />
        <Navbar />
        <TourRegionTemplate
          label={page.label}
          h1={page.h1}
          intro={page.intro}
          heroImage={page.ogImage}
          packages={packages}
          cta={sriLanka.cta}
        />
        <Footer />
      </>
    );
  }

  // ── Two or more segments: package detail page ──
  const slug = packageSlug.join("/");
  const data = getPackageDetail(slug);

  if (!data || data.meta.canonicalUrl !== `/tours/${destination}/${slug}`) {
    notFound();
  }

  // ── JSON-LD structured data for Google rich results ──
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${data.hero.title} ${data.hero.titleAccent}`.trim(),
    description: data.meta.description,
    image: data.meta.ogImage,
    sku: data.meta.pkgid,
    brand: { "@type": "Brand", name: "Dhesu Travel & Tours" },
    offers: {
      "@type": "Offer",
      url: data.meta.canonicalUrl,
      priceCurrency: "MYR",
      price: data.quickFacts.startingPrice.replace(/[^\d.]/g, ""),
      availability: "https://schema.org/InStock",
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: data.hero.breadcrumb.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      ...(crumb.href ? { item: crumb.href } : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <TopBar />
      <Navbar />
      <TourPackageDetailTemplate data={data} />
      <Footer />
    </>
  );
}
