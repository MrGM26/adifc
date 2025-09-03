import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';
import { MobileAnimated } from '@/components/animations/MobileOptimizedAnimations';
import { motion } from 'framer-motion';
import { Settings, MapPin, Award, Handshake } from 'lucide-react';

const HighlightsSection = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Settings,
      titleKey: 'highlights.productivity.title',
      descKey: 'highlights.productivity.desc',
      colorClass: 'text-primary',
      bgClass: 'bg-primary/10'
    },
    {
      icon: MapPin,
      titleKey: 'highlights.coverage.title', 
      descKey: 'highlights.coverage.desc',
      colorClass: 'text-accent',
      bgClass: 'bg-accent/10'
    },
    {
      icon: Award,
      titleKey: 'highlights.quality.title',
      descKey: 'highlights.quality.desc', 
      colorClass: 'text-green-500',
      bgClass: 'bg-green-500/10'
    },
    {
      icon: Handshake,
      titleKey: 'highlights.trust.title',
      descKey: 'highlights.trust.desc',
      colorClass: 'text-primary',
      bgClass: 'bg-primary/10'
    }
  ];

  return (
    <section className="py-8 md:py-12 bg-transparent section-entrance" id="highlights">
      {/* Animated Divider */}
      <div className="section-divider"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16 reveal-fade-up">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 stagger-container">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <MobileAnimated 
                key={index} 
                variant="bounce" 
                delay={0.4 + index * 0.1}
                className="h-full"
              >
                <motion.div
                  whileHover={{ 
                    y: -12, 
                    scale: 1.02,
                    rotateY: 5 
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  className="h-full"
                >
                  <Card className="premium-card hover-lift bg-transparent backdrop-blur-sm h-full group touch-friendly overflow-hidden shimmer-effect">
                    <CardContent className="p-6 md:p-8 text-center h-full flex flex-col justify-center relative">
                      
                      {/* Animated background gradient */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                        style={{
                          background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`
                        }}
                      />
                      
                      {/* Icon with enhanced animations */}
                      <motion.div 
                        className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${highlight.bgClass} mb-6 ${highlight.colorClass} relative z-10 animated-icon float-element`}
                        whileHover={{ 
                          scale: 1.3, 
                          rotate: 10,
                          boxShadow: "0 0 30px hsl(var(--primary) / 0.4)"
                        }}
                        transition={{ duration: 0.3, type: "spring", damping: 12 }}
                      >
                        <motion.div
                          animate={{ 
                            y: [0, -4, 0],
                            rotate: [0, 5, -5, 0]
                          }}
                          transition={{ 
                            duration: 3 + index * 0.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <IconComponent 
                            size={32} 
                            strokeWidth={2} 
                            className="transition-all duration-300 group-hover:scale-110" 
                          />
                        </motion.div>
                      </motion.div>
                      
                      {/* Title with text animation */}
                      <motion.h3 
                        className="text-xl font-bold mb-4 text-foreground relative z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        {t(highlight.titleKey)}
                      </motion.h3>
                      
                      {/* Description with stagger effect */}
                      <motion.p 
                        className="text-muted-foreground leading-relaxed relative z-10"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {t(highlight.descKey)}
                      </motion.p>
                      
                      {/* Floating particle effect */}
                      <motion.div
                        className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full"
                        animate={{
                          y: [0, -10, 0],
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
        <div className="section-divider mt-16"></div>
      </div>
    </section>
  );
};

export default HighlightsSection;