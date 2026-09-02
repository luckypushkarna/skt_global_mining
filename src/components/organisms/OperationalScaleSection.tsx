"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import { STATS } from "@/lib/constants";

// ═══════════════════════════════════════════════════════════
//   CONTEXT-AWARE SVG PATTERNS
//   Each label gets a unique pattern that hints at its meaning
// ═══════════════════════════════════════════════════════════

function StatPattern({ label }: { label: string }): JSX.Element {
  const key = label.toLowerCase();

  // PATTERN: People — scattered dots representing community
  if (
    key.includes("workforce") ||
    key.includes("employee") ||
    key.includes("people") ||
    key.includes("staff") ||
    key.includes("team")
  ) {
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
            className="fill-rose-500"
          />
        ))}
      </svg>
    );
  }

  // PATTERN: Fleet — 4×3 grid of squares representing machinery
  if (
    key.includes("machine") ||
    key.includes("equipment") ||
    key.includes("fleet") ||
    key.includes("vehicle")
  ) {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        {Array.from({ length: 3 }).map((_, row) =>
          Array.from({ length: 4 }).map((_, col) => (
            <rect
              key={`${row}-${col}`}
              x={6 + col * 13}
              y={10 + row * 15}
              width="7"
              height="7"
              rx="1"
              className="fill-rose-500"
            />
          ))
        )}
      </svg>
    );
  }

  // PATTERN: Growth — ascending bars (investment chart)
  if (
    key.includes("invest") ||
    key.includes("capital") ||
    key.includes("budget") ||
    key.includes("growth") ||
    key.includes("revenue")
  ) {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        {[
          { x: 8, h: 16 },
          { x: 20, h: 26 },
          { x: 32, h: 36 },
          { x: 44, h: 48 },
        ].map((b, i) => (
          <rect
            key={i}
            x={b.x}
            y={56 - b.h}
            width="7"
            height={b.h}
            rx="1"
            className="fill-rose-500"
          />
        ))}
      </svg>
    );
  }

  // PATTERN: Target — bullseye with crosshairs (achievement)
  if (
    key.includes("target") ||
    key.includes("achieved") ||
    key.includes("goal") ||
    key.includes("milestone")
  ) {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <circle cx="30" cy="30" r="22" strokeWidth="1" className="stroke-rose-500" />
        <circle cx="30" cy="30" r="14" strokeWidth="1" className="stroke-rose-500" />
        <circle cx="30" cy="30" r="6" strokeWidth="1" className="stroke-rose-500" />
        <circle cx="30" cy="30" r="2" className="fill-rose-500" />
        {/* Crosshairs */}
        <line x1="30" y1="4" x2="30" y2="14" strokeWidth="1" className="stroke-rose-400" />
        <line x1="30" y1="46" x2="30" y2="56" strokeWidth="1" className="stroke-rose-400" />
        <line x1="4" y1="30" x2="14" y2="30" strokeWidth="1" className="stroke-rose-400" />
        <line x1="46" y1="30" x2="56" y2="30" strokeWidth="1" className="stroke-rose-400" />
      </svg>
    );
  }

  // PATTERN: Time — clock with concentric rings + tick marks
  if (
    key.includes("execution") ||
    key.includes("hour") ||
    key.includes("24") ||
    key.includes("continuous") ||
    key.includes("ops")
  ) {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <circle cx="30" cy="30" r="22" strokeWidth="1" className="stroke-rose-400" />
        <circle cx="30" cy="30" r="15" strokeWidth="1" strokeDasharray="2 3" className="stroke-rose-400" />
        <circle cx="30" cy="30" r="2.5" className="fill-rose-500" />
        {/* Hour hand */}
        <line x1="30" y1="30" x2="30" y2="18" strokeWidth="1.5" strokeLinecap="round" className="stroke-rose-500" />
        {/* Minute hand */}
        <line x1="30" y1="30" x2="40" y2="24" strokeWidth="1" strokeLinecap="round" className="stroke-rose-500" />
        {/* 4 tick marks at cardinal positions */}
        {[0, 90, 180, 270].map((deg, i) => (
          <line
            key={i}
            x1="30" y1="6" x2="30" y2="10"
            strokeWidth="1.5"
            strokeLinecap="round"
            transform={`rotate(${deg} 30 30)`}
            className="stroke-rose-500"
          />
        ))}
      </svg>
    );
  }

  // PATTERN: Inventory — stacked horizontal layers (spare parts / strata)
  if (
    key.includes("spare") ||
    key.includes("part") ||
    key.includes("inventory") ||
    key.includes("stock") ||
    key.includes("warehouse")
  ) {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        {/* Stacked shelves with items */}
        {[
          { y: 8, w: 44 },
          { y: 18, w: 38 },
          { y: 28, w: 44 },
          { y: 38, w: 32 },
          { y: 48, w: 44 },
        ].map((s, i) => (
          <rect
            key={i}
            x={8}
            y={s.y}
            width={s.w}
            height="4"
            rx="1"
            className="fill-rose-500"
          />
        ))}
      </svg>
    );
  }

  // PATTERN: Network — connected nodes (projects / sites)
  if (
    key.includes("project") ||
    key.includes("contract") ||
    key.includes("site") ||
    key.includes("location")
  ) {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <line x1="15" y1="20" x2="30" y2="35" strokeWidth="1" className="stroke-rose-400" />
        <line x1="30" y1="35" x2="45" y2="20" strokeWidth="1" className="stroke-rose-400" />
        <line x1="30" y1="35" x2="30" y2="48" strokeWidth="1" className="stroke-rose-400" />
        <line x1="15" y1="20" x2="45" y2="20" strokeWidth="1" strokeDasharray="2 2" className="stroke-rose-400" />
        {[[15, 20], [30, 35], [45, 20], [30, 48]].map(([cx, cy], i) => (
          <circle
            key={i}
            cx={cx}
            cy={cy}
            r="3"
            className="fill-rose-500"
          />
        ))}
      </svg>
    );
  }

  // PATTERN: Timeline — horizontal line with milestone dots
  if (
    key.includes("year") ||
    key.includes("experience") ||
    key.includes("decade") ||
    key.includes("heritage")
  ) {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <line x1="6" y1="30" x2="54" y2="30" strokeWidth="1" strokeDasharray="3 2" className="stroke-rose-400" />
        {[12, 24, 36, 48].map((cx, i) => (
          <circle
            key={i}
            cx={cx}
            cy={30}
            r="3"
            className="fill-rose-500"
          />
        ))}
        <circle cx="48" cy="30" r="5" strokeWidth="1" className="stroke-rose-400 fill-none" />
      </svg>
    );
  }

  // PATTERN: Safety — shield outline + checkmark
  if (
    key.includes("safety") ||
    key.includes("compliance") ||
    key.includes("standard") ||
    key.includes("zero")
  ) {
    return (
      <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
        <path
          d="M30 8 L48 14 L48 32 Q48 44 30 52 Q12 44 12 32 L12 14 Z"
          strokeWidth="1.2"
          className="stroke-rose-500 fill-none"
        />
        <path
          d="M22 30 L28 36 L40 24"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="stroke-rose-500 fill-none"
        />
      </svg>
    );
  }

  // PATTERN: Default — minimal 5×5 dot grid
  return (
    <svg viewBox="0 0 60 60" className="w-full h-full" fill="none">
      {Array.from({ length: 5 }).map((_, row) =>
        Array.from({ length: 5 }).map((_, col) => (
          <circle
            key={`${row}-${col}`}
            cx={10 + col * 10}
            cy={10 + row * 10}
            r="1.2"
            className="fill-rose-400"
          />
        ))
      )}
    </svg>
  );
}

// ═══════════════════════════════════════════════════════════
//   ANIMATED COUNTERS
// ═══════════════════════════════════════════════════════════

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
    return () => controls.stop();
  }, [started, target, duration]);

  return <span ref={spanRef}>0</span>;
}

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
      const cursor =
        currentText.length < text.length
          ? '<span class="animate-pulse opacity-50">|</span>'
          : "";
      node.innerHTML = `${currentText}${cursor}`;
      i++;
      if (i >= chars.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [started, text]);

  return <span ref={spanRef} />;
}

// ═══════════════════════════════════════════════════════════
//   STAT CARD
// ═══════════════════════════════════════════════════════════

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
      transition={{
        duration: 0.6,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      onClick={() => {
        if (typeof window !== "undefined" && window.innerWidth < 640) {
          setIsOpen(!isOpen);
        }
      }}
      className="relative flex flex-col justify-between h-[150px] sm:h-[230px] p-4 sm:p-8 overflow-hidden bg-bg-pure cursor-pointer sm:cursor-default"
    >
      {/* ✨ CONTEXT SVG PATTERN — top right corner */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-8 h-8 sm:w-10 sm:h-10 opacity-90 pointer-events-none">
        <StatPattern label={stat.label} />
      </div>

      <div className="relative z-[1]">
        {/* Stat value */}
        <div className="flex items-baseline flex-wrap gap-0.5 sm:gap-1 mb-3 sm:mb-4 select-none">
          {stat.prefix && (
            <span className="text-lg font-semibold leading-none sm:text-2xl text-neutral-400">
              {stat.prefix}
            </span>
          )}

          <span className="relative inline-block text-2xl leading-none origin-left text-stat sm:text-4xl md:text-5xl tracking-tight stats-number-container">
            <span
              className="opacity-0 pointer-events-none select-none"
              aria-hidden="true"
            >
              {isNumeric ? numericValue.toLocaleString() : stat.value}
            </span>
            <span className="absolute inset-0 pointer-events-none">
              {isNumeric ? (
                <CountUp target={numericValue} started={started} />
              ) : (
                <Typewriter text={stat.value} started={started} />
              )}
            </span>
          </span>

          {stat.suffix && (
            <span className="text-lg font-semibold leading-none sm:text-2xl text-neutral-400">
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Label */}
        <h3 className="text-left mb-1.5 sm:mb-2 text-data-label">
          {stat.label}
        </h3>
      </div>

      {/* Description (desktop) */}
      <p className="hidden sm:block mt-1 max-w-[260px] text-body-sm text-neutral-600 relative z-[1]">
        {stat.description}
      </p>

      {/* Mobile overlay (Tap to expand) */}
      <div
        className={`absolute inset-0 z-10 flex flex-col justify-between p-4 text-white transition-transform duration-500 ease-out sm:hidden sm:p-8 bg-skt-navy/95 ${isOpen ? "translate-y-0" : "translate-y-full"
          }`}
      >
        <div className="text-left space-y-1.5 sm:space-y-3">
          <p className="text-xs font-bold leading-snug tracking-tight text-white sm:text-sm md:text-lg lg:text-xl">
            Focusing on {stat.label}
          </p>
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

      {/* Mobile toggle button */}
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

// ═══════════════════════════════════════════════════════════
//   SECTION
// ═══════════════════════════════════════════════════════════

export function OperationalScaleSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const statsInView = useInView(statsRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="py-16 overflow-hidden md:py-24 lg:py-32 bg-bg-soft"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
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
              className="text-headline font-serif font-normal"
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
              Built through strategic investment, operational discipline and
              long-term commitment to Zambia&apos;s mining future.
            </motion.p>
          </div>
        </div>

        {/* Stats grid */}
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