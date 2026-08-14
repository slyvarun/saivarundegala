'use client';

import React, { useState, useEffect } from 'react';

export default function CountdownTo50() {
  const targetDate = new Date('2055-05-19T00:00:00');

  const [timeLeft, setTimeLeft] = useState({
    years: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        const totalSeconds = Math.floor(difference / 1000);
        const totalMinutes = Math.floor(totalSeconds / 60);
        const totalHours = Math.floor(totalMinutes / 60);
        const totalDays = Math.floor(totalHours / 24);

        const years = Math.floor(totalDays / 365.25);
        const remainingDays = Math.floor(totalDays % 365.25);
        const hours = totalHours % 24;
        const minutes = totalMinutes % 60;
        const seconds = totalSeconds % 60;

        setTimeLeft({ years, days: remainingDays, hours, minutes, seconds });
      }
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="transform -rotate-3 w-auto bg-[#0A0A0A] border-2 border-dashed border-neutral-600 rounded-xl p-3 shadow-2xl relative overflow-hidden font-space-mono"
      style={{
        boxShadow: '0 8px 24px rgba(0, 0, 0, 0.7), inset 0 0 10px rgba(255, 255, 255, 0.03)',
      }}
    >
      {/* Stamp Header */}
      <div className="flex items-center justify-between gap-3 border-b border-neutral-800 pb-1.5 mb-2">
        <span className="text-[9px] font-bold text-white font-doto uppercase tracking-wider">
          10 MAY 2005 - 19 MAY 2055
        </span>

      </div>

      {/* Title */}
      <div className="text-[10px] font-bold text-white font-doto uppercase tracking-wide">
        ROADMAP TO AGE 50 ACHIEVEMENTS
      </div>

      {/* Real-time Countdown Banner */}
      <div className="grid grid-cols-5 gap-1 my-2 text-center">
        <div className="bg-neutral-900 border border-neutral-800 p-1 rounded">
          <div className="text-xs font-bold text-white font-doto">{timeLeft.years}</div>
          <div className="text-[7px] text-neutral-400">YRS</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-1 rounded">
          <div className="text-xs font-bold text-white font-doto">{timeLeft.days}</div>
          <div className="text-[7px] text-neutral-400">DAYS</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-1 rounded">
          <div className="text-xs font-bold text-white font-doto">{timeLeft.hours}</div>
          <div className="text-[7px] text-neutral-400">HRS</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-1 rounded">
          <div className="text-xs font-bold text-white font-doto">{timeLeft.minutes}</div>
          <div className="text-[7px] text-neutral-400">MINS</div>
        </div>
        <div className="bg-neutral-900 border border-neutral-800 p-1 rounded">
          <div className="text-xs font-bold text-white font-doto">{timeLeft.seconds}</div>
          <div className="text-[7px] text-neutral-400">SECS</div>
        </div>
      </div>
    </div>
  );
}
