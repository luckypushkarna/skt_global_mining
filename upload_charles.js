const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({ 
  cloud_name: 'dxhwcq1eg', 
  api_key: '965952794996982', 
  api_secret: '8hd5ki6eICdxzvI3-Z20JuSYF_g' 
});

const file = { path: 'public/Charles Sakanya.webp', folder: 'skt/leaders', public_id: 'charles-sakanya' };

async function uploadFile() {
  try {
    const fullPath = path.join(__dirname, file.path);
    const result = await cloudinary.uploader.upload(fullPath, {
      folder: file.folder,
      public_id: file.public_id,
      overwrite: true,
      resource_type: 'image'
    });
    console.log(`[SUCCESS] ${file.path} -> ${result.secure_url}`);
  } catch (err) {
    console.error(`[ERROR] uploading ${file.path}:`, err);
  }
}

uploadFile();
