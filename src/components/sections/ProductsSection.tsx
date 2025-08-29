import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Building, Layers, Home, Settings } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProductsSection = () => {
  const { t } = useLanguage();

  const products = [
    {
      icon: Building,
      titleKey: 'products.concrete',
      description: 'High-strength concrete blocks for structural applications',
      image: '/api/placeholder/400/300',
    },
    {
      icon: Layers,
      titleKey: 'products.interlock',
      description: 'Durable interlocking pavers for roads and walkways',
      image: '/api/placeholder/400/300',
    },
    {
      icon: Home,
      titleKey: 'products.panels',
      description: 'Lightweight panels for modern construction',
      image: '/api/placeholder/400/300',
    },
    {
      icon: Settings,
      titleKey: 'products.prefab',
      description: 'Complete prefabricated building solutions',
      image: '/api/placeholder/400/300',
    },
    {
      icon: Building,
      titleKey: 'products.steel',
      description: 'Steel and light gauge steel structures',
      image: '/api/placeholder/400/300',
    },
    {
      icon: Home,
      titleKey: 'products.portable',
      description: 'Portable units for various applications',
      image: '/api/placeholder/400/300',
    },
    {
      icon: Settings,
      titleKey: 'products.bathroom',
      description: 'Pre-fabricated bathroom pods',
      image: '/api/placeholder/400/300',
    },
    {
      icon: Layers,
      titleKey: 'products.facade',
      description: 'Modern facade systems and panels',
      image: '/api/placeholder/400/300',
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('products.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 group">
                <div className="aspect-video bg-muted relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <IconComponent className="h-16 w-16 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">
                    {t(product.titleKey)}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {product.description}
                  </p>
                  <Button variant="ghost" className="p-0 h-auto font-medium text-primary hover:text-accent group">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
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