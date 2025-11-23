import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, CheckCircle2, ShoppingCart, CreditCard, Package, BarChart } from "lucide-react";

const Ecommerce = () => {
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
            E-commerce <span className="text-accent">Development</span>
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Scalable online stores designed to make browsing, buying, and repeat purchases effortless for your customers.
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
                <CreditCard className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                <p className="text-sm text-muted-foreground">
                  Integrated payment gateways with PCI compliance.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <Package className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Inventory Management</h3>
                <p className="text-sm text-muted-foreground">
                  Real-time stock tracking and automated alerts.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <ShoppingCart className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Seamless Checkout</h3>
                <p className="text-sm text-muted-foreground">
                  Optimized checkout flow to reduce cart abandonment.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <BarChart className="h-12 w-12 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-2">Sales Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive reports and insights into your sales.
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
                "Custom e-commerce design with product catalogs",
                "Secure payment gateway integration (Stripe, PayPal, etc.)",
                "Shopping cart and checkout functionality",
                "Inventory and order management system",
                "Customer account creation and management",
                "Product search and filtering",
                "Order tracking and notifications",
                "Shipping calculator integration",
                "Tax calculation automation",
                "Sales analytics and reporting",
                "Mobile-optimized shopping experience",
                "SEO optimization for product pages",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Launch Your Online Store?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's build an e-commerce platform that drives sales and delights your customers.
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

export default Ecommerce;
