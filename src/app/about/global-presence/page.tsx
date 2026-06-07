"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PresenceOpening from "@/components/global-presence/PresenceOpening";
import PresenceVideo from "@/components/global-presence/PresenceVideo";
import OperationsShowcase from "@/components/global-presence/OperationsShowcase";
import ConnectedNetwork from "@/components/global-presence/ConnectedNetwork";
import GlobalScale from "@/components/global-presence/GlobalScale";
import RegionStories from "@/components/global-presence/RegionStories";
import PresenceClosing from "@/components/global-presence/PresenceClosing";
import PresenceFooter from "@/components/global-presence/PresenceFooter";
import PresenceNav from "@/components/global-presence/PresenceNav";

gsap.registerPlugin(ScrollTrigger);

export default function GlobalPresencePage() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.5,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenis.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="bg-white overflow-hidden">
      <PresenceNav />
      <PresenceOpening />
      <PresenceVideo />
      <OperationsShowcase />
      <ConnectedNetwork />
      <GlobalScale />
      <RegionStories />
      <PresenceClosing />
      <PresenceFooter />
    </div>
  );
}
