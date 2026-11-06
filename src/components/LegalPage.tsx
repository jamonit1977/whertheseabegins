import type { ReactNode } from "react";
import { SiteFooter, SiteHeader } from "@/components/SiteChrome";

export function LegalPage({ title, updated, intro, children }: { title: string; updated: string; intro: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="eyebrow text-accent">Legal</p>
        <h1 className="mt-4 text-5xl md:text-7xl">{title}</h1>
        <p className="mt-6 leading-relaxed text-muted-foreground">{intro}</p>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: {updated}</p>
        <div className="mt-14 space-y-12">{children}</div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function LegalSection({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="border-t border-foreground/20 pt-6">
      <h2 className="text-3xl">{heading}</h2>
      <div className="mt-4 space-y-4 leading-relaxed text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-accent [&_li]:ml-5 [&_li]:list-disc [&_li]:pl-1">
        {children}
      </div>
    </section>
  );
}
