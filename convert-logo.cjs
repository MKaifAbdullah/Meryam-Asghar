const sharp = require('sharp');
const path = require('path');

async function main() {
  const src = path.join(__dirname, '292458413_421199506713465_150018537365228688_n.jpg');
  const out = path.join(__dirname, 'public', 'images', 'logo.webp');
  await sharp(src).webp({ quality: 90 }).toFile(out);
  const meta = await sharp(out).metadata();
  console.log('logo.webp created:', meta.width, 'x', meta.height);
}

main().catch((e) => { console.error(e); process.exit(1); });
