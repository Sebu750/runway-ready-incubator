const PARTNERS = [
  "SSENSE", "Mood Fabrics", "CLO 3D", "Vogue India",
  "Parsons", "Central Saint Martins", "Première Vision",
  "Highsnobiety", "i-D Magazine", "Antwerp Academy",
];

export function Marquee() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="border-y border-border/60 bg-background py-6 overflow-hidden">
      <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-4">
        In partnership with
      </div>
      <div className="marquee-fade overflow-hidden">
        <div className="ticker flex gap-12 whitespace-nowrap will-change-transform">
          {row.map((p, i) => (
            <span
              key={i}
              className="display text-2xl md:text-3xl uppercase tracking-tight text-foreground/80 flex items-center gap-12"
            >
              {p}
              <span className="text-neon">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
