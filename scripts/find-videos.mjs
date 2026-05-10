import { readFileSync } from "node:fs";

const path = process.argv[2];
if (!path) {
  console.error("usage: node find-videos.mjs <path-to-json>");
  process.exit(1);
}

const data = JSON.parse(readFileSync(path, "utf8"));
const items = Array.isArray(data) ? data : [data];

console.log(`items: ${items.length}`);

for (const p of items) {
  const html = p?.content?.rendered ?? "";
  const title = p?.title?.rendered ?? p?.slug ?? "(no title)";
  const yt = [
    ...html.matchAll(
      /(?:youtu\.be\/|youtube(?:-nocookie)?\.com\/(?:embed\/|watch\?v=|v\/))([\w-]{8,})/g
    ),
  ].map((m) => m[1]);
  const vimeo = [
    ...html.matchAll(/(?:vimeo\.com\/(?:video\/)?|player\.vimeo\.com\/video\/)(\d+)/g),
  ].map((m) => m[1]);
  const iframes = [...html.matchAll(/<iframe[^>]+src="([^"]+)"/g)].map(
    (m) => m[1]
  );
  const videoTags = [...html.matchAll(/<video[^>]*>[\s\S]*?<\/video>/g)].map(
    (m) => m[0].slice(0, 200)
  );
  if (yt.length || vimeo.length || iframes.length || videoTags.length) {
    console.log(`\n--- ${p.id} | ${p.slug} | ${title}`);
    if (yt.length) console.log("  YouTube IDs:", yt);
    if (vimeo.length) console.log("  Vimeo IDs:", vimeo);
    if (iframes.length) console.log("  iframes:", iframes);
    if (videoTags.length) console.log("  <video>:", videoTags);
  }
}
