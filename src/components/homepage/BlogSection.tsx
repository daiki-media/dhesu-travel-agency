"use client";
import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=700&auto=format&fit=crop",
    date: "July 05 2024",
    read: "6 Min Read",
    title: "10 Reasons why you should visit New Jersey",
  },
  {
    image:
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=700&auto=format&fit=crop",
    date: "July 06 2024",
    read: "7 Min Read",
    title: "The best time to visit Japan & enjoy the cherry blossoms",
  },
  {
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=700&auto=format&fit=crop",
    date: "July 07 2024",
    read: "8 Min Read",
    title: "The 7 amazing destinations for adventure seekers",
  },
];

export default function BlogSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 bg-teal-light" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header row */}
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4"
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <p className="font-dancing text-primary-dark text-2xl md:text-3xl mb-2">
              About Us Restaurant
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-teal-navy">
              News &amp; Articles From Tourm
            </h2>
          </div>
          <button className="shrink-0 flex items-center gap-2 border border-teal-navy text-teal-navy px-6 py-2.5 rounded-full font-medium text-sm hover:bg-teal-navy hover:text-white transition-all duration-300">
            See More Articles <ArrowRight size={12} />
          </button>
        </motion.div>

        {/* Blog cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              className="group cursor-pointer"
              initial={{ y: 40, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * i }}
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-5 shadow-sm">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Meta */}
              <div className="flex items-center gap-3 text-gray-400 text-[13px] mb-3">
                <span>{post.date}</span>
                <span className="w-px h-3.5 bg-gray-300" />
                <span>{post.read}</span>
              </div>

              {/* Title */}
              <h3 className="font-bold text-teal-navy text-[17px] leading-snug mb-4 group-hover:text-primary transition-colors duration-200">
                {post.title}
              </h3>

              {/* Read More */}
              <button className="flex items-center gap-2 border border-teal-navy/60 text-teal-navy px-5 py-2 rounded-full text-sm font-medium hover:bg-teal-navy hover:text-white hover:border-teal-navy transition-all duration-300">
                Read More <ArrowRight size={11} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
