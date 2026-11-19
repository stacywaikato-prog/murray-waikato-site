"use client";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Always start a new page at the top (mobile browsers sometimes keep the old scroll position). */
export function ScrollTop() {
  const pathname = usePathname();
  useEffect(() => {
    if (window.location.hash) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
  }, [pathname]);
  return null;
}
