import heroImg from "@/assets/hero-runway.jpg";
import { GlitchButton } from "./GlitchButton";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden grain">
      <img
        src={heroImg}
        alt="Runway in motion blur"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/30 to-background" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-background/40" />

      {/* Top meta line */}
      <div className="relative z-10 pt-24 md:pt-28 px-6 md:px-10">
        <div className="mx-auto max-w-[1400px] flex items-center justify-between mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse" />
            Season 04 — Applications open
          </span>
          <span className="hidden md:block">New York · Paris · Tokyo</span>
        </div>
      </div>

      {/* Headline */}
      <div className="relative z-10 px-6 md:px-10 mt-20 md:mt-32 pb-32">
        <div className="mx-auto max-w-[1400px]">
          <h1 className="display text-balance text-[clamp(2.75rem,9vw,9rem)] leading-[0.88] uppercase">
            Stop interning.
            <br />
            <span className="glitch-text hover-glitch" data-text="Start competing.">
              Start competing.
            </span>
          </h1>
          <p className="mt-8 max-w-xl font-serif text-lg md:text-xl text-muted-foreground leading-snug">
            3 rounds. 10 finalists. 1 winner.
            <br />
            Judged by Zara's former Head of Design and the team behind Loewe's
            graduate program.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <GlitchButton
              href="#apply"
              variant="neon"
              size="lg"
              hoverText="No excuses."
            >
              Apply Now — Early bird ends Mar 14
            </GlitchButton>
            <GlitchButton
              href="#prospectus"
              variant="ghost"
              size="lg"
              hoverText="Read it twice."
            >
              Download Prospectus ↓
            </GlitchButton>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-6 max-w-xl border-t border-border/60 pt-6">
            {[
              ["$50K", "Cash prize"],
              ["12", "Industry judges"],
              ["1,200+", "S03 applicants"],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="display text-2xl md:text-3xl">{n}</div>
                <div className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground mt-1">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom ticker handled by parent */}
    </section>
  );
}
