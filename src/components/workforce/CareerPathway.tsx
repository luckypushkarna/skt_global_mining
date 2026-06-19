"use client";

import { motion } from "framer-motion";
import { ArrowRight, UserCheck } from "lucide-react";

interface PathwayStep {
  stage: string;
  title: string;
  operator: string;
  timeline: string;
  details: string;
  stats: string;
}

const PATHWAY_STEPS: PathwayStep[] = [
  {
    stage: "01",
    title: "Technician & Operator Entry",
    operator: "Safeli Maxim Chipulu",
    timeline: "Years 1 - 3",
    details: "Focuses on hands-on machinery operations, underground safety drills, and specialized mechanical certification (e.g. heavy mechanical loader operation).",
    stats: "240+ Hours annual drill training",
  },
  {
    stage: "02",
    title: "Operations Supervisor",
    operator: "Kiran Kumar Reddy",
    timeline: "Years 4 - 7",
    details: "Taking on team leadership, resource planning, and shift safety command. Requires completion of the SKT Management Pathway Course.",
    stats: "15-crew direct leadership",
  },
  {
    stage: "03",
    title: "Specialist Site Engineer",
    operator: "Charles Sakanya",
    timeline: "Year 8+",
    details: "Directing processing loops, heavy maintenance grids, and complex engineering strategy. Supported by SKT-sponsored professional degree modules.",
    stats: "Directs 4.2M Processing loop",
  },
];

export function CareerPathway() {
  return (
    <section className="bg-zinc-950 text-white py-24 md:py-32 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase block mb-3">
            ── Professional Growth Map
          </span>
          <h2 className="text-4xl md:text-5xl uppercase tracking-tight font-serif font-normal">
            The SKT Career Pathway
          </h2>
          <p className="text-zinc-400 text-sm mt-3 max-w-xl font-light leading-relaxed">
            How we convert local talent into world-class mining specialists. A structured pipeline from operator entry to senior site engineering.
          </p>
        </div>

        {/* Visual Flow Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative items-start">
          {/* Animated Connecting Line (desktop only) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[15%] right-[15%] h-[1px] bg-gradient-to-r from-sky-500/20 via-sky-500/80 to-sky-500/20 z-0" />

          {PATHWAY_STEPS.map((step, idx) => (
            <motion.div
              key={step.stage}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="bg-zinc-900/40 border border-zinc-800 p-6 md:p-8 relative z-10 hover:border-sky-500/30 transition-all duration-300"
            >
              {/* Stage Circle */}
              <div className="flex items-center justify-between mb-8">
                <div className="w-12 h-12 rounded-none bg-sky-950 border border-sky-900 flex items-center justify-center font-mono font-black text-sky-400 text-lg">
                  {step.stage}
                </div>
                <div className="font-mono text-[10px] text-zinc-500 tracking-wider">
                  {step.timeline}
                </div>
              </div>

              {/* Title & Info */}
              <h3 className="text-xl font-bold uppercase tracking-tight text-white mb-2">
                {step.title}
              </h3>
              <p className="text-zinc-400 text-xs leading-relaxed font-light mb-6">
                {step.details}
              </p>

              {/* Pathway Case Study */}
              <div className="bg-zinc-950/80 border border-zinc-900 p-4 space-y-3">
                <div className="flex items-center gap-2">
                  <UserCheck className="w-3.5 h-3.5 text-sky-400" />
                  <span className="font-mono text-[10px] text-sky-300 uppercase tracking-wider">
                    REPRESENTATIVE PROFILE
                  </span>
                </div>
                <div>
                  <p className="text-sm font-bold text-white leading-none">{step.operator}</p>
                  <p className="text-[10px] font-mono text-zinc-500 uppercase mt-1">
                    {step.stats}
                  </p>
                </div>
              </div>

              {/* Decorative direction marker (for mobile/tablet) */}
              {idx < 2 && (
                <div className="flex justify-center mt-6 lg:hidden">
                  <ArrowRight className="w-6 h-6 text-sky-400 rotate-90" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
