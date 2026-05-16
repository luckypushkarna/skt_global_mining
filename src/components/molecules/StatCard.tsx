"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import type { Stat } from "@/types";

interface StatCardProps {
  readonly stat: Stat;
  readonly index: number;
  readonly className?: string;
}

export function StatCard({
  stat,
  index,
  className,
}: StatCardProps): JSX.Element {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={cn(
        "group p-8 border-t border-neutral-200",
        "hover:border-neutral-900 transition-colors duration-300",
        className
      )}
    >
      {/* Value */}
      <div className="flex items-baseline gap-1 mb-2">
        {stat.prefix && (
          <span className="text-2xl font-medium text-neutral-400">
            {stat.prefix}
          </span>
        )}
        <motion.span
          className="text-5xl md:text-6xl font-black text-neutral-900 tracking-tight leading-none"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
          }
          transition={{
            duration: 0.5,
            delay: index * 0.1 + 0.2,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        >
          {stat.value}
        </motion.span>
        {stat.suffix && (
          <span className="text-2xl font-bold text-neutral-400">
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <h3 className="text-sm font-semibold text-neutral-900 tracking-widest uppercase mb-1">
        {stat.label}
      </h3>

      {/* Description */}
      {stat.description && (
        <p className="text-xs text-neutral-400 leading-relaxed">
          {stat.description}
        </p>
      )}
    </motion.div>
  );
}
