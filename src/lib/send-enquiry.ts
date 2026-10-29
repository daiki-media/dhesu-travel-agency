import { previousPath } from "@/src/lib/page-history";

export type Enquiry = {
  form: "contact" | "package";
  name: string;
  email: string;
  phone: string;
  topic?: string;
  details: Record<string, string>;
  website?: string;
  /** Milliseconds since the form appeared; the server drops anything under 2.5s. */
  elapsed: number;
};

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

/**
 * Where the enquiry came from: the page the form is on, and the dhesu.com page
 * the visitor arrived from (e.g. a guide that linked to the contact form).
 * Query strings and hashes are dropped so no personal data rides along.
 */
function pageContext(): { page: string; from: string } {
  const page = `${window.location.origin}${window.location.pathname}`;
  const previous = previousPath();
  const from = previous ? `${window.location.origin}${previous}` : "";
  return { page, from };
}

/**
 * Sends `enquiry_submitted` to GTM's dataLayer. Fired only after the server
 * confirms the enquiry was mailed, so GA4 can count real enquiries separately
 * from WhatsApp and email clicks (`whatsapp_click`, `email_click`).
 */
function trackEnquirySubmitted(enquiry: Enquiry, context: { page: string; from: string }) {
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({
    event: "enquiry_submitted",
    enquiry_form: enquiry.form,
    enquiry_topic: (enquiry.topic ?? "").slice(0, 100),
    page_path: window.location.pathname,
    enquiry_from: context.from ? new URL(context.from).pathname : "",
  });
}

// Served by public/api/send-enquiry.php on the Apache host. Relative, so the
// POST stays on https://dhesu.com and never hits the http/www 301.
export async function sendEnquiry(enquiry: Enquiry): Promise<{ ok: boolean; error?: string }> {
  const context = pageContext();
  try {
    const res = await fetch("/api/send-enquiry.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...enquiry, ...context }),
    });
    const data = await res.json().catch(() => null);
    if (res.ok && data?.ok) {
      trackEnquirySubmitted(enquiry, context);
      return { ok: true };
    }
    return { ok: false, error: data?.error };
  } catch {
    return { ok: false };
  }
}
