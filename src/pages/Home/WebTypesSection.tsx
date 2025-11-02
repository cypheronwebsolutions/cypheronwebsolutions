import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

type CardItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  desc: string;
  bullets: string[];
};

const cards: CardItem[] = [
  {
    icon: Globe,
    title: "Landing Page",
    desc: "High-converting single-page websites designed to capture leads and drive specific actions.",
    bullets: ["Conversion-optimized design", "A/B testing ready", "Mobile responsive", "Fast loading"],
  },
  {
    icon: Building2,
    title: "Corporate Website",
    desc: "Professional multi-page websites that establish credibility and showcase your brand.",
    bullets: ["Professional design", "Content management", "SEO optimized", "Brand consistency"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Site",
    desc: "Complete online stores with payment processing, inventory management, and more.",
    bullets: ["Payment integration", "Inventory management", "Order tracking", "Customer accounts"],
  },
  {
    icon: Globe,
    title: "Portfolio / Showcase",
    desc: "Sleek, performance-focused sites to highlight your work and case studies.",
    bullets: ["Gallery & case studies", "CMS-ready", "SEO & analytics", "Contact integrations"],
  },
  {
    icon: Building2,
    title: "Company Microsite",
    desc: "Focused minisites for campaigns, launches, or hiring with tight messaging.",
    bullets: ["Fast to launch", "Brand-consistent", "Trackable goals", "Responsive by default"],
  },
];

function FlippableCard({ item }: { item: CardItem }) {
  const { icon: Icon, title, desc, bullets } = item;
  const [flipped, setFlipped] = useState(false);

  return (
      <Card
          data-card
          className="border-2 hover:border-primary transition-colors snap-start min-w-[260px] md:min-w-[320px]"
      >
        <CardContent className="p-0 h-[320px] md:h-[380px]">
          <div className="relative w-full h-full [perspective:1000px]">
            <div
                className="relative h-full w-full transition-transform duration-500 transform-gpu [transform-style:preserve-3d]"
                style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
              {/* FRONT — blue / primary */}
              <div
                  className="absolute inset-0 bg-primary text-primary-foreground rounded-md flex flex-col items-start justify-center p-6 md:p-8 gap-4 [backface-visibility:hidden]"
                  aria-hidden={flipped}
              >
                <Icon className="h-12 w-12 opacity-90" />
                <h3 className="text-xl font-bold">{title}</h3>
                <Button
                    variant="secondary"
                    onClick={() => setFlipped(true)}
                    className="mt-2"
                    aria-expanded={flipped}
                    aria-controls={`${title}-details`}
                >
                  Learn More
                </Button>
              </div>

              {/* BACK — normal card */}
              <div
                  id={`${title}-details`}
                  className="absolute inset-0 bg-card text-card-foreground rounded-md flex flex-col justify-between p-6 md:p-8 gap-4 [backface-visibility:hidden]"
                  style={{ transform: "rotateY(180deg)" }}
                  aria-hidden={!flipped}
              >
                <div>
                  <h3 className="text-xl font-bold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{desc}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {bullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-3 pt-2">
                  <Button variant="outline" onClick={() => setFlipped(false)}>
                    Back
                  </Button>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
  );
}

const WebTypesSection = () => {
  const scrollerRef = useRef<HTMLDivElement | null>(null);

  const scrollByAmount = (amt: number) => {
    const el = scrollerRef.current;
    if (!el) return;
    el.scrollTo({ left: el.scrollLeft + amt, behavior: "smooth" });
  };

  const scrollStep = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const firstCard = el.querySelector<HTMLElement>("[data-card]");
    const cardWidth = firstCard ? firstCard.offsetWidth : el.clientWidth * 0.8;
    scrollByAmount(dir * (cardWidth + 24));
  };

  return (
      <section className="relative bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Website Types We Specialize In
            </h2>
            <p className="text-muted-foreground">
              Choose the perfect solution for your business needs
            </p>
          </div>

          {/* Arrow controls */}
          <div className="hidden md:flex items-center gap-3 justify-end mb-4">
            <Button variant="outline" size="icon" onClick={() => scrollStep(-1)} aria-label="Scroll left">
              ‹
            </Button>
            <Button variant="outline" size="icon" onClick={() => scrollStep(1)} aria-label="Scroll right">
              ›
            </Button>
          </div>

          {/* Edge gradients */}
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-8 md:w-12 bg-gradient-to-r from-muted to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-8 md:w-12 bg-gradient-to-l from-muted to-transparent" />

            {/* Horizontal scroller */}
            <div
                ref={scrollerRef}
                role="region"
                aria-label="Website types carousel"
                tabIndex={0}
                className={[
                  "grid grid-flow-col auto-cols-[minmax(460px,520px)] md:auto-cols-[minmax(400px,460px)]",
                  "gap-4 overflow-x-auto overscroll-x-contain scroll-smooth snap-x snap-mandatory px-1 py-2",
                  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                  "cursor-grab active:cursor-grabbing",
                ].join(" ")}
            >
              {cards.map((item, idx) => (
                  <FlippableCard key={idx} item={item} />
              ))}
            </div>
          </div>

          {/* Mobile hint */}
          <p className="mt-4 text-center text-xs text-muted-foreground md:hidden select-none">
            Tap a card → Learn More → Flip. Swipe to view more →
          </p>
        </div>
      </section>
  );
};

export default WebTypesSection;