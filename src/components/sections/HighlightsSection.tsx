import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';
import { MobileAnimated } from '@/components/animations/MobileOptimizedAnimations';
import { motion } from 'framer-motion';

const HighlightsSection = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      titleKey: 'highlights.productivity.title',
      descKey: 'highlights.productivity.desc'
    },
    {
      titleKey: 'highlights.coverage.title', 
      descKey: 'highlights.coverage.desc'
    },
    {
      titleKey: 'highlights.quality.title',
      descKey: 'highlights.quality.desc'
    },
    {
      titleKey: 'highlights.trust.title',
      descKey: 'highlights.trust.desc'
    }
  ];

  return (
    <section className="py-6 md:py-8 bg-transparent section-entrance" id="highlights">
      {/* Animated Divider */}
      <div className="section-divider"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 md:mb-12 reveal-fade-up">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gradient-flow mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {t('highlights.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto text-reveal"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {t('highlights.subtitle')}
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 stagger-container">
          {highlights.map((highlight, index) => {
            return (
              <MobileAnimated 
                key={index} 
                variant="bounce" 
                delay={0.4 + index * 0.1}
                className="h-full"
              >
                <motion.div
                  whileHover={{ 
                    y: -8, 
                    scale: 1.02
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full"
                >
                  <Card className="premium-card hover-lift bg-transparent backdrop-blur-sm h-full group touch-friendly overflow-hidden shimmer-effect">
                    <CardContent className="p-4 md:p-6 text-center h-full flex flex-col justify-center relative">
                      
                      {/* Animated background gradient */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`
                        }}
                      />
                      
                      {/* Title with enhanced typography */}
                      <motion.h3 
                        className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-foreground relative z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t(highlight.titleKey)}
                      </motion.h3>
                      
                      {/* Description with improved spacing */}
                      <motion.p 
                        className="text-muted-foreground leading-relaxed relative z-10 text-sm md:text-base"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {t(highlight.descKey)}
                      </motion.p>
                      
                      {/* Simple decorative element */}
                      <motion.div
                        className="absolute top-3 right-3 w-2 h-2 bg-primary/30 rounded-full"
                        animate={{
                          y: [0, -5, 0],
                          opacity: [0.3, 1, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: index * 0.5
                        }}
                      />
                    </CardContent>
                  </Card>
                </motion.div>
              </MobileAnimated>
            );
          })}
        </div>
        
        {/* Bottom Divider */}
        <div className="section-divider mt-8 md:mt-12"></div>
      </div>
    </section>
  );
};

export default HighlightsSection;