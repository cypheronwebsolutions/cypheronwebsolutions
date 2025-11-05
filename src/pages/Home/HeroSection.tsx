import { useRef } from "react";
import ImageScatterSection from "./ImageScatterSection.tsx";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useReducedMotion, type Variants } from "framer-motion";

// Staggered container = one-by-one fly-in
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { delayChildren: 0.1, staggerChildren: 0.22 },
  },
};

// Each line flies in from bottom → top
const lineVariants: Variants = {
  hidden: { opacity: 0, y: 64 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const prefersReduced = useReducedMotion();

  // Scroll-driven fly-out values
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const START = 0.05;
  const END = 0.85;
  const DIST = 240;

  // Fade the whole hero out on scroll (WRAPPER handles opacity)
  const flyOutOpacity = useTransform(scrollYProgress, [START, END], [1, 0]);

  // Push each line sideways on scroll
  const flyOutX1 = useTransform(scrollYProgress, [START, END], [0, -DIST]);
  const flyOutX2 = useTransform(scrollYProgress, [START, END], [0,  DIST]);
  const flyOutX3 = useTransform(scrollYProgress, [START, END], [0, -DIST]);

  const safeOpacity = prefersReduced ? 1 : flyOutOpacity;
  const safeX = (xVal: never) => (prefersReduced ? 0 : xVal);

  return (
      <div>
        <section
            ref={sectionRef}
            className="relative flex flex-col items-center justify-center text-center min-h-screen p-20"
        >
          <p className="text-sm md:text-base text-muted-foreground mb-4 flex items-center gap-2 justify-center">
            <Zap className="h-4 w-4" />
            Premium Web Solutions
          </p>

          {/* WRAPPER gets the scroll fade-out; children keep their mount fade-in */}
          <motion.div style={{ opacity: safeOpacity }}>
            {/* Heading: staggered fly-in + per-line fly-out X */}
            <motion.h1
                className="text-4xl md:text-8xl lg:text-[150px] font-bold mb-6 leading-tight overflow-hidden"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
              <motion.span
                  className="block"
                  variants={lineVariants}
                  style={{ x: safeX(flyOutX1), willChange: "opacity, transform" }}
              >
                We Design.
              </motion.span>

              <motion.span
                  className="block text-accent"
                  variants={lineVariants}
                  style={{ x: safeX(flyOutX2), willChange: "opacity, transform" }}
              >
                We Build.
              </motion.span>

              <motion.span
                  className="block"
                  variants={lineVariants}
                  style={{ x: safeX(flyOutX3), willChange: "opacity, transform" }}
              >
                We Scale.
              </motion.span>
            </motion.h1>

            <motion.p
                className="text-lg md:text-2xl text-muted-foreground mb-8 max-w-3xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, ease: "easeOut" }}
            >
              Transform your digital presence with high-end web solutions that drive
              real business growth.
            </motion.p>

            <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.15, duration: 0.6, ease: "easeOut" }}
            >
              <Link to="/contact">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Start Your Project
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </section>

        <ImageScatterSection />
      </div>
  );
};

export default HeroSection;