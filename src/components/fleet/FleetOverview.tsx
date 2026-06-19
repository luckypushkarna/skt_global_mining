"use client";

import { useRef, useEffect } from "react";
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { MECHANISED_FLEET } from "@/data/mechanised-fleet";

function AnimatedNumber({ value }: { value: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const numMatch = value.match(/(\d+)/);
  const targetNum = numMatch ? parseInt(numMatch[1], 10) : 0;
  
  const spring = useSpring(0, { duration: 2500, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current));

  useEffect(() => {
    if (isInView) {
      spring.set(targetNum);
    }
  }, [isInView, spring, targetNum]);

  if (!numMatch) return <span>{value}</span>;
  
  const prefix = value.substring(0, numMatch.index);
  const suffix = value.substring(numMatch.index! + numMatch[1].length);

  return (
    <span ref={ref}>
      {prefix}
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  );
}

export function FleetOverview() {
  const { overview } = MECHANISED_FLEET;

  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="max-w-7xl mx-auto px-5 lg:px-12 py-16 lg:py-24">

        {/* Body text */}
        <p className="text-base lg:text-lg text-slate-600 leading-relaxed font-light max-w-3xl mb-12 lg:mb-16">
          {overview.body}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-slate-200">
          {overview.stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className={`p-6 lg:p-8 border-b lg:border-b-0 border-slate-200 ${
                i < overview.stats.length - 1 ? "lg:border-r" : ""
              } ${i % 2 === 0 ? "border-r" : ""}`}
            >
              <p className="font-mono text-4xl lg:text-5xl font-medium text-slate-900 tabular-nums tracking-tight mb-4">
                <AnimatedNumber value={stat.value} />
              </p>
              <div className="h-px w-8 bg-amber-500 mb-3" />
              <p className="text-xs text-slate-500 leading-relaxed font-semibold uppercase tracking-wider">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
