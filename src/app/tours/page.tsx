import type { Metadata } from "next";
import JsonLd from "@/src/components/JsonLd";
import ToursIndexContent from "@/src/components/tours/ToursIndexContent";
import { tourPages } from "@/src/data/tourPages";
import {
  breadcrumbList,
  graph,
  nodeId,
  webPage,
} from "@/src/data/structuredData";

const TITLE = "Tour Packages from Malaysia | Dhesu Travel & Tours";
const DESCRIPTION =
  "Browse tour packages to India, Nepal, Sri Lanka, Bhutan, Vietnam, Cambodia, Laos, Malaysia and Indonesia. 35+ years of trusted travel expertise with hand-picked itineraries, private guides and full on-ground support.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/tours",
  },
};

// Mirrors the card list ToursIndexContent renders — destinations that actually
// have packages, in the same order.
const destinationCards = Object.values(tourPages)
  .filter((d) => d.packages?.items?.length > 0)
  .map((d) => ({ name: d.meta.name, url: `/tours/${d.meta.slug}` }));

const toursJsonLd = graph([
  webPage({
    path: "/tours",
    name: TITLE,
    description: DESCRIPTION,
    type: "CollectionPage",
    hasBreadcrumb: true,
    mainEntity: { "@id": nodeId("/tours", "destinations") },
  }),
  breadcrumbList("/tours", [
    { name: "Home", url: "/" },
    { name: "Tours" },
  ]),
  {
    "@type": "ItemList",
    "@id": nodeId("/tours", "destinations"),
    name: "Destinations",
    numberOfItems: destinationCards.length,
    itemListElement: destinationCards.map((destination, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: destination.name,
      url: destination.url,
    })),
  },
]);

export default function ToursIndexPage() {
  return (
    <>
      <JsonLd data={toursJsonLd} />
      <ToursIndexContent />
    </>
  );
}
