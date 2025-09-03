import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedElement } from '@/components/animations/AnimatedSection';
import { Button } from '@/components/ui/button';

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
    logo: '/public/lovable-uploads/011534d8-8a9a-47d9-862f-cf7e0736f8e8.png',
    href: 'https://example.com'
  },
  {
    id: '2', 
    name: 'Dubai Development',
    logo: '/public/lovable-uploads/317391a5-5ed3-40a2-a775-b581865ea82a.png',
    href: 'https://example.com'
  },
  {
    id: '3',
    name: 'Abu Dhabi Projects',
    logo: '/public/lovable-uploads/d49d2281-ee9c-4993-8a06-33c78a1c3972.png', 
    href: 'https://example.com'
  },
  {
    id: '4',
    name: 'UAE Infrastructure',
    logo: '/public/lovable-uploads/e5036fc8-ed06-41bf-bae8-6054b8045b47.png',
    href: 'https://example.com'
  },
  {
    id: '5',
    name: 'Gulf Construction',
    logo: '/public/lovable-uploads/f2ab887b-e63d-4553-9767-8f8493b0b2a1.png',
    href: 'https://example.com'
  },
  // Duplicate for infinite loop
  ...Array.from({ length: 3 }, (_, i) => ({
    id: `duplicate-${i}`,
    name: `Partner ${i + 6}`,
    logo: '/public/lovable-uploads/011534d8-8a9a-47d9-862f-cf7e0736f8e8.png',
    href: 'https://example.com'
  }))
];

const PartnersSection = () => {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold: 0.3,
    triggerOnce: false 
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  useEffect(() => {
    let animationId: number;
    
    const animate = () => {
      if (isPlaying && isVisible && sliderRef.current) {
        const slider = sliderRef.current;
        const scrollWidth = slider.scrollWidth / 2; // Half because we duplicated items
        
        if (language === 'ar') {
          // RTL: scroll right to left
          slider.scrollLeft += 1;
          if (slider.scrollLeft >= scrollWidth) {
            slider.scrollLeft = 0;
          }
        } else {
          // LTR: scroll left to right  
          slider.scrollLeft += 1;
          if (slider.scrollLeft >= scrollWidth) {
            slider.scrollLeft = 0;
          }
        }
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying, isVisible, language]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section ref={ref} className="py-16 lg:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <AnimatedElement variant="fadeInUp" className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('partners.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('partners.subtitle')}
          </p>
        </AnimatedElement>

        {/* Partners Slider Container */}
        <AnimatedElement variant="zoomIn" delay={0.3} className="relative">
          
          {/* Gradient Overlays */}
          <div className={`absolute ${language === 'ar' ? 'right-0' : 'left-0'} top-0 w-32 h-full bg-gradient-to-${language === 'ar' ? 'l' : 'r'} from-muted/30 to-transparent z-10 pointer-events-none`}></div>
          <div className={`absolute ${language === 'ar' ? 'left-0' : 'right-0'} top-0 w-32 h-full bg-gradient-to-${language === 'ar' ? 'r' : 'l'} from-muted/30 to-transparent z-10 pointer-events-none`}></div>

          {/* Partners Slider */}
          <div
            ref={sliderRef}
            className="flex gap-8 lg:gap-12 overflow-hidden scroll-smooth"
            style={{
              maskImage: 'linear-gradient(to right, transparent, black 128px, black calc(100% - 128px), transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 128px, black calc(100% - 128px), transparent)'
            }}
          >
            {/* Render partners twice for infinite loop */}
            {[...partners, ...partners].map((partner, index) => (
              <motion.div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 group"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                {partner.href ? (
                  <a
                    href={partner.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-lg"
                  >
                    <PartnerLogo partner={partner} />
                  </a>
                ) : (
                  <PartnerLogo partner={partner} />
                )}
              </motion.div>
            ))}
          </div>

          {/* Play/Pause Control */}
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={togglePlayPause}
              className="flex items-center gap-2"
              aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              <span className="text-sm">
                {isPlaying ? 'Pause' : 'Play'}
              </span>
            </Button>
          </div>

        </AnimatedElement>
      </div>
    </section>
  );
};

// Partner Logo Component
const PartnerLogo: React.FC<{ partner: Partner }> = ({ partner }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="w-32 h-20 lg:w-40 lg:h-24 bg-card rounded-lg border border-border/50 p-4 transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-lg group-hover:bg-card/80 flex items-center justify-center overflow-hidden">
      {!imageError ? (
        <>
          {/* Loading skeleton */}
          {!imageLoaded && (
            <div className="w-full h-full bg-muted animate-pulse rounded"></div>
          )}
          
          <img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className={`
              max-w-full max-h-full object-contain 
              filter grayscale group-hover:grayscale-0 
              transition-all duration-300 group-hover:scale-105
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
        <div className="text-muted-foreground text-sm text-center font-medium">
          {partner.name}
        </div>
      )}
    </div>
  );
};

export default PartnersSection;