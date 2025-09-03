import React, { useEffect } from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import HighlightsSection from '@/components/sections/HighlightsSection';
import VisionMissionSection from '@/components/sections/VisionMissionSection';
import ProductsSection from '@/components/sections/ProductsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import TeamMembersSection from '@/components/sections/TeamMembersSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import QuickRFQSection from '@/components/sections/QuickRFQSection';
import QualitySection from '@/components/sections/QualitySection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ui/scroll-to-top';
import { initializeAnimations } from '@/utils/animationObserver';

const Index = () => {
  useEffect(() => {
    // Initialize premium animation system
    const premiumAnimationObserver = initializeAnimations();
    
    // Enhanced animation observer with premium effects
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const element = entry.target as HTMLElement;
          
          // Apply premium reveal animations
          element.classList.add('animate', 'revealed');
          
          // Add staggered animations to children
          if (element.classList.contains('stagger-container')) {
            const children = element.querySelectorAll(':scope > *');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('revealed');
              }, index * 100);
            });
          }
          
          // Mobile micro-interactions
          const isMobile = window.innerWidth < 768;
          if (isMobile && !element.classList.contains('no-bounce')) {
            element.classList.add('micro-bounce');
            setTimeout(() => {
              element.classList.remove('micro-bounce');
            }, 600);
          }
          
          // Add shimmer effect to cards
          if (element.classList.contains('premium-card') || element.classList.contains('modern-card')) {
            element.classList.add('shimmer-effect');
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: window.innerWidth < 768 ? 0.05 : 0.1,
      rootMargin: window.innerWidth < 768 ? '0px 0px -30px 0px' : '0px 0px -100px 0px'
    });

    // Observe all sections and animated elements
    const elementsToObserve = document.querySelectorAll(`
      .fade-in-up, 
      .stagger-children, 
      .mobile-card-enter,
      .section-entrance,
      .reveal-on-scroll,
      .reveal-fade-up,
      .reveal-scale-up,
      .stagger-container,
      section
    `);
    
    elementsToObserve.forEach((el) => observer.observe(el));

    // Enhanced touch interactions for mobile
    if (window.innerWidth < 768) {
      document.querySelectorAll('button, a, [role="button"]').forEach(el => {
        el.classList.add('touch-friendly', 'press-animation', 'hover-lift');
      });
      
      // Add premium card effects to all cards
      document.querySelectorAll('.card, [class*="Card"]').forEach(el => {
        el.classList.add('premium-card', 'magnetic-element');
      });
    }

    return () => {
      observer.disconnect();
      premiumAnimationObserver.disconnect();
    };
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background animate-on-scroll">
        <Header />
        <main className="space-y-0">
          <section id="home" className="section-entrance">
            <HeroSection />
          </section>
          <section id="platform" className="fade-in-up section-entrance">
            <HighlightsSection />
          </section>
          <section id="vision" className="fade-in-up section-entrance">
            <VisionMissionSection />
          </section>
          <section id="products" className="fade-in-up section-entrance">
            <ProductsSection />
          </section>
          <section id="partners" className="fade-in-up section-entrance">
            <PartnersSection />
          </section>
          <section id="team" className="fade-in-up section-entrance">
            <TeamMembersSection />
          </section>
          <section id="solutions" className="fade-in-up section-entrance">
            <SolutionsSection />
          </section>
          <section id="pricing" className="fade-in-up section-entrance">
            <QuickRFQSection />
          </section>
          <section id="quality" className="fade-in-up section-entrance">
            <QualitySection />
          </section>
          <section id="cases" className="fade-in-up section-entrance">
            <CaseStudiesSection />
          </section>
          <section id="contact" className="fade-in-up section-entrance">
            <ContactSection />
          </section>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Index;
