"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/atoms/Badge";

const STORY_PILLARS = [
  {
    id: "safety",
    number: "01",
    title: "Zero Harm. Always.",
    description:
      "Our zero-fatality philosophy isn't a target—it's a non-negotiable commitment woven into every decision, every process, and every shift. ISO 45001 certified across all operations.",
    metric: "Zero",
    metricLabel: "Fatal incidents since 2018",
  },
  {
    id: "innovation",
    number: "02",
    title: "Technology Drives Us.",
    description:
      "From AI-powered fleet management to real-time geological modeling and autonomous haulage systems, we deploy cutting-edge technology to maximize precision and minimize waste.",
    metric: "97%",
    metricLabel: "Fleet utilization rate",
  },
  {
    id: "people",
    number: "03",
    title: "People Are Our Ore.",
    description:
      "4,200+ skilled professionals. Extensive training programs. Career pathways built for growth. At SKT Global, every worker is an asset we invest in continuously.",
    metric: "4,200+",
    metricLabel: "Trained professionals globally",
  },
  {
    id: "sustainability",
    number: "04",
    title: "Planet. Promise. Progress.",
    description:
      "Net-zero Scope 1 & 2 commitment by 2040. Comprehensive land rehabilitation programs. Water stewardship frameworks. Mining that the next generation can be proud of.",
    metric: "2040",
    metricLabel: "Net-zero commitment year",
  },
] as const;

export function StorySection(): JSX.Element {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="py-section bg-neutral-50 overflow-hidden"
      aria-labelledby="story-heading"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Badge variant="dot" className="mb-6">
              Our Pillars
            </Badge>
          </motion.div>

          <motion.h2
            id="story-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg font-black text-neutral-900 tracking-tight leading-none"
          >
            What Makes Us
            <br />
            <span className="text-neutral-300">Different</span>
          </motion.h2>
        </div>

        {/* Pillars */}
        <div className="space-y-0">
          {STORY_PILLARS.map((pillar, index) => (
            <PillarItem key={pillar.id} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface PillarItemProps {
  readonly pillar: (typeof STORY_PILLARS)[number];
  readonly index: number;
}

function PillarItem({ pillar, index }: PillarItemProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-15%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-neutral-200 hover:border-neutral-400 transition-colors duration-300"
    >
      {/* Number */}
      <div className="md:col-span-1">
        <span className="text-xs font-bold tracking-widest text-neutral-300 group-hover:text-neutral-500 transition-colors duration-300">
          {pillar.number}
        </span>
      </div>

      {/* Title */}
      <div className="md:col-span-4">
        <h3 className="text-2xl md:text-3xl font-black text-neutral-900 tracking-tight leading-tight">
          {pillar.title}
        </h3>
      </div>

      {/* Description */}
      <div className="md:col-span-4">
        <p className="text-sm text-neutral-500 leading-relaxed">
          {pillar.description}
        </p>
      </div>

      {/* Metric */}
      <div className="md:col-span-3 flex flex-col items-start md:items-end justify-start">
        <span className="text-3xl font-black text-neutral-900 leading-none mb-1">
          {pillar.metric}
        </span>
        <span className="text-xs text-neutral-400 tracking-wide">
          {pillar.metricLabel}
        </span>
      </div>
    </motion.div>
  );
}
