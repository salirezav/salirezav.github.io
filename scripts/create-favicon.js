/**
 * Script to create favicon and app icons from a source image
 * 
 * Usage:
 * 1. Place your source image (jpg/png) in the public folder as "profile-photo.jpg" or "profile-photo.png"
 * 2. Install sharp: npm install --save-dev sharp
 * 3. Run: node scripts/create-favicon.js
 */

const fs = require('fs');
const path = require('path');

// Check if sharp is available
let sharp;
try {
    sharp = require('sharp');
} catch (e) {
    console.error('Error: sharp package not found.');
    console.log('Please install it first: npm install --save-dev sharp');
    process.exit(1);
}

const publicDir = path.join(__dirname, '..', 'public');
const sourceImage = path.join(publicDir, 'me22.png');

if (!fs.existsSync(sourceImage)) {
    console.error('Error: Source image not found!');
    console.log('Please save your image as "me22.png" in the public folder.');
    process.exit(1);
}

async function createFavicons() {
    try {
        console.log('Creating favicon and app icons...');

        // Create favicon.ico (16x16, 32x32, 48x48 sizes)
        await sharp(sourceImage)
            .resize(32, 32, { fit: 'cover' })
            .toFile(path.join(publicDir, 'favicon.ico'));
        console.log('✓ Created favicon.ico');

        // Create logo192.png
        await sharp(sourceImage)
            .resize(192, 192, { fit: 'cover' })
            .toFile(path.join(publicDir, 'logo192.png'));
        console.log('✓ Created logo192.png');

        // Create logo512.png
        await sharp(sourceImage)
            .resize(512, 512, { fit: 'cover' })
            .toFile(path.join(publicDir, 'logo512.png'));
        console.log('✓ Created logo512.png');

        console.log('\n✅ All favicon files created successfully!');
        console.log('You can now run: npm run build && npm run deploy');
    } catch (error) {
        console.error('Error creating favicons:', error);
        process.exit(1);
    }
}

createFavicons();

