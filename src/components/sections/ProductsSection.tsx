import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';
import { motion } from 'framer-motion';

const ProductsSection = () => {
  const { t, language } = useLanguage();
  
  const products = [
    {
      titleKey: 'products.concrete',
      description: t('products.concrete.desc'),
      image: '/lovable-uploads/011534d8-8a9a-47d9-862f-cf7e0736f8e8.png',
      delay: 0
    },
    {
      titleKey: 'products.interlock',
      description: t('products.interlock.desc'),
      image: '/lovable-uploads/f2ab887b-e63d-4553-9767-8f8493b0b2a1.png',
      delay: 0.1
    },
    {
      titleKey: 'products.panels',
      description: t('products.panels.desc'),
      image: '/lovable-uploads/e5036fc8-ed06-41bf-bae8-6054b8045b47.png',
      delay: 0.2
    },
    {
      titleKey: 'products.prefab',
      description: t('products.prefab.desc'),
      image: '/lovable-uploads/317391a5-5ed3-40a2-a775-b581865ea82a.png',
      delay: 0.3
    },
    {
      titleKey: 'products.bathroom',
      description: t('products.bathroom.desc'),
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=450&fit=crop&crop=center&auto=format',
      delay: 0.4
    },
    {
      titleKey: 'products.facade',
      description: t('products.facade.desc'),
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=450&fit=crop&crop=center&auto=format',
      delay: 0.5
    }
  ];

  return (
    <AnimatedSection className="py-4 md:py-6 bg-transparent relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary)/0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent)/0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement variant="fadeInUp" className="text-center mb-8 md:mb-12">
          <div className="inline-block mb-8">
            <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold uppercase tracking-wide">
              {t('products.title')}
            </span>
          </div>
          
          <h2 className="text-6xl font-bold mb-8 gradient-text leading-tight">
            {t('products.subtitle')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('products.description')}
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product, index) => (
            <AnimatedElement 
              key={index}
              variant="fadeInUp" 
              delay={product.delay}
              className="group"
            >
              <Card className="mobile-card breathe glass-card border-0 h-full overflow-hidden group cursor-pointer rounded-2xl">
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <motion.img 
                    src={product.image} 
                    alt={t(product.titleKey)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"
                    initial={{ opacity: 1 }}
                    whileHover={{ opacity: 0.7 }}
                    transition={{ duration: 0.5 }}
                  />
                  
                  {/* Enhanced shine effect */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12"
                    initial={{ x: '-100%', opacity: 0 }}
                    whileHover={{ x: '100%', opacity: 1 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(5)].map((_, particleIndex) => (
                      <motion.div
                        key={particleIndex}
                        className="absolute w-1 h-1 bg-accent rounded-full"
                        style={{
                          top: `${20 + particleIndex * 15}%`,
                          left: `${15 + particleIndex * 20}%`
                        }}
                        animate={{
                          y: [0, -20, 0],
                          opacity: [0, 1, 0],
                          scale: [0, 1.5, 0]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: particleIndex * 0.4
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Product Title with enhanced animation */}
                  <motion.div 
                    className="absolute bottom-4 left-4 right-4 text-white"
                    initial={{ y: 10, opacity: 0.9 }}
                    whileHover={{ y: -5, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors duration-300">
                      {t(product.titleKey)}
                    </h3>
                  </motion.div>
                </div>
                
                <CardContent className="p-6 md:p-8">
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed text-sm md:text-base"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {product.description}
                  </motion.p>
                  
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button 
                      variant="ghost" 
                      className="mobile-button group/btn w-full justify-between px-4 py-3 h-auto text-primary hover:text-white hover:bg-gradient-to-r hover:from-primary hover:to-accent transition-all duration-300 font-semibold text-base md:text-lg rounded-xl"
                    >
                      <span>
                        {t('products.explore')}
                      </span>
                      <motion.div
                        whileHover={{ x: language === 'ar' ? -5 : 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ArrowRight 
                          size={20} 
                          className={`text-primary group-hover/btn:text-white transition-all duration-300 ${
                            language === 'ar' ? 'rotate-180' : ''
                          }`} 
                        />
                      </motion.div>
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
        
        {/* Enhanced CTA */}
        <AnimatedElement variant="fadeInUp" delay={0.6} className="text-center mt-12 md:mt-16">
          <motion.div 
            className="bg-gradient-to-br from-white/5 via-primary/5 to-accent/10 rounded-3xl p-8 md:p-12 border border-primary/20 backdrop-blur-xl mobile-card breathe"
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            <motion.h3 
              className="text-2xl md:text-3xl font-bold mb-6 gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              {t('products.catalog.title')}
            </motion.h3>
            <motion.p 
              className="text-muted-foreground mb-8 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {t('products.catalog.desc')}
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button 
                size="lg" 
                className="mobile-button bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent-dark text-white hover:shadow-2xl hover:shadow-primary/25 px-8 md:px-12 py-4 md:py-6 text-base md:text-lg font-bold rounded-full transition-all duration-300 glow-mobile pulse-attention"
              >
                {t('products.catalog.download')}
                <motion.div
                  animate={{ x: language === 'ar' ? [-3, 0, -3] : [0, 3, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className={`ml-3 ${language === 'ar' ? 'rotate-180 mr-3 ml-0' : ''}`} size={20} />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
};

export default ProductsSection;