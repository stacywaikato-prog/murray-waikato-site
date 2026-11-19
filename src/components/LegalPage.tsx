import type { ReactNode } from "react";

/** Shared layout for the privacy and terms pages, in the site's own type and colour. */
export function LegalPage({ eyebrow, title, updated, intro, children }: {
  eyebrow: string; title: string; updated: string; intro: ReactNode; children: ReactNode;
}) {
  return (
    <article className="mx-auto max-w-7xl px-5 pb-28 pt-20 md:px-10 md:pt-32">
      <header className="grid gap-8 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-rimu">{eyebrow}</p>
          <h1 className="mt-5 text-[clamp(2.5rem,6vw,4.5rem)]">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg text-bone">{intro}</p>
          <p className="eyebrow mt-8 text-stone">Last updated {updated}</p>
        </div>
      </header>
      <div className="mt-16 grid gap-8 border-t border-ash pt-12 md:grid-cols-12">
        <div className="legal space-y-12 md:col-span-8 md:col-start-5">{children}</div>
      </div>
    </article>
  );
}

export function Section({ n, title, children }: { n: string; title: string; children: ReactNode }) {
  return (
    <section className="grid gap-3 md:grid-cols-[4rem_1fr]">
      <p className="eyebrow pt-2 text-rimu">{n}</p>
      <div>
        <h2 className="text-2xl md:text-3xl">{title}</h2>
        <div className="mt-4 space-y-4 text-bone">{children}</div>
      </div>
    </section>
  );
}
