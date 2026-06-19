"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, Linkedin } from "lucide-react";

const LINKEDIN_JOBS_URL = "https://www.linkedin.com/company/skt-global-mining-service-limited/jobs/";

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

export default function CareersOpenings() {
  return (
    <section className="py-24 md:py-36 px-6 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <p className="text-[10px] sm:text-[11px] font-bold tracking-[0.3em] uppercase text-slate-500 mb-6">
              Open Positions
            </p>
            <h2 className="text-3xl md:text-5xl font-serif font-normal text-slate-900 leading-[1.1] tracking-tight">
              {JOBS.length} roles open
            </h2>
          </div>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-500">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Hiring directly via LinkedIn
          </div>
        </motion.div>

        <div className="border-t border-slate-200">
          {JOBS.map((job, i) => (
            <motion.a
              key={job.id}
              href={LINKEDIN_JOBS_URL}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group flex flex-col md:flex-row md:items-center justify-between gap-6 py-8 md:py-10 border-b border-slate-200 transition-colors hover:bg-slate-50/50"
            >
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-serif font-normal text-slate-900 tracking-tight mb-4 group-hover:text-skt-blue transition-colors">
                  {job.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs md:text-sm text-slate-500">
                  <span className="font-semibold text-slate-800 uppercase tracking-wider text-[11px]">
                    {job.department}
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin size={14} className="text-slate-400" />
                    {job.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock size={14} className="text-slate-400" />
                    {job.type}
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase size={14} className="text-slate-400" />
                    {job.experience}
                  </span>
                </div>
              </div>

              <div className="flex-shrink-0">
                <span className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-skt-blue text-skt-blue text-[11px] font-bold tracking-[0.15em] uppercase group-hover:bg-skt-blue group-hover:text-white transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                  Apply on LinkedIn
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
