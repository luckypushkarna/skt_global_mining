"use client";

import { useState, useEffect, useRef, type RefObject } from "react";

interface UseInViewOptions {
  readonly threshold?: number | number[];
  readonly rootMargin?: string;
  readonly once?: boolean;
}

interface UseInViewReturn<T extends HTMLElement> {
  readonly ref: RefObject<T>;
  readonly isInView: boolean;
  readonly entry: IntersectionObserverEntry | null;
}

export function useInView<T extends HTMLElement = HTMLDivElement>(
  options: UseInViewOptions = {}
): UseInViewReturn<T> {
  const { threshold = 0.1, rootMargin = "0px", once = true } = options;
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([observerEntry]) => {
        if (observerEntry) {
          setEntry(observerEntry);
          if (observerEntry.isIntersecting) {
            setIsInView(true);
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            setIsInView(false);
          }
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once]);

  return { ref, isInView, entry };
}
