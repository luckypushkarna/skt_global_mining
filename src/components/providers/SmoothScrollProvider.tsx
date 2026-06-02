"use client";

import { useEffect, useRef, type ReactNode, JSX } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  readonly children: ReactNode;
}

export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps): JSX.Element {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    let tickerCallback: ((time: number) => void) | null = null;
    let gsapInstance: any = null;
    let mounted = true;

    const initScroll = async () => {
      // Dynamic imports for Next.js SSR compatibility
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      
      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      const lenis = new Lenis({
        duration: 1.0,           // Faster, more responsive
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        syncTouch: false,        // CRITICAL: false on mobile to prevent scroll lag/stuttering
        wheelMultiplier: 1.2,    // Increased scroll speed
        touchMultiplier: 1.5,
        lerp: 0.1,               // Smooth interpolation
        infinite: false,
      });

      lenisRef.current = lenis;

      // Sync ScrollTrigger's internal position tracker on Lenis scroll event
      lenis.on("scroll", () => {
        ScrollTrigger.update();
      });

      // Synchronize Lenis and GSAP RAF loops perfectly to prevent visual stuttering
      tickerCallback = (time: number) => {
        lenis.raf(time * 1000);
      };
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      // Perform initial scroll check if landing directly on a hash URL
      if (window.location.hash) {
        const hash = window.location.hash;
        setTimeout(() => {
          const target = document.querySelector(hash) as HTMLElement | null;
          if (target && lenisRef.current) {
            lenisRef.current.scrollTo(target, { immediate: true });
          }
        }, 150);
      }
    };

    initScroll();

    return () => {
      mounted = false;
      if (lenisRef.current) {
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (gsapInstance && tickerCallback) {
        gsapInstance.ticker.remove(tickerCallback);
      }
    };
  }, []);

  // Handle scrolling to hashes when pathname changes (page transition) or manual hashchange
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleHashScroll = () => {
      if (window.location.hash) {
        const hash = window.location.hash;
        // Wait a short frame for routing, DOM render, and layout paint
        setTimeout(() => {
          const target = document.querySelector(hash) as HTMLElement | null;
          if (target && lenisRef.current) {
            lenisRef.current.scrollTo(target, { immediate: true });
          }
        }, 150);
      }
    };

    // Run when pathname changes (e.g. going back to the home page)
    handleHashScroll();

    // Listen for hashchange events (e.g. clicking hash links on the same page)
    window.addEventListener("hashchange", handleHashScroll);
    return () => {
      window.removeEventListener("hashchange", handleHashScroll);
    };
  }, [pathname]);

  return <>{children}</>;
}
