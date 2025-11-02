import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import cypheronLogo from "@/assets/cypheron_logo.png";
import cypheronLogo2 from "@/assets/cypheron_logo2.png";

const HeroSection = () => {
  const [visibleImages, setVisibleImages] = useState<{ [key: string]: boolean }>({});

  const handleHover = (imageId: string) => {
    setVisibleImages(prev => ({ ...prev, [imageId]: true }));
    
    setTimeout(() => {
      setVisibleImages(prev => ({ ...prev, [imageId]: false }));
    }, 2000);
  };

  const hoverAreas = [
    { id: "img1", top: "15%", left: "10%", image: cypheronLogo },
    { id: "img2", top: "25%", right: "15%", image: cypheronLogo2 },
    { id: "img3", top: "60%", left: "20%", image: cypheronLogo },
    { id: "img4", top: "70%", right: "25%", image: cypheronLogo2 },
    { id: "img5", top: "40%", left: "5%", image: cypheronLogo2 },
    { id: "img6", top: "50%", right: "8%", image: cypheronLogo },
  ];

  return (
      <section className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 overflow-hidden">
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

        {/* Hover trigger areas */}
        {hoverAreas.map((area) => (
          <div
            key={area.id}
            className="absolute w-32 h-32 cursor-pointer z-10"
            style={{
              top: area.top,
              left: area.left,
              right: area.right,
            }}
            onMouseEnter={() => handleHover(area.id)}
          />
        ))}

        {/* Pop-up images */}
        {hoverAreas.map((area) => (
          <img
            key={`${area.id}-img`}
            src={area.image}
            alt="Cypheron"
            className={`absolute w-32 md:w-40 pointer-events-none transition-all duration-300 ${
              visibleImages[area.id] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
            style={{
              top: area.top,
              left: area.left,
              right: area.right,
              zIndex: 20,
            }}
          />
        ))}
      </section>
  );
};

export default HeroSection;