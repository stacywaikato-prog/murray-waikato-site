import Link from "next/link";
import { nav, pepeha, site } from "@/content/site";
import { Reo } from "./Reo";

export function Footer() {
  return (
    <footer className="border-t border-ash bg-ink pb-24 pt-16 md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-3 md:px-10">
        <div>
          <p className="display text-2xl">Murray Waikato</p>
          <p className="eyebrow mt-2 text-stone">Contemporary artist · <Reo>Te Teko</Reo></p>
          <p className="mt-6 text-sm leading-relaxed text-stone">
            {pepeha.filter((p) => p.core).map((p, i, a) => (
              <span key={p.label}><Reo>Ko {p.reo} {p.label}</Reo>{i < a.length - 1 ? " · " : ""}</span>
            ))}
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-stone">
            {nav.map((n) => <li key={n.href}><Link prefetch={false} className="inline-block py-2 hover:text-parchment" href={n.href}>{n.label}</Link></li>)}
          </ul>
        </nav>
        <div className="text-sm text-stone">
          <p className="eyebrow mb-3">Enquiries</p>
          <p><a className="text-parchment underline decoration-rimu underline-offset-4" href={site.phoneHref}>{site.phone}</a></p>
          <p className="mt-1"><a className="text-parchment underline decoration-rimu underline-offset-4" href={`mailto:${site.email}`}>{site.email}</a></p>
          <p className="mt-8">© {new Date().getFullYear()} Murray Waikato. All work shown is by Murray Waikato.</p>
        </div>
      </div>
    </footer>
  );
}
