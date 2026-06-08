import { JSX } from "react";
import { CareersHero } from "@/components/organisms/careers/CareersHero";
import { WhyJoinSection } from "@/components/organisms/careers/WhyJoinSection";
import { JobOpenings } from "@/components/organisms/careers/JobOpenings";
import { CareersCTA } from "@/components/organisms/careers/CareersCTA";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Careers",
  description: "Join the next generation of safe, high-technology mining excellence. Explore deployment opportunities, underground engineering roles, and global careers at SKT Global.",
  path: "/careers",
});

export default function CareersPage(): JSX.Element {
  return (
    <div className="bg-neutral-50 min-h-screen">
      {/* Cinematic Hero Portal */}
      <CareersHero />

      {/* Safety & Integrity Pillars */}
      <WhyJoinSection />

      {/* Real-time Filterable Jobs Grid */}
      <JobOpenings />

      {/* Industrial Copper Underglow Final CTA */}
      <CareersCTA />
    </div>
  );
}
