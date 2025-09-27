import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Target, Compass, Zap, Sparkles } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';

// Staggered Text Component
const StaggeredText: React.FC<{ text: string; className?: string }> = ({ text, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <div ref={ref} className={`staggered-text ${className}`}>
      {text.split('').map((char, index) => (
        <span 
          key={index} 
          className={`char ${isInView ? 'animate' : ''}`}
          style={{ 
            animationDelay: `${index * 0.05}s`,
            display: char === ' ' ? 'inline' : 'inline-block',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </div>
  );
};

const VisionMissionSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section 
      ref={sectionRef}
      className="py-16 lg:py-24 relative overflow-hidden h-screen max-h-screen"
      style={{
        background: 'radial-gradient(ellipse at center top, hsl(var(--primary) / 0.05), transparent 70%), linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted) / 0.3) 50%, hsl(var(--background)) 100%)',
        overflowY: 'hidden'
      }}
    >
      {/* Static Background Elements */}
      <div className="floating-orbs-container">
        {/* Floating Animated Orbs */}
        {[...Array(5)].map((_, i) => (
          <div key={`orb-${i}`} className="floating-orb" />
        ))}
      </div>

      {/* Floating Particles */}
      <div className="floating-particles-container">
        {[...Array(12)].map((_, i) => (
          <div key={`particle-${i}`} className="floating-particle" />
        ))}
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center max-h-screen overflow-hidden">
        {/* Enhanced Section Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <StaggeredText 
            text={t('vision.title')} 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6"
          />
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary mx-auto rounded-full"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Futuristic Vision & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto overflow-hidden">
          
          {/* Vision Card - Enhanced */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: language === 'ar' ? 100 : -100, rotateY: language === 'ar' ? -15 : 15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.3,
              type: "spring", 
              damping: 20,
              stiffness: 100 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="futuristic-glass-card card-3d-tilt holographic-shimmer h-full p-10 lg:p-12">
              {/* Digital Wave Scanner */}
              <div className="digital-wave-scanner">
                <div className="scanning-line" />
              </div>

              {/* Floating Geometric Elements */}
              <div className="geometric-shapes-container">
                <div className="floating-geometry triangle" />
                <div className="floating-geometry hexagon" />
                <div className="floating-geometry circle" />
              </div>

              {/* Enhanced Icon Container with Energy Pulse */}
              <div className="relative z-10 mb-8">
                <motion.div 
                  className="energy-pulse-container icon-spring-entry w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl"
                  initial={{ scale: 0, rotate: -360 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.6, 
                    duration: 1.2, 
                    type: "spring", 
                    damping: 15,
                    stiffness: 200 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                  }}
                >
                  <Target className="w-10 h-10 text-primary relative z-10" />
                  <Sparkles className="absolute top-1 right-1 w-4 h-4 text-accent opacity-70" />
                </motion.div>
              </div>

              {/* Enhanced Content with Staggered Animation */}
              <div className="relative z-10 space-y-6">
                <StaggeredText 
                  text={t('vision.heading')} 
                  className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-500"
                />
                <motion.p 
                  className="text-muted-foreground leading-relaxed text-lg lg:text-xl group-hover:text-foreground/90 transition-colors duration-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 0.8 }}
                >
                  {t('vision.text')}
                </motion.p>
              </div>

              {/* Enhanced Floating Decorations */}
              <motion.div
                className="absolute top-8 right-8 w-24 h-24 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.1), transparent 70%)',
                  filter: 'blur(8px)'
                }}
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 180, 360],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Energy Field Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'conic-gradient(from 0deg at 50% 50%, transparent, hsl(var(--primary) / 0.1) 50%, transparent)',
                }}
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>

          {/* Mission Card - Enhanced */}
          <motion.div
            className="group relative"
            initial={{ opacity: 0, x: language === 'ar' ? -100 : 100, rotateY: language === 'ar' ? 15 : -15 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ 
              duration: 1, 
              delay: 0.5,
              type: "spring", 
              damping: 20,
              stiffness: 100 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="futuristic-glass-card card-3d-tilt holographic-shimmer h-full p-10 lg:p-12">
              {/* Digital Wave Scanner */}
              <div className="digital-wave-scanner">
                <div className="scanning-line" style={{ animationDelay: '1s' }} />
              </div>

              {/* Floating Geometric Elements */}
              <div className="geometric-shapes-container">
                <div className="floating-geometry circle" />
                <div className="floating-geometry triangle" />
                <div className="floating-geometry hexagon" />
              </div>

              {/* Enhanced Icon Container with Energy Pulse */}
              <div className="relative z-10 mb-8">
                <motion.div 
                  className="energy-pulse-container icon-spring-entry w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl"
                  initial={{ scale: 0, rotate: 360 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ 
                    delay: 0.8, 
                    duration: 1.2, 
                    type: "spring", 
                    damping: 15,
                    stiffness: 200 
                  }}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: -5,
                  }}
                >
                  <Compass className="w-10 h-10 text-accent relative z-10" />
                  <Zap className="absolute bottom-1 left-1 w-4 h-4 text-primary opacity-70" />
                </motion.div>
              </div>

              {/* Enhanced Content with Staggered Animation */}
              <div className="relative z-10 space-y-6">
                <StaggeredText 
                  text={t('mission.heading')} 
                  className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-accent transition-colors duration-500"
                />
                <motion.p 
                  className="text-muted-foreground leading-relaxed text-lg lg:text-xl group-hover:text-foreground/90 transition-colors duration-500"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  {t('mission.text')}
                </motion.p>
              </div>

              {/* Enhanced Floating Decorations */}
              <motion.div
                className="absolute bottom-8 left-8 w-20 h-20 rounded-full"
                style={{
                  background: 'radial-gradient(circle at 70% 70%, hsl(var(--accent) / 0.3), hsl(var(--primary) / 0.1), transparent 70%)',
                  filter: 'blur(6px)'
                }}
                animate={{ 
                  scale: [1, 0.8, 1.1, 1],
                  rotate: [0, -90, -180, -270, -360],
                  opacity: [0.2, 0.5, 0.3, 0.4, 0.2]
                }}
                transition={{ 
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
              />

              {/* Energy Field Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl pointer-events-none"
                style={{
                  background: 'conic-gradient(from 180deg at 50% 50%, transparent, hsl(var(--accent) / 0.1) 50%, transparent)',
                }}
                animate={{ rotate: -360 }}
                transition={{ 
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Additional Futuristic Elements */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
        >
          <div className="w-96 h-96 rounded-full border border-primary/20 animate-pulse" />
          <div className="absolute inset-8 rounded-full border border-accent/20 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute inset-16 rounded-full border border-primary/10 animate-pulse" style={{ animationDelay: '2s' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default VisionMissionSection;