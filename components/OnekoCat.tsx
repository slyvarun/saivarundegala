'use client';

import React, { useEffect, useRef, useState } from 'react';

export default function OnekoCat() {
  const [pos, setPos] = useState({ x: 100, y: 100 });
  const [bgPos, setBgPos] = useState({ x: -96, y: -96 });
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Disable on mobile/touch screens or reduced motion
    if (window.innerWidth <= 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(false);
      return;
    }

    let catX = 100;
    let catY = 100;
    let targetX = 100;
    let targetY = 100;
    let frameCount = 0;
    let idleTime = 0;
    let animState = 'idle';

    // Oneko sprite sheet coordinate matrix (32x32px frames)
    const spriteSets: Record<string, [number, number][]> = {
      idle: [[-3, -3]],
      alert: [[-7, -3]],
      scratchSelf: [[-5, 0], [-6, 0]],
      sleeping: [[-2, 0], [-2, -1]],
      N: [[-1, -2], [-1, -3]],
      NE: [[0, -2], [0, -3]],
      E: [[1, -2], [1, -3]],
      SE: [[2, -2], [2, -3]],
      S: [[-3, -1], [-3, -2]],
      SW: [[-2, -1], [-2, -2]],
      W: [[-1, -1], [-1, 0]],
      NW: [[0, -1], [0, 0]],
    };

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX - 16;
      targetY = e.clientY - 16;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let lastFrameTime = performance.now();
    let animId: number;

    const loop = (now: number) => {
      animId = requestAnimationFrame(loop);

      // Throttle to 10 FPS (100ms per frame) for retro feel
      if (now - lastFrameTime < 100) return;
      lastFrameTime = now;
      frameCount++;

      const dx = targetX - catX;
      const dy = targetY - catY;
      const dist = Math.hypot(dx, dy);

      if (dist < 32) {
        // Idle Behavior
        idleTime++;
        if (idleTime > 30) {
          // Fall asleep after standing still
          animState = 'sleeping';
          const frames = spriteSets.sleeping;
          const frame = frames[frameCount % frames.length];
          setBgPos({ x: frame[0] * 32, y: frame[1] * 32 });
        } else if (idleTime > 15) {
          // Scratch self
          animState = 'scratchSelf';
          const frames = spriteSets.scratchSelf;
          const frame = frames[frameCount % frames.length];
          setBgPos({ x: frame[0] * 32, y: frame[1] * 32 });
        } else {
          setBgPos({ x: -96, y: -96 });
        }
      } else {
        // Wake up & chase mouse
        idleTime = 0;
        const speed = 16;
        catX += (dx / dist) * speed;
        catY += (dy / dist) * speed;

        // Calculate 8-way direction angle
        const angle = Math.atan2(dy, dx) * (180 / Math.PI);
        let dir = 'S';

        if (angle > -22.5 && angle <= 22.5) dir = 'E';
        else if (angle > 22.5 && angle <= 67.5) dir = 'SE';
        else if (angle > 67.5 && angle <= 112.5) dir = 'S';
        else if (angle > 112.5 && angle <= 157.5) dir = 'SW';
        else if (angle > 157.5 || angle <= -157.5) dir = 'W';
        else if (angle > -157.5 && angle <= -112.5) dir = 'NW';
        else if (angle > -112.5 && angle <= -67.5) dir = 'N';
        else if (angle > -67.5 && angle <= -22.5) dir = 'NE';

        const frames = spriteSets[dir] || spriteSets.S;
        const frame = frames[frameCount % frames.length];
        setBgPos({ x: frame[0] * 32, y: frame[1] * 32 });
      }

      setPos({ x: catX, y: catY });
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
      data-oneko-cat="true"
      aria-hidden="true"
      className="fixed z-[999999] pointer-events-none w-8 h-8 select-none transition-transform duration-75"
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        backgroundImage: 'url("/oneko.gif")',
        backgroundPosition: `${bgPos.x}px ${bgPos.y}px`,
        imageRendering: 'pixelated',
      }}
    />
  );
}
