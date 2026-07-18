"use client";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import { destinations } from "@/src/data/destinations";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PopularDestination() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-8xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-secondary text-primary-dark text-2xl md:text-3xl mb-2">
            Top Destination
          </p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-teal-navy">
            Popular Destination
          </h2>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={28}
            slidesPerView={1}
            centeredSlides={true}
            loop={false}
            autoplay={{ delay: 3500, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              900: { slidesPerView: 1.8 },
              1200: { slidesPerView: 2.4 },
            }}
            className="dest-swiper pb-14"
          >
            {destinations.map((dest) => (
              <SwiperSlide key={dest.slug}>
                <Link
                  href={dest.href}
                  className="group cursor-pointer relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg block"
                >
                  <Image
                    src={dest.image}
                    alt={dest.name}
                    fill
                    className="object-cover transition-transform duration-600 group-hover:scale-105"
                    sizes="(max-width: 768px) 90vw, 50vw"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <div className="flex items-center gap-1.5 text-white/80 text-sm mb-1">
                      <MapPin size={13} />
                      {dest.region}
                    </div>
                    <h3 className="text-2xl font-bold">{dest.name}</h3>
                    <p className="text-white/80 text-sm mt-1 line-clamp-2 max-w-md">
                      {dest.blurb}
                    </p>
                    <div className="flex items-center gap-2 mt-3">
                      <span className="inline-block bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                        {dest.tourCount} {dest.tourCount === 1 ? "Tour" : "Tours"}
                      </span>
                      <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full">
                        From {dest.fromPrice}
                      </span>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
