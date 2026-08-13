import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/src/components/JsonLd";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import TourDestinationTemplate from "@/src/components/tours/TourDestinationTemplate";
import { getTourPage, tourSlugs, type TourPageData } from "@/src/data/tourPages";
import {
  breadcrumbList,
  graph,
  nodeId,
  packageItemList,
  touristDestination,
  webPage,
} from "@/src/data/structuredData";

type PageProps = {
  params: Promise<{ destination: string }>;
};

// Pre-render every known destination at build time.
export function generateStaticParams() {
  return tourSlugs.map((destination) => ({ destination }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { destination } = await params;
  const data = getTourPage(destination);

  if (!data) {
    return { title: "Tour Not Found | Dhesu Travel & Tours" };
  }

  return {
    title: data.meta.title,
    description: data.meta.description,
    keywords: data.meta.targetKeyword,
    alternates: { canonical: `/tours/${data.meta.slug}` },
    openGraph: {
      title: data.meta.title,
      description: data.meta.description,
      url: `/tours/${data.meta.slug}`,
      images: [{ url: data.hero.bgImage }],
      type: "website",
    },
  };
}

/**
 * The destination hub's graph: the place, the packages sold for it, and the page
 * that shows both.
 *
 * Nothing here is asserted that the page does not render — the sub-places come
 * from the "where to go" zone cards, and the list entries from the package cards.
 */
function destinationJsonLd(data: TourPageData) {
  const path = `/tours/${data.meta.slug}`;

  const packages = data.packages.items
    .filter((pkg) => pkg.slug)
    .map((pkg) => ({ name: pkg.name, url: `${path}/${pkg.slug}` }));

  return graph([
    webPage({
      path,
      name: data.meta.title,
      description: data.meta.description,
      type: "CollectionPage",
      image: data.hero.bgImage,
      hasBreadcrumb: true,
      about: { "@id": nodeId(path, "destination") },
      mainEntity: { "@id": nodeId(path, "packages") },
    }),
    breadcrumbList(path, [
      { name: "Home", url: "/" },
      { name: "Tours", url: "/tours" },
      { name: data.meta.name },
    ]),
    touristDestination({
      path,
      name: data.meta.name,
      description: data.meta.description,
      image: data.hero.bgImage,
      containsPlace: data.zones.areas.map((area) => ({
        name: area.name,
        description: area.description,
      })),
    }),
    packageItemList(path, packages),
  ]);
}

export default async function TourDestinationPage({ params }: PageProps) {
  const { destination } = await params;
  const data = getTourPage(destination);

  if (!data) {
    notFound();
  }

  return (
    <>
      <JsonLd data={destinationJsonLd(data)} />
      <TopBar />
      <Navbar />
      <TourDestinationTemplate data={data} />
      <Footer />
    </>
  );
}
