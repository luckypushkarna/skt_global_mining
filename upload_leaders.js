const cloudinary = require('cloudinary').v2;
const path = require('path');

cloudinary.config({ 
  cloud_name: 'dxhwcq1eg', 
  api_key: '965952794996982', 
  api_secret: '8hd5ki6eICdxzvI3-Z20JuSYF_g' 
});

const filesToUpload = [
  { path: 'public/Sahil Talreja.webp', folder: 'skt/leaders', public_id: 'sahil-talreja' },
  { path: 'public/Anand Kolappa Pillai.webp', folder: 'skt/leaders', public_id: 'anand-kolappa-pillai' },
  { path: 'public/Sanjay Kumar sharma.webp', folder: 'skt/leaders', public_id: 'sanjay-kumar-sharma' },
  { path: 'public/Srinivasulu Jonnalagadda.webp', folder: 'skt/leaders', public_id: 'srinivasulu-jonnalagadda' },
  { path: 'public/Kiran Kumar Reddy.webp', folder: 'skt/leaders', public_id: 'kiran-kumar-reddy' },
  { path: 'public/Suresh Babu Deshamalla.webp', folder: 'skt/leaders', public_id: 'suresh-babu-deshamalla' },
  { path: 'public/Kuldeep Kulshrestha.webp', folder: 'skt/leaders', public_id: 'kuldeep-kulshrestha' },
  { path: 'public/Mulenga Mutati.webp', folder: 'skt/leaders', public_id: 'mulenga-mutati' },
  { path: 'public/Safeli maxim chipulu.webp', folder: 'skt/leaders', public_id: 'safeli-maxim-chipulu' },
  { path: 'public/Toms Joseph.webp', folder: 'skt/leaders', public_id: 'toms-joseph' },
  { path: 'public/unknown-leader.webp', folder: 'skt/leaders', public_id: 'unknown-leader' }
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
