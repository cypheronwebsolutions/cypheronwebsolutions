import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

const HeroSection = () => {
  return (
      <section className="flex flex-col items-center justify-center text-center min-h-screen px-4">
        <p className="text-sm md:text-base text-muted-foreground mb-4 flex items-center gap-2 justify-center">
          <Zap className="h-4 w-4" />
          Premium Web Solutions
        </p>

        <h1 className="text-6xl md:text-8xl lg:text-[150px] font-bold mb-6 leading-tight">
          We Design.<br />
          <span className="text-accent">We Build.</span><br />
          We Scale.
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl">
          Transform your digital presence with high-end web solutions that drive real business growth.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Your Project
            </Button>
          </Link>
        </div>

        {/* Optional logo at the bottom */}
        {/* <img
        src={CypheronLogo}
        alt="Cypheron Logo"
        className="mt-12 w-40 md:w-60 opacity-90"
      /> */}
      </section>
  );
};

export default HeroSection;