import { company } from "@/src/data/company";

// Every WhatsApp button on the site goes to the GHL-connected number with a
// prefilled message. The "Ref:" code lets GoHighLevel spot website leads and
// tag them "Source - DHESU Website", so keep the codes exactly as they are.
export const WHATSAPP_MESSAGES = {
  general:
    "Hi DHESU Travel, I visited dhesu.com and would like more information. Ref: DHESU-WEB-GENERAL",
  tours: "Hi DHESU Travel, I'm interested in your tours. Ref: DHESU-WEB-TOURS",
} as const;

export type WhatsAppEnquiry = keyof typeof WHATSAPP_MESSAGES;

export const whatsappNumber = company.whatsapp[0].number;
export const whatsappDisplay = company.whatsapp[0].display;

/** The prefilled message, with optional extra lines (package name, form details) after it. */
export function whatsappText(kind: WhatsAppEnquiry = "general", extra?: string): string {
  const base = WHATSAPP_MESSAGES[kind];
  return extra ? `${base}\n\n${extra}` : base;
}

/** wa.me link with the prefilled message for this kind of enquiry. */
export function whatsappHref(kind: WhatsAppEnquiry = "general", extra?: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappText(kind, extra))}`;
}

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/**
 * Sends a `whatsapp_click` event to GTM's dataLayer (GTM forwards it to GA4).
 * Link clicks are picked up automatically by ContactClickTracker; call this
 * directly only for buttons that open WhatsApp with window.open.
 */
export function trackWhatsAppClick(href: string, label = "") {
  if (typeof window === "undefined") return;
  const text = (() => {
    try {
      return new URL(href).searchParams.get("text") ?? "";
    } catch {
      return "";
    }
  })();
  const ref = text.match(/Ref:\s*(DHESU-WEB-[A-Z]+)/)?.[1] ?? "none";
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "whatsapp_click",
    whatsapp_ref: ref,
    link_url: href.split("?")[0],
    link_text: label.trim().slice(0, 100),
    page_path: window.location.pathname,
  });
}

/** Sends an `email_click` event to GTM's dataLayer for mailto links. */
export function trackEmailClick(href: string) {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "email_click",
    email_address: href.replace(/^mailto:/, "").split("?")[0],
    page_path: window.location.pathname,
  });
}
