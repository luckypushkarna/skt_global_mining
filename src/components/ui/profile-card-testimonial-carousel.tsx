"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialCarouselProps {
  className?: string;
}

export function TestimonialCarousel({ className }: TestimonialCarouselProps) {
  const chairperson = {
    name: "Mr. Raj Kumar",
    title: "Chairperson, SKT Global Mining & Services Limited",
    imageUrl: "/Raj Sir Photo.webp",
    linkedinUrl: "https://linkedin.com",
  };

  return (
    <div className={cn("w-full", className)}>
      {/* ── Asymmetric 2-column enterprise grid ── */}
      <div className="flex flex-col lg:flex-row w-full min-h-[580px] lg:min-h-[640px]">

        {/* ── LEFT: Portrait Column ── */}
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full lg:w-[42%] flex-shrink-0 rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none overflow-hidden"
          style={{
            background: "linear-gradient(160deg, #1a1f2e 0%, #0f1318 40%, #1c2235 70%, #111827 100%)",
          }}
        >
          {/* Subtle metallic texture overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 30% 80%, rgba(148,163,184,0.07) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 70% 20%, rgba(100,116,139,0.05) 0%, transparent 50%)",
            }}
          />

          {/* Portrait image — fills the column, blended at bottom */}
          <div className="relative w-full h-full min-h-[420px] lg:min-h-[640px]">
            <Image
              src={chairperson.imageUrl}
              alt={chairperson.name}
              fill
              className="object-cover object-top"
              draggable={false}
              priority
            />
            {/* Bottom gradient blends photo into the column color */}
            <div
              className="absolute inset-x-0 bottom-0 h-40 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to top, #0f1318 0%, rgba(15,19,24,0.6) 60%, transparent 100%)",
              }}
            />
          </div>

          {/* Bottom-left label anchored above fade */}
          <div className="absolute bottom-7 left-8">
            <span className="inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.15em] uppercase text-slate-400/70">
              <span className="w-4 h-px bg-slate-500/60 inline-block" />
              SKT Global Mining
            </span>
          </div>
        </motion.div>

        {/* ── RIGHT: Statement & Bio Column ── */}
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="relative flex flex-col justify-between w-full lg:w-[58%] rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none px-8 py-10 md:px-14 md:py-14"
          style={{
            background: "linear-gradient(145deg, #141920 0%, #0d1117 50%, #111827 100%)",
          }}
        >
          {/* Subtle diagonal rule accent */}
          <div
            className="absolute top-0 right-0 w-48 h-48 pointer-events-none opacity-[0.04]"
            style={{
              background:
                "radial-gradient(circle at top right, #94a3b8 0%, transparent 70%)",
            }}
          />

          {/* ── Top section: category tag ── */}
          <div>
            <div className="flex items-center gap-3 mb-10">
              <span className="w-6 h-px bg-slate-500" />
              <span className="text-eyebrow text-slate-500">
                Chairperson&apos;s Message
              </span>
            </div>

            {/* ── Quote block ── */}
            <div className="mb-10">
              {/* Large decorative opening quotation mark */}
              <div
                className="text-slate-600/50 select-none leading-none mb-3"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(60px, 8vw, 96px)",
                  lineHeight: 0.8,
                }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* The actual quote — clean sans, no word-span gimmicks */}
              <blockquote
                style={{
                  fontFamily: "var(--font-sans), 'Inter', sans-serif",
                  fontSize: "clamp(22px, 2.6vw, 36px)",
                  fontWeight: 300,
                  lineHeight: 1.38,
                  letterSpacing: "-0.01em",
                  color: "rgb(226, 232, 240)",
                }}
              >
                We don&apos;t just extract minerals. We extract potential from the earth,
                and from our people.
              </blockquote>

              {/* Closing mark */}
              <div
                className="text-slate-600/50 select-none leading-none mt-1 text-right"
                style={{
                  fontFamily: "Georgia, serif",
                  fontSize: "clamp(60px, 8vw, 96px)",
                  lineHeight: 0.8,
                }}
                aria-hidden="true"
              >
                &rdquo;
              </div>
            </div>
          </div>

          {/* ── Bottom section: name, title, social icon ── */}
          <div>
            {/* Thin rule separator */}
            <div className="w-full h-px bg-slate-700/50 mb-8" />

            <div className="flex items-end justify-between gap-6">
              {/* Identity */}
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-white tracking-tight mb-1">
                  {chairperson.name}
                </h2>
                <p className="text-eyebrow text-slate-400 max-w-xs leading-relaxed">
                  {chairperson.title}
                </p>
              </div>

              {/* LinkedIn icon — clean circular white button */}
              <Link
                href={chairperson.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex-shrink-0 w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all duration-200 hover:bg-white hover:text-slate-900 hover:scale-105 hover:border-white"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
}
