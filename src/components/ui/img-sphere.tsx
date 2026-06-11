"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

// ==========================================
// TYPES & INTERFACES
// ==========================================

export interface Position3D {
  x: number;
  y: number;
  z: number;
}

export interface SphericalPosition {
  theta: number;
  phi: number;
  radius: number;
}

export interface WorldPosition extends Position3D {
  scale: number;
  zIndex: number;
  isVisible: boolean;
  fadeOpacity: number;
  originalIndex: number;
}

export interface ImageData {
  id: string;
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

export interface SphereImageGridProps {
  images?: ImageData[];
  containerSize?: number;
  sphereRadius?: number;
  dragSensitivity?: number;
  momentumDecay?: number;
  maxRotationSpeed?: number;
  baseImageScale?: number;
  hoverScale?: number;
  perspective?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  className?: string;
  /** When provided, fires on image click instead of showing the built-in modal */
  onImageClick?: (image: ImageData) => void;
}

interface RotationState { x: number; y: number; z: number; }
interface VelocityState { x: number; y: number; }
interface MousePosition { x: number; y: number; }

// ==========================================
// CONSTANTS
// ==========================================

const SPHERE_MATH = {
  degreesToRadians: (d: number) => d * (Math.PI / 180),
  normalizeAngle: (angle: number) => {
    while (angle > 180) angle -= 360;
    while (angle < -180) angle += 360;
    return angle;
  }
};

// ==========================================
// MAIN COMPONENT
// ==========================================

const SphereImageGrid: React.FC<SphereImageGridProps> = ({
  images = [],
  containerSize = 400,
  sphereRadius = 200,
  dragSensitivity = 0.5,
  momentumDecay = 0.95,
  maxRotationSpeed = 5,
  baseImageScale = 0.22,
  hoverScale = 1.2,
  perspective = 1000,
  autoRotate = false,
  autoRotateSpeed = 0.3,
  className = '',
  onImageClick,
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const [rotation, setRotation] = useState<RotationState>({ x: 15, y: 15, z: 0 });
  const [velocity, setVelocity] = useState<VelocityState>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);
  const [imagePositions, setImagePositions] = useState<SphericalPosition[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const lastMousePos = useRef<MousePosition>({ x: 0, y: 0 });
  const animationFrame = useRef<number | null>(null);

  const actualSphereRadius = sphereRadius || containerSize * 0.5;
  const baseImageSize = containerSize * baseImageScale;

  const generateSpherePositions = useCallback((): SphericalPosition[] => {
    const positions: SphericalPosition[] = [];
    const imageCount = images.length;
    const goldenRatio = (1 + Math.sqrt(5)) / 2;
    const angleIncrement = 2 * Math.PI / goldenRatio;

    for (let i = 0; i < imageCount; i++) {
      // Uniform Fibonacci distribution over a 3D sphere.
      // Offset of 0.5 avoids placing elements precisely at the poles.
      const t = (i + 0.5) / imageCount;
      const inclination = Math.acos(1 - 2 * t);
      const azimuth = angleIncrement * i;

      const phi = inclination * (180 / Math.PI);
      const theta = (azimuth * (180 / Math.PI)) % 360;

      positions.push({ theta, phi, radius: actualSphereRadius });
    }
    return positions;
  }, [images.length, actualSphereRadius]);

  const calculateWorldPositions = useCallback((): WorldPosition[] => {
    return imagePositions.map((pos, index) => {
      const thetaRad = SPHERE_MATH.degreesToRadians(pos.theta);
      const phiRad = SPHERE_MATH.degreesToRadians(pos.phi);
      const rotXRad = SPHERE_MATH.degreesToRadians(rotation.x);
      const rotYRad = SPHERE_MATH.degreesToRadians(rotation.y);

      // 1. Initial 3D coordinates based on spherical angles
      let x = pos.radius * Math.sin(phiRad) * Math.cos(thetaRad);
      let y = pos.radius * Math.cos(phiRad);
      let z = pos.radius * Math.sin(phiRad) * Math.sin(thetaRad);

      // 2. Rotate around Y axis (spin)
      const x1 = x * Math.cos(rotYRad) + z * Math.sin(rotYRad);
      const z1 = -x * Math.sin(rotYRad) + z * Math.cos(rotYRad);
      x = x1; z = z1;

      // 3. Rotate around X axis (tilt)
      const y2 = y * Math.cos(rotXRad) - z * Math.sin(rotXRad);
      const z2 = y * Math.sin(rotXRad) + z * Math.cos(rotXRad);
      y = y2; z = z2;

      // 4. Calculate depth scale (z goes from -radius to +radius)
      const depthScale = (z + actualSphereRadius) / (2 * actualSphereRadius); // 0 (backmost) to 1 (frontmost)

      // Perspective-based scale: frontmost elements are larger, backmost are smaller
      const scale = 0.55 + depthScale * 0.45; // ranges from 0.55 to 1.0

      // Opacity: fade out slightly towards the back to emphasize depth, but keep visible
      const fadeOpacity = 0.15 + depthScale * 0.85; // ranges from 0.15 to 1.0

      return {
        x,
        y,
        z,
        scale,
        zIndex: Math.round(1000 + z),
        isVisible: true,
        fadeOpacity,
        originalIndex: index
      };
    });
  }, [imagePositions, rotation, actualSphereRadius]);

  const clampRotationSpeed = useCallback(
    (speed: number) => Math.max(-maxRotationSpeed, Math.min(maxRotationSpeed, speed)),
    [maxRotationSpeed]
  );

  const updateMomentum = useCallback(() => {
    if (isDragging) return;
    setVelocity(prev => {
      const newVelocity = { x: prev.x * momentumDecay, y: prev.y * momentumDecay };
      if (!autoRotate && Math.abs(newVelocity.x) < 0.01 && Math.abs(newVelocity.y) < 0.01) return { x: 0, y: 0 };
      return newVelocity;
    });
    setRotation(prev => {
      let newY = prev.y;
      if (autoRotate) newY += autoRotateSpeed;
      newY += clampRotationSpeed(velocity.y);
      return {
        x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(velocity.x)),
        y: SPHERE_MATH.normalizeAngle(newY),
        z: prev.z
      };
    });
  }, [isDragging, momentumDecay, velocity, clampRotationSpeed, autoRotate, autoRotateSpeed]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, []);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    const rx = -deltaY * dragSensitivity;
    const ry = deltaX * dragSensitivity;
    setRotation(prev => ({
      x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rx)),
      y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(ry)),
      z: prev.z
    }));
    setVelocity({ x: clampRotationSpeed(rx), y: clampRotationSpeed(ry) });
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  }, [isDragging, dragSensitivity, clampRotationSpeed]);

  const handleMouseUp = useCallback(() => setIsDragging(false), []);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    const touch = e.touches[0];
    if (!touch) return;
    setIsDragging(true);
    setVelocity({ x: 0, y: 0 });
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const touch = e.touches[0];
    if (!touch) return;
    const deltaX = touch.clientX - lastMousePos.current.x;
    const deltaY = touch.clientY - lastMousePos.current.y;
    const rx = -deltaY * dragSensitivity;
    const ry = deltaX * dragSensitivity;
    setRotation(prev => ({
      x: SPHERE_MATH.normalizeAngle(prev.x + clampRotationSpeed(rx)),
      y: SPHERE_MATH.normalizeAngle(prev.y + clampRotationSpeed(ry)),
      z: prev.z
    }));
    setVelocity({ x: clampRotationSpeed(rx), y: clampRotationSpeed(ry) });
    lastMousePos.current = { x: touch.clientX, y: touch.clientY };
  }, [isDragging, dragSensitivity, clampRotationSpeed]);

  const handleTouchEnd = useCallback(() => setIsDragging(false), []);

  useEffect(() => { setIsMounted(true); }, []);
  useEffect(() => { setImagePositions(generateSpherePositions()); }, [generateSpherePositions]);

  useEffect(() => {
    const animate = () => {
      updateMomentum();
      animationFrame.current = requestAnimationFrame(animate);
    };
    if (isMounted) animationFrame.current = requestAnimationFrame(animate);
    return () => { if (animationFrame.current) cancelAnimationFrame(animationFrame.current); };
  }, [isMounted, updateMomentum]);

  useEffect(() => {
    if (!isMounted) return;
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    document.addEventListener('touchmove', handleTouchMove, { passive: false });
    document.addEventListener('touchend', handleTouchEnd);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleTouchMove);
      document.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isMounted, handleMouseMove, handleMouseUp, handleTouchMove, handleTouchEnd]);

  // Compute world positions fresh every render - no stale closure
  const worldPositions = calculateWorldPositions();

  const handleImageClick = useCallback(
    (image: ImageData) => {
      if (onImageClick) {
        onImageClick(image);
      } else {
        setSelectedImage(image);
      }
    },
    [onImageClick]
  );

  if (!isMounted) return (
    <div className="bg-skt-navy rounded-lg animate-pulse flex items-center justify-center" style={{ width: containerSize, height: containerSize }}>
      <div className="text-neutral-600 text-sm">Loading...</div>
    </div>
  );

  if (!images.length) return (
    <div className="bg-skt-navy rounded-lg border-2 border-dashed border-neutral-700 flex items-center justify-center" style={{ width: containerSize, height: containerSize }}>
      <div className="text-neutral-500 text-center text-sm">No images provided</div>
    </div>
  );

  return (
    <>
      <style>{`
        @keyframes sphereFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes sphereScaleIn { from { transform: scale(0.85); opacity: 0; } to { transform: scale(1); opacity: 1; } }
      `}</style>

      <div
        ref={containerRef}
        className={`relative select-none cursor-grab active:cursor-grabbing ${className}`}
        style={{ width: containerSize, height: containerSize, perspective: `${perspective}px` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="relative w-full h-full" style={{ zIndex: 10 }}>
          {images.map((image, index) => {
            const position = worldPositions[index];
            if (!position || !position.isVisible) return null;
            const imageSize = baseImageSize * position.scale;
            const isHovered = hoveredIndex === index;
            const finalScale = isHovered ? Math.min(hoverScale, hoverScale / position.scale) : 1;
            return (
              <div
                key={image.id}
                className="absolute cursor-pointer select-none transition-transform duration-200 ease-out"
                style={{
                  width: `${imageSize}px`,
                  height: `${imageSize}px`,
                  left: `${containerSize / 2 + position.x}px`,
                  top: `${containerSize / 2 + position.y}px`,
                  opacity: position.fadeOpacity,
                  transform: `translate(-50%, -50%) scale(${finalScale})`,
                  zIndex: position.zIndex
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onClick={() => handleImageClick(image)}
              >
                <div className={`relative w-full h-full rounded-full overflow-hidden shadow-lg border-2 transition-all duration-300 ${
                  isHovered ? 'border-white scale-105 shadow-[0_0_15px_rgba(255,255,255,0.4)]' : 'border-white/10'
                }`}>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="150px"
                    className="object-cover"
                    draggable={false}
                    priority={index < 3}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {!onImageClick && selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-skt-navy/60 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
          style={{ animation: 'sphereFadeIn 0.2s ease-out' }}
        >
          <div
            className="bg-skt-navy rounded-2xl max-w-sm w-full overflow-hidden shadow-2xl border border-neutral-800"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'sphereScaleIn 0.25s ease-out' }}
          >
            <div className="relative aspect-square">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 384px) 100vw, 384px"
                className="object-cover"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 w-8 h-8 bg-skt-navy/60 rounded-full text-white flex items-center justify-center hover:bg-skt-navy/80 transition-all cursor-pointer"
              >
                <X size={14} />
              </button>
            </div>
            {(selectedImage.title || selectedImage.description) && (
              <div className="p-5">
                {selectedImage.title && <h3 className="text-base font-bold mb-1 text-white">{selectedImage.title}</h3>}
                {selectedImage.description && <p className="text-sm text-neutral-400">{selectedImage.description}</p>}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SphereImageGrid;
