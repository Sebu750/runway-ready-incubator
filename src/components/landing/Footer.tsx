export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 md:px-10 py-12">
      <div className="mx-auto max-w-[1400px] grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-8">
        <div>
          <div className="display text-2xl uppercase tracking-[0.2em] mb-3">
            Atelier<span className="text-neon">/</span>00
          </div>
          <p className="font-serif text-sm text-muted-foreground max-w-xs">
            A competition for designers who can't wait for permission.
          </p>
        </div>
        {[
  ["Program", ["Apply", "Founding Designers", "Jury", "Guidelines"]],
  ["Industry", ["Sponsorship", "Partnership", "Media Kit", "News Hub"]],
  ["Contact", [
    "hello@adorzia.com",
    /* Update specific URLs below when accounts are finalized */
    "Instagram", // https://www.instagram.com/adorziaofficial
    "LinkedIn",  // https://www.linkedin.com/company/adorzia
    "TikTok",    // https://www.tiktok.com/@adorzia
    "WhatsApp"   // https://wa.me/your_number_her
  ]],
].map(([h, items]) => (
          <div key={h as string}>
            <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {h as string}
            </div>
            <ul className="font-serif space-y-2 text-sm">
              {(items as string[]).map((i) => (
                <li key={i}>
                  <a href="#" className="hover:text-neon transition-colors">
                    {i}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[1400px] mt-12 pt-6 border-t border-border/40 flex flex-wrap items-center justify-between gap-3 mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
        <span>© 2026 Spotlight by Adorzia · Lahore, Pakistan</span>
        <span>Built for designers, not gatekeepers.</span>
      </div>
    </footer>
  );
}
