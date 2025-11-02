import {Card, CardContent} from "@/components/ui/card.tsx";
import {Palette, Smartphone, Target, Zap} from "lucide-react";

const WhyChooseSection = () => {
  return (
      <div>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Cypheron?</h2>
              <p className="text-muted-foreground">We deliver exceptional web solutions with a focus on
                results</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-6 text-center">
                  <Palette className="h-12 w-12 text-accent mx-auto mb-4"/>
                  <h3 className="font-bold mb-2">Modern Design</h3>
                  <p className="text-sm text-muted-foreground">
                    Cutting-edge designs that captivate and convert your audience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Smartphone className="h-12 w-12 text-accent mx-auto mb-4"/>
                  <h3 className="font-bold mb-2">Mobile First</h3>
                  <p className="text-sm text-muted-foreground">
                    Responsive websites that work perfectly on any device.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Zap className="h-12 w-12 text-accent mx-auto mb-4"/>
                  <h3 className="font-bold mb-2">Fast Loading</h3>
                  <p className="text-sm text-muted-foreground">
                    Optimized performance for better user experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <Target className="h-12 w-12 text-accent mx-auto mb-4"/>
                  <h3 className="font-bold mb-2">SEO Ready</h3>
                  <p className="text-sm text-muted-foreground">
                    Built with search engine optimization in mind.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
  )
}

export default WhyChooseSection;