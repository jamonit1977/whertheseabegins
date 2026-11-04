import { Link } from "@tanstack/react-router";
import logo from "@/assets/where_the_sea_begins_logo.png.asset.json";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const tone = overlay ? "text-ink-foreground" : "text-foreground";
  return (
    <header className={`${overlay ? "absolute inset-x-0 top-0 z-20" : "border-b"} ${tone}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <nav className="eyebrow flex gap-6 md:gap-10">
          <Link to="/contact" className="hover:text-gold">Enquire</Link>
        </nav>
        <Link to="/" className="flex items-center gap-3">
          <img src={logo.url} alt="Where the sea begins logo" className="h-12 w-12" />
          <span className="font-display text-2xl tracking-wide">
            Where the sea begins
          </span>
        </Link>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <img src={logo.url} alt="" className="h-16 w-16" />
          <div>
            <p className="font-display text-3xl">Where the sea begins</p>
            <p className="mt-1 text-sm opacity-70">Private holidays in Chiclana & Roche, Costa de la Luz.</p>
          </div>
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
