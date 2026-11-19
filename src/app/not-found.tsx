import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-40 text-center">
      <h1 className="display text-5xl">Page not found</h1>
      <p className="mt-6 text-stone">This page doesn’t exist. Try the <Link className="underline decoration-rimu underline-offset-4" href="/works/">works</Link> or <Link className="underline decoration-rimu underline-offset-4" href="/contact/">get in touch</Link>.</p>
    </section>
  );
}
