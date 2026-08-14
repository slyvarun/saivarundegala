'use client';

import React, { useState } from 'react';
import { Play, Pause, SkipBack, SkipForward, Heart, Shuffle, Repeat, Volume2, Edit3, Box, Globe } from 'lucide-react';

export default function PersonalInterests() {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isLiked, setIsLiked] = useState<boolean>(true);
  const [selectedAlbum, setSelectedAlbum] = useState<number>(0);

  const featuredTrack = {
    title: "There's Nothing Holdin' Me Back",
    artist: 'Shawn Mendes',
    album: 'Illuminate (Deluxe)',
    duration: '3:19',
    currentTime: '1:42',
    progressPct: 51,
  };

  const albumCollection = [
    {
      id: 'shawn',
      artist: 'Shawn Mendes',
      album: 'Illuminate',
      track: "There's Nothing Holdin' Me Back",
      img: '/shawn.jpg',
      badge: 'FEATURED',
    },
    {
      id: 'mj',
      artist: 'Michael Jackson',
      album: 'Thriller & Bad',
      track: 'Billie Jean // Beat It',
      img: '/mj.jpg',
      badge: 'POP KING',
    },
    {
      id: 'billie',
      artist: 'Billie Eilish',
      album: 'Happier Than Ever',
      track: 'Ocean Eyes // Bad Guy',
      img: '/BillieEilish.webp',
      badge: 'ALT-POP',
    },
    {
      id: 'edsheeran',
      artist: 'Ed Sheeran',
      album: '÷ Divide & = Equals',
      track: 'Shape of You // Perfect',
      img: '/ed.jpg',
      badge: 'ACOUSTIC',
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto py-6 px-4 md:px-0 relative z-20 font-space-mono space-y-6">

      {/* SPOTIFY AUDIO PLAYER HEADER */}
      <div className="flex items-center justify-between border-b border-neutral-800 pb-2.5">
        <div className="flex items-center gap-2">
          {/* Authentic Spotify Brand Icon */}
          <svg className="w-5 h-5 text-[#1DB954] fill-current" viewBox="0 0 24 24">
            <path d="M12 0C5.376 0 0 5.376 0 12s5.376 12 12 12 12-5.376 12-12S18.624 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.48.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141 C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C14.64 8.22 8.4 8.04 4.86 9.12c-.6.18-1.2-.18-1.38-.72-.18-.6.18-1.2.72-1.38 4.08-1.26 10.92-1.08 15.6 1.68.54.3.72.96.42 1.5-.3.54-.96.72-1.5.42z" />
          </svg>
          <h2 className="text-xs font-bold text-white font-doto uppercase tracking-widest">
            SPOTIFY AUDIO PLAYER &amp; MUSIC TASTE
          </h2>
        </div>
        <span className="text-[9px] text-[#1DB954] font-mono font-bold bg-[#1DB954]/10 border border-[#1DB954]/30 px-2 py-0.5 rounded">
          SPOTIFY CONNECTED
        </span>
      </div>

      {/* AUTHENTIC SPOTIFY PLAYER WIDGET */}
      <div className="bg-[#121212] border border-[#1DB954]/40 rounded-2xl p-4 md:p-5 shadow-[0_0_25px_rgba(29,185,84,0.15)] relative overflow-hidden space-y-4">

        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">

          {/* Artist Photo Cover */}
          <div className="sm:col-span-3 flex justify-center">
            <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden border border-neutral-700 bg-neutral-900 shadow-xl relative group shrink-0">
              <img
                src={albumCollection[selectedAlbum].img}
                alt={albumCollection[selectedAlbum].artist}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute top-2 left-2 bg-[#1DB954] text-black text-[8px] font-bold px-1.5 py-0.5 rounded font-mono">
                SPOTIFY
              </div>
            </div>
          </div>

          {/* Track Details & Player Controls */}
          <div className="sm:col-span-9 space-y-3">

            <div className="flex items-start justify-between">
              <div>
                <span className="text-[9px] text-[#1DB954] font-mono uppercase tracking-wider font-bold">
                  PLAYING FROM ALBUM: {albumCollection[selectedAlbum].album}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white font-doto leading-tight mt-0.5">
                  {albumCollection[selectedAlbum].track}
                </h3>
                <div className="text-xs font-bold text-neutral-300 font-mono">
                  {albumCollection[selectedAlbum].artist}
                </div>
              </div>

              <button
                onClick={() => setIsLiked(!isLiked)}
                className="p-1.5 rounded-full hover:bg-neutral-800 transition-colors"
              >
                <Heart className={`w-4 h-4 ${isLiked ? 'text-[#1DB954] fill-[#1DB954]' : 'text-neutral-400'}`} />
              </button>
            </div>

            {/* Spotify Progress Bar */}
            <div className="space-y-1">
              <div className="w-full bg-neutral-800 h-1.5 rounded-full overflow-hidden relative cursor-pointer">
                <div
                  className="bg-[#1DB954] h-full rounded-full transition-all duration-300"
                  style={{ width: `${featuredTrack.progressPct}%` }}
                />
              </div>
              <div className="flex justify-between text-[9px] text-neutral-400 font-mono">
                <span>{featuredTrack.currentTime}</span>
                <span>{featuredTrack.duration}</span>
              </div>
            </div>

            {/* Playback Controls Row */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-3">
                <Shuffle className="w-3.5 h-3.5 text-neutral-400 hover:text-white transition-colors cursor-pointer" />
                <SkipBack className="w-4 h-4 text-white hover:text-[#1DB954] transition-colors cursor-pointer" />
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="w-8 h-8 rounded-full bg-[#1DB954] hover:scale-105 text-black flex items-center justify-center transition-all shadow-[0_0_12px_rgba(29,185,84,0.4)]"
                >
                  {isPlaying ? <Pause className="w-4 h-4 fill-black" /> : <Play className="w-4 h-4 fill-black ml-0.5" />}
                </button>
                <SkipForward className="w-4 h-4 text-white hover:text-[#1DB954] transition-colors cursor-pointer" />
                <Repeat className="w-3.5 h-3.5 text-[#1DB954] transition-colors cursor-pointer" />
              </div>

              <div className="flex items-center gap-1 text-[9px] text-neutral-400 font-mono">
                <Volume2 className="w-3.5 h-3.5 text-neutral-400" />
                <div className="w-12 bg-neutral-800 h-1 rounded-full overflow-hidden">
                  <div className="bg-neutral-300 h-full w-3/4" />
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* ALBUMS CAROUSEL WITH USER ARTIST PHOTOS */}
      <div className="space-y-2">
        <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider font-bold">
          ARTIST ALBUMS COLLECTION
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {albumCollection.map((alb, idx) => (
            <div
              key={alb.id}
              onClick={() => setSelectedAlbum(idx)}
              className={`bg-[#0B0D0E] border rounded-xl p-2.5 flex items-center gap-2.5 cursor-pointer transition-all hover:scale-[1.02] ${selectedAlbum === idx ? 'border-[#1DB954] bg-[#121212]' : 'border-neutral-800'
                }`}
            >
              <div className="w-9 h-9 rounded-lg overflow-hidden border border-neutral-700 bg-neutral-900 shrink-0">
                <img src={alb.img} alt={alb.artist} className="w-full h-full object-cover" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-[10px] font-bold text-white font-doto truncate">{alb.artist}</div>
                <div className="text-[8px] text-neutral-400 font-mono truncate">{alb.album}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* COMPACT HOBBIES WITH UNIQUE 3D FLOATING ELEMENTS */}
      <div className="space-y-2.5 pt-2">
        <div className="text-[10px] text-neutral-400 font-mono uppercase tracking-wider font-bold">
          PERSONAL HOBBIES &amp; UNIQUE 3D PASSIONS
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

          {/* HOBBY 1: 3D SKETCHING TABLET */}
          <div className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-3.5 space-y-2 hover:border-purple-400 transition-all group perspective-500 shadow-xl">
            <div className="flex items-center gap-2.5">
              {/* 3D Tilted Sketch Element */}
              <div
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-900 to-purple-950 border border-purple-500/50 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(168,85,247,0.4)] transform rotate-x-12 -rotate-y-12 group-hover:rotate-0 transition-transform duration-300"
              >
                <Edit3 className="w-4 h-4 text-purple-300" />
              </div>
              <h4 className="text-xs font-bold text-white font-doto">I Love Sketching</h4>
            </div>
            <p className="text-[10px] text-neutral-400 font-mono leading-relaxed">
              Drawing retro 16-bit pixel art graphics, anatomical studies, and conceptual UI wireframes.
            </p>
          </div>

          {/* HOBBY 2: 3D ISOMETRIC RUBIK'S CUBE */}
          <div className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-3.5 space-y-2 hover:border-amber-400 transition-all group perspective-500 shadow-xl">
            <div className="flex items-center gap-2.5">
              {/* 3D Isometric Rubik's Cube Element */}
              <div
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-amber-900 to-amber-950 border border-amber-500/50 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(245,158,11,0.4)] transform -rotate-x-12 rotate-y-12 group-hover:rotate-0 transition-transform duration-300"
              >
                <Box className="w-4 h-4 text-amber-300" />
              </div>
              <h4 className="text-xs font-bold text-white font-doto">Resolving Rubik's Cube</h4>
            </div>
            <p className="text-[10px] text-neutral-400 font-mono leading-relaxed">
              Speedcubing &amp; resolving 3x3 Rubik's cubes to sharpen spatial algorithmic problem solving.
            </p>
          </div>

          {/* HOBBY 3: 3D YOUTUBE & WANDERER CARD */}
          <div className="bg-[#0B0D0E] border border-neutral-800 rounded-xl p-3.5 space-y-2 hover:border-red-500 transition-all group perspective-500 shadow-xl">
            <div className="flex items-center gap-2.5">
              {/* 3D Tilted Authentic YouTube Red Logo Element */}
              <div
                className="w-8 h-8 rounded-lg bg-gradient-to-br from-red-900 to-red-950 border border-red-500/50 flex items-center justify-center shrink-0 shadow-[0_4px_12px_rgba(239,68,68,0.4)] transform rotate-x-12 rotate-y-12 group-hover:rotate-0 transition-transform duration-300"
              >
                <svg className="w-4 h-4 text-[#FF0000] fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </div>
              <h4 className="text-xs font-bold text-white font-doto">Wanderer &amp; Socials</h4>
            </div>
            <p className="text-[10px] text-neutral-400 font-mono leading-relaxed">
              Traveling the world, recording content to post on social platforms, and talking to different people.
            </p>
          </div>

        </div>
      </div>

    </section>
  );
}
