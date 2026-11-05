import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { areaCalendar } from "@/lib/area-calendar";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Season by season — Where the sea begins" },
      { name: "description", content: "A month-by-month guide to the Costa de la Luz: weather, festivals and what's going on around Chiclana and Roche." },
      { property: "og:title", content: "Season by season — Where the sea begins" },
      { property: "og:description", content: "What's going on around Chiclana and Roche, month by month." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CalendarPage,
});

function CalendarPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="eyebrow text-accent">Season by season</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">What's going on along the coast.</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          A month-by-month picture of Chiclana, Roche and the Costa de la Luz. Festival dates change each year — we'll confirm them when you enquire.
        </p>
        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {areaCalendar.map((m) => (
            <article key={m.month} className="border-t border-foreground/20 pt-6">
              <p className="eyebrow text-accent">{m.month}</p>
              <h2 className="mt-3 text-3xl">{m.feel}</h2>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {m.happening.map((h) => <li key={h}>— {h}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Link to="/contact" className="eyebrow inline-block bg-primary px-10 py-4 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">
            Plan your stay
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
