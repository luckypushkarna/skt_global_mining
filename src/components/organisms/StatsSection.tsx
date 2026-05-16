"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";
import { StatCard } from "@/components/molecules/StatCard";
import { STATS } from "@/lib/constants";

export function StatsSection(): JSX.Element {
  return (
    <section
      id="impact"
      className="py-section bg-white"
      aria-labelledby="stats-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="dot" className="mb-6">
              By the Numbers
            </Badge>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.h2
              id="stats-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-display-lg font-black text-neutral-900 tracking-tight leading-none"
            >
              Scale That
              <br />
              <span className="text-neutral-300">Speaks Volumes</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base text-neutral-500 leading-relaxed self-end max-w-lg"
            >
              Behind every metric is a team of dedicated professionals, a
              commitment to safety, and an unwavering focus on delivering
              results that matter to our clients and the communities we serve.
            </motion.p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Bottom quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-16 pt-12 border-t border-neutral-200"
        >
          <p className="text-display-md font-black text-neutral-900 leading-tight tracking-tight mb-6">
            &ldquo;We don&rsquo;t just extract minerals.{" "}
            <span className="text-neutral-300">
              We extract potential from the earth, and from our people.
            </span>
            &rdquo;
          </p>
          <footer className="flex items-center gap-4">
            <div className="w-10 h-10 border border-neutral-200 flex items-center justify-center">
              <span className="text-xs font-bold">SK</span>
            </div>
            <div>
              <cite className="not-italic text-sm font-bold text-neutral-900">
                S.K. Thakur
              </cite>
              <p className="text-xs text-neutral-400">
                Chairman & Managing Director, SKT Global
              </p>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  );
}
