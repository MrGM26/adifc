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

        {/* Simplified Grid Pattern */}
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
              backgroundSize: '60px 60px'
            }}
          />
        </div>
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
            {/* 6. Staggered Text Animation */}
            <motion.h2 
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent relative"
            >
              {t('vision.title')}
            </motion.h2>
            
            {/* Holographic Shimmer Effect - Contained */}
            <motion.div
              animate={{
                x: ["-150%", "150%"],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 4,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 mix-blend-overlay overflow-hidden"
            />
            
            {/* Reduced Energy Pulse */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-primary/15 via-accent/15 to-primary/15 blur-lg -z-10"
            />
          </motion.div>
        </div>

        {/* Vision & Mission Grid - Optimized Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          
          {/* Vision Glass Card */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.3 }}
            className="group relative"
          >
            {/* 2. Glass Morphism Card with Futuristic Glow - Constrained */}
            <div className="relative bg-card/50 backdrop-blur-2xl border border-primary/20 rounded-3xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-700 hover:bg-card/70 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/15 modern-card will-change-transform">
              
              {/* Particle System Background - Reduced count */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 5, 0],
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 5 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.15
                    }}
                    className="absolute w-0.5 h-0.5 bg-primary/40 rounded-full"
                    style={{
                      left: `${20 + (i % 3) * 25}%`,
                      top: `${30 + (i % 4) * 15}%`,
                    }}
                  />
                ))}
              </div>
              
              {/* Simplified Digital Wave Effect */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 0%", "100% 100%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.2) 0%, transparent 40%)`,
                  backgroundSize: '20px 20px'
                }}
              />
              
              {/* Futuristic Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Optimized Animated Border Glow */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-0.5 bg-gradient-to-r from-primary/25 via-accent/25 to-primary/25 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* 5. Constrained Floating Geometric Elements */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 180, 360],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-6 right-6 w-12 h-12 border border-primary/30 rounded-full opacity-20 group-hover:opacity-40"
              />
              
              <motion.div
                animate={{
                  rotate: [0, -120, 0],
                  scale: [1, 0.7, 1],
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 3
                }}
                className="absolute bottom-8 left-6 w-8 h-8 opacity-15 group-hover:opacity-30"
              >
                <Triangle className="w-full h-full text-accent" />
              </motion.div>

              {/* Reduced Star Decorations */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [0.6, 0.9, 0.6],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute top-1/2 right-8 opacity-15"
              >
                <Star className="w-4 h-4 text-primary" />
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
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ delay: 0.5 }}
            className="group relative"
          >
            {/* 2. Glass Morphism Card with Futuristic Glow - Constrained */}
            <div className="relative bg-card/50 backdrop-blur-2xl border border-accent/20 rounded-3xl p-8 lg:p-10 h-full overflow-hidden transition-all duration-700 hover:bg-card/70 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/15 modern-card will-change-transform">
              
              {/* Particle System Background - Reduced count */}
              <div className="absolute inset-0 overflow-hidden">
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      x: [0, -5, 0],
                      opacity: [0.1, 0.3, 0.1],
                      scale: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 6 + i * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.2
                    }}
                    className="absolute w-0.5 h-0.5 bg-accent/40 rounded-full"
                    style={{
                      left: `${20 + (i % 3) * 25}%`,
                      top: `${30 + (i % 4) * 15}%`,
                    }}
                  />
                ))}
              </div>
              
              {/* Simplified Digital Wave Effect */}
              <motion.div
                animate={{
                  backgroundPosition: ["100% 100%", "0% 0%"],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.2) 0%, transparent 40%)`,
                  backgroundSize: '18px 18px'
                }}
              />
              
              {/* Futuristic Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
              {/* Optimized Animated Border Glow */}
              <motion.div
                animate={{
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="absolute -inset-0.5 bg-gradient-to-r from-accent/25 via-primary/25 to-accent/25 rounded-3xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* 5. Constrained Floating Geometric Elements */}
              <motion.div
                animate={{
                  x: [0, 10, 0],
                  y: [0, -20, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-6 right-6 w-14 h-14 opacity-15 group-hover:opacity-30"
              >
                <Hexagon className="w-full h-full text-accent" />
              </motion.div>
              
              <motion.div
                animate={{
                  rotate: [0, 360],
                  y: [0, -10, 0],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 4
                }}
                className="absolute bottom-8 left-6 w-8 h-8 border border-accent/40 rounded-full opacity-20 group-hover:opacity-40"
              />

              {/* Reduced Circle Decorations */}
              <motion.div
                animate={{
                  scale: [0.4, 0.8, 0.4],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute top-1/3 left-8 opacity-15"
              >
                <Circle className="w-6 h-6 text-accent" />
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