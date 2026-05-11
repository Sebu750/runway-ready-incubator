const PARTNERS = [
  "Khaadi",
  "Gul Ahmed Textile Mills",
  "Sapphire ",
  "PIFD Lahore",
  "L'Oréal Pakistan",
  "Nishat Linen",
  "Fashion Pakistan Council",
  "Depilex",
  "TEVF",
  "HSY Studio",
];

export function Marquee() {
  const row = [...PARTNERS, ...PARTNERS];
  return (
    <section className="border-y border-border/60 bg-background py-6 overflow-hidden">
      <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground text-center mb-4">
        Target Collaborations
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
