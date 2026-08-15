'use client';

import React, { useState } from 'react';
import StationaryLuffyPet from '@/components/StationaryLuffyPet';
import { getAssetPath } from '@/utils/assetPath';

export default function TelemetryHeader() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="w-full max-w-5xl mx-auto pt-6 px-4 md:px-0 relative z-20 font-space-mono mb-6">

      {/* Profile Photo with Pixel-to-Pixel Morphing Animation & Name */}
      <div className="flex items-center gap-4 px-2 md:px-6">

        {/* Small Profile Image Container with Pixel-to-Pixel Morphing */}
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setIsHovered(!isHovered)}
          className="group cursor-pointer h-14 w-14 md:h-16 md:w-16 shrink-0 rounded-xl relative z-30 overflow-hidden border-2 border-neutral-700 bg-neutral-950 shadow-xl transition-all duration-300 hover:scale-[1.05] hover:border-white"
          title="Hover/Click for Pixel-to-Pixel Morph into Spider-Man"
        >
          {/* Base Human Image with Pixelate/Blur Dissolve Out */}
          <img
            src={getAssetPath('/assest/Untitled design (5).png')}
            alt="Sai Varun Degala Profile"
            className={`w-full h-full object-cover object-center absolute inset-0 transition-all duration-400 ease-in-out ${isHovered
                ? 'opacity-0 scale-125 filter blur-sm contrast-200 brightness-150'
                : 'opacity-100 scale-100 filter blur-0 contrast-100'
              }`}
            style={{ imageRendering: 'pixelated' }}
          />

          {/* Spider-Man Graduation Alter Ego Pixelate Morph In */}
          <img
            src={getAssetPath('/spiderman_profile.jpg')}
            alt="Spider-Man Graduation Alter Ego"
            className={`w-full h-full object-cover object-center absolute inset-0 transition-all duration-400 ease-in-out ${isHovered
                ? 'opacity-100 scale-100 filter blur-0 contrast-110 brightness-100'
                : 'opacity-0 scale-75 filter blur-md contrast-200'
              }`}
            style={{ imageRendering: 'pixelated' }}
          />

          {/* Pixel Matrix Scanline Glitch Transition Overlay */}
          <div
            className={`absolute inset-0 pointer-events-none transition-opacity duration-300 bg-[radial-gradient(circle,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:4px_4px] ${isHovered ? 'opacity-40 animate-pulse' : 'opacity-0'
              }`}
          />
        </div>

        {/* Name Title & Stationary Luffy Pet Path */}
        <div className="flex flex-col space-y-0.5">
          <div className="flex items-center gap-2">
            <span className="text-[11px] text-neutral-400 font-doto">HOLA I'M 👋🏻</span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <h1 className="font-doto text-2xl md:text-4xl font-bold tracking-tight text-white uppercase flex items-center gap-2">
              <span>SAI VARUN</span>
              <span className="text-neutral-400">DEGALA</span>
            </h1>

            {/* Stationary Luffy Custom Pet on Dedicated Path Track */}
            <StationaryLuffyPet />
          </div>

          <div className="flex items-center gap-2.5 font-space-mono text-xs text-neutral-400">
            <span className="text-white font-bold">20</span>
            <span className="text-neutral-700">|</span>
            <span className="font-bold text-neutral-300 tracking-wider uppercase text-[11px]">
              DUAL-DOMAIN AI &amp; Biomedical Engg
            </span>
          </div>
        </div>
      </div>

    </header>
  );
}
