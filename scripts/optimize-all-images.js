const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SRC_DIR = path.join(__dirname, '..', 'src');

const IMAGE_EXTS = /\.(png|jpg|jpeg|webp)$/i;

async function processImage(filePath) {
  try {
    const stat = fs.statSync(filePath);
    const ext = path.extname(filePath).toLowerCase();
    const file = path.basename(filePath);
    const baseName = file.replace(/\.[^/.]+$/, '');
    const dir = path.dirname(filePath);
    const relativePath = path.relative(PUBLIC_DIR, filePath).replace(/\\/g, '/');

    // Skip tiny assets like icons, JCB gaadi, stone marker
    if (stat.size < 40 * 1024 && ext === '.webp') {
      return;
    }
    
    if (file === 'gaadi-jcb.webp' || file === 'stone-marker-v2.webp' || file === 'favicon.ico') {
      return;
    }

    console.log(`Processing: ${relativePath} (${(stat.size / 1024).toFixed(1)} KB)`);

    const inputBuffer = fs.readFileSync(filePath);
    const image = sharp(inputBuffer);
    const metadata = await image.metadata();
    const hasAlpha = metadata.hasAlpha;

    // Decide target width based on image role
    let targetWidth = null;
    const lowerName = file.toLowerCase();

    if (lowerName.includes('logo') || lowerName.includes('icon')) {
      targetWidth = 180;
    } else if (
      lowerName.includes('srinivasulu') ||
      lowerName.includes('suresh') ||
      lowerName.includes('raj sir') ||
      lowerName.includes('kuldeep') ||
      lowerName.includes('safeli') ||
      lowerName.includes('sanjay') ||
      lowerName.includes('kiran') ||
      lowerName.includes('mulenga') ||
      lowerName.includes('toms') ||
      lowerName.includes('anand') ||
      lowerName.includes('sahil')
    ) {
      // Profile / Team photos
      targetWidth = 350;
    } else if (
      lowerName.includes('card') ||
      lowerName.includes('systems') ||
      lowerName.includes('workshop') ||
      lowerName.includes('expansion') ||
      lowerName.includes('elimination') ||
      lowerName.includes('warehousing') ||
      lowerName.includes('network') ||
      lowerName.includes('culture') ||
      lowerName.includes('facilities') ||
      lowerName.includes('maintenance') ||
      lowerName.includes('fleet') ||
      lowerName.includes('training') ||
      lowerName.includes('command') ||
      lowerName.includes('readiness') ||
      lowerName.includes('compliance')
    ) {
      // Cards/Services/Pillar images
      targetWidth = 800;
    } else {
      // Default background/hero
      targetWidth = 1920;
    }

    let pipeline = image;
    if (metadata.width && metadata.width > targetWidth) {
      console.log(`  Resizing from ${metadata.width}px to ${targetWidth}px width`);
      pipeline = pipeline.resize(targetWidth, null, { withoutEnlargement: true });
    }

    const webpPath = path.join(dir, `${baseName}.webp`);

    if (ext === '.webp') {
      const outputBuffer = await pipeline
        .webp({ quality: 85, effort: 6 })
        .toBuffer();
      
      fs.writeFileSync(filePath, outputBuffer);
    } else {
      const outputBuffer = await pipeline
        .webp({
          quality: hasAlpha ? 90 : 85,
          alphaQuality: 100,
          effort: 6
        })
        .toBuffer();

      fs.writeFileSync(webpPath, outputBuffer);

      // Delete the original high-res png/jpg
      fs.unlinkSync(filePath);
      console.log(`  ✓ Converted and deleted original: ${file} → ${baseName}.webp`);
    }

    const finalSize = fs.statSync(ext === '.webp' ? filePath : webpPath).size;
    const savings = ((stat.size - finalSize) / stat.size * 100).toFixed(1);
    console.log(`  → Final WebP size: ${(finalSize / 1024).toFixed(1)} KB (Savings: ${savings}%)`);
  } catch (err) {
    console.error(`  ❌ Error processing ${filePath}:`, err.message);
  }
}

async function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'videos' && file !== '.next' && file !== 'node_modules') {
        await walkDir(filePath);
      }
    } else if (IMAGE_EXTS.test(file)) {
      await processImage(filePath);
    }
  }
}

// Update codebase references from .png / .jpg to .webp
function updateCodebaseReferences() {
  console.log('\n--- Updating Codebase References (.png/.jpg → .webp) ---');
  
  const codeFiles = [];
  function getCodeFiles(dir) {
    const list = fs.readdirSync(dir);
    list.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      if (stat && stat.isDirectory()) {
        getCodeFiles(filePath);
      } else if (/\.(tsx|ts|js|jsx|css|json)$/i.test(file)) {
        codeFiles.push(filePath);
      }
    });
  }
  
  getCodeFiles(SRC_DIR);
  console.log(`Scanning ${codeFiles.length} source files...`);

  let filesUpdated = 0;
  let totalReplacements = 0;

  const replacePatterns = [
    { from: /\.png"/g, to: '.webp"' },
    { from: /\.png'/g, to: ".webp'" },
    { from: /\.jpg"/g, to: '.webp"' },
    { from: /\.jpg'/g, to: ".webp'" },
    { from: /\.jpeg"/g, to: '.webp"' },
    { from: /\.jpeg'/g, to: ".webp'" },
  ];

  for (const filePath of codeFiles) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    for (const pattern of replacePatterns) {
      if (pattern.from.test(content)) {
        content = content.replace(pattern.from, pattern.to);
        modified = true;
        totalReplacements++;
      }
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      filesUpdated++;
      console.log(`  [Updated] ${path.relative(SRC_DIR, filePath)}`);
    }
  }

  console.log(`Reference updates completed! ${filesUpdated} files modified, ${totalReplacements} pattern replacements applied.`);
}

function cleanupTempFiles(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'videos' && file !== '.next' && file !== 'node_modules') {
        cleanupTempFiles(filePath);
      }
    } else if (file.startsWith('temp_')) {
      try {
        fs.unlinkSync(filePath);
        console.log(`Cleaned up legacy temp file: ${file}`);
      } catch (e) {
        console.error(`Failed to delete temp file ${file}:`, e.message);
      }
    }
  }
}

async function main() {
  console.log('🚀 Starting extreme image optimization pipeline...');
  const start = Date.now();
  cleanupTempFiles(PUBLIC_DIR);
  await walkDir(PUBLIC_DIR);
  updateCodebaseReferences();
  console.log(`\n✅ Optimization complete in ${((Date.now() - start) / 1000).toFixed(1)}s!`);
}

main();
