import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "About Us",
  description: "Learn about SKT Global Mining's history, leadership, and our journey since 2005.",
  path: "/about",
});

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
