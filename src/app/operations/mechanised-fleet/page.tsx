import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";
import { FleetHero } from "@/components/fleet/FleetHero";
import { FleetOverview } from "@/components/fleet/FleetOverview";
import { FleetCategories } from "@/components/fleet/FleetCategories";
import { FleetSpecs } from "@/components/fleet/FleetSpecs";
import { FleetMaintenance } from "@/components/fleet/FleetMaintenance";
import { FleetPartners } from "@/components/fleet/FleetPartners";

export const metadata = generateMetadata({
  title: "Mechanised Mining Fleet Zambia",
  description:
    "225+ heavy underground mining machines supporting continuous operations across Zambia's Copperbelt. Engineered for availability, built for performance.",
  path: "/operations/mechanised-fleet",
});

export default function MechanisedFleetPage(): JSX.Element {
  return (
    <div className="bg-[#FAFAFA] text-slate-900">
      <FleetHero />
      <FleetOverview />
      <FleetCategories />
      <FleetSpecs />
      <FleetMaintenance />
      <FleetPartners />
    </div>
  );
}
