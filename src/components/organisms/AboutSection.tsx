"use client";

import { useRef, JSX, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { MILESTONES } from "@/lib/constants";
import { containerVariants, itemVariants } from "@/lib/animations";
import { useIsMobile } from "@/hooks/useIsMobile";

function MilestoneDot({ index }: { index: number }) {
  return (
    <div className="stone-marker-gsap w-12 h-12 flex items-center justify-center select-none" data-index={index}>
      {/* Stone Marker WebP */}
      <div className="relative w-11 h-11">
        <Image
          src="/stone-marker-v2.webp"
          alt="Stone Marker"
          fill
          sizes="44px"
          className="object-contain filter drop-shadow-[0_4px_6px_rgba(0,0,0,0.15)]"
        />
      </div>
    </div>
  );
}

function TimelineCard({ milestone, isFinal }: { milestone: (typeof MILESTONES)[number], isFinal?: boolean }) {
  return (
    <div className={`w-full md:max-w-[92%] bg-white border rounded-2xl p-5 md:p-6 text-left transition-colors duration-300 ${
      isFinal 
        ? "border-skt-blue/30 shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-blue-50/20" 
        : "border-neutral-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
    }`}>
      <div className="flex items-start justify-between gap-4">
        <div className="space-y-1 flex-1">
          <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-skt-blue block mb-1">
            {milestone.year}
          </span>
          <h3 className="text-lg md:text-xl font-bold text-neutral-800 tracking-tight">
            {milestone.title}
          </h3>
        </div>
        {milestone.logo && (
          <div className="relative w-12 h-12 flex-shrink-0 rounded-xl bg-white border border-neutral-200/50 p-2 flex items-center justify-center overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]">
            <Image
              src={milestone.logo}
              alt={`${milestone.title} logo`}
              fill
              sizes="48px"
              className="object-contain p-1.5"
            />
          </div>
        )}
      </div>
      <p className="text-sm md:text-[14.5px] text-neutral-500 leading-relaxed mt-3.5">
        {milestone.description}
      </p>
    </div>
  );
}

export function AboutSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-10%" });
  const isMobile = useIsMobile();

  // Scroll animations for Header (matching the Chairman Image style)
  const headerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: headerScrollY } = useScroll({
    target: headerRef,
    offset: ["start 90%", "end 45%"],
  });

  const leftX = useTransform(headerScrollY, [0, 0.65], ["-120px", "0px"]);
  const leftOpacity = useTransform(headerScrollY, [0, 0.5], [0, 1]);

  const rightX = useTransform(headerScrollY, [0, 0.65], ["120px", "0px"]);
  const rightOpacity = useTransform(headerScrollY, [0, 0.5], [0, 1]);

  // Master GSAP Timeline for Vehicle AND Stones
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Configure ScrollTrigger globally for mobile optimizations
    ScrollTrigger.config({
      ignoreMobileResize: true,
    });

    const ctx = gsap.context(() => {
      const stones = gsap.utils.toArray<HTMLElement>(".stone-marker-gsap");
      const container = timelineRef.current;
      const excavator = document.querySelector(".excavator-vehicle") as HTMLElement;

      if (!container || !excavator || stones.length === 0) return;

      const mm = gsap.matchMedia();
      let activeTimeline: gsap.core.Timeline | null = null;
      let isDesktopMedia = false;

      const runAnimations = (isDesktop: boolean) => {
        const containerHeight = container.offsetHeight;

        // Reset elements to base state
        gsap.set(stones, { clearProps: "all" });
        gsap.set(excavator, { clearProps: "all" });
        gsap.set(excavator, { xPercent: -50, y: 0 });

        // Calibrate physical bucket offset and animation distance
        const vehicleOffset = 160;
        const totalDistance = containerHeight * 0.90 + vehicleOffset;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: isDesktop ? "top 80%" : "top 85%",
            end: isDesktop ? "bottom 20%" : "bottom 15%",
            scrub: isDesktop ? 1 : true, // Lock directly to scroll on mobile to avoid lag/stutter
            anticipatePin: isDesktop ? 1 : 0,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        // 2. Animate the vehicle starting from -vehicleOffset (above container) to containerHeight * 0.90
        // This keeps the bucket's starting position above the first stone, eliminating starting layout jumps.
        tl.to({}, { duration: 1 }); // Force duration to exactly 1.0
        tl.fromTo(excavator,
          { y: -vehicleOffset },
          { y: containerHeight * 0.90, ease: "none", duration: 0.90 },
          0
        );
        tl.fromTo(excavator, { opacity: 0 }, { opacity: 1, duration: 0.06, ease: "none" }, 0);
        tl.to(excavator, { opacity: 0, ease: "none", duration: 0.1 }, 0.90);

        // --- Tire Tracks Animation ---
        const trackWrapper = document.querySelector(".tire-tracks-wrapper") as HTMLElement;
        if (trackWrapper) {
          const wheelsOffset = vehicleOffset - 52; // 52px is approx vehicle height
          const wheelsAt0Time = (wheelsOffset / totalDistance) * 0.90;
          const finalTrackHeight = containerHeight * 0.90 + 52;

          tl.set(trackWrapper, { height: 0 }, 0);
          tl.fromTo(trackWrapper,
            { height: 0 },
            { height: finalTrackHeight, ease: "none", duration: 0.90 - wheelsAt0Time },
            wheelsAt0Time
          );
          tl.to(trackWrapper, { opacity: 0, duration: 0.1, ease: "none" }, 0.90);
        }

        stones.forEach((stone) => {
          // Calculate absolute vertical center coordinates of the stone
          let stoneCenterY = 0;
          let curr = stone as HTMLElement | null;
          while (curr && curr !== container) {
            stoneCenterY += curr.offsetTop || 0;
            curr = curr.offsetParent as HTMLElement | null;
          }
          stoneCenterY += stone.offsetHeight / 2;

          // 3. Contact & Collect: Offset by 24px so the rock goes inside the bucket (frunk)
          const bucketOffset = 24;
          const rawHitProgress = 0.90 * ((stoneCenterY + bucketOffset) / totalDistance);

          if (rawHitProgress < 0.90) {
            const durationDown = 0.90 - rawHitProgress;
            const y90 = totalDistance - stoneCenterY - bucketOffset;

            // Lock onto vehicle via GPU y transform at the exact hit moment
            tl.fromTo(stone,
              { y: 0, x: 0, rotation: 0 },
              { y: y90, ease: "none", duration: durationDown },
              rawHitProgress
            );

            // Final Scatter Asymmetrical Drop
            const dropX = gsap.utils.random(-35, 35);
            const dropRot = gsap.utils.random(-60, 60);
            const finalY = y90 + (0.05 * totalDistance) + gsap.utils.random(-15, 15);

            tl.to(stone, {
              y: finalY,
              x: dropX,
              rotation: dropRot,
              scale: isDesktop ? 0.8 : 0.7,
              ease: "power2.out",
              duration: 0.05,
            }, 0.90);

            // Fade out the stone smoothly
            tl.to(stone, {
              opacity: 0,
              ease: "none",
              duration: 0.1,
            }, 0.90);
          }
        });

        return tl;
      };

      const buildTimeline = () => {
        if (activeTimeline) {
          activeTimeline.revert(); // ⚡ CRITICAL FIX: Revert strips stale inline styles before remeasuring!
        }
        activeTimeline = runAnimations(isDesktopMedia);
      };

      // ── DESKTOP ─────────────────────────────────
      mm.add("(min-width: 1024px)", () => {
        isDesktopMedia = true;
        buildTimeline();
        ScrollTrigger.addEventListener("refresh", buildTimeline);
        return () => {
          ScrollTrigger.removeEventListener("refresh", buildTimeline);
          if (activeTimeline) activeTimeline.revert();
        };
      });

      // ── MOBILE ──────────────────────────────────
      mm.add("(max-width: 1023px)", () => {
        isDesktopMedia = false;
        buildTimeline();
        ScrollTrigger.addEventListener("refresh", buildTimeline);
        return () => {
          ScrollTrigger.removeEventListener("refresh", buildTimeline);
          if (activeTimeline) activeTimeline.revert();
        };
      });

    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-10 md:py-24 lg:py-32 bg-bg-soft overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div id="certifications" className="absolute top-0 left-0" />
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 mb-10 md:mb-16">
          {/* Left (Comes from Left) */}
          <motion.div
            style={isMobile ? {} : { x: leftX, opacity: leftOpacity }}
            {...(isMobile ? { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5 } } : {})}
          >
            <Badge variant="dot" className="mb-3 lg:mb-6 text-eyebrow">
              THE FOUNDATION
            </Badge>
            <h2
              id="about-heading"
              className="text-headline mb-4 lg:mb-8"
            >
              Built on Rock.
              <br />
              <span className="text-neutral-300">Built to Last.</span>
            </h2>
          </motion.div>

          {/* Right (Comes from Right) */}
          <motion.div
            style={isMobile ? {} : { x: rightX, opacity: rightOpacity }}
            {...(isMobile ? { initial: { opacity: 0, y: 16 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.5, delay: 0.1 } } : {})}
            className="flex flex-col justify-end"
          >
            <p className="text-body text-neutral-600 mb-4 lg:mb-8">
              {"SKT Global Mining & Services Limited was established as part of Tyre Technocrats India Private Limited's long-term strategic investment into Zambia's mining sector. From inception, the company's growth has been defined by speed, operational discipline, infrastructure development, and underground mining excellence."}
            </p>
            <Button
              variant="ghost"
              size="md"
              className="self-start"
            >
              <Link href="/about">Discover SKT →</Link>
            </Button>
          </motion.div>
        </div>

        {/* ─── Timeline ─────────────────────────────────────────── */}
        <div ref={timelineRef} id="history" className="relative">

          {/* Vertical track - faint guide line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-100 -translate-x-px md:-translate-x-1/2" />

          {/* CSS Tire Tracks Wrapper - Animating height via GSAP */}
          <div
            className="tire-tracks-wrapper absolute left-4 md:left-1/2 top-0 w-[24px] -translate-x-1/2 z-0 pointer-events-none flex justify-between"
            style={{
              marginTop: "-28px",
              height: 0
            }}
          >
            {/* Solid trail lines with dynamic gradient fade-out */}
            <div className="w-[4px] h-full rounded-sm" style={{ background: "linear-gradient(to bottom, rgba(176, 190, 197, 0.1) 0%, rgba(144, 164, 174, 0.8) 100%)" }} />
            <div className="w-[4px] h-full rounded-sm" style={{ background: "linear-gradient(to bottom, rgba(176, 190, 197, 0.1) 0%, rgba(144, 164, 174, 0.8) 100%)" }} />
          </div>

          {/* JCB vehicle - controlled entirely by GSAP now */}
          <div
            className="excavator-vehicle absolute left-4 md:left-1/2 top-0 z-10"
            style={{
              marginTop: "-28px", // Vertical alignment adjustment
            }}
          >
            {/* Drop shadow ring beneath vehicle */}
            <div
              className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
              style={{
                width: 40,
                height: 6,
                borderRadius: "50%",
                background: "rgba(0,0,0,0.12)",
                filter: "blur(3px)",
              }}
            />
            <Image
              src="/gaadi-jcb.webp"
              alt=""
              aria-hidden="true"
              width={52}
              height={52}
              className="object-contain w-[52px] h-auto select-none"
              priority
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTimelineInView ? "visible" : "hidden"}
            className="space-y-0"
          >
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;
              const isFinal = index === MILESTONES.length - 1;

              return (
                <motion.div
                  key={milestone.year}
                  variants={itemVariants}
                  className="relative z-40 grid grid-cols-1 md:grid-cols-2 md:gap-20 py-5 md:py-6"
                >
                  <div className={`${isEven ? "flex md:justify-end" : "hidden md:block"} pl-12 md:pl-0`}>
                    {isEven ? (
                      <TimelineCard milestone={milestone} isFinal={isFinal} />
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Center dot - absolutely positioned on timeline axis */}
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                    <MilestoneDot index={index} />
                  </div>

                  {/* ── RIGHT COLUMN ── */}
                  <div className={`${!isEven ? "hidden md:flex md:justify-start" : "hidden md:block"} md:pl-0`}>
                    {!isEven ? (
                      <TimelineCard milestone={milestone} isFinal={isFinal} />
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Mobile fallback: show card content for the hidden side on small screens */}
                  {!isEven && (
                    <div className="md:hidden pl-12">
                      <TimelineCard milestone={milestone} isFinal={isFinal} />
                    </div>
                  )}
                </motion.div>
              );
            })}
          </motion.div>

          {/* GSAP Target Coordinate Pile */}
          <div className="rock-pile-target absolute bottom-0 left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 -mb-8 z-0" />
        </div>
      </div>
    </section>
  );
}
