import Image from "next/image";
import type { MediaAsset } from "../lib/media";
import { blurDataURLForSrc } from "../lib/image-blur";

type Props = {
  asset: MediaAsset;
  /** Tailwind sizes prop hint passed to next/image for responsive loading */
  sizes?: string;
  /** Above-the-fold images should set this for eager load + high fetch priority */
  priority?: boolean;
  /** Object-fit on the rendered image (default: cover) */
  fit?: "cover" | "contain";
  /** Optional className applied to the inner <Image> */
  imgClassName?: string;
  /** Optional className applied to the wrapper (use relative / absolute + aspect as needed) */
  className?: string;
  /**
   * Tailwind gradient classes used as a tasteful base color while the
   * image hasn't loaded yet.
   */
  fallbackClassName?: string;
  /**
   * Override blur placeholder: `undefined` = auto from asset.src; `null` = disable blur.
   */
  blurDataURL?: string | null;
  /** JPEG/WebP quality hint (Next/Image); slightly higher when priority for hero clarity */
  quality?: number;
};

export default function MediaImage({
  asset,
  sizes = "(min-width: 1024px) 45vw, 92vw",
  priority,
  fit = "cover",
  imgClassName = "",
  className = "",
  fallbackClassName = "bg-gradient-to-br from-cream via-bone to-champagne/40",
  blurDataURL,
  quality,
}: Props) {
  const blurUrl =
    blurDataURL === null
      ? undefined
      : blurDataURL ?? blurDataURLForSrc(asset.src);

  const q =
    quality ??
    (priority ? 84 : 76);

  return (
    <div
      className={`isolate overflow-hidden ${className}`}
      data-asset={asset.src}
    >
      <span
        aria-hidden
        className={`pointer-events-none absolute inset-0 z-0 ${fallbackClassName}`}
      />
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "low"}
        placeholder={blurUrl ? "blur" : "empty"}
        blurDataURL={blurUrl}
        decoding="async"
        quality={q}
        className={`z-[1] ${
          fit === "cover" ? "object-cover" : "object-contain"
        } ${imgClassName}`}
      />
    </div>
  );
}
