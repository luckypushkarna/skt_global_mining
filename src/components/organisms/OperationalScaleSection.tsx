"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
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
  const [display, setDisplay] = useState(0);
  const rafRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    if (!started) return;
    rafRef.current = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => rafRef.current?.stop();
  }, [started, target, duration]);

  return <>{display.toLocaleString()}</>;
}

// ─── Typewriter for text values (e.g. 24/7) ──────────────────────────────────

function Typewriter({ text, started }: { text: string; started: boolean }) {
  const [display, setDisplay] = useState("");

  useEffect(() => {
    if (!started) return;
    setDisplay("");
    let i = 0;
    const chars = text.split("");
    const interval = setInterval(() => {
      setDisplay(chars.slice(0, i + 1).join(""));
      i++;
      if (i >= chars.length) clearInterval(interval);
    }, 90);
    return () => clearInterval(interval);
  }, [started, text]);

  return (
    <>
      {display}
      {display.length < text.length && (
        <span className="animate-pulse opacity-50">|</span>
      )}
    </>
  );
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
      className="bg-white p-6 sm:p-8 hover:bg-neutral-50/50 transition-all duration-300 flex flex-col justify-between group cursor-default relative overflow-hidden"
    >
      {/* Top Accent Hover Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-rose-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      
      <div>
        {/* Stat Value Container */}
        <div className="flex items-baseline gap-1 mb-4 select-none">
          {stat.prefix && (
            <span className="text-xl sm:text-2xl font-bold text-neutral-400 group-hover:text-rose-600 transition-colors duration-300 leading-none">
              {stat.prefix}
            </span>
          )}
          
          <span className="text-4xl sm:text-5xl md:text-6xl font-black text-neutral-900 tracking-tight leading-none tabular-nums group-hover:scale-[1.02] transition-transform duration-300 origin-left inline-block">
            {isNumeric ? (
              <CountUp target={numericValue} started={started} />
            ) : (
              <Typewriter text={stat.value} started={started} />
            )}
          </span>
          
          {stat.suffix && (
            <span className="text-xl sm:text-2xl font-bold text-neutral-400 group-hover:text-rose-600 transition-colors duration-300 leading-none">
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Title Label */}
        <h3 className="text-[11px] sm:text-xs font-bold text-neutral-800 tracking-[0.2em] uppercase mb-2">
          {stat.label}
        </h3>
      </div>

      {/* Description */}
      <p className="text-xs sm:text-[13px] text-neutral-500 leading-relaxed font-normal mt-1 max-w-[260px] group-hover:text-neutral-700 transition-colors duration-300">
        {stat.description}
      </p>
    </motion.div>
  );
}

// ─── Scroll-based text animation ─────────────────────────────────────────────

interface ScrollAnimatedWordProps {
  readonly word: { text: string; suffix: string; hasBr?: boolean };
  readonly index: number;
  readonly total: number;
  readonly scrollYProgress: any;
}

function ScrollAnimatedWord({
  word,
  index,
  total,
  scrollYProgress,
}: ScrollAnimatedWordProps) {
  const start = index / total;
  const end = (index + 1.2) / total;
  const color = useTransform(
    scrollYProgress,
    [start, Math.min(end, 1)],
    ["#a3a3a3", "#1a1a1a"]
  );

  return (
    <span className="inline">
      <motion.span
        style={{ color }}
        className="inline"
      >
        {word.text}
      </motion.span>
      {word.suffix}
      {word.hasBr && <br className="hidden md:inline" />}
    </span>
  );
}

function ScrollAnimatedQuote() {
  const containerRef = useRef<HTMLSpanElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "end 55%"],
  });

  const animWords = [
    { text: "We", suffix: " " },
    { text: "don't", suffix: " " },
    { text: "just", suffix: " " },
    { text: "extract", suffix: " " },
    { text: "minerals.", suffix: " ", hasBr: true },
    { text: "We", suffix: " " },
    { text: "extract", suffix: " " },
    { text: "potential", suffix: " " },
    { text: "from", suffix: " " },
    { text: "the", suffix: " " },
    { text: "earth,", suffix: " " },
    { text: "and", suffix: " " },
    { text: "from", suffix: " " },
    { text: "our", suffix: " " },
    { text: "people.", suffix: "" },
  ];

  return (
    <span ref={containerRef} className="inline">
      {animWords.map((word, i) => (
        <ScrollAnimatedWord
          key={i}
          word={word}
          index={i}
          total={animWords.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </span>
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

  const imageX = useTransform(scrollYProgress, [0, 0.65], [isMobile ? "-40px" : "-120px", "0px"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="py-24 bg-white overflow-hidden"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">

        {/* ── Header ── */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-widest uppercase text-neutral-600 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 inline-block" />
              OPERATIONAL SCALE
            </span>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.h2
              id="stats-heading"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tight leading-none"
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
              className="text-base text-neutral-500 leading-relaxed self-end max-w-lg"
            >
              Behind every metric is our dedicated team of professionals, an
              unwavering commitment to safe operations, and strategic alignment
              with IRH to accelerate development and increase production at
              Mopani Copper Mines.
            </motion.p>
          </div>
        </div>

        {/* ── Stats Grid (2-column Grid on Mobile/Tablet, 3-column Grid on Desktop) ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-3 gap-[1px] bg-neutral-200/50 border border-neutral-200/50 rounded-2xl overflow-hidden shadow-sm select-none"
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
          className="mt-16 pt-12 lg:mt-28 lg:pt-20 border-t border-neutral-100"
        >
          {/* Section label */}
          <div className="flex items-center gap-4 mb-10 lg:mb-16">
            <div className="w-10 h-px bg-neutral-300" />
            <span
              style={{ fontSize: "11px", letterSpacing: "0.25em" }}
              className="font-medium uppercase text-neutral-500"
            >
              From the Chairman
            </span>
          </div>

          {/* 12-col grid — portrait left, quote right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

            {/* Portrait — col-span-5 */}
            <motion.div
              style={{ x: imageX, opacity: imageOpacity }}
              className="lg:col-span-5 w-full"
            >
              <div className="relative max-w-[440px] mx-auto lg:mx-0 w-full">
                {/* Offset border accent */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-sm border border-neutral-200 -z-10" />
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-neutral-100 w-full max-h-[400px] lg:max-h-none">
                  <Image
                    alt="Raj Talreja — Chairman & Managing Director"
                    src="/Raj Sir Photo.webp"
                    fill
                    className="object-cover object-top transition-all duration-700"
                    style={{ filter: "grayscale(18%)" }}
                    sizes="(max-width:1024px) 100vw, 40vw"
                    priority
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLImageElement).style.filter = "grayscale(0%)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLImageElement).style.filter = "grayscale(18%)";
                    }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Quote — col-span-7 */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              {/* Decorative open quote mark */}
              <div
                aria-hidden="true"
                style={{
                  fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                  fontSize: "clamp(40px, 8vw, 96px)",
                  lineHeight: 0.85,
                  color: "#d4d4d4",
                  userSelect: "none",
                  marginBottom: "16px",
                }}
              >
                &ldquo;
              </div>

              {/* Quote text — Playfair, weight 300, elegant */}
              <blockquote>
                <p
                  style={{
                    fontFamily: "var(--font-playfair), 'Playfair Display', Georgia, serif",
                    fontSize: "clamp(22px, 3vw, 38px)",
                    fontWeight: 300,
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em",
                    color: "#1a1a1a",
                    maxWidth: "100%",
                    marginBottom: "32px",
                  }}
                >
                  <ScrollAnimatedQuote />
                </p>

                {/* Signature block */}
                <footer
                  style={{
                    borderTop: "1px solid #e5e5e5",
                    paddingTop: "28px",
                    maxWidth: "100%",
                  }}
                >
                  <div className="flex items-end justify-between gap-6">
                    {/* Name + title */}
                    <div>
                      <cite
                        className="not-italic block"
                        style={{
                          fontSize: "17px",
                          fontWeight: 500,
                          letterSpacing: "-0.01em",
                          color: "#171717",
                          marginBottom: "5px",
                        }}
                      >
                        Raj Talreja
                      </cite>
                      <p
                        style={{
                          fontSize: "10px",
                          fontWeight: 500,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#737373",
                        }}
                      >
                        Chairman · SKT Global Mining &amp; Services
                      </p>
                    </div>
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
