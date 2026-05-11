import { useState } from "react";
import { GlitchButton } from "./GlitchButton";
import { supabase } from "@/integrations/supabase/client";
import { z } from "zod";

const applicationSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  portfolio: z.string().trim().min(1, "Portfolio required").max(500),
  category: z.string().trim().min(1, "Select a category").max(100),
});

export function Apply() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = applicationSchema.safeParse({
      name: fd.get("name"),
      email: fd.get("email"),
      portfolio: fd.get("portfolio"),
      category: fd.get("category"),
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Invalid input");
      return;
    }
    setSubmitting(true);
    const { error: dbError } = await supabase
      .from("applications")
      .insert(parsed.data);
    setSubmitting(false);
    if (dbError) {
      setError("Something went wrong. Please try again.");
      return;
    }
    setSent(true);
  }

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
            Final call 
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
  Launch Season: <span className="text-foreground">100 designers</span> will be shortlisted for{" "}
  <span className="text-foreground">10 finalist spots</span>. Apply by{" "}
  <span className="text-neon">July 15</span> to secure your place.
</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-card border border-border p-8 md:p-10 space-y-5"
        >
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Designer application · Step 1 of 2
          </div>
          {sent ? (
<div className="py-12 text-center">
  <div className="display text-3xl uppercase mb-3 text-neon">
    Application Submitted.
  </div>
  <p className="font-serif text-muted-foreground">
    Thank you for your submission. Our jury will review your portfolio, <br />
    and we will update you on your application status via email.
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
                  <option>Pret / Ready-to-Wear</option>
<option>Luxury Formal / Couture</option>
<option>Streetwear</option>
<option>Sustainable Design</option>
                </select>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="glitch-btn w-full mono text-[11px] sm:text-xs uppercase tracking-[0.2em] bg-neon text-neon-foreground border border-neon px-5 py-4"
              >
                <span className="relative block overflow-hidden">
                  <span className="glitch-label">
                    {submitting ? "Submitting…" : " Continue →"}
                  </span>
                  <span className="glitch-hover">No excuses.</span>
                </span>
              </button>
              {error && (
                <p className="mono text-[10px] uppercase tracking-[0.2em] text-neon text-center">
                  {error}
                </p>
              )}
              <p className="mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground text-center">
               PKR 5,000 processing fee - applicable only upon passing initial screening.
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
