import { type Metadata } from "next";
import ChairpersonHero from "@/components/about/chairperson/ChairpersonHero";
import ChairpersonLetter from "@/components/about/chairperson/ChairpersonLetter";
import ChairpersonClosing from "@/components/about/chairperson/ChairpersonClosing";

export const metadata: Metadata = {
  title: "Chairperson's Message | SKT Global Mining",
  description: "A message from Mr. Raj Talreja, Chairperson of the Board at SKT Global Mining.",
};

export default function ChairpersonMessagePage() {
  return (
    <main className="flex flex-col bg-bg-soft min-h-screen">
      <ChairpersonHero />
      <ChairpersonLetter />
      <ChairpersonClosing />
    </main>
  );
}
