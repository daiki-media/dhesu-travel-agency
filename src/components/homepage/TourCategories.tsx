"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/src/data/destinations";

// ─── Types ───────────────────────────────────────────────────────────────
interface Category {
  name: string;
  link: string;
  image: string;
}

// ─── Data ────────────────────────────────────────────────────────────────
// Driven by the real destination list so every card links to a live hub page.
const categories: Category[] = destinations.map((d) => ({
  name: d.name,
  link: d.href,
  image: d.image,
}));

// ─── Constants ───────────────────────────────────────────────────────────
const VISIBLE = 5;
const CARD_W = 380;
const CARD_H = 320;
const RADIUS = 1400;
const SLOT_ANGLES = [-25, -12.5, 0, 12.5, 25];
const ROT_FACTOR = 1;
const AUTO_DELAY = 4000;

// ─── Helpers ─────────────────────────────────────────────────────────────
const mod = (n: number, m: number) => ((n % m) + m) % m;

function getSlotPos(slotAngle: number, stageW: number) {
  const rad = (slotAngle * Math.PI) / 180;
  const cx = stageW / 2;
  const cy = RADIUS + 60;

  return {
    x: cx + RADIUS * Math.sin(rad) - CARD_W / 2,
    y: cy - RADIUS * Math.cos(rad),
    rot: slotAngle * ROT_FACTOR,
  };
}

// ─── Component ───────────────────────────────────────────────────────────
export default function TourCategories() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<NodeJS.Timeout | null>(null);
  const animatingRef = useRef(false);

  const [inView, setInView] = useState(false);

  const total = categories.length;

  // Replaces framer's useInView: the carousel only needs to know when it is
  // approached, which one IntersectionObserver answers without the library.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const [centerIdx, setCenterIdx] = useState(2);
  const [stageW, setStageW] = useState(680);

  // Measure width
  useEffect(() => {
    const measure = () => {
      if (stageRef.current) {
        setStageW(stageRef.current.offsetWidth);
      }
    };

    measure();

    window.addEventListener("resize", measure);

    return () => window.removeEventListener("resize", measure);
  }, []);

  // Shift slides
  const shift = useCallback(
    (delta: number) => {
      if (animatingRef.current) return;

      animatingRef.current = true;

      setCenterIdx((prev) => mod(prev + delta, total));

      setTimeout(() => {
        animatingRef.current = false;
      }, 650);
    },
    [total]
  );

  // Go to slide
  const goTo = useCallback(
    (idx: number) => {
      if (animatingRef.current || idx === centerIdx) return;

      animatingRef.current = true;

      setCenterIdx(idx);

      setTimeout(() => {
        animatingRef.current = false;
      }, 650);
    },
    [centerIdx]
  );

  // Auto play
  const stopAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();

    autoRef.current = setInterval(() => {
      shift(1);
    }, AUTO_DELAY);
  }, [shift, stopAuto]);

  // The carousel sits well below the fold — leaving its timer (and the re-renders
  // it triggers) running from hydration competes with the hero paint.
  useEffect(() => {
    if (!inView) return;

    startAuto();

    return stopAuto;
  }, [inView, startAuto, stopAuto]);

  // Keyboard navigation
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") shift(-1);
      if (e.key === "ArrowRight") shift(1);
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, [shift]);

  // Visible slots
  const slots = Array.from({ length: VISIBLE }, (_, slot) => {
    const slotOffset = slot - Math.floor(VISIBLE / 2);
    const catIdx = mod(centerIdx + slotOffset, total);

    return {
      slot,
      slotOffset,
      catIdx,
      pos: getSlotPos(SLOT_ANGLES[slot], stageW),
    };
  });

  const stageH =
    Math.max(...slots.map(({ pos }) => pos.y)) + CARD_H + 20;

  return (
    <section ref={sectionRef} className="pt-100 lg:pt-50 pb-20 bg-pattern overflow-hidden">
      <div
        onMouseEnter={stopAuto}
        onMouseLeave={startAuto}
      >
        {/* Heading */}
        <div className="mb-10 text-center lg:mb-14" data-reveal>
          <p className="font-secondary text-primary-dark mb-2 text-2xl">
            Wonderful Place For You
          </p>

          <h2 className="font-primary text-teal-navy text-4xl font-bold md:text-5xl lg:text-6xl">
            Tour Categories
          </h2>
        </div>

        {/* Stage */}
        <div
          ref={stageRef}
          style={{ height: stageH }}
          className="relative w-full"
        >
          {slots.map(({ slot, slotOffset, catIdx, pos }) => {
            const cat = categories[catIdx];

            const isCentre = slotOffset === 0;

            return (
              <div
                key={slot}
                // The arc positioning was a framer spring; a CSS transition on
                // the same values animates it on the compositor instead.
                style={{
                  left: pos.x,
                  top: pos.y,
                  transform: `rotate(${pos.rot}deg) scale(${isCentre ? 1 : 0.88})`,
                  opacity: isCentre ? 1 : 0.6,
                  zIndex: VISIBLE - Math.abs(slotOffset),
                  transition:
                    "left .65s cubic-bezier(.22,1,.36,1), top .65s cubic-bezier(.22,1,.36,1), transform .65s cubic-bezier(.22,1,.36,1), opacity .65s ease",
                }}
                className="absolute flex w-[380px] flex-col items-center"
              >

                {/* A real anchor so the destination hubs stay crawlable; the
                    off-centre cards bring their slide forward first instead of
                    navigating, which is what a click there means visually. */}
                <Link
                  href={cat.link}
                  className="flex cursor-pointer flex-col items-center"
                  onClick={(e) => {
                    if (isCentre) return;
                    e.preventDefault();
                    goTo(catIdx);
                  }}
                >
                  <div className="group relative h-[320px] w-[280px] overflow-hidden rounded-[22px] shadow-xl transition-all duration-300 hover:shadow-2xl">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      sizes="280px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="mt-2 text-center">
                    <h3 className="font-primary text-primary-dark text-sm font-bold">
                      {cat.name}
                    </h3>

                    <p className="hover:text-primary-dark mt-1 text-xs text-gray-700 transition-colors sm:text-sm">
                      See More
                    </p>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Dots — the button keeps a 44px touch target while the inner span
            stays the small visual pill. */}
        <div className="relative z-10 flex justify-center">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              type="button"
              aria-label={`Go to ${cat.name}`}
              aria-current={i === centerIdx}
              onClick={() => goTo(i)}
              className="grid h-11 w-11 place-items-center"
            >
              <span
                className={`block h-4 rounded-full border border-[#990000] transition-all duration-300 ${
                  i === centerIdx ? "w-8 bg-[#990000]" : "w-4 bg-transparent"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}