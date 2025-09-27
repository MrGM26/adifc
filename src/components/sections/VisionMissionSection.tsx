import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Hexagon, Triangle, Circle, Zap, Star } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionMissionSection = () => {
  const { t, language } = useLanguage();

  // Staggered text animations
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 200,
        duration: 0.8
      }
    }
  };

  // Card slide animations
  const cardVariants = {
    hidden: { opacity: 0, x: 60, rotateY: 20 },
    visible: {
      opacity: 1,
      x: 0,
      rotateY: 0,
      transition: {
        type: "spring" as const,
        damping: 20,
        stiffness: 100,
        duration: 1.2
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-background via-muted/30 to-background">
      {/* 1. Background Animation Effects - Floating Orbs & Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Floating Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 120, 0],
            y: [0, -80, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-accent/10 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 80, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-accent/15 to-primary/10 rounded-full blur-3xl"
        />

        {/* Medium Orbs */}
        <motion.div
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3
          }}
          className="absolute top-1/2 left-1/6 w-48 h-48 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"
        />

        {/* Floating Particles with Opacity Changes */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.8
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 2 === 0 ? 'bg-primary/40' : 'bg-accent/40'
            } ${
              i % 4 === 0 ? 'top-1/4' : i % 4 === 1 ? 'top-1/2' : i % 4 === 2 ? 'top-3/4' : 'top-1/3'
            } ${
              i % 3 === 0 ? 'left-1/6' : i % 3 === 1 ? 'left-1/2' : 'left-5/6'
            }`}
          />
        ))}

        {/* Geometric Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            animate={{
              rotate: [0, 360],
              scale: [0.6, 1.1, 0.6],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.8
            }}
            className={`absolute ${
              i % 4 === 0 ? 'top-1/5' : i % 4 === 1 ? 'top-2/5' : i % 4 === 2 ? 'top-3/5' : 'top-4/5'
            } ${
              i % 3 === 0 ? 'left-1/12' : i % 3 === 1 ? 'left-1/2' : 'left-11/12'
            }`}
          >
            {i % 3 === 0 ? (
              <Hexagon className="w-6 h-6 text-primary/40" />
            ) : i % 3 === 1 ? (
              <Triangle className="w-5 h-5 text-accent/40" />
            ) : (
              <Circle className="w-4 h-4 text-primary/30" />
            )}
          </motion.div>
        ))}

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--primary) / 0.1) 1px, transparent 1px),
                linear-gradient(hsl(var(--primary) / 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Staggered Animation */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 20 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative inline-block mb-6"
          >
            {/* 6. Staggered Text Animation */}
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent relative"
            >
              {t('vision.title')}
            </motion.h2>
            
            {/* Holographic Shimmer Effect */}
            <motion.div
              animate={{
                x: ["-200%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 mix-blend-overlay"
            />
            
            {/* Energy Pulse Behind Text */}
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 blur-xl -z-10"
            />
          </motion.div>
        </div>

        {/* Vision & Mission Grid with 3D Effects */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Vision Glass Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.3 }}
            className="group relative"
          >
            {/* 2. Glass Morphism Card with Futuristic Glow */}
            <div className="relative bg-card/50 backdrop-blur-2xl border border-primary/20 rounded-3xl p-10 lg:p-12 h-full overflow-hidden transition-all duration-700 hover:bg-card/70 hover:border-primary/40 hover:shadow-2xl hover:shadow-primary/20 modern-card">
              
              {/* Particle System Background */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40, 0],
                      x: [0, 10, 0],
                      opacity: [0.1, 0.4, 0.1],
                      scale: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 6 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className={`absolute w-1 h-1 bg-primary/50 rounded-full ${
                      Math.random() > 0.5 ? 'bg-accent/40' : 'bg-primary/40'
                    }`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
              
              {/* Digital Wave Effect */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.3) 0%, transparent 50%)`,
                  backgroundSize: '30px 30px'
                }}
              />
              
              {/* Futuristic Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-1 bg-gradient-to-r from-primary/30 via-accent/30 to-primary/30 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* 5. Floating Geometric Elements */}
              <motion.div
                animate={{
                  y: [0, -25, 0],
                  rotate: [0, 180, 360],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 w-16 h-16 border-2 border-primary/30 rounded-full opacity-20 group-hover:opacity-40"
              />
              
              <motion.div
                animate={{
                  rotate: [0, -120, 0],
                  scale: [1, 0.6, 1],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
                className="absolute bottom-12 left-8 w-12 h-12 opacity-15 group-hover:opacity-30"
              >
                <Triangle className="w-full h-full text-accent" />
              </motion.div>

              {/* Star Decorations */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-1/2 right-12 opacity-20"
              >
                <Star className="w-6 h-6 text-primary" />
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
                  variants={textVariants}
                  transition={{ delay: 0.7 }}
                  className="text-3xl lg:text-4xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-500"
                >
                  {t('vision.heading')}
                </motion.h3>
                
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={{ delay: 0.9 }}
                  className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-500"
                >
                  {t('vision.text')}
                </motion.p>
              </div>
            </div>
          </motion.div>

          {/* Mission Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="group relative"
          >
            {/* Glass Morphism Card */}
            <div className="relative bg-white/[0.02] backdrop-blur-xl border border-emerald-400/20 rounded-3xl p-10 lg:p-12 h-full overflow-hidden transition-all duration-700 hover:bg-white/[0.05] hover:border-emerald-400/40 hover:shadow-2xl hover:shadow-emerald-400/10">
              
              {/* Futuristic Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 via-transparent to-teal-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-0.5 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-cyan-400/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* Floating Geometric Shapes */}
              <motion.div
                animate={{
                  x: [0, 15, 0],
                  y: [0, -25, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-8 right-8 w-20 h-20 opacity-15"
              >
                <Hexagon className="w-full h-full text-emerald-400" />
              </motion.div>
              
              <motion.div
                animate={{
                  rotate: [0, 360],
                  y: [0, -15, 0],
                }}
                transition={{
                  duration: 14,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
                className="absolute bottom-12 left-8 w-10 h-10 border-2 border-emerald-400/40 rounded-full opacity-20"
              />

              {/* Icon Container with 3D Effects */}
              <div className="relative z-10 mb-8">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotateY: -15,
                    rotateX: -5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 backdrop-blur-sm border border-emerald-400/30 rounded-2xl group-hover:shadow-lg group-hover:shadow-emerald-400/25 transition-all duration-500"
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 18,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Compass className="w-10 h-10 text-emerald-300 group-hover:text-emerald-200 transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1
                    }}
                    className="absolute inset-0 border-2 border-emerald-400 rounded-2xl"
                  />
                </motion.div>
              </div>

              {/* Content with Staggered Animation */}
              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  className="text-3xl lg:text-4xl font-bold text-emerald-100 mb-6 group-hover:text-white transition-colors duration-500"
                >
                  {t('mission.heading')}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
                  className="text-emerald-200/80 leading-relaxed text-lg group-hover:text-emerald-100/90 transition-colors duration-500"
                >
                  {t('mission.text')}
                </motion.p>
              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    x: [0, 20, 0],
                    y: [0, -25, 0],
                    opacity: [0.3, 0.7, 0.3],
                    scale: [0.3, 0.8, 0.3],
                  }}
                  transition={{
                    duration: 5 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 1.2
                  }}
                  className={`absolute w-1.5 h-1.5 bg-emerald-400/50 rounded-full ${
                    i % 3 === 0 ? 'top-1/3' : i % 3 === 1 ? 'top-1/2' : 'top-2/3'
                  } ${
                    i % 2 === 0 ? 'left-1/3' : 'right-1/3'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Mission Glass Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.5 }}
            className="group relative"
          >
            {/* 2. Glass Morphism Card with Futuristic Glow */}
            <div className="relative bg-card/50 backdrop-blur-2xl border border-accent/20 rounded-3xl p-10 lg:p-12 h-full overflow-hidden transition-all duration-700 hover:bg-card/70 hover:border-accent/40 hover:shadow-2xl hover:shadow-accent/20 modern-card">
              
              {/* Particle System Background */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -40, 0],
                      x: [0, -10, 0],
                      opacity: [0.1, 0.4, 0.1],
                      scale: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 7 + i * 0.3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.25
                    }}
                    className={`absolute w-1 h-1 bg-accent/50 rounded-full ${
                      Math.random() > 0.5 ? 'bg-primary/40' : 'bg-accent/40'
                    }`}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
              
              {/* Digital Wave Effect */}
              <motion.div
                animate={{
                  backgroundPosition: ["100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.3) 0%, transparent 50%)`,
                  backgroundSize: '25px 25px'
                }}
              />
              
              {/* Futuristic Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Animated Border Glow */}
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-1 bg-gradient-to-r from-accent/30 via-primary/30 to-accent/30 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* 5. Floating Geometric Elements */}
              <motion.div
                animate={{
                  x: [0, 20, 0],
                  y: [0, -30, 0],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-8 right-8 w-20 h-20 opacity-15 group-hover:opacity-30"
              >
                <Hexagon className="w-full h-full text-accent" />
              </motion.div>
              
              <motion.div
                animate={{
                  rotate: [0, 360],
                  y: [0, -20, 0],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
                className="absolute bottom-12 left-8 w-10 h-10 border-2 border-accent/40 rounded-full opacity-20 group-hover:opacity-40"
              />

              {/* Circle Decorations */}
              <motion.div
                animate={{
                  scale: [0.3, 1, 0.3],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/3 left-12 opacity-20"
              >
                <Circle className="w-8 h-8 text-accent" />
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
                    delay: 0.7 
                  }}
                  whileHover={{
                    scale: 1.15,
                    rotateY: -20,
                    rotateX: -10,
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-accent/20 to-primary/20 backdrop-blur-sm border border-accent/40 rounded-2xl group-hover:shadow-lg group-hover:shadow-accent/30 transition-all duration-500 relative"
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                    }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Compass className="w-10 h-10 text-accent group-hover:text-primary transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Energy Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.6, 0, 0.6],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1
                    }}
                    className="absolute inset-0 border-2 border-primary rounded-2xl"
                  />
                  
                  {/* Secondary Pulse */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.4, 0, 0.4],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeOut",
                      delay: 1.5
                    }}
                    className="absolute inset-0 border border-accent rounded-2xl"
                  />
                  
                  {/* Energy Zap Effects */}
                  <motion.div
                    animate={{
                      rotate: [360, 0],
                      scale: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                      delay: 2
                    }}
                    className="absolute -bottom-2 -left-2 opacity-60"
                  >
                    <Zap className="w-4 h-4 text-primary" />
                  </motion.div>
                </motion.div>
              </div>

              {/* 6. Staggered Content Animation */}
              <div className="relative z-10">
                <motion.h3
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={{ delay: 0.9 }}
                  className="text-3xl lg:text-4xl font-bold text-foreground mb-6 group-hover:text-accent transition-colors duration-500"
                >
                  {t('mission.heading')}
                </motion.h3>
                
                <motion.p
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  transition={{ delay: 1.1 }}
                  className="text-muted-foreground leading-relaxed text-lg group-hover:text-foreground/80 transition-colors duration-500"
                >
                  {t('mission.text')}
                </motion.p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;