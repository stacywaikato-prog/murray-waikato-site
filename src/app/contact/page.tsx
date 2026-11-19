import { ContactForm } from "@/components/ContactForm";
import { site, signoff } from "@/content/site";
import { Reo } from "@/components/Reo";
import { pageMeta } from "@/lib-seo";

export const metadata = pageMeta(
  "Contact Murray Waikato — Enquiries and Collaborations",
  "Contact Māori carver Murray Waikato of Te Teko by phone 020 424 1602 or email for marae carving, commissions and collaborations.",
  "/contact/", "Contact Murray Waikato", "Enquiries and collaborations: 020 424 1602 · matewaikato@yahoo.com",
);

export default function Contact() {
  return (
    <div className="mx-auto grid max-w-7xl gap-16 px-5 pb-28 pt-20 md:grid-cols-12 md:px-10 md:pt-32">
      <div className="md:col-span-5">
        <p className="eyebrow text-rimu">Contact</p>
        <h1 className="mt-5 text-[clamp(2.75rem,6vw,5rem)]">Kia ora.</h1>
        <p className="mt-6 text-lg text-bone">For further information or enquiries, contact Murray directly.</p>
        <dl className="mt-10 space-y-6">
          <div><dt className="eyebrow text-stone">Phone</dt><dd className="display mt-1 text-3xl"><a href={site.phoneHref}>{site.phone}</a></dd></div>
          <div><dt className="eyebrow text-stone">Email</dt><dd className="display mt-1 break-all text-2xl md:text-3xl"><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
          <div><dt className="eyebrow text-stone">Based in</dt><dd className="mt-1 text-lg"><span lang="mi">Te Teko</span></dd></div>
        </dl>
        <p className="display mt-12 text-2xl"><Reo>{signoff}</Reo>,<br />Murray Waikato</p>
      </div>
      <div className="md:col-span-6 md:col-start-7"><ContactForm /></div>
    </div>
  );
}
