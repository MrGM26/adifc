import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';

const VisionMissionSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-4 lg:py-6 bg-gradient-to-br from-background via-muted/30 to-background relative overflow-hidden">
      {/* Industrial Background Texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-muted/20 to-transparent opacity-30"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Section Header */}
        <AnimatedElement variant="fadeInDown" className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('vision.title')}
          </h2>
        </AnimatedElement>

        {/* Vision & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Vision Card */}
          <AnimatedElement 
            variant={language === 'ar' ? 'slideInRight' : 'slideInLeft'} 
            delay={0.2}
            className="group"
          >
            <div className="relative bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-primary/20 to-transparent"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 mb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6, type: "spring", damping: 12 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl group-hover:bg-primary/20 transition-colors duration-300"
                >
                  <Target className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                  {t('vision.heading')}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-300">
                  {t('vision.text')}
                </p>
              </div>

              {/* Floating Decoration */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 w-20 h-20 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-xl"
              />
            </div>
          </AnimatedElement>

          {/* Mission Card */}
          <AnimatedElement 
            variant={language === 'ar' ? 'slideInLeft' : 'slideInRight'} 
            delay={0.4}
            className="group"
          >
            <div className="relative bg-card/70 backdrop-blur-sm border border-border/50 rounded-2xl p-8 lg:p-10 h-full transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-2 overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-accent/20 to-transparent"></div>
              
              {/* Icon Container */}
              <div className="relative z-10 mb-6">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6, type: "spring", damping: 12 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl group-hover:bg-accent/20 transition-colors duration-300"
                >
                  <Compass className="w-8 h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                  {t('mission.heading')}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-300">
                  {t('mission.text')}
                </p>
              </div>

              {/* Floating Decoration */}
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute bottom-6 left-6 w-16 h-16 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-xl"
              />
            </div>
          </AnimatedElement>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;