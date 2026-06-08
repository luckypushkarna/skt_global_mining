"use client";

import { JSX, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const CATEGORIES = [
  "Engineering",
  "Underground Mining",
  "Safety",
  "Mechanical",
  "Electrical",
  "HR",
  "Operations",
  "Finance",
];

const METRICS = [
  { value: "1,500+", label: "Employees" },
  { value: "225", label: "Modern Machines" },
  { value: "20+", label: "Disciplines" },
  { value: "4", label: "Countries" },
] as const;

const EMPLOYEE_CARDS = [
  {
    role: "Mining Engineer",
    dept: "Underground Operations",
    img: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&auto=format&fit=crop&q=80",
  },
  {
    role: "HSE Director",
    dept: "Safety & Compliance",
    img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=80",
  },
  {
    role: "Operations Supervisor",
    dept: "Logistics Hub",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=80",
  },
] as const;

export function CareersHero(): JSX.Element {
  const heroRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    let ctx: { revert: () => void } | null = null;
    let mounted = true;
    const init = async () => {
      const gsap = (await import("gsap")).default;

      if (!mounted) return;

      ctx = gsap.context(() => {
        // Subtle floating behavior for employee cards and metrics
        gsap.to(".floating-card-1", {
          y: -15,
          duration: 3.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".floating-card-2", {
          y: 15,
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".floating-card-3", {
          y: -10,
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".floating-metric-1", {
          y: -12,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
        gsap.to(".floating-metric-2", {
          y: 12,
          duration: 3.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }, heroRef);
    };

    init();
    return () => {
      mounted = false;
      ctx?.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-[70vh] flex items-center bg-neutral-50 overflow-hidden py-10 md:py-12"
    >
      {/* Background blueprint/industrial grid */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-neutral-200/40 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-neutral-200/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-screen-xl mx-auto px-6 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE: Content and Search */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] font-bold tracking-[0.25em] text-neutral-400 uppercase border border-neutral-200 bg-white"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
                Build with SKT Global
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="text-display-md md:text-display-lg font-black text-neutral-900 leading-none tracking-tight"
              >
                Build the <br />
                Future of <span className="text-neutral-300">Mining.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-base text-neutral-500 max-w-xl leading-relaxed"
              >
                Join a world-class team driving safer, smarter, and more sustainable
                mining operations across Zambia and beyond.
              </motion.p>
            </div>



            {/* Quick Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-3 pt-1"
            >
              <span className="text-[9px] font-bold tracking-[0.2em] text-neutral-400 uppercase">
                Popular:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => {
                      const params = new URLSearchParams();
                      params.set("q", cat);
                      window.history.pushState({}, "", `${window.location.pathname}?${params.toString()}`);
                      window.dispatchEvent(new Event("job-search-updated"));
                      document.getElementById("open-jobs")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-neutral-500 hover:text-neutral-900 bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-200/30 rounded transition-all duration-200"
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </motion.div>
          </div>

          {/* RIGHT SIDE: Layered Visual Cards */}
          <div className="lg:col-span-6 relative h-[440px] md:h-[480px] flex items-center justify-center">

            {/* Background layered shape */}
            <div className="absolute w-[80%] aspect-square border border-neutral-200/50 rounded-full pointer-events-none" />
            <div className="absolute w-[60%] aspect-square border border-neutral-200/30 rounded-full pointer-events-none" />

            {/* Card 1: Top-Left (Underground Miner) */}
            <div
              className="floating-card-1 absolute top-[10%] left-[5%] w-[45%] aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-2xl z-20 group cursor-default"
            >
              <div className="relative w-full h-full">
                <Image
                  src={EMPLOYEE_CARDS[0].img}
                  alt={EMPLOYEE_CARDS[0].role}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[9px] font-bold tracking-widest text-neutral-300 uppercase">
                    {EMPLOYEE_CARDS[0].dept}
                  </p>
                  <h4 className="text-sm font-bold tracking-tight">
                    {EMPLOYEE_CARDS[0].role}
                  </h4>
                </div>
              </div>
            </div>

            {/* Card 2: Center-Right (HSE Control Room) */}
            <div
              className="floating-card-2 absolute top-[20%] right-[5%] w-[42%] aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-2xl z-10 group cursor-default"
            >
              <div className="relative w-full h-full">
                <Image
                  src={EMPLOYEE_CARDS[1].img}
                  alt={EMPLOYEE_CARDS[1].role}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[9px] font-bold tracking-widest text-neutral-300 uppercase">
                    {EMPLOYEE_CARDS[1].dept}
                  </p>
                  <h4 className="text-sm font-bold tracking-tight">
                    {EMPLOYEE_CARDS[1].role}
                  </h4>
                </div>
              </div>
            </div>

            {/* Card 3: Bottom-Center (Supervisor Team) */}
            <div
              className="floating-card-3 absolute bottom-[10%] left-[20%] w-[40%] aspect-[4/5] rounded-2xl overflow-hidden bg-white border border-neutral-200 shadow-2xl z-20 group cursor-default"
            >
              <div className="relative w-full h-full">
                <Image
                  src={EMPLOYEE_CARDS[2].img}
                  alt={EMPLOYEE_CARDS[2].role}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[9px] font-bold tracking-widest text-neutral-300 uppercase">
                    {EMPLOYEE_CARDS[2].dept}
                  </p>
                  <h4 className="text-sm font-bold tracking-tight">
                    {EMPLOYEE_CARDS[2].role}
                  </h4>
                </div>
              </div>
            </div>

            {/* Glassmorphism Metric 1: Top-Right */}
            <div
              className="floating-metric-1 absolute top-[8%] right-[10%] z-30 bg-white/70 backdrop-blur-md border border-white/80 px-4 py-3 rounded-xl shadow-xl select-none"
            >
              <span className="block text-2xl font-black text-neutral-900 leading-none">
                {METRICS[0].value}
              </span>
              <span className="text-[9px] font-bold tracking-wider text-neutral-400 uppercase mt-1 block">
                {METRICS[0].label}
              </span>
            </div>

            {/* Glassmorphism Metric 2: Bottom-Right */}
            <div
              className="floating-metric-2 absolute bottom-[25%] right-[12%] z-30 bg-white/70 backdrop-blur-md border border-white/80 px-4 py-3 rounded-xl shadow-xl select-none"
            >
              <span className="block text-2xl font-black text-neutral-900 leading-none">
                {METRICS[1].value}
              </span>
              <span className="text-[9px] font-bold tracking-wider text-neutral-400 uppercase mt-1 block">
                {METRICS[1].label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
