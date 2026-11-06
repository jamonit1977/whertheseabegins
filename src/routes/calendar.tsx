import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { areaCalendar } from "@/lib/area-calendar";
import { canonical } from "@/lib/seo";
import winter from "@/assets/season-winter.jpg";
import spring from "@/assets/season-spring.jpg";
import summer from "@/assets/lifestyle-beach.jpg";
import autumn from "@/assets/season-autumn.jpg";

const seasons = [
  { name: "Winter", photo: winter, months: ["January", "February", "December"] },
  { name: "Spring", photo: spring, months: ["March", "April", "May"] },
  { name: "Summer", photo: summer, months: ["June", "July", "August"] },
  { name: "Autumn", photo: autumn, months: ["September", "October", "November"] },
];

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
    links: canonical("/calendar"),
  }),
  component: CalendarPage,
});

const currentSeasonName = () => {
  const month = new Date().getMonth();
  if (month === 11 || month <= 1) return "Winter";
  if (month <= 4) return "Spring";
  if (month <= 7) return "Summer";
  return "Autumn";
};

function CalendarPage() {
  const current = currentSeasonName();
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="eyebrow text-accent">Season by season</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">What's going on along the coast.</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          A month-by-month picture of Chiclana, Roche and the Costa de la Luz. Festival dates change each year — we'll confirm them when you enquire.
        </p>
        <nav aria-label="Jump to a season" className="mt-10 flex flex-wrap gap-3">
          {seasons.map((s) => (
            <a
              key={s.name}
              href={`#${s.name.toLowerCase()}`}
              className={`eyebrow border px-5 py-3 transition hover:border-gold hover:text-accent ${s.name === current ? "border-gold bg-secondary" : "border-foreground/20"}`}
            >
              {s.name}
              {s.name === current && <span className="ml-2 normal-case tracking-normal text-muted-foreground">· now</span>}
            </a>
          ))}
        </nav>
        <div className="mt-16 space-y-20">
          {seasons.map((s) => (
            <div key={s.name} id={s.name.toLowerCase()}>
              <div className="relative overflow-hidden">
                <img src={s.photo} alt={`${s.name} on the Costa de la Luz`} loading="lazy" width={1600} height={800} className="aspect-[5/2] w-full object-cover" />
                <h2 className="absolute bottom-0 left-0 bg-background px-6 py-3 text-3xl md:text-4xl">{s.name}</h2>
              </div>
              <div className="mt-10 grid gap-x-10 gap-y-10 md:grid-cols-3">
                {areaCalendar.filter((m) => s.months.includes(m.month)).map((m) => (
                  <article key={m.month} className="border-t border-foreground/20 pt-6">
                    <p className="eyebrow text-accent">{m.month}</p>
                    <h3 className="mt-3 text-2xl">{m.feel}</h3>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                      {m.happening.map((h) => <li key={h}>— {h}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
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
