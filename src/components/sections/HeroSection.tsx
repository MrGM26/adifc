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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.23, 1, 0.32, 1] }}
      />
      
      {/* Modern Gradient Overlay - reduced opacity to show image */}
      <motion.div 
        className="absolute inset-0 z-10 bg-gradient-to-br from-primary/60 via-primary/40 to-accent/60"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      />
      
      {/* Animated floating elements with enhanced variations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[
          { size: 'w-20 h-20', pos: 'top-20 left-10', delay: 0 },
          { size: 'w-16 h-16', pos: 'top-40 right-20', delay: 1 },
          { size: 'w-12 h-12', pos: 'bottom-40 left-20', delay: 2 },
          { size: 'w-8 h-8', pos: 'top-1/2 right-1/3', delay: 3 },
          { size: 'w-6 h-6', pos: 'bottom-20 right-10', delay: 4 }
        ].map((item, index) => (
          <motion.div
            key={index}
            className={`absolute bg-white/5 rounded-full ${item.size} ${item.pos}`}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 180, 360],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 6 + index,
              repeat: Infinity,
              ease: "easeInOut",
              delay: item.delay
            }}
          />
        ))}
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-20 container mx-auto px-4 text-center text-white">
        <MobileAnimated variant="fadeUp" delay={0.2}>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.23, 1, 0.32, 1] }}
          >
            {t('hero.title')}
          </motion.h1>
        </MobileAnimated>
        
        <MobileAnimated variant="fadeUp" delay={0.4}>
          <motion.p 
            className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.23, 1, 0.32, 1] }}
          >
            {t('hero.subtitle')}
          </motion.p>
        </MobileAnimated>
        
        <MobileAnimated variant="scale" delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              size="lg" 
              className="modern-button glass-card glow-primary bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold shadow-lg transform-gpu touch-friendly press-animation" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('hero.cta')}
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button 
              size="lg" 
              className="modern-button glass-card glow-accent text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg font-bold shadow-lg transform-gpu touch-friendly press-animation" 
              onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
            >
              {t('nav.products')}
            </Button>
          </motion.div>
        </MobileAnimated>

        {/* Enhanced Trust Indicators with Counter Animations */}
        <MobileAnimated variant="bounce" delay={0.8} className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto">
          {[
            { value: 2008, suffix: '', key: 'hero.stats.established' },
            { value: 'UAE', suffix: '', key: 'hero.stats.coverage' },
            { value: 'ISO', suffix: '', key: 'hero.stats.certified' },
            { value: 1000, suffix: '+', key: 'hero.stats.projects' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center modern-card glow-primary p-4 md:p-6 rounded-2xl touch-friendly"
              initial={{ opacity: 1, scale: 1, y: 0 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1, duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="text-2xl md:text-3xl font-bold text-white mb-2">
                {typeof stat.value === 'number' ? (
                  <CounterAnimation to={stat.value} suffix={stat.suffix} />
                ) : (
                  <motion.div
                    animate={{ rotateY: [0, 360] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index }}
                  >
                    {stat.value}
                  </motion.div>
                )}
              </div>
              <div className="text-xs md:text-sm opacity-80">{t(stat.key)}</div>
            </motion.div>
          ))}
        </MobileAnimated>
      </div>
    </section>
  );
};

export default HeroSection;