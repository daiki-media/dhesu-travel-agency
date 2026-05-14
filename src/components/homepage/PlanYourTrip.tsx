"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import Button from "@/src/components/Button"
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
            <motion.div
              className="relative flex gap-6 h-[520px] items-center"
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : {}}
              transition={{ duration: 0.7 }}
            >
              {/* Left: Tall Arch Image */}
              <div className="relative w-[50%] h-full overflow-hidden rounded-t-full rounded-b-[40px] shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop"
                  alt="Mountain hiker"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                  sizes="30vw"
                />
              </div>

              {/* Right: Stacked Shapes */}
              <div className="flex flex-col gap-6 w-[50%]">
                {/* Top Right: Semi-circle/Arch */}
                <div className="relative overflow-hidden rounded-t-full rounded-bl-full aspect-[1.1/1] shadow-lg group">
                  <Image
                    src="https://images.unsplash.com/photo-1472745433479-4556f22e32c2?q=80&w=500&auto=format&fit=crop"
                    alt="Kayaking"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="20vw"
                  />
                </div>

                {/* Bottom Right: D-Shape Arch */}
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

              {/* Decorative elements from image_94ceb3.jpg are clean, 
                  so I've omitted the overlapping dots for a truer match. 
                  But you can keep them if you like the extra flair! */}
            </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="font-secondary text-primary-dark text-2xl md:text-3xl mb-3">
              Let's Go Together
            </p>
            <h2 className="font-primary text-4xl md:text-5xl font-bold text-teal-navy leading-tight mb-5">
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
            <Button variant="dark" showArrow  size="lg">Explore Tours</Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
