import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Building2, ShoppingCart, Activity, Users, BarChart, Search, Facebook, Mail } from "lucide-react";


const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive web solutions designed to grow your business and maximize your digital presence.
          </p>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Types</h2>
            <p className="text-muted-foreground">Choose the perfect solution for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-muted-foreground mb-6" />
                <h3 className="text-xl font-bold mb-4">Landing Page</h3>
                <p className="text-sm text-muted-foreground mb-6">
                  High-converting single-page websites designed to capture leads and drive specific actions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li>• Conversion-optimized design</li>
                  <li>• A/B testing ready</li>
                  <li>• Mobile responsive</li>
                  <li>• Fast loading</li>
                </ul>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-muted-foreground mb-6" />
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
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Quote
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-8">
                <ShoppingCart className="h-12 w-12 text-muted-foreground mb-6" />
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
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                  Get Quote
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics Report Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics Report</h2>
            <p className="text-muted-foreground">Data-driven insights to optimize your business performance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-8">
                <Activity className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-4">Custom Event Tracking</h3>
                <p className="text-sm text-muted-foreground">
                  Track specific user actions and behaviors to understand your audience better.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <Users className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-4">Audience List</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed audience segmentation and analysis for targeted marketing campaigns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <BarChart className="h-10 w-10 text-muted-foreground mb-4" />
                <h3 className="text-xl font-bold mb-4">E-commerce Report</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive sales analytics, conversion tracking, and revenue optimization.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Website Marketing Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Marketing</h2>
            <p className="text-muted-foreground">Drive traffic, increase visibility, and grow your online presence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-8 text-center">
                <Search className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Google Ads</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic Google Ads campaigns to drive qualified traffic and conversions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Facebook className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">Facebook Ads</h3>
                <p className="text-sm text-muted-foreground">
                  Targeted social media advertising to reach your ideal customers on Facebook and Instagram.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Search className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">SEO</h3>
                <p className="text-sm text-muted-foreground">
                  Search engine optimization to improve your website's visibility and organic traffic.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <Mail className="h-12 w-12 text-accent mx-auto mb-6" />
                <h3 className="text-xl font-bold mb-4">GMC for E-commerce</h3>
                <p className="text-sm text-muted-foreground">
                  Google Merchant Center setup and optimization for e-commerce product visibility.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss which services are right for your business and create a custom solution that drives results.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
