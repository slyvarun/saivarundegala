'use client';

import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';

export default function LunarTimeWidget() {
  const [timeStr, setTimeStr] = useState('');
  const [dateStr, setDateStr] = useState('');
  const [moonPhase, setMoonPhase] = useState({ name: 'WAXING GIBBOUS', icon: '🌔', illumination: '84%' });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      
      // Realtime Time format: HH:MM:SS AM/PM
      setTimeStr(now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      
      // Realtime Date format: MON, DD MMM YYYY
      setDateStr(now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' }).toUpperCase());

      // Astronomical Moon Phase Calculation
      const y = now.getFullYear();
      const m = now.getMonth() + 1;
      const d = now.getDate();
      
      let year = y;
      let month = m;
      if (month < 3) {
        year -= 1;
        month += 12;
      }
      const c = 365.25 * year;
      const e = 30.6 * month;
      let jd = c + e + d - 694039.09;
      jd /= 29.5305882;
      const b = parseInt(jd.toString(), 10);
      jd -= b;
      const phaseVal = Math.round(jd * 8) % 8;
      const percent = Math.min(100, Math.max(0, Math.round(jd * 100)));

      const phases = [
        { name: 'NEW MOON', icon: '🌑', illumination: '0%' },
        { name: 'WAXING CRESCENT', icon: '🌒', illumination: `${percent}%` },
        { name: 'FIRST QUARTER', icon: '🌓', illumination: '50%' },
        { name: 'WAXING GIBBOUS', icon: '🌔', illumination: `${percent}%` },
        { name: 'FULL MOON', icon: '🌕', illumination: '100%' },
        { name: 'WANING GIBBOUS', icon: '🌖', illumination: `${100 - percent}%` },
        { name: 'LAST QUARTER', icon: '🌗', illumination: '50%' },
        { name: 'WANING CRESCENT', icon: '🌘', illumination: `${100 - percent}%` },
      ];

      setMoonPhase(phases[phaseVal] || phases[3]);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-2.5 md:p-3 flex flex-wrap items-center justify-between gap-3 text-xs font-mono font-space-mono shadow-inner">
      {/* Realtime Clock */}
      <div className="flex items-center gap-2">
        <Clock className="w-3.5 h-3.5 text-white animate-pulse" />
        <span className="text-white font-bold font-doto tracking-wider text-xs md:text-sm">{timeStr}</span>
        <span className="text-[9px] text-neutral-400 font-bold border border-neutral-800 px-1 py-0.2 rounded">IST</span>
      </div>

      {/* Realtime Date */}
      <div className="flex items-center gap-2">
        <Calendar className="w-3.5 h-3.5 text-neutral-400" />
        <span className="text-neutral-300 font-bold text-xs">{dateStr}</span>
      </div>

      {/* 8-Bit Pixel Lunar Position & Moon Phase Indicator */}
      <div className="flex items-center gap-2 bg-[#121212] border border-neutral-700 px-2.5 py-1 rounded-lg">
        <span
          className="text-base leading-none select-none filter drop-shadow-[0_0_6px_rgba(255,255,255,0.4)]"
          style={{ imageRendering: 'pixelated' }}
        >
          {moonPhase.icon}
        </span>
        <div className="flex flex-col text-[9px]">
          <span className="text-white font-bold font-doto tracking-tight">{moonPhase.name}</span>
          <span className="text-neutral-400 font-mono">PIXEL LUNAR: {moonPhase.illumination}</span>
        </div>
      </div>
    </div>
  );
}
