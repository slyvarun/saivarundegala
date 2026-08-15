'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

/**
 * PageTransition Component
 * Provides GPU-accelerated 0.25s silky smooth fade & slide page transition on route shift.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="page-shift-enter w-full min-h-screen">
      {children}
    </div>
  );
}
