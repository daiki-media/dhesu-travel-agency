"use client";
import { useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCoverflow } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/pagination";

const categories = [
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


export default function TourCategories() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-50 bg-pattern " ref={ref}>
      <div className=" px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="font-secondary text-primary-dark text-2xl md:text-3xl mb-2">
            Wonderful Place For You
          </p>
          <h2 className="font-primary text-4xl md:text-5xl font-bold text-teal-navy">
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
              modules={[Pagination, Autoplay, EffectCoverflow]}
              effect="coverflow"
              grabCursor={true}
              centeredSlides={true}
              loop={true}
              speed={1000}
              slidesPerView={"auto"}
              
              coverflowEffect={{
                rotate: 0,
                stretch: -40,
                depth: 180,
                modifier: 1.8,
                scale: 0.9,
                slideShadows: false,
              }}

              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}

              pagination={{
                clickable: true,
              }}

              breakpoints={{
                320: {
                  spaceBetween: -30,
                },
                768: {
                  spaceBetween: -60,
                },
                1024: {
                  spaceBetween: -90,
                },
              }}

              className="travel-slider"
            >
            {categories.map((cat, index) => (
              <SwiperSlide
                className="!w-[240px] md:!w-[280px] lg:!w-[320px]"
              >
                <div className="group text-center">
                  
                  <div className="relative overflow-hidden rounded-[2rem] aspect-[0.78]">
                    <Image
                      src={cat.image}
                      alt={cat.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  <h3 className="mt-6 font-primary text-3xl font-extrabold text-[#0d2b3e]">
                    {cat.name}
                  </h3>

                  <p className="mt-2 text-gray-500">
                    See More
                  </p>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
        <style jsx global>{`
          .travel-slider {
            padding-top: 40px;
            padding-bottom: 80px;
          }

          .travel-slider .swiper-slide {
            transition: all 0.7s ease;
            opacity: 0.45;
            transform: scale(0.82);
          }

          .travel-slider .swiper-slide-active {
            opacity: 1;
            transform: scale(1);
            z-index: 20;
          }

          .travel-slider .swiper-slide-prev {
            transform: translateY(30px) scale(0.88);
          }

          .travel-slider .swiper-slide-next {
            transform: translateY(30px) scale(0.88);
          }

          .travel-slider .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            background: #cbd5e1;
            opacity: 1;
            transition: all 0.4s ease;
          }

          .travel-slider .swiper-pagination-bullet-active {
            width: 34px;
            border-radius: 999px;
            background: #06b6d4;
          }
        `}</style>
    </section>
  );
}
