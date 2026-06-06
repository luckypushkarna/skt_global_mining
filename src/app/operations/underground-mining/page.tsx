import type { JSX } from "react";
import { UMHero } from "@/components/underground/UMHero";
import { UMIntroNarrative } from "@/components/underground/UMIntroNarrative";
import { UMProcessStory } from "@/components/underground/UMProcessStory";
import { UMReserves } from "@/components/underground/UMReserves";
import { UMLocalInsights } from "@/components/underground/UMLocalInsights";
import { UMSafety } from "@/components/underground/UMSafety";
import { UMEnvironment } from "@/components/underground/UMEnvironment";
import { UMInnovation } from "@/components/underground/UMInnovation";
import { UMReports } from "@/components/underground/UMReports";

export const metadata = {
  title: "Underground Mining — SKT Global Mining & Services",
  description:
    "Mechanised underground mining operations across Zambia's Copperbelt. Independently verified reserves, engineered safety controls, and transparent operational reporting.",
};

export default function UndergroundMiningPage(): JSX.Element {
  return (
    <div className="bg-[#FAFAFA] text-slate-900">
      <UMHero />
      <UMIntroNarrative />
      <UMProcessStory />
      <UMReserves />
      <UMLocalInsights />
      <UMSafety />
      <UMEnvironment />
      <UMInnovation />
      <UMReports />
    </div>
  );
}
