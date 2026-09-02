"use client";

import { type JSX, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { useIsMobile } from "@/hooks/useIsMobile";

const VIDEO_SRC = "https://res.cloudinary.com/dxhwcq1eg/video/upload/skt/csr-activities-optimized.mp4";
const POSTER_SRC = "https://res.cloudinary.com/dxhwcq1eg/video/upload/f_auto,q_auto,so_0/skt/csr-activities-optimized.jpg";



// ══════════════════════════════════════════════════════════════
// CARD 01 — Community Development (dot constellation)
// ══════════════════════════════════════════════════════════════
function CommunityCard(): JSX.Element {
  return (
    <article
      className="relative bg-white border border-neutral-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden flex flex-col"
    >
      {/* Background dot grid — faint texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)", backgroundSize: "18px 18px" }}
      />

      {/* Constellation visual */}
      <div className="mb-4 sm:mb-5 h-10 sm:h-14 relative shrink-0 scale-75 origin-left">
        <svg viewBox="0 0 80 56" className="h-full w-auto" fill="none">
          {/* Connection lines — copper tinted */}
          <line x1="12" y1="28" x2="34" y2="14" stroke="#c47b48" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="34" y1="14" x2="56" y2="22" stroke="#c47b48" strokeWidth="1" strokeOpacity="0.3" />
          <line x1="56" y1="22" x2="68" y2="42" stroke="#c47b48" strokeWidth="1" strokeOpacity="0.2" />
          <line x1="34" y1="14" x2="30" y2="40" stroke="#c47b48" strokeWidth="1" strokeOpacity="0.35" />
          <line x1="12" y1="28" x2="30" y2="40" stroke="#c47b48" strokeWidth="1" strokeOpacity="0.3" />
          {/* Dots — copper accent */}
          <circle cx="12" cy="28" r="3.5" fill="#c47b48" fillOpacity="0.55" />
          <circle cx="34" cy="14" r="5" fill="#c47b48" />
          <circle cx="56" cy="22" r="3" fill="#c47b48" fillOpacity="0.65" />
          <circle cx="68" cy="42" r="2.5" fill="#c47b48" fillOpacity="0.3" />
          <circle cx="30" cy="40" r="4" fill="#c47b48" fillOpacity="0.75" />
          <circle cx="18" cy="46" r="2" fill="#c47b48" fillOpacity="0.25" />
          <circle cx="46" cy="46" r="2" fill="#c47b48" fillOpacity="0.25" />
        </svg>
      </div>

      {/* Index */}
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
        01 / Community
      </p>

      {/* Title */}
      <h3 className="mt-1 text-[15px] font-semibold text-neutral-900 tracking-tight leading-snug">
        Community Development
      </h3>

      {/* Body */}
      <p className="mt-2 text-[12px] text-neutral-500 leading-relaxed">
        Investing in infrastructure and services to uplift local regions.
      </p>

      {/* Tag */}
      <div className="mt-5 inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-[#c47b48]" />
        <span className="text-[10px] font-medium text-neutral-500">Local Regions</span>
      </div>
    </article>
  );
}

// ══════════════════════════════════════════════════════════════
// CARD 02 — Skills & Training (ascending bars)
// ══════════════════════════════════════════════════════════════
function SkillsCard(): JSX.Element {
  const barHeights = [20, 32, 44, 56];

  return (
    <article
      className="relative bg-white border border-neutral-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col"
    >
      {/* Ascending bars visual */}
      <div className="mb-4 sm:mb-5 h-10 sm:h-14 flex items-end gap-1 sm:gap-1.5 shrink-0 scale-75 origin-left">
        {barHeights.map((h, i) => (
          <div
            key={i}
            className="rounded-sm"
            style={{
              height: `${h}px`,
              width: "12px",
              background: `rgba(96, 165, 250, ${0.3 + i * 0.2})`,
            }}
          />
        ))}
        {/* Ghost fourth bar (max height reference) */}
        <div className="rounded-sm border border-dashed border-neutral-200 ml-0.5" style={{ height: "56px", width: "12px" }} />
      </div>

      {/* Index */}
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
        02 / Learning
      </p>

      {/* Title */}
      <h3 className="mt-1 text-[15px] font-semibold text-neutral-900 tracking-tight leading-snug">
        Skills &amp; Training
      </h3>

      {/* Body */}
      <p className="mt-2 text-[12px] text-neutral-500 leading-relaxed">
        Equipping local talent with advanced mechanised mining capabilities.
      </p>

      {/* Tag */}
      <div className="mt-5 inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
        <span className="text-[10px] font-medium text-neutral-500">Capability Growth</span>
      </div>
    </article>
  );
}

// ══════════════════════════════════════════════════════════════
// CARD 03 — Workforce Empowerment (staircase + upward arrow)
// ══════════════════════════════════════════════════════════════
function WorkforceCard(): JSX.Element {
  return (
    <article
      className="relative bg-white border border-neutral-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 flex flex-col"
    >
      {/* Staircase SVG */}
      <div className="mb-4 sm:mb-5 h-10 sm:h-14 shrink-0 scale-75 origin-left">
        <svg viewBox="0 0 80 56" className="h-full w-auto" fill="none">
          {/* Stair steps — emerald tints */}
          <rect x="2" y="44" width="18" height="10" rx="2" fill="#6ee7b7" fillOpacity="0.25" stroke="#6ee7b7" strokeOpacity="0.4" strokeWidth="1" />
          <rect x="22" y="32" width="18" height="22" rx="2" fill="#34d399" fillOpacity="0.35" stroke="#34d399" strokeOpacity="0.5" strokeWidth="1" />
          <rect x="42" y="18" width="18" height="36" rx="2" fill="#10b981" fillOpacity="0.45" stroke="#10b981" strokeOpacity="0.6" strokeWidth="1" />
          {/* Arrow — dark */}
          <g>
            <line x1="66" y1="48" x2="66" y2="6" stroke="#171717" strokeWidth="2" strokeLinecap="round" />
            <polyline points="60,12 66,5 72,12" stroke="#171717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </svg>
      </div>

      {/* Index */}
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
        03 / Career
      </p>

      {/* Title */}
      <h3 className="mt-1 text-[15px] font-semibold text-neutral-900 tracking-tight leading-snug">
        Workforce Empowerment
      </h3>

      {/* Body */}
      <p className="mt-2 text-[12px] text-neutral-500 leading-relaxed">
        Creating high-value career pathways and continuous professional growth.
      </p>

      {/* Tag */}
      <div className="mt-5 inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        <span className="text-[10px] font-medium text-neutral-500">Career Pathways</span>
      </div>
    </article>
  );
}

// ══════════════════════════════════════════════════════════════
// CARD 04 — Long-Term Impact (concentric rings + year)
// ══════════════════════════════════════════════════════════════
function LegacyCard(): JSX.Element {
  return (
    <article
      className="relative bg-white border border-neutral-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 overflow-hidden flex flex-col"
    >
      {/* Concentric rings + year */}
      <div className="mb-4 sm:mb-5 h-10 sm:h-14 relative flex items-center shrink-0 scale-75 origin-left">
        <div className="relative flex-shrink-0 origin-left">
          {/* Outer ring — faint neutral */}
          <div className="h-14 w-14 rounded-full border-2 border-neutral-200" />
          {/* Mid ring — dark accent */}
          <div className="absolute inset-[8px] rounded-full border-2 border-neutral-700" />
          {/* Inner dot — solid black */}
          <div className="absolute inset-[18px] rounded-full bg-neutral-900" />
        </div>
        {/* Year stamp */}
        <div className="ml-1 sm:ml-4">
          <span className="text-[18px] sm:text-[26px] font-semibold text-neutral-900 leading-none tracking-tight tabular-nums">
            2050
            <span className="text-neutral-400 text-[14px] sm:text-[18px]">+</span>
          </span>
          <p className="text-[8px] sm:text-[9px] uppercase tracking-[0.18em] text-neutral-400 font-medium mt-0.5">Horizon</p>
        </div>
      </div>

      {/* Index */}
      <p className="text-[10px] font-semibold tracking-[0.2em] uppercase text-neutral-400">
        04 / Legacy
      </p>

      {/* Title */}
      <h3 className="mt-1 text-[15px] font-semibold text-neutral-900 tracking-tight leading-snug">
        Long-Term Impact
      </h3>

      {/* Body */}
      <p className="mt-2 text-[12px] text-neutral-500 leading-relaxed">
        Building sustainable economic ecosystems that outlast a single mine.
      </p>

      {/* Tag */}
      <div className="mt-5 inline-flex items-center gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-neutral-900" />
        <span className="text-[10px] font-medium text-neutral-500">Beyond One Mine</span>
      </div>
    </article>
  );
}

// ══════════════════════════════════════════════════════════════
// MAIN SECTION
// ══════════════════════════════════════════════════════════════
export function CommunityImpactSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const isMobile = useIsMobile();

  // Raw scroll: 0 = section top at viewport bottom, 1 = section bottom at viewport top
  // Using "start center" → "end center" so progress=0.5 = section filling the screen
  const { scrollYProgress: rawProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Raw (unsprung) for video — frame-perfect sync with scroll position
  // ⚡ Always call useSpring (Rules of Hooks), but use raw value on mobile
  const _springProgress = useSpring(rawProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.0005,
  });
  const scrollYProgress = isMobile ? rawProgress : _springProgress;

  // ─── TEXT ELEMENTS ───────────────────────────────────────────
  const badgeOpacity    = useTransform(scrollYProgress, [0.04, 0.14], [0, 1]);
  const badgeY          = useTransform(scrollYProgress, [0.04, 0.14], [18, 0]);
  const headlineOpacity = useTransform(scrollYProgress, [0.10, 0.22], [0, 1]);
  const headlineY       = useTransform(scrollYProgress, [0.10, 0.22], [24, 0]);
  const bodyOpacity     = useTransform(scrollYProgress, [0.16, 0.28], [0, 1]);
  const bodyY           = useTransform(scrollYProgress, [0.16, 0.28], [20, 0]);
  const metricOpacity   = useTransform(scrollYProgress, [0.22, 0.34], [0, 1]);
  const metricY         = useTransform(scrollYProgress, [0.22, 0.34], [20, 0]);

  // ─── VIDEO: driven by rawProgress (no spring lag) ────────────
  // Section enters at rawProgress=0, is centered at ~0.35, exits at 1.0
  // Clip opens from 0.05 → 0.32 (tight window = snappy reveal as section scrolls in)
  const clipPathY    = useTransform(rawProgress,  [0.05, 0.32], ["inset(50% 0 50% 0)", "inset(0% 0 0% 0)"]);
  const videoOpacity = useTransform(rawProgress,  [0.03, 0.12, 0.82, 0.96], [0, 1, 1, 0]);
  const playScale    = useTransform(rawProgress,  [0.20, 0.32], [0.85, 1]);
  const playOpacity  = useTransform(rawProgress,  [0.20, 0.32], [0, 1]);



  return (
    <section
      ref={sectionRef}
      id="csr"
      className="relative pt-20 pb-8 md:pt-32 md:pb-10 lg:pt-40 lg:pb-12 overflow-hidden bg-white"
    >
      {/* ─── BADGE ──────────────────────────────────────────── */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-8 md:mb-14">
        <motion.div
          style={isMobile ? {} : { opacity: badgeOpacity, y: badgeY }}
          {...(isMobile ? { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } } : {})}
        >
          <Badge variant="dot">Corporate Social Responsibility</Badge>
        </motion.div>
      </div>

      {/* ─── MAIN SPLIT ─────────────────────────────────────── */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 lg:gap-20 items-stretch">

          {/* ═══ LEFT: TEXT ════════════════════════════════════ */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="max-w-lg lg:max-w-md xl:max-w-lg">

              <motion.h2
                style={isMobile ? {} : { opacity: headlineOpacity, y: headlineY }}
                {...(isMobile ? { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.1 } } : {})}
                className="text-[34px] md:text-5xl lg:text-[56px] text-neutral-900 tracking-[-0.02em] leading-[1.08] font-serif font-normal"
              >
                Building More{" "}
                <span className="text-neutral-400 block mt-1 md:mt-2">
                  Than Mines.
                </span>
              </motion.h2>

              <motion.p
                style={isMobile ? {} : { opacity: bodyOpacity, y: bodyY }}
                {...(isMobile ? { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.2 } } : {})}
                className="mt-7 md:mt-8 text-[15px] md:text-[17px] text-neutral-500 leading-relaxed font-light"
              >
                Our commitment extends beyond operations. Through community
                investment, workforce development, skills transfer and long-term
                social initiatives, we aim to create lasting value for the
                communities we serve.
              </motion.p>

              {/* Metric */}
              <motion.div
                style={isMobile ? {} : { opacity: metricOpacity, y: metricY }}
                {...(isMobile ? { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.3 } } : {})}
                className="mt-9 md:mt-10"
              >
                <div className="inline-flex items-center gap-3 rounded-xl bg-neutral-900 px-4 py-3 shadow-lg shadow-neutral-900/15">
                  <span className="text-[28px] font-bold leading-none text-white tabular-nums tracking-tight">
                    20<span className="text-[18px] text-white/50 font-semibold">%</span>
                  </span>
                  <div className="h-7 w-px bg-white/15 flex-shrink-0" />
                  <p className="text-[12px] leading-snug text-white/70">
                    <span className="block font-semibold text-white">Of Net Profits</span>
                    Committed to CSR Initiatives
                  </p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* ═══ RIGHT: VIDEO ══════════════════════════════════ */}
          <div className="relative order-1 lg:order-2 flex items-center min-h-[340px] md:min-h-[420px] lg:min-h-full">
            <motion.div
              style={{ 
                clipPath: clipPathY, 
                opacity: videoOpacity,
                willChange: "clip-path, opacity",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden"
              }}
              className="absolute inset-x-0 top-0 bottom-0 w-full h-full rounded-2xl md:rounded-3xl overflow-hidden transform-gpu"
            >
              <video crossOrigin="anonymous" autoPlay muted loop playsInline preload="none" poster={POSTER_SRC} src={VIDEO_SRC} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/[0.06] to-transparent pointer-events-none" />
              <Link href="/sustainability/community-impact" passHref legacyBehavior>
                <motion.a
                  style={{ scale: playScale, opacity: playOpacity }}
                  aria-label="Learn more about SKT community impact"
                  className="absolute bottom-5 left-5 md:bottom-7 md:left-7 flex items-center gap-2.5 bg-white/95 backdrop-blur-md rounded-full pl-4 pr-1 py-1 shadow-xl cursor-pointer group select-none"
                >
                  <span className="text-xs font-semibold tracking-wider uppercase text-neutral-800">Learn More</span>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-neutral-900 text-white transition-transform group-hover:scale-105">
                    <ArrowRight size={14} strokeWidth={2} />
                  </span>
                </motion.a>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── EDITORIAL PILLAR CARDS ─────────────────────────── */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mt-16 md:mt-24 lg:mt-32">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-6">
          {/* CARD 01 — Community (dot constellation) */}
          <CommunityCard />
          {/* CARD 02 — Skills (ascending bars) */}
          <SkillsCard />
          {/* CARD 03 — Workforce (staircase + arrow) */}
          <WorkforceCard />
          {/* CARD 04 — Legacy (concentric rings + 2050+) */}
          <LegacyCard />
        </div>
      </div>


    </section>
  );
}
