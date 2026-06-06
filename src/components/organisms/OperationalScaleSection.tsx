"use client";

import { JSX, useEffect, useRef, useState } from "react";
import { motion, useInView, animate, useScroll, useTransform } from "framer-motion";
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
      className="bg-bg-pure p-4 sm:p-8 hover:bg-bg-tint transition-all duration-300 flex flex-col justify-between group cursor-pointer sm:cursor-default relative overflow-hidden h-[150px] sm:h-[230px]"
    >
      {/* Top Accent Hover Line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-rose-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

      <div>
        {/* Stat Value Container */}
        <div className="flex flex-wrap items-baseline gap-0.5 sm:gap-1 mb-3 sm:mb-4 select-none">
          {stat.prefix && (
            <span className="text-lg sm:text-2xl font-semibold text-neutral-400 group-hover:text-rose-600 transition-colors duration-300 leading-none">
              {stat.prefix}
            </span>
          )}

          <span className="relative text-stat text-2xl sm:text-4xl md:text-5xl tracking-tight leading-none group-hover:scale-[1.02] transition-transform duration-300 origin-left inline-block stats-number-container">
            {/* Stable Layout Container: Reserves the maximum width of the final string to prevent jitter */}
            <span className="opacity-0 select-none pointer-events-none" aria-hidden="true">
              {isNumeric ? numericValue.toLocaleString() : stat.value}
            </span>
            {/* Absolute overlay containing the active animated value */}
            <span className="absolute inset-0 pointer-events-none">
              {isNumeric ? (
                <CountUp target={numericValue} started={started} />
              ) : (
                <Typewriter text={stat.value} started={started} />
              )}
            </span>
          </span>

          {stat.suffix && (
            <span className="text-lg sm:text-2xl font-semibold text-neutral-400 group-hover:text-rose-600 transition-colors duration-300 leading-none">
              {stat.suffix}
            </span>
          )}
        </div>

        {/* Title Label */}
        <h3 className="text-data-label mb-1.5 sm:mb-2 text-left">
          {stat.label}
        </h3>
      </div>

      {/* Description (visible on desktop only) */}
      <p className="hidden sm:block text-body-sm text-neutral-600 mt-1 max-w-[260px] group-hover:text-neutral-700 transition-colors duration-300">
        {stat.description}
      </p>

      {/* ── HOVER/CLICK BLUE OVERLAY (visible on mobile only) ── */}
      <div
        className={`absolute inset-0 bg-skt-navy/95 backdrop-blur-sm flex flex-col justify-between p-4 sm:p-8 text-white transition-transform duration-500 ease-out z-10 sm:hidden ${
          isOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="space-y-1.5 sm:space-y-3 text-left">
          <h4 className="text-xs sm:text-sm md:text-lg lg:text-xl font-bold text-white tracking-tight leading-snug">
            Focusing on {stat.label}
          </h4>
          <p className="text-[10px] sm:text-xs text-white/80 leading-relaxed font-medium">
            {stat.description}
          </p>
        </div>

        {/* Bottom: Close Bar (aligns with the morphing close button on the right) */}
        <div className="flex items-center justify-between mt-auto pt-2 sm:pt-4">
          <span className="text-[9px] sm:text-xs font-bold tracking-tight text-white/60">
            Tap to close
          </span>
          
          {/* Spacer to reserve room for the absolute z-20 morphing button */}
          <div className="w-6 h-6 sm:w-8 sm:h-8 invisible" />
        </div>
      </div>

      {/* Morphing Toggle Button (always on top, visible on mobile only) */}
      <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 w-6 h-6 sm:w-8 sm:h-8 bg-neutral-200 text-neutral-900 flex items-center justify-center rounded-[6px] shadow-sm select-none z-20 sm:hidden">
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-3 h-3 sm:w-4 sm:h-4 relative flex items-center justify-center"
        >
          {/* Horizontal line */}
          <span className="absolute w-full h-[2px] bg-neutral-900 rounded-full" />
          {/* Vertical line */}
          <motion.span
            animate={{ scaleY: isOpen ? 0 : 1 }}
            transition={{ duration: 0.25 }}
            className="absolute w-[2px] h-full bg-neutral-900 rounded-full"
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

  const imageX = useTransform(scrollYProgress, [0, 0.65], [isMobile ? "-40px" : "-120px", "0px"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="py-16 md:py-24 lg:py-32 bg-bg-soft overflow-hidden"
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
            <span className="inline-flex items-center gap-1.5 text-eyebrow mb-6">
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
              className="text-body-lg text-neutral-600 self-end max-w-lg"
            >
              Behind every metric is our dedicated team of professionals, an
              unwavering commitment to safe operations, and strategic alignment
              with IRH to accelerate development and increase production at
              Mopani Copper Mines.
            </motion.p>
          </div>
        </div>

        {/* ── Stats Grid (Responsive 2-to-3 column Grid) ── */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 sm:grid-cols-3 gap-[1px] bg-neutral-200/50 border border-neutral-200/50 rounded-2xl overflow-hidden shadow-sm select-none"
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
              className="text-eyebrow"
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
                  fontFamily: "var(--font-sans), 'Inter', sans-serif",
                  fontSize: "clamp(40px, 8vw, 96px)",
                  lineHeight: 0.85,
                  color: "#d4d4d4",
                  userSelect: "none",
                  marginBottom: "16px",
                }}
              >
                &ldquo;
              </div>

              {/* Quote text — Inter, weight 300, elegant */}
              <blockquote>
                <MagicText
                  text="We don't just extract minerals. We extract potential from the earth, and from our people."
                  className="flex flex-wrap leading-[1.35] p-0 m-0"
                  wordClassName="relative inline-block mr-[0.22em] text-[clamp(22px,3vw,38px)] font-light text-neutral-900"
                  style={{
                    fontFamily: "var(--font-sans), 'Inter', sans-serif",
                    fontSize: "clamp(22px, 3vw, 38px)",
                    fontWeight: 300,
                    lineHeight: 1.35,
                    letterSpacing: "-0.01em",
                    color: "#1a1a1a",
                    maxWidth: "100%",
                    marginBottom: "32px",
                  }}
                />

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
                        className="not-italic block text-neutral-900"
                        style={{
                          fontFamily: "var(--font-sans), 'Inter', sans-serif",
                          fontSize: "17px",
                          fontWeight: 500,
                          letterSpacing: "-0.01em",
                          marginBottom: "5px",
                        }}
                      >
                        Raj Talreja
                      </cite>
                      <p
                        className="text-eyebrow text-neutral-500"
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
