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
          {/* Glowing Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full blur-lg opacity-30 animate-pulse"></div>
          
          {/* Main Button */}
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Button
              onClick={scrollToRFQ}
              className="relative group bg-gradient-to-r from-red-600 via-red-500 to-red-600 hover:from-red-700 hover:via-red-600 hover:to-red-700 text-white shadow-2xl hover:shadow-red-500/25 transition-all duration-500 border-0 rounded-full px-6 py-3 h-14 md:h-16 text-sm md:text-base font-semibold min-w-[120px] md:min-w-[140px]"
              aria-label="Get Quote"
            >
              {/* Sparkle Effect */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: [
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    'radial-gradient(circle at 80% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)',
                    'radial-gradient(circle at 20% 50%, rgba(255,255,255,0.2) 0%, transparent 50%)'
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Content */}
              <div className="relative z-10 flex items-center space-x-2">
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FileText className="h-5 w-5 md:h-6 md:w-6" />
                </motion.div>
                <span className="font-bold tracking-wide">{t('hero.cta')}</span>
              </div>

              {/* Shine Effect */}
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatDelay: 1
                }}
              />
            </Button>
          </motion.div>

          {/* Floating Sparkles */}
          <motion.div
            className="absolute -top-2 -right-2 text-yellow-400"
            animate={{
              y: [0, -8, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="h-4 w-4" />
          </motion.div>

          <motion.div
            className="absolute -bottom-1 -left-2 text-yellow-300"
            animate={{
              y: [0, -5, 0],
              rotate: [0, -180, -360],
              scale: [0.8, 1, 0.8]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Sparkles className="h-3 w-3" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GetQuoteButton;