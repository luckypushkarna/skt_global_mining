"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode, useState, useEffect, JSX } from "react";
import { cn } from "@/lib/utils";

interface AnimatedTextProps {
  readonly children: ReactNode;
  readonly className?: string;
  readonly delay?: number;
  readonly once?: boolean;
  readonly as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

interface WordProps {
  readonly children: string;
  readonly delay: number;
}

function Word({ children, delay }: WordProps): JSX.Element {
  return (
    <span className="inline-block overflow-hidden">
      <motion.span
        className="inline-block"
        initial={{ y: "100%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration: 0.7,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function AnimatedText({
  children,
  className,
  delay = 0,
  once = true,
  as: Tag = "p",
}: AnimatedTextProps): JSX.Element {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-10%" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const text = typeof children === "string" ? children : "";
  const words = text.split(" ");

  return (
    <div ref={ref}>
      <Tag className={cn("flex flex-wrap gap-x-[0.25em]", className)}>
        {isMounted && isInView &&
          words.map((word, i) => (
            <Word key={`${word}-${i}`} delay={delay + i * 0.05}>
              {word}
            </Word>
          ))}
        {(!isMounted || !isInView) && (
          <span className="invisible">{text}</span>
        )}
      </Tag>
    </div>
  );
}
