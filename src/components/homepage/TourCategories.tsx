"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

const categories = [
  {
    name: "Hiking",
    image:
      "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Cruises",
    image:
      "https://images.unsplash.com/photo-1548574505-5e239809ee19?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Airbirds",
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Wildlife",
    image:
      "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Walking",
    image:
      "https://images.unsplash.com/photo-1533240332313-0db49b459ad6?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Camping",
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Surfing",
    image:
      "https://images.unsplash.com/photo-1502680390469-be75c86b636f?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Safari",
    image:
      "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Diving",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=600&auto=format&fit=crop",
  },
  {
    name: "Skiing",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?q=80&w=600&auto=format&fit=crop",
  },
];

export default function TourCategories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-pattern" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-dancing text-primary-dark text-2xl md:text-3xl mb-2">
            Wonderful Place For You
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-teal-navy">
            Tour Categories
          </h2>
        </motion.div>

        {/* Swiper */}
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1.3}
            centeredSlides={true}
            loop={false}
            autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
            pagination={{ clickable: true }}
            breakpoints={{
              480: { slidesPerView: 2.2 },
              768: { slidesPerView: 3.2 },
              1024: { slidesPerView: 4.2 },
              1280: { slidesPerView: 5.2 },
            }}
            className="pb-14"
          >
            {categories.map((cat) => (
              <SwiperSlide key={cat.name}>
                <div className="group cursor-pointer text-center">
                  <div className="relative overflow-hidden rounded-2xl aspect-[3/4] mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 60vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <h3 className="font-semibold text-teal-navy text-lg group-hover:text-primary transition-colors duration-200">
                    {cat.name}
                  </h3>
                  <p className="text-primary text-sm mt-0.5 font-medium group-hover:underline">
                    See More
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
