import type { JSX } from "react";
import { PageHero } from "@/components/sustainability/PageHero";
import { StatsRow } from "@/components/sustainability/StatsRow";
import { ImpactGrid } from "@/components/sustainability/ImpactGrid";
import { StoryBlock } from "@/components/sustainability/StoryBlock";
import { CallToAction } from "@/components/sustainability/CallToAction";
import { localWorkforce } from "@/data/sustainability-pages";

export const metadata = {
  title: "Local Workforce | SKT Global Mining & Services Limited",
  description: localWorkforce.intro,
};

export default function LocalWorkforcePage(): JSX.Element {
  return (
    <main className="bg-[#FAFAFA]">
      <PageHero
        eyebrow={localWorkforce.eyebrow}
        title={localWorkforce.title}
        titleAccent={localWorkforce.titleAccent}
        intro={localWorkforce.intro}
        image={localWorkforce.heroImage}
        accent={localWorkforce.accentColor}
      />
      <StatsRow stats={localWorkforce.stats} accent={localWorkforce.accentColor} />
      <ImpactGrid pillars={localWorkforce.pillars} accent={localWorkforce.accentColor} />
      <StoryBlock
        quote={localWorkforce.story.quote}
        author={localWorkforce.story.author}
        role={localWorkforce.story.role}
        accent={localWorkforce.accentColor}
      />
      <CallToAction text={localWorkforce.ctaText} href={localWorkforce.ctaHref} />
    </main>
  );
}
