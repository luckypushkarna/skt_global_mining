import type { JSX } from "react";
import type { Metadata } from "next";
import { FacilitiesHero } from "@/components/workforce-facilities/FacilitiesHero";
import { FacilitiesIntro } from "@/components/workforce-facilities/FacilitiesIntro";
import { FacilitiesPillars } from "@/components/workforce-facilities/FacilitiesPillars";

import { FacilitiesTeam } from "@/components/workforce-facilities/FacilitiesTeam";
import { FacilitiesCTA } from "@/components/workforce-facilities/FacilitiesCTA";

export const metadata: Metadata = {
  title: "Workforce Facilities - SKT Global Mining & Services",
  description:
    "World-class accommodation, dining, and recreational facilities designed to support the physical and mental well-being of our remote workforce.",
};

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
