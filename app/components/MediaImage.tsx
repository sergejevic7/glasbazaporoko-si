import Image from "next/image";
import type { MediaAsset } from "../lib/media";

type Props = {
  asset: MediaAsset;
  /** Tailwind sizes prop hint passed to next/image for responsive loading */
  sizes?: string;
  /** Above-the-fold images should set this to render eagerly */
  priority?: boolean;
  /** Object-fit on the rendered image (default: cover) */
  fit?: "cover" | "contain";
  /** Optional className applied to the inner <Image> */
  imgClassName?: string;
  /** Optional className applied to the relative wrapper */
  className?: string;
  /**
   * Tailwind gradient classes used as a tasteful base color while the
   * image hasn't been dropped in yet. The image, when present, sits on top
   * with object-cover and fully covers this layer.
   */
  fallbackClassName?: string;
};

export default function MediaImage({
  asset,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority,
  fit = "cover",
  imgClassName = "",
  className = "",
  fallbackClassName = "bg-gradient-to-br from-cream via-bone to-champagne/40",
}: Props) {
  return (
    <div
      className={`isolate overflow-hidden ${className}`}
      data-asset={asset.src}
    >
      <span aria-hidden className={`absolute inset-0 -z-10 ${fallbackClassName}`} />
      <Image
        src={asset.src}
        alt={asset.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`${
          fit === "cover" ? "object-cover" : "object-contain"
        } ${imgClassName}`}
      />
    </div>
  );
}
