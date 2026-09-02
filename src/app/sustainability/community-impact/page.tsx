import type { JSX } from "react";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityIntro } from "@/components/community/CommunityIntro";
import { CommunityQuote } from "@/components/community/CommunityQuote";
import { CommunityInitiatives } from "@/components/community/CommunityInitiatives";

export const metadata = {
  title: "Community Impact | SKT Global Mining & Services Limited",
  description:
    "A percentage of SKT Global's future net profits is earmarked for Zambia's mining communities - developing plans for schools, clinics, and clean water.",
};

export default function CommunityImpactPage(): JSX.Element {
  return (
    <main className="bg-bg-soft">
      {/* 1. Article header + lead image */}
      <CommunityHero />

      {/* 2. Intro + at-a-glance sidebar stats */}
      <CommunityIntro />

      {/* 3. Pull quote */}
      <CommunityQuote />

      {/* 4. Three chapters: Education, Healthcare, Water */}
      <CommunityInitiatives />
    </main>
  );
}
