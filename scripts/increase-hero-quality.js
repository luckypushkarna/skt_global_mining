/**
 * scripts/increase-hero-quality.js
 * 
 * Takes the 'FF Hero Video sample.mp4' file and compresses it at the highest 
 * practical quality level (CRF 17, visually lossless) using ffmpeg-static.
 * Output is saved directly to 'public/videos/hero-background-optimized.mp4'
 * which is the video file used by HeroSection.tsx.
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

let ffmpegPath;
try {
  ffmpegPath = require('ffmpeg-static');
} catch (e) {
  console.error("❌  ffmpeg-static not found in node_modules.");
  process.exit(1);
}

const SRC_PATH = path.join(__dirname, '..', 'public', 'videos', 'FF Hero Video sample.mp4');
const OUT_PATH = path.join(__dirname, '..', 'public', 'videos', 'hero-background-optimized.mp4');

if (!fs.existsSync(SRC_PATH)) {
  console.error(`❌  Source video not found: ${SRC_PATH}`);
  process.exit(1);
}

const initialSize = fs.statSync(SRC_PATH).size;
const initialMB = (initialSize / (1024 * 1024)).toFixed(2);
console.log(`📹  Compressing Source: FF Hero Video sample.mp4 (${initialMB} MB)`);
console.log(`⚡  Targeting HIGHEST Web Quality (H.264, CRF 17 - Visually Lossless, preset slow, silent)...`);

const args = [
  '-y',
  '-i', SRC_PATH,
  '-vcodec', 'libx264',
  '-preset', 'slow',
  '-crf', '17', // Visually lossless (highest standard quality for web videos)
  '-movflags', '+faststart',
  '-pix_fmt', 'yuv420p',
  '-vf', "scale='min(1920,iw)':-2",
  '-an', // Strip audio
  OUT_PATH
];

const start = Date.now();
const result = spawnSync(ffmpegPath, args, { stdio: 'inherit' });
const elapsed = ((Date.now() - start) / 1000).toFixed(1);

if (result.status === 0) {
  const finalSize = fs.statSync(OUT_PATH).size;
  const finalMB = (finalSize / (1024 * 1024)).toFixed(2);
  console.log(`\n✅  High-Quality Render Successful! (Time: ${elapsed}s)`);
  console.log(`📈  Source Size: ${initialMB} MB`);
  console.log(`📉  Optimized Size: ${finalMB} MB`);
  console.log(`💡  Highest-quality version stored at: public/videos/hero-background-optimized.mp4`);
} else {
  console.error(`❌  FFmpeg failed with exit code ${result.status}`);
}
