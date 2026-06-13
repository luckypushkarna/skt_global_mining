"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { STATS } from "@/lib/constants";

// ─── Animated Number Counter ─────────────────────────────────────────────────

function CountUp({
  target,
  duration = 1.8,
  started,
}: {
  target: number;
  duration?: number;
  started: boolean;
}) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!started || !spanRef.current) return;
    const node = spanRef.current;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        node.textContent = Math.round(v).toLocaleString();
      },
    });
    // ⚡ Optimized: Cleanup animation on unmount
    return () => controls.stop();
  }, [started, target, duration]);

  return <span ref={spanRef}>0</span>;
}

// ─── Typewriter for text values (e.g. 24/7) ──────────────────────────────────

function Typewriter({ text, started }: { text: string; started: boolean }) {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!started || !spanRef.current) return;
    const node = spanRef.current;
    node.innerHTML = "";
    let i = 0;
    const chars = text.split("");
    const interval = setInterval(() => {
      const currentText = chars.slice(0, i + 1).join("");
      const cursor = currentText.length < text.length ? '<span class="animate-pulse opacity-50">|</span>' : '';
      node.innerHTML = `${currentText}${cursor}`;
      i++;
      if (i >= chars.length) clearInterval(interval);
    }, 90);
    // ⚡ Optimized: Cleanup interval
    return () => clearInterval(interval);
  }, [started, text]);

  return <span ref={spanRef} />;
}

// ─── Single stat card ─────────────────────────────────────────────────────────

function StatCard({
  stat,
  index,
  sectionStarted,
}: {
  stat: (typeof STATS)[number];
  index: number;
  sectionStarted: boolean;
}) {
  const isNumeric = /^\d+$/.test(stat.value);
  const numericValue = isNumeric ? parseInt(stat.value, 10) : 0;

  const [started, setStarted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!sectionStarted) return;
    const t = setTimeout(() => setStarted(true), index * 100);
    return () => clearTimeout(t);
  }, [sectionStarted, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      onClick={() => {
        if (typeof window !== "undefined" && window.innerWidth < 640) {
          setIsOpen(!isOpen);
        }
      }}
      // ⚡ Optimized: Replaced transition-all with transition-colors to prevent layout/GPU thrashing
      className="relative flex flex-col justify-between h-[150px] sm:h-[230px] p-4 sm:p-8 overflow-hidden transition-colors duration-300 cursor-pointer bg-bg-pure hover:bg-bg-tint group sm:cursor-default"
    >
      {/* Top Accent Hover Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-rose-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div>
        {/* Stat Value Container */}
        <div className="flex items-baseline flex-wrap gap-0.5 sm:gap-1 mb-3 sm:mb-4 select-none">
          {stat.prefix && (
            <span className="text-lg font-semibold leading-none transition-colors duration-300 sm:text-2xl text-neutral-400 group-hover:text-rose-600">
              {stat.prefix}
            </span>
          )}

          <span className="relative inline-block text-2xl leading-none origin-left transition-transform duration-300 text-stat sm:text-4xl md:text-5xl tracking-tight group-hover:scale-[1.02] stats-number-container">
            {/* Stable Layout Container */}
            <span className="opacity-0 pointer-events-none select-none" aria-hidden="true">
              {isNumeric ? numericValue.toLocaleString() : stat.value}
            </span>
            {/* Active animated value */}
            <span className="absolute inset-0 pointer-events-none">
              {isNumeric ? (
                <CountUp target={numericValue} started={started} />
              ) : (
                <Typewriter text={stat.value} started={started} />
              )}
            </span>
          </span>

          {stat.suffix && (
            <span className="text-lg font-semibold leading-none transition-colors duration-300 sm:text-2xl text-neutral-400 group-hover:text-rose-600">
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Title Label */}
        <h3 className="text-left mb-1.5 sm:mb-2 text-data-label">
          {stat.label}
        </h3>
      </div>

      {/* Description */}
      <p className="hidden sm:block mt-1 max-w-[260px] text-body-sm text-neutral-600 transition-colors duration-300 group-hover:text-neutral-700">
        {stat.description}
      </p>

      {/* ── HOVER/CLICK BLUE OVERLAY (visible on mobile only) ── */}
      {/* 📱 Mobile fix: Removed backdrop-blur-sm as it causes massive GPU lag on mobile overlays */}
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-between p-4 text-white transition-transform duration-500 ease-out sm:hidden sm:p-8 bg-skt-navy/95 ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="text-left space-y-1.5 sm:space-y-3">
          <h4 className="text-xs font-bold leading-snug tracking-tight text-white sm:text-sm md:text-lg lg:text-xl">
            Focusing on {stat.label}
          </h4>
          <p className="text-[10px] sm:text-xs text-white/80 leading-relaxed font-medium">
            {stat.description}
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 mt-auto sm:pt-4">
          <span className="text-[9px] sm:text-xs font-bold tracking-tight text-white/60">
            Tap to close
          </span>
          <div className="w-6 h-6 invisible sm:w-8 sm:h-8" />
        </div>
      </div>

      {/* Morphing Toggle Button */}
      <div className="absolute z-20 flex items-center justify-center w-6 h-6 rounded-[6px] shadow-sm select-none bottom-4 right-4 sm:bottom-8 sm:right-8 sm:w-8 sm:h-8 bg-neutral-200 text-neutral-900 sm:hidden">
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="relative flex items-center justify-center w-3 h-3 sm:w-4 sm:h-4"
        >
          <span className="absolute w-full h-[2px] rounded-full bg-neutral-900" />
          <motion.span
            animate={{ scaleY: isOpen ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            className="absolute w-[2px] h-full rounded-full bg-neutral-900"
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function OperationalScaleSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="py-16 overflow-hidden md:py-24 lg:py-32 bg-bg-soft"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">

        {/* ── Header ── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 mb-6 text-eyebrow">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-neutral-400" />
              OPERATIONAL SCALE
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <motion.h2
              id="stats-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-headline"
            >
              Scale That
              <br />
              <span className="text-neutral-300">Speaks Volumes</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="self-end max-w-lg text-body-lg text-neutral-600"
            >
              Built through strategic investment, operational discipline and long-term commitment to Zambia's mining future.
            </motion.p>
          </div>
        </div>

        {/* ── Stats Grid ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 gap-[1px] overflow-hidden border rounded-2xl shadow-sm select-none sm:grid-cols-3 bg-neutral-200/50 border-neutral-200/50"
        >
          {STATS.map((stat, index) => (
            <StatCard
              key={stat.label}
              stat={stat}
              index={index}
              sectionStarted={statsInView}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
