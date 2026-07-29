import { createFileRoute } from "@tanstack/react-router";
import hero from "../assets/hero-interior.jpg";
import pasta from "../assets/dish-pasta.jpg";
import branzino from "../assets/dish-branzino.jpg";
import lamb from "../assets/dish-lamb.jpg";
import chef from "../assets/chef.jpg";
import dining from "../assets/dining-room.jpg";
import wine from "../assets/wine.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Ember & Olive" },
      { name: "description", content: "Inside the dining room and kitchen at Ember & Olive — wood-fired plates, natural wines, and warm evenings." },
      { property: "og:title", content: "Gallery — Ember & Olive" },
      { property: "og:description", content: "Inside the dining room and kitchen at Ember & Olive." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

const shots = [
  { src: hero, alt: "Dining room at golden hour", span: "md:col-span-2 md:row-span-2" },
  { src: pasta, alt: "Saffron tagliolini with prawns", span: "" },
  { src: branzino, alt: "Whole grilled branzino", span: "" },
  { src: chef, alt: "Chef plating pasta", span: "md:col-span-2" },
  { src: lamb, alt: "Rack of lamb with pomegranate", span: "" },
  { src: wine, alt: "Red wine being poured", span: "" },
  { src: dining, alt: "Guests dining under pendant lights", span: "md:col-span-2" },
];

function GalleryPage() {
  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8 md:py-24">
        <p className="text-xs uppercase tracking-[0.3em] text-primary">Look inside</p>
        <h1 className="mt-4 text-5xl md:text-6xl">The gallery</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          A few moments from the room and the kitchen.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-24 md:px-8">
        <div className="grid auto-rows-[220px] grid-cols-2 gap-3 md:auto-rows-[260px] md:grid-cols-4 md:gap-4">
          {shots.map((s, i) => (
            <figure key={i} className={`overflow-hidden rounded-xl bg-muted ${s.span}`}>
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />
            </figure>
          ))}
        </div>
      </section>
    </>
  );
}
