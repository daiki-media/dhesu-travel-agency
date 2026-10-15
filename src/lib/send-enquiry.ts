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

// Served by public/api/send-enquiry.php on the Apache host. Relative, so the
// POST stays on https://dhesu.com and never hits the http/www 301.
export async function sendEnquiry(enquiry: Enquiry): Promise<{ ok: boolean; error?: string }> {
  try {
    const res = await fetch("/api/send-enquiry.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(enquiry),
    });
    const data = await res.json().catch(() => null);
    if (res.ok && data?.ok) return { ok: true };
    return { ok: false, error: data?.error };
  } catch {
    return { ok: false };
  }
}
