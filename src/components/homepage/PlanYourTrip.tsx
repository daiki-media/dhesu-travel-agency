"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Button from "@/src/components/Button";
import {
  ArrowRight,
  BadgeDollarSign,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <BadgeDollarSign size={24} className="text-white transition-transform duration-300 group-hover:rotate-360" />,
    title: "Exclusive Trip",
    desc: "There are many variations of passages of available but the majority.",
  },
  {
    icon: <Users size={24} className="text-white transition-transform duration-300 group-hover:rotate-360" />,
    title: "Professional Guide",
    desc: "There are many variations of passages of available but the majority.",
  },
];

export default function PlanYourTrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-28 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 xl:gap-20 items-center">
          
          {/* Left Image Gallery - Completely responsive layout */}
          <motion.div
            className="relative w-full"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Mobile Layout (Stacked vertically) */}
            <div className="block lg:hidden space-y-4">
              {/* Main Image - Full width on mobile */}
              <div className="relative w-full h-[280px] sm:h-[350px] overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src="https://www.holidayidea.com.my/upload/gallery/14620.jpg"
                  alt="Mountain hiker"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 768px) 90vw, 50vw"
                  priority
                />
              </div>
              
              {/* Two smaller images - Grid on mobile */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1472745433479-4556f22e32c2?q=80&w=500&auto=format&fit=crop"
                    alt="Kayaking"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-xl aspect-[4/3] shadow-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop"
                    alt="Friends traveling"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 45vw, 25vw"
                  />
                </div>
              </div>
            </div>

            {/* Desktop Layout (Original design) */}
            <div className="hidden lg:flex lg:gap-6 h-[520px] items-center">
              <div className="relative w-[50%] h-full overflow-hidden rounded-t-full rounded-bl-full shadow-xl">
                <Image
                  src="https://www.holidayidea.com.my/upload/gallery/14620.jpg"
                  alt="Mountain hiker"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="30vw"
                  priority
                />
              </div>
              <div className="flex flex-col gap-6 w-[50%]">
                <div className="relative overflow-hidden rounded-t-full rounded-br-full aspect-[1.1/1] shadow-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1472745433479-4556f22e32c2?q=80&w=500&auto=format&fit=crop"
                    alt="Kayaking"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="20vw"
                  />
                </div>
                <div className="relative overflow-hidden rounded-b-full rounded-tl-full aspect-[1.1/1] shadow-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop"
                    alt="Friends traveling"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="20vw"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Fully responsive */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-center lg:text-left"
          >
            <p className="font-secondary text-primary-dark text-lg sm:text-xl md:text-2xl lg:text-3xl mb-2 sm:mb-3">
              Let's Go Together
            </p>
            <h2 className="font-primary text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-teal-navy leading-tight mb-3 sm:mb-4 md:mb-5">
              Plan Your Trip
              <br className="hidden sm:block" />
              <span className="inline-block sm:block">With us</span>
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6 sm:mb-7 md:mb-8 text-sm sm:text-base max-w-2xl lg:max-w-full mx-auto lg:mx-0">
              There are many variations of passages of available but the majority have
              suffered alteration in some form, by injected hum randomised words which
              don't look even slightly.
            </p>

            {/* Feature list - Responsive grid on tablet+ */}
            <div className="flex flex-col gap-4 sm:gap-5 mb-7 sm:mb-8 md:mb-9">
              {features.map((f, idx) => (
                <motion.div 
                  key={f.title} 
                  className="flex items-start gap-3 sm:gap-4 group text-left"
                  initial={{ y: 20, opacity: 0 }}
                  animate={inView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-primary-dark flex items-center justify-center shrink-0 shadow-md group-hover:bg-primary transition-colors duration-300 group">
                    {f.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-teal-navy text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">
                      {f.title}
                    </h4>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center lg:justify-start">
              <Button variant="dark" showArrow size="lg" className="w-full sm:w-auto">
                Explore Tours
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}