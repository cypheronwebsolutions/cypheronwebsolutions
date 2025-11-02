import ImageScatterSection from "./ImageScatterSection.tsx";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, type Variants } from "framer-motion";

// animation variants for the headline
const textVariant: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      // narrow to a 4-tuple instead of number[]
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

// Main hero section
const HeroSection = () => {
  return (
      <div>
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center text-center min-h-screen p-20">
          <p className="text-sm md:text-base text-muted-foreground mb-4 flex items-center gap-2 justify-center">
            <Zap className="h-4 w-4" />
            Premium Web Solutions
          </p>

          {/* Animated heading */}
          <h1 className="text-4xl md:text-8xl lg:text-[150px] font-bold mb-6 leading-tight overflow-hidden">
            <motion.span
                className="block"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={0}
            >
              We Design.
            </motion.span>
            <motion.span
                className="block text-accent"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={1}
            >
              We Build.
            </motion.span>
            <motion.span
                className="block"
                variants={textVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={2}
            >
              We Scale.
            </motion.span>
          </h1>

          <motion.p
              className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              viewport={{ once: true }}
          >
            Transform your digital presence with high-end web solutions that drive
            real business growth.
          </motion.p>

          <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.6 }}
              viewport={{ once: true }}
          >
            <Link to="/contact">
              <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Start Your Project
              </Button>
            </Link>
          </motion.div>
        </section>

        {/* Scattered Image Section */}
        <ImageScatterSection />
      </div>
  );
};

export default HeroSection;