"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export function HorizontalSlideCards() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of the section relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Map scroll progress to horizontal translation (sliding from left/right to center)
  // The cards start offset by 180px on desktop and converge smoothly as they scroll into view
  const xLeft = useTransform(scrollYProgress, [0.05, 0.45], [-180, 0]);
  const xRight = useTransform(scrollYProgress, [0.05, 0.45], [180, 0]);

  return (
    <section
      ref={containerRef}
      className="w-full py-24 bg-[#f8f9fc] overflow-hidden border-t border-neutral-100"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Card: Operational Footprint */}
          <motion.div
            style={{ x: xLeft }}
            className="flex flex-col bg-white rounded-3xl p-8 md:p-12 border border-neutral-200/60 shadow-sm justify-between min-h-[500px]"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-3">
                OPERATIONAL FOOTPRINT
              </span>
              <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                Our operations stretch across the value chain, from underground deep-shaft mining to modern mechanical operations, 
                including rapid equipment mobilization, high-capacity support warehousing, and advanced engineering workshops 
                in the Zambian Copperbelt.
              </p>
            </div>
            
            <div className="relative aspect-[1.8/1] w-full overflow-hidden rounded-2xl border border-neutral-100 shadow-inner">
              <Image
                src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=80"
                alt="Operational Footprint"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          {/* Right Card: Our Commitment */}
          <motion.div
            style={{ x: xRight }}
            className="flex flex-col bg-white rounded-3xl p-8 md:p-12 border border-neutral-200/60 shadow-sm justify-between min-h-[500px]"
          >
            <div className="flex flex-col">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-400 block mb-3">
                OUR COMMITMENT
              </span>
              <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mt-2 mb-8 leading-tight tracking-tight">
                Safety. Sustainability. Innovation.
              </h3>
            </div>
            
            <div className="relative aspect-[1.8/1] w-full overflow-hidden rounded-2xl border border-neutral-100 shadow-inner">
              <Image
                src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=80"
                alt="Our Commitment"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transform hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
