"use client";
import { useState } from "react";
import { site } from "@/content/site";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    setState("sending");
    try {
      // Netlify Forms: post to the static form file so it is captured at the CDN.
      const body = new URLSearchParams();
      body.append("form-name", "enquiry");
      f.forEach((v, k) => body.append(k, String(v)));
      const r = await fetch("/__forms.html", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: body.toString() });
      if (!r.ok) throw new Error(String(r.status));
      setState("sent");
    } catch {
      setState("error");
    }
  }
  const mailto = `mailto:${site.email}?subject=${encodeURIComponent("Enquiry for Murray")}`;
  const field = "mt-2 block w-full border border-stone/60 bg-transparent px-4 py-3 text-parchment placeholder:text-stone/70 focus:border-rimu";
  if (state === "sent") return <p role="status" className="display text-3xl">Thank you. Murray will be in touch.</p>;
  return (
    <form onSubmit={onSubmit} className="space-y-6" noValidate={false}>
      <div><label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" className={field} /></div>
      <div className="grid gap-6 sm:grid-cols-2">
        <div><label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" className={field} /></div>
        <div><label htmlFor="phone">Phone <span className="text-stone">(optional)</span></label><input id="phone" name="phone" type="tel" autoComplete="tel" className={field} /></div>
      </div>
      <div><label htmlFor="kind">This enquiry is for</label>
        <select id="kind" name="kind" className={field + " bg-ink"}>
          <option>Marae or wharenui carving</option><option>A cultural commission</option><option>A local or international project</option><option>A collaboration or partnership</option><option>Something else</option>
        </select></div>
      <div><label htmlFor="message">Tell Murray about the work</label><textarea id="message" name="message" rows={6} required className={field} placeholder="Who it’s for, where it will live, when you need it." /></div>
      <p className="hidden" aria-hidden="true"><label>Leave this empty <input type="text" name="bot-field" tabIndex={-1} autoComplete="off" /></label></p>
      <button type="submit" disabled={state === "sending"} className="min-h-12 bg-parchment px-10 text-sm font-medium text-ink disabled:opacity-60">{state === "sending" ? "Sending…" : "Send enquiry"}</button>
      <p className="text-sm text-stone">Your details are used only to reply to you. See the <a className="underline decoration-rimu underline-offset-4" href="/privacy/">privacy statement</a>.</p>
      {state === "error" && <p role="alert" className="text-rimu">That didn’t send. Please call Murray on {site.phone} or <a className="underline" href={mailto}>email him</a>.</p>}
    </form>
  );
}
