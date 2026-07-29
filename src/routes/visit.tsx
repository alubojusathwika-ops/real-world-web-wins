import { createFileRoute, Link } from "@tanstack/react-router";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit — Ember & Olive · Old Town" },
      { name: "description", content: "Find Ember & Olive at 42 Harbour Lane, Old Town. Opening hours, phone, and directions." },
      { property: "og:title", content: "Visit — Ember & Olive · Old Town" },
      { property: "og:description", content: "Find Ember & Olive at 42 Harbour Lane, Old Town. Opening hours, phone, and directions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "Ember & Olive",
          image: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
          servesCuisine: "Mediterranean",
          priceRange: "££",
          address: {
            "@type": "PostalAddress",
            streetAddress: "42 Harbour Lane",
            addressLocality: "Old Town",
            postalCode: "BR1 4XA",
            addressCountry: "GB",
          },
          telephone: "+44 1234 567 890",
          openingHours: [
            "Tu-Th 17:00-22:00",
            "Fr-Sa 12:00-23:00",
            "Su 12:00-21:00",
          ],
        }),
      },
    ],
  }),
  component: VisitPage,
});

const hours = [
  { day: "Monday", value: "Closed" },
  { day: "Tuesday – Thursday", value: "5:00pm – 10:00pm" },
  { day: "Friday – Saturday", value: "12:00pm – 11:00pm" },
  { day: "Sunday", value: "12:00pm – 9:00pm" },
];

function VisitPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8 md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Come see us</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Visit the restaurant</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          On a quiet corner of Old Town. Walk-ins welcome at the bar; reservations recommended for the dining room.
        </p>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-4 pb-16 md:grid-cols-2 md:px-8">
        <div className="space-y-8">
          <div>
            <div className="flex items-center gap-2 text-primary">
              <MapPin className="h-4 w-4" aria-hidden />
              <h2 className="text-sm font-semibold uppercase tracking-widest">Address</h2>
            </div>
            <p className="mt-3 text-2xl">42 Harbour Lane<br />Old Town, BR1 4XA</p>
            <a
              href="https://maps.google.com?q=42+Harbour+Lane+Old+Town"
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-flex text-sm text-primary hover:underline"
            >
              Get directions →
            </a>
          </div>

          <div>
            <div className="flex items-center gap-2 text-primary">
              <Clock className="h-4 w-4" aria-hidden />
              <h2 className="text-sm font-semibold uppercase tracking-widest">Hours</h2>
            </div>
            <dl className="mt-3 divide-y divide-border/70 rounded-xl border border-border/60">
              {hours.map((h) => (
                <div key={h.day} className="flex items-center justify-between px-4 py-3">
                  <dt className="text-sm text-muted-foreground">{h.day}</dt>
                  <dd className="text-sm font-medium">{h.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Phone className="h-4 w-4" aria-hidden />
                <h2 className="text-sm font-semibold uppercase tracking-widest">Phone</h2>
              </div>
              <a href="tel:+441234567890" className="mt-2 block text-lg hover:text-primary">
                +44 1234 567 890
              </a>
            </div>
            <div>
              <div className="flex items-center gap-2 text-primary">
                <Mail className="h-4 w-4" aria-hidden />
                <h2 className="text-sm font-semibold uppercase tracking-widest">Email</h2>
              </div>
              <a href="mailto:hello@emberandolive.co" className="mt-2 block text-lg hover:text-primary">
                hello@emberandolive.co
              </a>
            </div>
          </div>

          <Link
            to="/reserve"
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Reserve a table
          </Link>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border/60">
          <iframe
            title="Ember & Olive on the map"
            src="https://maps.google.com/maps?q=old%20town%20harbour&t=&z=14&ie=UTF8&iwloc=&output=embed"
            className="h-full min-h-[420px] w-full"
            loading="lazy"
          />
        </div>
      </section>
    </>
  );
}
