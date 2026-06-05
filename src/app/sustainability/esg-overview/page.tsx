import { Suspense } from "react";
import type { JSX } from "react";
import { ESGBanner } from "@/components/esg/ESGBanner";
import { MetricGrid } from "@/components/esg/MetricGrid";
import { PrincipleSection } from "@/components/esg/PrincipleSection";
import { LeadershipQuote } from "@/components/esg/LeadershipQuote";

export const metadata = {
  title: "ESG Overview | SKT Global Mining & Services Limited",
  description:
    "Discover SKT Global's Environmental, Social and Governance commitments — from 90% water recycling and 1.2M+ safe man-hours to 94% local workforce in Zambia.",
};

export default function ESGOverviewPage(): JSX.Element {
  return (
    <main className="bg-[#FAFAFA] text-slate-900 font-sans">
      {/* 1. Hero Banner — video + editorial typography */}
      <Suspense fallback={<div className="h-[88vh] bg-slate-950" />}>
        <ESGBanner />
      </Suspense>

      {/* 2. Key Metrics Grid — hard data, independently verified */}
      <section className="max-w-7xl mx-auto px-6 py-14 lg:py-20">
        <MetricGrid />
      </section>

      {/* 3. Three Pillars — alternating E / S / G deep dive */}
      <section className="border-t border-slate-200 bg-white">
        <PrincipleSection />
      </section>

      {/* 4. Chairman's Quote — human editorial element */}
      <section className="py-20 lg:py-32 bg-[#F4F7FA] border-t border-slate-100">
        <LeadershipQuote />
      </section>
    </main>
  );
}
