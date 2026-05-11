export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 backdrop-blur-md bg-background/70">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 h-14 flex items-center justify-between">
        <a href="#top" className="display text-sm tracking-[0.3em] uppercase">
          Atelier<span className="text-neon">/</span>00
        </a>
        <nav className="hidden md:flex items-center gap-8 mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <a href="#how" className="hover:text-foreground transition">Process</a>
          <a href="#prize" className="hover:text-foreground transition">Prize</a>
          <a href="#winners" className="hover:text-foreground transition">Alumni</a>
          <a href="#dates" className="hover:text-foreground transition">Dates</a>
          <a href="#faq" className="hover:text-foreground transition">FAQ</a>
        </nav>
        <a href="#apply" className="mono text-[11px] uppercase tracking-[0.2em] border border-foreground/80 px-4 py-2 hover:bg-foreground hover:text-background transition">
          Apply
        </a>
      </div>
    </header>
  );
}
