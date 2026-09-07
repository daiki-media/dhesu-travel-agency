import Link from "next/link";
import Button from "@/src/components/Button";

// Closing "Start Planning Your Next Holiday" block of the Holiday Idea sheet.
export default function HomeCta() {
  return (
    <section className="bg-teal-navy py-12 lg:py-16">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center" data-reveal>
        <p className="font-secondary text-white/80 text-2xl md:text-3xl mb-2">
          Let&apos;s Go Together
        </p>
        <h2 className="font-primary font-bold text-white text-3xl md:text-5xl leading-tight mb-5">
          Start Planning Your Next Holiday
        </h2>
        <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
          Whether you already know your destination or need help narrowing it down, a
          consultant can help turn your travel ideas into a properly planned itinerary.
          Reach out today for a free, personalised quote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link href="/contact#free-quote">
            <Button variant="light" showArrow size="lg">
              Get a Free Quote
            </Button>
          </Link>
          <Link href="/tours">
            <Button variant="transparent" showArrow size="lg">
              Browse Destinations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
