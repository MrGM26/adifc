import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import TypewriterText from '@/components/animations/TypewriterText';
import AnimatedUnderline from '@/components/animations/AnimatedUnderline';

const HeroSection = () => {
  const { t, language } = useLanguage();
  const [showSubtitle, setShowSubtitle] = useState(false);

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
          {language === 'en' ? (
            <>
              <span className="block mb-2">ADIFC —</span>
              <AnimatedUnderline 
                className="block text-accent font-extrabold" 
                animationDelay={2000}
                underlineColor="bg-gradient-to-r from-accent via-white to-accent"
              >
                <TypewriterText 
                  text="Quality you trust," 
                  speed={80} 
                  delay={500}
                  onComplete={() => setTimeout(() => setShowSubtitle(true), 300)}
                />
              </AnimatedUnderline>
              <span className="block mt-2">
                <TypewriterText 
                  text="the partner you rely on." 
                  speed={80} 
                  delay={2500}
                />
              </span>
            </>
          ) : (
            <>
              <span className="block mb-2">ADIFC —</span>
              <AnimatedUnderline 
                className="block text-accent font-extrabold" 
                animationDelay={2000}
                underlineColor="bg-gradient-to-r from-accent via-white to-accent"
              >
                <TypewriterText 
                  text="الجودة التي تثق بها،" 
                  speed={120} 
                  delay={500}
                  onComplete={() => setTimeout(() => setShowSubtitle(true), 300)}
                />
              </AnimatedUnderline>
              <span className="block mt-2">
                <TypewriterText 
                  text="والشريك الذي تعتمد عليه." 
                  speed={120} 
                  delay={2500}
                />
              </span>
            </>
          )}
        </h1>
        <div className={`transition-all duration-1000 ease-out ${
          showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            {t('hero.subtitle')}
          </p>
        </div>
        
        <div className={`transition-all duration-1000 delay-1000 ease-out ${
          showSubtitle ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold shadow-lg shine-effect" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('hero.cta')}
            </Button>
            <Button size="lg" className="bg-white/10 backdrop-blur-sm border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-bold shadow-lg transition-all duration-300 shine-effect" onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
              {t('nav.products')}
            </Button>
          </div>
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