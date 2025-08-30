import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';
import { CounterAnimation } from '@/components/animations/CounterAnimation';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat"
      />
      
      {/* Modern Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0 gradient-hero"
      />
      
      {/* Animated floating elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full floating" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/5 rounded-full floating" style={{ animationDelay: '2s' }}></div>
      </div>
      
      {/* Content Overlay */}
      <AnimatedSection className="relative z-10 container mx-auto px-4 text-center text-white">
        <AnimatedElement variant="fadeInUp" delay={0.2}>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {t('hero.title')}
          </h1>
        </AnimatedElement>
        
        <AnimatedElement variant="fadeInUp" delay={0.4}>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            {t('hero.subtitle')}
          </p>
        </AnimatedElement>
        
        <AnimatedElement variant="fadeInUp" delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="modern-button bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold shadow-lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta')}
          </Button>
          <Button size="lg" className="modern-button glass-card text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-bold shadow-lg" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('nav.products')}
          </Button>
        </AnimatedElement>

        {/* Trust Indicators with Counter Animations */}
        <AnimatedElement variant="fadeInUp" delay={0.8} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto stagger-children">
          <div className="text-center modern-card">
            <CounterAnimation to={2008} className="text-3xl font-bold text-accent mb-2" />
            <div className="text-sm opacity-80">Established</div>
          </div>
          <div className="text-center modern-card">
            <div className="text-3xl font-bold text-accent mb-2">UAE</div>
            <div className="text-sm opacity-80">Coverage</div>
          </div>
          <div className="text-center modern-card">
            <div className="text-3xl font-bold text-accent mb-2">ISO</div>
            <div className="text-sm opacity-80">Certified</div>
          </div>
          <div className="text-center modern-card">
            <CounterAnimation to={1000} suffix="+" className="text-3xl font-bold text-accent mb-2" />
            <div className="text-sm opacity-80">Projects</div>
          </div>
        </AnimatedElement>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection;