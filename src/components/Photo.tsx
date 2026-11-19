import manifest from "@/content/image-manifest.json";
import { meta, type ImageId } from "@/content/images";

export function Photo({ id, sizes = "100vw", priority = false, className = "", fit = false, position, alt }: {
  id: ImageId; sizes?: string; priority?: boolean; className?: string; fit?: boolean; position?: string; alt?: string;
}) {
  const m = manifest[id];
  const srcSet = m.widths.map((w: number) => `/img/${id}-${w}.webp ${w}w`).join(", ");
  const largest = m.widths[m.widths.length - 1];
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`/img/${id}-${largest}.webp`} srcSet={srcSet} sizes={sizes}
      width={m.w} height={m.h} alt={alt ?? meta[id].alt}
      loading={priority ? "eager" : "lazy"} decoding="async" fetchPriority={priority ? "high" : "auto"}
      style={{ backgroundColor: m.color, objectPosition: position }}
      className={`${fit ? "h-full w-full object-cover" : "h-auto w-full"} ${className}`}
    />
  );
}
