import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';
import { MobileAnimated, TouchButton } from '@/components/animations/MobileOptimizedAnimations';
import { CounterAnimation } from '@/components/animations/CounterAnimation';
import { motion } from 'framer-motion';
import heroImage from '@/assets/hero-construction.jpg';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-entrance" id="home">
      {/* Hero Image Background with reveal animation */}
      <motion.div 
        className="absolute inset-0 z-0 image-reveal"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
      />
      
      {/* Professional Gradient Overlay with subtle shimmer */}
      <motion.div 
        className="absolute inset-0 z-10 bg-gradient-to-br from-primary/80 via-primary/60 to-primary-dark/70 shimmer-effect"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
      />
      
      {/* Accent gradient overlay for depth */}
      <motion.div 
        className="absolute inset-0 z-10 bg-gradient-to-t from-accent/10 via-transparent to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      />
      
      {/* Floating geometric elements */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        {[
          { size: 'w-24 h-24', pos: 'top-20 left-10', delay: 0, shape: 'rounded-full' },
          { size: 'w-16 h-16', pos: 'top-40 right-20', delay: 1, shape: 'rounded-lg' },
          { size: 'w-20 h-20', pos: 'bottom-40 left-20', delay: 2, shape: 'morphing-shape' },
          { size: 'w-12 h-12', pos: 'top-1/2 right-1/3', delay: 3, shape: 'rounded-full' },
          { size: 'w-8 h-8', pos: 'bottom-20 right-10', delay: 4, shape: 'rounded-lg' }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute bg-white/10 backdrop-blur-sm ${item.size} ${item.pos} ${item.shape} float-element-delayed`}
            initial={{ opacity: 0, scale: 0, rotate: -180 }}
            animate={{ 
              opacity: 1, 
              scale: 1, 
              rotate: 0,
              y: [0, -30, 0],
              x: [0, 15, 0]
            }}
            transition={{
              duration: 8 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay,
              scale: { duration: 0.6, delay: item.delay },
              opacity: { duration: 0.8, delay: item.delay }
            }}
            whileHover={{ scale: 1.2, rotate: 45 }}
          />
        ))}
      </div>
      
      {/* Get Quote Button - Top Right */}
      <motion.div 
        className="absolute top-4 right-4 md:top-8 md:right-8 z-30"
        initial={{ opacity: 0, x: 50, y: -30 }}
        animate={{ opacity: 1, x: 0, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2, ease: [0.23, 1, 0.32, 1] }}
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Button 
          size="lg" 
          className="
            bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent 
            text-accent-foreground px-6 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold shadow-2xl 
            rounded-xl md:rounded-2xl border-2 border-white/20 backdrop-blur-md
            hover:shadow-accent/30 hover:border-white/40
            transform-gpu pulse-glow
          " 
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('hero.cta')}
        </Button>
      </motion.div>

      {/* Main Content Container - Better Centered */}
      <div className="relative z-20 container mx-auto px-6 md:px-8 text-center text-white flex flex-col items-center justify-center min-h-screen py-20">
        
        {/* Hero Title - Enhanced Typography */}
        <div className="reveal-fade-up max-w-6xl mx-auto mb-8">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] text-gradient-flow tracking-tight"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            {t('hero.title')}
          </motion.h1>
        </div>
        
        {/* Hero Subtitle - Better Spacing */}
        <div className="reveal-scale-up max-w-4xl mx-auto mb-16">
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed opacity-95 text-reveal font-light"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
        

        {/* Premium Trust Indicators - Better Aligned */}
        <div className="w-full max-w-7xl mx-auto mt-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8 stagger-container">
            {[
              { value: 2008, suffix: '', key: 'hero.stats.established' },
              { value: 'UAE', suffix: '', key: 'hero.stats.coverage' },
              { value: 'ISO', suffix: '', key: 'hero.stats.certified' },
              { value: 1000, suffix: '+', key: 'hero.stats.projects' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="premium-card magnetic-element text-center bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl touch-friendly shimmer-effect"
                initial={{ opacity: 0, scale: 0.5, y: 60, rotateX: -90 }}
                animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
                transition={{ 
                  delay: 1.5 + index * 0.15, 
                  duration: 0.8, 
                  ease: [0.23, 1, 0.32, 1],
                  type: "spring",
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -6,
                  rotateY: 3,
                  rotateX: 3
                }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-3 float-element">
                  {typeof stat.value === 'number' ? (
                    <CounterAnimation to={stat.value} suffix={stat.suffix} />
                  ) : (
                    <motion.div
                      className="typewriter"
                      animate={{ 
                        rotateY: [0, 360],
                        textShadow: ["0 0 5px rgba(255,255,255,0.5)", "0 0 15px rgba(255,255,255,0.8)", "0 0 5px rgba(255,255,255,0.5)"]
                      }}
                      transition={{ 
                        rotateY: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: index },
                        textShadow: { duration: 2, repeat: Infinity }
                      }}
                    >
                      {stat.value}
                    </motion.div>
                  )}
                </div>
                <div className="text-xs md:text-sm lg:text-base text-white/90 font-medium leading-tight">{t(stat.key)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div className="section-divider"></div>
      </div>
    </section>
  );
};

export default HeroSection;