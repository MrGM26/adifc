import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Industrial Factory Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.9), rgba(107, 114, 128, 0.8)), url("https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop&crop=center")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
          {t('hero.subtitle')}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold shadow-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta')}
          </Button>
          <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-bold shadow-lg transition-all duration-300" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('nav.products')}
          </Button>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">2008</div>
            <div className="text-sm opacity-80">Established</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">UAE</div>
            <div className="text-sm opacity-80">Coverage</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">ISO</div>
            <div className="text-sm opacity-80">Certified</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-accent mb-2">1000+</div>
            <div className="text-sm opacity-80">Projects</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;