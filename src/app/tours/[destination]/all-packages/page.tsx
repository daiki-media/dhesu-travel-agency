import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLd from "@/src/components/JsonLd";
import TourAllPackagesTemplate from "@/src/components/tours/TourAllPackagesTemplate";
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

// Pre-render an all-packages page for every known destination at build time.
export function generateStaticParams() {
  return tourSlugs.map((destination) => ({ destination }));
}

const pageTitle = (data: TourPageData) =>
  `All ${data.meta.name} Packages | Dhesu Travel & Tours`;

const pageDescription = (data: TourPageData) =>
  `Browse every ${data.meta.name} tour package from Dhesu Travel & Tours. ${data.packages.subheading}`;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { destination } = await params;
  const data = getTourPage(destination);

  if (!data) {
    return { title: "Packages Not Found | Dhesu Travel & Tours" };
  }

  const title = pageTitle(data);
  const description = pageDescription(data);

  return {
    title,
    description,
    keywords: data.meta.targetKeyword,
    alternates: { canonical: `/tours/${data.meta.slug}/all-packages` },
    openGraph: {
      title,
      description,
      url: `/tours/${data.meta.slug}/all-packages`,
      images: [{ url: data.hero.bgImage }],
      type: "website",
    },
  };
}

/** A listing page: the full package grid, plus the trail back up to the hub. */
function allPackagesJsonLd(data: TourPageData) {
  const hubPath = `/tours/${data.meta.slug}`;
  const path = `${hubPath}/all-packages`;

  const packages = data.packages.items
    .filter((pkg) => pkg.slug)
    .map((pkg) => ({ name: pkg.name, url: `${hubPath}/${pkg.slug}` }));

  return graph([
    webPage({
      path,
      name: pageTitle(data),
      description: pageDescription(data),
      type: "CollectionPage",
      image: data.hero.bgImage,
      hasBreadcrumb: true,
      about: { "@id": nodeId(hubPath, "destination") },
      mainEntity: { "@id": nodeId(path, "packages") },
    }),
    breadcrumbList(path, [
      { name: "Home", url: "/" },
      { name: "Tours", url: "/tours" },
      { name: data.meta.name, url: hubPath },
      { name: "All Packages" },
    ]),
    // Same @id as the node on the hub page, so both pages describe one entity
    // rather than two. Declared here rather than only referenced, so the graph
    // still resolves when a validator reads this page on its own. The zone
    // cards aren't rendered here, so `containsPlace` is left to the hub.
    touristDestination({
      path: hubPath,
      name: data.meta.name,
      description: data.meta.description,
      image: data.hero.bgImage,
    }),
    packageItemList(path, packages),
  ]);
}

export default async function TourAllPackagesPage({ params }: PageProps) {
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
      <JsonLd data={allPackagesJsonLd(withGuides)} />
      <TourAllPackagesTemplate data={withGuides} />
    </>
  );
}
