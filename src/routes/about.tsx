import { createFileRoute } from "@tanstack/react-router";
import chefImg from "../assets/chef.jpg";
import diningImg from "../assets/dining-room.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Ember & Olive" },
      { name: "description", content: "The story behind Ember & Olive: a small dining room in Old Town cooking wood-fired Mediterranean food since 2018." },
      { property: "og:title", content: "About — Ember & Olive" },
      { property: "og:description", content: "A small dining room in Old Town cooking wood-fired Mediterranean food since 2018." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8 md:py-28">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Our story</p>
        <h1 className="mt-4 text-5xl md:text-6xl">Two friends, one fire.</h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
          Ember & Olive opened in 2018 with a simple idea: cook the food we grew up
          eating around the Mediterranean, using the best ingredients we can find
          here at home, and serve it in a room where you'd want to stay for hours.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 md:px-8">
        <img
          src={diningImg}
          alt="Guests dining under warm pendant lights at Ember & Olive"
          loading="lazy"
          className="aspect-[16/9] w-full rounded-2xl object-cover"
        />
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-2 md:items-center md:px-8 md:py-24">
        <img
          src={chefImg}
          alt="Chef plating pasta in the open kitchen"
          loading="lazy"
          className="aspect-[4/3] w-full rounded-2xl object-cover"
        />
        <div>
          <h2 className="text-4xl md:text-5xl">Meet the chef</h2>
          <p className="mt-5 text-lg text-muted-foreground">
            Head chef Marco Bellini trained in Bologna and Athens before opening
            Ember & Olive with his partner Sofia. His cooking is quiet, honest, and
            deeply seasonal — a few ingredients, treated with care.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            The team is small and close-knit. Many of them have been here since
            year one, and it shows on the plate.
          </p>
        </div>
      </section>

      <section className="border-y border-border/60 bg-muted/30">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:grid-cols-3 md:px-8">
          {[
            { n: "7", l: "Years cooking" },
            { n: "12", l: "Tables in the room" },
            { n: "38", l: "Producers we work with" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-6xl text-primary">{s.n}</div>
              <div className="mt-2 text-sm uppercase tracking-widest text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-20 md:px-8 md:py-28">
        <h2 className="text-4xl md:text-5xl">What we believe</h2>
        <div className="mt-8 space-y-6 text-lg text-muted-foreground">
          <p><span className="text-foreground font-medium">Ingredients first.</span> A good tomato in July needs almost nothing. We try to remember that.</p>
          <p><span className="text-foreground font-medium">Fire is a technique.</span> Wood-fired heat gives food a character no oven can match.</p>
          <p><span className="text-foreground font-medium">Hospitality is the point.</span> The food matters. The evening matters more.</p>
        </div>
      </section>
    </>
  );
}
