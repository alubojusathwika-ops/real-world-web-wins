import { createFileRoute } from "@tanstack/react-router";
import { menu } from "../data/menu";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu — Ember & Olive" },
      { name: "description", content: "Seasonal Mediterranean menu: wood-fired plates, hand-rolled pasta, and desserts, served in Old Town." },
      { property: "og:title", content: "Menu — Ember & Olive" },
      { property: "og:description", content: "Seasonal Mediterranean menu: wood-fired plates, hand-rolled pasta, and desserts." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MenuPage,
});

function tagStyles(tag?: string) {
  switch (tag) {
    case "signature":
      return "bg-primary/10 text-primary";
    case "vegetarian":
      return "bg-secondary/15 text-secondary";
    case "new":
      return "bg-foreground text-background";
    default:
      return "";
  }
}

function MenuPage() {
  return (
    <>
      <section className="border-b border-border/60 bg-muted/30">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center md:px-8 md:py-28">
          <p className="text-xs uppercase tracking-[0.3em] text-primary">Autumn menu</p>
          <h1 className="mt-4 text-5xl md:text-6xl">The menu</h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
            Cooked over olive wood, plated simply, and made to share. Everything
            changes with the season — expect a few new dishes each month.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 md:px-8 md:py-24">
        <div className="space-y-16">
          {menu.map((section) => (
            <div key={section.title}>
              <div className="flex items-baseline justify-between border-b border-border pb-4">
                <h2 className="text-3xl md:text-4xl">{section.title}</h2>
                <p className="hidden max-w-sm text-right text-sm text-muted-foreground md:block">
                  {section.blurb}
                </p>
              </div>
              <ul className="mt-8 divide-y divide-border/70">
                {section.items.map((item) => (
                  <li key={item.name} className="flex flex-col gap-1 py-6 md:flex-row md:items-baseline md:gap-8">
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-display text-xl">{item.name}</h3>
                        {item.tag && (
                          <span className={`rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${tagStyles(item.tag)}`}>
                            {item.tag}
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-muted-foreground">{item.description}</p>
                    </div>
                    <div className="text-lg text-primary md:min-w-16 md:text-right">
                      {item.price}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-16 text-center text-sm text-muted-foreground">
          Please let us know about allergies — most dishes can be adapted. A discretionary 12.5% service charge is added to the bill.
        </p>
      </section>
    </>
  );
}
