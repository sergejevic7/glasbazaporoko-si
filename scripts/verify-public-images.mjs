#!/usr/bin/env node
/**
 * Fail CI/local builds if referenced binaries under public/ are missing or empty.
 * Paths mirror scripts/download-assets.mjs + root OG/favicon artifacts.
 */
import { existsSync, statSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const IMG_DIR = join(ROOT, "public", "images");
const PUB_DIR = join(ROOT, "public");

const IMAGE_FILES = [
  "hero-barbara-zalaznik.jpg",
  "barbara-zalaznik-portret.jpg",
  "galerija-1-porocni-obred.jpg",
  "galerija-2-civilni-obred.jpg",
  "galerija-3-sprejem-svatov.jpg",
  "galerija-4-prvi-ples.jpg",
  "galerija-5-elektricna-violina.jpg",
  "galerija-6-poroka.jpg",
  "nastop-1.jpg",
  "nastop-2.jpg",
  "nastop-3.webp",
  "ambient-header.jpg",
  "ambient-footer.jpg",
  "logo-bz.png",
];

const ROOT_PUBLIC_FILES = [
  "og-image.jpg",
  "favicon-32.png",
  "icon.png",
  "apple-icon.png",
];

const MIN_BYTES = 256;

function main() {
  const problems = [];

  for (const file of IMAGE_FILES) {
    const p = join(IMG_DIR, file);
    if (!existsSync(p)) {
      problems.push(`MISSING  public/images/${file}`);
      continue;
    }
    if (statSync(p).size < MIN_BYTES) {
      problems.push(`TOO_SMALL public/images/${file} (${statSync(p).size} bytes)`);
    }
  }

  for (const file of ROOT_PUBLIC_FILES) {
    const p = join(PUB_DIR, file);
    if (!existsSync(p)) {
      problems.push(`MISSING  public/${file}`);
      continue;
    }
    if (statSync(p).size < MIN_BYTES) {
      problems.push(`TOO_SMALL public/${file} (${statSync(p).size} bytes)`);
    }
  }

  if (problems.length) {
    console.error("\n✗ verify-public-images: asset checks failed:\n");
    for (const line of problems) console.error(`  ${line}`);
    console.error(
      "\n  Run `npm run download:assets`, ensure OG/icons exist under public/, then retry.",
    );
    process.exit(1);
  }

  console.log(
    `✓ verify-public-images: ${IMAGE_FILES.length} images + ${ROOT_PUBLIC_FILES.length} public root assets OK`,
  );
}

main();
