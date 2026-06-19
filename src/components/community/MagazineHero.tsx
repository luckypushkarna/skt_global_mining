"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, User } from "lucide-react";

export function MagazineHero() {
  return (
    <article className="bg-[#FAF8F5]">
      {/* Top article header - NYT style */}
      <div className="border-b border-amber-200/60 bg-[#FAF8F5]">
        <div className="max-w-5xl mx-auto px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="text-[9px] font-black tracking-[0.35em] uppercase text-amber-700 border border-amber-300 px-2 py-1">
              Feature Story
            </span>
            <span className="text-[9px] tracking-[0.2em] uppercase text-slate-400">
              Sustainability · Community
            </span>
          </div>
          <div className="flex items-center gap-5 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Clock size={11} />
              6 min read
            </span>
            <span className="flex items-center gap-1.5">
              <User size={11} />
              SKT Editorial Desk
            </span>
            <span>Published June 2026</span>
          </div>
        </div>
      </div>

      {/* Editorial headline */}
      <div className="max-w-5xl mx-auto px-6 pt-14 pb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Chapter label */}
          <p className="text-[10px] font-black tracking-[0.4em] uppercase text-amber-600 mb-6">
            Community Impact Report
          </p>

          {/* Main headline - editorial serif feel via font-weight contrast */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-900 leading-[1.05] tracking-tight mb-6 max-w-3xl font-serif font-normal">
            When a Mining Company
            <br />
            <em className="font-light text-slate-500 not-italic">
              Becomes a Neighbour
            </em>
          </h1>

          {/* Standfirst - editorial intro paragraph style */}
          <p className="text-lg md:text-xl text-slate-600 font-light leading-relaxed max-w-2xl border-l-2 border-amber-400 pl-5">
            Twenty percent of SKT Global&apos;s net profits return directly to Zambia&apos;s 
            mining communities. Schools, clinics, water networks - this is what it 
            looks like when industry takes responsibility seriously.
          </p>
        </motion.div>
      </div>

      {/* Lead image - full bleed editorial */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="relative h-[70vh] min-h-[480px] overflow-hidden"
      >
        <Image
          src="/Community Safety Culture.webp"
          alt="SKT Global community engagement in Zambia"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF8F5] via-transparent to-transparent" />

        {/* Photo caption - editorial style */}
        <div className="absolute bottom-6 left-6 right-6">
          <p className="text-xs text-slate-500 italic max-w-lg">
            Members of the SKT Global community engagement team at Chingola District, 2025.
            <span className="not-italic text-slate-400 ml-2">Photo: SKT Archive</span>
          </p>
        </div>
      </motion.div>
    </article>
  );
}
