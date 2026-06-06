"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ACCENT = {
  emerald: "bg-emerald-500",
  sky: "bg-sky-500",
  amber: "bg-amber-500",
};

interface Props {
  eyebrow: string;
  title: string;
  titleAccent: string;
  intro: string;
  image?: string;
  video?: string;
  accent: keyof typeof ACCENT;
}

export function PageHero({ eyebrow, title, titleAccent, intro, image, video, accent }: Props) {
  const dotClass = ACCENT[accent];
  const hasVideo = !!video;

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden bg-slate-950",
        hasVideo ? "min-h-[72vh] lg:min-h-[82vh] bg-black mt-16" : "min-h-[80vh] lg:min-h-[88vh]"
      )}
    >
      {/* Background Video or Image */}
      {hasVideo ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        image && (
          <Image
            src={image}
            alt=""
            fill
            priority
            className="object-cover opacity-50"
            sizes="100vw"
          />
        )
      )}

      {/* Overlays (only for images) */}
      {!hasVideo && (
        <>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/15" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/75 via-slate-950/20 to-transparent" />
        </>
      )}

      {/* Content */}
      <div
        className={cn(
          "relative z-10 max-w-7xl mx-auto px-6 lg:px-12 flex flex-col justify-end",
          hasVideo
            ? "min-h-[72vh] lg:min-h-[82vh] pb-16 lg:pb-24"
            : "min-h-[80vh] lg:min-h-[88vh] pb-18 lg:pb-26"
        )}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-2 mb-4"
        >
          <span
            className={cn(
              "w-1.5 h-1.5 rounded-full animate-pulse",
              hasVideo ? "bg-amber-500" : dotClass
            )}
          />
          <span
            className={cn(
              "text-[10px] font-semibold tracking-[0.25em] uppercase",
              hasVideo
                ? "text-white/95 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
                : "text-white/60"
            )}
          >
            {eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "tracking-tight",
            hasVideo
              ? "text-xl md:text-2xl font-semibold text-white mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              : "text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-7 leading-[1.02]"
          )}
        >
          {title}
          {hasVideo ? " " : <br />}
          <span
            className={cn(
              hasVideo
                ? "text-white/80 font-normal"
                : "text-white/35 font-light"
            )}
          >
            {titleAccent}
          </span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className={cn(
            "leading-relaxed",
            hasVideo
              ? "text-xs md:text-sm text-white/90 max-w-xl font-normal drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
              : "text-base lg:text-lg text-white/65 max-w-2xl pb-16 lg:pb-24 font-light"
          )}
        >
          {intro}
        </motion.p>
      </div>
    </section>
  );
}
