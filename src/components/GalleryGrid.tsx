"use client";
import { useCallback, useEffect, useRef, useState } from "react";
import { Photo } from "./Photo";
import { all, meta, seriesLabels, type Series } from "@/content/images";

const filters: ("all" | Series)[] = ["all", "timber", "toki", "pounamu", "rakau", "light", "bone", "stone", "drawing"];

export function GalleryGrid() {
  const [filter, setFilter] = useState<"all" | Series>("all");
  const [limit, setLimit] = useState(18);
  const [open, setOpen] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const items = all.filter((id) => filter === "all" || meta[id].series === filter);

  const close = useCallback(() => { dialog.current?.close(); setOpen(null); opener.current?.focus(); }, []);
  const step = useCallback((d: number) => setOpen((i) => (i === null ? i : (i + d + items.length) % items.length)), [items.length]);

  useEffect(() => { if (open !== null && !dialog.current?.open) dialog.current?.showModal(); }, [open]);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (open === null) return; if (e.key === "ArrowRight") step(1); if (e.key === "ArrowLeft") step(-1); };
    window.addEventListener("keydown", onKey); return () => window.removeEventListener("keydown", onKey);
  }, [open, step]);

  const current = open !== null ? items[open] : null;
  return (
    <>
      <div role="group" aria-label="Filter photographs" className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button key={f} type="button" aria-pressed={filter === f} onClick={() => { setFilter(f); setLimit(18); }}
            className={`min-h-11 border px-5 text-sm transition-colors ${filter === f ? "border-parchment bg-parchment text-ink" : "border-ash text-stone hover:border-stone"}`}>
            {f === "all" ? "All" : seriesLabels[f]}
          </button>
        ))}
      </div>
      <p className="sr-only" aria-live="polite">{items.length} photographs shown</p>
      <ul className="mt-10 columns-2 gap-3 md:columns-3 md:gap-5">
        {items.slice(0, limit).map((id, i) => (
          <li key={id} className="mb-3 break-inside-avoid md:mb-5">
            <button type="button" className="group block w-full overflow-hidden text-left"
              onClick={(e) => { opener.current = e.currentTarget; setOpen(i); }} aria-label={`Enlarge: ${meta[id].title}`}>
              <Photo id={id} sizes="(min-width:768px) 30vw, 50vw" className="transition-transform duration-700 group-hover:scale-[1.03]" />
            </button>
          </li>
        ))}
      </ul>
      {items.length > limit && (
        <div className="mt-10 text-center">
          <button type="button" onClick={() => setLimit(items.length)} className="min-h-11 border border-stone px-7 text-sm text-parchment transition-colors hover:border-parchment">
            Show all {items.length} photographs
          </button>
        </div>
      )}
      <dialog ref={dialog} onClose={() => setOpen(null)} aria-label="Photograph viewer"
        className="m-0 h-full max-h-none w-full max-w-none bg-transparent p-0 text-parchment" onClick={(e) => { if (e.target === dialog.current) close(); }}>
        {current && (
          <div className="flex h-full flex-col items-center justify-center gap-4 p-4 md:p-10">
            <div className="flex min-h-0 flex-1 items-center justify-center">
              <Photo id={current} priority sizes="90vw" className="max-h-[78svh] w-auto object-contain" />
            </div>
            <p className="max-w-xl text-center text-sm text-bone"><span className="eyebrow block text-rimu">{meta[current].title}</span>{meta[current].caption}</p>
            <div className="flex gap-3">
              <button type="button" onClick={() => step(-1)} className="min-h-11 min-w-11 border border-stone px-4">←<span className="sr-only"> Previous</span></button>
              <button type="button" onClick={close} className="min-h-11 border border-stone px-6 text-sm">Close</button>
              <button type="button" onClick={() => step(1)} className="min-h-11 min-w-11 border border-stone px-4">→<span className="sr-only"> Next</span></button>
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
