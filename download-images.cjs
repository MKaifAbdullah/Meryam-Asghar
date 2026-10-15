const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const images = [
  { name: 'hero', url: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80' },
  { name: 'balayage', url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&q=80' },
  { name: 'coloring', url: 'https://images.unsplash.com/photo-1634449571010-02389ed0f9b0?w=1200&q=80' },
  { name: 'highlights', url: 'https://images.unsplash.com/photo-1519699047748-de8e457a634e?w=1200&q=80' },
  { name: 'nails', url: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1200&q=80' },
  { name: 'salon', url: 'https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1200&q=80' },
  { name: 'stylist', url: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1200&q=80' },
  { name: 'portrait', url: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1200&q=80' },
  { name: 'roots', url: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=1200&q=80' },
  { name: 'about', url: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=1200&q=80' },
];

async function main() {
  const dir = path.join(__dirname, 'public', 'images');
  fs.mkdirSync(dir, { recursive: true });
  for (const img of images) {
    try {
      const res = await fetch(img.url, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
          Accept: 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        },
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      const out = path.join(dir, `${img.name}.webp`);
      await sharp(buf).webp({ quality: 82 }).toFile(out);
      const meta = await sharp(out).metadata();
      console.log(`${img.name}.webp ok (${meta.width}x${meta.height})`);
    } catch (e) {
      console.error(`${img.name} FAILED: ${e.message}`);
    }
  }
}

main();
