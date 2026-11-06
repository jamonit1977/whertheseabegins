import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logo from "@/assets/where_the_sea_begins_logo.png.asset.json";
import whiteLogo from "@/assets/where-the-sea-begins-white.png";

const navLink =
  "border-b border-current py-2 transition hover:text-gold aria-[current=page]:border-gold focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

export function SiteHeader({ overlay = false }: { overlay?: boolean }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (overlay) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overlay]);

  const tone = overlay
    ? "absolute inset-x-0 top-0 z-20 bg-ink/85 text-header-foreground"
    : "sticky top-0 z-30 border-b bg-background/95 text-foreground backdrop-blur";
  const logoSize = overlay || !scrolled ? "h-14 w-14 md:h-24 md:w-24" : "h-12 w-12 md:h-14 md:w-14";

  return (
    <header className={tone}>
      <div className={`mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 transition-[padding] duration-300 ${scrolled && !overlay ? "py-2" : "py-4"}`}>
        <nav aria-label="Main" className="flex shrink-0 gap-5 text-sm font-semibold uppercase md:gap-10">
          <Link to="/area-guide" className={navLink}>Area</Link>
          <Link to="/calendar" className={navLink}>Calendar</Link>
          <Link to="/eclipse" className={`${navLink} hidden md:inline`}>Eclipse 2027</Link>
          <Link to="/contact" className={navLink}>Enquire</Link>
        </nav>
        <Link to="/" aria-label="Where the sea begins — home" className="flex min-w-0 items-center gap-3 md:gap-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current">
          <img src={overlay ? whiteLogo : logo.url} alt="" className={`${logoSize} shrink-0 object-contain transition-[width,height] duration-300`} />
          <span className="max-w-36 font-display text-xl leading-tight sm:max-w-none sm:text-2xl md:text-3xl">
            Where the sea begins
          </span>
        </Link>
      </div>
    </header>
  );
}

const footerLink = "underline-offset-4 hover:text-gold hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-12">
        <div className="flex items-center gap-4 md:col-span-5">
          <img src={logo.url} alt="" className="h-16 w-16" />
          <div>
            <p className="font-display text-3xl">Where the sea begins</p>
            <p className="mt-1 text-sm opacity-70">Private holidays in Chiclana & Roche, Costa de la Luz.</p>
          </div>
        </div>
        <div className="text-sm opacity-80 md:col-span-3">
          <p className="eyebrow mb-3 text-gold">Concierge</p>
          <p>Available every day, 8:00 – 22:00</p>
          <p>Chiclana de la Frontera, Cádiz</p>
        </div>
        <nav aria-label="Footer" className="text-sm md:col-span-4">
          <p className="eyebrow mb-3 text-gold">Explore</p>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-2">
            <li><Link to="/area-guide" className={footerLink}>Area guide</Link></li>
            <li><Link to="/calendar" className={footerLink}>Season by season</Link></li>
            <li><Link to="/eclipse" className={footerLink}>Eclipse 2027</Link></li>
            <li><Link to="/contact" className={footerLink}>Request a stay</Link></li>
          </ul>
        </nav>
      </div>
      <div className="border-t border-ink-foreground/15">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-x-8 gap-y-3 px-6 py-6 text-xs opacity-70">
          <p>© {new Date().getFullYear()} Where the sea begins. All rights reserved.</p>
          <nav aria-label="Legal">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              <li><Link to="/privacy" className={footerLink}>Privacy policy</Link></li>
              <li><Link to="/legal-notice" className={footerLink}>Legal notice</Link></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
