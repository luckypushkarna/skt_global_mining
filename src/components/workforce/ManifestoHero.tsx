"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function ManifestoHero() {
  return (
    <section className="relative w-full min-h-[95vh] bg-zinc-950 text-white flex flex-col justify-between overflow-hidden">
      {/* Heavy grid texture overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-[0.07] pointer-events-none" />
      
      {/* Background B&W Portrait - positioned at the right on larger viewports */}
      <div className="absolute right-0 bottom-0 top-0 w-full lg:w-1/2 h-full opacity-40 lg:opacity-75 mix-blend-luminosity pointer-events-none z-0">
        <Image
          src="/Mulenga Mutati.webp"
          alt="Mulenga Mutati - Zambia Operations Chief"
          fill
          priority
          className="object-cover object-center lg:object-right-top"
          sizes="50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 lg:via-transparent to-zinc-950/20" />
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-zinc-950 to-transparent hidden lg:block" />
      </div>

      {/* Top Bar Info (Poster vibe) */}
      <div className="relative z-10 w-full border-b border-zinc-800/80 px-6 py-6 md:px-12 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <span className="font-mono text-[11px] font-bold tracking-[0.25em] text-sky-400 uppercase">
            ── WORKFORCE CAMPAIGN 2026
          </span>
        </div>
        <div className="font-mono text-[10px] text-zinc-500 tracking-widest uppercase">
          SKT SUStAINABILITY DIVISION · DOC. REF #WF-908
        </div>
      </div>

      {/* Main Poster Typography */}
      <div className="relative z-10 px-6 md:px-12 py-12 flex-1 flex flex-col justify-center max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-4"
        >
          {/* Subheading */}
          <span className="inline-block bg-sky-500 text-zinc-950 font-mono text-xs font-black tracking-widest px-3 py-1 uppercase">
            Our Greatest Asset Is Human
          </span>

          {/* Huge Poster Title */}
          <h1 className="text-[12vw] sm:text-[10vw] lg:text-[8vw] font-black leading-[0.85] tracking-tighter uppercase select-none">
            85% ZAMBIAN.
            <br />
            <span className="text-transparent stroke-text hover:text-sky-400 transition-colors duration-300">100% COMMITTED.</span>
          </h1>
        </motion.div>

        {/* Short Editorial Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-zinc-400 text-base md:text-lg font-light max-w-xl mt-8 leading-relaxed z-10"
        >
          We don&apos;t import expertise — we build it. By shifting leadership, engineering, 
          and operations to 85% domestic representation, SKT is ensuring the wealth 
          of Zambia remains in the hands of its people.
        </motion.p>
      </div>

      {/* Bottom Poster Footer */}
      <div className="relative z-10 w-full border-t border-zinc-800/80 px-6 py-8 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="flex gap-12 font-mono text-[10px] tracking-widest uppercase text-zinc-500">
          <div>
            <span className="block text-sky-400 font-bold mb-1">LOCATION</span>
            <span>COPPERBELT PROVINCE, ZAMBIA</span>
          </div>
          <div>
            <span className="block text-sky-400 font-bold mb-1">TOTAL EMPLOYEES</span>
            <span>1,420 FULL-TIME</span>
          </div>
        </div>

        <div className="text-right font-mono text-[10px] text-zinc-400 max-w-xs leading-normal">
          &ldquo;Skills built in Zambia, for Zambia. We are carving out the future of modern mining, together.&rdquo;
        </div>
      </div>

      {/* CSS details for Stroke text */}
      <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.8);
          color: transparent;
        }
      `}</style>
    </section>
  );
}
