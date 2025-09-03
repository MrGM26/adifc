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

const Index = () => {
  useEffect(() => {
    // Add smooth scroll behavior and intersection observer for animations
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.1,
      rootMargin: '0px 0px -10% 0px'
    });

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in-up, .stagger-children');
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <div id="home">
            <HeroSection />
          </div>
          <div id="platform" className="fade-in-up">
            <HighlightsSection />
          </div>
          <div id="vision" className="fade-in-up">
            <VisionMissionSection />
          </div>
          <div id="products" className="fade-in-up">
            <ProductsSection />
          </div>
          <div id="partners" className="fade-in-up">
            <PartnersSection />
          </div>
          <div id="team" className="fade-in-up">
            <TeamMembersSection />
          </div>
          <div id="solutions" className="fade-in-up">
            <SolutionsSection />
          </div>
          <div id="pricing" className="fade-in-up">
            <QuickRFQSection />
          </div>
          <div id="quality" className="fade-in-up">
            <QualitySection />
          </div>
          <div id="cases" className="fade-in-up">
            <CaseStudiesSection />
          </div>
          <div id="contact" className="fade-in-up">
            <ContactSection />
          </div>
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </LanguageProvider>
  );
};

export default Index;
