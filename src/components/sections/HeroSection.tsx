import React from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';
import { CounterAnimation } from '@/components/animations/CounterAnimation';
const concreteBlocksImage = '/lovable-uploads/011534d8-8a9a-47d9-862f-cf7e0736f8e8.png';

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${concreteBlocksImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Modern Gradient Overlay - reduced opacity to show image */}
      <div 
        className="absolute inset-0 z-10 bg-gradient-to-br from-primary/60 via-primary/40 to-accent/60"
      />
      
      {/* Animated floating elements with enhanced variations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/5 rounded-full floating" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-white/5 rounded-full floating-delayed" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/5 rounded-full floating-slow" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-accent/10 rounded-full floating" style={{ animationDelay: '3s' }}></div>
        <div className="absolute bottom-20 right-10 w-6 h-6 bg-primary/10 rounded-full floating-delayed" style={{ animationDelay: '4s' }}></div>
      </div>
      
      {/* Content Overlay */}
      <AnimatedSection className="relative z-20 container mx-auto px-4 text-center text-white">
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
        
        <AnimatedElement variant="zoomIn" delay={0.6} className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Button size="lg" className="modern-button glass-card glow-primary bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold shadow-lg transform-gpu" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('hero.cta')}
          </Button>
          <Button size="lg" className="modern-button glass-card glow-accent text-white hover:bg-white/20 hover:text-white px-8 py-4 text-lg font-bold shadow-lg transform-gpu" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
            {t('nav.products')}
          </Button>
        </AnimatedElement>

        {/* Enhanced Trust Indicators with Counter Animations */}
        <AnimatedElement variant="elastic" delay={0.8} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto stagger-children">
          <div className="text-center modern-card glow-primary p-6 rounded-2xl">
            <CounterAnimation to={2008} className="text-3xl font-bold text-white mb-2" />
            <div className="text-sm opacity-80">{t('hero.stats.established')}</div>
          </div>
          <div className="text-center modern-card magnetic-hover p-6 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2">UAE</div>
            <div className="text-sm opacity-80">{t('hero.stats.coverage')}</div>
          </div>
          <div className="text-center modern-card scale-on-hover p-6 rounded-2xl">
            <div className="text-3xl font-bold text-white mb-2 pulse-glow">ISO</div>
            <div className="text-sm opacity-80">{t('hero.stats.certified')}</div>
          </div>
          <div className="text-center modern-card glow-accent p-6 rounded-2xl">
            <CounterAnimation to={1000} suffix="+" className="text-3xl font-bold text-white mb-2" />
            <div className="text-sm opacity-80">{t('hero.stats.projects')}</div>
          </div>
        </AnimatedElement>
      </AnimatedSection>
    </section>
  );
};

export default HeroSection;