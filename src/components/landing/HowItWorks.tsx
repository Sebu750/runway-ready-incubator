const STEPS = [
  {
    n: "01",
    title: "Submit 3 looks",
    body: "Upload your portfolio, sketches, and a 60-second concept reel. $50 entry, waived for need-based applicants.",
  },
  {
    n: "02",
    title: "Judges score. Public votes.",
    body: "Top 30 advance through blind industry scoring weighted 70/30 against the public vote.",
  },
  {
    n: "03",
    title: "Build the capsule",
    body: "10 finalists get a $2K fabric grant, a CLO 3D license, and 8 weeks to produce three runway-ready looks.",
  },
  {
    n: "04",
    title: "Live finale, New York",
    body: "Walk the runway in front of buyers, press, and our jury. One winner takes the $50K and the mentorship.",
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
            We strip away the gatekeepers. No agent, no MFA, no Manhattan rent
            required — just the work.
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
