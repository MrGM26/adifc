import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (scrollTop / docHeight) * 100;
      
      setScrollProgress(progress);
      
      if (scrollTop > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    toggleVisibility(); // Initial check

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
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
        <motion.div
          initial={{ opacity: 0, scale: 0.3, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.3, y: 20 }}
          transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        >
          {/* Progress Ring Background */}
          <div className="relative">
            <svg
              className="w-14 h-14 md:w-16 md:h-16 -rotate-90 absolute inset-0"
              viewBox="0 0 64 64"
            >
              {/* Background Circle */}
              <circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="hsl(var(--muted))"
                strokeWidth="2"
                opacity="0.3"
              />
              {/* Progress Circle */}
              <motion.circle
                cx="32"
                cy="32"
                r="28"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={175.93} // 2 * π * 28
                initial={{ strokeDashoffset: 175.93 }}
                animate={{ strokeDashoffset: 175.93 - (175.93 * scrollProgress) / 100 }}
                transition={{ duration: 0.1, ease: "easeOut" }}
                style={{ filter: 'drop-shadow(0 0 4px hsl(var(--accent) / 0.3))' }}
              />
            </svg>
            
            {/* Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                onClick={scrollToTop}
                size="icon"
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-primary via-primary-light to-primary-dark hover:from-primary-dark hover:via-primary hover:to-primary-light text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-500 border-2 border-white/20 backdrop-blur-sm modern-button glow-primary"
                aria-label="Scroll to top"
              >
                <motion.div
                  animate={{ 
                    y: [0, -2, 0],
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <ArrowUp className="h-6 w-6 md:h-7 md:w-7" />
                </motion.div>
              </Button>
            </motion.div>

            {/* Floating Animation */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.1, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;