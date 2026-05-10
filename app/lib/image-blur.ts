import blurs from "./image-blurs.json";

/** Tiny LQIP blur (JPEG data URL) keyed by filename under /public/images/. */
export function blurDataURLForSrc(publicSrc: string): string | undefined {
  const filename = publicSrc.split("/").pop();
  if (!filename) return undefined;
  const url = (blurs as Record<string, string | undefined>)[filename];
  return typeof url === "string" && url.length > 0 ? url : undefined;
}
