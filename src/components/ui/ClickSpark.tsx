"use client";

import React, { useRef, useEffect, useCallback, JSX } from 'react';

interface Spark {
  x: number;
  y: number;
  angle: number;
  startTime: number;
}

interface ClickSparkProps {
  sparkColor?: string;
  sparkSize?: number;
  sparkRadius?: number;
  sparkCount?: number;
  duration?: number;
  easing?: 'linear' | 'ease-in' | 'ease-out' | 'ease-in-out';
  extraScale?: number;
  children?: React.ReactNode;
}

export function ClickSpark({
  sparkColor = '#fff',
  sparkSize = 10,
  sparkRadius = 15,
  sparkCount = 8,
  duration = 400,
  easing = 'ease-out',
  extraScale = 1.0,
  children
}: ClickSparkProps): JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const sparksRef = useRef<Spark[]>([]);
  
  // Animation state references
  const animationIdRef = useRef<number | null>(null);
  const isAnimatingRef = useRef<boolean>(false);

  // Resize canvas to cover the full viewport
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let resizeTimeout: ReturnType<typeof setTimeout>;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleResize = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(resizeCanvas, 150); // Debounce resize for high performance
    };

    window.addEventListener('resize', handleResize);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  const easeFunc = useCallback(
    (t: number) => {
      switch (easing) {
        case 'linear':
          return t;
        case 'ease-in':
          return t * t;
        case 'ease-in-out':
          return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        default:
          return t * (2 - t);
      }
    },
    [easing]
  );

  // Core drawing loop, only triggered when particles exist
  const draw = useCallback((timestamp: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Filter and update remaining sparks
    sparksRef.current = sparksRef.current.filter(spark => {
      const elapsed = timestamp - spark.startTime;
      if (elapsed >= duration) {
        return false;
      }

      const progress = elapsed / duration;
      const eased = easeFunc(progress);

      const distance = eased * sparkRadius * extraScale;
      const lineLength = sparkSize * (1 - eased);

      const x1 = spark.x + distance * Math.cos(spark.angle);
      const y1 = spark.y + distance * Math.sin(spark.angle);
      const x2 = spark.x + (distance + lineLength) * Math.cos(spark.angle);
      const y2 = spark.y + (distance + lineLength) * Math.sin(spark.angle);

      ctx.strokeStyle = sparkColor;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();

      return true;
    });

    // Shut down animation loop if no sparks are left
    if (sparksRef.current.length === 0) {
      isAnimatingRef.current = false;
      animationIdRef.current = null;
      ctx.clearRect(0, 0, canvas.width, canvas.height); // final clean sweep
      return;
    }

    animationIdRef.current = requestAnimationFrame(draw);
  }, [sparkColor, sparkSize, sparkRadius, duration, easeFunc, extraScale]);

  // Global click listener with capture phase to intercept clicks on all elements
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const x = e.clientX;
      const y = e.clientY;

      const now = performance.now();
      const newSparks = Array.from({ length: sparkCount }, (_, i) => ({
        x,
        y,
        angle: (2 * Math.PI * i) / sparkCount,
        startTime: now
      }));

      // Cap maximum sparks at 160 to avoid any array filter performance degradation
      if (sparksRef.current.length > 160) {
        sparksRef.current = sparksRef.current.slice(-100);
      }

      sparksRef.current.push(...newSparks);

      // Lazily spin up the animation loop only when a click occurs and loop is idle
      if (!isAnimatingRef.current) {
        isAnimatingRef.current = true;
        animationIdRef.current = requestAnimationFrame(draw);
      }
    };

    window.addEventListener('click', handleGlobalClick, { capture: true });

    return () => {
      window.removeEventListener('click', handleGlobalClick, { capture: true });
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, [sparkCount, draw]);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          display: 'block',
          userSelect: 'none',
          pointerEvents: 'none',
          zIndex: 99999, // Render on top of all page elements, navbars, and overlays
        }}
      />
      {children}
    </>
  );
}
