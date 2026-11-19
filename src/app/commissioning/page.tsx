import Link from "next/link";
import { Reo } from "@/components/Reo";
import { Photo } from "@/components/Photo";
import { commissionAreas, site } from "@/content/site";
import { pageMeta } from "@/lib-seo";

export const metadata = pageMeta(
  "Commissioning — Marae, Wharenui and Cultural Carving",
  "Commission Murray Waikato for marae and wharenui carving, cultural commissions, local and international projects, and collaborations. Enquire directly.",
  "/commissioning/", "Commission Murray Waikato", "Marae and wharenui carving, cultural commissions, projects and collaborations. Enquire directly with Murray.",
);

export default function Commissioning() {
  return (
    <>
      <header className="mx-auto max-w-7xl px-5 pb-16 pt-20 md:px-10 md:pt-32">
        <p className="eyebrow text-rimu">Commissioning</p>
        <h1 className="mt-5 text-[clamp(2.75rem,7vw,6rem)]">Commission a piece.</h1>
        <p className="mt-6 max-w-2xl text-lg text-bone">Murray takes enquiries directly. Every commission starts with a conversation about who the work is for and where it will stand.</p>
      </header>
      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 md:grid-cols-12 md:px-10">
        <ul className="divide-y divide-ash border-y border-ash md:col-span-7">
          {commissionAreas.map((c, i) => (
            <li key={c.title} className="flex items-baseline gap-6 py-7">
              <span className="eyebrow text-rimu">0{i + 1}</span>
              <span><span className="display block text-3xl">{c.title}</span>{c.reo && <span className="mt-1 block text-stone"><Reo>{c.reo}</Reo></span>}</span>
            </li>
          ))}
        </ul>
        <div className="md:col-span-4 md:col-start-9"><Photo id="pierced-panel" sizes="(min-width:768px) 30vw, 100vw" /><p className="mt-3 text-xs text-stone">Pierced timber panel.</p></div>
      </section>
      <section className="on-light bg-parchment text-ink">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <h2 className="text-4xl md:col-span-5 md:text-5xl">What to tell Murray.</h2>
          <ol className="space-y-6 md:col-span-6 md:col-start-7">
            {["Who the work is for: a marae, a whānau, an organisation.", "Where it will live, and what it needs to fit.", "When you need it.", "Any kōrero, whakapapa or kaupapa the piece must carry."].map((t, i) => (
              <li key={i} className="flex gap-5"><span className="display text-2xl text-kokowai">{i + 1}</span><span className="pt-1 text-lg">{t}</span></li>
            ))}
            <li className="pt-4 text-umber">Pricing and timeframes are discussed directly with Murray.</li>
          </ol>
        </div>
      </section>
      <section className="mx-auto max-w-3xl px-5 py-24 text-center">
        <Link href="/contact/" className="inline-block bg-kokowai px-10 py-4 text-sm font-medium text-parchment">Make an enquiry</Link>
        <p className="mt-6 text-stone">or call <a className="text-parchment underline decoration-rimu underline-offset-4" href={site.phoneHref}>{site.phone}</a></p>
      </section>
    </>
  );
}
