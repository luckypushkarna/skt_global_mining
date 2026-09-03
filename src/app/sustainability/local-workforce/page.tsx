import type { JSX } from "react";
import { PageHero } from "@/components/sustainability/PageHero";
import { StatsRow } from "@/components/sustainability/StatsRow";
import { ImpactGrid } from "@/components/sustainability/ImpactGrid";
import { StoryBlock } from "@/components/sustainability/StoryBlock";
import { CallToAction } from "@/components/sustainability/CallToAction";
import { localWorkforce } from "@/data/sustainability-pages";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Local Mining Workforce in Zambia",
  description: localWorkforce.intro,
  path: "/sustainability/local-workforce",
});

export default function LocalWorkforcePage(): JSX.Element {
  return (
    <main className="bg-[#FAFAFA]">
      <PageHero
        eyebrow={localWorkforce.eyebrow}
        title={localWorkforce.title}
        titleAccent={localWorkforce.titleAccent}
        intro={localWorkforce.intro}
        video="https://res.cloudinary.com/dxhwcq1eg/video/upload/v1782125506/skt_global_mining/local-workforce-bg.mp4"
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
