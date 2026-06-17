const cloudinary = require('cloudinary').v2;
const path = require('path');

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dxhwcq1eg',
  api_key: process.env.CLOUDINARY_API_KEY || '965952794996982',
  api_secret: process.env.CLOUDINARY_API_SECRET || '8hd5ki6eICdxzvI3-Z20JuSYF_g',
});

const videosToUpload = [
  { path: 'public/underground-mining-bg.mp4', public_id: 'skt/underground-mining-bg' },
  { path: 'public/Operation gallery/center video.mp4', public_id: 'skt/center-video' },
  { path: 'public/fleet-hero.mp4', public_id: 'skt/fleet-hero' },
  { path: 'public/videos/skt-global-hero-optimized.mp4', public_id: 'skt/skt-global-hero-optimized' }
];

async function uploadVideos() {
  console.log('Starting bulk video upload to Cloudinary...');
  
  for (const video of videosToUpload) {
    console.log(`Uploading ${video.path}...`);
    try {
      const result = await cloudinary.uploader.upload(
        path.join(__dirname, video.path),
        { 
          resource_type: 'video',
          public_id: video.public_id,
          chunk_size: 6000000 // 6MB chunks for large files
        }
      );
      console.log(`✅ Success! URL: ${result.secure_url}`);
    } catch (err) {
      console.error(`❌ Failed to upload ${video.path}:`, err);
    }
  }
  console.log('Upload process completed.');
}

uploadVideos();
