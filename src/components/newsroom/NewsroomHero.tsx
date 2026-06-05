"use client";

import { motion } from "framer-motion";
import { Rss } from "lucide-react";

export default function NewsroomHero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        backgroundImage: `url('/newsroom-hero-bg.jpg')`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay — navy + blue tint so brand colours come through */}
      <div className="absolute inset-0 bg-gradient-to-br from-skt-navy/90 via-skt-blue/80 to-slate-900/85" />
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      {/* Red accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-skt-red" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="flex items-center gap-2 mb-6">
            <span className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-[10px] font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full">
              <Rss size={10} className="text-skt-red" />
              Media & Press
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.05] mb-5">
            SKT Global{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 to-blue-200">
              Newsroom
            </span>
          </h1>

          <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl mb-8">
            Stay up to date with the latest press releases, operational milestones, sustainability
            updates, and community initiatives from SKT Global Mining & Services Limited.
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap gap-6">
            {[
              { value: "9+", label: "News Stories" },
              { value: "6", label: "Categories" },
              { value: "2026", label: "Latest Year" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-2xl font-bold text-white">{stat.value}</span>
                <span className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#F4F7FA] to-transparent" />
    </section>
  );
}
