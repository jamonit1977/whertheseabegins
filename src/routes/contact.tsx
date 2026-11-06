import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";
import { canonical } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Request a Stay — Where the sea begins" },
      { name: "description", content: "Tell your personal host how you like to summer, and we will compose your stay on the Costa de la Luz." },
      { property: "og:title", content: "Request a Stay — Where the sea begins" },
      { property: "og:description", content: "A privately arranged Andalusian summer for families and couples, with dedicated personal service." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: canonical("/contact"),
  }),
  component: Contact,
});

// Enquiries are delivered by email through FormSubmit (https://formsubmit.co).
const ENQUIRY_EMAIL = "moonpixi@hotmail.com";
const ENDPOINT = `https://formsubmit.co/ajax/${ENQUIRY_EMAIL}`;

const field = "w-full border-0 border-b bg-transparent py-3 text-base outline-none transition focus:border-accent";
const label = "grid gap-1 text-sm text-muted-foreground";

type Status = "idle" | "sending" | "sent" | "error";

const today = () => new Date().toISOString().slice(0, 10);

function mailtoFallback(details: Record<string, string>) {
  const body = [
    `Name: ${details.name ?? ""}`,
    `Email: ${details.email ?? ""}`,
    `Guests: ${details.guests ?? ""}`,
    `Arrival: ${details.arrival ?? ""}`,
    `Departure: ${details.departure ?? ""}`,
    "",
    details.wishes ?? "",
  ].join("\n");
  return `mailto:${ENQUIRY_EMAIL}?subject=${encodeURIComponent("Stay enquiry — Where the sea begins")}&body=${encodeURIComponent(body)}`;
}

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [problem, setProblem] = useState("");
  const [details, setDetails] = useState<Record<string, string>>({});

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (data.get("_honey")) return;

    const values: Record<string, string> = {};
    for (const key of ["name", "email", "guests", "arrival", "departure", "wishes"]) {
      values[key] = String(data.get(key) ?? "").trim();
    }
    setDetails(values);

    if (values.arrival && values.departure && values.departure <= values.arrival) {
      setProblem("Your departure date needs to be after your arrival date.");
      return;
    }
    setProblem("");
    setStatus("sending");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...values,
          _subject: "New stay enquiry — Where the sea begins",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!response.ok) throw new Error(`Enquiry failed with status ${response.status}`);
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="min-h-screen">
      <SiteHeader />
      <section className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="eyebrow text-accent">Concierge</p>
        <h1 className="mt-4 text-5xl md:text-7xl">Request a stay</h1>
        <p className="mt-6 text-muted-foreground">Share a few details and your personal host will reply within the hour.</p>
        {status === "sent" ? (
          <div role="status" className="mt-16">
            <p className="font-display text-3xl">Thank you{details.name ? `, ${details.name.split(" ")[0]}` : ""}. Your host will be in touch very shortly.</p>
            <p className="mt-4 text-sm text-muted-foreground">A copy of your enquiry is on its way to our concierge. This is not yet a reservation.</p>
            <Link to="/" className="eyebrow mt-10 inline-block border border-foreground/30 px-8 py-4 transition hover:border-gold hover:text-accent">Back to the coast</Link>
          </div>
        ) : (
          <form className="mt-14 grid gap-8 md:grid-cols-2" onSubmit={onSubmit}>
            <label className={label}>
              <span>Full name</span>
              <input name="name" required autoComplete="name" className={field} />
            </label>
            <label className={label}>
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" className={field} />
            </label>
            <label className={label}>
              <span>Guests</span>
              <input name="guests" type="number" min={1} max={30} inputMode="numeric" className={field} />
            </label>
            <div className="hidden md:block" aria-hidden="true" />
            <label className={label}>
              <span>Arrival</span>
              <input name="arrival" type="date" min={today()} className={field} />
            </label>
            <label className={label}>
              <span>Departure</span>
              <input name="departure" type="date" min={today()} className={field} />
            </label>
            <label className={`${label} md:col-span-2`}>
              <span>Wishes — chef, chauffeur, childcare…</span>
              <textarea name="wishes" rows={4} className={field} />
            </label>

            {/* Honeypot: hidden from people, filled in by spam bots. */}
            <input name="_honey" type="text" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

            <label className="flex items-start gap-3 text-sm leading-relaxed text-muted-foreground md:col-span-2">
              <input name="consent" type="checkbox" required className="mt-1 h-4 w-4 shrink-0 accent-[var(--gold)]" />
              <span>
                I agree that my details may be used to reply to this enquiry, as described in the{" "}
                <Link to="/privacy" className="underline underline-offset-4 hover:text-accent">privacy policy</Link>.
              </span>
            </label>

            <div className="md:col-span-2" aria-live="polite">
              {problem && <p role="alert" className="text-sm text-destructive">{problem}</p>}
              {status === "error" && (
                <p role="alert" className="text-sm text-destructive">
                  We couldn't send your enquiry just now. Please try again, or{" "}
                  <a href={mailtoFallback(details)} className="underline underline-offset-4">send it from your email app</a>.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === "sending"}
              className="eyebrow bg-primary px-10 py-4 text-primary-foreground transition hover:bg-accent hover:text-accent-foreground disabled:cursor-wait disabled:opacity-60 md:col-span-2 md:justify-self-start"
            >
              {status === "sending" ? "Sending…" : "Send enquiry"}
            </button>
          </form>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
