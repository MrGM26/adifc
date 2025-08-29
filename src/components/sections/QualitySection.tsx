import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Download, CheckCircle, Shield } from 'lucide-react';

const QualitySection = () => {
  const { t } = useLanguage();

  const certifications = [
    {
      name: t('quality.esma.name'),
      description: t('quality.esma.desc'),
      icon: Award
    },
    {
      name: t('quality.iso9001.name'),
      description: t('quality.iso9001.desc'),
      icon: CheckCircle
    },
    {
      name: t('quality.iso14001.name'),
      description: t('quality.iso14001.desc'),
      icon: Shield
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('quality.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('quality.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Lab Testing Image */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center"
              alt="Quality testing laboratory"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-lg" />
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{t('quality.facility.title')}</h3>
              <p className="text-lg opacity-90">{t('quality.facility.desc')}</p>
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="grid gap-6 mb-8">
              {certifications.map((cert, index) => {
                const IconComponent = cert.icon;
                return (
                  <Card key={index} className="border-0 shadow-md">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4">
                        <div className="bg-primary/10 p-3 rounded-full">
                          <IconComponent className="text-primary" size={24} />
                        </div>
                        <div>
                          <h4 className="font-bold text-lg text-foreground">{cert.name}</h4>
                          <p className="text-muted-foreground">{cert.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90 text-white" size="lg">
              <Download className="mr-2" size={20} />
              {t('quality.download')}
            </Button>
          </div>
        </div>

        {/* Quality Process */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-foreground">{t('quality.process.title')}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">{t('quality.process.step1.title')}</h4>
              <p className="text-muted-foreground">{t('quality.process.step1.desc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">{t('quality.process.step2.title')}</h4>
              <p className="text-muted-foreground">{t('quality.process.step2.desc')}</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-foreground">{t('quality.process.step3.title')}</h4>
              <p className="text-muted-foreground">{t('quality.process.step3.desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QualitySection;