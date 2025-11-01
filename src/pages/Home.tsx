import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Globe, Building2, ShoppingCart, Palette, Smartphone, Zap, Target } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4" />
              Success With Results
            </p>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              We Design.<br />
              <span className="text-accent">We Build.</span><br />
              We Scale.
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Transform your digital presence with high-end web solutions that drive real business growth.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="w-64 h-64 relative">
              <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-6"></div>
              <div className="absolute inset-0 bg-primary rounded-lg flex items-center justify-center">
                <div className="text-primary-foreground text-8xl font-bold">C</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Types Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Website Types We Specialize In</h2>
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
                <Button variant="outline" className="w-full">Learn More</Button>
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
                <Button variant="outline" className="w-full">Learn More</Button>
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
                <Button variant="outline" className="w-full">Learn More</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Cypheron?</h2>
            <p className="text-muted-foreground">We deliver exceptional web solutions with a focus on results</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <Palette className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Modern Design</h3>
                <p className="text-sm text-muted-foreground">
                  Cutting-edge designs that captivate and convert your audience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Smartphone className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Mobile First</h3>
                <p className="text-sm text-muted-foreground">
                  Responsive websites that work perfectly on any device.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">Fast Loading</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized performance for better user experience.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-accent mx-auto mb-4" />
                <h3 className="font-bold mb-2">SEO Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Built with search engine optimization in mind.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Proven Results */}
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

      {/* Process Section */}
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
                  We understand your goals, target audience, and requirements to create the perfect strategy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-primary mb-4">2</div>
                <h3 className="text-xl font-bold mb-4">Design & Development</h3>
                <p className="text-muted-foreground">
                  Our team crafts beautiful, functional websites using the latest technologies and best practices.
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

      {/* FAQ Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Get answers to common questions about our services</p>
          </div>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left">
                How long does it take to build a website?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Typically 4-6 weeks depending on complexity. We provide detailed timelines during our initial consultation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Do you provide ongoing maintenance?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Yes, we offer comprehensive maintenance packages to keep your website secure, updated, and performing optimally.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left">
                Can you help with digital marketing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Absolutely! We offer Google Ads, Facebook Ads, SEO services, and e-commerce marketing solutions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
              <AccordionTrigger className="text-left">
                What's included in your e-commerce solutions?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Complete setup with product management, payment integration, analytics, SEO, and ongoing support for a seamless shopping experience.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Digital Presence?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Get a free consultation today.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Get Started Today
              </Button>
            </Link>
            <Button size="lg" variant="outline">
              Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              Guaranteed Quality
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
