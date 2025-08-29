import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';

const ProductsSection = () => {
  const { t, language } = useLanguage();
  
  const products = [
    {
      titleKey: 'products.concrete',
      description: t('products.concrete.desc'),
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=600&h=450&fit=crop&crop=center&auto=format',
      delay: 0
    },
    {
      titleKey: 'products.interlock',
      description: t('products.interlock.desc'),
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=450&fit=crop&crop=center&auto=format',
      delay: 0.1
    },
    {
      titleKey: 'products.panels',
      description: t('products.panels.desc'),
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=600&h=450&fit=crop&crop=center&auto=format',
      delay: 0.2
    },
    {
      titleKey: 'products.prefab',
      description: t('products.prefab.desc'),
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=450&fit=crop&crop=center&auto=format',
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
    <AnimatedSection className="py-32 bg-gradient-to-b from-background via-muted/30 to-background relative overflow-hidden">
      {/* Modern Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,hsl(var(--primary)/0.15)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,hsl(var(--accent)/0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedElement variant="fadeInUp" className="text-center mb-20">
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
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product, index) => (
            <AnimatedElement 
              key={index}
              variant="fadeInUp" 
              delay={product.delay}
              className="group"
            >
              <Card className="professional-hover glass-card border-0 h-full overflow-hidden">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={t(product.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="shine-effect absolute inset-0" />
                  
                  {/* Product Title */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">
                      {t(product.titleKey)}
                    </h3>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-8 leading-relaxed text-base">
                    {product.description}
                  </p>
                  
                  <Button 
                    variant="ghost" 
                    className="group/btn w-full justify-between p-0 h-auto text-primary hover:text-accent transition-colors duration-300 font-semibold text-lg"
                  >
                    <span>
                      {t('products.explore')}
                    </span>
                    <ArrowRight 
                      size={20} 
                      className={`group-hover/btn:translate-x-2 transition-transform duration-300 ${
                        language === 'ar' ? 'rotate-180 group-hover/btn:-translate-x-2' : ''
                      }`} 
                    />
                  </Button>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
        
        {/* Enhanced CTA */}
        <AnimatedElement variant="fadeInUp" delay={0.6} className="text-center mt-20">
          <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-3xl p-12 border border-primary/10">
            <h3 className="text-3xl font-bold mb-6 gradient-text">
              {t('products.catalog.title')}
            </h3>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              {t('products.catalog.desc')}
            </p>
            <Button 
              size="lg" 
              className="gradient-primary hover:shadow-2xl hover:shadow-primary/25 text-primary-foreground px-12 py-6 text-lg font-bold rounded-full transition-all duration-300"
            >
              {t('products.catalog.download')}
              <ArrowRight className={`ml-3 ${language === 'ar' ? 'rotate-180 mr-3 ml-0' : ''}`} size={20} />
            </Button>
          </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
};

export default ProductsSection;