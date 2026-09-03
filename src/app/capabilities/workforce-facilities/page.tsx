import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";
import { FacilitiesHero } from "@/components/workforce-facilities/FacilitiesHero";
import { FacilitiesIntro } from "@/components/workforce-facilities/FacilitiesIntro";
import { FacilitiesPillars } from "@/components/workforce-facilities/FacilitiesPillars";

import { FacilitiesTeam } from "@/components/workforce-facilities/FacilitiesTeam";
import { FacilitiesCTA } from "@/components/workforce-facilities/FacilitiesCTA";

export const metadata = generateMetadata({
  title: "Mining Workforce Facilities Zambia",
  description:
    "World-class accommodation, dining, and recreational facilities designed to support the physical and mental well-being of our remote workforce.",
  path: "/capabilities/workforce-facilities",
});

export default function WorkforceFacilitiesPage(): JSX.Element {
  return (
    <div className="bg-slate-50 text-slate-900">
      <FacilitiesHero />
      <FacilitiesIntro />
      <FacilitiesPillars />

      <FacilitiesTeam />
      <FacilitiesCTA />
    </div>
  );
}
