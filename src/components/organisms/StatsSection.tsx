"use client";

import { JSX, useEffect, useRef, useState, useCallback } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useInView } from "framer-motion";
import Image from "next/image";

// ─── Safety pillars — each maps to one image card ───────────────────────────
const PILLARS = [
  {
    num: "01",
    title: "Hazard Elimination",
    body: "Every task begins with a structured risk assessment and live environmental monitoring to eliminate hazards before they form.",
    tag: "Risk Assessment",
    img: "/Hazard Elimination.webp",
  },
  {
    num: "02",
    title: "Worker Protection Systems",
    body: "State-of-the-art PPE, atmospheric sensors, and automated ventilation guard every underground crew, 24 hours a day.",
    tag: "PPE & Monitoring",
    img: "/Worker Protection Systems.webp",
  },
  {
    num: "03",
    title: "Continuous Training",
    body: "Over 5,000 hours of structured safety education per year ensure every SKT professional knows exactly what to do.",
    tag: "Safety Training",
    img: "/Continuous Training.webp",
  },
  {
    num: "04",
    title: "Emergency Readiness",
    body: "Dedicated rescue teams, sub-5-minute response protocols, and on-site medical infrastructure keep our people covered.",
    tag: "Emergency Response",
    img: "/Emergency Readiness.webp",
  },
  {
    num: "05",
    title: "Community Safety Culture",
    body: "Beyond the mine, SKT Global extends its safety philosophy into surrounding communities through education, awareness, and active partnership programs.",
    tag: "Community Programs",
    img: "/Community Safety Culture.webp",
  },
] as const;

// ─── Stack layout offsets for inactive cards ─────────────────────────────────
const STACK_OFFSETS = [
  { x: 0, y: 0, scale: 1, z: 50, opacity: 1 }, // active (front)
  { x: 12, y: -12, scale: 1, z: 40, opacity: 0.72 }, // 2nd
  { x: 22, y: -22, scale: 1, z: 30, opacity: 0.50 }, // 3rd
  { x: 30, y: -30, scale: 1, z: 20, opacity: 0.32 }, // 4th
  { x: 37, y: -37, scale: 1, z: 10, opacity: 0.18 }, // 5th (back)
];

export function StatsSection(): JSX.Element {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const autoplayDuration = isMobile ? 6 : 3.5;

  const cardsBlockRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardsBlockRef,
    offset: ["start 95%", "end 45%"],
  });

  const cardsX = useTransform(scrollYProgress, [0, 0.65], ["120px", "0px"]);
  const cardsOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const sectionInView = useInView(sectionRef, { once: false, amount: 0.15 });

  // ── Auto-cycle (Runs dynamically with longer transition on mobile to improve readability) ─────────────────────────
  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!paused) {
        setActive((p) => (p + 1) % PILLARS.length);
      }
    }, autoplayDuration * 1000);
  }, [paused, autoplayDuration]);

  // 1. Reset to 1st point only when the section FIRST scroll-triggers into view
  useEffect(() => {
    if (sectionInView) {
      setActive(0);
    }
  }, [sectionInView]);

  // 2. Manage the auto-play loop independently of the reset triggers
  useEffect(() => {
    if (sectionInView) {
      startAuto();
    } else {
      if (autoRef.current) clearInterval(autoRef.current);
    }
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, [sectionInView, startAuto]);

  // ── Manual Click Handler (Resets the dynamic interval gracefully) ──────────────
  const handlePillarClick = (index: number) => {
    setActive(index);
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (!paused) {
        setActive((p) => (p + 1) % PILLARS.length);
      }
    }, autoplayDuration * 1000);
  };

  // ── GSAP: Headline word-reveal ─────────────────────────────────────────────
  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let mounted = true;

    const init = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");

      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);

      ctx = gsap.context(() => {
        // ScrollTrigger typography highlight reveal (Word-by-Word Scroll Synchronization)
        const highlightEl = sectionRef.current?.querySelector<HTMLSpanElement>(".quote-highlight");
        if (highlightEl) {
          const words = highlightEl.innerText.split(/\s+/);
          highlightEl.innerHTML = words
            .map(
              (w) =>
                `<span class="quote-reveal-word text-neutral-300 inline-block mr-1.5" style="color: #D4D4D4">${w}</span>`
            )
            .join("");

          const wordEls = highlightEl.querySelectorAll(".quote-reveal-word");
          gsap.to(wordEls, {
            scrollTrigger: {
              trigger: highlightEl,
              start: "top 95%", // Starts right as the quote climbs into the view
              end: "bottom 70%", // Ends when it reaches 70% height
              scrub: 0.5, // Eased scrollbar scrubbing
            },
            color: "#171717", // Transition color to solid premium black (neutral-900)
            stagger: 0.08, // Word-by-word staggered reveal mapped to scrollbar!
            ease: "none",
          });
        }
      }, sectionRef);
    };

    init();
    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, []);

  // ── Stack position for each card given active index ─────────────────────
  const getStackStyle = (cardIndex: number) => {
    const steps = (cardIndex - active + PILLARS.length) % PILLARS.length;
    const off = STACK_OFFSETS[steps] || { x: 0, y: 0, scale: 1, z: 0, opacity: 0 };
    return {
      transform: `translate(${off.x}px, ${off.y}px) scale(${off.scale})`,
      zIndex: off.z,
      opacity: off.opacity,
    };
  };

  return (
    <section
      ref={sectionRef}
      id="impact"
      className="relative py-16 md:py-24 lg:py-32 bg-bg-steel overflow-hidden"
      aria-labelledby="safety-heading"
    >
      {/* ── Industrial background grid ─────────────────────────────────────── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.025)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-neutral-200/30 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-neutral-200/20 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 relative z-10">

        {/* ══════════════════════════════════════════════════════════════
            TOP — Editorial Header Block
        ══════════════════════════════════════════════════════════════ */}
        <div className="max-w-3xl space-y-6 mb-16">
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 text-eyebrow border border-neutral-200 bg-white"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
            Safety First · SKT Global
          </motion.span>

          {/* Headline — GSAP word-reveal */}
          <h2
            ref={headlineRef}
            id="safety-heading"
            className="text-headline"
          >
            Every Worker Returns Home Safe.
          </h2>

          {/* Sub-copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg text-neutral-600 max-w-xl"
          >
            Safety is the prime motto of SKT Global Mining. Every decision,
            every shift, every system is designed around one non-negotiable
            principle: committed to zero harm to our people, our communities, and our environment.
          </motion.p>
        </div>

        {/* ══════════════════════════════════════════════════════════════
            MIDDLE — 2-Column Symmetrical Workspace
        ══════════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* LEFT — Clickable pillars (Symmetrical, Stable Heights on Desktop, Responsive Accordions on Mobile) */}
          <div className="lg:col-span-6">
            <div ref={pillarsRef} className="space-y-0 border-t border-neutral-200">
              {PILLARS.map((p, i) => {
                const isActive = active === i;
                return (
                  <div
                    key={p.num}
                    role="button"
                    tabIndex={0}
                    onClick={() => handlePillarClick(i)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        handlePillarClick(i);
                      }
                    }}
                    className={`relative w-full text-left group flex gap-5 items-start pt-5 pb-6 pl-6 border-b border-neutral-200 last:border-0 transition-colors duration-300 focus:outline-none cursor-pointer ${isActive ? "bg-white shadow-sm" : "bg-transparent hover:bg-white/40"
                      }`}
                  >
                    {/* Active Accent Left Border Indicator */}
                    {isActive && (
                      <motion.div
                        {...(isMobile ? {} : { layoutId: "active-pillar-indicator" })}
                        className="absolute left-0 top-0 bottom-0 w-1 bg-skt-navy"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}

                    {/* Badge Container */}
                    <div className="flex-shrink-0 mt-0.5 flex flex-col items-center">
                      <span
                        className={`w-8 h-8 rounded-sm border flex items-center justify-center text-[10px] font-semibold tracking-wider transition-all duration-300 ${isActive
                          ? "border-neutral-900 bg-skt-navy text-white"
                          : "border-neutral-300 bg-white text-neutral-600 group-hover:border-neutral-700"
                          }`}
                      >
                        {p.num}
                      </span>
                    </div>

                    {/* Content Box */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${isActive ? "text-neutral-900" : "text-neutral-600"
                          }`}
                      >
                        {p.title}
                      </h3>
                      
                      {/* Desktop Description: Always visible */}
                      <p className="text-body-sm mt-1 hidden lg:block">
                        {p.body}
                      </p>

                      {/* Mobile Accordion Container: Animated fold-out */}
                      <div className="block lg:hidden">
                        <motion.div
                          initial={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 8 : 0 }}
                          animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0, marginTop: isActive ? 8 : 0 }}
                          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden will-change-[height,opacity]"
                        >
                          <div className="pb-1">
                            <p className="text-body-sm mb-4">
                              {p.body}
                            </p>

                            {/* Responsive Mobile Inline Image */}
                            <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden shadow-md">
                              <Image
                                src={p.img}
                                alt={p.tag}
                                fill
                                sizes="100vw"
                                className="object-cover"
                                quality={60}
                                priority
                              />
                              {/* Bottom gradient overlay */}
                              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />
                              
                              {/* Tag badge overlay */}
                              <span className="absolute top-3 right-3 text-[9px] font-semibold tracking-widest text-neutral-500 uppercase border border-neutral-200 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-sm">
                                {p.tag}
                              </span>
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </div>

                    {/* Tag badge (Desktop-only next to title/body) */}
                    {isActive && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex-shrink-0 self-start mt-0.5 text-[9px] font-semibold tracking-widest text-neutral-500 uppercase border border-neutral-200 bg-white px-2 py-1 rounded-sm hidden lg:block mr-4"
                      >
                        {p.tag}
                      </motion.span>
                    )}

                    {/* Dynamic Horizontal Autoplay Progress Line (Under Each Individual Point) */}
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-neutral-200">
                      {isActive && (
                        <motion.div
                          key={`${active}-${paused}`}
                          initial={{ scaleX: 0 }}
                          animate={paused ? { scaleX: 0 } : { scaleX: 1 }}
                          transition={{
                            duration: autoplayDuration,
                            ease: "linear",
                          }}
                          className="absolute inset-y-0 left-0 w-full bg-skt-navy origin-left"
                        />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* RIGHT — Premium stacked image cards (Symmetric Centered Height) */}
          <motion.div
            ref={cardsBlockRef}
            className="lg:col-span-6 relative lg:flex hidden items-center justify-center w-full"
            style={{ height: "480px", x: cardsX, opacity: cardsOpacity }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => { setPaused(false); startAuto(); }}
          >
            {/* Stack container — cards are absolutely stacked */}
            <div className="relative" style={{ width: "360px", height: "440px" }}>

              {/* Render all 5 cards, stacked */}
              {PILLARS.map((p, i) => {
                const stackStyle = getStackStyle(i);
                const isActive = active === i;

                return (
                  <div
                    key={p.num}
                    onClick={() => handlePillarClick(i)}
                    className="absolute inset-0 rounded-2xl overflow-hidden cursor-pointer"
                    style={{
                      ...stackStyle,
                      transition: "transform 0.65s cubic-bezier(0.16,1,0.3,1), opacity 0.55s ease, box-shadow 0.45s ease",
                      boxShadow: isActive
                        ? "0 32px 80px rgba(0,0,0,0.22), 0 8px 24px rgba(0,0,0,0.12)"
                        : "0 8px 24px rgba(0,0,0,0.10)",
                    }}
                  >
                    {/* Photo */}
                    <Image
                      src={p.img}
                      alt={p.tag}
                      fill
                      sizes="(max-width: 1024px) 100vw, 30vw"
                      className="object-cover"
                      style={{
                        transition: "transform 0.9s cubic-bezier(0.16,1,0.3,1)",
                        transform: "scale(1)",
                        filter: isActive ? "brightness(1)" : "brightness(0.85)",
                      }}
                      priority={i === 0}
                    />

                    {/* Bottom gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent" />

                    {/* Bottom label — only on active */}
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          key={`label-${i}`}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                          className="absolute bottom-0 left-0 right-0 p-7"
                        >
                          <p className="text-[9px] font-semibold tracking-[0.3em] text-white/50 uppercase mb-2">
                            {p.tag}
                          </p>
                          <h4 className="text-lg font-semibold text-white tracking-tight leading-tight">
                            {p.title}
                          </h4>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}

              {/* Dot pagination indicator */}
              <div className="absolute -bottom-12 left-0 right-0 flex items-center justify-center gap-2">
                {PILLARS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => handlePillarClick(i)}
                    className={`rounded-full transition-all duration-400 ${active === i
                      ? "w-6 h-1.5 bg-skt-navy"
                      : "w-1.5 h-1.5 bg-neutral-300 hover:bg-neutral-500"
                      }`}
                    aria-label={`Go to safety pillar ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
