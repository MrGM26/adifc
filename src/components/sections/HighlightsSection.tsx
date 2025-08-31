import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';
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
    <AnimatedSection className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <AnimatedElement variant="fadeInUp" delay={0.2} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what makes us the preferred construction partner across the UAE
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-children">
          {highlights.map((highlight, index) => {
            const IconComponent = highlight.icon;
            return (
              <AnimatedElement 
                key={index} 
                variant="zoomIn" 
                delay={0.4 + index * 0.1}
                className="h-full"
              >
                <Card className="modern-card glass-card border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-card/80 backdrop-blur-sm h-full group">
                  <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background/50 mb-6 ${highlight.colorClass} glow-primary group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent 
                        size={32} 
                        strokeWidth={2} 
                        className="icon-float group-hover:text-accent transition-colors duration-300" 
                      />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-gradient-animate transition-all duration-300">
                      {t(highlight.titleKey)}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {t(highlight.descKey)}
                    </p>
                  </CardContent>
                </Card>
              </AnimatedElement>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default HighlightsSection;