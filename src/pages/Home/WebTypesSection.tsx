import React, { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Building2,
  Globe,
  ShoppingCart,
  BarChart3,
  X,
  Blocks,
} from "lucide-react";
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
    desc: "Single-page sites focused on one clear goal—perfect for campaigns, product launches, and lead generation.",
    bullets: [
      "Conversion-focused layouts",
      "Optimized for lead capture",
      "Mobile-first implementation",
      "Fast, lightweight performance",
    ],
  },
  {
    icon: Building2,
    title: "Corporate Website",
    desc: "Professional multi-page sites that build trust, communicate your story, and support long-term brand growth.",
    bullets: [
      "Structured for clarity and depth",
      "Easy content management (CMS-ready)",
      "SEO-friendly architecture",
      "Consistent brand look and feel",
    ],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce Site",
    desc: "Scalable online stores designed to make browsing, buying, and repeat purchases effortless for your customers.",
    bullets: [
      "Secure payment integration",
      "Inventory & order management",
      "Customer account & checkout flows",
      "Analytics-ready for sales insights",
    ],
  },
  {
    icon: Globe,
    title: "Personal Portfolio / Showcase",
    desc: "Modern, polished sites that highlight your work, services, and story—ideal for freelancers and small businesses.",
    bullets: [
      "Project & service showcases",
      "Clean, professional layouts",
      "Simple content editing",
      "Contact forms & call-to-actions",
    ],
  },
  {
    icon: BarChart3,
    title: "Digital Marketing, SEO & Analytics",
    desc: "Ongoing support to help you get found, understand your traffic, and turn visitors into loyal customers.",
    bullets: [
      "On-page & technical SEO setup",
      "Performance and traffic reporting",
      "Ad and campaign tracking support",
      "Content and conversion insights",
    ],
  },
  {
    icon: Blocks,
    title: "UI/UX",
    desc: "Thoughtfully crafted interfaces that feel intuitive, reduce friction, and keep users engaged with your product.",
    bullets: [
      "User journeys and flows",
      "Wireframes & interactive prototypes",
      "Design systems & components",
      "UX reviews and improvement plans",
    ],
  },
];

function FlippableCard({ item }: { item: CardItem }) {
  const { icon: Icon, title, desc, bullets } = item;
  const [flipped, setFlipped] = useState(false);

  return (
      <Card
          data-card
          onClick={() => {
            if (!flipped) setFlipped(true); // click anywhere on card (front) to flip
          }}
          className={[
            "shrink-0",
            "border-0 hover:shadow-xl transition-transform duration-300 hover:-translate-y-1",
            "min-w-[260px] md:min-w-[320px] rounded-xl overflow-hidden",
            "snap-start",
          ].join(" ")}
      >
        <CardContent className="p-0 h-[300px] md:h-[340px] relative">
          <div className="relative w-full h-full [perspective:1000px]">
            <div
                className="relative h-full w-full transition-transform duration-500 transform-gpu [transform-style:preserve-3d]"
                style={{ transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)" }}
            >
              {/* FRONT */}
              <div
                  className="absolute inset-0 bg-primary text-primary-foreground rounded-xl flex flex-col justify-between p-6 [backface-visibility:hidden] cursor-pointer"
                  aria-hidden={flipped}
              >
                <div>
                  <Icon className="h-10 w-10 mb-4 opacity-90" />
                  <h3 className="text-lg md:text-xl font-semibold leading-tight">
                    {title}
                  </h3>
                </div>
                {/* Plus is a visual cue; click anywhere flips */}
                <Button
                    size="icon"
                    variant="secondary"
                    className="self-end rounded-full w-9 h-9 pointer-events-none"
                >
                  +
                </Button>
              </div>

              {/* BACK */}
              <div
                  id={`${title}-details`}
                  className="absolute inset-0 bg-gray-200 text-card-foreground rounded-xl flex flex-col justify-between p-6 gap-4 [backface-visibility:hidden]"
                  style={{ transform: "rotateY(180deg)" }}
                  aria-hidden={!flipped}
              >
                <div>
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{desc}</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {bullets.map((b, i) => (
                        <li key={i}>• {b}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex justify-between items-center">
                  <Button
                      size="sm"
                      className="bg-primary text-primary-foreground hover:bg-primary/90"
                      // you can wire up navigation or modal later
                  >
                    Learn More
                  </Button>
                  <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent card click from re-triggering
                        setFlipped(false);
                      }}
                  >
                    <X className="w-5 h-5" />
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
      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What We Offer
            </h2>
            <p>Explore our range of crafted web and digital solutions.</p>
          </div>

          {/* Arrow controls */}
          <div className="hidden md:flex items-center gap-3 justify-end mb-4">
            <Button
                variant="outline"
                size="icon"
                onClick={() => scrollStep(-1)}
                aria-label="Scroll left"
            >
              ‹
            </Button>
            <Button
                variant="outline"
                size="icon"
                onClick={() => scrollStep(1)}
                aria-label="Scroll right"
            >
              ›
            </Button>
          </div>

          <div className="relative">
            {/* Horizontal scroll row */}
            <div
                ref={scrollerRef}
                className={[
                  "grid grid-flow-col auto-cols-[minmax(260px,320px)] md:auto-cols-[minmax(300px,360px)]",
                  "gap-8 overflow-x-auto scroll-smooth snap-x snap-mandatory px-1 py-2",
                  "[-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
                  "cursor-grab active:cursor-grabbing",
                ].join(" ")}
                role="region"
                aria-label="Website types carousel"
                tabIndex={0}
            >
              {cards.map((item, idx) => (
                  <FlippableCard key={idx} item={item} />
              ))}
            </div>
          </div>

          <p className="mt-4 text-center text-xs text-muted-foreground md:hidden select-none">
            Tap a card → Learn More → Flip. Swipe to view more →
          </p>
        </div>
      </section>
  );
};

export default WebTypesSection;