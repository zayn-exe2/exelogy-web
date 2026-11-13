const SUBSCRIBE_API_URL = "https://tracker.exelogy.com/api/subscribe";

export type SubscribePayload = {
  email: string;
  list: string;
  name?: string;
  /** Honeypot — must stay empty. A filled value makes the API silently drop the sign-up. */
  company_website?: string;
};

export type SubscribeResult =
  | { ok: true; already?: boolean }
  | { ok: false; status: number; error?: string };

export async function subscribeNewsletter(
  payload: SubscribePayload,
): Promise<SubscribeResult> {
  try {
    const res = await fetch(SUBSCRIBE_API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        page: window.location.href,
        ...payload,
      }),
    });
    const data = await res.json().catch(() => null);
    if (res.ok && data?.ok) {
      return { ok: true, already: Boolean(data.already) };
    }
    return {
      ok: false,
      status: res.status,
      error: typeof data?.error === "string" ? data.error : undefined,
    };
  } catch {
    return { ok: false, status: 0 };
  }
}
