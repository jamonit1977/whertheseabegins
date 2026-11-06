import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteChrome";
import { areaGuide } from "@/lib/area-guide";
import { canonical } from "@/lib/seo";
import barrosa from "@/assets/area-la-barrosa.jpg";
import sancti from "@/assets/area-sancti-petri.jpg";
import chiclana from "@/assets/area-chiclana.jpg";
import roche from "@/assets/area-roche.jpg";
import conil from "@/assets/area-conil.jpg";
import jerez from "@/assets/area-jerez.jpg";

const photos: Record<string, string> = {
  "La Barrosa": barrosa,
  "Sancti Petri": sancti,
  Chiclana: chiclana,
  Roche: roche,
  "Conil de la Frontera": conil,
  "Cádiz & Jerez": jerez,
};

export const Route = createFileRoute("/area-guide")({
  head: () => ({
    meta: [
      { title: "Area guide — Where the sea begins" },
      { name: "description", content: "Discover La Barrosa, Sancti Petri, Chiclana, Roche, Conil, Cádiz and Jerez — the best of the Costa de la Luz." },
      { property: "og:title", content: "Area guide — Where the sea begins" },
      { property: "og:description", content: "Beaches, villages, food and day trips on the Costa de la Luz." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonical("/area-guide"),
  }),
  component: AreaGuidePage,
});

function AreaGuidePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-6 py-20 md:py-28">
        <p className="eyebrow text-accent">Area guide</p>
        <h1 className="mt-4 max-w-3xl text-5xl md:text-7xl">The coast, the towns, the table.</h1>
        <p className="mt-6 max-w-2xl leading-relaxed text-muted-foreground">
          Where to swim, eat and wander around Chiclana and Roche. Our concierge can book any of it for you.
        </p>
        <div className="mt-16 grid gap-x-12 gap-y-16 md:grid-cols-2">
          {areaGuide.map((a) => (
            <article key={a.place} className="border-t border-foreground/20 pt-6">
              <img src={photos[a.place]} alt={a.place} loading="lazy" width={1280} height={864} className="mb-6 aspect-[3/2] w-full object-cover" />
              <p className="eyebrow text-accent">{a.tagline}</p>
              <h2 className="mt-3 text-4xl">{a.place}</h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{a.text}</p>
              <ul className="mt-4 space-y-1 text-sm">
                {a.highlights.map((h) => <li key={h}>— {h}</li>)}
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
