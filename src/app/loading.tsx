export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] bg-[#FDFDFD] flex items-center justify-center">
      <div className="w-24 h-24 sm:w-32 sm:h-32 relative flex items-center justify-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/loader-animation.webp" 
          alt="Loading SKT Global Mining..." 
          className="w-full h-full object-contain rounded-2xl"
        />
      </div>
    </div>
  );
}
