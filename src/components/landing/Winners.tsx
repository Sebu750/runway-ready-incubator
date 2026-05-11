import w1 from "@/assets/winner-1.jpg";
import w2 from "@/assets/winner-2.jpg";
import w3 from "@/assets/winner-3.jpg";

const W = [
  {
    img: w1,
    name: "Maria Chen",
    season: "S01 — 2023",
    before: "Senior thesis, Parsons",
    after: "Assistant Designer, Coach",
    quote:
      "Atelier got my portfolio in front of the right people. Three months later I was in a Coach studio.",
  },
  {
    img: w2,
    name: "Daniel Okafor",
    season: "S02 — 2024",
    before: "Self-taught, Lagos",
    after: "Founder, Okafor Studio · stocked at SSENSE",
    quote:
      "I didn't go to fashion school. The finale was the first time buyers ever saw my work.",
  },
  {
    img: w3,
    name: "Lola Castellanos",
    season: "S03 — 2025",
    before: "Final year, Antwerp",
    after: "Creative Director, Eckhaus Latta capsule",
    quote:
      "The mentorship is the real prize. My judge still answers my texts at midnight.",
  },
];

export function Winners() {
  return (
    <section id="winners" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-[1400px]">
        <div className="flex items-end justify-between flex-wrap gap-4 mb-16">
          <div>
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Alumni / 004
            </div>
            <h2 className="display text-5xl md:text-7xl uppercase leading-[0.9]">
              Before & after.
            </h2>
          </div>
          <p className="font-serif text-muted-foreground text-lg max-w-md">
            Three winners. Three career trajectories that didn't exist eighteen
            months ago.
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
