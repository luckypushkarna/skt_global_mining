"use client";

import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";
import { Shield, TrendingUp, Globe, Cpu, GraduationCap, Users } from "lucide-react";

const VALUES = [
  {
    icon: Shield,
    title: "Safety-First Culture",
    description: "Commitment to Zero Harm under strict protective oversight.",
    stat: "Zero",
    statLabel: "Fatalities since 2018",
  },
  {
    icon: TrendingUp,
    title: "Clear Career Growth",
    description: "Structured pathways from trainee to executive leadership.",
    stat: "85%",
    statLabel: "Internal leadership promotions",
  },
  {
    icon: Globe,
    title: "Global Scale Operations",
    description: "Collaborate internationally on major infrastructure projects.",
    stat: "8+",
    statLabel: "Countries with active footprints",
  },
  {
    icon: Cpu,
    title: "Modern Mining Tech",
    description: "Operate autonomous fleets and telemetry control rooms.",
    stat: "225+",
    statLabel: "Advanced heavy operational units",
  },
  {
    icon: GraduationCap,
    title: "Skills Development",
    description: "Continuous safety certifications and simulator training.",
    stat: "5,000+",
    statLabel: "Annual certified training hours",
  },
  {
    icon: Users,
    title: "Localization Commitment",
    description: "Dedicated to local hiring and community-led progress.",
    stat: "92%",
    statLabel: "Local regional workforce ratio",
  },
] as const;

export function WhyJoinSection(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section className="py-10 md:py-12 bg-white relative border-t border-neutral-100 overflow-hidden">
      {/* Blueprint fine crosshairs */}
      <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-neutral-200" />
      <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-neutral-200" />
      <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-neutral-200" />
      <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-neutral-200" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 md:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="dot" className="mb-4">
              Why SKT Global
            </Badge>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight leading-tight mb-4"
          >
            Build a Career That Is Built to Last.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm text-neutral-500 leading-relaxed max-w-lg"
          >
            We don&apos;t just extract value from the earth—we cultivate potentials within our
            people. Explore the core principles that support your career journey.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {VALUES.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="group relative bg-neutral-50 hover:bg-white border border-neutral-200/60 hover:border-neutral-300 p-5 rounded-xl transition-all duration-300 cursor-default"
                style={{
                  boxShadow: "0 2px 8px rgba(0,0,0,0.01)",
                }}
                whileHover={{
                  y: -3,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.03)",
                }}
              >
                {/* Icon Container */}
                <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-white border border-neutral-200/80 mb-4 group-hover:bg-neutral-50 transition-colors duration-300">
                  <IconComponent size={18} className="text-neutral-600 group-hover:text-neutral-900 transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Title */}
                <h3 className="text-sm font-bold text-neutral-900 mb-1.5 tracking-tight group-hover:text-neutral-950">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-neutral-500 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Stat block */}
                <div className="pt-4 border-t border-neutral-200/50 flex flex-col">
                  <span className="text-lg font-black text-neutral-950 tracking-tight leading-none">
                    {item.stat}
                  </span>
                  <span className="text-[9px] font-semibold text-neutral-400 uppercase tracking-wide mt-1">
                    {item.statLabel}
                  </span>
                </div>

                {/* Dynamic corner highlight */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[4px] border-r-[4px] border-t-transparent border-r-transparent group-hover:border-t-neutral-900 group-hover:border-r-neutral-900 transition-all duration-300 rounded-tr-xl" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
