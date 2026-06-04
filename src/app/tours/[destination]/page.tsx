import type { Metadata } from "next";
import { notFound } from "next/navigation";
import TopBar from "@/src/components/homepage/TopBar";
import Navbar from "@/src/components/navbar/Navbar";
import Footer from "@/src/components/homepage/Footer";
import TourDestinationTemplate from "@/src/components/tours/TourDestinationTemplate";
import { getTourPage, tourSlugs } from "@/src/data/tourPages";

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

export default async function TourDestinationPage({ params }: PageProps) {
  const { destination } = await params;
  const data = getTourPage(destination);

  if (!data) {
    notFound();
  }

  return (
    <>
      <TopBar />
      <Navbar />
      <TourDestinationTemplate data={data} />
      <Footer />
    </>
  );
}
