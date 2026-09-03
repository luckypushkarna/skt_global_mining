import { CAPABILITIES, getCapabilityBySlug } from "@/data/capabilities";
import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import { generateMetadata as generateSeoMetadata } from "@/lib/seo";
import { CapabilityDetailClient } from "./CapabilityDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ── Generate Static Paths for all 12 capabilities (Server Only) ──
export async function generateStaticParams() {
  const hardcodedSlugs = [
    "future-expansion",
    "infrastructure-systems",
    "operational-command",
    "rescue-systems",
    "safety-compliance",
    "strategic-warehousing",
    "underground-workshop",
    "workforce-facilities"
  ];

  return CAPABILITIES
    .filter((capability) => !hardcodedSlugs.includes(capability.slug))
    .map((capability) => ({
      slug: capability.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) return { robots: { index: false, follow: false } };

  return generateSeoMetadata({
    title: `${capability.title} Mining Services Zambia`,
    description: capability.desc,
    path: capability.href ?? `/capabilities/${slug}`,
    keywords: [capability.title, `${capability.title} Zambia`],
  });
}

// ── Server Component ──────────────────────────────────────────────
export default async function CapabilityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    notFound();
  }

  // Redirect if this capability has been moved to an operations page
  if (capability.href) {
    permanentRedirect(capability.href);
  }

  // Pass only the slug - client component looks up all data including icon
  return <CapabilityDetailClient slug={slug} />;
}
