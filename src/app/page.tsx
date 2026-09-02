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
import { CommunityImpactSection } from "@/components/organisms/CommunityImpactSection";
import { OperationalScaleSection } from "@/components/organisms/OperationalScaleSection";
import { ChairmanMessageSection } from "@/components/organisms/ChairmanMessageSection";
import { PagePreloader } from "@/components/PagePreloader";
import { SectionHeaderSkeleton, TextBlockSkeleton } from "@/components/ui/skeleton";

export const metadata = generateMetadata({
  title: "Powering Zambia's Copper Future Today",
  description:
    "Zambia's premier mechanised mining contractor, delivering world-class underground mining solutions, strategic warehousing, and engineering services. Committed to Zero Harm.",
});

export default function HomePage(): JSX.Element {
  return (
    <>
      {/* Smart image and resource preloader */}
      <PagePreloader />

      {/* Hero & Proof Ticker */}
      <HeroSection />

      {/* Built on Rock. Built to Last. */}
      <Suspense fallback={<SectionSkeleton />}>
        <AboutSection />
      </Suspense>

      {/* Building Zambia's Mining Future & Operational Footprint */}
      <Suspense fallback={<SectionSkeleton />}>
        <BlankSection />
      </Suspense>

      {/* The SKT Mining Ecosystem */}
      <Suspense fallback={<SectionSkeleton />}>
        <ServicesSection />
      </Suspense>

      {/* Scale That Speaks Volumes */}
      <Suspense fallback={<SectionSkeleton />}>
        <OperationalScaleSection />
      </Suspense>

      {/* Safety Without Compromise */}
      <Suspense fallback={<SectionSkeleton />}>
        <StatsSection />
      </Suspense>

      {/* Chairman's Message */}
      <Suspense fallback={<SectionSkeleton />}>
        <ChairmanMessageSection />
      </Suspense>

      {/* Life at SKT */}
      <GallerySection />

      {/* Leadership Behind the Vision */}
      <div className="relative z-10 bg-bg-tint">
        <Suspense fallback={<SectionSkeleton />}>
          <TeamSection />
        </Suspense>
      </div>

      {/* Building More Than Mines (CSR) */}
      <Suspense fallback={<SectionSkeleton />}>
        <CommunityImpactSection />
      </Suspense>

      {/* Strategic Partnerships. Shared Ambition. */}
      <Suspense fallback={<SectionSkeleton />}>
        <PartnersSection />
      </Suspense>

      {/* Footer */}
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