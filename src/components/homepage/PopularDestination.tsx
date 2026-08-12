"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { destinations } from "@/src/data/destinations";

const AUTOPLAY_MS = 3500;

export default function PopularDestination() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  // Autoplay only starts once the section is approached, so its timer and the
  // re-renders behind it stay off the critical path.
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

  const scrollTo = useCallback((index: number) => {
    const track = trackRef.current;
    const slide = track?.children[index] as HTMLElement | undefined;
    if (!track || !slide) return;
    // Centre the slide ourselves; `scrollIntoView` would also scroll the page.
    track.scrollTo({
      left: slide.offsetLeft - (track.clientWidth - slide.clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  // Track which slide is centred so the focus/blur styling follows the scroll,
  // including flicks and trackpad swipes that never go through `scrollTo`.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let frame = 0;
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const centre = track.scrollLeft + track.clientWidth / 2;
        let nearest = 0;
        let best = Infinity;
        Array.from(track.children).forEach((child, i) => {
          const el = child as HTMLElement;
          const distance = Math.abs(el.offsetLeft + el.clientWidth / 2 - centre);
          if (distance < best) {
            best = distance;
            nearest = i;
          }
        });
        setActive(nearest);
      });
    };

    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Autoplay, but only while the section is on screen and the user is idle.
  useEffect(() => {
    if (paused || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % destinations.length;
        scrollTo(next);
        return next;
      });
    }, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paused, inView, scrollTo]);

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-8xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14" data-reveal>
          <p className="font-secondary text-primary-dark text-2xl md:text-3xl mb-2">
            Top Destination
          </p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-teal-navy">
            Popular Destination
          </h2>
        </div>

        {/* Carousel — native scroll-snap, so it works before hydration too. */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocusCapture={() => setPaused(true)}
          onBlurCapture={() => setPaused(false)}
        >
          <div
            ref={trackRef}
            className="dest-track"
            role="region"
            aria-roledescription="carousel"
            aria-label="Popular destinations"
          >
            {destinations.map((dest, i) => (
              <div key={dest.slug} className="dest-slide" data-active={i === active}>
                <Link
                  href={dest.href}
                  className="group cursor-pointer relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg block"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                    sizes="(max-width: 640px) 85vw, (max-width: 1200px) 55vw, 40vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-1.5 text-white text-sm mb-1">
                      <MapPin size={13} aria-hidden />
                      {dest.region}
                    </div>
                    <h3 className="text-2xl font-bold">{dest.name}</h3>
                    <p className="text-white/90 text-sm mt-1 line-clamp-2 max-w-md">
                      {dest.blurb}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="inline-block bg-primary-dark text-white text-xs font-medium px-3 py-1 rounded-full">
                        {dest.tourCount} {dest.tourCount === 1 ? "Tour" : "Tours"}
                      </span>
                      <span className="inline-block bg-black/50 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        From {dest.fromPrice}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-10">
            {destinations.map((dest, i) => (
              <button
                key={dest.slug}
                type="button"
                onClick={() => {
                  setActive(i);
                  scrollTo(i);
                }}
                aria-label={`Show ${dest.name}`}
                aria-current={i === active}
                className="grid place-items-center h-11 w-11"
              >
                <span
                  className={`block h-[11px] rounded-full border-2 transition-all duration-300 ${
                    i === active
                      ? "w-7 bg-primary-dark border-primary-dark"
                      : "w-[11px] bg-gray-300 border-gray-300"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
