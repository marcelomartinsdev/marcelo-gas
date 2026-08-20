import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const source = path.join(root, "imagens");
const output = path.join(root, "public", "images");
await mkdir(output, { recursive: true });

const photos = [
  ["entregador.jpeg", "entregador.webp", 1200],
  ["proprietario.jpeg", "proprietario.webp", 1100],
  ["patio.jpeg", "patio.webp", 1400],
  ["patio2.jpeg", "patio2.webp", 1100],
  ["patio3.jpeg", "patio3.webp", 1200],
  ["patio4.jpeg", "patio4.webp", 900],
];

await Promise.all(
  photos.map(([input, filename, width]) =>
    sharp(path.join(source, input))
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, smartSubsample: true })
      .toFile(path.join(output, filename)),
  ),
);

const logoBuffer = await sharp(path.join(source, "logo.png"))
  .trim({ background: { r: 0, g: 0, b: 0, alpha: 0 }, threshold: 3 })
  .resize({ width: 900, withoutEnlargement: true })
  .png({ compressionLevel: 9 })
  .toBuffer();

await sharp(logoBuffer).toFile(path.join(output, "logo.png"));

const ogLogo = await sharp(logoBuffer).resize({ width: 230 }).toBuffer();

const iconSvg = Buffer.from(`
  <svg width="512" height="512" xmlns="http://www.w3.org/2000/svg">
    <rect width="512" height="512" rx="112" fill="#082f38"/>
    <path d="M269 61c-17 73-100 105-100 205 0 71 42 133 101 162-7-22-3-45 13-68 24-34 32-64 24-91 42 43 59 82 49 118 35-35 56-80 56-130 0-80-55-123-143-196Z" fill="#f26322"/>
    <path d="M263 208c1 43-44 62-44 116 0 44 25 80 62 97-4-21 3-40 20-58 21-23 24-51 8-81 38 29 50 59 39 90 18-22 29-50 29-80 0-46-39-67-114-84Z" fill="#27c4ce"/>
  </svg>`);
await sharp(iconSvg).png().toFile(path.join(output, "icon.png"));

const hero = await sharp(path.join(source, "entregador.jpeg"))
  .rotate()
  .resize(480, 630, { fit: "cover", position: "centre" })
  .modulate({ saturation: 0.82 })
  .toBuffer();

const ogArtwork = Buffer.from(`
  <svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg" x1="0" x2="1"><stop stop-color="#031e25"/><stop offset="1" stop-color="#082f38"/></linearGradient>
      <pattern id="grid" width="72" height="72" patternUnits="userSpaceOnUse"><path d="M72 0H0V72" fill="none" stroke="#fff" stroke-opacity=".055"/></pattern>
    </defs>
    <rect width="1200" height="630" fill="url(#bg)"/>
    <rect width="1200" height="630" fill="url(#grid)"/>
    <path d="M-30 525C220 400 354 578 578 451S838 408 1240 481" fill="none" stroke="#f26322" stroke-width="8" stroke-dasharray="12 18" opacity=".65"/>
    <text x="72" y="230" fill="#fff" font-family="Arial, sans-serif" font-weight="900" font-size="65" letter-spacing="-3">Precisou de gás?</text>
    <text x="72" y="305" fill="#ff7a1a" font-family="Arial, sans-serif" font-weight="900" font-size="65" letter-spacing="-3">Chama o Marcelo.</text>
    <text x="76" y="356" fill="#d5e2df" font-family="Arial, sans-serif" font-size="25">Pedido direto pelo WhatsApp em Poções / BA</text>
    <rect x="72" y="405" width="320" height="62" fill="#f26322"/>
    <text x="105" y="445" fill="#fff" font-family="Arial, sans-serif" font-weight="800" font-size="22" letter-spacing="1">MARCELO GÁS • POÇÕES</text>
    <path d="M1018 52c-15 59-80 83-80 163 0 56 32 105 79 128-5-18-2-36 11-54 19-27 25-51 19-72 33 34 46 65 38 93 28-28 44-63 44-102 0-64-43-98-111-156Z" fill="#f26322"/>
    <path d="M1013 169c1 34-35 49-35 92 0 35 20 63 49 76-3-16 2-32 16-46 16-19 19-41 6-65 31 23 40 47 32 72 14-18 23-40 23-64 0-37-31-54-91-65Z" fill="#27c4ce"/>
  </svg>`);

await sharp(ogArtwork)
  .composite([
    { input: hero, left: 720, top: 0, blend: "over" },
    { input: Buffer.from(`<svg width="480" height="630" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="fade"><stop stop-color="#082f38"/><stop offset=".5" stop-color="#082f38" stop-opacity="0"/></linearGradient></defs><rect width="480" height="630" fill="url(#fade)"/></svg>`), left: 720, top: 0 },
    { input: ogLogo, left: 72, top: 48 },
  ])
  .jpeg({ quality: 88, chromaSubsampling: "4:4:4" })
  .toFile(path.join(output, "og-marcelo-gas.jpg"));

console.log("Imagens otimizadas em public/images.");
