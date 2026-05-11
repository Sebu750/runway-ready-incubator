import { useState } from "react";
import { GlitchButton } from "./GlitchButton";

export function Apply() {
  const [sent, setSent] = useState(false);
  return (
    <section
      id="apply"
      className="relative px-6 md:px-10 py-24 md:py-36 border-t border-border/60 overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-neon/20 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-electric/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-[1100px] grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
        <div>
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-neon mb-4">
            Final call / 007
          </div>
          <h2 className="display text-balance text-[clamp(2.5rem,7vw,6rem)] leading-[0.88] uppercase mb-6">
            Your breakout
            <br />
            moment is{" "}
            <span className="glitch-text hover-glitch" data-text="4 clicks">
              4 clicks
            </span>
            <br />
            away.
          </h2>
          <p className="font-serif text-lg md:text-xl text-muted-foreground max-w-lg">
            Last season: <span className="text-foreground">1,200 applicants</span> for{" "}
            <span className="text-foreground">50 spots</span>. Early-bird pricing
            ends <span className="text-neon">March 14</span>.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="bg-card border border-border p-8 md:p-10 space-y-5"
        >
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Designer application · Step 1 of 2
          </div>
          {sent ? (
            <div className="py-12 text-center">
              <div className="display text-3xl uppercase mb-3 text-neon">
                You're in the queue.
              </div>
              <p className="font-serif text-muted-foreground">
                Check your inbox for the portfolio upload link.
              </p>
            </div>
          ) : (
            <>
              <Field label="Name" name="name" placeholder="Your full name" />
              <Field label="Email" name="email" type="email" placeholder="hello@you.com" />
              <Field
                label="Portfolio link"
                name="portfolio"
                placeholder="instagram.com / website / dropbox"
              />
              <div>
                <label className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
                  Category
                </label>
                <select
                  name="category"
                  className="w-full bg-background border border-border px-4 py-3 text-foreground font-serif focus:outline-none focus:border-neon"
                  required
                  defaultValue=""
                >
                  <option value="" disabled>Select one</option>
                  <option>Ready-to-wear</option>
                  <option>Couture / Avant-garde</option>
                  <option>Knitwear</option>
                  <option>Digital / 3D</option>
                </select>
              </div>
              <button
                type="submit"
                className="glitch-btn w-full mono text-xs uppercase tracking-[0.2em] bg-neon text-neon-foreground border border-neon px-5 py-4"
              >
                <span className="relative block">
                  <span className="glitch-label">Pay entry fee & continue →</span>
                  <span className="glitch-hover">No excuses.</span>
                </span>
              </button>
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">
                $50 early-bird · waivers available
              </p>
            </>
          )}
        </form>
      </div>

      <div className="relative mx-auto max-w-[1100px] mt-16 flex justify-center">
        <GlitchButton href="#prospectus" variant="outline" hoverText="Read it twice.">
          Or download the prospectus first
        </GlitchButton>
      </div>
    </section>
  );
}

function Field({
  label, name, type = "text", placeholder,
}: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground block mb-2">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full bg-background border border-border px-4 py-3 text-foreground font-serif placeholder:text-muted-foreground/50 focus:outline-none focus:border-neon"
      />
    </div>
  );
}
