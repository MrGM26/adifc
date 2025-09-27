import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Target, Compass, Hexagon, Triangle, Circle, Zap, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionMissionSection = () => {
  const { t, language } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  // Mobile-optimized animation variants
  const mobileTextVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 15,
        stiffness: 300,
        duration: 0.6
      }
    }
  };

  // Mobile-friendly card animations
  const mobileCardVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 25,
        stiffness: 200,
        duration: 0.8
      }
    }
  };

  // Touch-optimized animations
  const mobileTapVariants = {
    tap: { scale: 0.98, transition: { duration: 0.1 } },
    hover: { scale: 1.02, transition: { duration: 0.2 } }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background" style={{ contain: 'layout style paint' }}>
      {/* 1. Background Animation Effects - Floating Orbs & Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Gradient Orbs - Constrained */}
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/15 to-accent/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 50, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-accent/15 to-primary/10 rounded-full blur-3xl"
        />

        {/* Medium Orbs - Reduced size */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/2 left-1/6 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"
        />

        {/* Floating Particles with Constrained Movement */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 6 + i * 0.3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
            className={`absolute w-1.5 h-1.5 rounded-full ${
              i % 2 === 0 ? 'bg-primary/40' : 'bg-accent/40'
            }`}
            style={{
              left: `${20 + (i % 3) * 25}%`,
              top: `${25 + (i % 4) * 20}%`,
            }}
          />
        ))}

        {/* Geometric Particles - Contained */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            animate={{
              rotate: [0, 360],
              scale: [0.6, 1, 0.6],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
            className={`absolute`}
            style={{
              left: `${15 + (i % 3) * 30}%`,
              top: `${20 + (i % 2) * 40}%`,
            }}
          >
            {i % 3 === 0 ? (
              <Hexagon className="w-5 h-5 text-primary/40" />
            ) : i % 3 === 1 ? (
              <Triangle className="w-4 h-4 text-accent/40" />
            ) : (
              <Circle className="w-3 h-3 text-primary/30" />
            )}
          </motion.div>
        ))}

        {/* Continuous Floating Text Elements - Mobile Optimized */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`text-${i}`}
            animate={{
              x: i % 2 === 0 ? [0, 50, 0] : [0, -50, 0],
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.2
            }}
            className="absolute text-xs md:text-sm text-primary/20 font-light pointer-events-none select-none"
            style={{
              left: `${15 + (i % 2) * 50}%`,
              top: `${30 + (i % 3) * 25}%`,
            }}
          >
            {i % 3 === 0 ? 'VISION' : i % 3 === 1 ? 'MISSION' : 'FUTURE'}
          </motion.div>
        ))}

        {/* Enhanced Energy Waves - Always Active */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "400% 400%"],
            opacity: [0.02, 0.08, 0.02],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, hsl(var(--primary) / 0.1) 0%, transparent 70%),
              radial-gradient(circle at 75% 75%, hsl(var(--accent) / 0.1) 0%, transparent 70%)
            `,
            backgroundSize: '100px 100px'
          }}
        />

        {/* Pulsing Light Streaks - Mobile Friendly */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`streak-${i}`}
            animate={{
              scaleX: [0, 1, 0],
              opacity: [0, 0.4, 0],
              x: [0, 30, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            style={{
              width: '200px',
              left: `${25 + i * 15}%`,
              top: `${40 + i * 10}%`,
              transform: `rotate(${i * 30}deg)`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 lg:py-20 relative z-10 max-w-7xl">
        {/* Section Header with Optimized Spacing */}
        <div className="text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative inline-block"
          >
            {/* 6. Enhanced Staggered Text Animation with Sliding Effects */}
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={mobileTextVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent relative overflow-hidden"
            >
              {/* Individual Letter Animation */}
              {t('vision.title').split('').map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 20, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, y: 0, x: 0 }}
                  transition={{ 
                    delay: 0.1 + i * 0.05, 
                    duration: 0.6,
                    type: "spring",
                    damping: 12
                  }}
                  className="inline-block"
                  style={{ marginRight: char === ' ' ? '0.5rem' : '0' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h2>
            
            {/* Enhanced Holographic Shimmer Effect - Continuous */}
            <motion.div
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 mix-blend-overlay overflow-hidden"
            />
            
            {/* Dual Energy Pulse - Always Active */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.1, 0.4, 0.1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-lg -z-10"
            />
            
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
              className="absolute inset-0 bg-gradient-to-r from-accent/15 via-primary/15 to-accent/15 blur-2xl -z-10"
            />
          </motion.div>
        </div>

        {/* Vision & Mission Grid - Optimized Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Vision Glass Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={mobileCardVariants}
            transition={{ delay: 0.3 }}
            className="group relative"
          >
            {/* 2. Glass Morphism Card with Mobile Optimization */}
            <motion.div 
              className="relative bg-card/50 backdrop-blur-2xl border border-primary/20 rounded-3xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-700 hover:bg-card/70 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15 modern-card will-change-transform"
              variants={mobileTapVariants}
              whileTap="tap"
              whileHover="hover"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              
              {/* Mobile-Optimized Particle System */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(window.innerWidth < 768 ? 8 : 12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, 3, 0],
                      opacity: [0.1, 0.4, 0.1],
                      scale: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 8 : 4 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15
                    }}
                    className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full"
                    style={{
                      left: `${25 + (i % 2) * 35}%`,
                      top: `${35 + (i % 3) * 15}%`,
                    }}
                  />
                ))}
              </div>
              
              {/* Mobile-Friendly Digital Wave Effect */}
              <motion.div
                animate={{
                  backgroundPosition: prefersReducedMotion ? ["0% 0%"] : ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 12,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.2) 0%, transparent 40%)`,
                  backgroundSize: '15px 15px'
                }}
              />
              
              {/* Touch-Responsive Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 group-active:opacity-60 transition-opacity duration-300" />
              
              {/* Mobile-Optimized Border Glow */}
              <motion.div
                animate={{
                  rotate: prefersReducedMotion ? 0 : [0, 360],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 25,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur opacity-0 group-hover:opacity-100 group-active:opacity-70 transition-opacity duration-300"
              />

              {/* Mobile-Responsive Floating Elements */}
              <motion.div
                animate={{
                  y: prefersReducedMotion ? 0 : [0, -10, 0],
                  rotate: prefersReducedMotion ? 0 : [0, 180, 360],
                  scale: prefersReducedMotion ? 1 : [0.9, 1.05, 0.9],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 12,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 border border-primary/30 rounded-full opacity-20 group-hover:opacity-40 group-active:opacity-30"
              />
              
              <motion.div
                animate={{
                  rotate: prefersReducedMotion ? 0 : [0, -120, 0],
                  scale: prefersReducedMotion ? 1 : [1, 0.8, 1],
                  x: prefersReducedMotion ? 0 : [0, 3, 0],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 18,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
                className="absolute bottom-6 left-4 md:bottom-8 md:left-6 w-6 h-6 md:w-8 md:h-8 opacity-15 group-hover:opacity-30 group-active:opacity-25"
              >
                <Triangle className="w-full h-full text-accent" />
              </motion.div>

              {/* Mobile Star Decorations */}
              <motion.div
                animate={{
                  rotate: prefersReducedMotion ? 0 : [0, 360],
                  scale: prefersReducedMotion ? 1 : [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 15,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-1/2 right-6 md:right-8 opacity-15"
              >
                <Star className="w-3 h-3 md:w-4 md:h-4 text-primary" />
              </motion.div>

              {/* 4. Icon Animations with Energy Pulse */}
              <div className="relative z-10 mb-8">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    damping: 10, 
                    stiffness: 200,
                    delay: 0.5 
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotateY: 20,
                    rotateX: 10,
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 backdrop-blur-sm border border-primary/40 rounded-2xl group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-500 relative"
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Target className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Energy Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 border-2 border-accent rounded-2xl"
                  />
                  
                  {/* Secondary Pulse */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 0.7
                    }}
                    className="absolute inset-0 border border-primary rounded-2xl"
                  />
                  
                  {/* Energy Zap Effects */}
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute -top-2 -right-2 opacity-60"
                  >
                    <Zap className="w-4 h-4 text-accent" />
                  </motion.div>
                </motion.div>
              </div>

              {/* 6. Staggered Content Animation */}
              <div className="relative z-10">
                <motion.h3
                  initial="hidden"
                  animate="visible"
                  variants={mobileTextVariants}
                  transition={{ delay: 0.7 }}
                  className="text-3xl lg:text-4xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-500"
                >
                  {t('vision.heading')}
                </motion.h3>
                
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={mobileTextVariants}
                  transition={{ delay: 0.9 }}
                  className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-500"
                >
                  {t('vision.text')}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

          {/* Mission Glass Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={mobileCardVariants}
            transition={{ delay: 0.5 }}
            className="group relative"
          >
            {/* 2. Glass Morphism Card with Mobile Optimization */}
            <motion.div 
              className="relative bg-card/50 backdrop-blur-2xl border border-accent/20 rounded-3xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-700 hover:bg-card/70 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/15 modern-card will-change-transform"
              variants={mobileTapVariants}
              whileTap="tap"
              whileHover="hover"
              style={{ WebkitTapHighlightColor: 'transparent' }}
            >
              
              {/* Mobile-Optimized Particle System */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(window.innerWidth < 768 ? 8 : 12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -15, 0],
                      x: [0, -3, 0],
                      opacity: [0.1, 0.4, 0.1],
                      scale: [0.4, 0.7, 0.4],
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 8 : 5 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="absolute w-0.5 h-0.5 bg-accent/40 rounded-full"
                    style={{
                      left: `${25 + (i % 2) * 35}%`,
                      top: `${35 + (i % 3) * 15}%`,
                    }}
                  />
                ))}
              </div>
              
              {/* Mobile-Friendly Digital Wave Effect */}
              <motion.div
                animate={{
                  backgroundPosition: prefersReducedMotion ? ["100% 100%"] : ["100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 14,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.2) 0%, transparent 40%)`,
                  backgroundSize: '13px 13px'
                }}
              />
              
              {/* Touch-Responsive Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 group-active:opacity-60 transition-opacity duration-300" />
              
              {/* Mobile-Optimized Border Glow */}
              <motion.div
                animate={{
                  rotate: prefersReducedMotion ? 0 : [360, 0],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 30,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-0.5 bg-gradient-to-r from-accent/20 via-primary/20 to-accent/20 rounded-3xl blur opacity-0 group-hover:opacity-100 group-active:opacity-70 transition-opacity duration-300"
              />

              {/* Mobile-Responsive Floating Elements */}
              <motion.div
                animate={{
                  x: prefersReducedMotion ? 0 : [0, 8, 0],
                  y: prefersReducedMotion ? 0 : [0, -12, 0],
                  scale: prefersReducedMotion ? 1 : [1, 1.15, 1],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 14,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-14 md:h-14 opacity-15 group-hover:opacity-30 group-active:opacity-25"
              >
                <Hexagon className="w-full h-full text-accent" />
              </motion.div>
              
              <motion.div
                animate={{
                  rotate: prefersReducedMotion ? 0 : [0, 360],
                  y: prefersReducedMotion ? 0 : [0, -8, 0],
                  scale: prefersReducedMotion ? 1 : [0.9, 1.1, 0.9],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 20,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
                className="absolute bottom-6 left-4 md:bottom-8 md:left-6 w-6 h-6 md:w-8 md:h-8 border border-accent/40 rounded-full opacity-20 group-hover:opacity-40 group-active:opacity-30"
              />

              {/* Mobile Circle Decorations */}
              <motion.div
                animate={{
                  scale: prefersReducedMotion ? 1 : [0.5, 0.8, 0.5],
                  opacity: prefersReducedMotion ? 0.15 : [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 12,
                  repeat: prefersReducedMotion ? 0 : Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/3 left-6 md:left-8 opacity-15"
              >
                <Circle className="w-4 h-4 md:w-6 md:h-6 text-accent" />
              </motion.div>

              {/* 4. Mobile-Optimized Icon Animations with Energy Pulse */}
              <div className="relative z-10 mb-8">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ 
                    type: "spring", 
                    damping: 15, 
                    stiffness: 300,
                    delay: 0.7 
                  }}
                  whileHover={!prefersReducedMotion ? {
                    scale: 1.1,
                    rotateY: -15,
                    rotateX: -5,
                  } : {}}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/40 rounded-2xl group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-500 relative touch-manipulation"
                  style={{
                    transformStyle: "preserve-3d",
                    WebkitTapHighlightColor: 'transparent'
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: prefersReducedMotion ? 0 : [360, 0],
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 25,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "linear"
                    }}
                  >
                    <Compass className="w-8 h-8 md:w-10 md:h-10 text-accent group-hover:text-primary transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Mobile-Friendly Energy Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: prefersReducedMotion ? 1 : [1, 1.6, 1],
                      opacity: prefersReducedMotion ? 0 : [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 3,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeOut",
                      delay: 1
                    }}
                    className="absolute inset-0 border-2 border-primary rounded-2xl"
                  />
                  
                  {/* Secondary Mobile Pulse */}
                  <motion.div
                    animate={{
                      scale: prefersReducedMotion ? 1 : [1, 1.3, 1],
                      opacity: prefersReducedMotion ? 0 : [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 3,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "easeOut",
                      delay: 1.5
                    }}
                    className="absolute inset-0 border border-accent rounded-2xl"
                  />
                  
                  {/* Touch-Responsive Energy Zap Effects */}
                  <motion.div
                    animate={{
                      rotate: prefersReducedMotion ? 0 : [360, 0],
                      scale: prefersReducedMotion ? 1 : [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: prefersReducedMotion ? 0 : 10,
                      repeat: prefersReducedMotion ? 0 : Infinity,
                      ease: "linear",
                      delay: 2
                    }}
                    className="absolute -bottom-1 -left-1 md:-bottom-2 md:-left-2 opacity-60"
                  >
                    <Zap className="w-3 h-3 md:w-4 md:h-4 text-primary" />
                  </motion.div>
                </motion.div>
              </div>

              {/* 6. Staggered Content Animation */}
              <div className="relative z-10">
                <motion.h3
                  initial="hidden"
                  animate="visible"
                  variants={mobileTextVariants}
                  transition={{ delay: 0.9 }}
                  className="text-3xl lg:text-4xl font-bold text-foreground mb-6 group-hover:text-accent transition-colors duration-500"
                >
                  {t('mission.heading')}
                </motion.h3>
                
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={mobileTextVariants}
                  transition={{ delay: 1.1 }}
                  className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-500"
                >
                  {t('mission.text')}
                </motion.p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;