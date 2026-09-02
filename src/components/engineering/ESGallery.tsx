"use client";

import Image from "next/image";
import { motion } from "framer-motion";
const GALLERY_ITEMS = [
  {
    src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/skt_global_mining/Engineering-Maintenance-card.webp",
    alt: "Engineering and maintenance work in progress",
    caption: "Planned maintenance cycle",
    isReal: true,
  },
  {
    src: "https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125465/skt_global_mining/Underground%20Workshop-card.webp",
    alt: "Underground workshop interior",
    caption: "Level 850m workshop bay",
    isReal: true,
  },
  {
    src: "/Safety & Compliance.webp",
    alt: "Safety compliance during engineering work",
    caption: "Pre-shift safety sign-off",
    isReal: true,
  },
];

export function ESGallery() {
  return (
    <section className="bg-bg-tint py-20 lg:py-32 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8 }}
          className="mb-16 lg:mb-20 max-w-2xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-skt-blue" />
            <span className="text-[11px] font-semibold tracking-[0.25em] uppercase text-skt-blue">
              In the Field
            </span>
          </div>

          <h2 className="text-4xl lg:text-5xl tracking-tight text-slate-900 leading-[1.08] font-serif font-normal">
            From the workshop floor.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative group rounded-xl overflow-hidden border border-slate-200 shadow-sm bg-white aspect-[4/3] ${i === 1 || i === 4 ? "sm:mt-8 lg:mt-12" : "" // Stagger effect
                }`}
            >
                  <Image
                    src={item.src!}
                    alt={item.alt!}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  {/* Cinematic dark overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-skt-navy/80 via-skt-navy/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Caption */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <p className="text-sm font-medium text-white tracking-wide">
                      {item.caption}
                    </p>
                  </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
