"use client";

import React, { useEffect, useRef } from "react";

export default function RetroSpiderSwing() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Handle high-res and viewport resizing
    const updateSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateSize();
    window.addEventListener("resize", updateSize);

    // Load an authentic retro 16-bit sprite sheet asset
    const spideyImg = new Image();
    // Using a reliable public retro arcade sprite asset reference
    spideyImg.src = "https://images.spriters-resource.com/sheets/53/56683.png";

    let angle = 0;
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Independent physics calculations for swinging/acrobatics
      angle += 0.025;
      const centerX = canvas.width / 2;
      const swingAmplitudeWidth = canvas.width * 0.35;

      const x = centerX + Math.sin(angle) * swingAmplitudeWidth;
      const y = 180 + Math.abs(Math.cos(angle * 2)) * 140; // Flip/acrobatic dip

      // 1. Draw the high-contrast Nothing-styled dashed web line
      ctx.strokeStyle = "#FFFFFF";
      ctx.lineWidth = 1.5;
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.moveTo(centerX, 0);
      ctx.lineTo(x + 20, y);
      ctx.stroke();
      ctx.setLineDash([]);

      // 2. Render Authentic Retro Pixel Sprite / Fallback High-Detail Vector Matrix
      ctx.save();
      ctx.translate(x, y);

      // Rotate slightly based on swing velocity for acrobatics feel
      const rotationAngle = Math.cos(angle) * 0.4;
      ctx.rotate(rotationAngle);

      if (spideyImg.complete && spideyImg.naturalWidth !== 0) {
        // Draw slice from authentic 16-bit arcade sheet if loaded
        // (Parameters: image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
        ctx.drawImage(spideyImg, 10, 10, 32, 32, -24, -24, 48, 48);
      } else {
        // High-Precision Procedural 90s Sprite Matrix (Fallback if asset blocks)
        const r = "#E60012";
        const b = "#002266";
        const dark = "#0A0A0A";
        const w = "#FFFFFF";

        // Detailed head with big expressive 90s lenses
        ctx.fillStyle = r;
        ctx.fillRect(-8, -16, 16, 14);
        ctx.fillStyle = dark;
        ctx.fillRect(-8, -16, 16, 2); // Web mask contour lines
        // Eyes
        ctx.fillStyle = w;
        ctx.beginPath();
        ctx.moveTo(-7, -10); ctx.lineTo(-3, -8); ctx.lineTo(-6, -5); ctx.fill();
        ctx.beginPath();
        ctx.moveTo(7, -10); ctx.lineTo(3, -8); ctx.lineTo(6, -5); ctx.fill();

        // Torso & Classic Spider Emblem
        ctx.fillStyle = r;
        ctx.fillRect(-10, -2, 20, 22);
        ctx.fillStyle = dark;
        ctx.fillRect(-3, 4, 6, 8); // Center spider body block

        // Dynamic limbs tucking into an acrobatic flip
        ctx.fillStyle = b;
        ctx.fillRect(-14, 12, 10, 8);
        ctx.fillRect(4, 12, 10, 8);
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    spideyImg.onload = () => {
      render();
    };

    // Fallback render trigger if image takes time or blocks
    render();

    return () => {
      window.removeEventListener("resize", updateSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      style={{ imageRendering: "pixelated" }}
    />
  );
}