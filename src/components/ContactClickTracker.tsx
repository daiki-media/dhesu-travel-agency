"use client";

import { useEffect } from "react";
import { trackEmailClick, trackWhatsAppClick } from "@/src/lib/whatsapp";

/**
 * One listener for the whole site: any click on a wa.me or mailto: link is
 * pushed to the GTM dataLayer, so new buttons are tracked without extra code.
 */
export default function ContactClickTracker() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.href;
      if (/^https:\/\/(wa\.me|api\.whatsapp\.com)\//.test(href)) {
        trackWhatsAppClick(href, link.textContent || link.getAttribute("aria-label") || "");
      } else if (href.startsWith("mailto:")) {
        trackEmailClick(href);
      }
    }
    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  return null;
}
