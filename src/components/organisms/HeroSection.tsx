"use client";

import { useRef, useMemo, JSX } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/atoms/Badge";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";

export function HeroSection(): JSX.Element {
  const containerRef = useRef<HTMLElement>(null);

  // Refs for GSAP
  const headline1Ref = useRef<HTMLHeadingElement>(null);
  const headline2Ref = useRef<HTMLHeadingElement>(null);
  const headline3Ref = useRef<HTMLHeadingElement>(null);
  const ofMiningRef = useRef<HTMLDivElement>(null);
  const ofMiningLineRef = useRef<HTMLDivElement>(null);
  const ofMiningTextRef = useRef<HTMLSpanElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);
  const logosRef = useRef<HTMLDivElement>(null);

  const animationRefs = useMemo(() => ({
    headline1Ref,
    headline2Ref,
    headline3Ref,
    ofMiningRef,
    ofMiningLineRef,
    ofMiningTextRef,
    paragraphRef,
    buttonsRef,
    metricsRef,
    logosRef,
  }), []);

  useHeroAnimation(animationRefs);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 250]); // slightly slower than background
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Ambient mouse light effect
  const glowRef = useRef<HTMLDivElement>(null);
  const handleMouseMove = (e: React.MouseEvent) => {
    const glow = glowRef.current;
    if (!glow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    glow.style.setProperty("--mouse-x", `${x}px`);
    glow.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505]"
      aria-label="Hero section"
    >
      {/* Background Video with Parallax & Interaction Overlays */}
      <motion.div style={{ y: videoY }} className="absolute inset-0 z-0 origin-top will-change-transform">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="/videos/hero-background-optimized.mp4" type="video/mp4" />
        </video>
        {/* Dynamic vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_100%)] opacity-80" />
      </motion.div>

      {/* Mouse reactive ambient glow */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-30"
        style={{
          background: `radial-gradient(800px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255,255,255,0.06), transparent 40%)`
        }}
      />

      {/* Left accent line */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-px bg-white/10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        style={{ originY: 0 }}
        aria-hidden="true"
      />

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-screen-xl mx-auto px-6 lg:px-12 pt-32 pb-20 w-full"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-8 inline-block"
        >
          <Badge variant="outline" className="text-white/80 border-white/20 backdrop-blur-md px-4 py-1.5 shadow-[0_0_15px_rgba(255,255,255,0.05)]">
            MINING OPERATIONS · ZAMBIA
          </Badge>
        </motion.div>

        {/* Cinematic Typography System */}
        <div className="flex flex-col mb-12">
          {/* Line 1 */}
          <div className="overflow-hidden pb-2 -mb-2">
            <h1
              ref={headline1Ref}
              className="text-display-lg font-black text-white leading-[0.9] tracking-tighter"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 120%, 0 120%)" }}
            >
              Engineering
            </h1>
          </div>

          {/* Line 2 with micro-interaction text */}
          <div className="flex items-end gap-6 flex-wrap overflow-hidden pb-2 -mb-2 mt-1">
            <h1
              ref={headline2Ref}
              className="text-display-lg font-black text-white leading-[0.9] tracking-tighter"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 120%, 0 120%)" }}
            >
              The Future
            </h1>

            <div
              ref={ofMiningRef}
              className="hidden md:flex items-center gap-4 mb-4 ml-2"
            >
              <div
                ref={ofMiningLineRef}
                className="w-16 h-[2px] bg-white/40 shadow-[0_0_8px_rgba(255,255,255,0.3)] origin-left"
                style={{ transformOrigin: "0% 50%" }}
              />
              <span
                ref={ofMiningTextRef}
                className="text-xs font-bold tracking-[0.15em] text-white/60 uppercase"
              >
                of Mining
              </span>
            </div>
          </div>

          {/* Line 3 */}
          <div className="overflow-hidden pb-2 -mb-2 mt-1">
            <h1
              ref={headline3Ref}
              className="text-display-lg font-black text-white/30 leading-[0.9] tracking-tighter mix-blend-plus-lighter"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 120%, 0 120%)" }}
            >
              Underground
            </h1>
          </div>
        </div>

        {/* Description & CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mt-4">
          <div className="flex flex-col gap-6">
            <p
              ref={paragraphRef}
              className="text-sm md:text-base text-white/70 leading-relaxed max-w-lg font-medium"
              style={{ clipPath: "polygon(0 0, 100% 0, 100% 120%, 0 120%)" }}
            >
              Supporting large-scale underground mining operations at Mopani Copper Mines through mechanisation, infrastructure, workforce development, and operational excellence.
            </p>
            <div ref={logosRef} className="flex items-center gap-5 mt-2">
              <div className="inline-block relative h-8 w-32">
                <Image 
                  src="/mopani-logo.webp" 
                  alt="Mopani Copper Mines Logo" 
                  fill
                  sizes="(max-width: 768px) 128px, 128px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="h-5 w-px bg-white/10" />
              <div className="inline-block relative h-8 w-20">
                <Image 
                  src="/irh-logo.webp" 
                  alt="IRH Logo" 
                  fill
                  sizes="(max-width: 768px) 80px, 80px"
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          <div ref={buttonsRef} className="hidden" />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 mix-blend-screen"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={14} className="text-white/50" />
        </motion.div>
        <span className="text-[9px] tracking-[0.3em] text-white/40 uppercase font-bold">
          Scroll
        </span>
      </motion.div>

      {/* Cinematic Top/Bottom Gradients for deep black fade */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#050505] to-transparent z-0 opacity-80" />
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-0 opacity-90" />
    </section>
  );
}
