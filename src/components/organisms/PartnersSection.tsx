"use client";

import { type JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { containerVariants, itemVariants } from "@/lib/animations";

const PARTNERS = [
  {
    id: "mopani",
    name: "Ali Rashed Al Rashdi",
    role: "CEO of International Resources Holding (IRH)",
    image: "/ali-rashed-new.webp",
    overlayTitle: "Focusing on Strategic Investments",
    bio: "Overseeing IRH's global natural resources investment platform and securing critical minerals to drive energy and mining projects.",
    action: "Mine-to-Market Strategy",
  },
  {
    id: "ttipl",
    name: "Ravi Sharma",
    role: "COO of International Resources Holding (IRH)",
    image: "/Ravi Sharma.webp",
    overlayTitle: "Focusing on Global Operations",
    bio: "Leading IRH's mining value chain operations with over 35 years of industry expertise in mineral resource evaluation and management.",
    action: "Operational Leadership",
  },
  {
    id: "irh",
    name: "Charles Sakanya",
    role: "CEO of Mopani Copper Mines(MCM)",
    image: "/Charles Sakanya.webp",
    overlayTitle: "Focusing on Mining Excellence",
    bio: "An accomplished mechanical engineer with 35+ years of experience across global mining operations, leading Mopani's production since 2020.",
    action: "Production Leadership",
  },
];

export function PartnersSection(): JSX.Element {
  return (
    <section
      id="partners"
      className="py-16 md:py-24 lg:py-32 bg-bg-soft border-t border-slate-200"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header: Symmetrical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-12 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Badge variant="dot">Our Partners</Badge>
            </motion.div>
            <motion.h2
              id="partners-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1]"
            >
              Strategic Partnership <br />
              <span className="text-neutral-300"> Ecosystem</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[15px] md:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
              SKT Global operates as a key mining contractor supporting International Resources Holding (IRH) and Mopani Copper Mines through underground mechanisation, operational infrastructure, and production support systems. Through continuous operational expansion, infrastructure development, and workforce scaling, SKT Global intends to support up to 90% of future IRH/MCM mining operations.
              <br />
              <br />
              IRH currently holds a 51% stake in Mopani Copper Mines.
            </p>
          </motion.div>
        </div>

        {/* Partners Grid: High-Impact 3-Column Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
        >
          {PARTNERS.map((partner) => {
            return (
              <motion.div
                key={partner.id}
                variants={itemVariants}
                className="group flex flex-col cursor-pointer"
              >
                {/* Image Container Area */}
                <div className="relative aspect-[0.95/1.1] overflow-hidden rounded-xl bg-neutral-100 mb-5 border border-neutral-100/70">
                  <Image
                    src={partner.image}
                    alt={partner.name}
                    fill
                    className="object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-[1.03]"
                    sizes="(max-w-768px) 100vw, 33vw"
                    priority
                  />

                  {/* ── HOVER OVERLAY: Slides up from the bottom ── */}
                  <div className="absolute inset-0 bg-skt-navy/95 backdrop-blur-sm flex flex-col justify-between p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">

                    {/* Top: Header & Bio */}
                    <div className="space-y-3">
                      <h4 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug">
                        {partner.overlayTitle}
                      </h4>
                      <p className="text-xs text-white/80 leading-relaxed font-medium">
                        {partner.bio}
                      </p>
                    </div>

                    {/* Bottom: Interactive Gray Action Bar */}
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <div className="flex items-center gap-3">
                        {/* Gray square button with arrow */}
                        <div className="w-8 h-8 bg-neutral-200 text-neutral-900 flex items-center justify-center rounded-[6px] shadow-sm select-none">
                          <span className="text-base font-bold">→</span>
                        </div>
                        <span className="text-xs font-bold tracking-tight text-white">
                          {partner.action}
                        </span>
                      </div>

                      {/* Gray square button with minus */}
                      <div className="w-8 h-8 bg-neutral-200 text-neutral-900 flex items-center justify-center rounded-[6px] shadow-sm select-none">
                        <span className="text-base font-bold">-</span>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Info Area */}
                <div className="flex flex-col px-1">
                  <p className="text-[10px] font-semibold tracking-[0.15em] text-neutral-500 uppercase mb-1.5 leading-relaxed">
                    {partner.role}
                  </p>
                  <h3 className="text-base font-semibold text-neutral-900 tracking-tight leading-none">
                    {partner.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
