import type { JSX } from "react";
import { CommunityHero } from "@/components/community/CommunityHero";
import { CommunityIntro } from "@/components/community/CommunityIntro";
import { CommunityQuote } from "@/components/community/CommunityQuote";
import { CommunityInitiatives } from "@/components/community/CommunityInitiatives";

export const metadata = {
  title: "Community Impact | SKT Global Mining & Services Limited",
  description:
    "Twenty percent of SKT Global's net profits return directly to Zambia's mining communities - schools, clinics, and clean water for thousands.",
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
