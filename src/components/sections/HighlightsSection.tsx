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
    <section className="py-3 md:py-4 bg-transparent section-entrance" id="highlights">
      {/* Animated Divider */}
      <div className="section-divider"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-6 reveal-fade-up">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 stagger-container">
          {highlights.map((highlight, index) => {
            return (
              <MobileAnimated 
                key={index} 
                variant="bounce" 
                delay={0.4 + index * 0.15}
                className="h-full"
              >
                <motion.div
                  whileHover={{ 
                    y: -10, 
                    scale: 1.03
                  }}
                  whileTap={{ scale: 0.97, y: -2 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full"
                >
                  <Card className="mobile-card breathe bg-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 h-full group touch-feedback glow-mobile overflow-hidden rounded-2xl">
                    <CardContent className="p-4 md:p-6 text-center h-full flex flex-col justify-center relative">
                      
                      {/* Enhanced animated background gradient */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-20 group-active:opacity-30 transition-opacity duration-500 rounded-2xl"
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2))`
                        }}
                      />
                      
                      {/* Floating icon background */}
                      <motion.div
                        className="absolute top-4 right-4 w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center"
                        animate={{
                          rotate: [0, 360],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{
                          duration: 8 + index,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-3 h-3 bg-gradient-to-br from-primary to-accent rounded-full"></div>
                      </motion.div>
                      
                      {/* Title with enhanced typography */}
                      <motion.h3 
                        className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-4 text-foreground relative z-10 group-hover:text-primary transition-colors duration-300"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t(highlight.titleKey)}
                      </motion.h3>
                      
                      {/* Description with improved spacing */}
                      <motion.p 
                        className="text-muted-foreground leading-relaxed relative z-10 text-sm md:text-base group-hover:text-foreground/80 transition-colors duration-300"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {t(highlight.descKey)}
                      </motion.p>
                      
                      {/* Enhanced decorative elements */}
                      <motion.div
                        className="absolute bottom-4 left-4 w-1 h-8 bg-gradient-to-b from-primary to-accent rounded-full"
                        animate={{
                          height: [32, 40, 32],
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: index * 0.3
                        }}
                      />
                      
                      {/* Sparkle effect */}
                      {[...Array(3)].map((_, sparkleIndex) => (
                        <motion.div
                          key={sparkleIndex}
                          className="absolute w-1 h-1 bg-accent rounded-full opacity-0 group-hover:opacity-100"
                          style={{
                            top: `${20 + sparkleIndex * 20}%`,
                            right: `${15 + sparkleIndex * 10}%`
                          }}
                          animate={{
                            scale: [0, 1, 0],
                            rotate: [0, 180, 360]
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: sparkleIndex * 0.5
                          }}
                        />
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              </MobileAnimated>
            );
          })}
        </div>
        
        {/* Bottom Divider */}
        <div className="section-divider mt-4 md:mt-6"></div>
      </div>
    </section>
  );
};

export default HighlightsSection;