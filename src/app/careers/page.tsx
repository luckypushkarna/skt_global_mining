import type { JSX } from "react";
import CareersHero from "@/components/careers/CareersHero";
import CareersPerks from "@/components/careers/CareersPerks";
import CareersOpenings from "@/components/careers/CareersOpenings";
import CareersCTA from "@/components/careers/CareersCTA";

export const metadata = {
  title: "Careers | SKT Global Mining",
  description: "Build your legacy in the mining industry. Explore career opportunities with SKT Global Mining & Services Limited.",
};

export default function CareersPage(): JSX.Element {
  return (
    <div className="bg-white">
      <CareersHero />
      <CareersPerks />
      <CareersOpenings />
      <CareersCTA />
    </div>
  );
}
