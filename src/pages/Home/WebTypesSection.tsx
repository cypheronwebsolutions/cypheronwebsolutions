import {Card, CardContent} from "@/components/ui/card.tsx";
import {Building2, Globe, ShoppingCart} from "lucide-react";
import {Button} from "@/components/ui/button.tsx";

const WebTypesSection = () => {
  return (
      <div>
        <section className="bg-muted py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Types We Specialize In</h2>
              <p className="text-muted-foreground">Choose the perfect solution for your business needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-muted-foreground mb-6"/>
                  <h3 className="text-xl font-bold mb-4">Landing Page</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    High-converting single-page websites designed to capture leads and drive specific
                    actions.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li>• Conversion-optimized design</li>
                    <li>• A/B testing ready</li>
                    <li>• Mobile responsive</li>
                    <li>• Fast loading</li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <Building2 className="h-12 w-12 text-muted-foreground mb-6"/>
                  <h3 className="text-xl font-bold mb-4">Corporate Website</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Professional multi-page websites that establish credibility and showcase your brand.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li>• Professional design</li>
                    <li>• Content management</li>
                    <li>• SEO optimized</li>
                    <li>• Brand consistency</li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="p-8">
                  <ShoppingCart className="h-12 w-12 text-muted-foreground mb-6"/>
                  <h3 className="text-xl font-bold mb-4">E-commerce Site</h3>
                  <p className="text-sm text-muted-foreground mb-6">
                    Complete online stores with payment processing, inventory management, and more.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                    <li>• Payment integration</li>
                    <li>• Inventory management</li>
                    <li>• Order tracking</li>
                    <li>• Customer accounts</li>
                  </ul>
                  <Button variant="outline" className="w-full">Learn More</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
  )
}

export default WebTypesSection;