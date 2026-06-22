"use client";

import { type JSX, useRef, useState, useEffect, useMemo } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

// ═══════════════════════════════════════════════════════════
//   SCROLL-TRIGGERED WORD REVEAL
//   Each word fades + lifts based on scroll position
// ═══════════════════════════════════════════════════════════

interface RevealTextProps {
  text: string;
  progress: any; // MotionValue from useScroll
}

function ScrollRevealText({ text, progress }: RevealTextProps): JSX.Element {
  const words = useMemo(() => text.split(" "), [text]);

  return (
    <span className="inline">
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;

        return (
          <Word key={i} progress={progress} range={[start, end]}>
            {word}
          </Word>
        );
      })}
    </span>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: any;
  range: [number, number];
}): JSX.Element {
  const opacity = useTransform(progress, range, [0.15, 1]);
  const y = useTransform(progress, range, [8, 0]);

  return (
    <span className="inline-block mr-[0.28em] overflow-hidden align-baseline">
      <motion.span
        style={{ opacity, y }}
        className="inline-block will-change-[transform,opacity]"
      >
        {children}
      </motion.span>
    </span>
  );
}

// ═══════════════════════════════════════════════════════════
//   MAIN SECTION
// ═══════════════════════════════════════════════════════════

export function ChairmanMessageSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteBlockRef = useRef<HTMLDivElement>(null);

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // ─── Image scroll motion ───
  const { scrollYProgress: imageScrollY } = useScroll({
    target: quoteBlockRef,
    offset: ["start 90%", "end 45%"],
  });

  const smoothImageProgress = useSpring(imageScrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const imageX = useTransform(
    smoothImageProgress,
    [0, 0.65],
    [isMobile ? "-30px" : "-80px", "0px"]
  );
  const imageOpacity = useTransform(smoothImageProgress, [0, 0.5], [0, 1]);

  // ─── Quote text scroll progress (word reveal) ───
  const quoteTextRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: textScrollY } = useScroll({
    target: quoteTextRef,
    offset: ["start 0.85", "start 0.25"],
  });

  const smoothTextProgress = useSpring(textScrollY, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  const quoteText =
    "We are not just building mining operations. We are building capability, opportunity, and a stronger future for Zambia.";

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 lg:py-36 bg-white"
      aria-labelledby="chairman-heading"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16">
        <motion.div
          ref={quoteBlockRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* ─── EYEBROW LABEL ─────────────────────────── */}
          <div className="flex items-center gap-3 mb-12 lg:mb-16">
            <div className="w-8 h-px bg-neutral-300" />
            <span
              id="chairman-heading"
              className="text-[10px] sm:text-[11px] font-semibold tracking-[0.3em] uppercase text-neutral-500"
            >
              From the Chairman
            </span>
          </div>

          {/* ─── CONTENT GRID ──────────────────────────── */}
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-16">

            {/* ─── LEFT: IMAGE ─────────────────────────── */}
            <motion.div
              style={{
                x: imageX,
                opacity: imageOpacity,
                willChange: "transform, opacity",
              }}
              className="w-full lg:col-span-5 lg:sticky lg:top-24"
            >
              <div className="relative w-full mx-auto max-w-[400px] lg:mx-0">
                {/* Subtle accent frame behind image */}
                <div className="absolute -bottom-3 -right-3 w-full h-full border border-neutral-200 rounded-sm -z-10" />

                {/* Image container */}
                <div className="relative w-full overflow-hidden rounded-sm aspect-[4/5] bg-neutral-100 max-h-[420px] lg:max-h-none">
                  <Image
                    alt="Raj Talreja - Chairman & Managing Director"
                    src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125409/skt_global_mining/Raj%20Sir%20Photo.webp"
                    fill
                    quality={100}
                    className="object-cover object-top"
                    sizes="(max-width:1024px) 100vw, 40vw"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            {/* ─── RIGHT: QUOTE ─────────────────────────── */}
            <div className="lg:col-span-7" ref={quoteTextRef}>

              {/* Opening quote mark */}
              <motion.div
                aria-hidden="true"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="select-none mb-2 text-neutral-200 font-serif text-[clamp(56px,9vw,110px)] leading-[0.7]"
              >
                &ldquo;
              </motion.div>

              <blockquote>
                {/* Scroll-revealed quote text */}
                <p className="m-0 leading-[1.45] font-sans text-[clamp(20px,2.4vw,30px)] font-normal tracking-[-0.01em] text-neutral-900 mb-10 lg:mb-12">
                  <ScrollRevealText
                    text={quoteText}
                    progress={smoothTextProgress}
                  />
                </p>

                {/* Attribution */}
                <motion.footer
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="pt-6 border-t border-neutral-200/80 max-w-full"
                >
                  <cite className="block not-italic font-medium font-sans text-[15px] sm:text-[16px] tracking-tight mb-1.5 text-neutral-900">
                    Raj Talreja
                  </cite>
                  <p className="text-[10px] sm:text-[11px] font-semibold tracking-[0.25em] uppercase text-neutral-500">
                    Chairman · SKT Global Mining &amp; Services
                  </p>
                </motion.footer>
              </blockquote>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}