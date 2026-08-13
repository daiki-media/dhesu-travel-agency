"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SearchHero from '@/src/components/homepage/SearchHero';
import ArrowUp from "@/src/components/icons/ArrowUp";
import ArrowDown from "@/src/components/icons/ArrowDown";
import Button from "../Button"; // Ensure your Button component supports 'rounded-full'
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

    const begin = () => {
      idle =
        "requestIdleCallback" in window
          ? window.requestIdleCallback(start, { timeout: 2000 })
          : (setTimeout(start, 1200) as unknown as number);
    };

    if (document.readyState === "complete") begin();
    else window.addEventListener("load", begin, { once: true });

    return () => {
      clearInterval(timer);
      window.removeEventListener("load", begin);
      observer?.disconnect();
      if (idle !== undefined && "cancelIdleCallback" in window) window.cancelIdleCallback(idle);
    };
  }, []);

  useEffect(() => {
    setMounted((prev) => (prev.includes(current) ? prev : [...prev, current]));
  }, [current]);

  return (
    <section ref={sectionRef} className="relative h-[600px] md:h-[700px] bg-slate-900 overflow-x-clip">
      {slides.map((slide, i) =>
        mounted.includes(i) ? (
          <div
            key={slide.bg}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === current ? 1 : 0 }}
            aria-hidden={i !== current}
          >
            <Image
              src={slide.bg}
              alt={slide.title1}
              fill
              priority={i === 0}
              fetchPriority={i === 0 ? "high" : "auto"}
              loading={i === 0 ? "eager" : "lazy"}
              className="object-cover scale-105" // Slight scale for a cinematic feel
              sizes="100vw"
            />
          </div>
        ) : null
      )}

      <div className="absolute inset-0 bg-black/40 z-[1]" />

      <div className="relative z-10 h-full max-w-8xl mx-auto px-8 flex items-center">
        <div className="max-w-8xl">
          <div className={advanced ? "hero-copy" : undefined}>
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
              <Button variant="light" showArrow size="lg">Explore Tours</Button>
            </Link>
            <Link href="/about-us">
              <Button variant="transparent" showArrow size="lg">Our Services</Button>
            </Link>
          </div>
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
