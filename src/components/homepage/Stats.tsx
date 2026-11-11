"use client";
import { useRef, useEffect, useState } from "react";

// Figures the Holiday Idea sheet actually states; the previous values were
// placeholders (the "12 years" contradicted "since 1988").
const stats = [
  { value: 1988, suffix: "", label: "Founded in Kuala Lumpur", dotPos: "bottom" },
  { value: 30, suffix: "+", label: "Years of Experience", dotPos: "top" },
  { value: 3, suffix: "", label: "Industry Accreditations (IATA, PATA, MATTA)", dotPos: "bottom" },
  { value: 6, suffix: "", label: "Trending Destinations", dotPos: "top" },
];

// "static" is what the server renders, so the real figures are in the HTML for
// crawlers and for visitors without JS (they used to read "0"). Once the page
// is running, a section that is still below the fold is "armed" (reset to 0,
// unseen) and "run" counts it up when it scrolls into view.
type Phase = "static" | "armed" | "run";

function Counter({ end, suffix, phase }: { end: number; suffix: string; phase: Phase }) {
  // null until the count-up's first tick, so an armed or just-started counter
  // shows 0 rather than flashing the final figure.
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    if (phase !== "run") return;
    let current = 0;
    const duration = 2000;
    const steps = 60;
    const increment = end / steps;
    const interval = duration / steps;

    const timer = setInterval(() => {
      current += increment;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [phase, end]);

  return (
    <span>
      {phase === "static" ? end : (count ?? 0)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState<Phase>("static");

  // The counters start on scroll, which is the only reason this stays a client
  // component. A section already on screen, or a visitor who asked for reduced
  // motion, keeps the static figures instead of flashing back to 0.
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let first = true;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (first) {
          first = false;
          if (entry.isIntersecting) {
            io.disconnect();
          } else {
            setPhase("armed");
          }
          return;
        }
        if (entry.isIntersecting) {
          setPhase("run");
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="py-12 lg:py-16 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 items-center">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center ${
                i % 2 === 0 ? "lg:mt-12" : "lg:-mt-12"
              }`}
              data-reveal
              style={{ "--reveal-delay": `${i * 150}ms` } as React.CSSProperties}
            >
              {/* Outer ring with dot */}
              <div className="relative w-44 h-44 flex items-center justify-center">
                {/* Outer circle ring */}
                <div className="absolute inset-0 rounded-full border border-primary/30" />

                {/* Dot indicator on ring */}
                <div
                  className={`absolute w-3 h-3 rounded-full bg-primary shadow-lg shadow-primary/40 ${
                    stat.dotPos === "top"
                      ? "top-0 right-8"
                      : "bottom-0 left-8"
                  }`}
                />

                {/* Inner filled circle */}
                <div className="w-36 h-36 rounded-full bg-primary-dark/10 flex flex-col items-center justify-center shadow-inner">
                  <div className="text-4xl font-black text-teal-navy">
                    <Counter end={stat.value} suffix={stat.suffix} phase={phase} />
                  </div>
                  <div className="text-gray-500 text-sm mt-1 text-center font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
