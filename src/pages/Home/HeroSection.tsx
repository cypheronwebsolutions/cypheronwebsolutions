import ImageScatterSection from "./ImageScatterSection.tsx";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";


// Main hero section
const HeroSection = () => {
  return (
      <div>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen p-20">
          <p className="text-sm md:text-base text-muted-foreground mb-4 flex items-center gap-2 justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <Zap className="h-4 w-4" />
            Premium Web Solutions
          </p>

          <h1 className="text-4xl md:text-8xl lg:text-[150px] font-bold mb-6 leading-tight animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            We Design.
            <br />
            <span className="text-accent">We Build.</span>
            <br />
            We Scale.
          </h1>

          <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Transform your digital presence with high-end web solutions that drive
            real business growth.
          </p>

          <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <Link to="/contact">
              <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 hover-scale"
              >
                Start Your Project
              </Button>
            </Link>
          </div>
        </section>

        {/* Scattered Image Section */}
        <ImageScatterSection />
      </div>
  );
};

export default HeroSection;