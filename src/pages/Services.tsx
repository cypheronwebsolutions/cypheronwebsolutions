import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Building2, ShoppingCart, Activity, Users, BarChart, Search, Facebook, Mail, Blocks, CheckCircle2, ArrowRight, Star } from "lucide-react";

const Services = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our <span className="text-accent">Services</span>
          </h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive web solutions designed to grow your business and maximize your digital presence. From design to deployment, we've got you covered.
          </p>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Development</h2>
            <p className="text-muted-foreground">Choose the perfect solution for your business needs</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Landing Page</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  High-converting single-page websites designed to capture leads and drive specific actions.
                </p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-accent mb-2">Starting at $799</p>
                  <p className="text-xs text-muted-foreground">One-time payment</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Conversion-optimized design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>A/B testing ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Mobile responsive</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Fast loading (&lt;2s)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Lead capture forms</span>
                  </li>
                </ul>
                <Link to="/services/landing-page">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <Building2 className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Corporate Website</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Professional multi-page websites that establish credibility and showcase your brand.
                </p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-accent mb-2">Starting at $1,999</p>
                  <p className="text-xs text-muted-foreground">One-time payment</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Professional design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Content management system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>SEO optimized</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Up to 10 pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Brand consistency</span>
                  </li>
                </ul>
                <Link to="/services/corporate-website">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <ShoppingCart className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">E-commerce Site</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Complete online stores with payment processing, inventory management, and more.
                </p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-accent mb-2">Starting at $3,499</p>
                  <p className="text-xs text-muted-foreground">One-time payment</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Payment integration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Inventory management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Order tracking</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Customer accounts</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Up to 100 products</span>
                  </li>
                </ul>
                <Link to="/services/ecommerce">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <Globe className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Portfolio / Showcase</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Modern sites to highlight your work and services—perfect for freelancers.
                </p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-accent mb-2">Starting at $999</p>
                  <p className="text-xs text-muted-foreground">One-time payment</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Project showcases</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Clean, modern design</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Contact forms</span>
                  </li>
                </ul>
                <Link to="/services/portfolio">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <BarChart className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">Digital Marketing & SEO</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Drive traffic and grow your online presence with data-driven strategies.
                </p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-accent mb-2">From $499/mo</p>
                  <p className="text-xs text-muted-foreground">Monthly retainer</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>SEO optimization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Analytics & reporting</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Ad campaign management</span>
                  </li>
                </ul>
                <Link to="/services/digital-marketing">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-accent transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8">
                <Blocks className="h-12 w-12 text-accent mb-6" />
                <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Intuitive interfaces that keep users engaged with your product.
                </p>
                <div className="mb-6">
                  <p className="text-2xl font-bold text-accent mb-2">Starting at $1,499</p>
                  <p className="text-xs text-muted-foreground">Per project</p>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>User research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Wireframes & prototypes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                    <span>Design systems</span>
                  </li>
                </ul>
                <Link to="/services/uiux">
                  <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Analytics & Marketing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Analytics & Reporting</h2>
            <p className="text-muted-foreground">Data-driven insights to optimize your business performance</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Activity className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-4">Custom Event Tracking</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Track specific user actions and behaviors to understand your audience better.
                </p>
                <p className="text-lg font-semibold text-accent">Included in all plans</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <Users className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-4">Audience Analysis</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Detailed audience segmentation and analysis for targeted marketing campaigns.
                </p>
                <p className="text-lg font-semibold text-accent">Included in all plans</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <BarChart className="h-10 w-10 text-accent mb-4" />
                <h3 className="text-xl font-bold mb-4">E-commerce Reports</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Comprehensive sales analytics, conversion tracking, and revenue optimization.
                </p>
                <p className="text-lg font-semibold text-accent">E-commerce sites only</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Marketing Add-ons</h2>
            <p className="text-muted-foreground">Drive traffic, increase visibility, and grow your online presence</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Search className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Google Ads</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Strategic campaigns to drive qualified traffic.
                </p>
                <p className="text-lg font-semibold text-accent mb-2">From $299/mo</p>
                <p className="text-xs text-muted-foreground">+ ad spend</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Facebook className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">Social Media Ads</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Targeted advertising on Facebook & Instagram.
                </p>
                <p className="text-lg font-semibold text-accent mb-2">From $299/mo</p>
                <p className="text-xs text-muted-foreground">+ ad spend</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Search className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">SEO Services</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Improve visibility and organic traffic.
                </p>
                <p className="text-lg font-semibold text-accent mb-2">From $499/mo</p>
                <p className="text-xs text-muted-foreground">Monthly retainer</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Mail className="h-10 w-10 text-accent mx-auto mb-4" />
                <h3 className="text-lg font-bold mb-3">GMC Setup</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Google Merchant Center for e-commerce.
                </p>
                <p className="text-lg font-semibold text-accent mb-2">$299</p>
                <p className="text-xs text-muted-foreground">One-time setup</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Cypheron?</h2>
            <p className="text-muted-foreground">We deliver results that matter to your business</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">5+ Years Experience</h3>
                <p className="text-sm text-muted-foreground">
                  Proven track record of successful projects
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">100% Satisfaction</h3>
                <p className="text-sm text-muted-foreground">
                  We don't stop until you're completely happy
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Most projects delivered within 2-4 weeks
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Dedicated Support</h3>
                <p className="text-sm text-muted-foreground">
                  Ongoing support and maintenance available
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Let's discuss which services are right for your business and create a custom solution that drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" variant="secondary" className="bg-background text-foreground hover:bg-background/90">
                Get a Free Quote
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              View Our Work
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
