import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, TrendingUp, Target, CheckCircle } from 'lucide-react';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';

const CaseStudiesSection = () => {
  const { t } = useLanguage();
  
  const caseStudies = [
    {
      category: t('casestudies.residential'),
      title: t('casestudies.project1.title'),
      description: t('casestudies.project1.desc'),
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop&crop=center',
      results: [
        { label: t('casestudies.metrics.cost'), value: '15%', icon: TrendingUp },
        { label: t('casestudies.metrics.time'), value: '30%', icon: Clock },
        { label: t('casestudies.metrics.compliance'), value: '100%', icon: CheckCircle }
      ],
      location: 'Abu Dhabi, UAE',
      duration: '18 months'
    },
    {
      category: t('casestudies.commercial'),
      title: t('casestudies.project2.title'),
      description: t('casestudies.project2.desc'),
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&crop=center',
      results: [
        { label: t('casestudies.metrics.cost'), value: '20%', icon: TrendingUp },
        { label: t('casestudies.metrics.time'), value: '25%', icon: Clock },
        { label: t('casestudies.metrics.compliance'), value: '100%', icon: CheckCircle }
      ],
      location: 'Dubai, UAE',
      duration: '12 months'
    },
    {
      category: t('casestudies.infrastructure'),
      title: t('casestudies.project3.title'),
      description: t('casestudies.project3.desc'),
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop&crop=center',
      results: [
        { label: t('casestudies.metrics.cost'), value: '12%', icon: TrendingUp },
        { label: t('casestudies.metrics.time'), value: '40%', icon: Clock },
        { label: t('casestudies.metrics.compliance'), value: '100%', icon: CheckCircle }
      ],
      location: 'Dubai, UAE',
      duration: '24 months'
    }
  ];

  return (
    <AnimatedSection className="py-8 bg-transparent">
      <div className="container mx-auto px-4">
        <AnimatedElement variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('casestudies.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('casestudies.subtitle')}
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <AnimatedElement 
              key={index} 
              variant="fadeInUp" 
              delay={index * 0.1}
              className="group"
            >
              <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden cursor-pointer">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-all duration-500 group-hover:from-black/50 group-hover:to-transparent" />
                  
                  {/* Enhanced shine effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                  </div>

                  {/* Floating particles effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute top-6 left-6 w-1.5 h-1.5 bg-accent rounded-full animate-bounce"></div>
                    <div className="absolute top-10 right-10 w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                    <div className="absolute bottom-10 left-10 w-1 h-1 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                  </div>
                  
                  <div className="absolute top-4 left-4 transform transition-all duration-300 group-hover:scale-110">
                    <Badge className="bg-accent text-white transition-all duration-300 group-hover:bg-primary">{study.category}</Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground transition-all duration-300 group-hover:text-primary">{study.title}</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{study.description}</p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1 transition-all duration-300 group-hover:text-primary">
                      <MapPin size={16} className="transition-all duration-300 group-hover:scale-110" />
                      <span>{study.location}</span>
                    </div>
                    <div className="flex items-center gap-1 transition-all duration-300 group-hover:text-accent">
                      <Clock size={16} className="transition-all duration-300 group-hover:scale-110" />
                      <span>{study.duration}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {study.results.map((result, idx) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={idx} className="flex items-center justify-between group/item">
                          <div className="flex items-center gap-2">
                            <IconComponent className="text-primary transition-all duration-300 group-hover:scale-110 group-hover:text-accent" size={16} />
                            <span className="text-sm text-muted-foreground">{result.label}</span>
                          </div>
                          <span className="font-bold text-accent transition-all duration-300 group-hover:scale-110">{result.value}</span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>

        {/* Customer Testimonial */}
        <AnimatedElement variant="fadeInUp" delay={0.4}>
          <div className="bg-primary text-primary-foreground rounded-lg p-8 text-center">
            <blockquote className="text-2xl md:text-3xl font-light mb-6 leading-relaxed">
              {t('casestudies.testimonial')}
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div>
                <p className="font-bold">{t('casestudies.testimonial.name')}</p>
                <p className="opacity-90">{t('casestudies.testimonial.title')}</p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
};

export default CaseStudiesSection;