"use client";

import { useRef, useEffect, useState, memo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { JSX } from "react";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { OperationalScaleSection } from "./OperationalScaleSection";
import { CAPABILITIES } from "@/data/capabilities";

// Duplicate for seamless infinite loop
const ROW_A = [...CAPABILITIES, ...CAPABILITIES];

// ─── Single Card ─────────────────────────────────────────────────────────────

const SliderCard = memo(function SliderCard({ card }: { card: typeof CAPABILITIES[0] }) {
  const Icon = card.icon;

  return (
    <Link
      href={`/capabilities/${card.slug}`}
      className="group relative flex-shrink-0 w-[340px] h-[480px] mx-3 rounded-2xl cursor-pointer select-none overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-2 hover:shadow-2xl block"
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
        willChange: "transform",
      }}
    >
      {/* ── Image Layer (Always Visible) ── */}
      <ImageWithSkeleton
        src={card.bgImage}
        alt={card.title}
        fill
        sizes="340px"
        className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        skeletonClassName="rounded-2xl"
      />

      {/* ── Subtle top gradient for number visibility ── */}
      <div className="absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-black/50 via-black/10 to-transparent pointer-events-none" style={{ zIndex: 1 }} />

      {/* ── Bottom gradient (default state - title visible) ── */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/70 to-transparent pointer-events-none transition-all duration-700 group-hover:h-[75%] group-hover:from-black group-hover:via-black/90" style={{ zIndex: 1 }} />

      {/* ── Top Section: Icon + Number Badge ── */}
      <div className="absolute top-5 left-5 right-5 flex items-start justify-between z-10">
        {/* Icon Badge */}
        <div className="w-11 h-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white transition-all duration-500 group-hover:bg-white group-hover:text-neutral-900 group-hover:scale-110">
          <Icon size={18} strokeWidth={1.75} />
        </div>

        {/* Number */}
        <span className="text-micro tracking-[0.25em] text-white/70 uppercase pt-3">
          {card.num}
        </span>
      </div>

      {/* ── Bottom Section: Content ── */}
      <div className="absolute inset-x-0 bottom-0 p-6 z-10 flex flex-col">

        {/* Title (Always Visible) */}
        <h3 className="text-subhead text-white mb-2 transition-transform duration-500 group-hover:-translate-y-1">
          {card.title}
        </h3>

        {/* Hover Reveal Area */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="overflow-hidden">

            {/* Description */}
            <p className="text-body-sm text-white/75 mb-4 pt-1">
              {card.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-4">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9.5px] font-medium tracking-[0.12em] uppercase px-2.5 py-1 rounded-full text-white/90 bg-white/10 border border-white/15 backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Subtle Divider Line */}
            <div className="h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent" />

            {/* CTA Link */}
            <div className="flex items-center gap-2 pt-3 text-[10px] font-medium tracking-[0.2em] uppercase text-white/60 group-hover:text-white transition-colors">
              <span>Explore</span>
              <svg
                width="14"
                height="8"
                viewBox="0 0 14 8"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M1 4H13M13 4L10 1M13 4L10 7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* ── Border highlight on hover ── */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/10 transition-colors duration-500 pointer-events-none" style={{ zIndex: 1 }} />
    </Link>
  );
});

SliderCard.displayName = "SliderCard";

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ServicesSection(): JSX.Element {
  const rowARef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollWidth === target.clientWidth) return;
    const progress = target.scrollLeft / (target.scrollWidth - target.clientWidth);
    setScrollProgress(progress);
  };

  useEffect(() => {
    // Mobile optimization guard: disable heavy JS slider loop and requestAnimationFrame on mobile/tablet screens
    if (window.innerWidth < 1024) return;

    const rowA = rowARef.current;
    const stage = stageRef.current;
    if (!rowA || !stage) return;

    const SPEED = 0.4125;
    const DRAG_FACTOR = 1.2;
    const WHEEL_FACTOR = 0.85;
    const INERTIA = 0.88;
    const RESUME_EASE = 0.06;

    let posA = 0;
    let paused = false;
    let dragging = false;
    let dragStartX = 0;
    let velA = 0;
    let currentSpeedA = SPEED;
    let wheelResumeTimer: number | null = null;

    const halfA = rowA.scrollWidth / 2;

    function wrap(pos: number, half: number, dir: 1 | -1) {
      if (dir === -1 && pos <= -half) return pos + half;
      if (dir === 1 && pos >= half) return pos - half;
      if (pos > 0) return pos - half;
      if (pos < -half) return pos + half;
      return pos;
    }

    function tick() {
      if (!paused && !dragging) {
        currentSpeedA += (SPEED - currentSpeedA) * RESUME_EASE;
        posA = wrap(posA - currentSpeedA, halfA, -1);
      }

      if (dragging) {
        posA = wrap(posA + velA, halfA, -1);
      } else if (paused && !dragging && Math.abs(velA) > 0.05) {
        velA *= INERTIA;
        posA = wrap(posA + velA, halfA, -1);
      }

      rowA!.style.transform = `translate3d(${posA}px,0,0)`;
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);

    function onEnter() {
      paused = true;
      stage!.style.cursor = 'grab';
    }
    function onLeave() {
      if (!dragging) {
        paused = false;
        currentSpeedA = 0;
        stage!.style.cursor = '';
      }
    }

    function onMouseDown(e: MouseEvent) {
      dragging = true;
      dragStartX = e.clientX;
      velA = 0;
      stage!.style.cursor = 'grabbing';
      e.preventDefault();
    }
    function onMouseMove(e: MouseEvent) {
      if (!dragging) return;
      const dx = (e.clientX - dragStartX) * DRAG_FACTOR;
      dragStartX = e.clientX;
      velA = dx;
    }
    function onMouseUp() {
      if (!dragging) return;
      dragging = false;
      stage!.style.cursor = paused ? 'grab' : '';
    }

    function onWheel(e: WheelEvent) {
      const dominantDelta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (Math.abs(dominantDelta) < 1) return;

      const modeMultiplier = e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? stage!.clientWidth : 1;
      velA = -dominantDelta * modeMultiplier * WHEEL_FACTOR;
      paused = true;
      currentSpeedA = 0;
      e.preventDefault();

      if (wheelResumeTimer) {
        window.clearTimeout(wheelResumeTimer);
      }

      wheelResumeTimer = window.setTimeout(() => {
        if (!dragging) {
          paused = false;
          currentSpeedA = 0;
        }
      }, 420);
    }

    let touchStartX = 0;
    function onTouchStart(e: TouchEvent) {
      const touch = e.touches[0];
      if (!touch) return;
      dragging = true;
      touchStartX = touch.clientX;
      velA = 0;
      paused = true;
    }
    function onTouchMove(e: TouchEvent) {
      if (!dragging) return;
      const touch = e.touches[0];
      if (!touch) return;
      const dx = (touch.clientX - touchStartX) * DRAG_FACTOR;
      touchStartX = touch.clientX;
      velA = dx;
    }
    function onTouchEnd() {
      dragging = false;
      paused = false;
      currentSpeedA = 0;
    }

    stage.addEventListener('mouseenter', onEnter);
    stage.addEventListener('mouseleave', onLeave);
    stage.addEventListener('mousedown', onMouseDown);
    stage.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    stage.addEventListener('touchstart', onTouchStart, { passive: true });
    stage.addEventListener('touchmove', onTouchMove, { passive: true });
    stage.addEventListener('touchend', onTouchEnd);

    return () => {
      cancelAnimationFrame(rafRef.current);
      if (wheelResumeTimer) {
        window.clearTimeout(wheelResumeTimer);
      }
      stage.removeEventListener('mouseenter', onEnter);
      stage.removeEventListener('mouseleave', onLeave);
      stage.removeEventListener('mousedown', onMouseDown);
      stage.removeEventListener('wheel', onWheel);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      stage.removeEventListener('touchstart', onTouchStart);
      stage.removeEventListener('touchmove', onTouchMove);
      stage.removeEventListener('touchend', onTouchEnd);
    };
  }, []);

  return (
    <>
      <section
        id="services"
        className="bg-bg-tint overflow-hidden py-16 md:py-24 lg:py-32"
      >
        {/* ── Header ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-12 md:mb-16 lg:mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-eyebrow mb-4"
              >
                What We Do
              </motion.p>

              <motion.h2
                id="services-heading"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-headline"
              >
                Core
                <br />
                <span className="text-neutral-300">Capabilities</span>
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 border border-neutral-200 rounded-full px-5 py-2.5 hover:bg-skt-navy hover:text-white hover:border-neutral-900 transition-all duration-300 active:scale-95"
              >
                View Systems →
              </Link>
            </motion.div>
          </div>
        </div>

        {/* ── Mobile Horizontal Native Scroll Container (Snap enabled, 1.2 cards visible, energy saver) ── */}
        <div
          onScroll={handleMobileScroll}
          className="block lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none touch-pan-x px-5 pb-6"
        >
          <div className="flex gap-4">
            {CAPABILITIES.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={`mobile-${card.slug}-${i}`}
                  className="snap-start shrink-0 w-[280px] h-[420px] relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-end p-5 bg-skt-navy border border-white/5 active:scale-[0.98] transition-transform duration-300"
                >
                  <Link href={`/capabilities/${card.slug}`} className="absolute inset-0 z-0">
                    <ImageWithSkeleton
                      src={card.bgImage}
                      alt={card.title}
                      fill
                      sizes="280px"
                      className="object-cover opacity-60"
                      skeletonClassName="rounded-2xl"
                    />
                  </Link>

                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-0" />

                  {/* Top section */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10 pointer-events-none">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white">
                      <Icon size={16} />
                    </div>
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/60">
                      {card.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col pointer-events-none">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                      {card.title}
                    </h3>
                    <p className="text-[11px] leading-relaxed text-white/70 mb-3 line-clamp-2">
                      {card.desc}
                    </p>

                    {/* Tags with larger touch targets (min 32px height) */}
                    <div className="flex flex-wrap gap-1.5 mb-4 pointer-events-auto">
                      {card.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-bold tracking-[0.1em] uppercase px-3 py-1.5 rounded-full text-white/90 bg-white/10 border border-white/15 min-h-[32px] flex items-center justify-center"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      href={`/capabilities/${card.slug}`}
                      className="pointer-events-auto inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-white/60 active:text-white"
                    >
                      Explore →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Scroll Progress Indicator */}
        <div className="lg:hidden flex justify-center items-center mt-2 mb-4">
          <div className="w-24 h-[2px] bg-neutral-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-skt-navy transition-all duration-75"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>

        {/* ── Desktop Slider Stage (Hidden on Mobile) ── */}
        <div
          ref={stageRef}
          className="hidden lg:block relative"
          style={{
            userSelect: "none",
          }}
        >
          <div className="overflow-hidden" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
            <div
              ref={rowARef}
              className="flex"
              style={{ willChange: "transform" }}
            >
              {ROW_A.map((card, i) => (
                <SliderCard key={`a-${i}`} card={card} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Operational Scale Section */}
      <OperationalScaleSection />
    </>
  );
}
