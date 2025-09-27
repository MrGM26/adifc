import React from 'react';
import { motion } from 'framer-motion';
import { Target, Compass, Hexagon, Triangle, Circle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionMissionSection = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden bg-gradient-to-br from-slate-950 via-teal-950/20 to-slate-900">
      {/* Futuristic Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Gradient Orbs */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1, 0.8, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-full blur-3xl"
        />

        {/* Geometric Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [0.5, 1, 0.5],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5
            }}
            className={`absolute ${
              i % 4 === 0 ? 'top-1/4' : i % 4 === 1 ? 'top-1/2' : i % 4 === 2 ? 'top-3/4' : 'top-1/3'
            } ${
              i % 3 === 0 ? 'left-1/6' : i % 3 === 1 ? 'left-1/2' : 'left-5/6'
            }`}
          >
            {i % 3 === 0 ? (
              <Hexagon className="w-6 h-6 text-teal-400/30" />
            ) : i % 3 === 1 ? (
              <Triangle className="w-5 h-5 text-cyan-400/30" />
            ) : (
              <Circle className="w-4 h-4 text-emerald-400/30" />
            )}
          </motion.div>
        ))}

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, rgba(20, 184, 166, 0.1) 1px, transparent 1px),
                linear-gradient(rgba(20, 184, 166, 0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header with Staggered Animation */}
        <div className="text-center mb-16 lg:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-6 relative"
          >
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-300 via-cyan-300 to-emerald-300 bg-clip-text text-transparent"
            >
              {t('vision.title')}
            </motion.h2>
            
            {/* Shimmer Effect */}
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 3,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
            />
          </motion.div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          
          {/* Vision Glass Card */}
          <motion.div
            initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="group relative"
          >
            {/* Glass Morphism Card */}
            <div className="relative bg-white/[0.02] backdrop-blur-xl border border-teal-400/20 rounded-3xl p-10 lg:p-12 h-full overflow-hidden transition-all duration-700 hover:bg-white/[0.05] hover:border-teal-400/40 hover:shadow-2xl hover:shadow-teal-400/10">
              
              {/* Futuristic Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-teal-400/5 via-transparent to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              
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
                className="absolute -inset-0.5 bg-gradient-to-r from-teal-400/20 via-cyan-400/20 to-emerald-400/20 rounded-3xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              />

              {/* Floating Geometric Shapes */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                  rotate: [0, 180, 360],
                  scale: [0.8, 1.1, 0.8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-8 right-8 w-16 h-16 border border-teal-400/30 rounded-full opacity-20"
              />
              
              <motion.div
                animate={{
                  rotate: [0, -120, 0],
                  scale: [1, 0.7, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2
                }}
                className="absolute bottom-12 left-8 w-12 h-12 opacity-15"
              >
                <Triangle className="w-full h-full text-cyan-400" />
              </motion.div>

              {/* Icon Container with 3D Effects */}
              <div className="relative z-10 mb-8">
                <motion.div
                  whileHover={{
                    scale: 1.1,
                    rotateY: 15,
                    rotateX: 5,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                  }}
                  className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-teal-400/10 to-cyan-400/10 backdrop-blur-sm border border-teal-400/30 rounded-2xl group-hover:shadow-lg group-hover:shadow-teal-400/25 transition-all duration-500"
                  style={{
                    transformStyle: "preserve-3d"
                  }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <Target className="w-10 h-10 text-teal-300 group-hover:text-teal-200 transition-colors duration-500" />
                  </motion.div>
                  
                  {/* Pulse Effect */}
                  <motion.div
                    animate={{
                      scale: [1, 1.4, 1],
                      opacity: [0.5, 0, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeOut"
                    }}
                    className="absolute inset-0 border-2 border-teal-400 rounded-2xl"
                  />
                </motion.div>
              </div>

              {/* Content with Staggered Animation */}
              <div className="relative z-10">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
                  className="text-3xl lg:text-4xl font-bold text-teal-100 mb-6 group-hover:text-white transition-colors duration-500"
                >
                  {t('vision.heading')}
                </motion.h3>
                
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                  className="text-teal-200/80 leading-relaxed text-lg group-hover:text-teal-100/90 transition-colors duration-500"
                >
                  {t('vision.text')}
                </motion.p>
              </div>

              {/* Floating Particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -30, 0],
                    opacity: [0.2, 0.6, 0.2],
                    scale: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.8
                  }}
                  className={`absolute w-2 h-2 bg-teal-400/40 rounded-full ${
                    i % 3 === 0 ? 'top-1/4' : i % 3 === 1 ? 'top-1/2' : 'top-3/4'
                  } ${
                    i % 2 === 0 ? 'left-1/4' : 'right-1/4'
                  }`}
                />
              ))}
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

        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;