import type { JSX } from "react";
import type { Metadata } from "next";
import { SWHero } from "@/components/strategic-warehousing/SWHero";
import { SWIntro } from "@/components/strategic-warehousing/SWIntro";
import { SWCapabilities } from "@/components/strategic-warehousing/SWCapabilities";
import { SWVideo } from "@/components/strategic-warehousing/SWVideo";
import { SWWorkshops } from "@/components/strategic-warehousing/SWWorkshops";
import { SWGallery } from "@/components/strategic-warehousing/SWGallery";
import { SWTeam } from "@/components/strategic-warehousing/SWTeam";
import { SWCTA } from "@/components/strategic-warehousing/SWCTA";

export const metadata: Metadata = {
  title: "Strategic Warehousing - SKT Global Mining & Services",
  description:
    "A robust active inventory and an agile logistics network ensure that critical components and consumables are always exactly where they need to be.",
};

export default function StrategicWarehousingPage(): JSX.Element {
  return (
    <div className="bg-slate-50 text-slate-900">
      <SWHero />
      <SWIntro />
      <SWCapabilities />
      <SWVideo />
      <SWWorkshops />
      <SWGallery />
      <SWTeam />
      <SWCTA />
    </div>
  );
}
