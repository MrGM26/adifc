import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Header from '@/components/Header';
import HeroSection from '@/components/sections/HeroSection';
import HighlightsSection from '@/components/sections/HighlightsSection';
import ProductsSection from '@/components/sections/ProductsSection';
import SolutionsSection from '@/components/sections/SolutionsSection';
import QuickRFQSection from '@/components/sections/QuickRFQSection';
import QualitySection from '@/components/sections/QualitySection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <div id="home">
            <HeroSection />
          </div>
          <div id="platform">
            <HighlightsSection />
          </div>
          <div id="products">
            <ProductsSection />
          </div>
          <div id="solutions">
            <SolutionsSection />
          </div>
          <div id="pricing">
            <QuickRFQSection />
          </div>
          <div id="quality">
            <QualitySection />
          </div>
          <div id="cases">
            <CaseStudiesSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default Index;
