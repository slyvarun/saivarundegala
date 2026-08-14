'use client';

import React, { useEffect, useState } from 'react';

/**
 * SpideyPet Component
 * Authentic Oneko-style Spider-Man Desktop Pet.
 * Stays standing peacefully near your cursor without overlapping it.
 * Wakes up & chases ONLY when the cursor moves > 80px away, stepping 16px per frame and stopping at 32px radius (exact Oneko mechanics).
 */
export default function SpideyPet() {
  const [pos, setPos] = useState({ x: 150, y: 150 });
  const [currentFrame, setCurrentFrame] = useState<string>('/spidey_oneko_poses/pose_0.png');
  const [isFlipped, setIsFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  // Full running sequence sliced from 593d0cb330d76ab.jpg
  const runSequence = [
    '/spidey_oneko_poses/pose_1.png',
    '/spidey_oneko_poses/pose_2.png',
    '/spidey_oneko_poses/pose_3.png',
    '/spidey_oneko_poses/pose_4.png',
  ];

  const standingFrame = '/spidey_oneko_poses/pose_0.png';

  const STOP_RADIUS = 32;       // Stops running when within 32px of target
  const CHASE_THRESHOLD = 80;   // Wakes up & chases ONLY when cursor moves > 80px away (exact Oneko threshold)

  useEffect(() => {
    if (window.innerWidth <= 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(false);
      return;
    }

    // Preload all 5 standardized pose frames into browser memory
    [standingFrame, ...runSequence].forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    let spideyX = window.innerWidth / 2;
    let spideyY = window.innerHeight / 2;
    let targetX = spideyX;
    let targetY = spideyY;
    let frameIndex = 0;
    let isChasing = false;

    const handleMouseMove = (e: MouseEvent) => {
      // Offset cursor by 16px so pet doesn't suffocate or obscure mouse pointer
      targetX = e.clientX - 16;
      targetY = e.clientY - 16;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let lastStepTime = performance.now();
    let animId: number;

    const loop = (now: number) => {
      animId = requestAnimationFrame(loop);

      // Authentic retro 10 FPS step throttle (~100ms per frame) like Oneko
      if (now - lastStepTime < 100) return;
      lastStepTime = now;

      const dx = targetX - spideyX;
      const dy = targetY - spideyY;
      const dist = Math.hypot(dx, dy);

      // 1. DIRECTION FLIP
      if (dx < -2) setIsFlipped(true);
      else if (dx > 2) setIsFlipped(false);

      // 2. ONEKO CHASE MECHANIC: Start chasing only when cursor moves > 80px away
      if (dist > CHASE_THRESHOLD) {
        isChasing = true;
      } else if (dist < STOP_RADIUS) {
        isChasing = false;
      }

      if (isChasing) {
        // Discrete retro 16px step towards target (exact Oneko speed)
        const speed = 16;
        spideyX += (dx / dist) * speed;
        spideyY += (dy / dist) * speed;

        // Advance 1 running pose frame for each discrete step
        frameIndex = (frameIndex + 1) % runSequence.length;
        setCurrentFrame(runSequence[frameIndex]);
      } else {
        // Standing Pose when resting near cursor
        setCurrentFrame(standingFrame);
      }

      setPos({ x: spideyX, y: spideyY });
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      data-spidey-pet="true"
      aria-hidden="true"
      className="fixed z-[9999999] pointer-events-none w-[36px] h-[36px] select-none flex items-center justify-center isolation-isolate"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        transform: isFlipped ? 'scaleX(-1)' : 'scaleX(1)',
      }}
    >
      <img
        src={currentFrame}
        alt="Spider-Man Character"
        className="w-full h-full object-contain pointer-events-none drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]"
        style={{
          imageRendering: 'pixelated',
          WebkitBackfaceVisibility: 'hidden',
          backfaceVisibility: 'hidden',
        }}
        onError={() => {
          setCurrentFrame('/spidey_oneko_poses/pose_0.png');
        }}
      />
    </div>
  );
}
