const cloudinary = require('cloudinary').v2;

// 1. Configure Cloudinary
cloudinary.config({
  cloud_name: 'dxhwcq1eg',
  api_key: '965952794996982',
  api_secret: '8hd5ki6eICdxzvI3-Z20JuSYF_g',
});

async function run() {
  try {
    // 2. Upload an image
    console.log('Uploading image...');
    const uploadResult = await cloudinary.uploader.upload(
      'https://res.cloudinary.com/demo/image/upload/sample.jpg',
      { public_id: 'onboarding_sample' }
    );
    console.log('--- Upload Success ---');
    console.log(`Public ID: ${uploadResult.public_id}`);
    console.log(`Secure URL: ${uploadResult.secure_url}`);
    console.log('');

    // 3. Get image details
    console.log('Fetching image details...');
    const details = await cloudinary.api.resource('onboarding_sample');
    console.log('--- Image Details ---');
    console.log(`Width: ${details.width}px`);
    console.log(`Height: ${details.height}px`);
    console.log(`Format: ${details.format}`);
    console.log(`File Size: ${details.bytes} bytes`);
    console.log('');

    // 4. Transform the image
    const transformedUrl = cloudinary.url('onboarding_sample', {
      fetch_format: 'auto', // f_auto: Automatically delivers the image in the most efficient format depending on the browser (e.g., WebP, AVIF).
      quality: 'auto',      // q_auto: Automatically adjusts compression to minimize file size without visible degradation.
    });

    console.log('Done! Click link below to see optimized version of the image. Check the size and the format.');
    console.log(transformedUrl);

  } catch (error) {
    console.error('Error:', error);
  }
}

run();
