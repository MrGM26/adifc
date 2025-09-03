import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';
import { MobileAnimated } from '@/components/animations/MobileOptimizedAnimations';

interface Partner {
  id: string;
  name: string;
  logo: string;
  href?: string;
}

// Mock partner data - in real app this would come from API/CMS
const partners: Partner[] = [
  {
    id: '1',
    name: 'Emirates Construction',
    logo: '/lovable-uploads/011534d8-8a9a-47d9-862f-cf7e0736f8e8.png',
    href: 'https://example.com'
  },
  {
    id: '2', 
    name: 'Dubai Development',
    logo: '/lovable-uploads/317391a5-5ed3-40a2-a775-b581865ea82a.png',
    href: 'https://example.com'
  },
  {
    id: '3',
    name: 'Abu Dhabi Projects',
    logo: '/lovable-uploads/d49d2281-ee9c-4993-8a06-33c78a1c3972.png', 
    href: 'https://example.com'
  },
  {
    id: '4',
    name: 'UAE Infrastructure',
    logo: '/lovable-uploads/e5036fc8-ed06-41bf-bae8-6054b8045b47.png',
    href: 'https://example.com'
  },
  {
    id: '5',
    name: 'Gulf Construction',
    logo: '/lovable-uploads/f2ab887b-e63d-4553-9767-8f8493b0b2a1.png',
    href: 'https://example.com'
  },
  {
    id: '6',
    name: 'Sharjah Building Co.',
    logo: '/lovable-uploads/011534d8-8a9a-47d9-862f-cf7e0736f8e8.png',
    href: 'https://example.com'
  },
  {
    id: '7',
    name: 'Ras Al Khaimah Developments',
    logo: '/lovable-uploads/317391a5-5ed3-40a2-a775-b581865ea82a.png',
    href: 'https://example.com'
  },
  {
    id: '8',
    name: 'Fujairah Construction',
    logo: '/lovable-uploads/d49d2281-ee9c-4993-8a06-33c78a1c3972.png',
    href: 'https://example.com'
  }
];

const PartnersSection = () => {
  const { t, language } = useLanguage();
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const [ref, inView] = useInView({ 
    threshold: 0.3,
    triggerOnce: false 
  });

  // Create multiple copies for infinite loop
  const infinitePartners = [...partners, ...partners, ...partners];

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-gradient-to-br from-muted/30 via-background to-muted/20 overflow-hidden relative">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-1/4 w-32 h-32 bg-primary/3 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-24 h-24 bg-accent/3 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        
        {/* Section Header */}
        <MobileAnimated variant="fadeUp" className="text-center mb-12 lg:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {t('partners.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {t('partners.subtitle')}
          </motion.p>
        </MobileAnimated>

        {/* Infinite Partners Slider */}
        <MobileAnimated variant="scale" delay={0.3} className="relative">
          <div className="relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 p-8">
            {/* Gradient overlays */}
            <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
            
            {/* Infinite slider track */}
            <div 
              ref={sliderRef}
              className={`flex gap-8 items-center ${!isPaused && inView ? 'animate-scroll' : 'paused'}`}
              style={{
                width: `${infinitePartners.length * 200}px`,
                animationDirection: language === 'ar' ? 'reverse' : 'normal'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {infinitePartners.map((partner, index) => (
                <PartnerLogo 
                  key={`${partner.id}-${index}`} 
                  partner={partner}
                />
              ))}
            </div>
          </div>
        </MobileAnimated>
      </div>

      {/* CSS for infinite scroll animation */}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${partners.length * 200}px); }
        }
        
        .animate-scroll {
          animation: scroll ${partners.length * 4}s linear infinite;
        }
        
        .paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
};

// Partner Logo Component
const PartnerLogo: React.FC<{ 
  partner: Partner; 
}> = ({ partner }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  const LogoContent = () => (
    <motion.div 
      className="w-48 h-28 bg-card/60 backdrop-blur-sm rounded-xl border border-border/30 p-6 transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 hover:bg-card/80 flex items-center justify-center overflow-hidden relative group"
      whileHover={{ scale: 1.05, y: -4 }}
      transition={{ duration: 0.3 }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
        style={{
          background: `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--accent)))`
        }}
      />
      
      {!imageError ? (
        <>
          {/* Loading skeleton */}
          {!imageLoaded && (
            <motion.div
              className="w-full h-full bg-muted rounded animate-pulse"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          )}
          
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className={`
              max-w-full max-h-full object-contain 
              filter grayscale group-hover:grayscale-0 
              transition-all duration-300 relative z-10
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
            decoding="async"
          />
        </>
      ) : (
        // Fallback for broken images
        <motion.div 
          className="text-muted-foreground text-sm text-center font-medium relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-2 mx-auto">
            <span className="text-xs font-bold">{partner.name.charAt(0)}</span>
          </div>
          {partner.name}
        </motion.div>
      )}
      
      {/* Shimmer effect overlay */}
      <motion.div
        className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        style={{ transform: 'skewX(-20deg)' }}
      />
    </motion.div>
  );

  return partner.href ? (
    <a
      href={partner.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-xl flex-shrink-0"
    >
      <LogoContent />
    </a>
  ) : (
    <div className="flex-shrink-0">
      <LogoContent />
    </div>
  );
};

export default PartnersSection;