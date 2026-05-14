"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { MapPin } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const destinations = [
  {
    name: "Maldives",
    country: "Indian Ocean",
    tours: "12 Tours",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Santorini",
    country: "Greece",
    tours: "8 Tours",
    image:
      "https://images.unsplash.com/photo-1533105079780-92b9be482077?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Bali",
    country: "Indonesia",
    tours: "15 Tours",
    image:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Phang Nga",
    country: "Thailand",
    tours: "10 Tours",
    image:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Amalfi Coast",
    country: "Italy",
    tours: "9 Tours",
    image:
      "https://images.unsplash.com/photo-1534430480872-3498386e7856?q=80&w=900&auto=format&fit=crop",
  },
  {
    name: "Banff",
    country: "Canada",
    tours: "7 Tours",
    image:
      "https://images.unsplash.com/photo-1508193638397-1c4234db14d8?q=80&w=900&auto=format&fit=crop",
  },
];

export default function PopularDestination() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-14"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-dancing text-primary-dark text-2xl md:text-3xl mb-2">
            Top Destination
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-navy">
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
              <SwiperSlide key={dest.name}>
                <div className="group cursor-pointer relative overflow-hidden rounded-3xl aspect-[4/3] shadow-lg">
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
                      {dest.country}
                    </div>
                    <h3 className="text-2xl font-bold">{dest.name}</h3>
                    <span className="inline-block mt-2 bg-primary/90 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {dest.tours}
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
