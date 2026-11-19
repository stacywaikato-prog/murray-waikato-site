import Link from "next/link";
import { notFound } from "next/navigation";
import { Photo } from "@/components/Photo";
import { Clip } from "@/components/Clip";
import { clips } from "@/content/clips";
import { Reo } from "@/components/Reo";
import { meta } from "@/content/images";
import { works } from "@/content/works";
import { pageMeta } from "@/lib-seo";

export const dynamicParams = false;
export function generateStaticParams() { return works.map((w) => ({ slug: w.slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const w = works.find((x) => x.slug === slug);
  if (!w) return {};
  return pageMeta(`${w.title} — Murray Waikato`, `${w.summary} Work by Māori carver Murray Waikato of Te Teko.`, `/works/${w.slug}/`, `${w.title} — Murray Waikato`, w.summary);
}

export default async function Work({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const i = works.findIndex((x) => x.slug === slug);
  if (i < 0) notFound();
  const w = works[i];
  const next = works[(i + 1) % works.length];
  return (
    <article>
      <header className="mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-10 md:pt-32">
        <p className="eyebrow text-rimu">No. {w.no} · {w.material}</p>
        <h1 className="mt-5 text-[clamp(2.75rem,7vw,6rem)]">{w.title}</h1>
        {w.reo && <p className="mt-3 text-xl text-stone"><Reo>{w.reo}</Reo></p>}
        <div className="mt-10 max-w-2xl space-y-5 text-lg text-bone">{w.body.map((p, k) => <p key={k}>{p}</p>)}</div>
      </header>
      <div className="mx-auto max-w-7xl space-y-16 px-5 pb-24 md:space-y-24 md:px-10">
        {w.images.map((id, k) => (
          <figure key={id} className={`md:grid md:grid-cols-12 md:items-end md:gap-10 ${k % 2 ? "" : ""}`}>
            <div className={`md:col-span-7 ${k % 2 ? "md:col-start-6" : ""}`}>
              <Photo id={id} priority={k === 0} sizes="(min-width:768px) 58vw, 100vw" />
            </div>
            <figcaption className={`mt-4 max-w-xs text-sm text-stone md:col-span-4 ${k % 2 ? "md:col-start-1 md:row-start-1 md:text-right md:justify-self-end" : "md:col-start-9"}`}>
              <span className="eyebrow block text-rimu">{meta[id].title}</span>
              <span className="mt-1 block">{meta[id].caption}</span>
            </figcaption>
          </figure>
        ))}
        {w.clips && (
          <section aria-label="Moving images" className={`grid gap-6 ${w.clips.length > 1 ? "md:grid-cols-2" : "md:w-7/12"}`}>
            {w.clips.map((c) => (
              <figure key={c}><Clip id={c} /><figcaption className="mt-3 text-sm text-stone">{clips[c].caption}</figcaption></figure>
            ))}
          </section>
        )}
      </div>
      <nav aria-label="Next work" className="border-t border-ash">
        <Link href={`/works/${next.slug}/`} className="mx-auto flex max-w-7xl items-center justify-between px-5 py-14 md:px-10">
          <span><span className="eyebrow block text-stone">Next</span><span className="display text-3xl md:text-5xl">{next.title}</span></span>
          <span aria-hidden="true" className="text-3xl text-rimu">→</span>
        </Link>
      </nav>
    </article>
  );
}
