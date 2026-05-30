import { CAPABILITIES, getCapabilityBySlug } from "@/data/capabilities";
import { notFound } from "next/navigation";
import { CapabilityDetailClient } from "./CapabilityDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// ── Generate Static Paths for all 12 capabilities (Server Only) ──
export async function generateStaticParams() {
  return CAPABILITIES.map((capability) => ({
    slug: capability.slug,
  }));
}

// ── Server Component ──────────────────────────────────────────────
export default async function CapabilityDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const capability = getCapabilityBySlug(slug);

  if (!capability) {
    notFound();
  }

  // Pass only the slug — client component looks up all data including icon
  return <CapabilityDetailClient slug={slug} />;
}
