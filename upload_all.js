const cloudinary = require('cloudinary').v2;
const path = require('path');
const fs = require('fs');

cloudinary.config({ 
  cloud_name: 'dxhwcq1eg', 
  api_key: '965952794996982', 
  api_secret: '8hd5ki6eICdxzvI3-Z20JuSYF_g' 
});

const dirsToScan = [
  'public/images/fleet',
  'public/gallery-updates'
];

async function run() {
  const uploadMap = {};

  for (const dir of dirsToScan) {
    const fullDirPath = path.join(__dirname, dir);
    if (!fs.existsSync(fullDirPath)) {
      console.log(`Directory does not exist: ${dir}`);
      continue;
    }
    const files = fs.readdirSync(fullDirPath);
    for (const file of files) {
      if (!file.match(/\.(jpg|jpeg|png|webp)$/i)) continue;
      
      const filePath = path.join(fullDirPath, file);
      // We use the file name as public_id (without extension)
      const publicId = path.basename(file, path.extname(file));
      const localUrlPath = `/${dir.replace('public/', '')}/${file}`;

      console.log(`Uploading ${localUrlPath}...`);
      try {
        const result = await cloudinary.uploader.upload(filePath, {
          folder: 'skt_global_mining',
          public_id: publicId,
          overwrite: true,
          resource_type: 'image'
        });
        console.log(`[SUCCESS] -> ${result.secure_url}`);
        uploadMap[localUrlPath] = result.secure_url;
      } catch (err) {
        console.error(`[ERROR] uploading ${file}:`, err.message);
      }
    }
  }

  const mapPath = path.join(__dirname, 'upload_map.json');
  fs.writeFileSync(mapPath, JSON.stringify(uploadMap, null, 2));
  console.log('Upload complete. Map saved to', mapPath);
}

run();
