const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({ 
  cloud_name: 'dxhwcq1eg', 
  api_key: '965952794996982', 
  api_secret: '8hd5ki6eICdxzvI3-Z20JuSYF_g' 
});

const filesToUpload = [
  { path: 'public/Operation gallery/1.webp', folder: 'skt/gallery', public_id: '1' },
  { path: 'public/Operation gallery/2.webp', folder: 'skt/gallery', public_id: '2' },
  { path: 'public/Operation gallery/3.webp', folder: 'skt/gallery', public_id: '3' },
  { path: 'public/Operation gallery/4.webp', folder: 'skt/gallery', public_id: '4' },
  { path: 'public/Operation gallery/5.webp', folder: 'skt/gallery', public_id: '5' },
  { path: 'public/Operation gallery/6.webp', folder: 'skt/gallery', public_id: '6' },
  { path: 'public/Hazard Elimination.webp', folder: 'skt/safety', public_id: 'hazard-elimination' },
  { path: 'public/Worker Protection Systems.webp', folder: 'skt/safety', public_id: 'worker-protection-systems' },
  { path: 'public/Continuous Training.webp', folder: 'skt/safety', public_id: 'continuous-training' },
  { path: 'public/Emergency Readiness.webp', folder: 'skt/safety', public_id: 'emergency-readiness' },
  { path: 'public/Community Safety Culture.webp', folder: 'skt/safety', public_id: 'community-safety-culture' }
];

async function uploadFiles() {
  for (const file of filesToUpload) {
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
}

uploadFiles();
