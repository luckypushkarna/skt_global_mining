import type { JSX } from "react";
import { generateMetadata } from "@/lib/seo";
import { ESHero } from "@/components/engineering/ESHero";
import { ESIntro } from "@/components/engineering/ESIntro";
import { ESCapabilities } from "@/components/engineering/ESCapabilities";

import { ESWorkshops } from "@/components/engineering/ESWorkshops";
import { ESGallery } from "@/components/engineering/ESGallery";
import { ESTeam } from "@/components/engineering/ESTeam";
import { ESCTA } from "@/components/engineering/ESCTA";

export const metadata = generateMetadata({
  title: "Mining Engineering Services Zambia",
  description:
    "Mechanical, electrical, welding, and reconditioning services keeping 225+ underground machines operational across Zambia's Copperbelt.",
  path: "/operations/engineering-services",
});

export default function EngineeringServicesPage(): JSX.Element {
  return (
    <div className="bg-bg-soft text-slate-900 min-h-screen">
      <ESHero />
      <ESIntro />
      <ESCapabilities />

      <ESWorkshops />
      <ESGallery />
      <ESTeam />
      <ESCTA />
    </div>
  );
}
