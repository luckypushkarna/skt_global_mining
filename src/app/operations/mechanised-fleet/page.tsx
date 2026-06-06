import type { JSX } from "react";
import type { Metadata } from "next";
import { FleetHero } from "@/components/fleet/FleetHero";
import { FleetOverview } from "@/components/fleet/FleetOverview";
import { FleetCategories } from "@/components/fleet/FleetCategories";
import { FleetGallery } from "@/components/fleet/FleetGallery";
import { FleetSpecs } from "@/components/fleet/FleetSpecs";
import { FleetMaintenance } from "@/components/fleet/FleetMaintenance";
import { FleetPartners } from "@/components/fleet/FleetPartners";

export const metadata: Metadata = {
  title: "Mechanised Fleet — SKT Global Mining & Services",
  description:
    "225+ heavy underground mining machines supporting continuous operations across Zambia's Copperbelt. Engineered for availability, built for performance.",
};

export default function MechanisedFleetPage(): JSX.Element {
  return (
    <div className="bg-[#FAFAFA] text-slate-900">
      <FleetHero />
      <FleetOverview />
      <FleetCategories />
      <FleetGallery />
      <FleetSpecs />
      <FleetMaintenance />
      <FleetPartners />
    </div>
  );
}
