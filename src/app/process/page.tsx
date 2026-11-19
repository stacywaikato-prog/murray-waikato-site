import { Photo } from "@/components/Photo";
import { Clip } from "@/components/Clip";
import { clips, type ClipId } from "@/content/clips";
import { pageMeta } from "@/lib-seo";
import { meta, type ImageId } from "@/content/images";

export const metadata = pageMeta(
  "Process — From Stone and Timber to Finished Carving",
  "What the workshop photographs show: green stone in the river, timber and chisels at the bench, figures drawn on stone, forms held to the light, cord and boxes.",
  "/process/", "Process — Murray Waikato", "From slab to line to light to box: the making of Murray Waikato’s carving, as the photographs show it.",
);

const stages: { n: string; title: string; ids: ImageId[]; clips?: ClipId[]; text: string }[] = [
  { n: "01", title: "Stone from the river", ids: ["pounamu-slab-river", "stone-blanks"], text: "A rectangular slab of green stone in clear, shallow water, its surface mottled with rust red and cloud white. Elsewhere, around forty cut blanks lie in rows in the sun. Where the colour runs and how thick each piece is will shape what it can become." },
  { n: "02", title: "Cut to slab", ids: [], clips: ["saw-green-stone", "saw-blue-stone", "slab-to-light"], text: "A large saw, cooled by jets of water, runs through a block of green stone, then through a block of blue and white. Thin slabs come off a smaller machine. Held up to the daylight, one glows green right through." },
  { n: "03", title: "Timber on the floor", ids: ["workbench-axe", "rakau-in-progress"], text: "Planks lean against the wall, one marked in marker pen: black maire. In front of them, a bench grinder, a vice padded with a cloth, a sander and a row of chisels, all among shavings. On another bench, five long pieces lie side by side at different stages." },
  { n: "04", title: "The line before the cut", ids: ["hei-tiki-layout-slab", "layout-studies"], text: "Tiki figures inked straight onto stone, in one case through a clear film, with small crosses marked at the edges. On the table, slabs at different stages of drawing and a roll of tape." },
  { n: "05", title: "Shaped against the light", ids: ["wip-silhouette", "hei-tiki-backlit", "blue-tiki-held"], text: "Against a light panel a roughed-out form shows its outline: a carved head, three openings along the blade. Held to a lamp, a pierced stone form glows yellow-green at its thinnest edges; a blue stone tiki turns deep blue and white with the light behind it." },
  { n: "06", title: "Cut by hand", ids: ["haft-detail"], text: "A haft carved in bands of herringbone below a dark steel head. Above the carved band, spirals and a circle are drawn in pencil, waiting for the chisel." },
  { n: "07", title: "Bound and boxed", ids: ["toki-pendants-pair", "boxed-toki-pendants", "boxed-taonga-set"], text: "Pendants wrapped at the neck in black or tan cord, then laid in black presentation boxes, each with a sachet of silica gel. Larger sets sit in a fitted wooden case." },
];

export default function Process() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-10 md:pt-32">
        <p className="eyebrow text-rimu">Process</p>
        <h1 className="mt-5 text-[clamp(2.75rem,7vw,6rem)]">What the photographs show.</h1>
        <p className="mt-6 max-w-2xl text-lg text-bone">Seven moments from the workshop and the river, in the order a piece tends to travel.</p>
      </header>
      <div className="mx-auto max-w-7xl space-y-24 px-5 pb-28 md:space-y-40 md:px-10">
        {stages.map((s, i) => (
          <section key={s.n} className="grid gap-8 md:grid-cols-12 md:gap-12">
            <div className={`md:col-span-4 ${i % 2 ? "md:order-2 md:col-start-9" : ""}`}>
              <p className="eyebrow text-rimu">{s.n}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-5 text-bone">{s.text}</p>
            </div>
            <div className={`grid gap-4 md:col-span-7 ${s.ids.length + (s.clips?.length ?? 0) > 1 ? "grid-cols-2 items-start" : ""} ${i % 2 ? "md:order-1" : "md:col-start-6"}`}>
              {s.clips?.map((c, k) => (
                <figure key={c} className={s.clips!.length === 3 && k === 0 ? "col-span-2" : ""}><Clip id={c} /><figcaption className="mt-2 text-xs text-stone">{clips[c].caption}</figcaption></figure>
              ))}
              {s.ids.map((id) => (
                <figure key={id}><Photo id={id} sizes={s.ids.length > 1 ? "(min-width:768px) 28vw, 50vw" : "(min-width:768px) 55vw, 100vw"} /><figcaption className="mt-2 text-xs text-stone">{meta[id].caption}</figcaption></figure>
              ))}
            </div>
          </section>
        ))}
      </div>
      <div className="relative h-[60svh] w-full overflow-hidden" role="img" aria-label={meta["workbench-axe"].alt}>
        <Photo id="workbench-axe" fit sizes="100vw" position="50% 38%" alt="" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent" />
      </div>
    </>
  );
}
