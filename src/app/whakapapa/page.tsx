import { Reo } from "@/components/Reo";
import { Photo } from "@/components/Photo";
import { meta } from "@/content/images";
import { pepeha, verse, site, greeting, whakaritorito } from "@/content/site";
import { pageMeta } from "@/lib-seo";

export const metadata = pageMeta(
  "Whakapapa — Putauaki, Rangitaiki, Ngāti Awa, Mataatua",
  "Murray Waikato’s pepeha: Putauaki te maunga, Rangitaiki te awa, Ngāti Awa te iwi, Mataatua te waka, Ruaihona te wharetipuna, Mahanga i te Rangi te wharekai, Ngāi Tamaoki te hapū, Ruaihona te marae.",
  "/whakapapa/", "Whakapapa — Murray Waikato", "Putauaki the mountain, Rangitaiki the river, Ngāti Awa the people. Where Murray Waikato’s carving comes from.",
);

export default function Whakapapa() {
  return (
    <article>
      <header className="mx-auto max-w-7xl px-5 pb-16 pt-20 md:px-10 md:pt-32">
        <p className="eyebrow text-rimu">Whakapapa</p>
        <h1 className="mt-5 text-[clamp(2.75rem,7vw,6rem)]">Where I come from.</h1>
        <div lang="mi" className="display mt-10 space-y-1 text-2xl text-parchment md:text-4xl">
          {greeting.map((l) => <p key={l}>{l}</p>)}
        </div>
        <p className="mt-8 max-w-2xl text-lg text-bone">Murray introduces himself the way he was taught to: <Reo>maunga, awa, iwi, waka, wharetipuna, wharekai, hapū, marae</Reo>. Everything on this site begins there.</p>
      </header>

      <section className="on-light bg-parchment text-ink">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <ul className="md:col-span-7">
            {pepeha.map((p) => (
              <li key={p.label} className="border-b border-ink/15 py-5">
                <span className="display text-2xl md:text-4xl"><Reo>Ko <strong className="font-semibold">{p.reo}</strong> {p.label}</Reo></span>
              </li>
            ))}
          </ul>
          <div className="md:col-span-4 md:col-start-9">
            <p className="eyebrow text-kokowai">In Murray’s words</p>
            <p lang="mi" className="display mt-3 text-2xl leading-snug">{whakaritorito}</p>
          </div>
        </div>
      </section>

      <figure className="relative">
        <Photo id="putauaki-wide" fit sizes="100vw" position="30% 50%" className="aspect-[4/3] md:aspect-[21/9]" />
        <figcaption className="mx-auto max-w-7xl px-5 pt-3 text-xs text-stone md:px-10">{meta["putauaki-wide"].caption}</figcaption>
      </figure>

      {site.showVerse && (
        <section className="bg-basalt">
          <div className="mx-auto max-w-3xl px-5 py-24 text-center md:py-32">
            <p className="eyebrow text-stone">In Murray’s own words</p>
            <div lang="mi" className="display mt-10 space-y-1 text-xl leading-relaxed text-parchment md:text-2xl">
              {verse.map((l, i) => <p key={i} className={/^I poua mai au i hea|^I poua mai au I hea/.test(l) ? "pt-5" : ""}>{l}</p>)}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
