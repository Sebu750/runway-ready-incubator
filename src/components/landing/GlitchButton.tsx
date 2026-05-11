import { cn } from "@/lib/utils";

type Props = {
  href?: string;
  children: React.ReactNode;
  hoverText?: string;
  variant?: "neon" | "ghost" | "outline";
  className?: string;
  size?: "md" | "lg";
};

export function GlitchButton({
  href = "#apply",
  children,
  hoverText = "Yes, I'm ready",
  variant = "neon",
  className,
  size = "md",
}: Props) {
  const base =
    "glitch-btn mono uppercase tracking-[0.18em] inline-flex items-center justify-center border transition-colors";
  const sizes = size === "lg" ? "text-xs px-7 py-4" : "text-[11px] px-5 py-3";
  const variants = {
    neon:
      "bg-neon text-neon-foreground border-neon hover:bg-neon/90",
    ghost:
      "bg-transparent text-foreground border-foreground/80 hover:bg-foreground hover:text-background",
    outline:
      "bg-transparent text-foreground border-border hover:border-foreground",
  } as const;
  return (
    <a href={href} className={cn(base, sizes, variants[variant], className)}>
      <span className="relative block">
        <span className="glitch-label">{children}</span>
        <span className="glitch-hover">{hoverText}</span>
      </span>
    </a>
  );
}
