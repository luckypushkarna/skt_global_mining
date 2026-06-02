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

export function AboutSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-10%" });

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
      syncInterval: 40,
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
        const cRect = container.getBoundingClientRect();
        const containerHeight = cRect.height;

        // Reset elements to base state
        gsap.set(stones, { clearProps: "all" });
        gsap.set(excavator, { clearProps: "all" });
        gsap.set(excavator, { xPercent: -50, y: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: isDesktop ? "top 80%" : "top 85%",
            end: isDesktop ? "bottom 20%" : "bottom 15%",
            scrub: isDesktop ? 1 : 2.0, // Smoother scrub on mobile (higher = smoother)
            anticipatePin: isDesktop ? 1 : 0,
            fastScrollEnd: true,
            invalidateOnRefresh: true,
          },
        });

        // 2. Animate the vehicle using GPU-accelerated y transform instead of top!
        tl.to({}, { duration: 1 }); // Force duration to exactly 1.0
        tl.fromTo(excavator, { y: 0 }, { y: containerHeight * 0.90, ease: "none", duration: 0.90 }, 0);
        tl.fromTo(excavator, { opacity: 0 }, { opacity: 1, duration: 0.06, ease: "none" }, 0);
        tl.to(excavator, { opacity: 0, ease: "none", duration: 0.1 }, 0.90);

        stones.forEach((stone) => {
          const sRect = stone.getBoundingClientRect();

          // Distance from top of container to center of the stone
          const stoneCenterY = (sRect.top + sRect.height / 2) - cRect.top;

          // 3. Contact & Collect: Offset calibrated exactly to the front loader bucket bounds!
          const rawHitProgress = (stoneCenterY - 160) / containerHeight;

          if (rawHitProgress < 0.90) {
            let startY = 0;
            let insertTime = rawHitProgress;
            let durationDown = 0.90 - rawHitProgress;
            let y90 = durationDown * containerHeight;

            // If mathematically the vehicle's offset is already past this stone at timeline 0,
            // we calculate the exact missed distance and pre-apply it so it syncs perfectly.
            if (rawHitProgress < 0) {
              startY = -rawHitProgress * containerHeight;
              insertTime = 0;
              durationDown = 0.90;
              y90 = startY + (0.90 * containerHeight);
            }

            // Stay stationary before hitProgress, then lock onto vehicle via GPU y transform
            tl.fromTo(stone,
              { y: startY, x: 0, rotation: 0 },
              { y: y90, ease: "none", duration: durationDown },
              insertTime
            );

            // Final Scatter Asymmetrical Drop (runs from 0.90 to 0.95 of timeline)
            const dropX = gsap.utils.random(-35, 35);
            const dropRot = gsap.utils.random(-60, 60);
            const finalY = (0.95 - rawHitProgress) * containerHeight + gsap.utils.random(-15, 15);

            tl.to(stone, {
              y: finalY,
              x: dropX,
              rotation: dropRot,
              scale: isDesktop ? 0.8 : 0.7, // slightly smaller on mobile to preserve memory/layout
              ease: "power2.out",
              duration: 0.05,
            }, 0.90);

            // Fade out the stone smoothly (runs from 0.90 to 1.0)
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
        if (activeTimeline) activeTimeline.kill();
        activeTimeline = runAnimations(isDesktopMedia);
      };

      // ── DESKTOP ─────────────────────────────────
      mm.add("(min-width: 1024px)", () => {
        isDesktopMedia = true;
        buildTimeline();
        ScrollTrigger.addEventListener("refresh", buildTimeline);
        return () => {
          ScrollTrigger.removeEventListener("refresh", buildTimeline);
          if (activeTimeline) activeTimeline.kill();
        };
      });

      // ── MOBILE ──────────────────────────────────
      mm.add("(max-width: 1023px)", () => {
        isDesktopMedia = false;
        buildTimeline();
        ScrollTrigger.addEventListener("refresh", buildTimeline);
        return () => {
          ScrollTrigger.removeEventListener("refresh", buildTimeline);
          if (activeTimeline) activeTimeline.kill();
        };
      });

    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative pt-24 pb-16 bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div id="certifications" className="absolute top-0 left-0" />
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left (Comes from Left) */}
          <motion.div
            style={{ x: leftX, opacity: leftOpacity }}
          >
            <Badge variant="dot" className="mb-6">
              THE FOUNDATION
            </Badge>
            <h2
              id="about-heading"
              className="text-display-lg font-black text-neutral-900 tracking-tight leading-none mb-8"
            >
              Built on Rock.
              <br />
              <span className="text-neutral-300">Built to Last.</span>
            </h2>
          </motion.div>

          {/* Right (Comes from Right) */}
          <motion.div
            style={{ x: rightX, opacity: rightOpacity }}
            className="flex flex-col justify-end"
          >
            <p className="text-base text-neutral-500 leading-relaxed mb-8">
              SKT Global Mining & Services Limited was established as part of Tyre Technocrats India Private Limited’s long-term strategic investment into Zambia’s mining sector. From inception, the company’s growth has been defined by speed, operational discipline, infrastructure development, and underground mining excellence.
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

        {/* Timeline */}
        <div ref={timelineRef} id="history" className="relative">
          {/* Sticky Counter Badge */}

          {/* Vertical track — faint guide line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-neutral-100 -translate-x-px md:-translate-x-1/2" />

          {/* JCB vehicle — controlled entirely by GSAP now */}
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

              return (
                <motion.div
                  key={milestone.year}
                  variants={itemVariants}
                  // ADDED z-40 here so the row's stacking context is significantly higher than the z-10 vehicle
                  className={`relative z-40 grid grid-cols-1 md:grid-cols-2 gap-8 py-12 ${isEven ? "" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content */}
                  <div
                    className={`${isEven
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                      } pl-12 md:pl-0`}
                  >
                    <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase block mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Center dot — explicitly brought to z-50 to ensure it is in FRONT of the bucket */}
                  <div className="absolute left-4 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-50">
                    <MilestoneDot index={index} />
                  </div>
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
