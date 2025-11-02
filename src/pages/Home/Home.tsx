import HeroSection from "./HeroSection.tsx"
import WebTypesSection from "./WebTypesSection.tsx"
import WhyChooseSection from "./WhyChooseSection.tsx";
import ProvenResults from "./ProvenResults"
import ProcessSection from "./ProcessSection.tsx";
import FAQ from "./FAQ.tsx";
import CTA from "@/components/CTA.tsx"



const Home = () => {
  return (
      <div className="min-h-screen flex flex-col">
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
  );
};

export default Home;
