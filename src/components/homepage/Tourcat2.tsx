"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const categories = [
  { name: "Hiking",   link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Hiking",   image: "/images/gallery/14145.jpg" },
  { name: "Cruises",  link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Cruises",  image: "/images/gallery/15205.jpg" },
  { name: "Airbirds", link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Airbirds", image: "/images/gallery/14410.jpg" },
  { name: "Wildlife", link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Wildlife", image: "/images/gallery/3370.png"  },
  { name: "Walking",  link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Walking",  image: "/images/gallery/14479.jpg" },
  { name: "Camping",  link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Camping",  image: "/images/gallery/3404.jpg"  },
  { name: "Surfing",  link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Surfing",  image: "/images/gallery/15198.jpg" },
  { name: "Safari",   link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Safari",   image: "/images/gallery/14981.jpg" },
  { name: "Diving",   link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Diving",   image: "/images/gallery/10531.jpg" },
  { name: "Skiing",   link: "https://www.holidayidea.com.my/promo/search-travel.php?s=Skiing",   image: "/images/gallery/14620.jpg" },
];

// Responsive slot configurations based on screen width
const getResponsiveSlots = (screenWidth: number) => {
  // Mobile (default)
  if (screenWidth < 640) {
    return [
      { w: 220, h: 270, dropY: 0,   op: 1,   z: 50, bright: 1,    fs: "1.2rem",  shadow: "0 20px 60px rgba(0,0,0,0.18)" },
      { w: 190, h: 235, dropY: 30,  op: 1,   z: 40, bright: 0.95, fs: "1rem",    shadow: "0 8px 28px rgba(0,0,0,0.12)"  },
      { w: 160, h: 200, dropY: 55,  op: 0.9, z: 30, bright: 0.87, fs: "0.9rem",  shadow: "0 4px 16px rgba(0,0,0,0.09)"  },
      { w: 130, h: 165, dropY: 75,  op: 0,   z: 10, bright: 0.75, fs: "0.8rem",  shadow: "none"                          },
    ];
  }
  // Tablet
  else if (screenWidth < 1024) {
    return [
      { w: 250, h: 305, dropY: 0,   op: 1,   z: 50, bright: 1,    fs: "1.3rem",  shadow: "0 20px 60px rgba(0,0,0,0.18)" },
      { w: 220, h: 270, dropY: 35,  op: 1,   z: 40, bright: 0.95, fs: "1.05rem", shadow: "0 8px 28px rgba(0,0,0,0.12)"  },
      { w: 185, h: 230, dropY: 65,  op: 0.9, z: 30, bright: 0.87, fs: "0.95rem", shadow: "0 4px 16px rgba(0,0,0,0.09)"  },
      { w: 150, h: 190, dropY: 85,  op: 0,   z: 10, bright: 0.75, fs: "0.85rem", shadow: "none"                          },
    ];
  }
  // Desktop
  else {
    return [
      { w: 270, h: 330, dropY: 0,   op: 1,   z: 50, bright: 1,    fs: "1.4rem",  shadow: "0 20px 60px rgba(0,0,0,0.18)" },
      { w: 245, h: 300, dropY: 40,  op: 1,   z: 40, bright: 0.95, fs: "1.1rem",  shadow: "0 8px 28px rgba(0,0,0,0.12)"  },
      { w: 215, h: 265, dropY: 75,  op: 0.9, z: 30, bright: 0.87, fs: "1rem",    shadow: "0 4px 16px rgba(0,0,0,0.09)"  },
      { w: 180, h: 225, dropY: 100, op: 0,   z: 10, bright: 0.75, fs: "0.9rem",  shadow: "none"                          },
    ];
  }
};

const GAP_BASE = 20;
const AUTO_MS  = 3500;
const EASE     = "cubic-bezier(0.4,0,0.2,0)";
const DUR      = "0.7s";

type Slot = {
  w: number;
  h: number;
  dropY: number;
  op: number;
  z: number;
  bright: number;
  fs: string;
  shadow: string;
};

function getSlot(absOff: number, slots: Slot[]): Slot {
  return slots[Math.min(absOff, slots.length - 1)];
}

interface Layout { x: number; y: number; s: Slot; absOff: number; }

function computeLayouts(stageW: number, current: number, slots: Slot[], gap: number): Layout[] {
  const CX = stageW / 2;
  const n = categories.length;
  return categories.map((_, idx) => {
    let off = idx - current;
    if (off > n / 2) off -= n;
    if (off < -n / 2) off += n;
    const absOff = Math.abs(off);
    const s = getSlot(absOff, slots);
    let x: number;
    if (off === 0) {
      x = CX - s.w / 2;
    } else {
      let acc = slots[0].w / 2 + gap;
      for (let k = 1; k < absOff; k++) acc += getSlot(k, slots).w + gap;
      x = off > 0 ? CX + acc : CX - acc - s.w;
    }
    return { x, y: 40 + s.dropY, s, absOff };
  });
}

export default function TourCategories() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const stageRef   = useRef<HTMLDivElement>(null);
  const inView     = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current,      setCurrent]      = useState(0);
  const [stageWidth,   setStageWidth]   = useState(0);
  const [screenWidth,  setScreenWidth]  = useState(0);
  const [gap, setGap] = useState(GAP_BASE);
  
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const dragRef = useRef({ active: false, startX: 0 });

  // Get responsive slots based on screen width
  const slots = getResponsiveSlots(screenWidth);
  
  // Calculate stage height based on slots
  const stageHeight = slots[0].h + 40 + slots[2].dropY + 60;

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
      // Adjust gap for mobile
      if (window.innerWidth < 640) {
        setGap(12);
      } else if (window.innerWidth < 1024) {
        setGap(16);
      } else {
        setGap(GAP_BASE);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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
    if (Math.abs(dx) > 40) { 
      goTo(current + (dx < 0 ? 1 : -1)); 
      resetAuto(); 
    }
  };

  const layouts = stageWidth > 0 && screenWidth > 0 ? computeLayouts(stageWidth, current, slots, gap) : null;

  return (
    <section className="pt-100 lg:pt-50 pb-4 bg-pattern overflow-hidden" ref={sectionRef}>
      <div className="px-4 sm:px-6 md:px-8 lg:px-12">
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.55 }}
        >
          <p className="font-secondary text-primary-dark text-xl sm:text-2xl md:text-3xl mb-1 sm:mb-2">
            Wonderful Place For You
          </p>
          <h2 className="font-primary text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-teal-navy">
            Tour Categories
          </h2>
        </motion.div>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          {/* Stage - Responsive height */}
          <div
            ref={stageRef}
            className="relative w-full select-none cursor-grab active:cursor-grabbing mx-auto"
            style={{ 
              height: stageHeight,
              maxWidth: '1400px',
              margin: '0 auto'
            }}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
            onPointerLeave={onPointerUp}
          >
            {layouts?.map((l, idx) => {
              const { s, absOff } = l;
              const cat = categories[idx];
              const isActive = absOff === 0;
              const TRANS = `left ${DUR} ${EASE},top ${DUR} ${EASE},opacity ${DUR} ${EASE},filter ${DUR} ${EASE}`;
              const IMG_TRANS = `width ${DUR} ${EASE},height ${DUR} ${EASE},box-shadow ${DUR} ease`;

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
                      borderRadius: "clamp(16px, 4vw, 22px)",
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
                      priority={idx < 3}
                    />
                  </div>
                  <h3
                    className="font-primary font-extrabold text-[#0d2b3e] mt-3 sm:mt-4"
                    style={{ 
                      fontSize: `clamp(${s.fs}, 3vw, ${s.fs})`,
                      transition: `font-size ${DUR} ${EASE}` 
                    }}
                  >
                    {cat.name}
                  </h3>
                  <a 
                    href={cat.link} 
                    className="text-[#b0bec5] text-xs sm:text-sm mt-1 hover:text-primary-dark transition-colors inline-block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    See More
                  </a>
                </div>
              );
            })}
          </div>

          {/* Dots Navigation - Enhanced for mobile */}
          <div className="flex justify-center items-center gap-1.5 sm:gap-2 mt-6 sm:mt-8 md:mt-10">
            {categories.map((_, i) => {
              const active = i === current;
              return (
                <button
                  key={i}
                  aria-label={`Go to ${categories[i].name}`}
                  onClick={() => { goTo(i); resetAuto(); }}
                  className="transition-all duration-300 hover:scale-110"
                  style={{
                    width:        active ? "clamp(24px, 6vw, 32px)" : "clamp(8px, 2vw, 10px)",
                    height:       "clamp(8px, 2vw, 10px)",
                    borderRadius: 999,
                    background:   active ? "#990000" : "transparent",
                    border:       `1.5px solid ${active ? "#990000" : "#990000"}`,
                    padding:      0,
                    cursor:       "pointer",
                  }}
                />
              );
            })}
          </div>
          
          {/* Mobile swipe hint */}
          <div className="text-center mt-4 sm:hidden">
            <p className="text-xs text-gray-400">← Swipe to explore →</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}