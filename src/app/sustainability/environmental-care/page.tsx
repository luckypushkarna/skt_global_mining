import type { JSX } from "react";
import { PageHero } from "@/components/sustainability/PageHero";
import { StatsRow } from "@/components/sustainability/StatsRow";
import { ImpactGrid } from "@/components/sustainability/ImpactGrid";
import { StoryBlock } from "@/components/sustainability/StoryBlock";
import { CallToAction } from "@/components/sustainability/CallToAction";
import { environmentalCare } from "@/data/sustainability-pages";

export const metadata = {
  title: "Environmental Care | SKT Global Mining & Services Limited",
  description: environmentalCare.intro,
};

export default function EnvironmentalCarePage(): JSX.Element {
  return (
    <main className="bg-[#FAFAFA]">
      <PageHero
        eyebrow={environmentalCare.eyebrow}
        title={environmentalCare.title}
        titleAccent={environmentalCare.titleAccent}
        intro={environmentalCare.intro}
        video="https://res.cloudinary.com/dxhwcq1eg/video/upload/v1782125455/skt_global_mining/Solar%20video.mp4"
        accent={environmentalCare.accentColor}
      />
      <StatsRow stats={environmentalCare.stats} accent={environmentalCare.accentColor} />
      <ImpactGrid pillars={environmentalCare.pillars} accent={environmentalCare.accentColor} />
      <StoryBlock
        quote={environmentalCare.story.quote}
        author={environmentalCare.story.author}
        role={environmentalCare.story.role}
        accent={environmentalCare.accentColor}
      />
      <CallToAction text={environmentalCare.ctaText} href={environmentalCare.ctaHref} />
    </main>
  );
}
