"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";
import { STATS } from "@/lib/constants";
import { MagicText } from "@/components/ui/magic-text";

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

  const quoteBlockRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: quoteBlockRef,
    offset: ["start 90%", "end 45%"],
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ⚡ CRITICAL FIX: Wrap scrollYProgress in a Spring to completely absorb touch-scroll stuttering on mobile
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const imageX = useTransform(smoothProgress, [0, 0.65], [isMobile ? "-40px" : "-120px", "0px"]);
  const imageOpacity = useTransform(smoothProgress, [0, 0.5], [0, 1]);

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
              Behind every metric is our dedicated team of professionals, an
              unwavering commitment to safe operations, and strategic alignment
              with IRH to accelerate development and increase production at
              Mopani Copper Mines.
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

        {/* ── Chairman Editorial Quote ── */}
        <motion.div
          ref={quoteBlockRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-12 border-t lg:mt-28 lg:pt-20 border-neutral-100"
        >
          <div className="flex items-center gap-4 mb-10 lg:mb-16">
            <div className="w-10 h-px bg-neutral-300" />
            <span className="text-eyebrow">
              From the Chairman
            </span>
          </div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
            <motion.div
              style={{ x: imageX, opacity: imageOpacity, willChange: "transform, opacity" }}
              className="w-full lg:col-span-5"
            >
              <div className="relative w-full mx-auto max-w-[440px] lg:mx-0">
                <div className="absolute -bottom-4 -right-4 w-full h-full border rounded-sm -z-10 border-neutral-200" />
                <div className="relative w-full overflow-hidden rounded-sm aspect-[4/5] bg-neutral-100 max-h-[400px] lg:max-h-none">
                  <Image
                    alt="Raj Talreja - Chairman & Managing Director"
                    src="/Raj Sir Photo.jpg"
                    fill
                    quality={100}
                    className="object-cover object-top"
                    sizes="(max-width:1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              {/* ⚡ Optimized: Converted expensive inline styles to compiled Tailwind classes */}
              <div
                aria-hidden="true"
                className="select-none mb-4 text-[#d4d4d4] font-sans text-[clamp(40px,8vw,96px)] leading-[0.85]"
              >
                &ldquo;
              </div>

              <blockquote>
                <MagicText
                  text="We don't just extract minerals. We extract potential from the earth, and from our people."
                  className="flex flex-wrap p-0 m-0 leading-[1.35] font-sans text-[clamp(22px,3vw,38px)] font-light tracking-[-0.01em] max-w-full mb-8"
                  wordClassName="relative inline-block mr-[0.22em] font-light text-neutral-900"
                />

                <footer className="pt-7 border-t border-[#e5e5e5] max-w-full">
                  <div>
                    <cite className="block not-italic font-medium font-sans text-[17px] tracking-tight mb-1 text-neutral-900">
                      Raj Talreja
                    </cite>
                    <p className="text-eyebrow text-neutral-500">
                      Chairman · SKT Global Mining &amp; Services
                    </p>
                  </div>
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
