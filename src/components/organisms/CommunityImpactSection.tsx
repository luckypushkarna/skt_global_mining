"use client";

import { type JSX } from "react";
import { motion } from "framer-motion";
import { Users, GraduationCap, Briefcase, TrendingUp } from "lucide-react";
import { Badge } from "@/components/atoms/Badge";

const PILLARS = [
  {
    title: "Community Development",
    description: "Investing in infrastructure and services to uplift local regions.",
    icon: Users,
  },
  {
    title: "Skills & Training",
    description: "Equipping local talent with advanced mechanised mining capabilities.",
    icon: GraduationCap,
  },
  {
    title: "Workforce Empowerment",
    description: "Creating high-value career pathways and continuous professional growth.",
    icon: Briefcase,
  },
  {
    title: "Long-Term Impact",
    description: "Building sustainable economic ecosystems that outlast a single mine.",
    icon: TrendingUp,
  },
];

export function CommunityImpactSection(): JSX.Element {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column: Vision & Copy */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="dot" className="mb-6">Corporate Social Responsibility</Badge>
            <h2 className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.15] mb-6">
              Building More <br className="hidden md:block" />
              <span className="text-neutral-400">Than Mines.</span>
            </h2>
            <p className="text-[15px] md:text-base text-neutral-600 font-light leading-relaxed max-w-md mb-10">
              Our commitment extends beyond operations. Through community investment, workforce development, skills transfer and long-term social initiatives, we aim to create lasting value for the communities we serve.
            </p>
            
            {/* Highlight Metric */}
            <div className="inline-flex items-center gap-5 p-5 rounded-2xl bg-neutral-50 border border-neutral-100 shadow-sm">
              <div className="w-12 h-12 rounded-full bg-skt-navy/10 flex items-center justify-center flex-shrink-0">
                <span className="text-skt-navy font-bold text-lg">20%</span>
              </div>
              <p className="text-[15px] font-medium text-neutral-900 leading-tight">
                Of Net Profits Committed to <br className="hidden sm:block" />
                <span className="text-neutral-500 font-normal">CSR Initiatives</span>
              </p>
            </div>
          </motion.div>

          {/* Right Column: Pillars Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {PILLARS.map((pillar, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * idx, ease: [0.16, 1, 0.3, 1] }}
                className="group p-6 md:p-8 rounded-2xl bg-neutral-50 border border-neutral-100 hover:bg-white hover:border-neutral-200 hover:shadow-md transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-white border border-neutral-100 flex items-center justify-center text-neutral-400 group-hover:text-skt-navy group-hover:border-skt-navy/20 transition-colors duration-300 mb-5">
                  <pillar.icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-neutral-900 mb-2">
                  {pillar.title}
                </h3>
                <p className="text-[13px] md:text-sm text-neutral-500 leading-relaxed">
                  {pillar.description}
                </p>
              </motion.div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
}
