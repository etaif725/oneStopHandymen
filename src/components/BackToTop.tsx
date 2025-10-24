import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed bottom-8 right-8 z-50">
          {/* Main Back to Top Button */}
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="gradient-accent w-16 h-16 rounded-full shadow-2xl flex items-center justify-center text-white transition-all hover:shadow-accent"
            aria-label="Back to top"
          >
            <ChevronUp className="h-7 w-7" />
          </motion.button>

          {/* Pulsing ring animation */}
          <motion.div
            className="absolute inset-0 rounded-full bg-accent pointer-events-none"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 1.5, opacity: 0 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "loop",
            }}
          />
        </div>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;

