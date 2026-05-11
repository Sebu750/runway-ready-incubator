const STEPS = [
  { 
    n: "01", 
    t: "Digital Scouting", 
    d: "Applications open June 1st. Submit your portfolio and creative vision. Our internal panel screens candidates to shortlist the Elite 100." 
  },
  { 
    n: "02", 
    t: "Curation & Jury Review", 
    d: "Pakistan's premier Creative Directors and academic veterans evaluate the Top 100, selecting 10 finalists based on craft and global appeal." 
  },
  { 
    n: "03", 
    t: "The Runway Finale", 
    d: "September 14th showcase. Finalists present their collections to a panel of influencers and stakeholders to crown the Season winner." 
  },
  { 
    n: "04", 
    t: "Operational Partnership", 
    d: "The winner claims PKR 300K. All Top 10 finalists transition into a 3 Season funded manufacturing and global marketplace agreement." 
  },
];

export function HowItWorks() {
  return (
    <section id="how" className="px-6 md:px-10 py-24 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              The Process / 001
            </div>
            <h2 className="display text-5xl md:text-7xl uppercase leading-[0.9]">
              Four rounds.
              <br />
              One runway.
            </h2>
          </div>
          <p className="font-serif text-lg text-muted-foreground max-w-md">
"We bridge the void between raw talent and the global market. No legacy gatekeepers, no exclusive barriers, no overhead constraints — just the purity of your craft and the infrastructure to scale it."
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {STEPS.map((s) => (
            <div
              key={s.n}
              className="bg-background p-8 group hover:bg-card transition-colors min-h-[280px] flex flex-col"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="mono text-xs text-neon">{s.n}</span>
                <span className="h-px w-12 bg-border group-hover:bg-neon transition-colors" />
              </div>
              <h3 className="display text-2xl uppercase mb-3">{s.title}</h3>
              <p className="font-serif text-muted-foreground leading-snug">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
