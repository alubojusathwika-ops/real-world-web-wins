import { createFileRoute, Link } from "@tanstack/react-router";
import { Star, Flame, Wine, Clock } from "lucide-react";
import heroImg from "../assets/hero-interior.jpg";
import pastaImg from "../assets/dish-pasta.jpg";
import branzinoImg from "../assets/dish-branzino.jpg";
import lambImg from "../assets/dish-lamb.jpg";
import wineImg from "../assets/wine.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ember & Olive — Modern Mediterranean in Old Town" },
      {
        name: "description",
        content:
          "Wood-fired Mediterranean cooking, hand-rolled pasta and natural wines in the heart of Old Town. Reserve a table at Ember & Olive.",
      },
      { property: "og:title", content: "Ember & Olive — Modern Mediterranean in Old Town" },
      { property: "og:description", content: "Wood-fired Mediterranean cooking, hand-rolled pasta and natural wines. Reserve a table at Ember & Olive." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { name: "Saffron tagliolini", img: pastaImg, price: "£19" },
  { name: "Whole grilled branzino", img: branzinoImg, price: "£28" },
  { name: "Rack of lamb", img: lambImg, price: "£32" },
];

const testimonials = [
  { quote: "The best branzino I've had outside Athens. The room glows.", author: "The Local Table", rating: 5 },
  { quote: "Unhurried, warm, and quietly ambitious cooking.", author: "Amelia R.", rating: 5 },
  { quote: "Our new neighbourhood favourite. That olive oil cake — dangerous.", author: "James & Kai", rating: 5 },
];

function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImg}
          alt="Warm dining room at Ember & Olive at golden hour"
          width={1600}
          height={1100}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" aria-hidden />
        <div className="relative mx-auto flex min-h-[85dvh] max-w-7xl flex-col justify-end px-4 py-20 md:px-8 md:py-28">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-primary-foreground/80">
            Modern Mediterranean · Est. 2018
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl leading-[1.05] text-white md:text-7xl">
            Cooked over fire.<br />
            <span className="italic text-primary">Served with time.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-white/85">
            A neighbourhood dining room in Old Town — wood-fired plates,
            hand-rolled pasta, low-intervention wines and slow evenings.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/reserve"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg transition hover:opacity-90"
            >
              Reserve a table
            </Link>
            <Link
              to="/menu"
              className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10"
            >
              View the menu
            </Link>
          </div>
        </div>
      </section>

      {/* Value strip */}
      <section className="border-b border-border/60 bg-background">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-10 md:grid-cols-4 md:px-8">
          {[
            { icon: Flame, label: "Wood-fired kitchen" },
            { icon: Wine, label: "Natural wine list" },
            { icon: Clock, label: "Open Tue – Sun" },
            { icon: Star, label: "4.9 · 380+ reviews" },
          ].map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3">
              <Icon className="h-5 w-5 text-primary" aria-hidden />
              <span className="text-sm text-foreground/80">{label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Signature dishes */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Signature dishes</p>
            <h2 className="mt-3 max-w-2xl text-4xl md:text-5xl">
              A short menu, changed with the season.
            </h2>
          </div>
          <Link to="/menu" className="hidden shrink-0 text-sm text-primary hover:underline md:inline">
            See the full menu →
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {highlights.map((h) => (
            <article key={h.name} className="group overflow-hidden rounded-2xl border border-border/60 bg-card">
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={h.img}
                  alt={h.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center justify-between p-5">
                <h3 className="font-display text-xl">{h.name}</h3>
                <span className="text-primary">{h.price}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Story split */}
      <section className="bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
          <img
            src={wineImg}
            alt="Red wine poured into a glass"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-2xl object-cover md:aspect-[3/4]"
          />
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary">Our kitchen</p>
            <h2 className="mt-3 text-4xl md:text-5xl">Fire, olive oil, and time.</h2>
            <p className="mt-5 text-lg text-muted-foreground">
              Everything begins at the hearth. We cook whole fish over olive wood,
              braise lamb for hours, and let dough rise overnight. Ingredients come
              from farms and boats we know by name.
            </p>
            <p className="mt-4 text-lg text-muted-foreground">
              The room is small on purpose — twelve tables, one open kitchen, and
              a bar that pours natural wines by the glass.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
            >
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-primary text-center">Guest notes</p>
        <h2 className="mt-3 text-center text-4xl md:text-5xl">Kind words from the room.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.author} className="rounded-2xl border border-border/60 bg-card p-8">
              <div className="flex gap-0.5 text-primary" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                ))}
              </div>
              <blockquote className="mt-4 font-display text-xl leading-snug">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-6 text-sm text-muted-foreground">— {t.author}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-4 py-16 md:flex-row md:items-center md:justify-between md:px-8 md:py-20">
          <div>
            <h2 className="text-4xl md:text-5xl">A table is waiting.</h2>
            <p className="mt-3 text-background/75">Reserve online in under a minute.</p>
          </div>
          <Link
            to="/reserve"
            className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            Reserve now
          </Link>
        </div>
      </section>
    </>
  );
}
