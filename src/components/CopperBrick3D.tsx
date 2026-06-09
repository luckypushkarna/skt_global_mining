"use client";

import { useEffect, useRef, JSX } from "react";
import * as THREE from "three";

export function CopperBrick3D(): JSX.Element {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // ─── SCENE / CAMERA / RENDERER ─────────────────────────
    const W = mount.clientWidth;
    const H = mount.clientHeight;

    const scene = new THREE.Scene();
    scene.background = null;

    const camera = new THREE.PerspectiveCamera(35, W / H, 0.1, 100);
    camera.position.set(0, 1.4, 6);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({
      antialias : true,
      alpha     : true,
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type    = THREE.PCFSoftShadowMap;
    renderer.toneMapping       = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.1;
    mount.appendChild(renderer.domElement);

    // ─── PROCEDURAL COPPER TEXTURE ─────────────────────────
    const makeCopperTexture = (
      withText: boolean
    ): { map: THREE.CanvasTexture; bump: THREE.CanvasTexture } => {
      const size = 1024;
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size / 2; // 2:1 ratio (top face)
      const ctx = canvas.getContext("2d")!;

      // Base copper gradient
      const grad = ctx.createLinearGradient(0, 0, size, size / 2);
      grad.addColorStop(0,    "#d68c6e");
      grad.addColorStop(0.3,  "#e6a287");
      grad.addColorStop(0.6,  "#eba78d");
      grad.addColorStop(1,    "#cc7b59");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, size, size / 2);

      // Rough cast noise
      for (let i = 0; i < 12000; i++) {
        const x = Math.random() * size;
        const y = Math.random() * (size / 2);
        const r = Math.random() * 2;
        const shade = Math.random();
        ctx.fillStyle = shade > 0.7
          ? `rgba(120, 60, 30, ${Math.random() * 0.3})`
          : `rgba(255, 220, 190, ${Math.random() * 0.3})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Larger darker blotches (cast pits)
      for (let i = 0; i < 80; i++) {
        const x = Math.random() * size;
        const y = Math.random() * (size / 2);
        const r = Math.random() * 8 + 3;
        ctx.fillStyle = `rgba(100, 45, 20, ${Math.random() * 0.2})`;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      // Engraved text (only on top face)
      if (withText) {
        ctx.save();
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const text1 = "SKT global";
        const text2 = "GRADE A   99.99%";

        ctx.font = "bold 140px Arial, sans-serif";
        
        // Highlight stroke (bottom-right offset)
        ctx.lineWidth = 8;
        ctx.strokeStyle = "rgba(255, 230, 200, 0.7)";
        ctx.strokeText(text1, size / 2 - 3, size / 4 - 58);

        // Shadow stroke (top-left offset)
        ctx.strokeStyle = "rgba(80, 30, 15, 0.8)";
        ctx.strokeText(text1, size / 2 + 3, size / 4 - 52);

        // Center groove (darker copper)
        ctx.lineWidth = 4;
        ctx.strokeStyle = "rgba(120, 50, 25, 0.9)";
        ctx.strokeText(text1, size / 2, size / 4 - 55);

        // Grade text
        ctx.font = "bold 75px Arial, sans-serif";
        ctx.lineWidth = 6;
        ctx.strokeStyle = "rgba(255, 230, 200, 0.7)";
        ctx.strokeText(text2, size / 2 - 2, size / 4 + 68);
        
        ctx.strokeStyle = "rgba(80, 30, 15, 0.8)";
        ctx.strokeText(text2, size / 2 + 2, size / 4 + 72);

        ctx.lineWidth = 3;
        ctx.strokeStyle = "rgba(120, 50, 25, 0.9)";
        ctx.strokeText(text2, size / 2, size / 4 + 70);

        ctx.restore();
      }

      // ─── BUMP MAP (separate canvas) ──────────────────
      const bumpCanvas = document.createElement("canvas");
      bumpCanvas.width  = size;
      bumpCanvas.height = size / 2;
      const bctx = bumpCanvas.getContext("2d")!;

      // Mid-gray base
      bctx.fillStyle = "#808080";
      bctx.fillRect(0, 0, size, size / 2);

      // Bumpy noise
      for (let i = 0; i < 15000; i++) {
        const x = Math.random() * size;
        const y = Math.random() * (size / 2);
        const r = Math.random() * 3;
        const v = Math.random() * 255;
        bctx.fillStyle = `rgba(${v},${v},${v}, 0.5)`;
        bctx.beginPath();
        bctx.arc(x, y, r, 0, Math.PI * 2);
        bctx.fill();
      }

      // Engraved text in bump
      if (withText) {
        bctx.save();
        bctx.textAlign = "center";
        bctx.textBaseline = "middle";
        
        const text1 = "SKT global";
        const text2 = "GRADE A   99.99%";

        bctx.font = "bold 140px Arial, sans-serif";
        
        // Outer bevel (raised)
        bctx.lineWidth = 12;
        bctx.strokeStyle = "#ffffff";
        bctx.strokeText(text1, size / 2, size / 4 - 55);
        
        // Inner groove (recessed)
        bctx.lineWidth = 6;
        bctx.strokeStyle = "#000000";
        bctx.strokeText(text1, size / 2, size / 4 - 55);

        bctx.font = "bold 75px Arial, sans-serif";
        bctx.lineWidth = 8;
        bctx.strokeStyle = "#ffffff";
        bctx.strokeText(text2, size / 2, size / 4 + 70);

        bctx.lineWidth = 4;
        bctx.strokeStyle = "#000000";
        bctx.strokeText(text2, size / 2, size / 4 + 70);

        bctx.restore();
      }

      const map  = new THREE.CanvasTexture(canvas);
      const bump = new THREE.CanvasTexture(bumpCanvas);
      map.colorSpace = THREE.SRGBColorSpace;
      map.anisotropy  = 16;
      bump.anisotropy = 16;

      return { map, bump };
    };

    // ─── GEOMETRY (rounded brick) ──────────────────────────
    const makeBrickGeometry = (
      w: number,
      h: number,
      d: number,
      r: number
    ): THREE.ExtrudeGeometry => {
      const shape = new THREE.Shape();
      shape.moveTo(-w / 2 + r, -h / 2);
      shape.lineTo( w / 2 - r, -h / 2);
      shape.quadraticCurveTo( w / 2, -h / 2,  w / 2, -h / 2 + r);
      shape.lineTo( w / 2,  h / 2 - r);
      shape.quadraticCurveTo( w / 2,  h / 2,  w / 2 - r,  h / 2);
      shape.lineTo(-w / 2 + r,  h / 2);
      shape.quadraticCurveTo(-w / 2,  h / 2, -w / 2,  h / 2 - r);
      shape.lineTo(-w / 2, -h / 2 + r);
      shape.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);

      return new THREE.ExtrudeGeometry(shape, {
        depth         : d,
        bevelEnabled  : true,
        bevelThickness: 0.08,
        bevelSize     : 0.08,
        bevelOffset   : 0,
        bevelSegments : 4,
        curveSegments : 12,
      });
    };

    const geometry = makeBrickGeometry(2.8, 1.3, 0.55, 0.1);
    geometry.center();

    // ─── MATERIAL (per-face) ───────────────────────────────
    const { map: topMap, bump: topBump } = makeCopperTexture(true);
    const { map: sideMap, bump: sideBump } = makeCopperTexture(false);

    // ExtrudeGeometry uses 2 material slots:
    //   0 = top/bottom faces (where text goes)
    //   1 = sides (no text)
    const topMaterial = new THREE.MeshStandardMaterial({
      map         : topMap,
      bumpMap     : topBump,
      bumpScale   : 0.07,
      roughness   : 0.45,
      metalness   : 0.8,
      color       : new THREE.Color("#e6a287"),
    });

    const sideMaterial = new THREE.MeshStandardMaterial({
      map         : sideMap,
      bumpMap     : sideBump,
      bumpScale   : 0.07,
      roughness   : 0.45,
      metalness   : 0.8,
      color       : new THREE.Color("#e6a287"),
    });

    const brick = new THREE.Mesh(geometry, [topMaterial, sideMaterial]);
    brick.castShadow    = true;
    brick.receiveShadow = false;
    brick.rotation.x = -0.15;
    brick.rotation.y =  0.4;
    scene.add(brick);

    // ─── LIGHTING (warm copper feel) ───────────────────────
    const ambient = new THREE.AmbientLight(0xffe4c4, 0.55);
    scene.add(ambient);

    // Warm key light (top-right)
    const keyLight = new THREE.DirectionalLight(0xffd9a8, 2.2);
    keyLight.position.set(4, 6, 4);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(1024, 1024);
    keyLight.shadow.camera.near = 0.1;
    keyLight.shadow.camera.far  = 20;
    keyLight.shadow.camera.left   = -5;
    keyLight.shadow.camera.right  =  5;
    keyLight.shadow.camera.top    =  5;
    keyLight.shadow.camera.bottom = -5;
    keyLight.shadow.bias = -0.0005;
    scene.add(keyLight);

    // Cool fill light (left)
    const fillLight = new THREE.DirectionalLight(0xa8c8ff, 0.4);
    fillLight.position.set(-4, 3, 2);
    scene.add(fillLight);

    // Rim light (back)
    const rimLight = new THREE.DirectionalLight(0xff9966, 0.6);
    rimLight.position.set(0, 2, -5);
    scene.add(rimLight);

    // ─── GROUND (catches shadow only) ──────────────────────
    const groundGeo = new THREE.PlaneGeometry(12, 12);
    const groundMat = new THREE.ShadowMaterial({ opacity: 0.25 });
    const ground = new THREE.Mesh(groundGeo, groundMat);
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = -0.85;
    ground.receiveShadow = true;
    scene.add(ground);

    // ─── INTERACTION (drag to rotate + auto spin) ──────────
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let velX  = 0;
    let autoSpin = true;
    let idleTimer: NodeJS.Timeout;

    const resumeAutoSpin = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => { autoSpin = true; }, 2000);
    };

    const onDown = (e: PointerEvent) => {
      isDragging = true;
      autoSpin   = false;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const dx = e.clientX - prevX;
      const dy = e.clientY - prevY;
      prevX = e.clientX;
      prevY = e.clientY;
      velX  = dx;

      brick.rotation.y += dx * 0.008;
      brick.rotation.x  = Math.max(
        -0.6,
        Math.min(0.6, brick.rotation.x + dy * 0.005)
      );
    };

    const onUp = () => {
      isDragging = false;
      resumeAutoSpin();
    };

    mount.addEventListener("pointerdown", onDown);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);

    // ─── RESIZE ────────────────────────────────────────────
    const onResize = () => {
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    // ─── ANIMATION LOOP ────────────────────────────────────
    let rafId: number;
    const animate = () => {
      rafId = requestAnimationFrame(animate);

      if (autoSpin && !isDragging) {
        brick.rotation.y += 0.004;
      }

      // Drag momentum
      if (!isDragging && Math.abs(velX) > 0.01) {
        brick.rotation.y += velX * 0.002;
        velX *= 0.94;
      }

      renderer.render(scene, camera);
    };
    animate();

    // ─── CLEANUP ───────────────────────────────────────────
    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(idleTimer);
      mount.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("resize", onResize);

      geometry.dispose();
      topMaterial.dispose();
      sideMaterial.dispose();
      topMap.dispose();
      topBump.dispose();
      sideMap.dispose();
      sideBump.dispose();
      groundGeo.dispose();
      groundMat.dispose();
      renderer.dispose();

      if (renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      <div
        ref={mountRef}
        className="h-[320px] w-[320px] sm:h-[400px] sm:w-[400px] cursor-grab active:cursor-grabbing select-none touch-none"
      />
      <p className="text-[10px] uppercase tracking-[0.25em] text-neutral-400 select-none">
        ← drag to rotate →
      </p>
    </div>
  );
}
