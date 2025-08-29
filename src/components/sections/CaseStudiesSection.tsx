import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Clock, TrendingUp, Target, CheckCircle } from 'lucide-react';

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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('casestudies.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('casestudies.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-accent text-white">{study.category}</Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 text-foreground">{study.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{study.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} />
                    <span>{study.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    <span>{study.duration}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {study.results.map((result, idx) => {
                    const IconComponent = result.icon;
                    return (
                      <div key={idx} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <IconComponent className="text-primary" size={16} />
                          <span className="text-sm text-muted-foreground">{result.label}</span>
                        </div>
                        <span className="font-bold text-accent">{result.value}</span>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Testimonial */}
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
      </div>
    </section>
  );
};

export default CaseStudiesSection;