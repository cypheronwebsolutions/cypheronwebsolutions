import {Zap} from "lucide-react";
import {Link} from "react-router-dom";
import {Button} from "@/components/ui/button.tsx";
import CypheronLogo from "@/assets/cypheron_logo.png";

const HeroSection = () => {
  return (
      <div>
        <section className="container mx-auto px-4 py-20 md:py-32 min-h-screen flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground mb-4 flex items-center gap-2 justify-center md:justify-start">
                <Zap className="h-4 w-4"/>
                Premium Web Solutions
              </p>
              <h1 className="text-7xl md:text-8xl font-bold mb-6">
                We Design.<br/>
                <span className="text-accent">We Build.</span><br/>
                We Scale.
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Transform your digital presence with high-end web solutions that drive real business growth.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
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
              <img
                  src={CypheronLogo}
                  alt="Cypheron Logo"
                  className="w-full h-auto object-contain md:ml-28"
              />
            </div>
          </div>
        </section>
      </div>
  )
}

export default HeroSection;
