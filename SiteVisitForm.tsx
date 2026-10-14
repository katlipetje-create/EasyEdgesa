"use client";
import { useState } from "react";
import Link from "next/link";
import { Check, WhatsApp } from "@/components/ui/Icons";
import { whatsappHref } from "@/data/site";

const serviceOptions = ["New Pool", "Pool Renovation", "Pool Resurfacing", "Pool Paving / Coping", "Pool Repair", "Outdoor Living Area", "Other"];
// Vercel limits request bodies to ~4.5 MB. Raise this only if you host elsewhere or upload direct to storage.
const MAX_MB = 4;

type Status = "idle" | "sending" | "sent" | "error";

const field = "w-full rounded-xl border border-line bg-paper px-4 text-[16px] text-ink placeholder:text-ink-soft/70 transition-colors focus:border-pool focus:bg-white focus:outline-none focus:ring-2 focus:ring-pool/15";
const label = "mb-2 block text-[13px] font-semibold text-ink-2";

export function SiteVisitForm({ defaultService }: { defaultService?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [files, setFiles] = useState<string[]>([]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const form = e.currentTarget;
    const data = new FormData(form);

    const photos = data.getAll("photos").filter((f): f is File => f instanceof File && f.size > 0);
    const total = photos.reduce((s, f) => s + f.size, 0);
    if (total > MAX_MB * 1024 * 1024) {
      setError(`Photos add up to more than ${MAX_MB} MB. Remove a few, or send them on WhatsApp instead.`);
      return;
    }
    if (!data.get("consent")) {
      setError("Tick the consent box so we can use your details to contact you.");
      return;
    }
    setStatus("sending");
    try {
      const res = await fetch("/api/site-visit", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "We couldn't send your request.");
      setStatus("sent");
      form.reset();
      setFiles([]);
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? `${err.message} Try again, or contact us on WhatsApp.` : "Something went wrong. Try again, or contact us on WhatsApp.");
    }
  }

  if (status === "sent") {
    return (
      <div className="card p-8 sm:p-12" role="status">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-pool text-white"><Check className="h-6 w-6" /></span>
        <h3 className="mt-6 text-2xl font-bold">Site visit requested.</h3>
        <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ink-muted">
          We&apos;ve received your details and will be in touch using your preferred contact method to confirm a time.
        </p>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex min-h-[48px] items-center gap-2 rounded-full border border-line px-6 text-sm font-semibold hover:border-ink">
          <WhatsApp className="h-5 w-5 text-[#1DA851]" /> Send more photos on WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="card p-6 sm:p-10" encType="multipart/form-data">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={label}>Name & Surname*</label>
          <input id="name" name="name" required autoComplete="name" className={`${field} h-[52px]`} />
        </div>
        <div>
          <label htmlFor="phone" className={label}>Contact Number*</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" inputMode="tel" pattern="[0-9 +()-]{9,}" className={`${field} h-[52px]`} />
        </div>
        <div>
          <label htmlFor="email" className={label}>Email Address*</label>
          <input id="email" name="email" type="email" required autoComplete="email" className={`${field} h-[52px]`} />
        </div>
        <div>
          <label htmlFor="suburb" className={label}>Suburb / City*</label>
          <input id="suburb" name="suburb" required autoComplete="address-level2" placeholder="e.g. Fourways" className={`${field} h-[52px]`} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="service" className={label}>Service Required*</label>
          <div className="relative">
            <select id="service" name="service" required defaultValue={defaultService ?? ""} className={`${field} h-[52px] appearance-none pr-12`}>
              <option value="" disabled>Select a service</option>
              {serviceOptions.map((o) => <option key={o}>{o}</option>)}
            </select>
            <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><path d="m6 9 6 6 6-6" /></svg>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="description" className={label}>Project Description</label>
          <textarea id="description" name="description" rows={4} placeholder="What would you like to change? Rough size, current condition, timing…" className={`${field} py-3`} />
        </div>
        <div className="sm:col-span-2">
          <span className={label}>Photo Upload</span>
          <label htmlFor="photos" className="flex min-h-[96px] cursor-pointer flex-col items-center justify-center gap-1 rounded-xl border border-dashed border-stone-dark/50 bg-paper px-4 py-5 text-center transition-colors hover:border-pool hover:bg-pool-soft/50">
            <span className="text-[15px] font-semibold text-ink">Upload photos of your current pool or outdoor area</span>
            <span className="text-[13px] text-ink-soft">{files.length ? files.join(", ") : `JPG or PNG, up to ${MAX_MB} MB in total`}</span>
          </label>
          <input id="photos" name="photos" type="file" accept="image/*" multiple className="sr-only"
            onChange={(e) => setFiles(Array.from(e.target.files ?? []).map((f) => f.name))} />
        </div>
        <fieldset className="sm:col-span-2">
          <legend className={label}>Preferred Contact Method</legend>
          <div className="flex flex-wrap gap-3">
            {["Phone", "WhatsApp", "Email"].map((m, i) => (
              <label key={m} className="relative">
                <input type="radio" name="contactMethod" value={m} defaultChecked={i === 1} className="peer sr-only" />
                <span className="inline-flex min-h-[46px] cursor-pointer items-center rounded-full border border-line px-5 text-sm font-semibold text-ink-muted transition-colors peer-checked:border-pool peer-checked:bg-pool peer-checked:text-white peer-focus-visible:ring-2 peer-focus-visible:ring-pool/40">
                  {m}
                </span>
              </label>
            ))}
          </div>
        </fieldset>
        {/* Honeypot for bots. Leave hidden. */}
        <div className="hidden" aria-hidden="true">
          <label>Company website<input name="website" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <label className="flex items-start gap-3 sm:col-span-2">
          <input type="checkbox" name="consent" value="yes" required className="mt-1 h-5 w-5 shrink-0 rounded border-line accent-pool" />
          <span className="text-[14px] leading-relaxed text-ink-muted">
            I consent to my personal information being used to respond to this enquiry, in line with the{" "}
            <Link href="/legal/popia-notice" className="font-semibold text-ink underline underline-offset-2">POPIA notice</Link> and{" "}
            <Link href="/legal/privacy-policy" className="font-semibold text-ink underline underline-offset-2">privacy policy</Link>.
          </span>
        </label>
      </div>

      {error && <p className="mt-6 rounded-xl bg-[#FBEDEA] px-4 py-3 text-sm font-medium text-[#8A2B1B]" role="alert">{error}</p>}

      <button type="submit" disabled={status === "sending"}
        className="mt-8 inline-flex min-h-[54px] w-full items-center justify-center rounded-full bg-pool px-8 text-[12px] font-bold uppercase tracking-[0.2em] text-white transition-colors hover:bg-pool-deep disabled:opacity-60 sm:w-auto">
        {status === "sending" ? "Sending request…" : "Request a Site Visit"}
      </button>
    </form>
  );
}
