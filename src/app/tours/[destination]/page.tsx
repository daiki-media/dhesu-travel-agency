import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/src/components/JsonLd";
import TourDestinationTemplate from "@/src/components/tours/TourDestinationTemplate";
import { getTourPage, tourSlugs, type TourPageData } from "@/src/data/tourPages";
import { guidePackageItems } from "@/src/data/destinationDetail";
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

  // The destination's planning guides sit in the same grid as its packages, so
  // a country is never a dead end while its itineraries are still being
  // written. They are merged here rather than stored in the hub JSON, which
  // would duplicate the name, blurb and image that already live on the landing
  // page entry.
  const withGuides: TourPageData = {
    ...data,
    packages: {
      ...data.packages,
      // Guide first: the hub grid previews only the first six cards, and the
      // planning guide is where a traveller who has not chosen an itinerary
      // yet should start.
      items: [...guidePackageItems(destination), ...data.packages.items],
    },
  };

  return (
    <>
      <JsonLd data={destinationJsonLd(withGuides)} />
      <TourDestinationTemplate data={withGuides} />
    </>
  );
}
