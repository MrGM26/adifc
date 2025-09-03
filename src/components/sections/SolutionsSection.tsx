import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Building, Construction, ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';

const SolutionsSection = () => {
  const { t, language } = useLanguage();
  
  const solutions = [
    {
      icon: Home,
      titleKey: 'solutions.residential',
      description: t('solutions.residential.desc'),
      features: [
        t('products.concrete'),
        t('products.interlock'),
        t('products.prefab')
      ],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop&crop=center&auto=format',
      gradient: 'from-blue-600/90 to-blue-800/90',
      delay: 0
    },
    {
      icon: Building,
      titleKey: 'solutions.commercial', 
      description: t('solutions.commercial.desc'),
      features: [
        t('products.steel'),
        t('products.facade'),
        t('products.panels')
      ],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&fit=crop&crop=center&auto=format',
      gradient: 'from-gray-700/90 to-gray-900/90',
      delay: 0.2
    },
    {
      icon: Construction,
      titleKey: 'solutions.infrastructure',
      description: t('solutions.infrastructure.desc'),
      features: [
        t('products.interlock'),
        t('products.concrete'),
        t('products.portable')
      ],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop&crop=center&auto=format',
      gradient: 'from-orange-600/90 to-orange-800/90',
      delay: 0.4
    }
  ];

  return (
    <AnimatedSection className="py-12 bg-gradient-to-b from-muted/20 via-background to-muted/10 relative overflow-hidden">
      {/* Advanced Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(30deg,hsl(var(--primary)/0.1)_12%,transparent_12.5%,transparent_87%,hsl(var(--primary)/0.1)_87.5%,hsl(var(--primary)/0.1)),linear-gradient(150deg,hsl(var(--primary)/0.1)_12%,transparent_12.5%,transparent_87%,hsl(var(--primary)/0.1)_87.5%,hsl(var(--primary)/0.1)),linear-gradient(30deg,hsl(var(--primary)/0.1)_12%,transparent_12.5%,transparent_87%,hsl(var(--primary)/0.1)_87.5%,hsl(var(--primary)/0.1)),linear-gradient(150deg,hsl(var(--primary)/0.1)_12%,transparent_12.5%,transparent_87%,hsl(var(--primary)/0.1)_87.5%,hsl(var(--primary)/0.1))] bg-[length:80px_140px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement variant="fadeInUp" className="text-center mb-20">
          <div className="inline-block mb-8">
            <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold uppercase tracking-wide">
              {t('solutions.title')}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 gradient-text leading-tight">
            {t('solutions.subtitle')}
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('solutions.description')}
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <AnimatedElement 
                key={index}
                variant="fadeInUp" 
                delay={solution.delay}
                className="group"
              >
                <Card className="professional-hover glass-card border-0 h-full overflow-hidden group cursor-pointer">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={solution.image}
                      alt={t(solution.titleKey)}
                      className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                      loading="lazy"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradient} transition-all duration-500 group-hover:opacity-80`} />
                    
                    {/* Enhanced shine effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                    </div>

                    {/* Floating particles effect */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                      <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                    </div>
                    
                    {/* Enhanced Icon and Title Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center text-white transform group-hover:scale-105 transition-all duration-500 group-hover:translate-y-[-8px]">
                        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-6 inline-block border border-white/10 transition-all duration-300 group-hover:bg-white/30 group-hover:border-white/20">
                          <IconComponent size={56} className="mx-auto transition-all duration-300 group-hover:scale-110" />
                        </div>
                        {/* Solution Title */}
                        <div>
                          <h3 className="text-3xl font-bold mb-2 transition-all duration-300 group-hover:text-accent">
                            {t(solution.titleKey)}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <CardContent className="p-10">
                    <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                      {solution.description}
                    </p>
                    
                    <div className="mb-10">
                      <h4 className="font-bold mb-6 text-foreground flex items-center text-lg">
                        <div className="w-3 h-3 bg-gradient-primary rounded-full mr-3"></div>
                        {language === 'en' ? 'Key Products:' : 'المنتجات الرئيسية:'}
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {solution.features.map((feature, idx) => (
                          <span 
                            key={idx} 
                            className="bg-primary/10 text-primary px-5 py-3 rounded-full text-sm font-semibold border border-primary/20 hover:bg-primary/20 hover:scale-105 transition-all duration-200 cursor-default"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button className="w-full gradient-primary hover:shadow-2xl hover:shadow-primary/25 text-primary-foreground font-bold py-4 text-lg rounded-xl transition-all duration-300 group/btn">
                      <span className={language === 'ar' ? 'ml-3' : 'mr-3'}>
                        {t('solutions.explore')}
                      </span>
                      <ArrowRight 
                        size={20} 
                        className={`transition-transform group-hover/btn:translate-x-2 ${
                          language === 'ar' ? 'rotate-180 group-hover/btn:-translate-x-2' : ''
                        }`} 
                      />
                    </Button>
                  </CardContent>
                </Card>
              </AnimatedElement>
            );
          })}
        </div>

        {/* Enhanced Bottom CTA */}
        <AnimatedElement variant="fadeInUp" delay={0.6} className="mt-24">
          <div className="gradient-accent rounded-3xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-6 text-white">
                {t('solutions.cta.title')}
              </h3>
              <p className="text-white/90 mb-8 max-w-3xl mx-auto text-lg leading-relaxed">
                {t('solutions.cta.subtitle')}
              </p>
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white/20 backdrop-blur-sm text-white border-white/30 hover:bg-white/30 transition-all duration-300 px-6 sm:px-8 lg:px-10 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-bold rounded-full hover:scale-105"
              >
                <span className="whitespace-nowrap">
                  {t('solutions.cta.button')}
                </span>
                <ArrowRight className={`ml-2 sm:ml-3 ${language === 'ar' ? 'rotate-180 mr-2 sm:mr-3 ml-0' : ''}`} size={18} />
              </Button>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
};

export default SolutionsSection;