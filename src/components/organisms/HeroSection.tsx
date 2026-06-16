"use client";

import { useRef, useMemo, JSX, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import { MarqueeSection } from "@/components/organisms/MarqueeSection";

export function HeroSection(): JSX.Element {
  const containerRef = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Refs for GSAP
  const headline1Ref = useRef<HTMLHeadingElement>(null);
  const headline2Ref = useRef<HTMLHeadingElement>(null);
  const headline3Ref = useRef<HTMLHeadingElement>(null);

  const buttonsRef = useRef<HTMLDivElement>(null);
  const metricsRef = useRef<HTMLDivElement>(null);

  const animationRefs = useMemo(() => ({
    headline1Ref,
    headline2Ref,
    headline3Ref,

    buttonsRef,
    metricsRef,
  }), []);

  useHeroAnimation(animationRefs);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 350]); // translate further down to sink to the bottom
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]); // fade away in sync with first fold scroll
  const videoY = useTransform(scrollYProgress, [0, 1], [0, 120]);

  // Ambient mouse light effect optimized with RAF
  const glowRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile) return;
    const glow = glowRef.current;
    if (!glow) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      glow.style.setProperty("--mouse-x", `${x}px`);
      glow.style.setProperty("--mouse-y", `${y}px`);
    });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[#050505]"
      aria-label="Hero section"
    >
      <motion.div style={isMobile ? {} : { y: videoY }} className="absolute inset-0 z-0 origin-top will-change-transform">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload={isMobile ? "metadata" : "auto"}
          className="w-full h-full object-cover object-center opacity-60"
        >
          <source src="/videos/skt-global-hero-optimized.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* Mouse reactive ambient glow */}
      {!isMobile && (
        <div
          ref={glowRef}
          className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-300 opacity-30"
          style={{
            background: `radial-gradient(800px circle at var(--mouse-x, -1000px) var(--mouse-y, -1000px), rgba(255,255,255,0.06), transparent 40%)`
          }}
        />
      )}

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
        style={isMobile ? {} : { y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 lg:px-16 pt-32 pb-20 w-full"
      >


        {/* Cinematic Typography System */}
        <div className="flex flex-col mb-6">
          <div className="overflow-hidden pb-2 -mb-2">
            <h1
              ref={headline1Ref}
              className="text-[36px] md:text-[40px] text-white font-extrabold leading-[1.1] tracking-[-0.02em]"
            >
              Powering Zambia&apos;s<br />Copper Future{" "}
              <span className="relative inline-block font-serif italic font-medium tracking-normal text-[1.05em] ml-1" style={{ isolation: "isolate" }}>
                <span className="absolute inset-0 text-white" aria-hidden="true" style={{ WebkitTextStroke: "1px white" }}>
                  Today
                </span>
                <span className="absolute inset-0 text-black" aria-hidden="true" style={{ mixBlendMode: "destination-out" as any }}>
                  Today
                </span>
                <span className="relative text-white/20">
                  Today
                </span>
              </span>
            </h1>
            <div ref={headline2Ref} className="hidden" aria-hidden="true"></div>
            <div ref={headline3Ref} className="hidden" aria-hidden="true"></div>
          </div>
        </div>

        {/* Description & Logos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-end mt-2">
          <div className="flex flex-col gap-6">
            <p className="text-white/80 text-lg md:text-xl font-light leading-relaxed max-w-xl">
              Delivering world-class underground mining solutions through skilled people, operational excellence, and continuous innovation.
            </p>
          </div>

          <div ref={buttonsRef} className="flex flex-row items-center gap-4 sm:gap-5 flex-wrap lg:justify-end">
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
            <div className="block h-5 w-px bg-white/10" />
            <div className="inline-block relative h-12 w-28">
              <Image
                src="/irh-logo.webp"
                alt="IRH Logo"
                fill
                sizes="(max-width: 768px) 112px, 112px"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </motion.div>



      {/* Cinematic Bottom Gradient for deep black fade */}
      <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-[#050505] to-transparent z-0 opacity-90" />

      {/* Marquee at the bottom of the first fold */}
      <div className="absolute bottom-0 inset-x-0 z-20">
        <MarqueeSection />
      </div>
    </section>
  );
}
