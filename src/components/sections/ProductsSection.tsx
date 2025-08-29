import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight, Building2, Construction, Home, Factory, Wrench, Bath } from 'lucide-react';

const ProductsSection = () => {
  const { t } = useLanguage();
  
  const products = [
    {
      icon: Building2,
      titleKey: 'products.concrete',
      description: 'High-strength concrete blocks for construction',
      image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Construction, 
      titleKey: 'products.interlock',
      description: 'Durable interlocking pavers for roads and walkways',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Factory,
      titleKey: 'products.panels', 
      description: 'Lightweight building panels for fast construction',
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Home,
      titleKey: 'products.prefab',
      description: 'Complete prefabricated building solutions', 
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Wrench,
      titleKey: 'products.steel',
      description: 'Steel and light gauge steel structures',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center'
    },
    {
      icon: Bath,
      titleKey: 'products.bathroom',
      description: 'Complete bathroom pod solutions',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&h=300&fit=crop&crop=center'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('products.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Premium building materials manufactured to international standards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={t(product.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <IconComponent className="text-white" size={32} />
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-foreground">
                    {t(product.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto text-primary hover:text-primary/80 group">
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;