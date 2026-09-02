"use client";

import { useRef, useEffect, memo, JSX } from "react";
import { motion } from "framer-motion";
import { ImageWithSkeleton } from "@/components/ui/image-with-skeleton";
import { CAPABILITIES } from "@/data/capabilities";

// Duplicate for seamless infinite loop
const ROW_A = [...CAPABILITIES, ...CAPABILITIES];

// ─── Single Card ─────────────────────────────────────────────────────────────

const SliderCard = memo(function SliderCard({ card, ariaHidden }: { card: typeof CAPABILITIES[0]; ariaHidden?: boolean }) {
  const Icon = card.icon;

  return (
    <div
      className="group relative flex-shrink-0 w-[340px] h-[480px] mx-3 rounded-2xl select-none overflow-hidden transition-transform duration-700 hover:-translate-y-2 hover:shadow-2xl block"
      aria-hidden={ariaHidden ?? undefined}
      tabIndex={ariaHidden ? -1 : undefined}
      style={{
        boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
        willChange: "transform",
        transform: "translateZ(0)",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      {/* ── Image Layer ── */}
      <ImageWithSkeleton
        src={card.bgImage}
        alt={card.title}
        fill
        sizes="340px"
        className="object-cover transition-transform duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110"
        skeletonClassName="rounded-2xl"
      />

      {/* ── Top gradient ── */}
      <div className="absolute inset-x-0 top-0 h-[30%] bg-gradient-to-b from-black/40 via-black/5 to-transparent pointer-events-none" style={{ zIndex: 1 }} />

      {/* ── Bottom gradient ── */}
      <div className="absolute inset-x-0 bottom-0 h-[45%] bg-gradient-to-t from-black via-black/65 to-transparent pointer-events-none transition-all duration-700 group-hover:h-[78%] group-hover:from-black group-hover:via-black/92" style={{ zIndex: 1 }} />

      {/* ── Top Section: Icon + Number ── */}
      <div className="absolute top-6 left-6 right-6 flex items-start justify-between z-10">
        {/* Icon Badge */}
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white transition-all duration-500 group-hover:bg-white group-hover:text-neutral-900 group-hover:scale-110">
          <Icon size={16} strokeWidth={1.5} />
        </div>

        {/* Number */}
        <span className="text-[10px] font-medium tracking-[0.3em] text-white/60 uppercase pt-3 tabular-nums">
          {card.num}
        </span>
      </div>

      {/* ── Bottom Section: Content ── */}
      <div className="absolute inset-x-0 bottom-0 p-7 z-10 flex flex-col">

        {/* Title */}
        <h3 className="text-[19px] font-semibold tracking-tight leading-[1.25] text-white mb-2.5 transition-transform duration-500 group-hover:-translate-y-1">
          {card.title}
        </h3>

        {/* Hover Reveal */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]">
          <div className="overflow-hidden">

            {/* Description */}
            <p className="text-[12.5px] leading-[1.65] text-white/70 mb-5 pt-1 font-light">
              {card.desc}
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5 mb-5">
              {card.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[9px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-full text-white/85 bg-white/8 border border-white/12 transition-all duration-300 hover:bg-white/15"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Divider */}
            <div className="h-px w-full bg-gradient-to-r from-white/25 via-white/8 to-transparent" />
          </div>
        </div>
      </div>

      {/* ── Border highlight ── */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-white/8 transition-colors duration-500 pointer-events-none" style={{ zIndex: 1 }} />
    </div>
  );
});

SliderCard.displayName = "SliderCard";

// ─── Main Section ─────────────────────────────────────────────────────────────

export function ServicesSection(): JSX.Element {
  const rowARef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const handleMobileScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    if (target.scrollWidth === target.clientWidth) return;
    const progress = target.scrollLeft / (target.scrollWidth - target.clientWidth);

    const bar = document.getElementById("mobile-scroll-progress");
    if (bar) {
      bar.style.width = `${progress * 100}%`;
    }
  };

  useEffect(() => {
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
    let rafId: number;

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
      rafId = requestAnimationFrame(tick);
    }

    rafId = requestAnimationFrame(tick);

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
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) return;
      if (Math.abs(e.deltaX) < 1) return;

      const modeMultiplier = e.deltaMode === WheelEvent.DOM_DELTA_LINE ? 16 : e.deltaMode === WheelEvent.DOM_DELTA_PAGE ? stage!.clientWidth : 1;
      velA = -e.deltaX * modeMultiplier * WHEEL_FACTOR;
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
      cancelAnimationFrame(rafId);
      if (wheelResumeTimer) window.clearTimeout(wheelResumeTimer);
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
        className="bg-bg-tint overflow-hidden py-20 md:py-28 lg:py-36"
      >
        {/* ── Header ── */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 mb-14 md:mb-20 lg:mb-24">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-500 mb-6 inline-flex items-center gap-2"
            >
              <span className="inline-block w-1 h-1 rounded-full bg-neutral-400" />
              Ecosystem
            </motion.p>

            <motion.h2
              id="services-heading"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-[32px] sm:text-[42px] lg:text-[56px] tracking-[-0.02em] leading-[1.05] text-neutral-900 mb-7 font-serif font-normal"
            >
              The SKT Mining
              <br />
              <span className="text-neutral-300">Ecosystem</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-[14px] sm:text-[15.5px] leading-[1.7] text-neutral-500 font-light max-w-2xl"
            >
              From underground production and engineering support to logistics, warehousing, workforce facilities and rescue systems, SKT operates an integrated mining ecosystem designed for scale, safety and continuous operations.
            </motion.p>
          </div>
        </div>

        {/* ── Mobile Slider ── */}
        <div
          onScroll={handleMobileScroll}
          className="block lg:hidden overflow-x-auto snap-x snap-mandatory scrollbar-none touch-auto px-5 pb-6"
        >
          <div className="flex gap-4">
            {CAPABILITIES.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={`mobile-${card.slug}-${i}`}
                  className="snap-start shrink-0 w-[280px] h-[420px] relative rounded-2xl overflow-hidden shadow-md flex flex-col justify-end p-6 bg-skt-navy border border-white/5 active:scale-[0.98] transition-transform duration-300"
                >
                  <div className="absolute inset-0 z-0">
                    <span className="sr-only">View {card.title}</span>
                    <ImageWithSkeleton
                      src={card.bgImage}
                      alt={card.title}
                      fill
                      sizes="280px"
                      className="object-cover opacity-60"
                      skeletonClassName="rounded-2xl"
                    />
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent pointer-events-none z-0" />

                  <div className="absolute top-5 left-5 right-5 flex items-center justify-between z-10 pointer-events-none">
                    <div className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 border border-white/15 text-white">
                      <Icon size={15} strokeWidth={1.5} />
                    </div>
                    <span className="text-[10px] font-medium tracking-[0.3em] text-white/55 tabular-nums">
                      {card.num}
                    </span>
                  </div>

                  <div className="relative z-10 flex flex-col pointer-events-none">
                    <h3 className="text-[17px] font-semibold tracking-tight text-white mb-2.5 leading-[1.25]">
                      {card.title}
                    </h3>
                    <p className="text-[11.5px] leading-[1.65] text-white/65 mb-4 line-clamp-2 font-light">
                      {card.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-5 pointer-events-auto">
                      {card.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="text-[9px] font-medium tracking-[0.15em] uppercase px-2.5 py-1 rounded-full text-white/85 bg-white/8 border border-white/12 min-h-[26px] flex items-center justify-center"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile Progress Bar */}
        <div className="lg:hidden flex justify-center items-center mt-3 mb-4">
          <div className="w-20 h-px bg-neutral-200/80 rounded-full overflow-hidden">
            <div
              id="mobile-scroll-progress"
              className="h-full bg-skt-navy transition-none"
              style={{ width: "0%" }}
            />
          </div>
        </div>

        {/* ── Desktop Slider Stage ── */}
        <div
          ref={stageRef}
          className="hidden lg:block relative select-none"
        >
          <div className="overflow-hidden py-5">
            <div
              ref={rowARef}
              className="flex"
              style={{ willChange: "transform" }}
            >
              {ROW_A.map((card, i) => (
                // Second half of ROW_A are visual clones for seamless infinite loop — hide from a11y/SEO
                <SliderCard
                  key={`a-${i}`}
                  card={card}
                  ariaHidden={i >= CAPABILITIES.length}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}