"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/atoms/Badge";
import { Button } from "@/components/atoms/Button";
import { MILESTONES } from "@/lib/constants";
import { containerVariants, itemVariants } from "@/lib/animations";

export function AboutSection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-10%" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0.1, 0.9], ["0%", "100%"]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-section bg-white overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Badge variant="dot" className="mb-6">
              Our Foundation
            </Badge>
            <h2
              id="about-heading"
              className="text-display-lg font-black text-neutral-900 tracking-tight leading-none mb-8"
            >
              Built on Rock.
              <br />
              <span className="text-neutral-300">Built to Last.</span>
            </h2>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end"
          >
            <p className="text-base text-neutral-500 leading-relaxed mb-4">
              Since 2005, SKT Global Mining & Services Limited has grown from a
              single coal mining contract in Jharkhand to a multinational
              industrial powerhouse operating across 8 countries.
            </p>
            <p className="text-base text-neutral-500 leading-relaxed mb-8">
              Our journey is defined not just by tonnes extracted, but by
              communities strengthened, environments protected, and engineering
              standards elevated across every operation we undertake.
            </p>
            <Button
              variant="ghost"
              size="md"
              rightIcon={<ArrowRight size={14} />}
              className="self-start"
            >
              <Link href="/about">Read Our Full Story</Link>
            </Button>
          </motion.div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-neutral-100 -translate-x-px md:-translate-x-1/2">
            <motion.div
              className="absolute top-0 left-0 right-0 bg-neutral-300"
              style={{ height: lineHeight }}
            />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isTimelineInView ? "visible" : "hidden"}
            className="space-y-0"
          >
            {MILESTONES.map((milestone, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={milestone.year}
                  variants={itemVariants}
                  className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 py-12 ${isEven ? "" : "md:flex-row-reverse"
                    }`}
                >
                  {/* Content */}
                  <div
                    className={`${isEven
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                      } pl-8 md:pl-0`}
                  >
                    <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase block mb-2">
                      {milestone.year}
                    </span>
                    <h3 className="text-xl font-bold text-neutral-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Center dot */}
                  <div className="absolute left-0 md:left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      className="w-3 h-3 rounded-full bg-white border-2 border-neutral-900"
                      whileInView={{ scale: [0, 1.2, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
