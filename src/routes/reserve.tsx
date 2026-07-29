import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { toast } from "sonner";

export const Route = createFileRoute("/reserve")({
  head: () => ({
    meta: [
      { title: "Reserve a table — Ember & Olive" },
      { name: "description", content: "Reserve a table at Ember & Olive in Old Town. Book online in under a minute." },
      { property: "og:title", content: "Reserve a table — Ember & Olive" },
      { property: "og:description", content: "Book a table at Ember & Olive online in under a minute." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReservePage,
});

function ReservePage() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "");
    setSubmitting(true);
    setTimeout(() => {
      toast.success(`Thank you, ${name.split(" ")[0] || "guest"} — we'll be in touch to confirm shortly.`);
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 600);
  }

  const inputCls =
    "mt-1 block w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm text-foreground shadow-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30";

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8 md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Reservations</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Book a table</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          We hold tables up to 8 weeks in advance. For parties larger than 8, email
          us at <a href="mailto:hello@emberandolive.co" className="text-primary hover:underline">hello@emberandolive.co</a>.
        </p>
      </section>

      <section className="mx-auto max-w-2xl px-4 pb-24 md:px-8">
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-border/60 bg-card p-6 shadow-sm md:p-10"
        >
          <div className="grid gap-5">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block text-sm font-medium">
                Full name
                <input required name="name" type="text" autoComplete="name" className={inputCls} />
              </label>
              <label className="block text-sm font-medium">
                Phone
                <input required name="phone" type="tel" autoComplete="tel" className={inputCls} />
              </label>
            </div>

            <label className="block text-sm font-medium">
              Email
              <input required name="email" type="email" autoComplete="email" className={inputCls} />
            </label>

            <div className="grid gap-5 md:grid-cols-3">
              <label className="block text-sm font-medium">
                Date
                <input required name="date" type="date" className={inputCls} />
              </label>
              <label className="block text-sm font-medium">
                Time
                <select required name="time" defaultValue="" className={inputCls}>
                  <option value="" disabled>Select…</option>
                  {["12:00","12:30","13:00","13:30","18:00","18:30","19:00","19:30","20:00","20:30","21:00"].map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="block text-sm font-medium">
                Guests
                <select required name="guests" defaultValue="2" className={inputCls}>
                  {Array.from({ length: 8 }, (_, i) => i + 1).map((n) => (
                    <option key={n}>{n}</option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block text-sm font-medium">
              Notes (optional)
              <textarea name="notes" rows={3} className={inputCls} placeholder="Allergies, occasion, seating preference…" />
            </label>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90 disabled:opacity-60"
            >
              {submitting ? "Sending…" : "Request reservation"}
            </button>

            <p className="text-xs text-muted-foreground">
              We'll confirm your booking by email within a few hours. Cancellations are free up to 24 hours before.
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
