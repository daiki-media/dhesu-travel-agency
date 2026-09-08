"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchHero from '@/src/components/homepage/SearchHero';
import ArrowUp from "@/src/components/icons/ArrowUp";
import ArrowDown from "@/src/components/icons/ArrowDown";
import Button from "../Button";

// One slide per theme of the Holiday Idea sheet: the headline offer, why an
// agency, and ready-made vs customized. Slide one carries the page H1; the
// others render the same styling as a paragraph so the page keeps one H1.
const inlineLink =
  "underline decoration-white/50 underline-offset-4 hover:decoration-white transition-colors";

const slides: {
  bg: string;
  alt: string;
  eyebrow: string;
  title: [string, string];
  body: React.ReactNode;
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}[] = [
  {
    bg: "/images/gallery/12615.jpg",
    alt: "Traveller on a swing overlooking a lake in the Dieng highlands",
    eyebrow: "Trusted by Malaysian Travellers Since 1988",
    title: ["Daily Customized &", "Ready-Made Holidays"],
    // The sheet links Bali and Varanasi to the legacy holidayidea.com.my
    // pages; these are the same destinations on this site (Varanasi is the
    // sheet's package 2207).
    body: (
      <>
        Arranging a holiday ought to be fun-filled, not stress-inducing. For more than three
        decades, Dhesu Travel &amp; Tours has helped travellers from Malaysia turn the
        &ldquo;place I&apos;d like to see someday&rdquo; into an organised holiday, whether
        that place is{" "}
        <Link href="/tours/indonesia" className={inlineLink}>
          Bali
        </Link>
        ,{" "}
        <Link href="/tours/india/north-india/3-day-varanasi-ganga-aarti" className={inlineLink}>
          Varanasi
        </Link>
        , Nepal or anywhere else.
      </>
    ),
    primary: { label: "Explore Tours", href: "/tours" },
    secondary: { label: "Get a Free Quote", href: "/contact-us#free-quote" },
  },
  {
    bg: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop",
    alt: "Tropical island coastline seen from above",
    eyebrow: "Why Malaysians Still Choose an Agency",
    title: ["A Real Person to Call,", "Wherever You Are"],
    body:
      "Curated itineraries built from decades of on-ground experience, negotiated group rates that are hard to replicate piece by piece, and a real person to call if a flight is delayed or an itinerary needs adjusting.",
    primary: { label: "Why Book With Us", href: "#why-choose-dhesu" },
    secondary: { label: "Get a Free Quote", href: "/contact-us#free-quote" },
  },
  {
    bg: "/images/gallery/140.jpg",
    alt: "Scenic travel destination",
    eyebrow: "30+ Years, Built One Trip at a Time",
    title: ["Ready-Made or", "Fully Customized"],
    body:
      "Proven itineraries with set inclusions and competitive group pricing, or a trip tailored to your exact dates, interests and group size. Both draw on the same destination expertise and supplier relationships.",
    primary: { label: "View Tour Packages", href: "/tours" },
    secondary: { label: "Request a Custom Itinerary", href: "/custom-itinerary-request" },
  },
];

const SLIDE_MS = 6000;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [current, setCurrent] = useState(0);
  const [mounted, setMounted] = useState([0]);
  const [advanced, setAdvanced] = useState(false);

  const goTo = (next: number) => {
    setAdvanced(true);
    setCurrent(((next % slides.length) + slides.length) % slides.length);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const section = sectionRef.current;
    let timer: ReturnType<typeof setInterval> | undefined;
    let idle: number | undefined;
    let onScreen = true;

    const observer = section
      ? new IntersectionObserver(([entry]) => {
          onScreen = entry.isIntersecting;
        })
      : null;
    observer?.observe(section!);

    const start = () => {
      timer = setInterval(() => {
        if (document.hidden || !onScreen) return;
        setAdvanced(true);
        setCurrent((prev) => (prev + 1) % slides.length);
      }, SLIDE_MS);
    };

    const INTERACTION_EVENTS = ["pointerdown", "pointermove", "touchstart", "keydown", "wheel", "scroll"] as const;

    const begin = () => {
      INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, begin));
      idle =
        "requestIdleCallback" in window
          ? window.requestIdleCallback(start, { timeout: 2000 })
          : (setTimeout(start, 1200) as unknown as number);
    };

    INTERACTION_EVENTS.forEach((e) =>
      window.addEventListener(e, begin, { once: true, passive: true })
    );

    return () => {
      clearInterval(timer);
      INTERACTION_EVENTS.forEach((e) => window.removeEventListener(e, begin));
      observer?.disconnect();
      if (idle !== undefined && "cancelIdleCallback" in window) window.cancelIdleCallback(idle);
    };
  }, []);

  if (!mounted.includes(current)) {
    setMounted([...mounted, current]);
  }

  const titleClass =
    "font-primary text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6 tracking-tight";

  return (
    <section ref={sectionRef} className="relative h-[600px] md:h-[700px] bg-slate-900 overflow-x-clip">
      {slides.map((slide, i) =>
        mounted.includes(i) ? (
          <div
            key={slide.bg}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out hero-slide-appear"
            // Inactive slides sit at 0.01, not 0. Fading the active slide — the
            // page's LCP element — to exactly opacity 0 trips a documented
            // Chromium bug that discards the LCP measurement entirely, which is
            // what had PageSpeed Insights erroring with NO_LCP on this page
            // (see the note in index.css). At 0.01 the outgoing slide is
            // invisible behind the incoming opaque one, but LCP tracking
            // survives the rotation.
            style={{ opacity: i === current ? 1 : 0.01 }}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.bg}
              alt={slide.alt}
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              loading={i === 0 ? "eager" : "lazy"}
              className="object-cover scale-105"
              sizes="100vw"
            />
          </div>
        ) : null
      )}

      <div className="absolute inset-0 bg-black/45 z-[1]" />

      <div className="relative z-10 h-full max-w-8xl mx-auto px-8 flex items-center">
        <div className="max-w-4xl">
          {/* Every slide's copy stays in the DOM (hidden, not unmounted) so
              crawlers and reader mode see all three; only the active one shows.
              Toggling display restarts the hero-copy entrance each time. */}
          {slides.map((slide, i) => {
            const active = i === current;
            return (
              <div key={slide.bg} hidden={!active} aria-hidden={!active}>
                <div className={advanced ? "hero-copy" : undefined}>
                  <p className="font-secondary text-white text-3xl md:text-4xl mb-4 drop-shadow-md">
                    {slide.eyebrow}
                  </p>
                  {i === 0 ? (
                    <h1 className={titleClass}>
                      {slide.title[0]}
                      <br />
                      {slide.title[1]}
                    </h1>
                  ) : (
                    <p className={titleClass}>
                      {slide.title[0]}
                      <br />
                      {slide.title[1]}
                    </p>
                  )}
                  <p className="hidden md:block text-white/85 text-lg leading-relaxed max-w-2xl mb-10">
                    {slide.body}
                  </p>
                </div>

                <div className="flex gap-4 flex-wrap mt-6 md:mt-0">
                  <Link href={slide.primary.href}>
                    <Button variant="light" showArrow size="lg">{slide.primary.label}</Button>
                  </Link>
                  <Link href={slide.secondary.href}>
                    <Button variant="transparent" showArrow size="lg">{slide.secondary.label}</Button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous slide"
          className="w-16 h-16 rounded-full bg-black/35 text-white ring-1 ring-white/40 flex items-center justify-center hover:bg-primary-dark transition-colors duration-300 ease-in-out mb-4"
        >
          <ArrowUp />
        </button>

        <div className="relative flex flex-col gap-7 items-center py-2">
            <div className="absolute w-[2px] h-full bg-white/30 left-1/2 -translate-x-1/2" />
            {slides.map((slide, i) => (
                <div
                    key={slide.bg}
                    className={`relative z-10 w-2 h-2 rounded-full transition-all duration-500 ${
                        i === current ? "bg-primary scale-150" : "bg-white/60"
                    }`}
                />
            ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next slide"
          className="w-16 h-16 rounded-full bg-black/35 text-white ring-1 ring-white/40 flex items-center justify-center hover:bg-primary-dark transition-colors duration-300 ease-in-out mt-4"
        >
          <ArrowDown />
        </button>
      </div>
       <SearchHero/>
    </section>
  );
}
