const cloudinary = require('cloudinary').v2;
const fs = require('fs');
const path = require('path');

cloudinary.config({
  cloud_name: 'dxhwcq1eg',
  api_key: '146883387715942',
  api_secret: 'JhgbHrKZlwnKUUIO9bPg7s15DAA'
});

const publicDir = path.join(__dirname, '..', 'public');
const mappingFile = path.join(__dirname, 'cloudinary-mapping.json');

const EXCLUDED_EXTENSIONS = ['.ico', '.txt', '.json'];

async function getAllFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    if (file === '.DS_Store') continue;
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, fileList);
    } else {
      const ext = path.extname(filePath).toLowerCase();
      if (!EXCLUDED_EXTENSIONS.includes(ext) && file !== '.DS_Store') {
        fileList.push(filePath);
      }
    }
  }
  return fileList;
}

async function uploadFile(filePath) {
  try {
    const relativePath = path.relative(publicDir, filePath);
    // Remove the extension from the public_id
    const ext = path.extname(filePath);
    const publicId = `skt_global_mining/${relativePath.replace(ext, '').replace(/\\/g, '/')}`;
    
    console.log(`Uploading /${relativePath}...`);
    
    // Auto detects if it's an image or video
    const result = await cloudinary.uploader.upload(filePath, {
      public_id: publicId,
      resource_type: 'auto',
      overwrite: true,
      use_filename: true,
      unique_filename: false
    });
    
    return {
      local: '/' + relativePath.replace(/\\/g, '/'),
      remote: result.secure_url
    };
  } catch (error) {
    console.error(`Error uploading ${filePath}:`, error);
    return null;
  }
}

async function main() {
  const files = await getAllFiles(publicDir);
  const mapping = {};
  
  console.log(`Found ${files.length} files to upload.`);
  
  // Upload sequentially to avoid network timeout or overwhelming API limits
  for (const [index, file] of files.entries()) {
    console.log(`[${index + 1}/${files.length}] Processing...`);
    const result = await uploadFile(file);
    if (result) {
      mapping[result.local] = result.remote;
    }
  }
  
  fs.writeFileSync(mappingFile, JSON.stringify(mapping, null, 2));
  console.log(`All files processed. Mapping written to ${mappingFile}`);
}

main();
