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
    description:
      "Overseeing IRH's global natural resources investment platform and securing critical minerals to drive energy and mining projects.",
  },
  {
    id: "irh-coo",
    name: "Ravi Sharma",
    role: "COO, International Resources Holding",
    image: "/Ravi Sharma.webp",
    focus: "Operational Leadership",
    description:
      "Leading IRH's mining value chain operations with over 35 years of industry expertise in mineral resource evaluation and management.",
  },
  {
    id: "mcm-ceo",
    name: "Charles Sakanya",
    role: "CEO, Mopani Copper Mines",
    image: "/Charles Sakanya.webp",
    focus: "Production Leadership",
    description:
      "An accomplished mechanical engineer with 35+ years of experience across global mining operations, leading Mopani's production since 2020.",
  },
];

export function PartnersSection(): JSX.Element {
  return (
    <section
      id="partners"
      className="py-20 md:py-28 lg:py-36 bg-white border-t border-neutral-200/70"
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

            {/* Right: Partner Logos */}
            <div className="flex flex-wrap items-center gap-8 md:gap-10 pb-1">
              <div className="relative h-12 md:h-14 w-40 md:w-52 mix-blend-multiply opacity-80">
                <Image
                  src="/partner-logo-1.png"
                  alt="Strategic Partner"
                  fill
                  className="object-contain"
                  sizes="208px"
                />
              </div>
              <div className="relative h-12 md:h-14 w-40 md:w-52 invert opacity-80">
                <Image
                  src="/partner-logo-2.png"
                  alt="Strategic Partner"
                  fill
                  className="object-contain"
                  sizes="208px"
                />
              </div>
            </div>
          </div>

          {/* Supporting paragraphs */}
          <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 max-w-4xl">
            <p className="text-[14px] sm:text-[15.5px] leading-[1.7] text-neutral-500 font-light">
              Working alongside IRH and Mopani Copper Mines to accelerate
              development, strengthen operational capability, and support the
              long-term growth of Zambia&apos;s mining sector.
            </p>
            <p className="text-[14px] sm:text-[15.5px] leading-[1.7] text-neutral-500 font-light">
              Supporting the road toward 90% operational capability through
              continued investment in people, infrastructure, mechanisation and
              operational excellence.
            </p>
          </div>
        </motion.div>

        {/* ─── PARTNERS ALTERNATING LAYOUT ──────────── */}
        <div className="space-y-20 md:space-y-32 lg:space-y-40">
          {PARTNERS.map((partner, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.article
                key={partner.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col gap-8 md:gap-14 lg:gap-20 items-center ${isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } group`}
              >
                {/* ─── IMAGE ─── */}
                <div className="w-full max-w-[300px] sm:max-w-[340px] md:w-5/12 lg:w-4/12 shrink-0">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100">
                    {/* Subtle frame accent behind */}
                    <div className="absolute -bottom-3 -right-3 w-full h-full border border-neutral-200 rounded-sm -z-10 hidden md:block" />

                    <Image
                      src={partner.image}
                      alt={partner.name}
                      fill
                      sizes="(max-width: 768px) 300px, (max-width: 1024px) 40vw, 33vw"
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
                <div className="w-full md:w-7/12 lg:w-8/12 flex flex-col justify-center text-center md:text-left">
                  {/* Role label */}
                  <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-3">
                    {partner.role}
                  </p>

                  {/* Name */}
                  <h3 className="text-[28px] sm:text-[36px] lg:text-[44px] font-semibold tracking-[-0.02em] leading-[1.1] text-neutral-900 mb-5 md:mb-6">
                    {partner.name}
                  </h3>

                  {/* Description */}
                  <p className="text-[14px] sm:text-[15.5px] leading-[1.7] text-neutral-500 font-light max-w-xl mx-auto md:mx-0">
                    {partner.description}
                  </p>

                  {/* Subtle decorative line */}
                  <div className="mt-8 md:mt-10 h-px w-12 bg-neutral-300 mx-auto md:mx-0" />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* ─── FOOTNOTE ──────────────────────────────── */}
        <div className="mt-24 md:mt-32 pt-10 border-t border-neutral-200/70">
          <p className="text-[11px] sm:text-[12px] font-medium tracking-[0.2em] uppercase text-neutral-400 text-center">
            IRH holds a 51% stake in Mopani Copper Mines
          </p>
        </div>
      </div>
    </section>
  );
}