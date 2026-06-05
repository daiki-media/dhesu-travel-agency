import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import TourPackageDetailTemplate from "@/src/components/tours/TourPackageDetailTemplate";
import { getTourPackage, tourPackageSlugs } from "@/src/data/tourPackages";

type PageProps = {
  params: Promise<{ destination: string; packageSlug: string[] }>;
};

// Pre-render every registered package detail page at build time.
export function generateStaticParams() {
  return tourPackageSlugs.map((fullPath) => {
    const [destination, ...packageSlug] = fullPath.split("/");
    return { destination, packageSlug };
  });
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { destination, packageSlug } = await params;
  const data = getTourPackage(`${destination}/${packageSlug.join("/")}`);

  if (!data) {
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
  const data = getTourPackage(`${destination}/${packageSlug.join("/")}`);

  if (!data) {
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
