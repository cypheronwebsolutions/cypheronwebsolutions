import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, Palette, Users, Layers, Zap } from "lucide-react";

const UIUX = () => {
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
            UI/UX <span className="text-accent">Design</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Thoughtfully crafted interfaces that feel intuitive, reduce friction, and keep users engaged with your product.
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
                <Users className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">User Research</h3>
                <p className="text-sm text-muted-foreground">
                  Deep understanding of your users' needs and behaviors.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Palette className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Visual Design</h3>
                <p className="text-sm text-muted-foreground">
                  Beautiful, modern interfaces that delight users.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Layers className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Design Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Scalable component libraries for consistency.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Zap className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Prototyping</h3>
                <p className="text-sm text-muted-foreground">
                  Interactive prototypes to test and validate ideas.
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
                "User research and persona development",
                "User journey mapping and flow diagrams",
                "Wireframes and information architecture",
                "High-fidelity mockups and visual design",
                "Interactive prototypes for testing",
                "Design system and component library",
                "Usability testing and feedback sessions",
                "Accessibility compliance (WCAG)",
                "Responsive design for all devices",
                "Design documentation and guidelines",
                "Handoff to development team",
                "Post-launch UX reviews and improvements",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Create Amazing User Experiences?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's design interfaces that users love and that drive your business goals.
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

export default UIUX;
