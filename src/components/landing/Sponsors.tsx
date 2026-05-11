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
              Direct access to Pakistan’s top 100 shortlisted emerging designers.
            </li>
            <li className="flex gap-3">
              <span className="text-neon mono text-xs mt-1.5">→</span>
              Exclusive brand integration in the Runway Finale and Jury Panel.
            </li>
            <li className="flex gap-3">
              <span className="text-neon mono text-xs mt-1.5">→</span>
              Anchor the launch of a new industrial standard as a Strategic Partner in the Adorzia Founding Designers Program.
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
 [
  ["Industrial Partner", "Manufacturing", "Official Production Lead · Exclusive Factory-to-Runway Branding"],
  ["Patron Partner", "Awards & Grants", "Title Sponsor of PKR 300K+ Prize · Founding Jury Residency"],
  ["Logistics Partner", "Infrastructure", "Official Venue & Supply Chain Authority · On-Ground Operational Visibility"],
  ["Media Partner", "Digital & PR", "Exclusive Domestic Coverage Lead · National Fashion News Integration"]
]
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
