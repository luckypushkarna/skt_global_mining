"use client";

import { useState, useEffect } from "react";

/**
 * Lightweight mobile detection hook using matchMedia.
 * Returns `true` when viewport width is below `breakpoint` (default: 1024px).
 *
 * Used across scroll-heavy components to conditionally bypass
 * expensive scroll-linked Framer Motion animations on mobile,
 * while keeping desktop animations untouched.
 */
export function useIsMobile(breakpoint: number = 1024): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(`(max-width: ${breakpoint - 1}px)`);
    setIsMobile(mq.matches);

    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [breakpoint]);

  return isMobile;
}
