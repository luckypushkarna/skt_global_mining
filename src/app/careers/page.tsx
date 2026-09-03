import type { JSX } from "react";
import CareersHero from "@/components/careers/CareersHero";
import CareersPerks from "@/components/careers/CareersPerks";
import CareersOpenings from "@/components/careers/CareersOpenings";
import CareersCTA from "@/components/careers/CareersCTA";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Mining Jobs and Careers in Zambia",
  description: "Explore mining jobs and career opportunities in Zambia with SKT Global Mining & Services Limited.",
  path: "/careers",
  keywords: ["mining jobs in Zambia", "Copperbelt mining careers"],
});

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
