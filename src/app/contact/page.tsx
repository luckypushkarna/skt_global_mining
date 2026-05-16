import { ContactSection } from "@/components/organisms/ContactSection";
import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Contact Us",
  description: "Get in touch with SKT Global Mining for your next project or inquiry.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactSection />
    </div>
  );
}
