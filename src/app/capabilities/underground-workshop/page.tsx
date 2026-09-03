import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";
import { WorkshopHero } from "@/components/underground-workshop/WorkshopHero";
import { WorkshopOverview } from "@/components/underground-workshop/WorkshopOverview";
import { WorkshopCategories } from "@/components/underground-workshop/WorkshopCategories";
import { WorkshopGallery } from "@/components/underground-workshop/WorkshopGallery";
import { WorkshopSpecs } from "@/components/underground-workshop/WorkshopSpecs";
import { WorkshopMaintenance } from "@/components/underground-workshop/WorkshopMaintenance";
import { WorkshopPartners } from "@/components/underground-workshop/WorkshopPartners";

export const metadata = generateMetadata({
  title: "Underground Mining Workshop Zambia",
  description:
    "Repairs that never stop, deep where the work happens. Built directly inside the shaft, our underground workshops eliminate the need to bring heavy equipment to the surface.",
  path: "/capabilities/underground-workshop",
});

export default function UndergroundWorkshopPage(): JSX.Element {
  return (
    <div className="bg-[#FAFAFA] text-slate-900">
      <WorkshopHero />
      <WorkshopOverview />
      <WorkshopCategories />
      <WorkshopGallery />
      <WorkshopSpecs />
      <WorkshopMaintenance />
      <WorkshopPartners />
    </div>
  );
}
