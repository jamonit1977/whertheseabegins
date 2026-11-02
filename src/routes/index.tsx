import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import { villas } from "@/lib/villas";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casas de la Luz — Luxury Villas in Chiclana & Roche" },
      { name: "description", content: "Five private chalets with gardens and pools in Chiclana and Roche, with dedicated personal service for families and couples." },
      { property: "og:title", content: "Casas de la Luz — Luxury Villas in Chiclana & Roche" },
      { property: "og:description", content: "Five private villas with gardens, pools and personal concierge on the Costa de la Luz." },
    ],
  }),
  component: Index,
});

const services = [
  ["Private concierge", "One dedicated host from first enquiry to farewell, reachable at any hour."],
  ["Private chef", "Andalusian menus with Atlantic seafood, served by the pool or under the stars."],
  ["Chauffeur & yacht", "Airport transfers from Jerez or Seville, and days at sea from Sancti Petri."],
  ["Family care", "Vetted nannies, prepared nurseries and children's activities on request."],
];

function Index() {
  return (
    <div>
      <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
        <img src={hero} alt="Villa with infinity pool overlooking the Atlantic at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="veil absolute inset-0" />
        <SiteHeader overlay />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 text-ink-foreground">
          <p className="eyebrow fade-up text-gold">Chiclana · Roche · Costa de la Luz</p>
          <h1 className="fade-up mt-5 max-w-4xl text-5xl leading-[1.02] md:text-8xl">
            Five private villas.<br /><em>One devoted host.</em>
          </h1>
          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <a href="#villas" className="eyebrow bg-ink-foreground px-8 py-4 text-ink transition hover:bg-gold">Discover the villas</a>
            <Link to="/contact" className="eyebrow border border-ink-foreground/60 px-8 py-4 transition hover:border-gold hover:text-gold">Enquire</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="eyebrow text-accent">The house collection</p>
        <p className="mt-6 font-display text-3xl leading-snug md:text-5xl">
          Each chalet stands within its own walled gardens, with a private swimming pool, absolute discretion and
          a team that knows your name before you arrive.
        </p>
      </section>

      <section id="villas" className="mx-auto max-w-7xl space-y-24 px-6 pb-32 md:space-y-36">
        {villas.map((v, i) => (
          <article key={v.slug} className={`grid items-center gap-8 md:grid-cols-12 md:gap-16`}>
            <Link to="/villas/$slug" params={{ slug: v.slug }} className={`group overflow-hidden md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <img src={v.image} alt={v.name} loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full object-cover transition duration-[1500ms] group-hover:scale-105" />
            </Link>
            <div className="md:col-span-5">
              <p className="eyebrow text-accent">0{i + 1} — {v.location}</p>
              <h2 className="mt-4 text-4xl md:text-6xl">{v.name}</h2>
              <p className="mt-3 font-display text-xl italic text-muted-foreground">{v.tagline}</p>
              <p className="mt-6 leading-relaxed text-muted-foreground">{v.description}</p>
              <p className="eyebrow mt-6">{v.bedrooms} bedrooms · {v.guests} guests · garden · pool</p>
              <Link to="/villas/$slug" params={{ slug: v.slug }} className="eyebrow mt-8 inline-block border-b border-foreground pb-1 hover:border-accent hover:text-accent">
                View the villa
              </Link>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <p className="eyebrow text-accent">Personal service</p>
          <h2 className="mt-4 max-w-2xl text-4xl md:text-6xl">Everything arranged, nothing asked twice.</h2>
          <div className="mt-16 grid gap-12 md:grid-cols-4">
            {services.map(([t, d]) => (
              <div key={t} className="border-t border-foreground/20 pt-6">
                <h3 className="text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
        <h2 className="text-4xl md:text-6xl">Your summer, privately composed.</h2>
        <Link to="/contact" className="eyebrow mt-10 inline-block bg-primary px-10 py-4 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">
          Request a stay
        </Link>
      </section>
      <SiteFooter />
    </div>
  );
}
