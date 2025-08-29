import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Home, Building2, Construction } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const SolutionsSection = () => {
  const { t } = useLanguage();

  const solutions = [
    {
      icon: Home,
      titleKey: 'solutions.residential',
      description: 'Complete solutions for residential developments, villas, and housing communities.',
      features: ['Concrete Blocks', 'Interlock Pavers', 'Lightweight Panels'],
      image: '/api/placeholder/600/400',
      color: 'from-primary/20 to-primary/10',
    },
    {
      icon: Building2,
      titleKey: 'solutions.commercial',
      description: 'Robust building materials for commercial complexes, offices, and retail spaces.',
      features: ['Prefab Units', 'Steel Structures', 'Facade Systems'],
      image: '/api/placeholder/600/400',
      color: 'from-accent/20 to-accent/10',
    },
    {
      icon: Construction,
      titleKey: 'solutions.infrastructure',
      description: 'Durable materials for roads, highways, and public infrastructure projects.',
      features: ['Interlock Pavers', 'Concrete Products', 'Modular Systems'],
      image: '/api/placeholder/600/400',
      color: 'from-secondary/20 to-secondary/10',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('solutions.title')}
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className={`aspect-video bg-gradient-to-br ${solution.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <IconComponent className="h-20 w-20 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="absolute top-4 left-4">
                    <div className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-sm font-medium text-primary">
                        {t(solution.titleKey)}
                      </span>
                    </div>
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {t(solution.titleKey)}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-foreground">Key Products:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                          <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Button className="w-full" variant="outline">
                    Explore Solutions
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

export default SolutionsSection;