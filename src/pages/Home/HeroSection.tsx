import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { useState } from "react";
import cypheronLogo from "@/assets/cypheron_logo.png";
import cypheronLogo2 from "@/assets/cypheron_logo2.png";

const HeroSection = () => {
  const [showImages, setShowImages] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  const handleMouseMove = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    setShowImages(true);
    
    const newTimeoutId = setTimeout(() => {
      setShowImages(false);
    }, 2000);
    
    setTimeoutId(newTimeoutId);
  };

  const images = [
    { id: 1, top: "10%", left: "8%", image: cypheronLogo, rotate: -12, size: "w-28" },
    { id: 2, top: "20%", right: "12%", image: cypheronLogo2, rotate: 15, size: "w-32" },
    { id: 3, top: "35%", left: "15%", image: cypheronLogo2, rotate: -8, size: "w-24" },
    { id: 4, top: "45%", right: "18%", image: cypheronLogo, rotate: 10, size: "w-36" },
    { id: 5, top: "60%", left: "10%", image: cypheronLogo, rotate: -15, size: "w-28" },
    { id: 6, top: "70%", right: "8%", image: cypheronLogo2, rotate: 8, size: "w-32" },
    { id: 7, top: "25%", left: "5%", image: cypheronLogo2, rotate: 12, size: "w-24" },
    { id: 8, top: "55%", right: "5%", image: cypheronLogo, rotate: -10, size: "w-28" },
  ];

  return (
      <section 
        className="relative flex flex-col items-center justify-center text-center min-h-screen px-4 overflow-hidden"
        onMouseMove={handleMouseMove}
      >
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

        {/* Pop-up images scattered irregularly */}
        {images.map((img) => (
          <img
            key={img.id}
            src={img.image}
            alt="Cypheron"
            className={`absolute ${img.size} md:${img.size.replace('w-', 'w-')} pointer-events-none transition-all duration-500 ${
              showImages ? 'opacity-90 scale-100' : 'opacity-0 scale-75'
            }`}
            style={{
              top: img.top,
              left: img.left,
              right: img.right,
              transform: `rotate(${img.rotate}deg)`,
              zIndex: 5,
            }}
          />
        ))}
      </section>
  );
};

export default HeroSection;