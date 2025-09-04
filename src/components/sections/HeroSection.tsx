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
      
      {/* Content with enhanced animations */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <div className="reveal-fade-up">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-gradient-flow"
            initial={{ opacity: 0, y: 60, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
            whileHover={{ scale: 1.02 }}
          >
            {t('hero.title')}
          </motion.h1>
        </div>
        
        <div className="reveal-scale-up">
          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed opacity-90 text-reveal"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.23, 1, 0.32, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 stagger-container">
          <motion.div
            className="reveal-on-scroll"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="glow-button hover-lift bg-gradient-to-r from-accent to-accent-light hover:from-accent-dark hover:to-accent text-accent-foreground px-12 py-7 text-xl font-bold shadow-2xl transform-gpu touch-friendly pulse-glow rounded-2xl" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </Button>
          </motion.div>
          
          <motion.div
            className="reveal-on-scroll"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="glow-button hover-lift bg-transparent border-2 border-white/40 hover:bg-white/10 hover:border-white/60 text-white px-12 py-7 text-xl font-bold shadow-2xl backdrop-blur-md transform-gpu touch-friendly rounded-2xl" 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('nav.products')}
            </Button>
          </motion.div>
        </div>

        {/* Premium Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto stagger-container">
          {[
            { value: 2008, suffix: '', key: 'hero.stats.established' },
            { value: 'UAE', suffix: '', key: 'hero.stats.coverage' },
            { value: 'ISO', suffix: '', key: 'hero.stats.certified' },
            { value: 1000, suffix: '+', key: 'hero.stats.projects' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="premium-card magnetic-element text-center bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl touch-friendly shimmer-effect"
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
                scale: 1.08, 
                y: -8,
                rotateY: 5,
                rotateX: 5
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="text-3xl md:text-4xl font-bold text-white mb-3 float-element">
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
              <div className="text-sm md:text-base text-white/90 font-medium">{t(stat.key)}</div>
            </motion.div>
          ))}
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