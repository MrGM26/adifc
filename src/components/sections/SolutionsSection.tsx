import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Home, Building, Construction, ArrowRight } from 'lucide-react';

const SolutionsSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const solutions = [
    {
      icon: Home,
      titleKey: 'solutions.residential',
      titleEn: 'Residential Projects',
      titleAr: 'المشاريع السكنية',
      description: 'Villa communities, housing developments, and residential complexes across the UAE',
      features: ['Concrete Blocks', 'Interlock Pavers', 'Prefab Units'],
      featuresAr: ['البلوكات الخرسانية', 'بلاط الانترلوك', 'الوحدات الجاهزة'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&h=500&fit=crop&crop=center',
      gradient: 'from-blue-600/80 to-blue-800/80',
      delay: 0
    },
    {
      icon: Building,
      titleKey: 'solutions.commercial', 
      titleEn: 'Commercial Buildings',
      titleAr: 'المباني التجارية',
      description: 'Shopping malls, office towers, retail spaces, and hospitality projects',
      features: ['Steel Structures', 'Facade Systems', 'Lightweight Panels'],
      featuresAr: ['الهياكل الفولاذية', 'أنظمة الواجهات', 'الألواح الخفيفة'],
      image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=700&h=500&fit=crop&crop=center',
      gradient: 'from-gray-600/80 to-gray-800/80',
      delay: 200
    },
    {
      icon: Construction,
      titleKey: 'solutions.infrastructure',
      titleEn: 'Infrastructure Projects',
      titleAr: 'مشاريع البنية التحتية',
      description: 'Highways, sidewalks, public spaces, and large-scale infrastructure developments',
      features: ['Interlock Pavers', 'Concrete Blocks', 'Modular Units'],
      featuresAr: ['بلاط الانترلوك', 'البلوكات الخرسانية', 'الوحدات النمطية'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&h=500&fit=crop&crop=center',
      gradient: 'from-orange-600/80 to-orange-800/80',
      delay: 400
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.solution-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-up');
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden"
    >
      {/* Industrial Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--primary))_1px,transparent_1px)] bg-[length:50px_50px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl font-bold mb-6 text-foreground relative">
              <span className="caption-en block">{language === 'en' ? 'Our Solutions' : 'حلولنا'}</span>
              {language === 'ar' && (
                <span className="caption-ar block text-3xl mt-2 text-muted-foreground">Our Solutions</span>
              )}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Comprehensive building solutions tailored for every sector across the United Arab Emirates'
              : 'حلول البناء الشاملة المصممة خصيصاً لكل قطاع في دولة الإمارات العربية المتحدة'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={index} 
                className="solution-card group industrial-border bg-card/95 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 ease-in-out overflow-hidden opacity-0"
                style={{ animationDelay: `${solution.delay}ms` }}
              >
                <div className="relative h-72 overflow-hidden shine-effect">
                  <img 
                    src={solution.image}
                    alt={language === 'en' ? solution.titleEn : solution.titleAr}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradient} group-hover:opacity-70 transition-opacity duration-300`} />
                  
                  {/* Icon and Title Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white transform group-hover:scale-105 transition-transform duration-300">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 mb-4 inline-block">
                        <IconComponent size={48} className="mx-auto" />
                      </div>
                      <div className="bilingual-caption">
                        <h3 className="caption-en text-2xl font-bold mb-1">
                          {solution.titleEn}
                        </h3>
                        <h4 className="caption-ar text-xl opacity-90">
                          {solution.titleAr}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="font-bold mb-4 text-foreground flex items-center">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {language === 'en' ? 'Key Products:' : 'المنتجات الرئيسية:'}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {(language === 'en' ? solution.features : solution.featuresAr).map((feature, idx) => (
                        <span 
                          key={idx} 
                          className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                    <span className={language === 'ar' ? 'ml-2' : 'mr-2'}>
                      {language === 'en' ? 'Explore Solutions' : 'استكشف الحلول'}
                    </span>
                    <ArrowRight 
                      size={18} 
                      className={`transition-transform group-hover:translate-x-1 ${
                        language === 'ar' ? 'rotate-180 group-hover:-translate-x-1' : ''
                      }`} 
                    />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              {language === 'en' ? 'Need a Custom Solution?' : 'تحتاج حلول مخصص؟'}
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {language === 'en' 
                ? 'Our engineering team can design tailored solutions for your specific project requirements.'
                : 'يمكن لفريق الهندسة لدينا تصميم حلول مخصصة لمتطلبات مشروعك المحددة.'
              }
            </p>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 px-8"
            >
              {language === 'en' ? 'Contact Our Engineers' : 'تواصل مع مهندسينا'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;