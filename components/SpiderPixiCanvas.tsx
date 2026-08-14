'use client';

import React, { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';

export default function SpiderPixiCanvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !containerRef.current) return;

    let app: PIXI.Application | null = null;
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;
    let handleResize: (() => void) | null = null;

    const initPixi = async () => {
      try {
        // Initialize WebGL/Canvas PixiJS Application
        app = new PIXI.Application({
          width: window.innerWidth,
          height: window.innerHeight,
          backgroundAlpha: 0, // Transparent background
          antialias: false,
        });

        const view = (app.view || (app as any).canvas) as HTMLCanvasElement;
        if (view && containerRef.current) {
          view.style.imageRendering = 'pixelated';
          view.style.position = 'fixed';
          view.style.inset = '0';
          view.style.pointerEvents = 'none';
          view.style.zIndex = '999';
          containerRef.current.appendChild(view);
        }

        // Manual resize handler for Pixi renderer & canvas
        handleResize = () => {
          if (!app) return;
          app.renderer.resize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        // --- LOAD SPRITE TEXTURE & CHROMA KEY ---
        const baseImg = new Image();
        baseImg.crossOrigin = 'anonymous';
        baseImg.src = '/spidey_sheet.jpg';

        await new Promise((resolve) => {
          baseImg.onload = resolve;
          baseImg.onerror = resolve;
        });

        // Key out solid white background in canvas
        const filterCanvas = document.createElement('canvas');
        filterCanvas.width = baseImg.naturalWidth || 735;
        filterCanvas.height = baseImg.naturalHeight || 460;
        const fCtx = filterCanvas.getContext('2d');

        let spriteTexture: PIXI.Texture;

        if (fCtx) {
          fCtx.drawImage(baseImg, 0, 0);
          const imgData = fCtx.getImageData(0, 0, filterCanvas.width, filterCanvas.height);
          const data = imgData.data;

          for (let i = 0; i < data.length; i += 4) {
            if (data[i] > 230 && data[i + 1] > 230 && data[i + 2] > 230) {
              data[i + 3] = 0; // Set white background transparent
            }
          }
          fCtx.putImageData(imgData, 0, 0);
          spriteTexture = PIXI.Texture.from(filterCanvas);
        } else {
          spriteTexture = PIXI.Texture.from('/spidey_sheet.jpg');
        }

        // --- SPRITE SHEET FRAME SLICING ---
        const frameW = 48;
        const frameH = 48;

        const createFrameTexture = (col: number, rowY: number) => {
          const rect = new PIXI.Rectangle(col * frameW, rowY, frameW, frameH);
          const src = (spriteTexture as any).source || (spriteTexture as any).baseTexture || spriteTexture;
          try {
            return new PIXI.Texture({
              source: src,
              frame: rect,
            });
          } catch (e) {
            return new (PIXI.Texture as any)(src, rect);
          }
        };

        // Frame Sequences
        const runFrames = [0, 1, 2, 3, 4, 5].map((col) => createFrameTexture(col, 4));
        const swingFrames = [0, 1, 2, 3, 4].map((col) => createFrameTexture(col, 200));
        const crouchFrame = createFrameTexture(3, 380);

        // Pixi Container & Web Graphics
        const stage = app.stage;
        const webGraphic = new PIXI.Graphics();
        stage.addChild(webGraphic);

        const spideyContainer = new PIXI.Container();
        const spideySprite = new PIXI.Sprite(runFrames[0]);
        spideySprite.anchor.set(0.5, 0.5);
        spideySprite.scale.set(1.5, 1.5);
        spideyContainer.addChild(spideySprite);
        stage.addChild(spideyContainer);

        // Position & Mouse Target Tracking
        let posX = window.innerWidth * 0.5;
        let posY = 150;
        let targetX = posX;
        let targetY = posY;
        let frameIndex = 0;
        let animCounter = 0;

        handleMouseMove = (e: MouseEvent) => {
          targetX = e.clientX;
          targetY = e.clientY;
        };

        window.addEventListener('mousemove', handleMouseMove);

        // --- PIXI TICKER LOOP ---
        app.ticker.add(() => {
          animCounter++;
          const dx = targetX - posX;
          const dy = targetY - posY;
          const dist = Math.hypot(dx, dy);

          webGraphic.clear();

          if (dist < 45) {
            // Crouch Stance
            spideySprite.texture = crouchFrame;
            spideyContainer.rotation *= 0.85;
          } else {
            // Chasing & Swinging
            const speed = Math.min(dist * 0.22, 16);
            posX += (dx / dist) * speed;
            posY += (dy / dist) * speed;

            spideyContainer.position.set(posX, posY);

            // Flip horizontally based on movement direction
            if (dx < -2) spideySprite.scale.x = -1.5;
            else if (dx > 2) spideySprite.scale.x = 1.5;

            if (dist > 120) {
              // Web-Swinging Mode with Pixi Graphics Web String
              if (animCounter % 4 === 0) {
                frameIndex = (frameIndex + 1) % swingFrames.length;
              }
              spideySprite.texture = swingFrames[frameIndex];

              // Pendulum Rotation
              const swingAngle = Math.sin(animCounter * 0.08) * 0.45;
              spideyContainer.rotation = swingAngle;

              // Draw PixiJS Web Line
              webGraphic.lineStyle(2, 0xFF5B39, 0.9);
              webGraphic.moveTo(targetX, targetY);
              webGraphic.lineTo(posX, posY);

              webGraphic.beginFill(0xFFFFFF);
              webGraphic.drawCircle(targetX, targetY, 3);
              webGraphic.endFill();
            } else {
              // Running Mode
              if (animCounter % 3 === 0) {
                frameIndex = (frameIndex + 1) % runFrames.length;
              }
              spideySprite.texture = runFrames[frameIndex];
              spideyContainer.rotation *= 0.85;
            }
          }
        });
      } catch (err) {
        console.warn('PixiJS Spider-Man Canvas initialization error:', err);
      }
    };

    initPixi();

    return () => {
      if (handleMouseMove) window.removeEventListener('mousemove', handleMouseMove);
      if (handleResize) window.removeEventListener('resize', handleResize);
      if (app) {
        try {
          app.ticker?.stop();
          if ((app as any)._cancelResize) {
            (app as any)._cancelResize();
          }
          app.destroy(true);
        } catch (err) {
          console.warn('PixiJS cleanup:', err);
        }
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-[999] overflow-hidden" />;
}
