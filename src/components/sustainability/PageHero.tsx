"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ACCENT = {
  emerald: "bg-emerald-500",
  sky: "bg-sky-500",
  amber: "bg-amber-500",
};

interface Props {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  image: string;
  accent: keyof typeof ACCENT;
}

export function PageHero({ eyebrow, title, titleAccent, intro, image, accent }: Props) {
  const dotClass = ACCENT[accent];

  return (
    <section className="relative w-full min-h-[80vh] lg:min-h-[88vh] overflow-hidden bg-slate-950">
      {/* Background */}
      <Image
        src={image}
        alt=""
        fill
        priority
        className="object-cover opacity-50"
        sizes="100vw"
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/15" />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 min-h-[80vh] lg:min-h-[88vh] flex flex-col justify-end pb-18 lg:pb-26">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", dotClass)} />
          <span className="text-[11px] font-bold tracking-[0.28em] uppercase text-white/60">
            {eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02] text-white max-w-4xl mb-7"
        >
          {title}
          <br />
          <span className="text-white/35 font-light">{titleAccent}</span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base lg:text-lg text-white/65 max-w-2xl leading-relaxed font-light pb-16 lg:pb-24"
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
