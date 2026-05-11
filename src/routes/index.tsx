import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Marquee } from "@/components/landing/Marquee";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Prize } from "@/components/landing/Prize";
import { Sponsors } from "@/components/landing/Sponsors";
import { Winners } from "@/components/landing/Winners";
import { Dates } from "@/components/landing/Dates";
import { FAQ } from "@/components/landing/FAQ";
import { Apply } from "@/components/landing/Apply";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Atelier/00 — A fashion competition for the next generation" },
      {
        name: "description",
        content:
          "Win $50K, a CFDA mentorship, and a runway in New York. 3 rounds. 10 finalists. Apply before the early-bird deadline.",
      },
      { property: "og:title", content: "Atelier/00 — Stop interning. Start competing." },
      {
        property: "og:description",
        content:
          "A fashion competition that discovers, funds, and accelerates emerging designer talent.",
      },
    ],
  }),
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <Hero />
      <Marquee />
      <HowItWorks />
      <Prize />
      <Sponsors />
      <Winners />
      <Dates />
      <FAQ />
      <Apply />
      <Footer />
    </main>
  );
}
