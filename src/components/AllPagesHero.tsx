import Image from "next/image";
import Link from "next/link";
import Button from "@/src/components/Button";
import type { CtaAction } from "@/src/components/CtaSection";

/**
 * The hero for every page except the homepage, which keeps its own
 * search-led Hero.
 *
 * One structure throughout: a full-bleed photo under a darkening overlay, a
 * short eyebrow, a two-line h1 whose second line carries the accent colour,
 * a lead paragraph and an optional action.
 *
 * Animation is the CSS `animate-fade-up` utility rather than framer-motion, so
 * the hero costs no client JavaScript and paints with the document - it sits
 * above the fold on every page, so it is the LCP element.
 */
export default function AllPagesHero({
  eyebrow,
  badge,
  title,
  titleAccent,
  intro,
  image,
  imageAlt,
  actions,
  size = "md",
  align = "bottom",
  overlay = "gradient",
  breadcrumb,
  children,
}: {
  /** Small line-and-caps label above the heading. */
  eyebrow?: string;
  /** Pill alternative to `eyebrow`, for pages that state a promise up front. */
  badge?: string;
  title: string;
  /** Second heading line, rendered in the accent colour. */
  titleAccent?: string;
  intro?: React.ReactNode;
  image: string;
  imageAlt: string;
  actions?: CtaAction[];
  size?: "sm" | "md" | "lg";
  align?: "bottom" | "center";
  overlay?: "gradient" | "solid";
  /** Trail rendered above the eyebrow, e.g. Home / Blog / Category. */
  breadcrumb?: React.ReactNode;
  /** Extra content under the actions, e.g. a stats row. */
  children?: React.ReactNode;
}) {
  const heights = {
    sm: "min-h-[380px] lg:min-h-[460px]",
    md: "min-h-[420px] lg:min-h-[500px]",
    lg: "min-h-[560px] lg:min-h-[640px]",
  }[size];

  const titleSize =
    size === "lg"
      ? "text-4xl md:text-6xl lg:text-7xl"
      : "text-3xl md:text-5xl lg:text-6xl";

  return (
    <section
      className={`relative bg-teal-navy overflow-hidden flex ${heights} ${
        align === "center" ? "items-center" : "items-end"
      }`}
    >
      <div className="absolute inset-0">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          fetchPriority="high"
          className="object-cover"
          sizes="100vw"
        />
      </div>
      <div
        className={`absolute inset-0 ${
          overlay === "solid"
            ? "bg-black/60"
            : "bg-gradient-to-t from-black/85 via-black/45 to-black/10"
        }`}
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-12 py-12 lg:py-16">
        {breadcrumb && (
          <nav className="animate-fade-up flex flex-wrap items-center gap-1.5 text-white/60 text-xs mb-5 font-primary">
            {breadcrumb}
          </nav>
        )}

        {badge ? (
          <p className="animate-fade-up inline-flex items-center gap-2 bg-primary text-white text-sm font-semibold px-4 py-1.5 rounded-full mb-6 font-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-white" />
            {badge}
          </p>
        ) : (
          eyebrow && (
            <div className="animate-fade-up flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px] bg-primary" />
              <span className="text-white/80 font-semibold text-sm uppercase tracking-widest font-primary">
                {eyebrow}
              </span>
            </div>
          )
        )}

        <h1
          className={`font-primary font-bold leading-[1.05] max-w-4xl ${titleSize}`}
        >
          <span
            className="animate-fade-up block text-white"
            style={{ "--d": "100ms" } as React.CSSProperties}
          >
            {title}
          </span>
          {titleAccent && (
            <span
              className="animate-fade-up block text-primary"
              style={{ "--d": "180ms" } as React.CSSProperties}
            >
              {titleAccent}
            </span>
          )}
        </h1>

        {intro && (
          <p
            className="animate-fade-up mt-6 text-white/85 text-base md:text-lg leading-relaxed max-w-3xl"
            style={{ "--d": "300ms" } as React.CSSProperties}
          >
            {intro}
          </p>
        )}

        {actions && actions.length > 0 && (
          <div
            className="animate-fade-up mt-8 flex flex-wrap gap-4"
            style={{ "--d": "400ms" } as React.CSSProperties}
          >
            {actions.map((action, i) => (
              <Link key={action.href + action.label} href={action.href}>
                <Button
                  variant={i === 0 ? "light" : "transparent"}
                  showArrow
                  size="lg"
                >
                  {action.label}
                </Button>
              </Link>
            ))}
          </div>
        )}

        {children}
      </div>
    </section>
  );
}
