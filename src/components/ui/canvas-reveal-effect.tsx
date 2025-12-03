'use client';

import React, { useEffect, useRef } from 'react';

interface CanvasRevealEffectProps {
  colors?: number[][];
  dotSize?: number;
  opacities?: number[];
  containerClassName?: string;
  animationSpeed?: number;
}

export const CanvasRevealEffect: React.FC<CanvasRevealEffectProps> = ({
  colors = [[255, 0, 0], [220, 0, 0], [255, 100, 100]], // Red colors by default
  dotSize = 3,
  opacities = [0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1, 1],
  containerClassName = 'bg-black',
  animationSpeed = 2,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const dots = useRef<Array<{ x: number; y: number; vx: number; vy: number; color: number[]; opacity: number }>>([]);
  const animationFrameId = useRef<number | null>(null);
  const isInitialized = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const handleResize = () => {
      canvas.width = container.clientWidth;
      canvas.height = container.clientHeight;
      if (!isInitialized.current) {
        initializeDots();
        isInitialized.current = true;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mousePosition.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        mousePosition.current = {
          x: e.touches[0].clientX - rect.left,
          y: e.touches[0].clientY - rect.top,
        };
      }
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  const initializeDots = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const { width, height } = canvas;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Create dots
    dots.current = [];
    const numberOfDots = Math.floor((width * height) / 5000); // Adjust density as needed

    for (let i = 0; i < numberOfDots; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const vx = (Math.random() - 0.5) * animationSpeed;
      const vy = (Math.random() - 0.5) * animationSpeed;
      const colorIndex = Math.floor(Math.random() * colors.length);
      const opacityIndex = Math.floor(Math.random() * opacities.length);

      dots.current.push({
        x,
        y,
        vx,
        vy,
        color: colors[colorIndex],
        opacity: opacities[opacityIndex],
      });
    }

    animate();
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const { width, height } = canvas;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    // Update and draw dots
    for (const dot of dots.current) {
      // Update position
      dot.x += dot.vx;
      dot.y += dot.vy;

      // Bounce off edges
      if (dot.x < 0 || dot.x > width) dot.vx *= -1;
      if (dot.y < 0 || dot.y > height) dot.vy *= -1;

      // Calculate distance from mouse
      const dx = mousePosition.current.x - dot.x;
      const dy = mousePosition.current.y - dot.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      // Draw dot
      const size = distance < 150 ? dotSize * (1 + (150 - distance) / 150) : dotSize;

      ctx.beginPath();
      ctx.arc(dot.x, dot.y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${dot.color[0]}, ${dot.color[1]}, ${dot.color[2]}, ${dot.opacity})`;
      ctx.fill();
    }

    animationFrameId.current = requestAnimationFrame(animate);
  };

  return (
    <div ref={containerRef} className={`w-full h-full ${containerClassName}`}>
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
};
