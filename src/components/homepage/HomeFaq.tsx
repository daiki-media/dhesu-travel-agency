"use client";

import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { FaqAccordion } from "@/src/components/tours/TourPackageDetailTemplate";

export default function HomeFaq({
  faqs,
}: {
  faqs: { question: string; answer: string }[];
}) {
  return (
    <section className="py-12 lg:py-16 bg-pattern">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <div className="lg:sticky lg:top-28">
              <SectionLabel text="Questions" />
              <h2 className="font-primary font-bold text-teal-navy text-4xl md:text-5xl leading-tight">
                Frequently asked questions
              </h2>
            </div>
          </div>
          <div className="lg:col-span-7" data-reveal>
            <FaqAccordion items={faqs} />
          </div>
        </div>
      </div>
    </section>
  );
}
