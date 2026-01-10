/**
 * Script to create a gray placeholder image
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const outputPath = path.join(publicDir, 'placeholder.jpg');

async function createPlaceholder() {
  try {
    // Create a gray image with text
    const svg = `
      <svg width="800" height="600" xmlns="http://www.w3.org/2000/svg">
        <rect width="800" height="600" fill="#e5e7e9"/>
        <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="32" fill="#9ca3af" text-anchor="middle" dy=".3em">Image Placeholder</text>
      </svg>
    `;

    await sharp(Buffer.from(svg))
      .jpeg({ quality: 90 })
      .toFile(outputPath);

    console.log('✓ Created placeholder.jpg');
  } catch (error) {
    console.error('Error creating placeholder:', error);
    process.exit(1);
  }
}

createPlaceholder();

