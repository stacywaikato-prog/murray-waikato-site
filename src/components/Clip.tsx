"use client";
import { useEffect, useRef } from "react";
import { clips, type ClipId } from "@/content/clips";

/** Silent looping clip. Plays only while on screen; never autoplays for reduced-motion users (controls shown instead). */
export function Clip({ id, className = "" }: { id: ClipId; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  const c = clips[id];
  useEffect(() => {
    const v = ref.current; if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { v.controls = true; return; }
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { v.play().catch(() => { v.controls = true; }); } else v.pause(); }, { threshold: 0.25 });
    io.observe(v); return () => io.disconnect();
  }, []);
  return (
    <video ref={ref} className={`block h-auto w-full bg-basalt ${className}`} width={c.w} height={c.h}
      src={`/video/${id}.mp4`} poster={`/video/${id}.webp`} muted loop playsInline preload="none"
      aria-label={c.label} />
  );
}
