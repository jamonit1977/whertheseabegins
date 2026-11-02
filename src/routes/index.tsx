import { createFileRoute, Link } from "@tanstack/react-router";
import hero from "@/assets/hero.jpg";
import beach from "@/assets/lifestyle-beach.jpg";
import dining from "@/assets/lifestyle-dining.jpg";
import sea from "@/assets/lifestyle-sea.jpg";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casas de la Luz — Private Holidays in Chiclana & Roche" },
      { name: "description", content: "Sun, sea and slow days on the Costa de la Luz, privately arranged for families and couples with a devoted personal host." },
      { property: "og:title", content: "Casas de la Luz — Private Holidays in Chiclana & Roche" },
      { property: "og:description", content: "The art of the Andalusian summer, privately arranged with a devoted personal host on the Costa de la Luz." },
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

const days = [
  {
    time: "Mornings",
    title: "Salt air and empty sands",
    text: "Wake late to coffee in the garden, then wander down to the Atlantic before the crowds arrive. La Barrosa's wide golden sands are yours at eight in the morning.",
    image: beach,
    alt: "A family walking along the shore of a wide sandy beach at golden hour",
  },
  {
    time: "Afternoons",
    title: "Days on the water",
    text: "A skippered wooden boat out of Sancti Petri, the wind in the sails and a cold lunch below deck. Swim off the side where the coast turns to dunes.",
    image: sea,
    alt: "A classic wooden sailing boat on calm Atlantic water with dunes behind",
  },
  {
    time: "Evenings",
    title: "Dinner that comes to you",
    text: "As the light softens, your chef lays a long table by the pool. Grilled fish, chilled sherry, the children asleep within earshot — and nothing to drive to.",
    image: dining,
    alt: "A long candlelit dinner table laid beside a pool at dusk in an Andalusian garden",
  },
];

function Index() {
  return (
    <div>
      <section className="relative h-[100svh] min-h-[600px] overflow-hidden">
        <img src={hero} alt="Terrace and infinity pool overlooking the Atlantic at sunset" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <div className="veil absolute inset-0" />
        <SiteHeader overlay />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-20 text-ink-foreground">
          <p className="eyebrow fade-up text-gold">Chiclana · Roche · Costa de la Luz</p>
          <h1 className="fade-up mt-5 max-w-4xl text-5xl leading-[1.02] md:text-8xl">
            The art of the<br /><em>Andalusian summer.</em>
          </h1>
          <div className="fade-up mt-10 flex flex-wrap gap-4">
            <a href="#days" className="eyebrow bg-ink-foreground px-8 py-4 text-ink transition hover:bg-gold">A day with us</a>
            <Link to="/contact" className="eyebrow border border-ink-foreground/60 px-8 py-4 transition hover:border-gold hover:text-gold">Enquire</Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-24 text-center md:py-32">
        <p className="eyebrow text-accent">A way of summer</p>
        <p className="mt-6 font-display text-3xl leading-snug md:text-5xl">
          Long days of sun, sea and salt air on Spain's brightest coast — lived at your own pace,
          in absolute privacy, with a devoted host who arranges everything before you think to ask.
        </p>
      </section>

      <section id="days" className="mx-auto max-w-7xl space-y-24 px-6 pb-32 md:space-y-36">
        {days.map((d, i) => (
          <article key={d.time} className="grid items-center gap-8 md:grid-cols-12 md:gap-16">
            <div className={`overflow-hidden md:col-span-7 ${i % 2 ? "md:order-2" : ""}`}>
              <img src={d.image} alt={d.alt} loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover transition duration-[1500ms] group-hover:scale-105" />
            </div>
            <div className="md:col-span-5">
              <p className="eyebrow text-accent">{d.time}</p>
              <h2 className="mt-4 text-4xl md:text-6xl">{d.title}</h2>
              <p className="mt-6 leading-relaxed text-muted-foreground">{d.text}</p>
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
