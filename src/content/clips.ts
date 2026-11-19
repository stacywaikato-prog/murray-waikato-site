export type ClipId = "saw-green-stone" | "saw-blue-stone" | "slab-to-light" | "rakau-grain" | "rakau-red-blade";

export const clips: Record<ClipId, { w: number; h: number; label: string; caption: string }> = {
  "saw-green-stone": { w: 640, h: 640, label: "Video: a water-cooled saw cutting a block of green stone.",
    caption: "A water-cooled saw takes a block of green stone." },
  "saw-blue-stone": { w: 506, h: 506, label: "Video: the saw cutting a block of blue and white stone.",
    caption: "The same saw through a block of blue and white stone." },
  "slab-to-light": { w: 506, h: 506, label: "Video: a thin slab of green stone held up to daylight, glowing through.",
    caption: "A thin slab held up to the daylight." },
  "rakau-grain": { w: 506, h: 506, label: "Video: the camera moves along an oiled timber rākau, showing its grain and a carved band near the end.",
    caption: "Along the length of an oiled rākau: the grain, then the carved band." },
  "rakau-red-blade": { w: 506, h: 506, label: "Video: a tewhatewha stained red, with a carved blade, feathers bound at the neck and a round inlay set in a carved band on the shaft.",
    caption: "A tewhatewha: carved blade, feathers at the neck, an inlay on the shaft." },
};
