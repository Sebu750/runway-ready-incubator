import w1 from "@/assets/winner-1.jpg";
import w2 from "@/assets/winner-2.jpg";
import w3 from "@/assets/winner-3.jpg";

const W = [
  {
    img: w1,
    name: "The Emerging Visionary",
    season: "Founding Class - 2026",
    Background: "Final year student with a thesis ready to launch.",
    Opportunity: "Creative Director of an Adorzia-funded label.",
    quote:
      "I have the vision but lacked the capital. ADORZIA is the only platform providing 100% ownership with full production support.",
  },
  {
    img: w2,
    name: "The Industry Pivot",
    season: "Founding Class - 2026",
    Background: "Working professional designing for major retail brands.",
    Opportunity: "Independent Founder with a 50/50 profit-sharing partner.",
    quote:
      "I was tired of building someone else's brand. ADORZIA gives me the investment to finally build and own my own name.",
  },
  {
    img: w3,
    name: "The Heritage Artisan",
    season: "Founding Class - 2026",
    Background: "Self-taught designer focused on traditional craft.",
    Opportunity: "Marketplace-ready brand with a year of mentorship.",
    quote:
      "he PKR 300K prize and manufacturing backing mean I can scale my artisanal craft without the financial risk of a startup.",
  },
];

export function Winners() {
  return (
    <section id="winners" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            — The ADORZIA Legacy
            </div>
            <h2 className="display text-5xl md:text-7xl uppercase leading-[0.9]">
              Who we are looking for.
            </h2>
          </div>
          <p className="font-serif text-muted-foreground text-lg max-w-md">
            Ten finalists. Ten new trajectories defining the next era of Pakistani fashion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {W.map((w) => (
            <article key={w.name} className="group">
              <div className="relative aspect-[3/4] overflow-hidden bg-card mb-5">
                <img
                  src={w.img}
                  alt={w.name}
                  loading="lazy"
                  width={768}
                  height={960}
                  className="absolute inset-0 h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 mono text-[10px] uppercase tracking-[0.3em] text-foreground/80 bg-gradient-to-t from-background to-transparent">
                  {w.season}
                </div>
              </div>
              <h3 className="display text-2xl uppercase mb-3">{w.name}</h3>
              <div className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground space-y-1 mb-4">
                <div>Before · {w.before}</div>
                <div className="text-neon">Now · {w.after}</div>
              </div>
              <p className="font-serif text-foreground/90 italic leading-snug">
                "{w.quote}"
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
