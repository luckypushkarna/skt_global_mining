"use client";

import { type JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";

const PARTNERS = [
  {
    id: "irh-ceo",
    name: "Ali Rashed Al Rashdi",
    role: "CEO, International Resources Holding",
    image: "/ali-rashed-new.webp",
    focus: "Mine-to-Market Strategy",
    description: "Overseeing IRH's global natural resources investment platform and securing critical minerals to drive energy and mining projects.",
  },
  {
    id: "irh-coo",
    name: "Ravi Sharma",
    role: "COO, International Resources Holding",
    image: "/Ravi Sharma.webp",
    focus: "Operational Leadership",
    description: "Leading IRH's mining value chain operations with over 35 years of industry expertise in mineral resource evaluation and management.",
  },
  {
    id: "mcm-ceo",
    name: "Charles Sakanya",
    role: "CEO, Mopani Copper Mines",
    image: "/Charles Sakanya.webp",
    focus: "Production Leadership",
    description: "An accomplished mechanical engineer with 35+ years of experience across global mining operations, leading Mopani's production since 2020.",
  },
];

export function PartnersSection(): JSX.Element {
  return (
    <section
      id="partners"
      className="py-16 md:py-24 bg-bg-soft border-t border-slate-200"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* ─── Header ────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-16 md:mb-20 text-center mx-auto"
        >
          <Badge variant="dot">Our Partners</Badge>

          <h2
            id="partners-heading"
            className="mt-4 text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.15]"
          >
            Strategic Partnership{" "}
            <span className="text-neutral-400">Ecosystem</span>
          </h2>

          <p className="mt-5 text-[15px] md:text-sm lg:text-base text-slate-500 leading-relaxed font-normal max-w-xl mx-auto">
            SKT Global supports IRH and Mopani Copper Mines through
            underground mechanisation, infrastructure, and production systems —
            scaling to support up to 90% of future operations.
          </p>
        </motion.div>

        {/* ─── Partners Alternating Layout ───────────── */}
        <div className="space-y-16 md:space-y-32">
          {PARTNERS.map((partner, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.article
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-6 md:gap-12 lg:gap-16 items-center ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } group`}
              >
                {/* Image Section */}
                <div className="w-full max-w-[280px] sm:max-w-[320px] md:w-4/12 shrink-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100 border border-neutral-100 shadow-sm">
                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Focus tag */}
                    <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-500">
                      <span className="inline-block px-3 py-1.5 bg-white/95 backdrop-blur-sm text-[10px] font-semibold tracking-wide text-neutral-900 rounded-lg shadow-sm">
                        {partner.focus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Section */}
                <div className="w-full md:w-8/12 flex flex-col justify-center text-center md:text-left">
                  <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-skt-blue mb-2.5">
                    {partner.role}
                  </p>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-neutral-900 tracking-tight leading-tight mb-6">
                    {partner.name}
                  </h3>
                  <p className="text-sm lg:text-base text-slate-500 leading-relaxed font-normal">
                    {partner.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ─── Footnote ──────────────────────────────── */}
        <p className="mt-20 md:mt-24 pt-8 border-t border-slate-200 text-xs md:text-sm text-neutral-400 text-center font-medium">
          IRH holds a 51% stake in Mopani Copper Mines.
        </p>
      </div>
    </section>
  );
}