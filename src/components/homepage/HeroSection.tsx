"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronRight,
  ChevronLeft,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

const destinations = [
  {
    id: 1,
    title: "Travel in Paris",
    image:
      "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Travel in Japan",
    image:
      "https://images.unsplash.com/photo-1492571350019-22de08371fd3?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Travel in Roma",
    image:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function TravelHero() {
  const [active, setActive] = useState(0);

  const prevSlide = () => {
    setActive((prev) =>
      prev === 0
        ? destinations.length - 1
        : prev - 1
    );
  };

  const nextSlide = () => {
    setActive((prev) =>
      prev === destinations.length - 1
        ? 0
        : prev + 1
    );
  };

  const getIndex = (index: number) => {
    const total = destinations.length;

    if (index < 0) return total - 1;
    if (index >= total) return 0;

    return index;
  };

  const prev = destinations[getIndex(active - 1)];
  const current = destinations[active];
  const next = destinations[getIndex(active + 1)];

  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white pt-70 -mt-50">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2000&auto=format&fit=crop"
          alt="Background"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-y-0 right-0 w-[45%] bg-[radial-gradient(circle_at_center,rgba(44,110,73,0.45),transparent_70%)]" />
      </div>

      <div className="container relative z-10">
        <div className="container-main grid min-h-screen items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          {/* LEFT */}
          <div className="relative max-w-[620px] pt-10 lg:pt-0">
            <div className="mb-8 flex">
              {[...Array(7)].map((_, i) => (
                <ChevronRight
                  key={i}
                  size={42}
                  className="-mr-5 text-white"
                />
              ))}
            </div>
            <div className="relative">
              <div className="absolute left-0 top-3 h-[220px] w-[8px] bg-white" />
              <h1
                className="pl-10 text-[72px] font-black uppercase leading-[0.95] tracking-[-3px] lg:text-[110px]">
                Explore
                <br />
                <span className="text-gradient">
                  The World
                </span>
              </h1>
            </div>

            <p
              className="
                mt-8
                max-w-[620px]
                text-lg
                leading-[1.9]
                text-white/85
              "
            >
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>

            <button
              className="
                group
                mt-10
                flex
                items-center
                gap-4
                rounded-full
                gradient
                px-8
                py-4
                text-2xl
                font-bold
                uppercase
                transition-all
                hover:scale-[1.03]
              "
            >
              BOOK NOW

              <div
                className="
                  flex
                  h-11
                  w-11
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/30
                  transition-transform
                  group-hover:translate-x-1
                "
              >
                <ChevronRight />
              </div>
            </button>

            {/* Dots */}
            <div className="mt-14 grid w-[120px] grid-cols-6 gap-3 opacity-70">
              {[...Array(24)].map((_, i) => (
                <div
                  key={i}
                  className="h-[5px] w-[5px] rounded-full bg-white"
                />
              ))}
            </div>

            {/* Bottom arrows */}
            <div className="mt-16 flex">
              {[...Array(7)].map((_, i) => (
                <ChevronRight
                  key={i}
                  size={42}
                  className="-mr-5 text-white"
                />
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center">
            {/* Prev */}
            <button
              onClick={prevSlide}
              className="
                absolute
                left-0
                top-1/2
                z-40
                flex
                h-16
                w-16
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-[2px]
                border-white
                gradient
                shadow-2xl
                transition
                hover:scale-110
              "
            >
              <ChevronLeft size={34} />
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="
                absolute
                right-0
                top-1/2
                z-40
                flex
                h-16
                w-16
                -translate-y-1/2
                items-center
                justify-center
                rounded-full
                border-[2px]
                border-white
                gradient
                shadow-2xl
                transition
                hover:scale-110
              "
            >
              <ChevronRight size={34} />
            </button>

            <div className="relative h-[720px] w-full max-w-[980px]">
              {/* LEFT CARD */}
              <motion.div
                animate={{
                  x: 40,
                  scale: 0.82,
                  opacity: 0.7,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  left-0
                  top-1/2
                  z-10
                  w-[340px]
                  -translate-y-1/2
                "
              >
                <SliderCard item={prev} />
              </motion.div>

              {/* ACTIVE CARD */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    y: 40,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.92,
                    y: -30,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: "easeInOut",
                  }}
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    z-30
                    w-[430px]
                    -translate-x-1/2
                    -translate-y-1/2
                  "
                >
                  <SliderCard item={current} active />
                </motion.div>
              </AnimatePresence>

              {/* RIGHT CARD */}
              <motion.div
                animate={{
                  x: -40,
                  scale: 0.82,
                  opacity: 0.7,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                className="
                  absolute
                  right-0
                  top-1/2
                  z-10
                  w-[340px]
                  -translate-y-1/2
                "
              >
                <SliderCard item={next} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderCard({
  item,
  active = false,
}: {
  item: {
    id: number;
    title: string;
    image: string;
  };
  active?: boolean;
}) {
  return (
    <div
      className={`
        rounded
        bg-white
        p-6
        text-black
        shadow-[0_30px_80px_rgba(0,0,0,0.35)]
        transition-all
        duration-500
        ${active ? "rotate-0" : "rotate-[-2deg]"}
      `}
    >
      {/* Image */}
      <div className="relative h-[420px] overflow-hidden rounded-[40px]">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-white px-4 pb-2 pt-6">
        <h3 className="text-[30px] font-black leading-tight">
          {item.title}
        </h3>

        <p className="mt-4 text-lg leading-8 text-black/70">
          Lorem ipsum praesent ac massa at
          ligula reet est iaculis. Vivamus est
          mist aliquet elit ac nisl.
        </p>

        <button
          className="
            mt-8
            flex
            items-center
            gap-3
            rounded-full
            px-6
            py-3
            gradient
          "
        >
          Read More

          <div
            className="
              flex
              h-8
              w-8
              items-center
              justify-center
              rounded-full
              border
              border-white/20
            "
          >
            <ChevronRight size={18} />
          </div>
        </button>
      </div>
    </div>
  );
}