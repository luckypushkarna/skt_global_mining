"use client";

import { useState, useEffect, useCallback } from "react";
import { clamp } from "@/lib/utils";

interface UseScrollProgressReturn {
  readonly progress: number;
  readonly scrollY: number;
  readonly direction: "up" | "down" | "idle";
  readonly isAtTop: boolean;
  readonly isAtBottom: boolean;
}

export function useScrollProgress(): UseScrollProgressReturn {
  const [state, setState] = useState<UseScrollProgressReturn>({
    progress: 0,
    scrollY: 0,
    direction: "idle",
    isAtTop: true,
    isAtBottom: false,
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const docHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = clamp(scrollY / docHeight, 0, 1);

    setState((prev) => ({
      progress,
      scrollY,
      direction:
        scrollY > prev.scrollY
          ? "down"
          : scrollY < prev.scrollY
          ? "up"
          : "idle",
      isAtTop: scrollY < 50,
      isAtBottom: progress > 0.99,
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return state;
}
