import { site } from "@/content/site";
/** Persistent thumb-reach enquiry bar on small screens. */
export function MobileEnquiry() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-30 flex border-t border-ash bg-ink/95 backdrop-blur md:hidden">
      <a href={site.phoneHref} className="flex-1 py-4 text-center text-sm text-parchment">Call Murray</a>
      <a href="/contact/" className="flex-1 bg-kokowai py-4 text-center text-sm font-medium text-parchment">Enquire</a>
    </div>
  );
}
