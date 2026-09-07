import { SectionLabel } from "@/src/components/tours/TourDestinationTemplate";
import { FaqAccordion } from "@/src/components/tours/TourPackageDetailTemplate";

export type Faq = { question: string; answer: string };

/**
 * The FAQ block that closes almost every page.
 *
 * `split` is the house layout: the label and heading sit in a sticky left
 * column so they stay visible while a long list scrolls past on the right.
 * `stacked` is the same block for narrow containers - the destination guides
 * render inside a ~700px reading column, where a two-column grid would leave
 * the accordion too cramped to read.
 */
export default function FaqSection({
  faqs,
  label = "Questions",
  heading = "Frequently asked questions",
  layout = "split",
  className = "bg-pattern",
  aside,
}: {
  faqs: Faq[];
  label?: string;
  heading?: string;
  layout?: "split" | "stacked";
  className?: string;
  /** Optional extra in the sticky column, under the heading. */
  aside?: React.ReactNode;
}) {
  if (faqs.length === 0) return null;

  if (layout === "stacked") {
    return (
      <div data-reveal>
        <SectionLabel text={label} />
        <h2 className="font-primary font-bold text-teal-navy text-2xl md:text-3xl leading-tight mb-8">
          {heading}
        </h2>
        <FaqAccordion items={faqs} />
      </div>
    );
  }

  return (
    <section className={`py-12 lg:py-16 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          <div className="lg:col-span-5" data-reveal>
            <div className="lg:sticky lg:top-28">
              <SectionLabel text={label} />
              <h2 className="font-primary font-bold text-teal-navy text-4xl md:text-5xl leading-tight">
                {heading}
              </h2>
              {aside && <div className="mt-6">{aside}</div>}
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
