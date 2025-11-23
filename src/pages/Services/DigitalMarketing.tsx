import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, TrendingUp, Search, Target, BarChart3 } from "lucide-react";

const DigitalMarketing = () => {
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
            Digital Marketing, SEO & <span className="text-accent">Analytics</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Ongoing support to help you get found, understand your traffic, and turn visitors into loyal customers.
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
                <Search className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">SEO Optimization</h3>
                <p className="text-sm text-muted-foreground">
                  Technical and on-page SEO to improve rankings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <BarChart3 className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed performance tracking and insights.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Target className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Ad Campaigns</h3>
                <p className="text-sm text-muted-foreground">
                  Strategic Google and social media advertising.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <TrendingUp className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Growth Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Data-driven strategies to scale your business.
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
                "On-page and technical SEO optimization",
                "Keyword research and strategy",
                "Google Analytics setup and configuration",
                "Conversion tracking and goal setup",
                "Monthly performance reports",
                "Google Ads campaign management",
                "Facebook and Instagram ad campaigns",
                "Content strategy and optimization",
                "Competitor analysis",
                "Local SEO optimization",
                "Link building strategies",
                "Ongoing optimization and A/B testing",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Online Presence?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's develop a data-driven marketing strategy that delivers measurable results.
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

export default DigitalMarketing;
