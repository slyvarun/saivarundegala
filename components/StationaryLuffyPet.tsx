'use client';

import React, { useState, useEffect, useRef } from 'react';
import { getAssetPath } from '@/utils/assetPath';

/**
 * StationaryLuffyPet Component
 * Plays all 7 pose frames strictly in order: pose_0.png -> pose_1.png -> pose_2.png -> pose_3.png -> pose_4.png -> pose_5.png -> pose_6.png.
 * Holds pose_6.png for a distinct pause/delay before continuing the loop back to pose_0.png.
 * Compatible with GitHub Pages subpath deployment via getAssetPath helper.
 */
export default function StationaryLuffyPet() {
  const [frameIdx, setFrameIdx] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [isMovingLeft, setIsMovingLeft] = useState(true);

  // Exact 7-pose animation sequence strictly in order
  const luffyFrames = [
    getAssetPath('/luffy_poses_10/pose_0.png'),
    getAssetPath('/luffy_poses_10/pose_1.png'),
    getAssetPath('/luffy_poses_10/pose_2.png'),
    getAssetPath('/luffy_poses_10/pose_3.png'),
    getAssetPath('/luffy_poses_10/pose_4.png'),
    getAssetPath('/luffy_poses_10/pose_5.png'),
    getAssetPath('/luffy_poses_10/pose_6.png'),
  ];

  const posRef = useRef(0);
  const dirRef = useRef(-1); // -1 = moving left, 1 = moving right

  useEffect(() => {
    // Preload all 7 pose frames into browser memory for 0ms lag-free switching
    luffyFrames.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let currentFrame = 0;
    let lastTime = performance.now();
    let animId: number;

    const updateLoop = (now: number) => {
      animId = requestAnimationFrame(loop);

      // Hold pose_6 for a distinct 850ms pause/delay before continuing back to pose_0
      const frameDelay = currentFrame === 6 ? 850 : 140;

      if (now - lastTime < frameDelay) return;
      lastTime = now;

      // Advance strictly in order: 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> pause -> 0
      currentFrame = (currentFrame + 1) % luffyFrames.length;
      setFrameIdx(currentFrame);

      // Patrol movement along horizontal path (0px to 120px)
      const MIN_X = 0;
      const MAX_X = 120;
      const STEP = 4;

      posRef.current += dirRef.current * STEP;

      if (posRef.current >= MAX_X) {
        posRef.current = MAX_X;
        dirRef.current = -1; // Walk right-to-left
        setIsMovingLeft(true);
      } else if (posRef.current <= MIN_X) {
        posRef.current = MIN_X;
        dirRef.current = 1; // Walk left-to-right
        setIsMovingLeft(false);
      }

      setOffsetX(posRef.current);
    };

    const loop = (now: number) => {
      updateLoop(now);
    };

    animId = requestAnimationFrame(loop);

    return () => cancelAnimationFrame(animId);
  }, []);

  return (
    <div className="relative inline-flex items-center ml-2.5 select-none shrink-0 h-16 w-[180px] overflow-visible">
      <div
        className="absolute top-1/2 -translate-y-1/2 transition-transform duration-75 ease-linear pointer-events-none"
        style={{
          transform: `translate3d(${offsetX}px, -50%, 0) scaleX(${isMovingLeft ? -1 : 1})`,
        }}
      >
        <img
          src={luffyFrames[frameIdx]}
          alt="Sequential Animated Luffy Pixel Pet"
          className="w-16 h-16 md:w-20 md:h-20 object-contain pointer-events-none drop-shadow-[0_4px_12px_rgba(245,158,11,0.6)]"
          style={{
            imageRendering: 'pixelated',
            WebkitBackfaceVisibility: 'hidden',
            backfaceVisibility: 'hidden',
          }}
        />
      </div>
    </div>
  );
}
