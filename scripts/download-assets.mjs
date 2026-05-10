#!/usr/bin/env node
/**
 * Downloads every real photo from glasbazaporoko.si into /public/images/
 * (and prepares /public/videos/ for any future video files).
 *
 * Usage:
 *   npm run download:assets
 *
 * Notes:
 *   - Requires a network that can reach https://www.glasbazaporoko.si.
 *   - Uses Node 18+ built-in `fetch` (no external deps).
 *   - Skips files that already exist on disk (idempotent).
 *   - Keep the URL list in sync with app/lib/media.ts.
 */

import { mkdir, stat, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(__dirname, "..");
const IMG_DIR = join(ROOT, "public", "images");
const VID_DIR = join(ROOT, "public", "videos");

const SRC = "https://www.glasbazaporoko.si/wp-content/uploads";

/** Keep this in sync with app/lib/media.ts */
const ASSETS = [
  // Hero
  {
    url: `${SRC}/2022/11/Barbara-Zalaznik-Matos-glasba-na-poroki-1.jpg`,
    file: "hero-glasba-za-poroko.jpg",
  },
  // About / portrait
  {
    url: `${SRC}/2022/11/glasba-na-poroki-barbara.jpg`,
    file: "barbara-zalaznik-portret.jpg",
  },
  // Gallery
  {
    url: `${SRC}/2022/11/Poroka-violina-1.jpg`,
    file: "galerija-1-porocni-obred.jpg",
  },
  {
    url: `${SRC}/2022/11/glasba-na-poroki-12.jpg`,
    file: "galerija-2-civilni-obred.jpg",
  },
  {
    url: `${SRC}/2022/11/glasba-za-poroko-15.jpg`,
    file: "galerija-3-sprejem-svatov.jpg",
  },
  {
    url: `${SRC}/2022/11/glasba-za-poroko-17.jpg`,
    file: "galerija-4-prvi-ples.jpg",
  },
  {
    url: `${SRC}/2022/11/violinistka-novoletna-zabava.jpg`,
    file: "galerija-5-elektricna-violina.jpg",
  },
  {
    url: `${SRC}/2022/11/glasba-na-poroki-14.jpg`,
    file: "galerija-6-poroka.jpg",
  },
  // Video posters
  {
    url: `${SRC}/2022/11/Barbara-Zalaznik-Matos-10.jpg`,
    file: "nastop-1.jpg",
  },
  {
    url: `${SRC}/2022/11/barbara-zalaznik-events.jpg`,
    file: "nastop-2.jpg",
  },
  {
    // Replacement source – the original Instagram-style filename returned 404.
    url: `${SRC}/2022/11/Barbara-Zalaznik-Matos-glasba-na-poroki.webp`,
    file: "nastop-3.webp",
  },
  // Ambient backgrounds
  {
    url: `${SRC}/2020/11/header-background-scaled-1.jpg`,
    file: "ambient-header.jpg",
  },
  {
    url: `${SRC}/2020/11/footer-background-scaled-1.jpg`,
    file: "ambient-footer.jpg",
  },
  // Logo (optional)
  {
    url: `${SRC}/2022/11/LOGO-BZ.png`,
    file: "logo-bz.png",
  },
];

const CONCURRENCY = 4;

async function exists(p) {
  try {
    await stat(p);
    return true;
  } catch {
    return false;
  }
}

async function download({ url, file }) {
  const dest = join(IMG_DIR, file);
  if (await exists(dest)) {
    console.log(`✓ skip   ${file} (already on disk)`);
    return { file, status: "skipped" };
  }
  try {
    const res = await fetch(url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36",
        Accept:
          "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
        "Accept-Language": "sl-SI,sl;q=0.9,en;q=0.8",
        Referer: "https://www.glasbazaporoko.si/",
        "Sec-Fetch-Dest": "image",
        "Sec-Fetch-Mode": "no-cors",
        "Sec-Fetch-Site": "same-origin",
      },
    });
    if (!res.ok) throw new Error(`HTTP ${res.status} ${res.statusText}`);
    const buf = Buffer.from(await res.arrayBuffer());
    await writeFile(dest, buf);
    const kb = (buf.length / 1024).toFixed(1);
    console.log(`✓ saved  ${file}  (${kb} KB)`);
    return { file, status: "saved", bytes: buf.length };
  } catch (err) {
    console.error(`✗ FAIL   ${file}  →  ${err.message}`);
    console.error(`         source: ${url}`);
    return { file, status: "failed", error: err.message };
  }
}

async function pool(items, n, worker) {
  const results = [];
  let i = 0;
  const runners = Array.from({ length: n }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx]);
    }
  });
  await Promise.all(runners);
  return results;
}

async function main() {
  await mkdir(IMG_DIR, { recursive: true });
  await mkdir(VID_DIR, { recursive: true });

  console.log(`\n→ Downloading ${ASSETS.length} assets to ${IMG_DIR}\n`);
  const results = await pool(ASSETS, CONCURRENCY, download);

  const saved = results.filter((r) => r.status === "saved").length;
  const skipped = results.filter((r) => r.status === "skipped").length;
  const failed = results.filter((r) => r.status === "failed");

  console.log(`\nDone — saved: ${saved}, skipped: ${skipped}, failed: ${failed.length}`);
  if (failed.length) {
    console.log("\nFailed items (download manually using the URLs above):");
    for (const f of failed) console.log(`  - ${f.file}  →  ${f.error}`);
    process.exit(1);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
