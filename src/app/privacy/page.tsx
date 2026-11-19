import Link from "next/link";
import { LegalPage, Section } from "@/components/LegalPage";
import { site } from "@/content/site";
import { pageMeta } from "@/lib-seo";

export const metadata = pageMeta(
  "Privacy and Cookies",
  "How Murray Waikato’s website handles the details you send through the enquiry form, and why the site uses no cookies or tracking.",
  "/privacy/", "Privacy and Cookies — Murray Waikato", "What happens to your details when you contact Murray.",
);

const a = "text-parchment underline decoration-rimu underline-offset-4";

export default function Privacy() {
  return (
    <LegalPage eyebrow="Privacy" title="Privacy and cookies." updated="19 November 2026"
      intro="This site collects very little. If you send Murray an enquiry, this page explains what happens to your details. It follows the New Zealand Privacy Act 2020.">
      <Section n="01" title="What is collected">
        <p>Only what you choose to send through the <Link className={a} href="/contact/">enquiry form</Link>: your name, email address, phone number if you give it, the type of enquiry, and your message.</p>
        <p>If you phone or email Murray directly, he receives whatever you include in that call or email.</p>
      </Section>
      <Section n="02" title="Why it is collected">
        <p>Only to reply to your enquiry and, if you go ahead, to talk through and carry out the work you ask for. Your details are not sold, rented or used for marketing, and you will not be added to a mailing list.</p>
      </Section>
      <Section n="03" title="Where it is stored">
        <p>The website is hosted by Netlify, a company based in the United States. When you send the form, Netlify stores your enquiry and emails a copy to Murray’s inbox, which is also hosted overseas. These providers hold the information on Murray’s behalf, to run the site and deliver your message.</p>
        <p>Enquiries are kept only as long as they are needed to respond to you and to complete any work agreed, then deleted.</p>
      </Section>
      <Section n="04" title="Cookies and tracking">
        <p>This site does not set cookies, does not use analytics or advertising trackers, and does not load scripts from other companies. There is nothing to accept or turn off.</p>
        <p>Like any website host, Netlify keeps standard server records, such as IP addresses and the pages requested, to keep the site running and secure.</p>
      </Section>
      <Section n="05" title="Seeing or correcting your details">
        <p>You can ask to see the information held about you, ask for it to be corrected, or ask for it to be deleted. Contact Murray on <a className={a} href={site.phoneHref}>{site.phone}</a> or <a className={a} href={`mailto:${site.email}`}>{site.email}</a>.</p>
        <p>If you are not happy with how your information has been handled, you can contact the <a className={a} href="https://www.privacy.org.nz" rel="noopener">Office of the Privacy Commissioner</a>.</p>
      </Section>
    </LegalPage>
  );
}
