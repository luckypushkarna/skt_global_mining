"use client";

import { type JSX } from "react";
import { motion } from "framer-motion";
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
  return (
    <div className="bg-bg-soft">

      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="py-12 md:py-20 px-5 md:px-10 lg:px-16 border-b border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Badge variant="dot">Infrastructure & Facilities</Badge>

            <h1 className="mt-4 text-[28px] md:text-5xl text-neutral-900 tracking-tight leading-[1.1] font-serif font-normal">
              World-Class Facilities &{" "}
              <span className="text-neutral-400">Infrastructure</span>
            </h1>

            <p className="mt-4 md:mt-5 text-[14px] md:text-lg text-neutral-600 leading-relaxed">
              Built for Scale, Safety, and Efficiency.
            </p>

            <p className="mt-4 md:mt-5 text-[13px] md:text-[15px] text-neutral-500 leading-relaxed max-w-2xl">
              At SKT Global, our $50 million initial investment extended far
              beyond heavy machinery. To support a world-record mobilization and
              a workforce of over 1,500 personnel, we established an
              operational backbone capable of sustaining round-the-clock mining
              excellence.
            </p>
          </motion.div>
        </div>
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
