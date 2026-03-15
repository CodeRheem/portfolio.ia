import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const imageDir = './public/images';

async function compressImages() {
  const files = await fs.readdir(imageDir);
  
  for (const file of files) {
    if (!['.png', '.jpg', '.jpeg', '.webp'].includes(path.extname(file).toLowerCase())) {
      continue;
    }

    const filePath = path.join(imageDir, file);
    const stat = await fs.stat(filePath);
    const originalSize = stat.size / 1024;

    console.log(`\nCompressing: ${file} (${originalSize.toFixed(2)} KB)`);

    try {
      // Convert to webp for better compression, fallback to original format
      const outputFile = path.join(imageDir, `${path.parse(file).name}.webp`);
      
      await sharp(filePath)
        .resize(1200, 800, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .webp({ quality: 80 })
        .toFile(outputFile);

      const newStat = await fs.stat(outputFile);
      const newSize = newStat.size / 1024;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);

      console.log(`✓ Created: ${path.basename(outputFile)} (${newSize.toFixed(2)} KB) — Saved ${savings}%`);
    } catch (err) {
      console.error(`✗ Error compressing ${file}:`, err.message);
    }
  }
}

compressImages().catch(console.error);
