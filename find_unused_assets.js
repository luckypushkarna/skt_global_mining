const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const publicDir = path.join(__dirname, 'public');
const srcDir = path.join(__dirname, 'src');

// List all files in public recursively
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (let file of list) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      getFiles(fullPath, files);
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const allPublicFiles = getFiles(publicDir);
let deletedCount = 0;

for (const filePath of allPublicFiles) {
  // skip common necessary files
  const relativePath = path.relative(publicDir, filePath);
  if (
    relativePath === 'favicon.ico' ||
    relativePath === 'robots.txt' ||
    relativePath === 'manifest.json' ||
    relativePath.startsWith('.') ||
    relativePath.endsWith('.DS_Store')
  ) {
    continue;
  }

  // Escape special chars for grep
  // The filename might be "SKT Full logo (Color).webp"
  // Search for the basename in the src directory
  const basename = path.basename(relativePath);
  
  try {
    // If grep finds it, it will exit 0. If not, it will exit 1 and throw.
    // -R = recursive, -l = just print file name, -F = fixed string
    // We only search for the basename, which is a safe approach.
    execSync(`grep -R -l -F "${basename}" "${srcDir}"`, { stdio: 'ignore' });
  } catch (err) {
    // Grep didn't find the basename anywhere in src
    console.log('Unused asset found:', relativePath);
    fs.unlinkSync(filePath);
    deletedCount++;
  }
}

console.log(`\nCleanup complete! Deleted ${deletedCount} unused assets.`);
