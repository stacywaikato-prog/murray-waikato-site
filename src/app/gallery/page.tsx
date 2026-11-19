import { GalleryGrid } from "@/components/GalleryGrid";
import { pageMeta } from "@/lib-seo";

export const metadata = pageMeta(
  "Gallery — Carving, Pounamu and Workshop Photographs",
  "Every photograph in the archive of Murray Waikato’s work: timber carving, pounamu pendants, drawings on stone and the workshop.",
  "/gallery/", "Gallery — Murray Waikato", "Timber, pounamu, drawing and workshop: the photographic archive of Murray Waikato’s carving.",
);

export default function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-5 pb-28 pt-20 md:px-10 md:pt-32">
      <p className="eyebrow text-rimu">Gallery</p>
      <h1 className="mb-10 mt-5 text-[clamp(2.75rem,7vw,6rem)]">The archive.</h1>
      <GalleryGrid />
    </div>
  );
}
