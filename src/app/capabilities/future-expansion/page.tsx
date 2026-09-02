import type { JSX } from "react";
import type { Metadata } from "next";
import { FutureHero } from "@/components/future-expansion/FutureHero";
import { FutureIntro } from "@/components/future-expansion/FutureIntro";
import { FuturePillars } from "@/components/future-expansion/FuturePillars";

import { FutureSpecs } from "@/components/future-expansion/FutureSpecs";
import { FutureCTA } from "@/components/future-expansion/FutureCTA";

export const metadata: Metadata = {
  title: "Future Expansion - SKT Global Mining & Services",
  description:
    "Looking beyond today's operations. Our R&D division is actively testing fully autonomous fleets and zero-emission battery electric vehicles.",
};

export default function FutureExpansionPage(): JSX.Element {
  return (
    <div className="bg-slate-50 text-slate-900">
      <FutureHero />
      <FutureIntro />
      <FuturePillars />

      <FutureSpecs />
      <FutureCTA />
    </div>
  );
}
