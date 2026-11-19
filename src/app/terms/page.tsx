import Link from "next/link";
import { LegalPage, Section } from "@/components/LegalPage";
import { site } from "@/content/site";
import { pageMeta } from "@/lib-seo";

export const metadata = pageMeta(
  "Site Terms and Copyright",
  "Terms for using Murray Waikato’s website: copyright in the photographs and carvings, respect for the designs, and how commissions are agreed.",
  "/terms/", "Site Terms and Copyright — Murray Waikato", "The work shown here belongs to Murray Waikato.",
);

const a = "text-parchment underline decoration-rimu underline-offset-4";

export default function Terms() {
  return (
    <LegalPage eyebrow="Terms" title="Site terms and copyright." updated="19 November 2026"
      intro="By using this website you agree to these terms. They are short, and mostly about respecting the work.">
      <Section n="01" title="The work belongs to Murray">
        <p>All carvings, designs, photographs, videos and words on this site are by Murray Waikato and are protected by copyright, unless stated otherwise.</p>
        <p>Please do not copy, reproduce, sell, print or adapt them without Murray’s written permission. This includes using the images or designs to train or prompt AI tools, or to make copies of the carvings in any material.</p>
      </Section>
      <Section n="02" title="Respect for the designs">
        <p>The forms and patterns in this work carry kōrero and whakapapa. They are not generic decoration. Please treat them with respect, and ask before using them for any purpose.</p>
        <p>You are welcome to share a link to this site or to a page on it.</p>
      </Section>
      <Section n="03" title="Enquiries and commissions">
        <p>Sending an enquiry does not create an agreement. The details, price and timeframe of any commission are agreed directly with Murray, in writing, before work begins.</p>
        <p>Photographs show finished work as it was at the time. Natural materials vary, so every piece is one of a kind.</p>
      </Section>
      <Section n="04" title="Accuracy and links">
        <p>Care is taken to keep this site accurate, but it may change without notice. Any links to other websites are provided for convenience; Murray is not responsible for their content.</p>
      </Section>
      <Section n="05" title="Privacy and law">
        <p>How your details are handled is set out in the <Link className={a} href="/privacy/">privacy statement</Link>. These terms are governed by the laws of Aotearoa New Zealand.</p>
        <p>Questions: <a className={a} href={site.phoneHref}>{site.phone}</a> or <a className={a} href={`mailto:${site.email}`}>{site.email}</a>.</p>
      </Section>
    </LegalPage>
  );
}
