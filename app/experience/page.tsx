import React from 'react';
import TelemetryHeader from '@/components/TelemetryHeader';
import IdentityTrack from '@/components/IdentityTrack';

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <TelemetryHeader />
      <div className="pt-4">
        <IdentityTrack />
      </div>
      <footer className="w-full max-w-5xl mx-auto py-8 px-4 border-t border-neutral-800 text-center font-mono text-xs text-neutral-500 relative z-20">
        <div>SAI VARUN DEGALA © 2026 // EXPERIENCE MATRIX</div>
      </footer>
    </main>
  );
}
