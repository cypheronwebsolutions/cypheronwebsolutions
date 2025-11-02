import HeroSection from "./HeroSection.tsx"
import WebTypesSection from "./WebTypesSection.tsx"
import WhyChooseSection from "./WhyChooseSection.tsx";
import ProvenResults from "./ProvenResults"
import ProcessSection from "./ProcessSection.tsx";
import FAQ from "./FAQ.tsx";
import CTA from "@/components/CTA.tsx"
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const Home = () => {
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

    // Add scroll-triggered animations for sections
    const sections = contentRef.current.querySelectorAll('section, div[class*="Section"]');
    
    sections.forEach((section) => {
      gsap.fromTo(
        section,
        {
          opacity: 0.8,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            scrub: 1,
          },
        }
      );
    });

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div ref={smoothWrapperRef} id="smooth-wrapper" className="min-h-screen">
      <div ref={contentRef} id="smooth-content" className="flex flex-col">
        {/* Hero Section */}
        <HeroSection/>

        {/* Website Types Section */}
        <WebTypesSection/>

        {/* Why Choose Section */}
        <WhyChooseSection/>

        {/* Proven Results */}
        <ProvenResults/>

        {/* Process Section */}
        <ProcessSection/>

        {/* FAQ Section */}
        <FAQ/>

        {/* CTA Section */}
        <CTA/>
      </div>
    </div>
  );
};

export default Home;
