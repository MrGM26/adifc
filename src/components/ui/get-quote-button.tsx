import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const GetQuoteButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useLanguage();

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

  const scrollToRFQ = () => {
    const rfqSection = document.getElementById('pricing');
    if (rfqSection) {
      rfqSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.3, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          exit={{ opacity: 0, scale: 0.3, x: 100 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50"
        >
          {/* Enhanced glowing background */}
          <motion.div 
            className="absolute inset-0 rounded-full blur-lg opacity-40"
            animate={{
              background: [
                'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.2) 70%)',
                'radial-gradient(circle, rgba(239, 68, 68, 0.6) 0%, rgba(239, 68, 68, 0.3) 70%)',
                'radial-gradient(circle, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.2) 70%)'
              ]
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          
          {/* Main Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.96, y: -1 }}
            className="relative"
          >
            <Button
              onClick={scrollToRFQ}
              className="mobile-button touch-feedback relative group bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white shadow-2xl hover:shadow-red-500/30 transition-all duration-500 border-0 rounded-full px-4 md:px-6 py-3 h-12 md:h-16 text-xs md:text-base font-bold min-w-[100px] md:min-w-[140px] glow-mobile"
              aria-label="Get Quote"
            >
              {/* Enhanced sparkle effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 70% 60%, rgba(255,255,255,0.3) 0%, transparent 50%)',
                    'radial-gradient(circle at 30% 40%, rgba(255,255,255,0.3) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex items-center space-x-1.5 md:space-x-2">
                <motion.div
                  animate={{ 
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.15, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FileText className="h-4 w-4 md:h-6 md:w-6" />
                </motion.div>
                <span className="font-bold tracking-wide text-xs md:text-base">{t('hero.cta')}</span>
              </div>

              {/* Enhanced shine effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-120%', '120%'] }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 2
                }}
              />
            </Button>
          </motion.div>

          {/* Enhanced floating sparkles */}
          <motion.div
            className="absolute -top-1 -right-1 md:-top-2 md:-right-2 text-yellow-400"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="h-3 w-3 md:h-4 md:w-4" />
          </motion.div>

          <motion.div
            className="absolute -bottom-0.5 -left-1 md:-bottom-1 md:-left-2 text-yellow-300"
            animate={{
              y: [0, -8, 0],
              rotate: [0, -180, -360],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Sparkles className="h-2.5 w-2.5 md:h-3 md:w-3" />
          </motion.div>

          {/* Additional mobile sparkles */}
          <motion.div
            className="absolute top-2 left-2 text-red-200"
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: 2
            }}
          >
            <div className="w-1 h-1 bg-current rounded-full" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetQuoteButton;