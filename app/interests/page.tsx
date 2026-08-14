import React from 'react';
import TelemetryHeader from '@/components/TelemetryHeader';
import PersonalInterests from '@/components/PersonalInterests';

export default function InterestsPage() {
  return (
    <main className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <TelemetryHeader />
      <div className="pt-4">
        <PersonalInterests />
      </div>
      <footer className="w-full max-w-5xl mx-auto py-8 px-4 border-t border-neutral-800 text-center font-mono text-xs text-neutral-500 relative z-20">
        <div>SAI VARUN DEGALA © 2026 // PERSONAL INTERESTS &amp; MINDSET</div>
      </footer>
    </main>
  );
}
