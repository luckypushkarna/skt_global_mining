import type { JSX } from "react";
import { MagazineHero } from "@/components/community/MagazineHero";
import { DropCapIntro } from "@/components/community/DropCapIntro";
import { PullQuote } from "@/components/community/PullQuote";
import { ChapterSection } from "@/components/community/ChapterSection";
import { EditorialClosing } from "@/components/community/EditorialClosing";

export const metadata = {
  title: "Community Impact | SKT Global Mining & Services Limited",
  description:
    "Twenty percent of SKT Global's net profits return directly to Zambia's mining communities — schools, clinics, and clean water for thousands.",
};

export default function CommunityImpactPage(): JSX.Element {
  return (
    <main className="bg-[#FAF8F5]">
      {/* 1. Magazine-style article header + lead image */}
      <MagazineHero />

      {/* 2. Drop-cap editorial intro + at-a-glance sidebar stats */}
      <DropCapIntro />

      {/* 3. Pull quote — large amber typography */}
      <PullQuote />

      {/* 4. Three chapters: Education, Healthcare, Water */}
      <ChapterSection />

      {/* 5. Italic editorial closing + author byline + related reading */}
      <EditorialClosing />
    </main>
  );
}
