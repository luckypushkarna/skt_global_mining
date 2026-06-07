"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import OpeningScene from "@/components/about/OpeningScene";
import CompanyNarrative from "@/components/about/CompanyNarrative";
import WhoWeAre from "@/components/about/WhoWeAre";
import SignatureVideo from "@/components/about/SignatureVideo";
import VisualTimeline from "@/components/about/VisualTimeline";
import ImpactImagery from "@/components/about/ImpactImagery";
import ClosingStatement from "@/components/about/ClosingStatement";
import AboutFooter from "@/components/about/AboutFooter";
import ScrollProgress from "@/components/about/ScrollProgress";

gsap.registerPlugin(ScrollTrigger);

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-white overflow-hidden">
      <ScrollProgress />
      <OpeningScene />
      <CompanyNarrative />
      <WhoWeAre />
      <SignatureVideo />
      <VisualTimeline />
      <ImpactImagery />
      <ClosingStatement />
      <AboutFooter />
    </div>
  );
}
