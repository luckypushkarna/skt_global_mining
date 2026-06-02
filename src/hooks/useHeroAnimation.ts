"use client";

import { useEffect, useRef } from "react";
import gsap from "@/lib/gsap.config";
import { ANIMATION_DELAYS, ANIMATION_DURATIONS, ANIMATION_EASINGS } from "@/lib/animation.constants";

interface HeroAnimationRefs {
  headline1Ref: React.RefObject<HTMLHeadingElement | null>;
  headline2Ref: React.RefObject<HTMLHeadingElement | null>;
  headline3Ref: React.RefObject<HTMLHeadingElement | null>;
  ofMiningRef: React.RefObject<HTMLDivElement | null>;
  ofMiningLineRef: React.RefObject<HTMLDivElement | null>;
  ofMiningTextRef: React.RefObject<HTMLSpanElement | null>;
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
        refs.ofMiningRef.current,
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
    gsap.set(refs.ofMiningLineRef.current, { scaleX: 0, transformOrigin: 'left center' });
    gsap.set(refs.ofMiningTextRef.current, { opacity: 0, x: -10 });
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

    // "OF MINING" micro animation
    tl.to(refs.ofMiningLineRef.current, {
      scaleX: 1,
      duration: 1,
      ease: ANIMATION_EASINGS.organic,
      boxShadow: "0px 0px 8px rgba(255, 120, 80, 0.4)", // Copper glow shimmer effect
    }, ANIMATION_DELAYS.initial)


      .to(refs.ofMiningTextRef.current, {
        opacity: 1,
        x: 0,
        duration: 0.8,
        letterSpacing: "0.25em", // slight letter spacing expansion
      }, "-=0.6")



      // Buttons reveal
      .to(refs.buttonsRef.current, {
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
