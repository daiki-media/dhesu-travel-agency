"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import {
  ArrowRight,
  BadgeDollarSign,
  Users,
} from "lucide-react";
const features = [
  {
    icon: <BadgeDollarSign size={24} className="text-white" />,
    title: "Exclusive Trip",
    desc: "There are many variations of passages of available but the majority.",
  },
  {
    icon: <Users size={24} className="text-white" />,
    title: "Professional Guide",
    desc: "There are many variations of passages of available but the majority.",
  },
];

export default function PlanYourTrip() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-white overflow-hidden" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left images */}
          <motion.div
            className="relative flex gap-4 h-[520px]"
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Tall arch image */}
            <div
              className="relative w-[55%] h-full overflow-hidden shadow-xl"
              style={{ borderRadius: "50% 50% 50% 50% / 20% 20% 20% 20%", borderTopLeftRadius: "120px", borderTopRightRadius: "120px" }}
            >
              <Image
                src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
                alt="Mountain hiker"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                sizes="30vw"
              />
            </div>

            {/* Right stacked circles */}
            <div className="flex flex-col gap-4 w-[45%] pt-10">
              <div className="relative overflow-hidden rounded-full aspect-square shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1472745433479-4556f22e32c2?q=80&w=500&auto=format&fit=crop"
                  alt="Kayaking"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="20vw"
                />
              </div>
              <div className="relative overflow-hidden rounded-full aspect-square shadow-lg group">
                <Image
                  src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=500&auto=format&fit=crop"
                  alt="Friends traveling"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="20vw"
                />
              </div>
            </div>

            {/* Decorative dot */}
            <div className="absolute -bottom-3 -left-3 w-20 h-20 rounded-full bg-teal-light opacity-70" />
            <div className="absolute top-8 -right-3 w-14 h-14 rounded-full border-4 border-primary/20" />
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-dancing text-primary-dark text-2xl md:text-3xl mb-3">
              Let's Go Together
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-teal-navy leading-tight mb-5">
              Plan Your Trip
              <br />
              With us
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8 text-[15px]">
              There are many variations of passages of available but the majority have
              suffered alteration in some form, by injected hum randomised words which
              don&apos;t look even slightly.
            </p>

            {/* Feature list */}
            <div className="flex flex-col gap-5 mb-9">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4 group">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shrink-0 shadow-md group-hover:bg-primary-dark transition-colors duration-300">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-teal-navy text-lg mb-1">{f.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="flex items-center gap-2 bg-primary-dark text-white px-8 py-3.5 rounded-full font-semibold text-[15px] hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg">
              Learn More <ArrowRight size={13} />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
