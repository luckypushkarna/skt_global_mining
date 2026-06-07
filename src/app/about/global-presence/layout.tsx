import { generateMetadata } from "@/lib/seo";

export const metadata = generateMetadata({
  title: "Global Presence",
  description: "Explore SKT Global Mining's footprint, operations, networks, and scale across four continents.",
  path: "/about/global-presence",
});

export default function GlobalPresenceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
