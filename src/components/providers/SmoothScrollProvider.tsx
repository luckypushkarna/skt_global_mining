"use client";

import { useEffect, useRef, type ReactNode, JSX } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

interface SmoothScrollProviderProps {
  readonly children: ReactNode;
}

function storageKey(url: string) {
  return `__scroll__${url}`;
}

// ── Skeleton shimmer styles (injected once into <head>) ───────────────────────
const SHIMMER_CSS = `
@keyframes __sk_shimmer {
  0%   { background-position: -600px 0; }
  100% { background-position:  600px 0; }
}
@keyframes __sk_progress {
  0%   { transform: translateX(-100%); }
  60%  { transform: translateX(0%); }
  100% { transform: translateX(100%); }
}
.__sk {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 600px 100%;
  animation: __sk_shimmer 1.4s ease infinite;
  border-radius: 6px;
}
`;

function injectShimmerCSS() {
  if (typeof document === "undefined") return;
  if (document.getElementById("__sk_styles")) return;
  const style = document.createElement("style");
  style.id = "__sk_styles";
  style.textContent = SHIMMER_CSS;
  document.head.appendChild(style);
}

// ── Skeleton JSX rendered as raw HTML string (no React re-render needed) ──────
function buildSkeletonHTML() {
  return `
  <div style="position:absolute;inset:0;background:#fff;overflow:hidden;">
    <!-- Nav bar skeleton -->
    <div style="height:64px;background:#fff;border-bottom:1px solid #e8e8e8;display:flex;align-items:center;padding:0 40px;gap:16px;">
      <div class="__sk" style="width:140px;height:28px;"></div>
      <div style="flex:1"></div>
      <div class="__sk" style="width:56px;height:14px;"></div>
      <div class="__sk" style="width:56px;height:14px;"></div>
      <div class="__sk" style="width:56px;height:14px;"></div>
      <div class="__sk" style="width:56px;height:14px;"></div>
      <div class="__sk" style="width:80px;height:32px;border-radius:4px;"></div>
    </div>

    <!-- Progress bar -->
    <div style="position:absolute;top:64px;left:0;right:0;height:2px;background:#f0f0f0;overflow:hidden;">
      <div style="position:absolute;inset:0;background:linear-gradient(90deg,transparent,#0F172A 40%,#E63027 60%,transparent);animation:__sk_progress 1.2s ease infinite;"></div>
    </div>

    <!-- Hero skeleton -->
    <div style="max-width:1200px;margin:0 auto;padding:80px 40px 60px;">
      <div class="__sk" style="width:120px;height:10px;margin-bottom:24px;"></div>
      <div class="__sk" style="width:55%;height:52px;margin-bottom:16px;"></div>
      <div class="__sk" style="width:42%;height:40px;margin-bottom:32px;"></div>
      <div class="__sk" style="width:66%;height:18px;margin-bottom:10px;"></div>
      <div class="__sk" style="width:58%;height:18px;margin-bottom:48px;"></div>

      <!-- Grid skeleton -->
      <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:24px;margin-top:20px;">
        <div class="__sk" style="height:180px;border-radius:12px;"></div>
        <div class="__sk" style="height:180px;border-radius:12px;animation-delay:0.15s;"></div>
        <div class="__sk" style="height:180px;border-radius:12px;animation-delay:0.3s;"></div>
      </div>

      <!-- Row skeleton -->
      <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:24px;">
        <div class="__sk" style="height:100px;border-radius:8px;"></div>
        <div class="__sk" style="height:100px;border-radius:8px;animation-delay:0.1s;"></div>
        <div class="__sk" style="height:100px;border-radius:8px;animation-delay:0.2s;"></div>
        <div class="__sk" style="height:100px;border-radius:8px;animation-delay:0.3s;"></div>
      </div>
    </div>

    <!-- Restoring label -->
    <div style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:10px;color:#94a3b8;font-size:11px;font-family:system-ui,sans-serif;letter-spacing:0.12em;text-transform:uppercase;font-weight:600;user-select:none;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.56"/>
      </svg>
      Restoring your position…
    </div>
  </div>
  `;
}

export function SmoothScrollProvider({
  children,
}: SmoothScrollProviderProps): JSX.Element {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);
  const isPopRef = useRef(false);
  const coverRef = useRef<HTMLDivElement | null>(null);

  // ── Cover helpers – direct DOM, no React re-render ───────────────────────────
  const showCover = () => {
    const el = coverRef.current;
    if (!el) return;
    // NO transition when showing – must be instant to prevent flash
    el.style.transition = "none";
    el.style.opacity = "1";
    el.style.pointerEvents = "all";
    el.style.visibility = "visible";
  };

  const hideCover = (afterMs = 0) => {
    setTimeout(() => {
      const el = coverRef.current;
      if (!el) return;
      // Smooth fade-out when hiding
      el.style.transition = "opacity 0.22s ease";
      el.style.opacity = "0";
      setTimeout(() => {
        if (el) {
          el.style.pointerEvents = "none";
          el.style.visibility = "hidden";
        }
      }, 250);
    }, afterMs);
  };

  // ── STEP 1: Disable native scroll restoration & intercept popstate FIRST ─────
  useEffect(() => {
    if (typeof window === "undefined") return;

    injectShimmerCSS();

    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const onPopState = () => {
      isPopRef.current = true;
      // Show the skeleton cover SYNCHRONOUSLY – this fires before React re-renders
      showCover();
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── STEP 2: Initialise Lenis (once) ──────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;

    let tickerCallback: ((time: number) => void) | null = null;
    let gsapInstance: any = null;
    let mounted = true;

    const initScroll = async () => {
      const gsap = (await import("gsap")).default;
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);
      gsapInstance = gsap;

      const lenis = new Lenis({
        duration: 1.0,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
        syncTouch: true,
        syncTouchLerp: 0.075,
        touchInertiaMultiplier: 25,
        wheelMultiplier: 1.2,
        touchMultiplier: 1.5,
        lerp: 0.1,
        infinite: false,
      });

      lenisRef.current = lenis;
      (window as any).lenis = lenis;

      // Save position continuously per URL
      lenis.on("scroll", (e: any) => {
        ScrollTrigger.update();
        const url = window.location.pathname + window.location.search;
        try {
          sessionStorage.setItem(storageKey(url), String(Math.round(e.scroll)));
        } catch (_) {}
      });

      tickerCallback = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      // Handle hash on hard load
      if (window.location.hash) {
        const hash = window.location.hash;
        setTimeout(() => {
          const target = document.querySelector(hash) as HTMLElement | null;
          if (target && lenisRef.current) {
            lenisRef.current.scrollTo(target, { immediate: true });
          }
        }, 200);
      }
    };

    initScroll();

    return () => {
      mounted = false;
      if (lenisRef.current) {
        delete (window as any).lenis;
        lenisRef.current.destroy();
        lenisRef.current = null;
      }
      if (gsapInstance && tickerCallback) {
        gsapInstance.ticker.remove(tickerCallback);
      }
    };
  }, []);

  // ── STEP 3: Per-pathname: restore or reset scroll, then reveal ───────────────
  useEffect(() => {
    if (typeof window === "undefined") return;

    const currentUrl = window.location.pathname + window.location.search;
    const isPop = isPopRef.current;
    isPopRef.current = false;

    if (window.location.hash) {
      const hash = window.location.hash;
      setTimeout(() => {
        const target = document.querySelector(hash) as HTMLElement | null;
        if (target && lenisRef.current) {
          lenisRef.current.scrollTo(target, { immediate: true });
        }
        hideCover();
      }, 150);
      return;
    }

    if (isPop) {
      // Back / Forward – restore saved position, then fade out skeleton
      let savedPos = 0;
      try {
        const stored = sessionStorage.getItem(storageKey(currentUrl));
        savedPos = stored ? parseInt(stored, 10) : 0;
      } catch (_) {}

      const restore = () => {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(savedPos, { immediate: true });
        }
      };

      // Multiple attempts for async layout shifts (images, fonts)
      restore();
      setTimeout(restore, 60);
      setTimeout(() => {
        restore();
        // Fade out skeleton ~60ms after last restore attempt
        hideCover(60);
      }, 200);
      setTimeout(restore, 450);
    } else {
      // Forward navigation – scroll to top
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
      hideCover();
    }

    // Handle same-page hash links
    const onHashChange = () => {
      const hash = window.location.hash;
      if (!hash) return;
      setTimeout(() => {
        const target = document.querySelector(hash) as HTMLElement | null;
        if (target && lenisRef.current) {
          lenisRef.current.scrollTo(target, { immediate: true });
        }
      }, 150);
    };

    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [pathname]);

  return (
    <>
      {/*
        Skeleton cover - kept hidden at rest.
        showCover() fires synchronously on popstate (before React re-renders)
        using transition:"none" so it appears INSTANTLY with zero delay.
        hideCover() fades it out smoothly after scroll is restored.
      */}
      <div
        ref={coverRef}
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 99999,
          opacity: 0,
          pointerEvents: "none",
          visibility: "hidden",
          // transition is set dynamically: none on show, 0.22s on hide
        }}
        dangerouslySetInnerHTML={{ __html: buildSkeletonHTML() }}
      />
      {children}
    </>
  );
}
