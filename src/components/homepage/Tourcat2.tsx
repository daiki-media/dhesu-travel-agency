"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const categories = [
  { name: "Hiking",   link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Hiking",   image: "https://www.holidayidea.com.my/upload/gallery/14145.jpg" },
  { name: "Cruises",  link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Cruises",  image: "https://www.holidayidea.com.my/upload/gallery/15205.jpg" },
  { name: "Airbirds", link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Airbirds", image: "https://www.holidayidea.com.my/upload/gallery/14410.jpg" },
  { name: "Wildlife", link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Wildlife", image: "https://www.holidayidea.com.my/upload/gallery/3370.png"  },
  { name: "Walking",  link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Walking",  image: "https://www.holidayidea.com.my/upload/gallery/14479.jpg" },
  { name: "Camping",  link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Camping",  image: "https://www.holidayidea.com.my/upload/gallery/3404.jpg"  },
  { name: "Surfing",  link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Surfing",  image: "https://www.holidayidea.com.my/upload/gallery/15198.jpg" },
  { name: "Safari",   link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Safari",   image: "https://www.holidayidea.com.my/upload/gallery/14981.jpg" },
  { name: "Diving",   link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Diving",   image: "https://www.holidayidea.com.my/upload/gallery/10531.jpg" },
  { name: "Skiing",   link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Skiing",   image: "https://www.holidayidea.com.my/upload/gallery/14620.jpg" },
];

/*
 * SLOTS — index = distance from active card
 * dropY  = px the card top falls BELOW the active card → creates the curve
 * Centre card (0) is highest. ±1 drops 40px. ±2 drops 75px.
 * Increase dropY values to make the curve more dramatic.
 */
const SLOTS = [
  { w: 270, h: 330, dropY: 0,   op: 1,   z: 50, bright: 1,    fs: "1.4rem",  shadow: "0 20px 60px rgba(0,0,0,0.18)" },
  { w: 245, h: 300, dropY: 40,  op: 1,   z: 40, bright: 0.95, fs: "1.1rem",  shadow: "0 8px 28px rgba(0,0,0,0.12)"  },
  { w: 215, h: 265, dropY: 75,  op: 0.9, z: 30, bright: 0.87, fs: "1rem",    shadow: "0 4px 16px rgba(0,0,0,0.09)"  },
  { w: 180, h: 225, dropY: 100, op: 0,   z: 10, bright: 0.75, fs: "0.9rem",  shadow: "none"                          },
] as const;

const GAP      = 20;
const TOP_BASE = 40;
const AUTO_MS  = 3500;
const EASE     = "cubic-bezier(0.4,0,0.2,0)";
const DUR      = "0.7s";
const TRANS    = `left ${DUR} ${EASE},top ${DUR} ${EASE},opacity ${DUR} ${EASE},filter ${DUR} ${EASE}`;
const IMG_TRANS = `width ${DUR} ${EASE},height ${DUR} ${EASE},box-shadow ${DUR} ease`;

type Slot = typeof SLOTS[number];

function getSlot(absOff: number): Slot {
  return SLOTS[Math.min(absOff, SLOTS.length - 1)];
}

interface Layout { x: number; y: number; s: Slot; absOff: number; }

function computeLayouts(stageW: number, current: number): Layout[] {
  const CX = stageW / 2;
  const n = categories.length;
  return categories.map((_, idx) => {
    let off = idx - current;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    const absOff = Math.abs(off);
    const s = getSlot(absOff);
    let x: number;
    if (off === 0) {
      x = CX - s.w / 2;
    } else {
      let acc = getSlot(0).w / 2 + GAP;
      for (let k = 1; k < absOff; k++) acc += getSlot(k).w + GAP;
      x = off > 0 ? CX + acc : CX - acc - s.w;
    }
    return { x, y: TOP_BASE + s.dropY, s, absOff };
  });
}

export default function TourCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef   = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current,    setCurrent]    = useState(0);
  const [stageWidth, setStageWidth] = useState(0);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragRef = useRef({ active: false, startX: 0 });

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setStageWidth(e.contentRect.width));
    ro.observe(el);
    setStageWidth(el.offsetWidth);
    return () => ro.disconnect();
  }, []);

  const goTo = useCallback((idx: number) => {
    setCurrent(((idx % categories.length) + categories.length) % categories.length);
  }, []);

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(
      () => setCurrent(c => (c + 1) % categories.length),
      AUTO_MS,
    );
  }, []);

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [resetAuto]);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    dragRef.current = { active: true, startX: e.clientX };
    e.currentTarget.setPointerCapture(e.pointerId);
  };
  const onPointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    const dx = e.clientX - dragRef.current.startX;
    if (Math.abs(dx) > 40) { goTo(current + (dx < 0 ? 1 : -1)); resetAuto(); }
  };

  const layouts = stageWidth > 0 ? computeLayouts(stageWidth, current) : null;

  return (
    <section className="py-50  bg-pattern" ref={sectionRef}>
      <div className="px-6">

        <motion.div
          className="text-center mb-10"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="font-montez text-primary-dark text-2xl md:text-3xl mb-1">
            Wonderful Place For You
          </p>
          <h2 className="font-manrope text-4xl md:text-5xl font-bold text-teal-navy">
            Tour Categories
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {/* Stage */}
          <div
            ref={stageRef}
            className="relative w-full select-none cursor-grab active:cursor-grabbing"
            style={{ height: 540 }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            {layouts?.map((l, idx) => {
              const { s, absOff } = l;
              const cat = categories[idx];
              const isActive = absOff === 0;

              return (
                <div
                  key={cat.name}
                  onClick={() => { if (!isActive) { goTo(idx); resetAuto(); } }}
                  style={{
                    position:      "absolute",
                    left:          l.x,
                    top:           l.y,
                    width:         s.w,
                    opacity:       s.op,
                    zIndex:        s.z,
                    filter:        s.bright < 1 ? `brightness(${s.bright})` : "none",
                    pointerEvents: absOff <= 2 ? "auto" : "none",
                    cursor:        isActive ? "default" : "pointer",
                    textAlign:     "center",
                    transition:    TRANS,
                  }}
                >
                  <div
                    className="group overflow-hidden"
                    style={{
                      width:        s.w,
                      height:       s.h,
                      borderRadius: "22px",
                      boxShadow:    s.shadow,
                      transition:   IMG_TRANS,
                    }}
                  >
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      width={270}
                      height={330}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <h3
                    className="font-manrope font-extrabold text-[#0d2b3e] mt-4"
                    style={{ fontSize: s.fs, transition: `font-size ${DUR} ${EASE}` }}
                  >
                    {cat.name}
                  </h3>
                  <a href={cat.link} className="text-[#b0bec5] text-sm mt-1">See More</a>
                </div>
              );
            })}
          </div>

          {/* Dots */}
          <div className="flex justify-center items-center gap-2 mt-3">
            {categories.map((_, i) => {
              const active = i === current;
              return (
                <button
                  key={i}
                  aria-label={`Go to ${categories[i].name}`}
                  onClick={() => { goTo(i); resetAuto(); }}
                  style={{
                    width:        active ? 32 : 10,
                    height:       10,
                    borderRadius: 999,
                    background:   active ? "#06b6d4" : "transparent",
                    border:       `1.5px solid ${active ? "#06b6d4" : "#b0d4e0"}`,
                    padding:      0,
                    cursor:       "pointer",
                    transition:   "all 0.35s ease",
                  }}
                />
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}