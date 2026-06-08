"use client";

import { JSX, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  {
    id: "skt-107",
    title: "Senior Exploration Geologist",
    department: "Mining",
    location: "South Africa",
    type: "Full-time",
    salary: "$55k - $75k equivalent",
    exp: "6+ Years",
    safetyCertified: true,
  },
  {
    id: "skt-108",
    title: "Automation & Robotics Specialist",
    department: "Engineering",
    location: "India HQ",
    type: "Full-time",
    salary: "$50k - $70k equivalent",
    exp: "5+ Years",
    remoteAvailable: true,
  },
  {
    id: "skt-109",
    title: "Environmental Impact Analyst",
    department: "Safety",
    location: "South Africa",
    type: "Full-time",
    salary: "Market Competitive",
    exp: "3-5 Years",
    remoteAvailable: true,
    safetyCertified: true,
  },
  {
    id: "skt-110",
    title: "Mine Operations Manager",
    department: "Operations",
    location: "Zambia Operations",
    type: "Full-time",
    salary: "$60k - $80k equivalent",
    exp: "10+ Years",
    urgent: true,
    safetyCertified: true,
  },
  {
    id: "skt-111",
    title: "Talent Acquisition Specialist",
    department: "HR",
    location: "India HQ",
    type: "Full-time",
    salary: "Negotiable",
    exp: "3+ Years",
    remoteAvailable: true,
  },
  {
    id: "skt-112",
    title: "Plant Process Metallurgist",
    department: "Engineering",
    location: "Zambia Operations",
    type: "Full-time",
    salary: "$42k - $58k equivalent",
    exp: "4+ Years",
    safetyCertified: true,
  },
];

const DEPARTMENTS = ["All", "Engineering", "Mining", "Safety", "Operations", "HR"];
const LOCATIONS = ["All", "Zambia Operations", "India HQ", "South Africa"];

export function JobOpenings(): JSX.Element {
  const [selectedDept, setSelectedDept] = useState("All");
  const [selectedLoc, setSelectedLoc] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const syncFilters = () => {
      const params = new URLSearchParams(window.location.search);
      const q = params.get("q") || "";
      const dept = params.get("dept") || "";
      const loc = params.get("loc") || "";

      setSearchQuery(q);

      if (dept) {
        const match = DEPARTMENTS.find(
          (d) => d.toLowerCase() === dept.toLowerCase()
        );
        if (match) setSelectedDept(match);
      } else {
        setSelectedDept("All");
      }

      if (loc) {
        const match = LOCATIONS.find((l) => {
          const key =
            l === "Zambia Operations"
              ? "zambia"
              : l === "India HQ"
              ? "india"
              : l === "South Africa"
              ? "sa"
              : l;
          return key.toLowerCase() === loc.toLowerCase();
        });
        if (match) setSelectedLoc(match);
      } else {
        setSelectedLoc("All");
      }
    };

    syncFilters();
    window.addEventListener("job-search-updated", syncFilters);
    window.addEventListener("popstate", syncFilters);
    return () => {
      window.removeEventListener("job-search-updated", syncFilters);
      window.removeEventListener("popstate", syncFilters);
    };
  }, []);

  const filteredJobs = JOBS.filter((job) => {
    const deptMatch = selectedDept === "All" || job.department === selectedDept;
    const locMatch = selectedLoc === "All" || job.location === selectedLoc;
    const queryMatch =
      !searchQuery ||
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.department.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase());
    return deptMatch && locMatch && queryMatch;
  });

  return (
    <section id="open-jobs" className="py-10 md:py-12 bg-neutral-50 relative border-t border-b border-neutral-200/60 overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Section Header & Filter Controls Container */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8 pb-5 border-b border-neutral-200/50">
          {/* Section Header */}
          <div className="max-w-3xl mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold tracking-[0.2em] uppercase bg-transparent text-neutral-600 pl-0 mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block"></span>
              Current Vacancies
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight leading-tight mb-3">
              Join Our Global Operations Hub.
            </h2>
            <p className="text-sm text-neutral-500 max-w-lg leading-relaxed">
              Explore our open vacancies. Find where your capabilities meet our industrial frontiers. All positions prioritize environmental sustainability and zero-harm philosophies.
            </p>
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col gap-3.5 mb-6 pb-4 border-b border-neutral-200/50 lg:border-none lg:pb-0 lg:mb-0 min-w-[280px] lg:min-w-[400px]">
            {/* Department Filter */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                Department
              </span>
              <div className="flex flex-wrap gap-1.5">
                {DEPARTMENTS.map((dept) => (
                  <button
                    key={dept}
                    onClick={() => setSelectedDept(dept)}
                    className={`px-3 py-1.5 text-[11px] font-semibold rounded-md border transition-all ${selectedDept === dept
                        ? "bg-skt-navy border-neutral-900 text-white shadow-sm"
                        : "bg-white border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                      }`}
                  >
                    {dept}
                  </button>
                ))}
              </div>
            </div>

            {/* Location Filter */}
            <div className="flex flex-col gap-1.5">
              <span className="text-[9px] font-bold text-neutral-400 uppercase tracking-widest">
                Primary Location
              </span>
              <div className="flex flex-wrap gap-1.5">
                {LOCATIONS.map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setSelectedLoc(loc)}
                    className={`px-3 py-1.5 text-[11px] font-semibold rounded-md border transition-all ${selectedLoc === loc
                        ? "bg-skt-navy border-neutral-900 text-white shadow-sm"
                        : "bg-white border-neutral-200 text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"
                      }`}
                  >
                    {loc === "Zambia Operations" ? "Zambia" : loc === "India HQ" ? "India" : loc}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Jobs List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 min-h-[300px]">
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
                  className="group relative bg-white border border-neutral-200/50 hover:border-neutral-900/60 p-4 sm:p-5 rounded-xl transition-all duration-300 cursor-default shadow-sm hover:shadow-md flex flex-col justify-between"
                >
                  <div>
                    {/* Top Row: Department & Badges */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <span className="text-[9px] font-bold tracking-widest text-neutral-400 uppercase">
                        {job.department}
                      </span>
                      <div className="flex flex-wrap gap-1 items-center justify-end">
                        {job.urgent && (
                          <span className="px-1.5 py-0.5 text-[8px] font-extrabold tracking-wider bg-red-50 text-red-600 border border-red-100 uppercase rounded">
                            Urgent
                          </span>
                        )}
                        {job.safetyCertified && (
                          <span className="inline-flex items-center gap-0.5 px-1.5 py-0.5 text-[8px] font-bold tracking-wide border border-emerald-100 text-emerald-600 uppercase rounded bg-emerald-50/50">
                            <ShieldCheck size={9} className="text-emerald-500" />
                            ISO
                          </span>
                        )}
                        {job.remoteAvailable && (
                          <span className="px-1.5 py-0.5 text-[8px] font-bold tracking-wide border border-blue-100 text-blue-600 uppercase rounded bg-blue-50/50">
                            Remote
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-[15px] font-bold text-neutral-900 tracking-tight leading-snug group-hover:text-neutral-950 transition-colors mb-3">
                      {job.title}
                    </h3>

                    {/* Inline Metadata Row */}
                    <div className="flex flex-wrap items-center gap-y-1.5 gap-x-2.5 text-[11px] text-neutral-500 mb-4">
                      <span className="flex items-center gap-1 shrink-0">
                        <MapPin size={11} className="text-neutral-400" />
                        {job.location === "Zambia Operations" ? "Zambia" : job.location === "India HQ" ? "India" : job.location}
                      </span>
                      <span className="text-neutral-300 select-none font-light">•</span>
                      <span className="flex items-center gap-1 shrink-0">
                        <Clock size={11} className="text-neutral-400" />
                        {job.exp}
                      </span>
                      <span className="text-neutral-300 select-none font-light">•</span>
                      <span className="flex items-center gap-1 shrink-0">
                        <Coins size={11} className="text-neutral-400" />
                        {job.salary}
                      </span>
                    </div>
                  </div>

                  {/* Footer Divider & Apply button */}
                  <div className="flex items-center justify-between pt-3 border-t border-neutral-100 mt-1">
                    <span className="text-[9px] font-semibold tracking-wider text-neutral-400 uppercase">
                      Ref: {job.id}
                    </span>
                    <button
                      onClick={() => {
                        window.location.href = `/contact?job=${encodeURIComponent(job.title)}`;
                      }}
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-neutral-900 group-hover:text-neutral-950 transition-colors"
                    >
                      Apply Now
                      <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200 text-neutral-400 group-hover:text-neutral-950" />
                    </button>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="col-span-2 flex flex-col items-center justify-center py-12 text-center border border-dashed border-neutral-200 rounded-xl bg-white"
              >
                <span className="text-2xl mb-3">🔍</span>
                <h3 className="text-xs font-bold text-neutral-800 uppercase tracking-wider">
                  No positions match filters
                </h3>
                <p className="text-[11px] text-neutral-400 mt-1 max-w-xs leading-relaxed">
                  Try clearing some criteria or submit an open application using our CV submission form below.
                </p>
                <button
                  onClick={() => {
                    setSelectedDept("All");
                    setSelectedLoc("All");
                  }}
                  className="mt-3 px-3 py-1.5 text-[9px] font-bold tracking-widest text-neutral-900 border border-neutral-900 uppercase hover:bg-skt-navy hover:text-white transition-all rounded"
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
