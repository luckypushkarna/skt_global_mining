"use client";

import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";
import { ArrowRight, FileText, CheckSquare, Compass } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Apply Online",
    description: "Submit your CV and technical credentials via our portals.",
    duration: "Takes 5 minutes",
  },
  {
    num: "02",
    title: "Document Review",
    description: "HSE and engineering teams verify your certifications.",
    duration: "1-2 Weeks",
  },
  {
    num: "03",
    title: "Panel Interviews",
    description: "Discuss engineering background and safety ethics.",
    duration: "2-3 Rounds",
  },
  {
    num: "04",
    title: "Competency Check",
    description: "Undergo simulator runs and on-site assessments.",
    duration: "Varies by Role",
  },
  {
    num: "05",
    title: "Comprehensive Offer",
    description: "Receive compensation, housing, and medical details.",
    duration: "Within 1 Week",
  },
  {
    num: "06",
    title: "Onboarding & HSE",
    description: "Complete mandatory safety induction prior to deployment.",
    duration: "First 2 Weeks",
  },
] as const;

export function ApplicationProcess(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section className="py-12 md:py-16 bg-neutral-50 relative overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute top-6 left-6 w-16 h-px bg-neutral-200" />
      <div className="absolute top-6 left-6 h-16 w-px bg-neutral-200" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <Badge variant="dot" className="mb-4">
            Recruitment Process
          </Badge>
          
          <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight leading-tight mb-4">
            Your Journey Starts Here.
          </h2>
          
          <p className="text-sm text-neutral-500 max-w-lg leading-relaxed">
            Our hiring sequence is transparent, standard, and highly efficient. Here is what to
            anticipate from submission to operational deployment.
          </p>
        </div>

        {/* Steps Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-neutral-200/80 hover:border-neutral-950 p-5 rounded-xl transition-all duration-300 cursor-default"
            >
              {/* Connector Arrow for large viewports */}
              {idx < STEPS.length - 1 && (
                <ArrowRight
                  size={14}
                  className="absolute top-1/2 -right-3 -translate-y-1/2 text-neutral-300 hidden lg:block group-hover:text-neutral-900 group-hover:translate-x-0.5 transition-all duration-300 z-20 pointer-events-none"
                />
              )}

              {/* Step counter */}
              <div className="text-xl font-black text-neutral-200 group-hover:text-neutral-950 transition-colors mb-3 leading-none tracking-tight">
                {step.num}
              </div>

              {/* Title */}
              <h3 className="text-sm font-bold text-neutral-900 mb-1.5 tracking-tight group-hover:text-neutral-950">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-[11px] text-neutral-500 leading-relaxed mb-4">
                {step.description}
              </p>

              {/* Duration badge */}
              <span className="inline-block px-2 py-0.5 bg-neutral-50 text-[9px] font-bold text-neutral-500 rounded border border-neutral-200/50 uppercase tracking-wider">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border border-neutral-200 bg-white p-5 md:p-8 rounded-2xl grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div>
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-50 border border-neutral-100 mb-4">
              <FileText size={16} className="text-neutral-600" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900 mb-1.5 tracking-tight">
              Tailor Your Credentials
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              List specific heavy machinery operating experience and technical certifications.
            </p>
          </div>

          <div>
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-50 border border-neutral-100 mb-4">
              <CheckSquare size={16} className="text-neutral-600" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900 mb-1.5 tracking-tight">
              Demonstrate Safety Ethics
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Highlight zero-harm compliance and standard regulatory adherence in past roles.
            </p>
          </div>

          <div>
            <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-neutral-50 border border-neutral-100 mb-4">
              <Compass size={16} className="text-neutral-600" />
            </div>
            <h4 className="text-sm font-bold text-neutral-900 mb-1.5 tracking-tight">
              Be Adaptable & Ambitious
            </h4>
            <p className="text-[11px] text-neutral-500 leading-relaxed">
              Focus on your willingness to train, rotate, and deploy internationally.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
