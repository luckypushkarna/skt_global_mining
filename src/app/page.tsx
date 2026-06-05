import { Suspense } from "react";
import type { JSX } from "react";
import { HeroSection } from "@/components/organisms/HeroSection";
import { AboutSection } from "@/components/organisms/AboutSection";
import { ServicesSection } from "@/components/organisms/ServicesSection";
import { StatsSection } from "@/components/organisms/StatsSection";
import { TeamSection } from "@/components/organisms/TeamSection";
import { GallerySection } from "@/components/organisms/GallerySection";
import { ContactSection } from "@/components/organisms/ContactSection";

import { PartnersSection } from "@/components/organisms/PartnersSection";
import { generateMetadata } from "@/lib/seo";
import { BlankSection } from "@/components/organisms/BlankSection";
import { PagePreloader } from "@/components/PagePreloader";
import { SectionHeaderSkeleton, TextBlockSkeleton } from "@/components/ui/skeleton";

export const metadata = generateMetadata({
  description:
    "SKT Global Mining & Services Limited — Engineering excellence in mining and industrial services across 8+ countries. 18+ years. 4,200+ workforce. Committed to Zero Harm.",
});

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* Smart image and resource preloader */}
      <PagePreloader />

      {/* Hero */}
      <HeroSection />



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
      <div className="relative z-10 bg-bg-tint">
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
      className="py-16 md:py-24 lg:py-32"
      role="status"
      aria-label="Loading section"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16">
        <SectionHeaderSkeleton />
        <TextBlockSkeleton lines={3} />
      </div>
    </div>
  );
}