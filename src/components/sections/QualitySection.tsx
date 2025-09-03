import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Award, Download, CheckCircle, Shield } from 'lucide-react';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';

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
    <AnimatedSection className="py-5 bg-background">
      <div className="container mx-auto px-4">
        <AnimatedElement variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('quality.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('quality.description')}
          </p>
        </AnimatedElement>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Advanced Testing Facility */}
          <AnimatedElement variant="slideInLeft" delay={0.2}>
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-2xl">
              <div className="relative overflow-hidden rounded-2xl">
                <img 
                  src="/lovable-uploads/d49d2281-ee9c-4993-8a06-33c78a1c3972.png"
                  alt="Advanced Testing Facility - Quality Engineers"
                  className="w-full h-96 object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Animated overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-all duration-500 group-hover:from-black/40 group-hover:via-black/10" />
                
                {/* Animated content */}
                <div className="absolute bottom-6 left-6 right-6 text-white transform transition-all duration-500 group-hover:translate-y-[-8px]">
                  <h3 className="text-2xl font-bold mb-2 transform transition-all duration-300 group-hover:text-accent">
                    {t('quality.facility.title')}
                  </h3>
                  <p className="text-lg opacity-90 transform transition-all duration-300 group-hover:opacity-100">
                    {t('quality.facility.desc')}
                  </p>
                </div>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                </div>

                {/* Floating particles effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute top-10 left-10 w-2 h-2 bg-accent rounded-full animate-bounce"></div>
                  <div className="absolute top-20 right-20 w-1 h-1 bg-primary rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                  <div className="absolute bottom-20 left-20 w-1.5 h-1.5 bg-white rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Certifications */}
          <AnimatedElement variant="slideInRight" delay={0.4}>
            <div>
              <div className="grid gap-6 mb-8">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon;
                  return (
                    <Card key={index} className="border-0 shadow-md hover:shadow-xl transition-all duration-300 group">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300 group-hover:scale-110 transform">
                            <IconComponent className="text-primary transition-all duration-300 group-hover:rotate-12" size={24} />
                          </div>
                          <div>
                            <h4 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors duration-300">{cert.name}</h4>
                            <p className="text-muted-foreground">{cert.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              <Button className="w-full bg-accent hover:bg-accent/90 text-white modern-button" size="lg">
                <Download className="mr-2" size={20} />
                {t('quality.download')}
              </Button>
            </div>
          </AnimatedElement>
        </div>

        {/* Quality Process */}
        <AnimatedElement variant="fadeInUp" delay={0.6}>
          <div className="mt-20">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">{t('quality.process.title')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">1</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{t('quality.process.step1.title')}</h4>
                <p className="text-muted-foreground">{t('quality.process.step1.desc')}</p>
              </div>
              <div className="text-center group">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">2</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{t('quality.process.step2.title')}</h4>
                <p className="text-muted-foreground">{t('quality.process.step2.desc')}</p>
              </div>
              <div className="text-center group">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <span className="text-2xl font-bold text-primary group-hover:text-white transition-colors duration-300">3</span>
                </div>
                <h4 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">{t('quality.process.step3.title')}</h4>
                <p className="text-muted-foreground">{t('quality.process.step3.desc')}</p>
              </div>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </AnimatedSection>
  );
};

export default QualitySection;