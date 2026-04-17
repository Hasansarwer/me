import sharp from "sharp";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

const WIDTH = 1200;
const HEIGHT = 630;

const name = "Hasan Sarwer";
const title = "Full-Stack Engineer &#xB7; PhD Mathematics";
const subtitle = "React &#xB7; Next.js &#xB7; Node.js &#xB7; Python &#xB7; React Native &#xB7; AI &#x26; Data";
const url = "hasansarwer.com";

// SVG text overlay
const svgOverlay = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0f172a"/>
      <stop offset="100%" stop-color="#1e293b"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#38bdf8"/>
      <stop offset="100%" stop-color="#818cf8"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Accent bar top -->
  <rect x="0" y="0" width="${WIDTH}" height="6" fill="url(#accent)"/>

  <!-- Decorative circle (behind photo area) -->
  <circle cx="970" cy="315" r="180" fill="#1e293b" stroke="#334155" stroke-width="2"/>

  <!-- Text content -->
  <text x="80" y="200" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="64" font-weight="700" fill="#f8fafc" letter-spacing="-1">${name}</text>

  <text x="80" y="270" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="28" font-weight="400" fill="#94a3b8">${title}</text>

  <text x="80" y="340" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="20" font-weight="400" fill="#64748b">${subtitle}</text>

  <!-- Accent line -->
  <rect x="80" y="380" width="120" height="4" rx="2" fill="url(#accent)"/>

  <!-- URL -->
  <text x="80" y="560" font-family="system-ui, -apple-system, 'Segoe UI', sans-serif" font-size="22" font-weight="500" fill="#38bdf8">${url}</text>

  <!-- Bottom accent bar -->
  <rect x="0" y="${HEIGHT - 6}" width="${WIDTH}" height="6" fill="url(#accent)"/>
</svg>`;

async function generate() {
  // Load and prepare the profile photo as a circular crop
  const photoSize = 280;
  const photoBuffer = await sharp(
    path.join(root, "public/images/Hasan_Sarwer.jpg")
  )
    .resize(photoSize, photoSize, { fit: "cover", position: "top" })
    .toBuffer();

  // Create circular mask
  const circleMask = Buffer.from(
    `<svg width="${photoSize}" height="${photoSize}">
      <circle cx="${photoSize / 2}" cy="${photoSize / 2}" r="${photoSize / 2}" fill="white"/>
    </svg>`
  );

  const circularPhoto = await sharp(photoBuffer)
    .composite([{ input: circleMask, blend: "dest-in" }])
    .png()
    .toBuffer();

  // Create the final image
  await sharp(Buffer.from(svgOverlay))
    .composite([
      {
        input: circularPhoto,
        top: HEIGHT / 2 - photoSize / 2,
        left: 830,
      },
    ])
    .png()
    .toFile(path.join(root, "app/opengraph-image.png"));

  console.log("OG image generated: app/opengraph-image.png");
  console.log(`Size: ${WIDTH}x${HEIGHT}`);
}

generate().catch(console.error);
