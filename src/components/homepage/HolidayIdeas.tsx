"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { holidayIdeas } from "@/src/data/holidayIdeas";

// The stacked "coverflow" carousel from the retired Tourcat2 component, now
// fed by the themed and seasonal pages instead of the destinations that the
// trending carousel above already covers.
//
// Performance notes, because the homepage LCP score is guarded:
// - No framer-motion; positions animate with CSS transitions on the compositor.
// - The cards are in the server HTML (a desktop layout is assumed until the
//   stage is measured), so crawlers see the links without running JS.
// - Images are plain lazy next/image; nothing here is prioritised.
// - The autoplay timer only runs while the section is on screen.

type Slot = {
  w: number;
  h: number;
  dropY: number;
  op: number;
  z: number;
  bright: number;
  shadow: string;
};

const SLOTS: Record<"mobile" | "tablet" | "desktop", { gap: number; slots: Slot[] }> = {
  mobile: {
    gap: 12,
    slots: [
      { w: 220, h: 270, dropY: 0, op: 1, z: 50, bright: 1, shadow: "0 20px 60px rgba(0,0,0,0.18)" },
      { w: 190, h: 235, dropY: 30, op: 1, z: 40, bright: 0.95, shadow: "0 8px 28px rgba(0,0,0,0.12)" },
      { w: 160, h: 200, dropY: 55, op: 0.9, z: 30, bright: 0.87, shadow: "0 4px 16px rgba(0,0,0,0.09)" },
      { w: 130, h: 165, dropY: 75, op: 0, z: 10, bright: 0.75, shadow: "none" },
    ],
  },
  tablet: {
    gap: 16,
    slots: [
      { w: 250, h: 305, dropY: 0, op: 1, z: 50, bright: 1, shadow: "0 20px 60px rgba(0,0,0,0.18)" },
      { w: 220, h: 270, dropY: 35, op: 1, z: 40, bright: 0.95, shadow: "0 8px 28px rgba(0,0,0,0.12)" },
      { w: 185, h: 230, dropY: 65, op: 0.9, z: 30, bright: 0.87, shadow: "0 4px 16px rgba(0,0,0,0.09)" },
      { w: 150, h: 190, dropY: 85, op: 0, z: 10, bright: 0.75, shadow: "none" },
    ],
  },
  desktop: {
    gap: 20,
    slots: [
      { w: 270, h: 330, dropY: 0, op: 1, z: 50, bright: 1, shadow: "0 20px 60px rgba(0,0,0,0.18)" },
      { w: 245, h: 300, dropY: 40, op: 1, z: 40, bright: 0.95, shadow: "0 8px 28px rgba(0,0,0,0.12)" },
      { w: 215, h: 265, dropY: 75, op: 0.9, z: 30, bright: 0.87, shadow: "0 4px 16px rgba(0,0,0,0.09)" },
      { w: 180, h: 225, dropY: 100, op: 0, z: 10, bright: 0.75, shadow: "none" },
    ],
  },
};

const AUTO_MS = 3500;
const EASE = "cubic-bezier(0.4,0,0.2,0)";
const DUR = "0.7s";
// Server-side assumption until the stage is measured on the client.
const SSR_STAGE_W = 1232;

const items = holidayIdeas;
const n = items.length;

function breakpointFor(width: number) {
  if (width < 640) return "mobile";
  if (width < 1024) return "tablet";
  return "desktop";
}

function slotFor(absOff: number, slots: Slot[]) {
  return slots[Math.min(absOff, slots.length - 1)];
}

function computeLayouts(stageW: number, current: number, slots: Slot[], gap: number) {
  const cx = stageW / 2;
  return items.map((_, idx) => {
    let off = idx - current;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    const absOff = Math.abs(off);
    const s = slotFor(absOff, slots);
    let x: number;
    if (off === 0) {
      x = cx - s.w / 2;
    } else {
      let acc = slots[0].w / 2 + gap;
      for (let k = 1; k < absOff; k++) acc += slotFor(k, slots).w + gap;
      x = off > 0 ? cx + acc : cx - acc - s.w;
    }
    return { x, y: 40 + s.dropY, s, absOff };
  });
}

export default function HolidayIdeas() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragRef = useRef({ active: false, startX: 0 });

  const [inView, setInView] = useState(false);
  const [current, setCurrent] = useState(0);
  const [stageW, setStageW] = useState(SSR_STAGE_W);
  const [bp, setBp] = useState<keyof typeof SLOTS>("desktop");

  const { slots, gap } = SLOTS[bp];
  const stageH = slots[0].h + 40 + slots[2].dropY + 60;

  // Autoplay runs only while the section is on screen, and stops again when
  // it scrolls away, so it never competes with anything above the fold.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setInView(entry.isIntersecting), {
      rootMargin: "0px 0px -80px 0px",
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const measure = () => {
      setStageW(el.offsetWidth);
      setBp(breakpointFor(window.innerWidth));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % n) + n) % n);
  }, []);

  const stopAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = null;
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    autoRef.current = setInterval(() => setCurrent((c) => (c + 1) % n), AUTO_MS);
  }, [stopAuto]);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    startAuto();
    return stopAuto;
  }, [inView, startAuto, stopAuto]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = { active: true, startX: e.clientX };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > 40) {
      goTo(current + (dx < 0 ? 1 : -1));
      if (inView) startAuto();
    }
  };

  const layouts = computeLayouts(stageW, current, slots, gap);
  const TRANS = `left ${DUR} ${EASE},top ${DUR} ${EASE},opacity ${DUR} ${EASE},filter ${DUR} ${EASE}`;
  const IMG_TRANS = `width ${DUR} ${EASE},height ${DUR} ${EASE},box-shadow ${DUR} ease`;

  return (
    <section ref={sectionRef} className="py-12 lg:py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-8 lg:mb-12" data-reveal>
          <p className="font-secondary text-primary-dark text-2xl md:text-3xl mb-2">
            Holiday Ideas
          </p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-teal-navy mb-4">
            Trips Built Around an Occasion
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-[15px] md:text-base leading-relaxed">
            Themed and seasonal packages from the same team: Muslim-friendly itineraries,
            corporate incentives, cruise holidays, and school, year-end and Raya deals.
          </p>
        </div>

        {/* Stage */}
        <div
          ref={stageRef}
          className="relative w-full select-none cursor-grab active:cursor-grabbing"
          style={{ height: stageH }}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerLeave={onPointerUp}
          onMouseEnter={stopAuto}
          onMouseLeave={() => inView && startAuto()}
        >
          {layouts.map((l, idx) => {
            const { s, absOff } = l;
            const item = items[idx];
            const isActive = absOff === 0;
            return (
              <div
                key={item.href}
                onClick={() => {
                  if (!isActive) {
                    goTo(idx);
                    if (inView) startAuto();
                  }
                }}
                aria-hidden={s.op === 0}
                style={{
                  position: "absolute",
                  left: l.x,
                  top: l.y,
                  width: s.w,
                  opacity: s.op,
                  zIndex: s.z,
                  filter: s.bright < 1 ? `brightness(${s.bright})` : "none",
                  pointerEvents: absOff <= 2 ? "auto" : "none",
                  cursor: isActive ? "default" : "pointer",
                  textAlign: "center",
                  transition: TRANS,
                }}
              >
                <Link
                  href={item.href}
                  tabIndex={isActive ? 0 : -1}
                  className="block group"
                  onClick={(e) => {
                    // Off-centre cards bring themselves forward first; only the
                    // centre card navigates, which is what a click there means.
                    if (!isActive) e.preventDefault();
                  }}
                >
                  <div
                    className="overflow-hidden mx-auto"
                    style={{
                      width: s.w,
                      height: s.h,
                      borderRadius: "clamp(16px, 4vw, 22px)",
                      boxShadow: s.shadow,
                      transition: IMG_TRANS,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.label}
                      width={270}
                      height={330}
                      sizes="270px"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="font-primary font-extrabold text-teal-navy mt-3 sm:mt-4 leading-snug px-2"
                    style={{
                      fontSize: isActive ? "clamp(1.1rem, 2.5vw, 1.4rem)" : "clamp(0.9rem, 2vw, 1.05rem)",
                      transition: `font-size ${DUR} ${EASE}`,
                    }}
                  >
                    {item.label}
                  </h3>
                  <p
                    className="text-gray-500 text-xs sm:text-sm mt-1 px-2 leading-snug"
                    style={{ opacity: isActive ? 1 : 0, transition: `opacity ${DUR} ease` }}
                  >
                    {item.blurb}
                  </p>
                  <span className="inline-block mt-2 text-sm font-semibold text-primary-dark group-hover:text-primary transition-colors">
                    See More<span className="sr-only"> about {item.label}</span>
                  </span>
                </Link>
              </div>
            );
          })}
        </div>

        {/* Dots — 44px buttons around a small visual pill. */}
        <div className="flex justify-center items-center mt-4 sm:mt-6">
          {items.map((item, i) => {
            const active = i === current;
            return (
              <button
                key={item.href}
                type="button"
                aria-label={`Go to ${item.label}`}
                aria-current={active}
                onClick={() => {
                  goTo(i);
                  if (inView) startAuto();
                }}
                className="grid h-11 w-11 place-items-center"
              >
                <span
                  className={`block h-2.5 rounded-full border border-[#990000] transition-all duration-300 ${
                    active ? "w-7 bg-[#990000]" : "w-2.5 bg-transparent"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <p className="text-center mt-2 text-xs text-gray-400 sm:hidden">← Swipe to explore →</p>
      </div>
    </section>
  );
}
