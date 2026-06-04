"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

// ─── Types ───────────────────────────────────────────────────────────────
interface Category {
  name: string;
  link: string;
  image: string;
}

// ─── Data ────────────────────────────────────────────────────────────────
const categories: Category[] = [
  {
    name: "Hiking",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Hiking",
    image: "https://www.holidayidea.com.my/upload/gallery/14145.jpg",
  },
  {
    name: "Cruises",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Cruises",
    image: "https://www.holidayidea.com.my/upload/gallery/15205.jpg",
  },
  {
    name: "Airbirds",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Airbirds",
    image: "https://www.holidayidea.com.my/upload/gallery/14410.jpg",
  },
  {
    name: "Wildlife",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Wildlife",
    image: "https://www.holidayidea.com.my/upload/gallery/3370.png",
  },
  {
    name: "Walking",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Walking",
    image: "https://www.holidayidea.com.my/upload/gallery/14479.jpg",
  },
  {
    name: "Camping",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Camping",
    image: "https://www.holidayidea.com.my/upload/gallery/3404.jpg",
  },
  {
    name: "Surfing",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Surfing",
    image: "https://www.holidayidea.com.my/upload/gallery/15198.jpg",
  },
  {
    name: "Safari",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Safari",
    image: "https://www.holidayidea.com.my/upload/gallery/14981.jpg",
  },
  {
    name: "Diving",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Diving",
    image: "https://www.holidayidea.com.my/upload/gallery/10531.jpg",
  },
  {
    name: "Skiing",
    link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Skiing",
    image: "https://www.holidayidea.com.my/upload/gallery/14620.jpg",
  },
];

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

  const inView = useInView(sectionRef, {
    once: true,
    margin: "-80px",
  });

  const total = categories.length;

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

  useEffect(() => {
    startAuto();

    return stopAuto;
  }, [startAuto, stopAuto]);

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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center lg:mb-14"
        >
          <p className="font-secondary text-primary-dark mb-2 text-2xl">
            Wonderful Place For You
          </p>

          <h2 className="font-primary text-teal-navy text-4xl font-bold md:text-5xl lg:text-6xl">
            Tour Categories
          </h2>
        </motion.div>

        {/* Stage */}
        <motion.div
          ref={stageRef}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ height: stageH }}
          className="relative w-full"
        >
          {slots.map(({ slot, slotOffset, catIdx, pos }) => {
            const cat = categories[catIdx];

            return (
              <motion.div key={slot} role="button" tabIndex={0} 
                onClick={() => { if (slotOffset !== 0) goTo(catIdx); else window.open(cat.link, "_blank"); }} 
                onKeyDown={(e) => { if (e.key === "Enter") { if (slotOffset !== 0) goTo(catIdx); else window.open(cat.link, "_blank"); } }} 
                animate={{ left: pos.x, top: pos.y, rotate: pos.rot, scale: slotOffset === 0 ? 1 : 0.88, opacity: slotOffset === 0 ? 1 : 0.6 }} 
                transition={{ type: "spring", stiffness: 120, damping: 20 }} style={{ zIndex: VISIBLE - Math.abs(slotOffset) }} 
                className="absolute flex w-[380px] cursor-pointer flex-col items-center">
                  
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

                  <p className="hover:text-primary-dark mt-1 text-xs text-black transition-colors sm:text-sm">
                    See More
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Dots */}
        <div className="relative z-10 flex justify-center gap-3">
          {categories.map((cat, i) => (
            <button
              key={cat.name}
              aria-label={`Go to ${cat.name}`}
              onClick={() => goTo(i)}
              className={`h-4 border border-[#990000] transition-all duration-300 ${
                i === centerIdx
                  ? "w-8 rounded-full bg-[#990000]"
                  : "w-4 rounded-full bg-transparent"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}