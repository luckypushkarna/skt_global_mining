"use client";

import { type JSX } from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  TrendingUp,
  Heart,
  ArrowUpRight,
} from "lucide-react";

// ═══════════════════════════════════════════════════════════
//   CONFIG
// ═══════════════════════════════════════════════════════════

const LINKEDIN_JOBS_URL =
  "https://www.linkedin.com/company/skt-global-mining/jobs/";

const JOBS = [
  {
    id: "underground-mining",
    title: "Underground Mining Engineer",
    department: "Operations",
    location: "Zambia · Mufulira",
    type: "Full-time",
    experience: "5+ years",
  },
  {
    id: "heavy-equipment",
    title: "Heavy Equipment Operator",
    department: "Operations",
    location: "Zambia · Site-based",
    type: "Full-time",
    experience: "3+ years",
  },
  {
    id: "safety-officer",
    title: "Safety & Compliance Officer",
    department: "Health & Safety",
    location: "Zambia · Mufulira",
    type: "Full-time",
    experience: "4+ years",
  },
  {
    id: "logistics-coordinator",
    title: "Logistics Coordinator",
    department: "Supply Chain",
    location: "Zambia · Site-based",
    type: "Full-time",
    experience: "2+ years",
  },
  {
    id: "mechanical-engineer",
    title: "Mechanical Engineer",
    department: "Engineering",
    location: "Zambia · Mufulira",
    type: "Full-time",
    experience: "4+ years",
  },
  {
    id: "hr-specialist",
    title: "HR & Workforce Specialist",
    department: "People & Culture",
    location: "Zambia · Mufulira",
    type: "Full-time",
    experience: "3+ years",
  },
];

const PERKS = [
  {
    icon: Users,
    title: "Global Team",
    desc: "Work alongside professionals from India, Peru, Nigeria, and Zambia.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    desc: "Continuous training, certifications, and clear career progression paths.",
  },
  {
    icon: Heart,
    title: "Wellbeing First",
    desc: "Comprehensive health benefits, residential facilities, and 24/7 catering.",
  },
];

// ═══════════════════════════════════════════════════════════
//   SVG PATTERN — context-aware (same library as before)
// ═══════════════════════════════════════════════════════════

function CareerPattern({ type }: { type: "people" | "growth" | "care" }): JSX.Element {
  if (type === "people") {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        {[
          [12, 18], [22, 14], [32, 18], [42, 14], [50, 20],
          [16, 28], [28, 32], [40, 28], [48, 34],
          [14, 42], [24, 46], [36, 42], [46, 46],
        ].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="1.5"
            className="fill-neutral-300 group-hover:fill-neutral-900 transition-colors duration-500"
            style={{ transitionDelay: `${i * 30}ms` }}
          />
        ))}
      </svg>
    );
  }

  if (type === "growth") {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        {[
          { x: 10, h: 18 },
          { x: 22, h: 28 },
          { x: 34, h: 38 },
          { x: 46, h: 50 },
        ].map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={56 - b.h}
            width="6"
            height={b.h}
            rx="1"
            className="fill-neutral-300 group-hover:fill-neutral-900 transition-colors duration-500"
            style={{ transitionDelay: `${i * 60}ms` }}
          />
        ))}
      </svg>
    );
  }

  // care — concentric rings
  return (
    <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
      <circle cx="30" cy="30" r="22" strokeWidth="1" className="stroke-neutral-300 group-hover:stroke-neutral-900 transition-colors duration-500" />
      <circle cx="30" cy="30" r="14" strokeWidth="1" strokeDasharray="3 3" className="stroke-neutral-300 group-hover:stroke-neutral-900 transition-colors duration-500" />
      <circle cx="30" cy="30" r="3" className="fill-neutral-300 group-hover:fill-neutral-900 transition-colors duration-500" />
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════
//   MAIN COMPONENT
// ═══════════════════════════════════════════════════════════

export default function CareersPage(): JSX.Element {
  return (
    <div className="bg-white">
      {/* ─── HERO ─────────────────────────────────────── */}
      <section className="py-20 md:py-28 lg:py-36 px-6 md:px-10 lg:px-16 border-b border-neutral-200/70">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-6">
              <span className="inline-block w-1 h-1 rounded-full bg-neutral-400" />
              Careers
            </span>

            <h1 className="text-[32px] sm:text-[44px] lg:text-[60px] font-semibold tracking-[-0.02em] leading-[1.05] text-neutral-900 mb-6">
              Build your career in
              <br />
              <span className="text-neutral-300">the mining industry.</span>
            </h1>

            <p className="text-[14px] sm:text-[15.5px] leading-[1.7] text-neutral-500 font-light max-w-2xl mb-8">
              Join a team powering world-class copper operations. We invest in
              our people, develop their skills, and create long-term career
              pathways across our integrated mining ecosystem.
            </p>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-[11px] font-semibold tracking-[0.15em] uppercase text-neutral-500">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Hiring
              </span>
              <span>·</span>
              <span>{JOBS.length} open positions</span>
              <span>·</span>
              <span>Zambia</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── PERKS — context-driven SVG patterns ───────── */}
      <section className="py-16 md:py-20 px-6 md:px-10 lg:px-16 border-b border-neutral-200/70 bg-bg-soft">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {PERKS.map((perk, i) => {
              const Icon = perk.icon;
              const patternType =
                perk.title === "Global Team" ? "people" :
                perk.title === "Career Growth" ? "growth" : "care";

              return (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="group relative bg-white border border-neutral-200/70 rounded-xl p-6 transition-all duration-500 hover:border-neutral-300 hover:shadow-[0_12px_36px_-12px_rgba(0,0,0,0.08)]"
                >
                  {/* Top-right pattern */}
                  <div className="absolute top-5 right-5 w-12 h-12 sm:w-14 sm:h-14 opacity-70 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <CareerPattern type={patternType} />
                  </div>

                  {/* Icon circle */}
                  <div className="h-10 w-10 rounded-full border border-neutral-200/90 flex items-center justify-center mb-5 group-hover:border-neutral-900 transition-colors duration-500">
                    <Icon size={16} strokeWidth={1.5} className="text-neutral-700 group-hover:text-neutral-900 transition-colors" />
                  </div>

                  <h3 className="text-[16px] sm:text-base font-semibold text-neutral-900 tracking-tight mb-2">
                    {perk.title}
                  </h3>
                  <p className="text-[13px] text-neutral-500 leading-relaxed">
                    {perk.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── OPEN POSITIONS ────────────────────────────── */}
      <section className="py-16 md:py-24 lg:py-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 md:mb-16"
          >
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-4">
              Open Positions
            </p>
            <h2 className="text-[26px] sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] leading-[1.1] text-neutral-900">
              {JOBS.length} roles open
              <span className="text-neutral-300"> · Apply on LinkedIn</span>
            </h2>
          </motion.div>

          {/* Jobs List */}
          <div className="border-t border-neutral-200/70">
            {JOBS.map((job, i) => (
              <motion.a
                key={job.id}
                href={LINKEDIN_JOBS_URL}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-5%" }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className="group relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 py-6 md:py-7 border-b border-neutral-200/70 transition-colors duration-500 hover:bg-neutral-50/50"
              >
                {/* Left: Index + Title */}
                <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1 min-w-0">
                  {/* Index */}
                  <span className="text-[11px] sm:text-xs font-medium tracking-[0.25em] text-neutral-400 tabular-nums w-7 sm:w-10 flex-shrink-0 mt-1 sm:mt-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Title block */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-[16px] sm:text-lg font-semibold text-neutral-900 tracking-tight leading-tight mb-2 sm:mb-1.5">
                      {job.title}
                    </h3>

                    {/* Meta — inline tags */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[11px] sm:text-xs text-neutral-500">
                      <span className="font-medium text-neutral-700">
                        {job.department}
                      </span>
                      <span className="hidden sm:inline">·</span>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={11} strokeWidth={1.5} />
                        {job.location}
                      </span>
                      <span className="hidden sm:inline">·</span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={11} strokeWidth={1.5} />
                        {job.type}
                      </span>
                      <span className="hidden sm:inline">·</span>
                      <span className="flex items-center gap-1.5">
                        <Briefcase size={11} strokeWidth={1.5} />
                        {job.experience}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right: View button */}
                <div className="flex items-center gap-2 pl-11 sm:pl-0">
                  <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-900 hidden sm:inline">
                    View on LinkedIn
                  </span>
                  <span className="inline-flex items-center justify-center h-9 w-9 sm:h-10 sm:w-10 rounded-full border border-neutral-200/90 group-hover:border-neutral-900 group-hover:bg-neutral-900 group-hover:text-white text-neutral-700 transition-all duration-500 flex-shrink-0">
                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.75}
                      className="transition-transform duration-300 group-hover:rotate-45"
                    />
                  </span>
                </div>

                {/* Hover accent line */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-neutral-900 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MAIN CTA ─────────────────────────────────── */}
      <section className="py-16 md:py-24 px-6 md:px-10 lg:px-16 bg-bg-soft border-t border-neutral-200/70">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-5">
              Don't see your role?
            </p>

            <h2 className="text-[24px] sm:text-3xl lg:text-4xl font-semibold tracking-[-0.02em] leading-[1.1] text-neutral-900 mb-5">
              We're always looking for
              <br />
              <span className="text-neutral-300">great talent.</span>
            </h2>

            <p className="text-[14px] sm:text-[15.5px] leading-[1.7] text-neutral-500 font-light mb-9 max-w-xl mx-auto">
              If you don't see a role that fits, send us your CV. We'll keep
              you in mind for future opportunities.
            </p>

            <a
              href={LINKEDIN_JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-neutral-900 text-white text-[13px] font-semibold tracking-[0.15em] uppercase rounded-full hover:bg-neutral-800 transition-colors duration-300"
            >
              View All Openings
              <ArrowUpRight
                size={14}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:rotate-45"
              />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
