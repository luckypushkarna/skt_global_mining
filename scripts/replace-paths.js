const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'src');
const mappingFile = path.join(__dirname, 'cloudinary-mapping.json');

const INCLUDE_EXTENSIONS = ['.ts', '.tsx', '.json', '.css'];

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (INCLUDE_EXTENSIONS.includes(ext)) {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

function main() {
  if (!fs.existsSync(mappingFile)) {
    console.error("Mapping file not found.");
    process.exit(1);
  }
  
  const mapping = JSON.parse(fs.readFileSync(mappingFile, 'utf8'));
  const files = getAllFiles(srcDir);
  
  // Sort mapping keys by length descending to avoid partial replacements (e.g., matching /logo.png before /logo.png.bak)
  const mappingKeys = Object.keys(mapping).sort((a, b) => b.length - a.length);

  for (const file of files) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    for (const localPath of mappingKeys) {
      const remoteUrl = mapping[localPath];
      
      if (content.includes(`"${localPath}"`)) {
        content = content.split(`"${localPath}"`).join(`"${remoteUrl}"`);
        changed = true;
      }
      if (content.includes(`'${localPath}'`)) {
        content = content.split(`'${localPath}'`).join(`'${remoteUrl}'`);
        changed = true;
      }
      if (content.includes(`\`${localPath}\``)) {
        content = content.split(`\`${localPath}\``).join(`\`${remoteUrl}\``);
        changed = true;
      }
      // Also catch cases where the URL is used in a Next.js Image src attribute without quotes around the string literal if it's dynamic
      // But typically it's hardcoded as `src="/path"` or `src={'/path'}` which we handled above.
    }
    
    if (changed) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`Updated ${path.relative(path.join(__dirname, '..'), file)}`);
    }
  }
  
  console.log("Replacement complete.");
}

main();
