import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { villas } from "@/lib/villas";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/villas/$slug")({
  loader: ({ params }) => {
    const villa = villas.find((v) => v.slug === params.slug);
    if (!villa) throw notFound();
    return { villa };
  },
  head: ({ loaderData }) => {
    const v = loaderData?.villa;
    if (!v) return { meta: [{ title: "Villa not found — Casas de la Luz" }, { name: "robots", content: "noindex" }] };
    const title = `${v.name}, ${v.location} — Casas de la Luz`;
    return {
      meta: [
        { title },
        { name: "description", content: v.description },
        { property: "og:title", content: title },
        { property: "og:description", content: v.description },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl">This villa doesn't exist</h1>
      <Link to="/" className="eyebrow underline">Back to the collection</Link>
    </div>
  ),
  component: VillaPage,
});

function VillaPage() {
  const { villa: v } = Route.useLoaderData();
  return (
    <div>
      <section className="relative h-[85svh] min-h-[520px] overflow-hidden">
        <img src={v.image} alt={v.name} width={1280} height={960} className="absolute inset-0 h-full w-full object-cover" />
        <div className="veil absolute inset-0" />
        <SiteHeader overlay />
        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 text-ink-foreground">
          <p className="eyebrow text-gold">{v.location} · Costa de la Luz</p>
          <h1 className="fade-up mt-4 text-6xl md:text-8xl">{v.name}</h1>
          <p className="mt-3 font-display text-2xl italic">{v.tagline}</p>
        </div>
      </section>
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="font-display text-3xl leading-snug">{v.description}</p>
          <p className="mt-8 leading-relaxed text-muted-foreground">
            Your stay includes a dedicated host, daily housekeeping, garden and pool care, and a welcome
            hamper of local wines, olive oil and fresh produce. Private chef, chauffeur and childcare are
            arranged on request.
          </p>
        </div>
        <aside className="border p-8 md:col-span-5">
          <dl className="grid grid-cols-2 gap-6">
            <div><dt className="eyebrow text-muted-foreground">Bedrooms</dt><dd className="mt-1 font-display text-4xl">{v.bedrooms}</dd></div>
            <div><dt className="eyebrow text-muted-foreground">Guests</dt><dd className="mt-1 font-display text-4xl">{v.guests}</dd></div>
          </dl>
          <ul className="mt-8 space-y-3 border-t pt-6">
            {v.features.map((f) => <li key={f} className="flex gap-3"><span className="text-accent">—</span>{f}</li>)}
          </ul>
          <Link to="/contact" search={{ villa: v.slug }} className="eyebrow mt-8 block bg-primary px-6 py-4 text-center text-primary-foreground transition hover:bg-accent hover:text-accent-foreground">
            Enquire about {v.name}
          </Link>
        </aside>
      </section>
      <SiteFooter />
    </div>
  );
}
