"use client";

import { type JSX, useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Warehouse,
  Home,
  UtensilsCrossed,
  Bus,
  Building2,
  Users,
  Globe,
  Shield,
} from "lucide-react";
import { Badge } from "@/components/atoms/Badge";

const PILLARS = [
  {
    icon: Warehouse,
    title: "Global Supply Chain & Warehousing",
    description:
      "We manage the importation of advanced machinery from multiple countries with strict regulatory compliance. Our modern high-capacity warehouses keep critical parts ready for our fleet of 225+ underground machines.",
    highlight: "225+ Underground Machines",
  },
  {
    icon: Home,
    title: "Residential Facilities",
    description:
      "Premium residential camps support our diverse team of expatriates from India, Peru, and Nigeria. Secure, comfortable, world-class living environments ensure our workforce is rested and focused.",
    highlight: "World-Class Living Standards",
  },
  {
    icon: UtensilsCrossed,
    title: "24-Hour Catering Operations",
    description:
      "Mining never stops, and neither do we. Our fully functional 24-hour catering facility delivers nutritious, high-quality meals to the entire workforce, fueling productivity across every shift.",
    highlight: "Round-the-Clock Service",
  },
  {
    icon: Bus,
    title: "Comprehensive Transportation",
    description:
      "Dedicated transportation services guarantee the secure and reliable daily movement of 1,500+ employees to and from mining sites - extending safety beyond the mine shafts.",
    highlight: "1,500+ Daily Commutes",
  },
];

const STATS = [
  { value: "$50M", label: "Initial Investment" },
  { value: "1,500+", label: "Workforce Supported" },
  { value: "225+", label: "Underground Machines" },
  { value: "24/7", label: "Continuous Operations" },
];

export default function InfrastructurePage(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-bg-soft">

      {/* ─── HERO ─────────────────────────────────────── */}
      <section ref={containerRef} className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-neutral-950">
        
        {/* Parallax Background */}
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <Image
            src="/infrastructure-facilities.webp"
            alt="Infrastructure and Facilities"
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/40 via-transparent to-neutral-950" />
        </motion.div>

        {/* Cinematic Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center justify-center gap-2 mb-6 md:mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-amber-500 inline-block" />
            <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-neutral-400">
              Infrastructure & Facilities
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-serif font-normal tracking-tight text-white leading-[1.05] max-w-5xl mx-auto mb-10"
          >
            World-Class Facilities &
            <br className="hidden md:block" /> <span className="text-white/80">Infrastructure</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-xl text-neutral-300 font-light leading-relaxed max-w-3xl mx-auto"
          >
            At SKT Global, our $50 million initial investment extended far beyond heavy machinery. We established an operational backbone capable of sustaining round-the-clock mining excellence.
          </motion.p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        >
          <span className="text-[9px] font-bold tracking-[0.2em] uppercase text-white/50">
            Discover
          </span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-scroll-line" />
          </div>
        </motion.div>

      </section>

      {/* ─── STATS BAR ────────────────────────────────── */}
      <section className="py-8 md:py-10 px-5 md:px-10 lg:px-16 border-b border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <p className="text-[24px] md:text-[32px] font-semibold text-neutral-900 tracking-tight">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] md:text-[11px] font-semibold tracking-[0.15em] uppercase text-neutral-500">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY PILLARS ──────────────────────────────── */}
      <section className="py-12 md:py-20 px-5 md:px-10 lg:px-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl mb-10 md:mb-14"
          >
            <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500">
              Key Infrastructure Pillars
            </p>
            <h2 className="mt-3 text-[24px] md:text-4xl text-neutral-900 tracking-tight leading-[1.15] font-serif font-normal">
              The operational backbone of{" "}
              <span className="text-neutral-400">our mining excellence</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {PILLARS.map((pillar, i) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 md:p-7 bg-white border border-neutral-200 rounded-xl hover:border-neutral-300 hover:shadow-sm transition-all"
              >
                {/* Icon */}
                <div className="h-11 w-11 rounded-lg bg-neutral-900 flex items-center justify-center mb-5">
                  <pillar.icon size={18} className="text-white" />
                </div>

                {/* Title */}
                <h3 className="text-[16px] md:text-lg font-semibold text-neutral-900 tracking-tight leading-snug">
                  {pillar.title}
                </h3>

                {/* Description */}
                <p className="mt-2.5 text-[13px] md:text-[14px] text-neutral-500 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Highlight tag */}
                <div className="mt-5 pt-4 border-t border-neutral-100">
                  <p className="text-[10px] font-semibold tracking-[0.15em] uppercase text-neutral-900">
                    {pillar.highlight}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SUPPORTING BLOCK ─────────────────────────── */}
      <section className="py-12 md:py-20 px-5 md:px-10 lg:px-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 md:gap-14 items-start">

            {/* Left: Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-500">
                Built for the Long Term
              </p>
              <h2 className="mt-3 text-[22px] md:text-3xl text-neutral-900 tracking-tight leading-[1.15] font-serif font-normal">
                Infrastructure that{" "}
                <span className="text-neutral-400">scales with us</span>
              </h2>
            </motion.div>

            {/* Right: Supporting points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-4 md:space-y-5"
            >
              {[
                {
                  icon: Globe,
                  text: "Multi-country machinery sourcing with full regulatory compliance.",
                },
                {
                  icon: Users,
                  text: "Diverse expatriate workforce from India, Peru, and Nigeria.",
                },
                {
                  icon: Shield,
                  text: "Secure environments designed for safety and well-being.",
                },
                {
                  icon: Building2,
                  text: "Modern warehouses keeping critical operations always ready.",
                },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="flex-shrink-0 h-8 w-8 rounded-lg bg-neutral-100 flex items-center justify-center mt-0.5">
                    <Icon size={14} className="text-neutral-900" />
                  </div>
                  <p className="text-[13px] md:text-[14px] text-neutral-600 leading-relaxed pt-1">
                    {text}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────── */}
      <section className="py-12 md:py-16 px-5 md:px-10 lg:px-16">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[13px] md:text-[15px] text-neutral-500">
            Want to learn more about our operations?
          </p>
          <a
            href="/operations/logistics-network"
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:gap-3 transition-all"
          >
            Explore our logistics network →
          </a>
        </div>
      </section>
    </div>
  );
}
