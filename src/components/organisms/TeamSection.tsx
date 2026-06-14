"use client";

import { type JSX, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { Badge } from "@/components/atoms/Badge";
import { TEAM_MEMBERS } from "@/lib/constants";
import { containerVariants, itemVariants } from "@/lib/animations";

function TeamMemberCard({ member }: { member: typeof TEAM_MEMBERS[0] }) {
  const [isOpen, setIsOpen] = useState(false);

  // Mapping of exact filenames in public folder for premium deterministic resolution
  const images: Record<string, string> = {
    "sahil-talreja": "/Sahil Talreja.webp",
    "anand-kolappa-pillai": "/Anand Kolappa Pillai.webp",
    "sanjay-kumar-sharma": "/Sanjay Kumar sharma.webp",
    "srinivasulu-jonnalagadda": "/Srinivasulu Jonnalagadda.webp",
    "kiran-kumar-reddy": "/Kiran Kumar Reddy.webp",
    "suresh-babu-deshamalla": "/Suresh Babu Deshamalla.webp",
    "kuldeep-kulshrestha": "/Kuldeep Kulshrestha.webp",
    "mulenga-mutati": "/Mulenga Mutati.webp",
    "safeli-maxim-chipulu": "/Safeli maxim chipulu.webp",
    "toms-joseph": "/Toms Joseph.webp",
  };

  const imgSrc = images[member.id] || "/unknown-leader.webp";

  // Custom premium editorial overlay actions
  const overlayDetails: Record<string, { title: string; action: string }> = {
    "sahil-talreja": { title: "Focusing on Vision & Trust", action: "Board Governance" },
    "anand-kolappa-pillai": { title: "Focusing on Global Growth", action: "Strategic Scale" },
    "sanjay-kumar-sharma": { title: "Focusing on Enterprise Value", action: "Strategic Direction" },
    "srinivasulu-jonnalagadda": { title: "Focusing on Stewardship", action: "Financial Capital" },
    "kiran-kumar-reddy": { title: "Focusing on Site Precision", action: "SOB Operations" },
    "suresh-babu-deshamalla": { title: "Focusing on Fleet Engineering", action: "Asset Readiness" },
    "kuldeep-kulshrestha": { title: "Focusing on Commercial Value", action: "Commercial Strategy" },
    "mulenga-mutati": { title: "Focusing on Team Growth", action: "Human Capital" },
    "safeli-maxim-chipulu": { title: "Focusing on Mufulira Scale", action: "Site Operations" },
    "toms-joseph": { title: "Focusing on Site Precision", action: "Mufulira Operations" },
  };

  const details = overlayDetails[member.id] || {
    title: "Focusing on Excellence",
    action: "Operations"
  };

  const handleMouseEnter = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (typeof window !== "undefined" && window.matchMedia("(hover: hover)").matches) {
      setIsOpen(false);
    }
  };

  const handleCardClick = () => {
    if (typeof window !== "undefined" && !window.matchMedia("(hover: hover)").matches) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleToggleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsOpen((prev) => !prev);
  };

  const handleArrowClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <motion.div
      variants={itemVariants}
      className="group flex flex-col cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className="flex flex-col h-full w-full">
        {/* Portrait Area */}
        <div className="relative aspect-[0.95/1.1] overflow-hidden rounded-xl bg-neutral-50 mb-5 border border-neutral-100">
          <ImageWithSkeleton
            src={imgSrc}
            alt={member.name}
            fill
            className={`object-cover transition-transform duration-700 ease-out ${
              isOpen ? "scale-[1.03]" : "scale-100"
            } ${
              ["sahil-talreja", "anand-kolappa-pillai"].includes(member.id) 
                ? "mix-blend-multiply" 
                : ""
            }`}
            sizes="(max-w-768px) 100vw, 25vw"
            skeletonClassName="rounded-xl"
          />

          {/* ── HOVER OVERLAY: Slides up from the bottom (Reference Match) ── */}
          <div className={`absolute inset-0 bg-skt-navy/95 backdrop-blur-sm flex flex-col justify-between p-3 sm:p-4 md:p-6 text-white transition-transform duration-500 ease-out z-10 ${
            isOpen ? "translate-y-0" : "translate-y-full"
          }`}>
            
            {/* Top: Header & Bio */}
            <div className="space-y-1.5 sm:space-y-3">
              <h4 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">
                {details.title}
              </h4>
              <p className="text-[10px] sm:text-xs text-white/80 leading-relaxed font-medium">
                {member.bio}
              </p>
            </div>

            {/* Bottom: Interactive Gray Action Bar */}
            <div className="flex items-center justify-between mt-auto pt-2 sm:pt-4">
              <Link 
                href={`/about/leaders?id=${member.id}`} 
                onClick={handleArrowClick}
                className="flex items-center gap-2 sm:gap-3 group/btn"
              >
                {/* Gray square button with arrow */}
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-neutral-200 text-neutral-900 flex items-center justify-center rounded-[6px] shadow-sm select-none group-hover/btn:bg-neutral-300 transition-colors">
                  <span className="text-xs sm:text-base font-bold">→</span>
                </div>
                <span className="text-[9px] sm:text-xs font-bold tracking-tight text-white group-hover/btn:underline">
                  {details.action}
                </span>
              </Link>
              
              {/* Spacer matching the absolutely positioned close/toggle button */}
              <div className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>

          </div>

          {/* Absolute floating interactive plus/minus button (smooth transition) */}
          <button
            type="button"
            onClick={handleToggleClick}
            className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 md:bottom-6 md:right-6 w-6 h-6 sm:w-8 sm:h-8 bg-neutral-200 text-neutral-900 flex items-center justify-center rounded-[6px] shadow-sm select-none hover:bg-neutral-300 transition-colors focus:outline-none z-20"
            aria-label={isOpen ? "Close details" : "Open details"}
          >
            {/* Horizontal bar */}
            <span className="absolute w-2.5 sm:w-3.5 h-[2px] bg-neutral-900 rounded-full" />
            {/* Vertical bar */}
            <span className={`absolute w-[2px] h-2.5 sm:h-3.5 bg-neutral-900 rounded-full transition-all duration-300 ${isOpen ? "rotate-90 opacity-0 scale-0" : "rotate-0 opacity-100 scale-100"}`} />
          </button>
        </div>

        {/* Info Area */}
        <div className="flex flex-col px-1">
          <p className="text-[10px] font-semibold tracking-[0.15em] text-neutral-500 uppercase mb-1.5 leading-relaxed">
            {member.role}
          </p>
          <h3 className="text-base font-semibold text-neutral-900 tracking-tight leading-none">
            {member.name}
          </h3>
        </div>
      </div>
    </motion.div>
  );
}

export function TeamSection(): JSX.Element {
  return (
    <section
      id="team"
      className="py-16 md:py-24 lg:py-32 bg-bg-tint"
      aria-labelledby="team-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header: Refined Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.8fr] gap-12 items-end mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <Badge variant="dot">Our Leadership</Badge>
            </motion.div>
            <motion.h2
              id="team-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl md:text-5xl font-semibold text-neutral-900 tracking-tight leading-[1.1]"
            >
              Leadership Behind <br />
              <span className="text-neutral-300">the Vision</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <p className="text-[15px] md:text-base text-neutral-600 font-light leading-relaxed max-w-xl">
              Our growth is supported by experienced leaders across operations, engineering, workforce development, finance, and strategic planning, driving long-term capability within Zambia&apos;s mining ecosystem.
            </p>
          </motion.div>
        </div>

        {/* Team Grid: High-Impact Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-5%" }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8"
        >
          {TEAM_MEMBERS.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
