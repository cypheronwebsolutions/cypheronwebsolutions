import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Palette, Image, Layout, Sparkles } from "lucide-react";

const Portfolio = () => {
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
            Personal Portfolio & <span className="text-accent">Showcase</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Modern, polished sites that highlight your work, services, and story—ideal for freelancers and small businesses.
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
                <Image className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Project Showcases</h3>
                <p className="text-sm text-muted-foreground">
                  Beautiful galleries to display your best work.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Palette className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Custom Design</h3>
                <p className="text-sm text-muted-foreground">
                  Unique, professional layouts that reflect your style.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Layout className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Easy Updates</h3>
                <p className="text-sm text-muted-foreground">
                  Simple content management for adding new projects.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Sparkles className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Stand Out</h3>
                <p className="text-sm text-muted-foreground">
                  Make a lasting impression with stunning visuals.
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
                "Custom portfolio design tailored to your brand",
                "Project showcase with image galleries",
                "About page to tell your story",
                "Services or offerings section",
                "Contact form and social media links",
                "Testimonials and client reviews",
                "Blog or case studies (optional)",
                "Mobile-responsive design",
                "SEO optimization",
                "Fast loading performance",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Showcase Your Work?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a stunning portfolio that attracts clients and opportunities.
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

export default Portfolio;
