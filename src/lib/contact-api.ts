const CONTACT_API_URL = "https://tracker.exelogy.com/api/contact";

export type ContactPayload = {
  email: string;
  name?: string;
  phone?: string;
  company?: string;
  topic?: string;
  message?: string;
  form?: string;
  /** Honeypot — must stay empty. A filled value makes the API silently drop the message. */
  company_website?: string;
};

export type ContactResult =
  | { ok: true }
  | { ok: false; status: number; error?: string };

export async function submitContact(
  payload: ContactPayload,
): Promise<ContactResult> {
  try {
    const res = await fetch(CONTACT_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        product: "exelogy",
        page: window.location.href,
        to: "info@exelogy.com",
        ...payload,
      }),
    });
    if (res.ok) return { ok: true };
    let error: string | undefined;
    try {
      const data = await res.json();
      error = typeof data?.error === "string" ? data.error : undefined;
    } catch {
      // non-JSON error body — fall through with no message
    }
    return { ok: false, status: res.status, error };
  } catch {
    return { ok: false, status: 0 };
  }
}
