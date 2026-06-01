"use client";

import * as React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export interface MagicTextProps {
  text: string;
  className?: string | undefined;
  wordClassName?: string | undefined;
  style?: React.CSSProperties | undefined;
}

interface WordProps {
  children: string;
  progress: any;
  range: number[];
  className?: string | undefined;
}

const Word: React.FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0, 1]);

  return (
    <span className={`relative ${className || "mt-[12px] mr-1 text-3xl font-semibold"}`}>
      <span className="absolute opacity-20 select-none" aria-hidden="true">
        {children}
      </span>
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
};

export const MagicText: React.FC<MagicTextProps> = ({
  text,
  className,
  wordClassName,
  style,
}) => {
  const container = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start 0.95", "start 0.4"], // Shifted offset to light up words smoothly over a wider scrolling window
  });

  const words = text.split(" ");

  return (
    <p
      ref={container}
      className={className || "flex flex-wrap leading-[0.5] p-4"}
      style={style}
    >
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
        const isMinerals = word === "minerals.";

        return (
          <React.Fragment key={i}>
            <Word
              progress={scrollYProgress}
              range={[start, end]}
              className={wordClassName}
            >
              {word + (i === words.length - 1 ? "" : " ")}
            </Word>
            {isMinerals && <br className="hidden md:inline" />}
          </React.Fragment>
        );
      })}
    </p>
  );
};
