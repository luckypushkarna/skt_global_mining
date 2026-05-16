import { ServicesSection } from "@/components/organisms/ServicesSection";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Our Services",
  description: "Explore our comprehensive mining and industrial service capabilities.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesSection />
    </div>
  );
}
