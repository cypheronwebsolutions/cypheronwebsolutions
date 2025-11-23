import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Building2, FileText, Shield, Search } from "lucide-react";

const CorporateWebsite = () => {
  return (
    <div className="flex flex-col">
      {/* Back Navigation */}
      <section className="container mx-auto px-4 pt-8">
        <Link to="/services">
          <Button variant="ghost" size="sm" className="mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>
      </section>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Corporate Website <span className="text-accent">Development</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Professional multi-page sites that build trust, communicate your story, and support long-term brand growth.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6">
                <Building2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Professional Design</h3>
                <p className="text-sm text-muted-foreground">
                  Polished, credible design that reflects your brand values.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <FileText className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">CMS Integration</h3>
                <p className="text-sm text-muted-foreground">
                  Easy content management system for updating your site.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Search className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">SEO Optimized</h3>
                <p className="text-sm text-muted-foreground">
                  Built for search engines to help customers find you.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Shield className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Brand Consistency</h3>
                <p className="text-sm text-muted-foreground">
                  Cohesive design system across all pages and touchpoints.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">What's Included</h2>
            <div className="space-y-4">
              {[
                "Custom multi-page design (Home, About, Services, Contact, etc.)",
                "Responsive design for all devices",
                "Content management system (CMS) integration",
                "SEO-friendly architecture and metadata",
                "Professional copywriting support",
                "Contact forms and lead capture",
                "Blog or news section (optional)",
                "Integration with existing business tools",
                "Performance optimization",
                "Security best practices",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-accent mt-1 shrink-0" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Establish Your Brand Online?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build a professional website that tells your story and grows with your business.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default CorporateWebsite;
