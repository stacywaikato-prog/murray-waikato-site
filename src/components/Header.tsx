"use client";
import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/content/site";

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link href="/" className="display text-xl tracking-tight text-parchment" onClick={() => setOpen(false)}>
          Murray Waikato
        </Link>
        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex gap-8 text-sm text-stone">
            {nav.map((n) => (
              <li key={n.href}><Link className="transition-colors hover:text-parchment" href={n.href}>{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1 lg:hidden">
        <Link href="/contact/" onClick={() => setOpen(false)} className="bg-kokowai px-4 py-2 text-sm font-medium text-parchment">Enquire</Link>
        <button type="button" aria-expanded={open} aria-controls="mobile-nav" onClick={() => setOpen(!open)}
          className="-mr-2 flex h-11 w-11 items-center justify-center lg:hidden">
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M3 8h18M3 16h18" />}
          </svg>
        </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-ash bg-ink lg:hidden">
          <ul className="px-5 pb-6 pt-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={() => setOpen(false)} className="display block border-b border-ash py-4 text-2xl text-parchment">{n.label}</Link>
              </li>
            ))}
            <li className="pt-5"><a href={site.phoneHref} className="text-parchment">Call Murray · {site.phone}</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
}
