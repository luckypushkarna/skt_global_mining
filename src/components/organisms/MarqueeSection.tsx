"use client";

import { motion } from "framer-motion";
import { MARQUEE_ITEMS } from "@/lib/constants";
import { JSX } from "react";

export function MarqueeSection(): JSX.Element {
  const duplicated = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div
      className="py-3 bg-skt-blue overflow-hidden"
      aria-hidden="true"
      role="presentation"
    >
      <motion.div
        className="flex w-max whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: 100,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        {duplicated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="inline-flex items-center gap-8 px-8"
          >
            <span className="text-xs font-semibold tracking-widest text-white uppercase">
              {item}
            </span>
            <span className="w-1 h-1 rounded-full bg-white flex-shrink-0" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
