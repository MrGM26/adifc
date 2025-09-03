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
              <Card className="professional-hover glass-card border-0 h-full overflow-hidden group cursor-pointer">
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={t(product.titleKey)}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/60 group-hover:via-black/10" />
                  
                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-8 left-8 w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                    <div className="absolute top-16 right-16 w-1 h-1 bg-primary rounded-full" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-16 left-16 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  {/* Product Title with enhanced animation */}
                  <div className="absolute bottom-6 left-6 right-6 text-white transform transition-all duration-500 group-hover:translate-y-[-8px]">
                    <h3 className="text-2xl font-bold mb-2 transition-all duration-300 group-hover:text-accent">
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
                    className="group/btn w-full justify-between px-4 py-2 h-auto text-primary hover:text-white hover:bg-accent transition-all duration-300 font-semibold text-lg"
                  >
                    <span>
                      {t('products.explore')}
                    </span>
                    <ArrowRight 
                      size={20} 
                      className={`text-primary group-hover/btn:text-white group-hover/btn:translate-x-2 transition-all duration-300 ${
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