import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Stay — Casas de la Luz" },
      { name: "description", content: "Tell your personal host how you like to summer, and we will compose your stay on the Costa de la Luz." },
      { property: "og:title", content: "Request a Stay — Casas de la Luz" },
      { property: "og:description", content: "A privately arranged Andalusian summer for families and couples, with dedicated personal service." },
    ],
  }),
  component: Contact,
});

const field = "w-full border-0 border-b bg-transparent py-3 outline-none focus:border-accent";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="eyebrow text-accent">Concierge</p>
        <h1 className="mt-4 text-5xl md:text-7xl">Request a stay</h1>
        <p className="mt-6 text-muted-foreground">Share a few details and your personal host will reply within the hour.</p>
        {sent ? (
          <p className="mt-16 font-display text-3xl">Thank you. Your host will be in touch very shortly.</p>
        ) : (
          <form className="mt-14 grid gap-8 md:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
            <input required placeholder="Full name" className={field} />
            <input required type="email" placeholder="Email" className={field} />
            <input type="number" min={1} placeholder="Guests" className={field} />
            <input type="date" aria-label="Arrival" className={field} />
            <input type="date" aria-label="Departure" className={field} />
            <textarea rows={4} placeholder="Wishes — chef, chauffeur, childcare…" className={`${field} md:col-span-2`} />
            <button className="eyebrow bg-primary px-10 py-4 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground md:col-span-2 md:justify-self-start">
              Send enquiry
            </button>
          </form>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
