import { AboutSection } from "@/components/organisms/AboutSection";
import { TeamSection } from "@/components/organisms/TeamSection";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "About Us",
  description: "Learn about SKT Global Mining's history, leadership, and our journey since 2005.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutSection />
      <TeamSection />
    </div>
  );
}
