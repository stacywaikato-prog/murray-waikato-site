import Link from "next/link";
import { Photo } from "@/components/Photo";
import { Clip } from "@/components/Clip";
import { Reo } from "@/components/Reo";
import { works } from "@/content/works";
import { inHisWords, pepeha, site } from "@/content/site";
import { meta } from "@/content/images";
import { pageMeta } from "@/lib-seo";

export const metadata = pageMeta(
  "Murray Waikato — Māori Master Carver, Te Teko",
  "Whakairo in timber and pounamu by Murray Waikato of Te Teko, Ngāti Awa ki Rangitaiki. Marae and wharenui carving, cultural commissions, local and international projects.",
  "/", "Murray Waikato — Whakairo from Te Teko", "Carving in timber and pounamu, carried from Putauaki, Rangitaiki and Ngāti Awa ki Rangitaiki.",
);

export default function Home() {
  const featured = [works[0], works[2], works[3]];
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="relative md:min-h-[calc(100svh-4rem)]">
          <div className="relative aspect-[5/4] w-full md:absolute md:inset-y-0 md:right-0 md:aspect-auto md:w-[64%]">
            <Photo id="timber-spiral-form" priority fit sizes="(min-width:768px) 64vw, 100vw" position="55% 55%" />
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent md:bg-gradient-to-r md:from-ink md:via-ink/40 md:to-transparent" />
            <div aria-hidden="true" className="absolute inset-x-0 bottom-0 hidden h-40 bg-gradient-to-t from-ink to-transparent md:block" />
          </div>
          <div className="relative mx-auto flex max-w-7xl flex-col justify-center px-5 pb-14 md:min-h-[calc(100svh-4rem)] md:px-10 md:py-16">
            <div className="rise -mt-16 md:mt-0 md:max-w-[38rem]">
              <p className="eyebrow text-rimu">Māori master carver · <Reo>Te Teko</Reo></p>
              <h1 className="mt-6 text-[clamp(2.75rem,7.5vw,6.25rem)]"><Reo>Whakairo</Reo> from <Reo>Te&nbsp;Teko</Reo>.</h1>
              <p className="mt-8 max-w-md text-lg text-bone">
                Murray Waikato carves timber and pounamu in the knowledge of Ngāti Awa ki Rangitaiki, the work of more than twenty years.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/works/" className="bg-parchment px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-bone">View the work</Link>
                <Link href="/commissioning/" className="border border-stone bg-ink/40 px-7 py-3.5 text-sm text-parchment transition-colors hover:border-parchment">Start an enquiry</Link>
              </div>
            </div>
            <p className="mt-10 text-xs text-stone md:absolute md:bottom-8 md:right-10 md:mt-0 md:max-w-xs md:text-right">{meta["timber-spiral-form"].caption}</p>
          </div>
        </div>
        {/* Pepeha strip */}
        <div className="border-y border-ash bg-basalt">
          <ul className="mx-auto grid max-w-7xl grid-cols-2 gap-x-6 gap-y-6 px-5 py-8 md:grid-cols-4 md:px-10">
            {pepeha.map((p) => (
              <li key={p.label}>
                <p className="eyebrow text-stone">{p.en}</p>
                <p className="display mt-1 text-xl"><Reo>{p.reo}</Reo></p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ARTIST STATEMENT */}
      <section className="on-light bg-parchment text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
          <p className="eyebrow text-kokowai md:col-span-3">In Murray’s words</p>
          <div className="md:col-span-8">
            <blockquote className="display text-[clamp(1.75rem,3.6vw,3rem)] leading-[1.18]">
              “{inHisWords.grounded}”
            </blockquote>
            <p className="mt-10 max-w-2xl text-umber">
              <Reo>Ko Murray Waikato tēnei.</Reo> He is one of the many tauira who learnt alongside the master carvers of Mataatua, and he carries that knowledge in work made for marae, for whānau and for audiences well beyond them.
            </p>
            <Link href="/about/" className="mt-8 inline-block border-b border-kokowai pb-1 text-sm text-ink">About Murray</Link>
          </div>
        </div>
      </section>

      {/* FEATURED WORKS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-4xl md:text-6xl">Featured works</h2>
          <Link href="/works/" className="hidden border-b border-rimu pb-1 text-sm md:block">All works</Link>
        </div>
        <div className="mt-14 grid gap-x-6 gap-y-16 md:grid-cols-12">
          {featured.map((w, i) => (
            <Link key={w.slug} href={`/works/${w.slug}/`} className={`group block ${i === 0 ? "md:col-span-6" : i === 1 ? "md:col-span-6 md:mt-32" : "md:col-span-6 md:col-start-4"}`}>
              <div className="overflow-hidden"><Photo id={w.lead} fit position={w.leadPos} sizes="(min-width:768px) 45vw, 100vw" className="aspect-[4/5] transition-transform duration-700 group-hover:scale-[1.03]" /></div>
              <p className="eyebrow mt-5 text-rimu">No. {w.no} · {w.material}</p>
              <h3 className="mt-2 text-3xl">{w.title}</h3>
              <p className="mt-2 max-w-md text-stone">{w.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-basalt">
        <div className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
          <div className="grid gap-8 md:grid-cols-12">
            <h2 className="text-4xl md:col-span-5 md:text-6xl">Before the cut, the line.</h2>
            <p className="max-w-xl text-bone md:col-span-6 md:col-start-7">
              A slab in river water. A thin slice held to the daylight. A figure inked straight onto the stone. A form held up to a lamp to see where it is thin. Murray’s workshop photographs are part of the record.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-6">
            <figure>
              <Photo id="pounamu-slab-river" sizes="(min-width:768px) 23vw, 50vw" />
              <figcaption className="eyebrow mt-3 text-stone">Stone</figcaption>
            </figure>
            <figure className="mt-8 md:mt-16">
              <Clip id="slab-to-light" />
              <figcaption className="eyebrow mt-3 text-stone">Cut</figcaption>
            </figure>
            <figure>
              <Photo id="hei-tiki-layout-slab" sizes="(min-width:768px) 23vw, 50vw" />
              <figcaption className="eyebrow mt-3 text-stone">Line</figcaption>
            </figure>
            <figure className="mt-8 md:mt-16">
              <Photo id="toki-pendants-pair" sizes="(min-width:768px) 23vw, 50vw" />
              <figcaption className="eyebrow mt-3 text-stone">Finished</figcaption>
            </figure>
          </div>
          <Link href="/process/" className="mt-12 inline-block border-b border-rimu pb-1 text-sm">Follow the process</Link>
        </div>
      </section>

      {/* WHAKAPAPA */}
      <section className="on-light bg-parchment text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 md:grid-cols-12 md:px-10 md:py-36">
          <div className="md:col-span-5">
            <p className="eyebrow text-kokowai">Whakapapa</p>
            <h2 className="mt-4 text-4xl md:text-6xl">Where the work comes from.</h2>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xl leading-relaxed">Mountain, river, people, canoe, meeting house, dining hall, hapū, marae: Murray introduces himself in that order. His whakapapa has its own page, with his greeting and a verse in his own words.</p>
            <Link href="/whakapapa/" className="mt-8 inline-block border-b border-kokowai pb-1 text-sm">Read the whakapapa</Link>
          </div>
        </div>
      </section>

      {/* SELECTED PROJECTS */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10 md:py-36">
        <h2 className="text-4xl md:text-6xl">Bodies of work</h2>
        <ul className="mt-12 border-t border-ash">
          {works.map((w) => (
            <li key={w.slug} className="border-b border-ash">
              <Link href={`/works/${w.slug}/`} className="group flex items-center justify-between gap-6 py-7 md:py-9">
                <span className="flex items-baseline gap-5 md:gap-10">
                  <span className="eyebrow text-rimu">{w.no}</span>
                  <span className="display text-3xl transition-transform duration-500 group-hover:translate-x-2 md:text-5xl">{w.title}</span>
                </span>
                <span className="hidden text-sm text-stone md:block">{w.material}</span>
                <span aria-hidden="true" className="w-16 shrink-0 overflow-hidden md:w-24"><Photo id={w.lead} sizes="96px" alt="" className="aspect-[4/3] object-cover" /></span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* ENQUIRY CTA */}
      <section className="bg-kokowai">
        <div className="mx-auto max-w-5xl px-5 py-24 text-center md:py-32">
          <h2 className="text-4xl md:text-6xl">Marae, whānau, organisation or collaboration.</h2>
          <p className="mx-auto mt-6 max-w-xl text-parchment">Tell Murray who the work is for, where it will live and when you need it.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact/" className="bg-parchment px-8 py-4 text-sm font-medium text-ink">Make an enquiry</Link>
            <a href={site.phoneHref} className="border border-parchment px-8 py-4 text-sm text-parchment">{site.phone}</a>
          </div>
        </div>
      </section>
    </>
  );
}
