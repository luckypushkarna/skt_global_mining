import AboutUsSection from "@/components/ui/about-us-section";
import Demo from "@/components/ui/demo";
import { generateMetadata } from "@/lib/seo";
import { HorizontalSlideCards } from "@/components/ui/horizontal-slide-cards";

export const metadata = generateMetadata({
  title: "About Us",
  description: "Learn about SKT Global Mining's history, leadership, and our journey since 2005.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full bg-white pb-16 md:pb-24">
      <Demo />
      <AboutUsSection />
      <HorizontalSlideCards />
    </div>
  );
}
