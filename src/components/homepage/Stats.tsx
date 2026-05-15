"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

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
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 bg-white" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-4 items-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className={`flex flex-col items-center ${
                i % 2 === 0 ? "lg:mt-12" : "lg:-mt-12"
              }`}
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
