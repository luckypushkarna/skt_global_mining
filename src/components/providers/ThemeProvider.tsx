"use client";

import { type ReactNode } from "react";

interface ThemeProviderProps {
  readonly children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps): JSX.Element {
  return (
    <div className="min-h-screen bg-white text-neutral-900 antialiased">
      {children}
    </div>
  );
}
