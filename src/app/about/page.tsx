import { Photo } from "@/components/Photo";
import { Reo } from "@/components/Reo";
import { inHisWords, commissionAreas } from "@/content/site";
import { pageMeta } from "@/lib-seo";
import Link from "next/link";

export const metadata = pageMeta(
  "About Murray Waikato — Carver of Ngāti Awa ki Rangitaiki",
  "Murray Waikato is a Māori carver from Te Teko, a descendant of Mataatua who has carried the carving knowledge of Ngāti Awa ki Rangitaiki for more than twenty years.",
  "/about/", "About Murray Waikato", "A carver from Te Teko, of Mataatua, Ngāti Awa ki Rangitaiki — more than twenty years of whakairo.",
);

export default function About() {
  return (
    <article>
      <header className="mx-auto max-w-7xl px-5 pb-16 pt-20 md:px-10 md:pt-32">
        <p className="eyebrow text-rimu">About the artist</p>
        <h1 className="mt-5 text-[clamp(2.75rem,7vw,6rem)]">Murray Waikato</h1>
        <p className="mt-4 max-w-2xl text-xl text-bone">Contemporary artist, <Reo>Te Teko</Reo>. <Reo>Ngāti Awa ki Rangitaiki.</Reo></p>
      </header>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 pb-28 md:grid-cols-12 md:px-10">
        <aside className="md:col-span-4">
          <div className="md:sticky md:top-28">
            <Photo id="workbench-axe" sizes="(min-width:768px) 30vw, 100vw" position="50% 40%" className="aspect-[4/5] object-cover" fit />
            <p className="mt-3 text-xs text-stone">The workbench: grinder, vice, chisels, shavings.</p>
            <p className="mt-8 border-t border-ash pt-6 text-sm leading-relaxed text-stone">
              <Reo>Ko Putauaki te maunga, ko Rangitaiki te awa, ko Ngāti Awa te iwi.</Reo>{" "}
              <Link href="/whakapapa/" className="text-parchment underline decoration-rimu underline-offset-4">Read his whakapapa</Link>
            </p>
          </div>
        </aside>

        <div className="space-y-8 text-lg leading-[1.8] text-bone md:col-span-7 md:col-start-6">
          <h2 className="display text-3xl text-parchment">Place</h2>
          <p>Murray Waikato comes from <Reo>Te Teko</Reo>, a small rural settlement town in the Bay of Plenty. He says some call it the centre of the universe. His mountain is Putauaki and his river the Rangitaiki. They are the first lines of how he introduces himself.</p>

          <h2 className="display pt-6 text-3xl text-parchment">Learning</h2>
          <p>He is <Reo>uri</Reo> of Mataatua, of Ngāti Awa and of Ngāi Tamaoki, and his marae is Ruaihona. For more than twenty years he has carried the carving knowledge of Ngāti Awa ki Rangitaiki. He names how he came to it plainly: as one of the many <Reo>tauira</Reo> who learnt alongside great master carvers of the Mataatua region.</p>
          <blockquote className="display border-l-2 border-rimu pl-6 text-2xl leading-snug text-parchment">“{inHisWords.learning}”</blockquote>
          <p>What he describes is not a course completed but a practice absorbed. The skills, in his words, were guided, embedded and grounded in everyday life.</p>

          <h2 className="display pt-6 text-3xl text-parchment">The work</h2>
          <p>The photographs gathered here show five materials and one habit. The materials are timber, stone, steel, feather and pāua shell. The habit is drawing first.</p>
          <p>In timber: a long panel with raised spirals and pierced rings; an interlocked double-headed form on its own plinth, surfaced in fine spiral relief; a pale blade with paired figures. At the bench, a haft is carved in herringbone while its next spirals wait in pencil, and a plank against the wall is marked in marker pen: black maire.</p>
          <p>In stone: pendants and crescents, bound in cord and boxed; a slab photographed in the shallows of a river before it is drawn on; tiki figures inked onto stone through film, with small crosses at the edges; a pierced form held to a lamp so the light shows where it is thin.</p>

          <p>Then the pieces made to be carried or stood upright: long-handled forms with feather tassels and pāua eyes, photographed in the gravel at the edge of the sea; and a run of translucent blue stone, held up against a light, with a tiki whose eyes are cog-shaped inlays.</p>

          <h2 className="display pt-6 text-3xl text-parchment">Purpose</h2>
          <p>Murray describes his work as <Reo>{inHisWords.summaryReo}</Reo> That is, artwork that joins inherited tradition to the modern world, for Indigenous people, and for the region, the nation and the world.</p>
          <p>He carves for marae and wharenui, for cultural commissions, for local and international projects, and for collaborations and corporate partnerships. In his words, the carving provides “sacred ancestral cultural treasures locally, internationally and world wide.”</p>

          <div className="mt-12 border-t border-ash pt-10">
            <p className="eyebrow text-stone">Commissions</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">{commissionAreas.map((c) => <li key={c.title} className="text-parchment">{c.title}</li>)}</ul>
            <Link href="/commissioning/" className="mt-8 inline-block border-b border-rimu pb-1 text-sm text-parchment">How to commission</Link>
          </div>
        </div>
      </div>
    </article>
  );
}
