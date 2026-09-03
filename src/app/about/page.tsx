import type { JSX } from "react";
import AboutHero from "@/components/about/AboutHero";
import TheGenesisRecord from "@/components/about/TheGenesisRecord";
import StrategicPillars from "@/components/about/StrategicPillars";
import CultureAndRetention from "@/components/about/CultureAndRetention";
import GlobalFootprint from "@/components/about/GlobalFootprint";
import AboutClosing from "@/components/about/AboutClosing";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "About SKT Global Mining Zambia",
  description: "Learn about SKT Global Mining & Services Limited, our history, our pillars, and our commitment to sustainable mining in Zambia.",
  path: "/about",
});

export default function AboutPage(): JSX.Element {
  return (
    <div className="bg-white">
      <AboutHero />
      <TheGenesisRecord />
      <StrategicPillars />
      <GlobalFootprint />
      <CultureAndRetention />
      <AboutClosing />
    </div>
  );
}
