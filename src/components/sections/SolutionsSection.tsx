import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Building, Construction } from 'lucide-react';

const SolutionsSection = () => {
  const { t } = useLanguage();
  
  const solutions = [
    {
      icon: Home,
      titleKey: 'solutions.residential',
      description: 'Villa communities, housing developments, residential complexes',
      features: ['Concrete Blocks', 'Interlock Pavers', 'Prefab Units'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center',
      gradient: 'from-blue-600 to-blue-800'
    },
    {
      icon: Building,
      titleKey: 'solutions.commercial', 
      description: 'Shopping malls, office towers, retail spaces, hotels',
      features: ['Steel Structures', 'Facade Systems', 'Lightweight Panels'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&crop=center',
      gradient: 'from-gray-600 to-gray-800'
    },
    {
      icon: Construction,
      titleKey: 'solutions.infrastructure',
      description: 'Highways, sidewalks, public spaces, infrastructure projects',
      features: ['Interlock Pavers', 'Concrete Blocks', 'Portable Units'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center',
      gradient: 'from-orange-600 to-orange-800'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tailored building solutions for every sector in the UAE
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={solution.image}
                    alt={t(solution.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradient} opacity-80`} />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">
                      <IconComponent size={48} className="mx-auto mb-4" />
                      <h3 className="text-2xl font-bold">
                        {t(solution.titleKey)}
                      </h3>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2 text-foreground">Key Products:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, idx) => (
                        <span key={idx} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
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