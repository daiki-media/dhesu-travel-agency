"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import SearchHero from "@/src/components/homepage/SearchHero";
import ArrowUp from "@/src/components/icons/ArrowUp";
import ArrowDown from "@/src/components/icons/ArrowDown";
import Button from "../Button";

const slides = [
  {
    bg: "/images/gallery/12615.jpg",
    subtitle: "Get unforgettable pleasure with us",
    title1: "Natural Wonder",
    title2: "of the world",
  },
  {
    bg: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1920&auto=format&fit=crop",
    subtitle: "Experience amazing adventures",
    title1: "Discover Hidden",
    title2: "Gem Destinations",
  },
  {
    bg: "/images/gallery/140.jpg",
    subtitle: "Travel the world with us",
    title1: "Explore the",
    title2: "Beautiful World",
  },
];

const SLIDE_MS = 6000;

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const [current, setCurrent] = useState(0);
  const [carouselEnabled, setCarouselEnabled] = useState(false);

  const normalizeSlide = (index: number) => {
    return ((index % slides.length) + slides.length) % slides.length;
  };

  const goTo = (next: number) => {
    const target = normalizeSlide(next);

    if (!carouselEnabled) {
      setCarouselEnabled(true);

      /*
       * Wait until the interactive carousel has been mounted,
       * then move to the requested slide.
       */
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setCurrent(target);
        });
      });

      return;
    }

    setCurrent(target);
  };

  useEffect(() => {
    /*
     * Respect reduced-motion users.
     * Manual navigation still works through the arrow buttons.
     */
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const section = sectionRef.current;

    let timer: ReturnType<typeof setInterval> | undefined;
    let idleCallbackId: number | undefined;
    let fallbackTimeoutId: ReturnType<typeof setTimeout> | undefined;

    let onScreen = true;
    let started = false;

    /*
     * Do not rotate slides while the hero is outside the viewport.
     */
    const observer = section
      ? new IntersectionObserver(
          ([entry]) => {
            onScreen = entry.isIntersecting;
          },
          {
            threshold: 0.05,
          }
        )
      : null;

    if (section) {
      observer?.observe(section);
    }

    /*
     * Start automatic rotation only after the user has interacted
     * with the page.
     *
     * This keeps the initial hero/LCP completely static.
     */
    const startCarousel = () => {
      if (started) {
        return;
      }

      started = true;
      setCarouselEnabled(true);

      timer = setInterval(() => {
        if (document.hidden || !onScreen) {
          return;
        }

        setCurrent((prev) => (prev + 1) % slides.length);
      }, SLIDE_MS);
    };

    const INTERACTION_EVENTS = [
      "pointerdown",
      "pointermove",
      "touchstart",
      "keydown",
      "wheel",
      "scroll",
    ] as const;

    const begin = () => {
      INTERACTION_EVENTS.forEach((event) => {
        window.removeEventListener(event, begin);
      });

      /*
       * Let initial rendering and LCP settle before initializing
       * automatic carousel behaviour.
       */
      if ("requestIdleCallback" in window) {
        idleCallbackId = window.requestIdleCallback(startCarousel, {
          timeout: 2000,
        });
      } else {
        fallbackTimeoutId = setTimeout(startCarousel, 1200);
      }
    };

    INTERACTION_EVENTS.forEach((event) => {
      window.addEventListener(event, begin, {
        once: true,
        passive: true,
      });
    });

    return () => {
      if (timer) {
        clearInterval(timer);
      }

      if (fallbackTimeoutId) {
        clearTimeout(fallbackTimeoutId);
      }

      INTERACTION_EVENTS.forEach((event) => {
        window.removeEventListener(event, begin);
      });

      observer?.disconnect();

      if (
        idleCallbackId !== undefined &&
        "cancelIdleCallback" in window
      ) {
        window.cancelIdleCallback(idleCallbackId);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[600px] md:h-[700px] bg-slate-900 overflow-hidden"
    >
      {/* =========================================================
          INITIAL STATIC HERO
          =========================================================

          Before interaction, Lighthouse/browser gets one completely
          static hero image.

          No opacity animation.
          No opacity manipulation.
          No scale transform.
          No translate transform.
          No carousel movement.
          No dynamically mounted competing slides.
      */}

      {!carouselEnabled && (
        <div className="absolute inset-0">
          <Image
            src={slides[0].bg}
            alt={slides[0].title1}
            fill
            priority
            fetchPriority="high"
            loading="eager"
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}

      {/* =========================================================
          INTERACTIVE SLIDER
          =========================================================

          Once the user interacts, the regular carousel is mounted.

          Slides use horizontal translate animation instead of opacity.
      */}

      {carouselEnabled && (
        <div className="absolute inset-0 overflow-hidden">
          {slides.map((slide, i) => {
            const offset = i - current;

            return (
              <div
                key={slide.bg}
                className="
                  absolute
                  inset-0
                  transition-transform
                  duration-700
                  ease-in-out
                  will-change-transform
                "
                style={{
                  transform: `translate3d(${offset * 100}%, 0, 0)`,
                }}
                aria-hidden={i !== current}
              >
                <Image
                  src={slide.bg}
                  alt={slide.title1}
                  fill
                  priority={i === 0}
                  fetchPriority={i === 0 ? "high" : "auto"}
                  loading={i === 0 ? "eager" : "lazy"}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            );
          })}
        </div>
      )}

      {/* =========================================================
          DARK OVERLAY
          ========================================================= */}

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      {/* =========================================================
          HERO CONTENT
          ========================================================= */}

      <div className="relative z-10 h-full max-w-8xl mx-auto px-8 flex items-center">
        <div className="max-w-8xl">
          <div>
            <p className="font-secondary text-white text-3xl md:text-4xl mb-4 drop-shadow-md">
              {slides[current].subtitle}
            </p>

            <h1 className="font-primary text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.05] mb-10 tracking-tight">
              {slides[current].title1}
              <br />
              {slides[current].title2}
            </h1>
          </div>

          <div className="flex gap-4 flex-wrap">
            <Link href="/tours">
              <Button variant="light" showArrow size="lg">
                Explore Tours
              </Button>
            </Link>

            <Link href="/about-us">
              <Button variant="transparent" showArrow size="lg">
                Our Services
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* =========================================================
          SLIDER NAVIGATION
          ========================================================= */}

      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          aria-label="Previous slide"
          className="
            w-16
            h-16
            rounded-full
            bg-black/35
            text-white
            ring-1
            ring-white/40
            flex
            items-center
            justify-center
            hover:bg-primary-dark
            transition-colors
            duration-300
            ease-in-out
            mb-4
          "
        >
          <ArrowUp />
        </button>

        <div className="relative flex flex-col gap-7 items-center py-2">
          <div className="absolute w-[2px] h-full bg-white/30 left-1/2 -translate-x-1/2" />

          {slides.map((slide, i) => (
            <div
              key={slide.bg}
              className={`
                relative
                z-10
                w-2
                h-2
                rounded-full
                transition-transform
                duration-300
                ${
                  i === current
                    ? "bg-primary scale-150"
                    : "bg-white/60"
                }
              `}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => goTo(current + 1)}
          aria-label="Next slide"
          className="
            w-16
            h-16
            rounded-full
            bg-black/35
            text-white
            ring-1
            ring-white/40
            flex
            items-center
            justify-center
            hover:bg-primary-dark
            transition-colors
            duration-300
            ease-in-out
            mt-4
          "
        >
          <ArrowDown />
        </button>
      </div>

      {/* =========================================================
          SEARCH
          ========================================================= */}

      <SearchHero />
    </section>
  );
}