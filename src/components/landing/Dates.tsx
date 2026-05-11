import { GlitchButton } from "./GlitchButton";

const DATES = [
  { d: "Jun 01", l: "Applications Open", note: "Registration portal live" },
  { d: "Jul 15", l: "Application Deadline", note: "All portfolios locked" },
  { d: "Aug 04", l: "Shortlist Announcement", note: "Top 100 designers published" },
  { d: "Sep 14", l: "Runway Finale", note: "10 Finalists – Venue TBA" },
];

export function Dates() {
  return (
    <section id="dates" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60 bg-card/30">
      <div className="mx-auto max-w-[1400px]">
        <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Calendar / 005
        </div>
        <h2 className="display text-5xl md:text-7xl uppercase leading-[0.9] mb-16">
          Mark the dates.
          <br />
          <span className="text-neon">Or miss them.</span>
        </h2>

        <ol className="relative">
          {DATES.map((row, i) => (
            <li
              key={row.l}
              className="grid grid-cols-[80px_1fr_auto] md:grid-cols-[140px_1fr_auto] gap-4 md:gap-8 items-center py-6 border-t border-border last:border-b group"
            >
              <div className="display text-2xl md:text-4xl text-neon">
                {row.d}
              </div>
              <div>
                <div className="display text-lg md:text-2xl uppercase">{row.l}</div>
                <div className="mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mt-1">
                  {row.note}
                </div>
              </div>
              <div className="hidden md:block">
                {i < 2 && (
                  <GlitchButton variant="ghost" hoverText="Lock it in.">
                    Apply now
                  </GlitchButton>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
