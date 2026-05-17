"use client";

import { JSX, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";
import { MapPin, Clock, ShieldCheck, ArrowUpRight, Coins } from "lucide-react";

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  salary: string;
  exp: string;
  urgent?: boolean;
  safetyCertified?: boolean;
  remoteAvailable?: boolean;
}

const JOBS: Job[] = [
  {
    id: "skt-101",
    title: "Senior Underground Mining Engineer",
    department: "Mining",
    location: "Zambia Operations",
    type: "Full-time",
    salary: "$45k - $65k equivalent",
    exp: "5+ Years",
    urgent: true,
    safetyCertified: true,
  },
  {
    id: "skt-102",
    title: "Mechanical Maintenance Supervisor",
    department: "Engineering",
    location: "Zambia Operations",
    type: "Full-time",
    salary: "$35k - $50k equivalent",
    exp: "3-5 Years",
    safetyCertified: true,
  },
  {
    id: "skt-103",
    title: "HSE Compliance Director (ISO 45001)",
    department: "Safety",
    location: "India HQ",
    type: "Full-time",
    salary: "Competitive Scale",
    exp: "8+ Years",
    urgent: true,
    safetyCertified: true,
  },
  {
    id: "skt-104",
    title: "High-Voltage Electrical Technologist",
    department: "Engineering",
    location: "Zambia Operations",
    type: "Full-time",
    salary: "$40k - $55k equivalent",
    exp: "4+ Years",
    safetyCertified: true,
  },
  {
    id: "skt-105",
    title: "Global Supply Chain & Logistics lead",
    department: "Operations",
    location: "South Africa",
    type: "Full-time",
    salary: "Market Competitive",
    exp: "6+ Years",
    remoteAvailable: true,
  },
  {
    id: "skt-106",
    title: "Human Resources Generalist",
    department: "HR",
    location: "Zambia Operations",
    type: "Full-time",
    salary: "Negotiable",
    exp: "2-4 Years",
    remoteAvailable: true,
  },
];

const DEPARTMENTS = ["All", "Engineering", "Mining", "Safety", "Operations", "HR"];
const LOCATIONS = ["All", "Zambia Operations", "India HQ", "South Africa"];

export function JobOpenings(): JSX.Element {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLoc, setSelectedLoc] = useState("All");

  const filteredJobs = JOBS.filter((job) => {
    const deptMatch = selectedDept === "All" || job.department === selectedDept;
    const locMatch = selectedLoc === "All" || job.location === selectedLoc;
    return deptMatch && locMatch;
  });

  return (
    <section id="open-jobs" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Badge variant="dot" className="mb-5">
            Current Vacancies
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-none mb-6">
            Join Our Global <br />
            Operations <span className="text-neutral-300">Hub.</span>
          </h2>
          <p className="text-base text-neutral-500 max-w-xl leading-relaxed">
            Explore our open vacancies. Find where your capabilities meet our industrial
            frontiers. All positions prioritize environmental sustainability and zero-harm philosophies.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-col gap-6 mb-12 pb-8 border-b border-neutral-100">
          {/* Department Filter */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              Department
            </span>
            <div className="flex flex-wrap gap-2">
              {DEPARTMENTS.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    selectedDept === dept
                      ? "bg-neutral-900 border-neutral-900 text-white shadow-sm"
                      : "bg-neutral-50 border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                  }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>

          {/* Location Filter */}
          <div className="flex flex-col gap-2">
            <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-widest">
              Primary Location
            </span>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLoc(loc)}
                  className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
                    selectedLoc === loc
                      ? "bg-neutral-900 border-neutral-900 text-white shadow-sm"
                      : "bg-neutral-50 border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                  }`}
                >
                  {loc === "Zambia Operations" ? "Zambia" : loc === "India HQ" ? "India" : loc}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Jobs List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[350px]">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-neutral-50 hover:bg-white border border-neutral-200/60 hover:border-neutral-900 p-8 rounded-2xl transition-all duration-300 cursor-default"
                >
                  {/* Card Tags Header */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.urgent && (
                      <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wide bg-neutral-900 text-white uppercase rounded">
                        Urgent Hiring
                      </span>
                    )}
                    {job.safetyCertified && (
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 text-[9px] font-bold tracking-wide border border-neutral-200 text-neutral-500 uppercase rounded bg-white">
                        <ShieldCheck size={10} className="text-neutral-600" />
                        Safety ISO Verified
                      </span>
                    )}
                    {job.remoteAvailable && (
                      <span className="px-2.5 py-0.5 text-[9px] font-bold tracking-wide border border-neutral-200 text-neutral-500 uppercase rounded bg-white">
                        Remote Hybrid
                      </span>
                    )}
                  </div>

                  {/* Title & Department info */}
                  <div className="mb-8">
                    <span className="text-[10px] font-bold tracking-widest text-neutral-400 uppercase">
                      {job.department}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 tracking-tight mt-1 group-hover:text-neutral-950">
                      {job.title}
                    </h3>
                  </div>

                  {/* Operational details */}
                  <div className="grid grid-cols-2 gap-4 pb-6 border-b border-neutral-200/50 mb-6 text-xs text-neutral-500">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-neutral-400" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={14} className="text-neutral-400" />
                      <span>{job.exp}</span>
                    </div>
                    <div className="flex items-center gap-2 col-span-2">
                      <Coins size={14} className="text-neutral-400" />
                      <span>Est. Scale: {job.salary}</span>
                    </div>
                  </div>

                  {/* Bottom Apply Bar */}
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold tracking-wider text-neutral-400 uppercase">
                      Reference: {job.id}
                    </span>
                    <button
                      onClick={() => {
                        window.location.href = `/contact?job=${encodeURIComponent(job.title)}`;
                      }}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors"
                    >
                      Apply Now
                      <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-2 flex flex-col items-center justify-center py-16 text-center border border-dashed border-neutral-200 rounded-2xl bg-neutral-50"
              >
                <span className="text-3xl mb-4">🔍</span>
                <h3 className="text-sm font-bold text-neutral-800 uppercase tracking-wider">
                  No positions match filters
                </h3>
                <p className="text-xs text-neutral-400 mt-1 max-w-xs leading-relaxed">
                  Try clearing some criteria or submit an open application using our CV submission form below.
                </p>
                <button
                  onClick={() => {
                    setSelectedDept("All");
                    setSelectedLoc("All");
                  }}
                  className="mt-4 px-4 py-2 text-[10px] font-bold tracking-widest text-neutral-900 border border-neutral-900 uppercase hover:bg-neutral-900 hover:text-white transition-all"
                >
                  Clear Filters
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
