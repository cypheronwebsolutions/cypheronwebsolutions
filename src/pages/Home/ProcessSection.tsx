import {Card, CardContent} from "@/components/ui/card.tsx";

const ProcessSection = () => {
  return (
      <div>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
              <p className="text-muted-foreground">From concept to launch, we guide you through every step</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-4">1</div>
                  <h3 className="text-xl font-bold mb-4">Discovery & Planning</h3>
                  <p className="text-muted-foreground">
                    We understand your goals, target audience, and requirements to create the perfect
                    strategy.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-4">2</div>
                  <h3 className="text-xl font-bold mb-4">Design & Development</h3>
                  <p className="text-muted-foreground">
                    Our team crafts beautiful, functional websites using the latest technologies and
                    best practices.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-8">
                  <div className="text-3xl font-bold text-primary mb-4">3</div>
                  <h3 className="text-xl font-bold mb-4">Launch & Support</h3>
                  <p className="text-muted-foreground">
                    We deploy your website and provide ongoing support to ensure continued performance.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
  )
}

export default ProcessSection;