"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Leaf, Users, Shield } from "lucide-react";
import { PRINCIPLES, CERTIFICATIONS } from "@/data/esg-data";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  environment: Leaf,
  social: Users,
  governance: Shield,
};

export function PrincipleSection() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      {/* Header */}
      <div className="mb-16 lg:mb-24 max-w-2xl">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-6 h-px bg-slate-300" />
          <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400">
            Three Pillars
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4 leading-tight">
          Our Core Principles
        </h2>
        <p className="text-slate-500 text-base font-light leading-relaxed">
          Guided by three pillars that shape every decision we make underground and on the surface.
          These are not aspirations — they are operational commitments.
        </p>
      </div>

      {/* Principles */}
      <div className="space-y-20 lg:space-y-28">
        {PRINCIPLES.map((principle, index) => {
          const isEven = index % 2 === 0;
          const Icon = ICONS[principle.id] ?? Leaf;

          return (
            <motion.div
              key={principle.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  !isEven ? "lg:[direction:rtl]" : ""
                }`}
              >
                {/* Image side */}
                <div className="lg:col-span-7 lg:[direction:ltr]">
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                    <Image
                      src={principle.image}
                      alt={principle.title}
                      fill
                      className="object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-[1.02] hover:scale-100"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    {/* Caption */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
                      <p className="text-[10px] text-white/70 font-mono tracking-widest uppercase">
                        Fig. {index + 1} — {principle.title} Initiative · SKT Global
                      </p>
                    </div>
                    {/* Index number */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <span className="text-white font-mono text-xs font-bold">0{index + 1}</span>
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div className="lg:col-span-5 lg:[direction:ltr]">
                  <div
                    className={`${
                      isEven ? "lg:pl-0 lg:pr-8" : "lg:pl-8 lg:pr-0"
                    }`}
                  >
                    {/* Icon + tag */}
                    <div className="flex items-center gap-2.5 mb-5">
                      <span className="w-8 h-8 rounded-sm bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700">
                        <Icon size={14} />
                      </span>
                      <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-emerald-700">
                        {principle.tag}
                      </span>
                    </div>

                    {/* Heading */}
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                      {principle.subtitle}
                    </h3>

                    {/* Divider */}
                    <div className="w-10 h-px bg-slate-200 mb-5" />

                    {/* Body */}
                    <p className="text-slate-600 text-sm leading-[1.85] mb-7 font-light">
                      {principle.desc}
                    </p>

                    {/* Metric CTA */}
                    <div className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 border-b border-slate-300 pb-0.5 hover:border-emerald-600 hover:text-emerald-700 transition-all duration-200 cursor-pointer group">
                      <span>{principle.metric}</span>
                      <ArrowRight
                        size={14}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Certifications strip */}
      <div className="mt-24 lg:mt-32 pt-12 border-t border-slate-200">
        <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-slate-400 mb-6">
          Standards & Certifications
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="border border-slate-200 p-4 hover:border-emerald-300 transition-colors duration-200 group"
            >
              <p className="text-sm font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-200 mb-1">
                {cert.name}
              </p>
              <p className="text-xs text-slate-500 leading-relaxed">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
