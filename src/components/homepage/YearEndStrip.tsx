import Link from "next/link";
import ArrowRight from "@/src/components/icons/ArrowRight";

// DHE-09: the homepage strip pointing at the year-end deals page. The whole
// strip is one link, server-rendered with no animation, so it costs the
// homepage's guarded LCP nothing. `relative z-10` because the hero image below
// is scaled 105% and would otherwise paint over the strip's bottom edge. Take
// it down once the December 2026 school holidays are over.
export default function YearEndStrip() {
  return (
    <Link
      href="/year-end-holiday-travel-deals-2026/"
      className="group relative z-10 block bg-teal-navy hover:bg-teal-navy/95 transition-colors"
    >
      <div className="max-w-7xl mx-auto px-6 py-3 sm:py-4 flex items-center justify-center gap-3 sm:gap-6 text-center">
        <span className="hidden sm:flex items-center justify-center gap-3">
          <span className="w-8 h-[2px] bg-primary" aria-hidden />
          <span className="text-white/70 font-semibold text-xs uppercase tracking-widest font-primary">
            Year-End 2026
          </span>
        </span>
        <span className="font-primary font-bold text-white text-sm sm:text-[15px] md:text-base">
          December School Holiday Packages from{" "}
          <span className="text-primary">RM398</span>
        </span>
        <span className="inline-flex shrink-0 items-center justify-center gap-1.5 text-white text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4 group-hover:text-primary transition-colors">
          <span className="hidden sm:inline">See the deals</span>
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}
