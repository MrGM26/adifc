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

        {/* Infinite Partners Slider - Mobile Responsive */}
        <MobileAnimated variant="scale" delay={0.3} className="relative">
          <div className="relative overflow-hidden rounded-xl sm:rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 p-4 sm:p-6 lg:p-8">
            {/* Responsive Gradient overlays */}
            <div className="absolute left-0 top-0 w-8 sm:w-16 lg:w-32 h-full bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 w-8 sm:w-16 lg:w-32 h-full bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />
            
            {/* Infinite slider track - Mobile Responsive */}
            <div 
              ref={sliderRef}
              className={`flex gap-3 sm:gap-4 lg:gap-8 items-center ${inView ? 'animate-scroll-mobile sm:animate-scroll' : ''}`}
              style={{
                animationDirection: language === 'ar' ? 'reverse' : 'normal',
                animationPlayState: isPaused ? 'paused' : 'running'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
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

      {/* CSS for responsive infinite scroll animation */}
      <style>{`
        /* Mobile animation - smaller logos and gaps */
        @keyframes scroll-mobile {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${partners.length * 120}px); }
        }
        
        /* Desktop animation - larger logos and gaps */
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${partners.length * 200}px); }
        }
        
        .animate-scroll-mobile {
          animation: scroll-mobile ${partners.length * 5}s linear infinite;
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

// Partner Logo Component - No Links, Clean Hover
const PartnerLogo: React.FC<{ 
  partner: Partner; 
}> = ({ partner }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex-shrink-0">
      <motion.div 
        className="
          w-24 h-16 sm:w-32 sm:h-20 lg:w-48 lg:h-28 
          bg-card/60 backdrop-blur-sm rounded-lg sm:rounded-xl 
          border border-border/30 p-3 sm:p-4 lg:p-6 
          flex items-center justify-center overflow-hidden relative group
          flex-shrink-0 cursor-pointer
          transition-all duration-300
          hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 hover:bg-card/80
        "
        whileHover={{ scale: 1.02, y: -2 }}
        transition={{ duration: 0.3 }}
      >
        {/* Highlight background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {!imageError ? (
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className="
              max-w-full max-h-full object-contain relative z-10
              filter grayscale group-hover:grayscale-0 
              transition-all duration-300
              opacity-100
            "
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
            decoding="async"
            style={{ opacity: imageLoaded ? 1 : 0 }}
          />
        ) : (
          // Fallback for broken images
          <div className="text-muted-foreground text-sm text-center font-medium relative z-10">
            <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-muted rounded-full flex items-center justify-center mb-1 mx-auto">
              <span className="text-xs font-bold">{partner.name.charAt(0)}</span>
            </div>
            <span className="text-xs">{partner.name}</span>
          </div>
        )}
        
        {/* Simple shimmer effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default PartnersSection;