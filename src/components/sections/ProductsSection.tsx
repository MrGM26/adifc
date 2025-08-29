import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowRight } from 'lucide-react';

const ProductsSection = () => {
  const { t, language } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  
  const products = [
    {
      titleKey: 'products.concrete',
      titleEn: 'Concrete Blocks',
      titleAr: 'البلوكات الخرسانية',
      description: 'High-strength concrete blocks for construction projects',
      image: 'https://images.unsplash.com/photo-1600573472550-8090b5e0745e?w=500&h=400&fit=crop&crop=center',
      delay: 0
    },
    {
      titleKey: 'products.interlock',
      titleEn: 'Interlock Pavers',
      titleAr: 'بلاط الانترلوك',
      description: 'Durable interlocking pavers for roads and walkways',
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop&crop=center',
      delay: 100
    },
    {
      titleKey: 'products.panels',
      titleEn: 'Lightweight Panels',
      titleAr: 'الألواح الخفيفة',
      description: 'Fortis Easy Panels for fast construction',
      image: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=500&h=400&fit=crop&crop=center',
      delay: 200
    },
    {
      titleKey: 'products.prefab',
      titleEn: 'Prefab Buildings',
      titleAr: 'المباني الجاهزة',
      description: 'Complete modular building solutions',
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=400&fit=crop&crop=center',
      delay: 300
    },
    {
      titleKey: 'products.bathroom',
      titleEn: 'Bathroom Pods',
      titleAr: 'وحدات الحمامات',
      description: 'Complete prefabricated bathroom solutions',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=400&fit=crop&crop=center',
      delay: 400
    },
    {
      titleKey: 'products.facades',
      titleEn: 'Unitized Facades',
      titleAr: 'الواجهات المركبة',
      description: 'Glass and steel facade systems',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=500&h=400&fit=crop&crop=center',
      delay: 500
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll('.product-card');
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add('fade-up');
              }, index * 150);
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
      className="py-24 bg-gradient-to-b from-background to-muted/20 relative overflow-hidden"
    >
      {/* Parallax Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-5xl font-bold mb-6 text-foreground relative">
              <span className="caption-en block">{language === 'en' ? 'Our Products' : 'منتجاتنا'}</span>
              {language === 'ar' && (
                <span className="caption-ar block text-3xl mt-2 text-muted-foreground">Our Products</span>
              )}
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-primary rounded-full"></div>
            </h2>
          </div>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {language === 'en' 
              ? 'Premium building materials manufactured to international standards with cutting-edge technology'
              : 'مواد البناء الممتازة المصنعة وفقاً للمعايير الدولية بتقنية متطورة'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card 
              key={index} 
              className="product-card group industrial-border bg-card/90 backdrop-blur-sm hover:bg-card transition-all duration-300 ease-in-out overflow-hidden opacity-0"
              style={{ animationDelay: `${product.delay}ms` }}
            >
              <div className="relative h-64 overflow-hidden shine-effect">
                <img 
                  src={product.image} 
                  alt={language === 'en' ? product.titleEn : product.titleAr}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
                
                {/* Bilingual Caption Overlay */}
                <div className="absolute bottom-4 left-4 right-4 text-white bilingual-caption">
                  <h3 className="caption-en text-xl font-bold mb-1">
                    {product.titleEn}
                  </h3>
                  <h4 className="caption-ar text-lg opacity-90">
                    {product.titleAr}
                  </h4>
                </div>
              </div>
              
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                  {product.description}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="group/btn p-0 h-auto text-primary hover:text-primary/80 font-semibold"
                >
                  <span className={language === 'ar' ? 'ml-2' : 'mr-2'}>
                    {language === 'en' ? 'Learn More' : 'اعرف المزيد'}
                  </span>
                  <ArrowRight 
                    size={16} 
                    className={`group-hover/btn:translate-x-1 transition-transform ${
                      language === 'ar' ? 'rotate-180 group-hover/btn:-translate-x-1' : ''
                    }`} 
                  />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {language === 'en' ? 'Request Product Catalog' : 'اطلب كتالوج المنتجات'}
            <ArrowRight className={`ml-2 ${language === 'ar' ? 'rotate-180 mr-2 ml-0' : ''}`} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;