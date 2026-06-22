import type { JSX } from "react";
import type { Metadata } from "next";
import { ESHero } from "@/components/engineering/ESHero";
import { ESIntro } from "@/components/engineering/ESIntro";
import { ESCapabilities } from "@/components/engineering/ESCapabilities";
import { ESVideo } from "@/components/engineering/ESVideo";
import { ESWorkshops } from "@/components/engineering/ESWorkshops";
import { ESGallery } from "@/components/engineering/ESGallery";
import { ESTeam } from "@/components/engineering/ESTeam";
import { ESCTA } from "@/components/engineering/ESCTA";

export const metadata: Metadata = {
  title: "Engineering Services - SKT Global Mining & Services",
  description:
    "Mechanical, electrical, welding, and reconditioning services keeping 225+ underground machines operational across Zambia's Copperbelt.",
};

export default function EngineeringServicesPage(): JSX.Element {
  return (
    <div className="bg-bg-soft text-slate-900 min-h-screen">
      <ESHero />
      <ESIntro />
      <ESCapabilities />
      <ESVideo />
      <ESWorkshops />
      <ESGallery />
      <ESTeam />
      <ESCTA />
    </div>
  );
}
