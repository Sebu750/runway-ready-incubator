import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const QA = [
  {
    q: "Do I need a full collection to apply?",
    a: "No. Three to five cohesive looks is enough. We're looking for a point of view, not volume.",
  },
  {
    q: "Who owns my designs?",
    a: "You do. Always. We license your work only for promotional use related to the competition — never for production or resale without a separate, paid agreement.",
  },
  {
    q: "Can international designers apply?",
    a: "Yes. Roughly 40% of our finalists are international. If you make it to the finale we cover travel and a 5-day stipend in New York.",
  },
  {
    q: "What if I don't win?",
    a: "Every semi-finalist receives a 1:1 portfolio review with a jury member, access to our sponsor directory, and a year of priority entry to our workshops.",
  },
  {
    q: "Are there any application fees?",
    a: "There is a standard registration fee of 5000; however, need-based waivers are available to ensure talent is never sidelined by financial constraints.",
  },
  {
    q: "What categories can I enter?",
    a: "We invite submissions in Ready-to-Wear, Luxury Couture, and Artisanal Streetwear. We prioritize Slow Fashion principles and exceptional craftsmanship that translates traditional techniques for a sophisticated Global audience.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-6 md:px-10 py-24 md:py-32 border-t border-border/60">
      <div className="mx-auto max-w-[1100px] grid md:grid-cols-[280px_1fr] gap-10">
        <div>
          <div className="mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Questions / 006
          </div>
          <h2 className="display text-4xl md:text-5xl uppercase leading-[0.9]">
            We get asked
            <br />
            a lot.
          </h2>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {QA.map((row, i) => (
            <AccordionItem key={i} value={`q-${i}`} className="border-b border-border">
              <AccordionTrigger className="text-left display uppercase text-lg md:text-xl py-6 hover:no-underline hover:text-neon">
                <span className="flex items-baseline gap-4">
                  <span className="mono text-xs text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{row.q}</span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="font-serif text-base md:text-lg text-muted-foreground leading-snug pb-6 pl-10">
                {row.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
