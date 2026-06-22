"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function GlobalLoader() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="global-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#FDFDFD] flex items-center justify-center"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 relative flex items-center justify-center">
            <Image 
              src="https://res.cloudinary.com/dxhwcq1eg/image/upload/v1782125505/skt_global_mining/loader-animation.webp" 
              alt="Loading SKT Global Mining..." 
              fill
              priority
              className="object-contain rounded-2xl"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
