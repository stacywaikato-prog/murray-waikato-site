import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Reo } from "@/components/Reo";
import { works } from "@/content/works";
import { pageMeta } from "@/lib-seo";

export const metadata = pageMeta(
  "Works — Timber, Toki and Pounamu by Murray Waikato",
  "Carved timber forms, toki and hafts, pounamu pendants, feathered rākau, backlit blue stone, and drawings on stone. Photographs of work by Māori carver Murray Waikato of Te Teko.",
  "/works/", "Works — Murray Waikato", "Timber, toki, pounamu, rākau, light through stone, and the drawings that come before them.",
);

export default function Works() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-10 md:pt-32">
        <p className="eyebrow text-rimu">Works</p>
        <h1 className="mt-5 text-[clamp(2.75rem,7vw,6rem)]">Six bodies of work.</h1>
      </header>
      <div className="mx-auto max-w-7xl space-y-24 px-5 pb-28 md:space-y-36 md:px-10">
        {works.map((w, i) => (
          <section key={w.slug} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
            <Link href={`/works/${w.slug}/`} className={`group block md:col-span-6 ${i % 2 ? "md:order-2" : ""}`} aria-label={`View ${w.title}`}>
              <div className="overflow-hidden"><Photo id={w.lead} sizes="(min-width:768px) 45vw, 100vw" className="transition-transform duration-700 group-hover:scale-[1.03]" /></div>
            </Link>
            <div className="md:col-span-5 md:col-start-8">
              <p className="eyebrow text-rimu">No. {w.no} · {w.material}</p>
              <h2 className="mt-3 text-4xl md:text-5xl">{w.title}</h2>
              {w.reo && <p className="mt-2 text-stone"><Reo>{w.reo}</Reo></p>}
              <p className="mt-6 text-bone">{w.summary}</p>
              <Link href={`/works/${w.slug}/`} className="mt-8 inline-block border-b border-rimu pb-1 text-sm">View {w.images.length} photographs</Link>
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
