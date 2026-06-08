"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap.config";
import { ANIMATION_DURATIONS, ANIMATION_EASINGS } from "@/lib/animation.constants";

interface HeroAnimationRefs {
  headline1Ref: React.RefObject<HTMLHeadingElement | null>;
  headline2Ref: React.RefObject<HTMLHeadingElement | null>;
  headline3Ref: React.RefObject<HTMLHeadingElement | null>;
  buttonsRef: React.RefObject<HTMLDivElement | null>;
  metricsRef: React.RefObject<HTMLDivElement | null>;
}

export const useHeroAnimation = (refs: HeroAnimationRefs) => {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      // Just fade in everything without complex transforms
      gsap.to([
        refs.headline1Ref.current,
        refs.headline2Ref.current,
        refs.headline3Ref.current,
        refs.buttonsRef.current,
        refs.metricsRef.current
      ], {
        opacity: 1,
        duration: ANIMATION_DURATIONS.fast,
        stagger: 0.1,
        ease: ANIMATION_EASINGS.smooth
      });
      return;
    }

    // Initial states for everything
    gsap.set(refs.buttonsRef.current, { opacity: 0, y: 30 });


    // Setup metrics initial state
    const metricItems = refs.metricsRef.current?.children;
    if (metricItems) {
      gsap.set(metricItems, { opacity: 0, y: 30 });
    }

    // Build Master Timeline
    const tl = gsap.timeline({
      defaults: {
        ease: ANIMATION_EASINGS.premium,
        duration: ANIMATION_DURATIONS.cinematic
      }
    });

    tlRef.current = tl;

    // Buttons reveal
    tl.to(refs.buttonsRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: ANIMATION_EASINGS.premium,
      }, "-=0.8");


    // Metrics stagger reveal
    if (metricItems) {
      tl.to(metricItems, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      }, "-=0.6");
    }

    // Cleanup on unmount
    return () => {
      tl.kill();

    };
  }, [refs]);

  return tlRef;
};
