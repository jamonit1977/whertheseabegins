import { Link } from "@tanstack/react-router";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const tone = overlay ? "text-ink-foreground" : "text-foreground";
  return (
    <header className={`${overlay ? "absolute inset-x-0 top-0 z-20" : "border-b"} ${tone}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link to="/" className="font-display text-2xl tracking-wide">
          Casas de la Luz
        </Link>
        <nav className="eyebrow flex gap-6 md:gap-10">
          <Link to="/contact" className="hover:text-gold">Enquire</Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div>
          <p className="font-display text-3xl">Casas de la Luz</p>
          <p className="mt-3 text-sm opacity-70">Private holidays in Chiclana & Roche, Costa de la Luz.</p>
        </div>
        <div className="text-sm opacity-80">
          <p className="eyebrow mb-3 text-gold">Concierge</p>
          <p>Available every day, 8:00 – 22:00</p>
          <p>Chiclana de la Frontera, Cádiz</p>
        </div>
        <div className="text-sm">
          <p className="eyebrow mb-3 text-gold">Reservations</p>
          <Link to="/contact" className="underline underline-offset-4 hover:text-gold">Request a stay</Link>
        </div>
      </div>
    </footer>
  );
}
