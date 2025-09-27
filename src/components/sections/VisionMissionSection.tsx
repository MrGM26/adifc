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
      className="py-12 lg:py-16 relative overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at center top, hsl(var(--primary) / 0.08), transparent 60%), linear-gradient(135deg, hsl(var(--background)) 0%, hsl(var(--muted) / 0.2) 30%, hsl(var(--primary) / 0.05) 70%, hsl(var(--background)) 100%)',
        contain: 'layout style paint',
        height: 'auto',
        minHeight: '80vh'
      }}
    >
      {/* Enhanced Floating Orbs - Contained */}
      <div className="floating-orbs-container absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            className="absolute w-32 h-32 rounded-full opacity-30"
            style={{
              background: `radial-gradient(circle at 30% 30%, hsl(var(--primary) / 0.4), hsl(var(--accent) / 0.2), transparent 70%)`,
              filter: 'blur(12px)',
              left: `${20 + i * 20}%`,
              top: `${15 + i * 15}%`,
            }}
            animate={{
              x: [0, 30, -20, 0],
              y: [0, -20, 30, 0],
              scale: [1, 1.2, 0.8, 1],
              opacity: [0.3, 0.6, 0.2, 0.3]
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Particles - Contained */}
      <div className="floating-particles-container absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute w-2 h-2 rounded-full bg-primary/40"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 60 + 20}%`,
              boxShadow: '0 0 10px hsl(var(--primary) / 0.6)'
            }}
            animate={{
              y: [-10, 10, -5],
              x: [-5, 8, -3],
              opacity: [0.2, 0.8, 0.1]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2
            }}
          />
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

      <div className="container mx-auto px-4 relative z-10">
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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          
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
            <div className="futuristic-glass-card card-3d-tilt holographic-shimmer h-full p-8 lg:p-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl" 
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                   backdropFilter: 'blur(20px)',
                   borderImage: 'linear-gradient(135deg, hsl(var(--primary) / 0.3), hsl(var(--accent) / 0.2), transparent) 1'
                 }}>
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
                    scale: 1.05, 
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
            <div className="futuristic-glass-card card-3d-tilt holographic-shimmer h-full p-8 lg:p-10 backdrop-blur-xl bg-white/5 border border-white/10 shadow-2xl"
                 style={{
                   background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 50%, transparent 100%)',
                   backdropFilter: 'blur(20px)',
                   borderImage: 'linear-gradient(135deg, hsl(var(--accent) / 0.3), hsl(var(--primary) / 0.2), transparent) 1'
                 }}>
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
                    scale: 1.05, 
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

        {/* Enhanced Central Holographic Rings - Contained */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2, delay: 1 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full border border-primary/30"
            animate={{ rotate: 360, scale: [1, 1.05, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'conic-gradient(from 0deg, transparent, hsl(var(--primary) / 0.1), transparent)',
              filter: 'blur(1px)'
            }}
          />
          <motion.div 
            className="absolute inset-3 md:inset-4 lg:inset-6 rounded-full border border-accent/25"
            animate={{ rotate: -360, scale: [1, 0.95, 1] }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'conic-gradient(from 180deg, transparent, hsl(var(--accent) / 0.1), transparent)',
              filter: 'blur(1px)'
            }}
          />
          <motion.div 
            className="absolute inset-6 md:inset-8 lg:inset-12 rounded-full border border-primary/15"
            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'radial-gradient(circle, hsl(var(--primary) / 0.05), transparent 70%)',
              filter: 'blur(2px)'
            }}
          />
        </motion.div>

        {/* Corner Accent Lights */}
        <motion.div
          className="absolute top-8 left-8 w-4 h-4 rounded-full bg-primary/60 pointer-events-none"
          animate={{ 
            opacity: [0.3, 1, 0.3],
            scale: [1, 1.5, 1]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ filter: 'blur(2px)', boxShadow: '0 0 20px hsl(var(--primary) / 0.8)' }}
        />
        <motion.div
          className="absolute bottom-8 right-8 w-3 h-3 rounded-full bg-accent/60 pointer-events-none"
          animate={{ 
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
          style={{ filter: 'blur(1px)', boxShadow: '0 0 15px hsl(var(--accent) / 0.6)' }}
        />
      </div>
    </section>
  );
};

export default VisionMissionSection;