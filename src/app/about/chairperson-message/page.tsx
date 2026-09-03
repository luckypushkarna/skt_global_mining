import { generateMetadata } from "@/lib/seo";
import ChairpersonHero from "@/components/about/chairperson/ChairpersonHero";
import ChairpersonLetter from "@/components/about/chairperson/ChairpersonLetter";
import ChairpersonClosing from "@/components/about/chairperson/ChairpersonClosing";

export const metadata = generateMetadata({
  title: "Chairperson's Message",
  description: "A message from Mr. Raj Talreja, Chairperson of the Board at SKT Global Mining.",
  path: "/about/chairperson-message",
});

export default function ChairpersonMessagePage() {
  return (
    <main className="flex flex-col bg-bg-soft min-h-screen">
      <ChairpersonHero />
      <ChairpersonLetter />
      <ChairpersonClosing />
    </main>
  );
}
