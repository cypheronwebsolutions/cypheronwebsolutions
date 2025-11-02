import {Card, CardContent} from "@/components/ui/card.tsx";

const ProvenResults = () => {
  return (
      <div>
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Proven Results</h2>
              <p className="text-muted-foreground">Numbers that speak for themselves</p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Delivered</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
  )
}

export default ProvenResults;