"use client";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 12, suffix: "", label: "Years Experience", dotPos: "bottom" },
  { value: 97, suffix: "%", label: "Retention Rate", dotPos: "top" },
  { value: 8, suffix: "K", label: "Tour Completed", dotPos: "bottom" },
  { value: 19, suffix: "K", label: "Happy Travellers", dotPos: "top" },
];

function Counter({ end, suffix, start }: { end: number; suffix: string; start: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
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
  }, [start, end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  // The counters need to start on scroll, which is the only reason this stays a
  // client component — a bare IntersectionObserver replaces framer's useInView.
  useEffect(() => {
    const el = ref.current;
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

  return (
    <section className="py-24 bg-white" ref={ref}>
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
                    <Counter end={stat.value} suffix={stat.suffix} start={inView} />
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
