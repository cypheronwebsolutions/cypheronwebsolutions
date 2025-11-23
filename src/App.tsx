import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.tsx";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import LandingPage from "./pages/Services/LandingPage";
import CorporateWebsite from "./pages/Services/CorporateWebsite";
import Ecommerce from "./pages/Services/Ecommerce";
import Portfolio from "./pages/Services/Portfolio";
import DigitalMarketing from "./pages/Services/DigitalMarketing";
import UIUX from "./pages/Services/UIUX";
import Navbar from "@/components/Navbar.tsx";
import Footer from "@/components/Footer.tsx";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const queryClient = new QueryClient();

const App = () => {
  const smoothWrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!smoothWrapperRef.current || !contentRef.current) return;

    // Create ScrollSmoother instance
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapperRef.current,
      content: contentRef.current,
      smooth: 1.5,
      effects: true,
      smoothTouch: 0.1,
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        {/* ✅ Switched to HashRouter to avoid 404s on GitHub Pages */}
        <HashRouter>
          <div ref={smoothWrapperRef} id="smooth-wrapper">
            <div ref={contentRef} id="smooth-content">
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/landing-page" element={<LandingPage />} />
                <Route path="/services/corporate-website" element={<CorporateWebsite />} />
                <Route path="/services/ecommerce" element={<Ecommerce />} />
                <Route path="/services/portfolio" element={<Portfolio />} />
                <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
                <Route path="/services/uiux" element={<UIUX />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
              <Footer />
            </div>
          </div>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;