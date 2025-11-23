import {Card, CardContent} from "@/components/ui/card.tsx";
import {Palette, Smartphone, Target, Zap} from "lucide-react";

const WhyChooseSection = () => {
  return (
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Businesses Choose Cypheron
            </h2>
            <p className="text-muted-foreground">
              We don&apos;t just ship websites—we design fast, modern experiences
              that help you win more leads, bookings, and sales.
            </p>
          </div>

          {/* Cards wrapper */}
          <div className="bg-muted/40 rounded-3xl p-6 md:p-10">
            <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* CARD 1 */}
              <Card
                  className="
                group
                border border-border/60
                shadow-sm
                bg-background/80 backdrop-blur
                transition-all duration-300 ease-out
                hover:shadow-xl
                hover:scale-[1.20]
                hover:-translate-y-1
              "
              >
                <CardContent className="p-6 text-center flex flex-col items-center justify-center min-h-[220px]">
                  {/* Icon + Heading wrapper */}
                  <div
                      className="
                    flex flex-col items-center
                    transition-transform duration-300 ease-out
                    group-hover:-translate-y-3
                  "
                  >
                    <div
                        className="
                      h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-3
                      transition-transform duration-300 ease-out
                      group-hover:scale-75
                    "
                    >
                      <Palette
                          className="
                        h-9 w-9 text-accent
                        transition-transform duration-300 ease-out
                        group-hover:scale-90
                      "
                      />
                    </div>

                    <h3
                        className="
                      font-semibold text-base md:text-lg
                      transition-transform duration-300 ease-out
                    "
                    >
                      Standout Design
                    </h3>
                  </div>

                  {/* Description */}
                  <p
                      className="
                    text-sm text-muted-foreground text-center
                    mt-0
                    opacity-0 translate-y-2
                    max-h-0 overflow-hidden
                    transition-all duration-300 ease-out
                    group-hover:mt-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:max-h-32
                  "
                  >
                    Clean, modern visuals tailored to your brand so you look
                    professional and memorable from the first click.
                  </p>
                </CardContent>
              </Card>

              {/* CARD 2 */}
              <Card
                  className="
                group
                border border-border/60
                shadow-sm
                bg-background/80 backdrop-blur
                transition-all duration-300 ease-out
                hover:shadow-xl
                hover:scale-[1.20]
                hover:-translate-y-1
              "
              >
                <CardContent className="p-6 text-center flex flex-col items-center justify-center min-h-[220px]">
                  <div
                      className="
                    flex flex-col items-center
                    transition-transform duration-300 ease-out
                    group-hover:-translate-y-3
                  "
                  >
                    <div
                        className="
                      h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-3
                      transition-transform duration-300 ease-out
                      group-hover:scale-75
                    "
                    >
                      <Smartphone
                          className="
                        h-9 w-9 text-accent
                        transition-transform duration-300 ease-out
                        group-hover:scale-90
                      "
                      />
                    </div>

                    <h3
                        className="
                      font-semibold text-base md:text-lg
                      transition-transform duration-300 ease-out
                    "
                    >
                      Built for Every Screen
                    </h3>
                  </div>

                  <p
                      className="
                    text-sm text-muted-foreground text-center
                    mt-0
                    opacity-0 translate-y-2
                    max-h-0 overflow-hidden
                    transition-all duration-300 ease-out
                    group-hover:mt-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:max-h-32
                  "
                  >
                    Mobile-first layouts that feel smooth on phones, tablets, and
                    desktops—no pinching, zooming, or awkward layouts.
                  </p>
                </CardContent>
              </Card>

              {/* CARD 3 */}
              <Card
                  className="
                group
                border border-border/60
                shadow-sm
                bg-background/80 backdrop-blur
                transition-all duration-300 ease-out
                hover:shadow-xl
                hover:scale-[1.20]
                hover:-translate-y-1
              "
              >
                <CardContent className="p-6 text-center flex flex-col items-center justify-center min-h-[220px]">
                  <div
                      className="
                    flex flex-col items-center
                    transition-transform duration-300 ease-out
                    group-hover:-translate-y-3
                  "
                  >
                    <div
                        className="
                      h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-3
                      transition-transform duration-300 ease-out
                      group-hover:scale-75
                    "
                    >
                      <Zap
                          className="
                        h-9 w-9 text-accent
                        transition-transform duration-300 ease-out
                        group-hover:scale-90
                      "
                      />
                    </div>

                    <h3
                        className="
                      font-semibold text-base md:text-lg
                      transition-transform duration-300 ease-out
                    "
                    >
                      Blazing Fast Experience
                    </h3>
                  </div>

                  <p
                      className="
                    text-sm text-muted-foreground text-center
                    mt-0
                    opacity-0 translate-y-2
                    max-h-0 overflow-hidden
                    transition-all duration-300 ease-out
                    group-hover:mt-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:max-h-32
                  "
                  >
                    Optimized for speed so pages load quickly, reduce drop-offs,
                    and keep visitors exploring your content.
                  </p>
                </CardContent>
              </Card>

              {/* CARD 4 */}
              <Card
                  className="
                group
                border border-border/60
                shadow-sm
                bg-background/80 backdrop-blur
                transition-all duration-300 ease-out
                hover:shadow-xl
                hover:scale-[1.20]
                hover:-translate-y-1
              "
              >
                <CardContent className="p-6 text-center flex flex-col items-center justify-center min-h-[220px]">
                  <div
                      className="
                    flex flex-col items-center
                    transition-transform duration-300 ease-out
                    group-hover:-translate-y-3
                  "
                  >
                    <div
                        className="
                      h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mb-3
                      transition-transform duration-300 ease-out
                      group-hover:scale-75
                    "
                    >
                      <Target
                          className="
                        h-9 w-9 text-accent
                        transition-transform duration-300 ease-out
                        group-hover:scale-90
                      "
                      />
                    </div>

                    <h3
                        className="
                      font-semibold text-base md:text-lg
                      transition-transform duration-300 ease-out
                    "
                    >
                      SEO-Ready Foundation
                    </h3>
                  </div>

                  <p
                      className="
                    text-sm text-muted-foreground text-center
                    mt-0
                    opacity-0 translate-y-2
                    max-h-0 overflow-hidden
                    transition-all duration-300 ease-out
                    group-hover:mt-3
                    group-hover:opacity-100
                    group-hover:translate-y-0
                    group-hover:max-h-32
                  "
                  >
                    Built with SEO best practices in mind so you&apos;re easier to
                    find on Google and ready for future growth.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
  );
};

export default WhyChooseSection;