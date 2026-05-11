import { GlitchButton } from "./GlitchButton";

const PERKS = [
  { 
    k: "PKR 300K", 
    v: "Cash prize awarded to the Top 1 winner to accelerate their brand's growth." 
  },
  { 
    k: "100%", 
    v: "Ownership. You remain the sole legal owner of your brand, trademarks, and IP." 
  },
  { 
    k: "3 Seasons", 
    v: "Strategic Collaboration. Guaranteed production and funding across three consecutive collection cycles." 
  },
  { 
    k: "50%", 
    v: "Profit share. Net profit split after all production and marketing expenses are recovered." 
  },
  { 
    k: "Market", 
    v: "Global Launch. Exclusive featured collection drop on the ADORZIA digital marketplace." 
  },
  { 
    k: "Runway", 
    v: "Fall 2026. Professional showcase for the Top 10 finalists on September 14th." 
  },
];

export function Prize() {
  return (
    <section id="prize" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20 items-start">
          <div className="lg:sticky lg:top-28">
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              For Designers 
            </div>
            <h2 className="display text-5xl md:text-7xl uppercase leading-[0.9] mb-8">
              The prize is
              <br />
              <span className="text-neon italic font-serif font-normal normal-case">not</span>
              <br />
              the prize.
            </h2>
            <p className="font-serif text-lg text-muted-foreground mb-8 max-w-md">
            Most competitions hand you a check and a photo op. We hand you a year of access to the people who decide which collections get bought, photographed, and worn.
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
