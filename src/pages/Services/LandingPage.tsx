import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Target, Zap, TrendingUp } from "lucide-react";

const LandingPage = () => {
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
            Landing Page <span className="text-accent">Development</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Single-page sites focused on one clear goal—perfect for campaigns, product launches, and lead generation.
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
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Conversion-Focused</h3>
                <p className="text-sm text-muted-foreground">
                  Every element designed to guide visitors toward your primary goal.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized for speed to keep visitors engaged and reduce bounce rates.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Lead Capture</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic forms and CTAs to maximize lead generation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <CheckCircle2 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">A/B Testing Ready</h3>
                <p className="text-sm text-muted-foreground">
                  Built for experimentation and continuous optimization.
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
                "Conversion-optimized design with clear call-to-actions",
                "Mobile-first responsive implementation",
                "Fast loading performance (<2 seconds)",
                "Lead capture forms with validation",
                "Analytics integration for tracking",
                "SEO optimization for search visibility",
                "Social proof elements (testimonials, logos)",
                "Professional copywriting guidance",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Convert More Visitors?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create a high-converting landing page that turns your traffic into customers.
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

export default LandingPage;
