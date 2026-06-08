import { HeroSkeleton, SectionHeaderSkeleton, CardSkeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen bg-bg-soft flex flex-col pt-24 px-6 md:px-10 lg:px-16 pb-20 gap-16">
      {/* Simulate a Hero Section load */}
      <HeroSkeleton />

      {/* Simulate content section load */}
      <div className="space-y-12 max-w-7xl mx-auto w-full mt-8">
        <SectionHeaderSkeleton />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CardSkeleton />
          <CardSkeleton />
          <CardSkeleton />
        </div>
      </div>
    </div>
  );
}
