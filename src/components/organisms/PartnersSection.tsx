"use client";

import { type JSX } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PARTNERS = [
  {
    id: "irh-ceo",
    name: "Ali Rashed Al Rashdi",
    role: "CEO, International Resources Holding",
    image: "/ali-rashed-new.webp",
    focus: "Mine-to-Market Strategy",
    companyLogo: "/irh-logo.webp",
    description:
      "Overseeing IRH's global natural resources investment platform and securing critical minerals to drive energy and mining projects.",
  },
  {
    id: "irh-coo",
    name: "Ravi Sharma",
    role: "COO, International Resources Holding",
    image: "/Ravi Sharma.webp",
    focus: "Operational Leadership",
    companyLogo: "/irh-logo.webp",
    description:
      "Leading IRH's mining value chain operations with over 35 years of industry expertise in mineral resource evaluation and management.",
  },
  {
    id: "mcm-ceo",
    name: "Charles Sakanya",
    role: "CEO, Mopani Copper Mines",
    image: "/Charles Sakanya.webp",
    focus: "Production Leadership",
    companyLogo: "/mopani-logo.webp",
    description:
      "An accomplished mechanical engineer with 35+ years of experience across global mining operations, leading Mopani's production since 2020.",
  },
];

export function PartnersSection(): JSX.Element {
  return (
    <section
      id="partners"
      className="py-20 md:py-28 lg:py-36 bg-white"
      aria-labelledby="partners-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* ─── HEADER ───────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 md:mb-28"
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 lg:gap-12">

            {/* Left: Eyebrow + Heading */}
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-6">
                <span className="inline-block w-1 h-1 rounded-full bg-neutral-400" />
                Our Partners
              </span>

              <h2
                id="partners-heading"
                className="text-[32px] sm:text-[42px] lg:text-[56px] font-semibold tracking-[-0.02em] leading-[1.05] text-neutral-900"
              >
                Strategic Partnerships.
                <br />
                <span className="text-neutral-300">Shared Ambition.</span>
              </h2>
            </div>


          </div>

          {/* Supporting paragraphs */}
          <div className="mt-10 md:mt-12 flex flex-col gap-6 md:gap-8 max-w-5xl">
            <p className="text-[14px] sm:text-[15.5px] leading-[1.7] text-neutral-500 font-light md:max-w-none">
              Working alongside IRH and Mopani Copper Mines to accelerate
              development, strengthen operational capability, and support the
              long-term growth of Zambia&apos;s mining sector.
            </p>
            <p className="text-[14px] sm:text-[15.5px] leading-[1.7] text-neutral-500 font-light md:max-w-none">
              Supporting the road toward <strong className="font-semibold text-neutral-900">90% operational capability</strong> through
              continued investment in people, infrastructure, mechanisation and
              operational excellence.
            </p>
          </div>
        </motion.div>

        {/* ─── PARTNERS GRID LAYOUT ──────────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-10 xl:gap-14 mt-16 md:mt-24">
          {PARTNERS.map((partner, i) => {
            return (
              <motion.article
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.15 }}
                className="flex flex-col gap-6 lg:gap-8 group"
              >
                {/* ─── IMAGE ─── */}
                <div className="w-full shrink-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
                    {/* Subtle frame accent behind */}
                    <div className="absolute -bottom-3 -right-3 w-full h-full border border-neutral-200 rounded-sm -z-10 hidden md:block" />

                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04]"
                    />

                    {/* Gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                    {/* Focus tag */}
                    <div className="absolute bottom-5 left-5 right-5 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-700 pointer-events-none">
                      <span className="inline-block px-3 py-1.5 bg-white/95 text-[10px] font-semibold tracking-[0.15em] uppercase text-neutral-900 rounded-sm">
                        {partner.focus}
                      </span>
                    </div>
                  </div>
                </div>

                {/* ─── TEXT ─── */}
                <div className="w-full flex flex-col justify-start text-left">
                  {/* Role label & Logo */}
                  <div className="flex flex-col xl:flex-row items-start xl:items-center justify-start gap-3 lg:gap-4 mb-4">
                    <div className="relative h-6 lg:h-7 w-20 lg:w-24 opacity-80 shrink-0">
                      <Image
                        src={partner.companyLogo}
                        alt="Company Logo"
                        fill
                        className="object-contain object-left brightness-0"
                      />
                    </div>
                    <div className="hidden xl:block w-px h-4 bg-neutral-300 mt-1 shrink-0" />
                    <p className="text-[9px] sm:text-[10px] font-semibold tracking-[0.15em] uppercase text-neutral-500 text-left xl:mt-1">
                      {partner.role}
                    </p>
                  </div>

                  {/* Name */}
                  <h3 className="text-[24px] sm:text-[28px] lg:text-[32px] font-semibold tracking-[-0.02em] leading-[1.1] text-neutral-900 mb-4">
                    {partner.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[13px] sm:text-[14px] leading-[1.7] text-neutral-500 font-light w-full">
                    {partner.description}
                  </p>

                  {/* Subtle decorative line */}
                  <div className="mt-6 md:mt-8 h-px w-12 bg-neutral-300" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ─── FOOTNOTE ──────────────────────────────── */}
        <div className="mt-24 md:mt-32 pt-10 border-t border-neutral-200/70 flex justify-center">
          <div className="inline-flex items-center gap-3 rounded-xl bg-neutral-900 px-4 py-3 shadow-lg shadow-neutral-900/15">
            <span className="text-[28px] font-bold leading-none text-white tabular-nums tracking-tight">
              51<span className="text-[18px] text-white/50 font-semibold">%</span>
            </span>
            <div className="h-7 w-px bg-white/15 flex-shrink-0" />
            <p className="text-[12px] leading-snug text-white/70 text-left">
              <span className="block font-semibold text-white">IRH Stake</span>
              In Mopani Copper Mines
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}