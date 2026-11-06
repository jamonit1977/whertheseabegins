import { createFileRoute, Link } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import hero from "@/assets/hero.jpg";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { eclipse2027 } from "@/lib/eclipse";
import { canonical } from "@/lib/seo";

const title = "Total solar eclipse, 2 August 2027 — Where the sea begins";
const summary =
  "On 2 August 2027 the Moon covers the Sun completely over the Cádiz coast. Watch it privately from Chiclana and Roche, with a personal host arranging everything.";

export const Route = createFileRoute("/eclipse")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: summary },
      { property: "og:title", content: title },
      { property: "og:description", content: summary },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonical("/eclipse"),
  }),
  component: EclipsePage,
});

const delay = (seconds: number) => ({ "--delay": `${seconds}s` }) as CSSProperties;

const facts = [
  ["Date", eclipse2027.dateLabel],
  ["Totality in Cádiz", `From about ${eclipse2027.cadizTotalityStart}`],
  ["Length of totality", eclipse2027.cadizTotalityLength],
];

const arrangements = [
  ["A private place to watch", "A quiet garden or terrace, or a spot along the coast chosen for its open horizon, so you are not part of a crowd."],
  ["Certified viewing glasses", "ISO 12312-2 eclipse glasses can be arranged for every guest, children included."],
  ["The morning, composed", "Breakfast before, a long lunch after, and a chef who works around the moment itself."],
  ["Chauffeur or boat", "A driver for the day, or a skippered boat out of Sancti Petri if you would rather watch from the water."],
];

function EclipsePage() {
  return (
    <div>
      <section className="relative h-[80svh] min-h-[560px] overflow-hidden">
        <img src={hero} alt="Terrace and infinity pool overlooking the Atlantic at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="veil absolute inset-0" />
        <SiteHeader overlay />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 text-ink-foreground">
          <p className="eyebrow fade-up text-gold" style={delay(0)}>{eclipse2027.dateLabel} · Costa de la Luz</p>
          <h1 className="fade-up mt-5 max-w-4xl text-5xl leading-[1.02] md:text-8xl" style={delay(0.25)}>
            The day the sun <em>goes dark.</em>
          </h1>
          <div className="fade-up mt-10 flex flex-wrap gap-4" style={delay(0.55)}>
            <Link to="/contact" className="eyebrow bg-ink-foreground px-8 py-4 text-ink transition hover:bg-gold">Enquire about eclipse week</Link>
            <a href="#plan" className="eyebrow border border-ink-foreground/60 px-8 py-4 transition hover:border-gold hover:text-gold">How we would arrange it</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="font-display text-3xl leading-snug md:text-5xl">
          On the morning of {eclipse2027.dateLabel} the Moon will cover the Sun completely above the Atlantic. The path of totality crosses almost
          the whole province of Cádiz, a short drive from Chiclana and Roche.
        </p>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24 md:pb-32" aria-label="Eclipse facts">
        <dl className="grid gap-10 md:grid-cols-3">
          {facts.map(([term, value]) => (
            <div key={term} className="border-t border-foreground/20 pt-6">
              <dt className="eyebrow text-accent">{term}</dt>
              <dd className="mt-4 font-display text-4xl md:text-5xl">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Times and length are for Cádiz city. They vary a little from place to place along the coast, and we confirm yours when you enquire.
        </p>
      </section>

      <section id="plan" className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="max-w-2xl text-4xl md:text-6xl">An eclipse morning, arranged for you.</h2>
          <div className="mt-16 grid gap-12 md:grid-cols-4">
            {arrangements.map(([t, d]) => (
              <div key={t} className="border-t border-foreground/20 pt-6">
                <h3 className="text-2xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:gap-20 md:py-32">
        <div>
          <h2 className="text-4xl md:text-5xl">Watch it safely.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Never look at the Sun without certified eclipse glasses. Only during the short phase of totality, when the Sun is completely covered, is it
            safe to look without them. We brief every guest before the morning begins.
          </p>
        </div>
        <div>
          <h2 className="text-4xl md:text-5xl">Plan early.</h2>
          <p className="mt-6 leading-relaxed text-muted-foreground">
            Early August is high season on the coast, and demand for this date is expected to be strong. Clear skies are never guaranteed, so we follow the
            short-range forecasts and can arrange a second viewing spot nearby. Availability is confirmed on enquiry; an enquiry is not a reservation.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24 text-center md:pb-32">
        <h2 className="text-4xl md:text-6xl">Make it the summer you remember.</h2>
        <Link to="/contact" className="eyebrow mt-10 inline-block bg-primary px-10 py-4 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">
          Request a stay
        </Link>
        <p className="mt-12 text-xs leading-relaxed text-muted-foreground">
          Eclipse details: <a href={eclipse2027.source.url} rel="noreferrer" className="underline underline-offset-4 hover:text-accent">{eclipse2027.source.name}</a>, Spain.
        </p>
      </section>
      <SiteFooter />
    </div>
  );
}
