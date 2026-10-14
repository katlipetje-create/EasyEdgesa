import { NextResponse } from "next/server";

/**
 * Site-visit form handler.
 * CONNECT THIS: by default it validates and, if FORM_WEBHOOK_URL is set, forwards the fields as JSON
 * (e.g. to Zapier/Make, a CRM, or your own email function). Photos are counted but not forwarded;
 * to receive them, send via an email provider (Resend, Postmark, SendGrid) as attachments.
 */
export async function POST(req: Request) {
  let data: FormData;
  try {
    data = await req.formData();
  } catch {
    return NextResponse.json({ error: "The form couldn't be read." }, { status: 400 });
  }

  if (data.get("website")) return NextResponse.json({ ok: true }); // honeypot

  const get = (k: string) => String(data.get(k) ?? "").trim();
  const payload = {
    name: get("name"),
    phone: get("phone"),
    email: get("email"),
    suburb: get("suburb"),
    service: get("service"),
    description: get("description"),
    contactMethod: get("contactMethod"),
    consent: get("consent") === "yes",
    photoCount: data.getAll("photos").filter((f) => f instanceof File && f.size > 0).length,
    submittedAt: new Date().toISOString(),
  };

  const missing = (["name", "phone", "email", "suburb", "service"] as const).filter((k) => !payload[k]);
  if (missing.length) return NextResponse.json({ error: `Please complete: ${missing.join(", ")}.` }, { status: 422 });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) return NextResponse.json({ error: "Check the email address." }, { status: 422 });
  if (!payload.consent) return NextResponse.json({ error: "Consent is required to process your request." }, { status: 422 });

  const hook = process.env.FORM_WEBHOOK_URL;
  if (hook) {
    const r = await fetch(hook, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
    if (!r.ok) return NextResponse.json({ error: "We couldn't send your request." }, { status: 502 });
  } else {
    console.info("[site-visit] FORM_WEBHOOK_URL not set. Submission:", payload);
  }
  return NextResponse.json({ ok: true });
}
