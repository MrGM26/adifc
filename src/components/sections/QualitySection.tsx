import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Download, CheckCircle, Shield, Sparkles, Zap, Star } from 'lucide-react';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';

const QualitySection = () => {
  const { t } = useLanguage();
  const prefersReducedMotion = useReducedMotion();

  const certifications = [
    {
      name: t('quality.esma.name'),
      description: t('quality.esma.desc'),
      icon: Award
    },
    {
      name: t('quality.iso9001.name'),
      description: t('quality.iso9001.desc'),
      icon: CheckCircle
    },
    {
      name: t('quality.iso14001.name'),
      description: t('quality.iso14001.desc'),
      icon: Shield
    }
  ];

  return (
    <AnimatedSection className="py-3 md:py-4 bg-background relative overflow-hidden">
      {/* Continuous Background Animation Effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Orbs - Always Active */}
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-1/4 left-1/6 w-48 h-48 bg-gradient-to-r from-primary/10 to-accent/8 rounded-full blur-3xl"
        />
        
        <motion.div
          animate={{
            x: [0, -90, 0],
            y: [0, 70, 0],
            scale: [1, 0.7, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
          className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-gradient-to-r from-accent/12 to-primary/8 rounded-full blur-3xl"
        />

        {/* Floating Particles - Continuous */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [0.5, 1.2, 0.5],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3
            }}
            className={`absolute w-2 h-2 rounded-full ${
              i % 3 === 0 ? 'bg-primary/60' : i % 3 === 1 ? 'bg-accent/60' : 'bg-secondary/60'
            }`}
            style={{
              left: `${10 + (i % 4) * 22}%`,
              top: `${15 + (i % 5) * 18}%`,
            }}
          />
        ))}

        {/* Geometric Elements - Always Moving */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`geo-${i}`}
            animate={{
              rotate: [0, 360],
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.4, 0.1],
              x: [0, 20, 0],
            }}
            transition={{
              duration: 12 + i * 1.5,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.8
            }}
            className="absolute"
            style={{
              left: `${20 + (i % 3) * 25}%`,
              top: `${25 + (i % 2) * 35}%`,
            }}
          >
            {i % 4 === 0 ? (
              <Sparkles className="w-4 h-4 text-primary/50" />
            ) : i % 4 === 1 ? (
              <Zap className="w-3 h-3 text-accent/50" />
            ) : i % 4 === 2 ? (
              <Star className="w-3 h-3 text-primary/40" />
            ) : (
              <div className="w-2 h-2 bg-accent/50 rounded-full" />
            )}
          </motion.div>
        ))}

        {/* Energy Grid - Continuous Movement */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px),
              linear-gradient(hsl(var(--accent) / 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 relative"
        >
          {/* Animated Title with Continuous Effects */}
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-4xl font-bold mb-4 text-foreground relative inline-block"
          >
            {t('quality.title')}
            
            {/* Continuous Shimmer Effect */}
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
              className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent skew-x-12"
            />
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-xl text-muted-foreground max-w-3xl mx-auto"
          >
            {t('quality.description')}
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Advanced Testing Facility - Enhanced with Continuous Animations */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="group cursor-pointer"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-700">
              <div className="relative overflow-hidden rounded-2xl">
                <motion.img 
                  src="/lovable-uploads/d49d2281-ee9c-4993-8a06-33c78a1c3972.png"
                  alt="Advanced Testing Facility - Quality Engineers"
                  className="w-full h-96 object-cover"
                  animate={{
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  whileHover={{
                    scale: 1.08,
                    transition: { duration: 0.5 }
                  }}
                />
                
                {/* Continuous Overlay Animation */}
                <motion.div 
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                  style={{
                    backgroundImage: 'radial-gradient(circle at 30% 80%, rgba(255,255,255,0.1) 0%, transparent 50%)'
                  }}
                />
                
                {/* Enhanced Floating Particles - Always Active */}
                <div className="absolute inset-0">
                  {[...Array(12)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [0, -25, 0],
                        x: [0, 10, 0],
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5],
                      }}
                      transition={{
                        duration: 4 + i * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.2
                      }}
                      className={`absolute w-1.5 h-1.5 rounded-full ${
                        i % 3 === 0 ? 'bg-accent' : i % 3 === 1 ? 'bg-primary' : 'bg-white'
                      }`}
                      style={{
                        left: `${20 + (i % 3) * 25}%`,
                        top: `${25 + (i % 4) * 20}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Continuous Shine Effect */}
                <motion.div
                  animate={{
                    x: ["-150%", "150%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatDelay: 3,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12"
                />

                {/* Mobile-Optimized Content with Slide Animation */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="absolute bottom-6 left-6 right-6 text-white"
                >
                  <motion.h3
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors duration-300"
                  >
                    {t('quality.facility.title')}
                  </motion.h3>
                  <motion.p
                    initial={{ x: 30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                    className="text-lg opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                  >
                    {t('quality.facility.desc')}
                  </motion.p>
                </motion.div>

                {/* Energy Pulse Border */}
                <motion.div
                  animate={{
                    opacity: [0.2, 0.6, 0.2],
                    scale: [1, 1.02, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="absolute inset-0 border-2 border-primary/30 rounded-2xl pointer-events-none"
                />
              </div>
            </div>
          </motion.div>

          {/* Certifications - Enhanced with Continuous Effects */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          >
            <div>
              <div className="grid gap-6 mb-8">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                      className="group"
                    >
                      <Card className="border-0 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        {/* Continuous Background Glow */}
                        <motion.div
                          animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.05, 1],
                          }}
                          transition={{
                            duration: 4 + index,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: index * 0.5
                          }}
                          className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-0 group-hover:opacity-100"
                        />
                        
                        <CardContent className="p-6 relative z-10">
                          <div className="flex items-center gap-4">
                            <motion.div 
                              className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300 relative"
                              animate={{
                                rotate: [0, 5, 0, -5, 0],
                              }}
                              transition={{
                                duration: 6,
                                repeat: Infinity,
                                ease: "easeInOut",
                                delay: index * 0.8
                              }}
                              whileHover={{
                                scale: 1.15,
                                rotate: 12,
                                transition: { duration: 0.3 }
                              }}
                            >
                              <IconComponent className="text-primary transition-all duration-300" size={24} />
                              
                              {/* Energy Ring Effect */}
                              <motion.div
                                animate={{
                                  scale: [1, 1.5, 1],
                                  opacity: [0.5, 0, 0.5],
                                }}
                                transition={{
                                  duration: 3,
                                  repeat: Infinity,
                                  ease: "easeOut",
                                  delay: index * 0.4
                                }}
                                className="absolute inset-0 border-2 border-primary/30 rounded-full"
                              />
                            </motion.div>
                            <div>
                              <motion.h4 
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.8 + index * 0.2, duration: 0.5 }}
                                className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300"
                              >
                                {cert.name}
                              </motion.h4>
                              <motion.p 
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 1 + index * 0.2, duration: 0.5 }}
                                className="text-muted-foreground"
                              >
                                {cert.description}
                              </motion.p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button className="w-full bg-accent hover:bg-accent/90 text-white modern-button relative overflow-hidden" size="lg">
                  {/* Button Shimmer Effect */}
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
                  <Download className="mr-2" size={20} />
                  {t('quality.download')}
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Quality Process */}
        <AnimatedElement variant="fadeInUp" delay={0.6}>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">{t('quality.process.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">1</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{t('quality.process.step1.title')}</h4>
                <p className="text-muted-foreground">{t('quality.process.step1.desc')}</p>
              </div>
              <div className="text-center group">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">2</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{t('quality.process.step2.title')}</h4>
                <p className="text-muted-foreground">{t('quality.process.step2.desc')}</p>
              </div>
              <div className="text-center group">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">3</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{t('quality.process.step3.title')}</h4>
                <p className="text-muted-foreground">{t('quality.process.step3.desc')}</p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
};

export default QualitySection;