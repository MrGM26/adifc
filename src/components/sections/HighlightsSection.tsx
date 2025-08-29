import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Settings, MapPin, Award, Handshake } from 'lucide-react';

const HighlightsSection = () => {
  const { t } = useLanguage();
  
  const highlights = [
    {
      icon: Settings,
      titleKey: 'highlights.productivity.title',
      descKey: 'highlights.productivity.desc',
      colorClass: 'text-primary'
    },
    {
      icon: MapPin,
      titleKey: 'highlights.coverage.title', 
      descKey: 'highlights.coverage.desc',
      colorClass: 'text-accent'
    },
    {
      icon: Award,
      titleKey: 'highlights.quality.title',
      descKey: 'highlights.quality.desc', 
      colorClass: 'text-secondary'
    },
    {
      icon: Handshake,
      titleKey: 'highlights.trust.title',
      descKey: 'highlights.trust.desc',
      colorClass: 'text-primary'
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow bg-card">
                <CardContent className="p-8">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background mb-6 ${highlight.colorClass}`}>
                    <IconComponent size={32} strokeWidth={2} />
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