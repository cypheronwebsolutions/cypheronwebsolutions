import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const SHOW_AFTER = 400; // px

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > SHOW_AFTER);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
      <AnimatePresence>
        {show && (
            <motion.button
                key="back-to-top"
                type="button"
                onClick={handleBackToTop}
                aria-label="Back to top"
                title="Back to top"
                className="fixed right-6 bottom-6 z-50 inline-flex h-11 w-11 items-center justify-center rounded-full border border-muted-foreground/30 bg-background/80 backdrop-blur hover:bg-background/95 shadow-sm"
                initial={{ opacity: 0, scale: 0.8, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 8 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.98 }}
            >
              <ArrowUp className="h-5 w-5 text-muted-foreground" />
            </motion.button>
        )}
      </AnimatePresence>
  );
};

export default BackToTop;