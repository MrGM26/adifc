import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Factory, Globe, Shield, Handshake } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const HighlightsSection = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: Factory,
      titleKey: 'highlights.productivity.title',
      descKey: 'highlights.productivity.desc',
      color: 'text-primary',
    },
    {
      icon: Globe,
      titleKey: 'highlights.coverage.title',
      descKey: 'highlights.coverage.desc',
      color: 'text-accent',
    },
    {
      icon: Shield,
      titleKey: 'highlights.quality.title',
      descKey: 'highlights.quality.desc',
      color: 'text-secondary',
    },
    {
      icon: Handshake,
      titleKey: 'highlights.trust.title',
      descKey: 'highlights.trust.desc',
      color: 'text-primary',
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-background">
                <CardContent className="p-8 text-center">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted mb-6 ${highlight.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-foreground">
                    {t(highlight.titleKey)}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {t(highlight.descKey)}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;