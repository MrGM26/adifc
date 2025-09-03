import React, { useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Play, Pause, ArrowLeft, ArrowRight } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MobileAnimated } from '@/components/animations/MobileOptimizedAnimations';
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
  {
    id: '6',
    name: 'Sharjah Building Co.',
    logo: '/public/lovable-uploads/011534d8-8a9a-47d9-862f-cf7e0736f8e8.png',
    href: 'https://example.com'
  },
  {
    id: '7',
    name: 'Ras Al Khaimah Developments',
    logo: '/public/lovable-uploads/317391a5-5ed3-40a2-a775-b581865ea82a.png',
    href: 'https://example.com'
  },
  {
    id: '8',
    name: 'Fujairah Construction',
    logo: '/public/lovable-uploads/d49d2281-ee9c-4993-8a06-33c78a1c3972.png',
    href: 'https://example.com'
  }
];

const PartnersSection = () => {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [ref, inView] = useInView({ 
    threshold: 0.3,
    triggerOnce: false 
  });

  // Duplicate partners for infinite loop
  const extendedPartners = [...partners, ...partners, ...partners];

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  useEffect(() => {
    if (!isPlaying || !isVisible) return;

    const interval = setInterval(() => {
      setCurrentIndex(prev => {
        const newIndex = prev + 1;
        if (newIndex >= partners.length) {
          return 0;
        }
        return newIndex;
      });
    }, 3000); // Move every 3 seconds

    return () => clearInterval(interval);
  }, [isPlaying, isVisible, partners.length]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const goToPrevious = () => {
    setCurrentIndex(prev => prev === 0 ? partners.length - 1 : prev - 1);
  };

  const goToNext = () => {
    setCurrentIndex(prev => prev === partners.length - 1 ? 0 : prev + 1);
  };

  // Calculate transform based on language direction
  const getTransform = () => {
    const itemWidth = 200; // Width of each partner logo container
    const offset = currentIndex * itemWidth;
    return language === 'ar' ? `translateX(${offset}px)` : `translateX(-${offset}px)`;
  };

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

        {/* Enhanced Partners Slider Container */}
        <MobileAnimated variant="scale" delay={0.3} className="relative">
          
          {/* Enhanced Gradient Overlays */}
          <div className={`absolute ${language === 'ar' ? 'right-0' : 'left-0'} top-0 w-20 md:w-32 h-full bg-gradient-to-${language === 'ar' ? 'l' : 'r'} from-background via-background/80 to-transparent z-20 pointer-events-none`}></div>
          <div className={`absolute ${language === 'ar' ? 'left-0' : 'right-0'} top-0 w-20 md:w-32 h-full bg-gradient-to-${language === 'ar' ? 'r' : 'l'} from-background via-background/80 to-transparent z-20 pointer-events-none`}></div>

          {/* Partners Slider Track */}
          <div className="relative overflow-hidden rounded-2xl bg-card/30 backdrop-blur-sm border border-border/30 p-8">
            <motion.div
              ref={sliderRef}
              className="flex gap-6 md:gap-8 lg:gap-12 items-center justify-center"
              style={{
                transform: getTransform(),
              }}
              animate={{
                transform: getTransform(),
              }}
              transition={{
                duration: 0.8,
                ease: [0.23, 1, 0.32, 1]
              }}
            >
              {/* Display partners in view */}
              {extendedPartners.slice(currentIndex, currentIndex + 5).map((partner, index) => (
                <motion.div
                  key={`${partner.id}-${currentIndex}-${index}`}
                  className="flex-shrink-0 group"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.08, y: -4 }}
                >
                  {partner.href ? (
                    <a
                      href={partner.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block focus:outline-none focus:ring-2 focus:ring-primary rounded-xl"
                    >
                      <PartnerLogo partner={partner} index={index} />
                    </a>
                  ) : (
                    <PartnerLogo partner={partner} index={index} />
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Enhanced Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <motion.button
              onClick={goToPrevious}
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 touch-friendly"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={language === 'ar' ? 'الشريك التالي' : 'Previous partner'}
            >
              <ArrowLeft className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </motion.button>

            <motion.button
              onClick={togglePlayPause}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 touch-friendly"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={isPlaying ? (language === 'ar' ? 'إيقاف' : 'Pause') : (language === 'ar' ? 'تشغيل' : 'Play')}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4" />
              ) : (
                <Play className="w-4 h-4" />
              )}
              <span className="text-sm">
                {isPlaying ? (language === 'ar' ? 'إيقاف' : 'Pause') : (language === 'ar' ? 'تشغيل' : 'Play')}
              </span>
            </motion.button>

            <motion.button
              onClick={goToNext}
              className="w-12 h-12 rounded-full bg-card/80 backdrop-blur-sm border border-border/50 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 touch-friendly"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              aria-label={language === 'ar' ? 'الشريك السابق' : 'Next partner'}
            >
              <ArrowRight className={`w-5 h-5 ${language === 'ar' ? 'rotate-180' : ''}`} />
            </motion.button>
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {partners.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-primary w-8' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                aria-label={`${language === 'ar' ? 'الذهاب إلى الشريك' : 'Go to partner'} ${index + 1}`}
              />
            ))}
          </div>

        </MobileAnimated>
      </div>
    </section>
  );
};

// Enhanced Partner Logo Component
const PartnerLogo: React.FC<{ partner: Partner; index: number }> = ({ partner, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  return (
    <motion.div 
      className="w-40 h-24 md:w-48 md:h-28 lg:w-52 lg:h-32 bg-card/60 backdrop-blur-sm rounded-xl border border-border/30 p-4 md:p-6 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:bg-card/80 flex items-center justify-center overflow-hidden relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
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
          
          <motion.img
            src={partner.logo}
            alt={`${partner.name} logo`}
            className={`
              max-w-full max-h-full object-contain 
              filter grayscale group-hover:grayscale-0 
              transition-all duration-500 relative z-10
              ${imageLoaded ? 'opacity-100' : 'opacity-0'}
            `}
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
            loading="lazy"
            decoding="async"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
        </>
      ) : (
        // Enhanced fallback for broken images
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
};

export default PartnersSection;