'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Briefcase, Code2, Zap, FileText, Headphones } from 'lucide-react';

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export default function FloatingRightNav() {
  const pathname = usePathname();

  // Synthesizes a Heavy Mechanical Tactical Click Sound using Web Audio API
  const playHeavyClickSound = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      const ctx = new AudioContextClass();

      // 1. Heavy Sub-Bass Punch
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();

      osc1.type = 'triangle';
      osc1.frequency.setValueAtTime(160, ctx.currentTime);
      osc1.frequency.exponentialRampToValueAtTime(25, ctx.currentTime + 0.09);

      gain1.gain.setValueAtTime(0.9, ctx.currentTime);
      gain1.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);

      osc1.connect(gain1);
      gain1.connect(ctx.destination);

      // 2. Sharp Mechanical Click Transient
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();

      osc2.type = 'square';
      osc2.frequency.setValueAtTime(1400, ctx.currentTime);
      osc2.frequency.exponentialRampToValueAtTime(100, ctx.currentTime + 0.035);

      gain2.gain.setValueAtTime(0.6, ctx.currentTime);
      gain2.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.035);

      osc2.connect(gain2);
      gain2.connect(ctx.destination);

      osc1.start(ctx.currentTime);
      osc2.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.1);
      osc2.stop(ctx.currentTime + 0.035);
    } catch (err) {
      console.warn('Click audio synthesis:', err);
    }
  };

  const navItems: NavItem[] = [
    { path: '/', label: 'Overview & Identity (Home)', icon: <Home className="w-4 h-4" /> },
    { path: '/experience', label: 'Experience Matrix', icon: <Briefcase className="w-4 h-4" /> },
    { path: '/projects', label: 'Project Modules', icon: <Code2 className="w-4 h-4" /> },
    { path: '/activities', label: 'Activities & Community', icon: <Zap className="w-4 h-4" /> },
    { path: '/blogs', label: 'Medium Publications', icon: <FileText className="w-4 h-4" /> },
    { path: '/interests', label: 'Personal & Music', icon: <Headphones className="w-4 h-4" /> },
  ];

  return (
    <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden sm:flex flex-col gap-3 font-space-mono">
      <div className="bg-[#121212]/95 backdrop-blur-md border border-neutral-800 p-2 rounded-2xl shadow-2xl flex flex-col gap-2">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          return (
            <div key={item.path} className="relative group flex items-center justify-end">
              
              {/* Monospaced Hover Tooltip */}
              <div className="absolute right-12 px-3 py-1 bg-black border border-neutral-700 text-stone-200 text-[11px] rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 shadow-xl font-mono">
                <span className="text-white font-bold mr-1">//</span>
                {item.label}
              </div>

              {/* Next.js Link Button with Instant Prefetch & Heavy Click Sound */}
              <Link
                href={item.path}
                prefetch={true}
                onClick={playHeavyClickSound}
                aria-label={item.label}
                className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 relative ${
                  isActive
                    ? 'bg-white text-black shadow-[0_0_15px_rgba(255,255,255,0.4)] font-bold scale-105 border border-white'
                    : 'bg-[#0A0A0A] text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
                }`}
              >
                {item.icon}

                {/* Active Indicator Dot */}
                {isActive && (
                  <span className="absolute -left-1 w-1.5 h-1.5 bg-white rounded-full animate-ping" />
                )}
              </Link>
            </div>
          );
        })}
      </div>
    </nav>
  );
}
