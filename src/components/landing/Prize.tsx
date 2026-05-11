import { GlitchButton } from "./GlitchButton";

const PERKS = [
  { k: "$50,000", v: "Cash prize, no strings, no equity." },
  { k: "$15K Fabric Grant", v: "Sourced through Mood Fabrics + a Première Vision Paris sourcing trip." },
  { k: "12-Month Mentorship", v: "Monthly 1:1s with a CFDA designer (announced at semi-finals)." },
  { k: "Marketplace Drop", v: "We produce your winning capsule. You keep 70% of sales — forever." },
  { k: "Editorial", v: "Cover feature in our Season Book. Distributed to 400 buyers + 80 editors." },
  { k: "Studio Residency", v: "3 months in our Bushwick studio. Industrial machines, pattern tables, mailing address." },
];

export function Prize() {
  return (
    <section id="prize" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              For Designers / 002
            </div>
            <h2 className="display text-5xl md:text-7xl uppercase leading-[0.9] mb-8">
              The prize is
              <br />
              <span className="text-neon italic font-serif font-normal normal-case">not</span>
              <br />
              the prize.
            </h2>
            <p className="font-serif text-lg text-muted-foreground mb-8 max-w-md">
              $50,000 buys six months of rent. The relationships you walk away
              with buy the next ten years.
            </p>
            <GlitchButton variant="neon" size="lg" hoverText="No excuses.">
              Apply Now →
            </GlitchButton>
          </div>

          <ul className="grid sm:grid-cols-2 gap-px bg-border">
            {PERKS.map((p, i) => (
              <li
                key={p.k}
                className="bg-background p-8 hover:bg-card transition-colors"
              >
                <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Benefit · {String(i + 1).padStart(2, "0")}
                </div>
                <div className="display text-xl md:text-2xl uppercase mb-3 leading-tight">
                  {p.k}
                </div>
                <p className="font-serif text-muted-foreground leading-snug">
                  {p.v}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
