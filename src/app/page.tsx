import { Suspense } from "react";
import type { JSX } from "react";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { StatsSection } from "@/components/organisms/StatsSection";
import { TeamSection } from "@/components/organisms/TeamSection";
import { GallerySection } from "@/components/organisms/GallerySection";
import { ContactSection } from "@/components/organisms/ContactSection";
import { MarqueeSection } from "@/components/organisms/MarqueeSection";
import { PartnersSection } from "@/components/organisms/PartnersSection";
import { generateMetadata } from "@/lib/seo";
import { BlankSection } from "@/components/organisms/BlankSection";

export const metadata = generateMetadata({
  description:
    "SKT Global Mining & Services Limited — Engineering excellence in mining and industrial services across 8+ countries. 18+ years. 4,200+ workforce. Zero harm.",
});

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Marquee ticker */}
      <MarqueeSection />

      {/* About + Timeline */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      {/* Map Zoom Intro (GSAP scroll portal zoom revealing the Interactive Zambia Operations Map) */}
      <Suspense fallback={<SectionSkeleton />}>
        <BlankSection />
      </Suspense>

      {/* Services Grid */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      {/* Stats */}
      <Suspense fallback={<SectionSkeleton />}>
        <StatsSection />
      </Suspense>

      {/* Gallery */}
      <GallerySection />

      {/* Team */}
      <div className="relative z-10 bg-white">
        <Suspense fallback={<SectionSkeleton />}>
          <TeamSection />
        </Suspense>
      </div>

      {/* Partners */}
      <Suspense fallback={<SectionSkeleton />}>
        <PartnersSection />
      </Suspense>

      {/* Contact */}
      <Suspense fallback={<SectionSkeleton />}>
        <ContactSection />
      </Suspense>
    </>
  );
}

function SectionSkeleton(): JSX.Element {
  return (
    <div
      className="py-section animate-pulse"
      role="status"
      aria-label="Loading section"
    >
      <div className="max-w-screen-xl mx-auto px-6 lg:px-12">
        <div className="h-8 bg-neutral-100 w-32 mb-8" />
        <div className="h-24 bg-neutral-100 w-2/3 mb-4" />
        <div className="h-4 bg-neutral-100 w-1/2" />
      </div>
    </div>
  );
}