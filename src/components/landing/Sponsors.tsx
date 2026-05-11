import { GlitchButton } from "./GlitchButton";

export function Sponsors() {
  return (
    <section id="sponsors" className="px-6 md:px-10 py-20 border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-[1400px] grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            For Brands & Mills / 003
          </div>
          <h2 className="display text-3xl md:text-5xl uppercase leading-[0.95] mb-6 max-w-2xl">
            Partner with us to own
            <br />
            the next generation of talent.
          </h2>
          <ul className="font-serif text-muted-foreground space-y-3 max-w-xl mb-8 text-lg">
            <li className="flex gap-3">
              <span className="text-neon mono text-xs mt-1.5">→</span>
              First look at 100+ vetted designers before any agent gets near them.
            </li>
            <li className="flex gap-3">
              <span className="text-neon mono text-xs mt-1.5">→</span>
              Embedded product placement in scored design challenges.
            </li>
            <li className="flex gap-3">
              <span className="text-neon mono text-xs mt-1.5">→</span>
              Quarterly trend report on emerging silhouettes, fabrics, and references.
            </li>
          </ul>
          <GlitchButton href="#prospectus" variant="outline" hoverText="Let's talk.">
            Request Sponsorship Deck
          </GlitchButton>
        </div>
        <div className="border border-border p-8 bg-background">
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
            Tier Snapshot
          </div>
          {[
            ["Founding", "$120K", "Naming rights · jury seat"],
            ["Principal", "$60K", "Challenge sponsorship · onstage"],
            ["Supporting", "$25K", "Logo · trend report · 4 seats"],
          ].map(([t, p, d]) => (
            <div
              key={t}
              className="flex items-baseline justify-between gap-4 py-4 border-b border-border last:border-0"
            >
              <div>
                <div className="display uppercase">{t}</div>
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {d}
                </div>
              </div>
              <div className="display text-neon text-xl">{p}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
