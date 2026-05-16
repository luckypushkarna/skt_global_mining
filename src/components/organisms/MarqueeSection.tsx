"use client";

import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "@/lib/constants";

export function MarqueeSection(): JSX.Element {
  const duplicated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="py-6 bg-neutral-900 overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 30,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-8 px-8"
          >
            <span className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-neutral-600 flex-shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
