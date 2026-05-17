"use client";

import { JSX, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";
import { ArrowRight, FileText, CheckSquare, Compass } from "lucide-react";

const STEPS = [
  {
    num: "01",
    title: "Apply Online",
    description: "Submit your comprehensive CV and credentials via our web portals or directly for specific listings.",
    duration: "Takes 5 minutes",
  },
  {
    num: "02",
    title: "Document Review",
    description: "Our HSE and engineering selection teams cross-verify your technical certifications and background.",
    duration: "1-2 Weeks",
  },
  {
    num: "03",
    title: "Panel Interviews",
    description: "Meet with discipline heads and safety leaders to discuss your background and professional ethics.",
    duration: "2-3 Rounds",
  },
  {
    num: "04",
    title: "Competency Check",
    description: "Undergo custom simulator runs or on-site safe operational assessments depending on requirements.",
    duration: "Varies by Role",
  },
  {
    num: "05",
    title: "Comprehensive Offer",
    description: "Receive a transparent package detailing compensation, standard housing, and medical logistics.",
    duration: "Within 1 Week",
  },
  {
    num: "06",
    title: "Onboarding & HSE Training",
    description: "Undergo mandatory deep safety induction (ISO 45001) prior to deployment to active locations.",
    duration: "First 2 Weeks",
  },
] as const;

export function ApplicationProcess(): JSX.Element {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-10%" });

  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Background blueprint details */}
      <div className="absolute top-10 left-10 w-24 h-px bg-neutral-200" />
      <div className="absolute top-10 left-10 h-24 w-px bg-neutral-200" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <Badge variant="dot" className="mb-5">
            Recruitment Process
          </Badge>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-none mb-6">
            Your Journey <br />
            Starts <span className="text-neutral-300">Here.</span>
          </h2>
          
          <p className="text-base text-neutral-500 max-w-xl leading-relaxed">
            Our hiring sequence is transparent, standard, and highly efficient. Here is what to
            anticipate from submission to operational deployment.
          </p>
        </div>

        {/* Steps Timeline Grid */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {STEPS.map((step, idx) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative bg-white border border-neutral-200/80 hover:border-neutral-950 p-8 rounded-2xl transition-all duration-300 cursor-default"
            >
              {/* Connector Arrow for large viewports */}
              {idx < STEPS.length - 1 && (
                <ArrowRight
                  size={16}
                  className="absolute top-1/2 -right-4 -translate-y-1/2 text-neutral-300 hidden lg:block group-hover:text-neutral-900 group-hover:translate-x-1 transition-all duration-300 z-20 pointer-events-none"
                />
              )}

              {/* Step counter */}
              <div className="text-display-xs font-black text-neutral-200 group-hover:text-neutral-950 transition-colors mb-6 leading-none tracking-tight">
                {step.num}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-neutral-900 mb-2 tracking-tight group-hover:text-neutral-950">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-neutral-500 leading-relaxed mb-6">
                {step.description}
              </p>

              {/* Duration badge */}
              <span className="inline-block px-3 py-1 bg-neutral-50 text-[10px] font-bold text-neutral-500 rounded border border-neutral-200/50 uppercase tracking-wider">
                {step.duration}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="border border-neutral-200 bg-white p-8 md:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100 mb-6">
              <FileText size={18} className="text-neutral-600" />
            </div>
            <h4 className="text-base font-bold text-neutral-900 mb-2 tracking-tight">
              Tailor Your Credentials
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Ensure you list specific technical machinery operating experience, heavy industrial safety
              protocols, or engineering methodologies relevant to your field.
            </p>
          </div>

          <div>
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100 mb-6">
              <CheckSquare size={18} className="text-neutral-600" />
            </div>
            <h4 className="text-base font-bold text-neutral-900 mb-2 tracking-tight">
              Demonstrate Safety Ethics
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              We uphold zero-harm compliance unconditionally. Focus heavily on safe practices, certified logs,
              and standard regulatory adherence in your past roles.
            </p>
          </div>

          <div>
            <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-50 border border-neutral-100 mb-6">
              <Compass size={18} className="text-neutral-600" />
            </div>
            <h4 className="text-base font-bold text-neutral-900 mb-2 tracking-tight">
              Be Adaptable & Ambitious
            </h4>
            <p className="text-xs text-neutral-500 leading-relaxed">
              We deploy globally. Candidates demonstrating long-term desire for training, regional rotation,
              and continuous skills development are always prioritized.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
