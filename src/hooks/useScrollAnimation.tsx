import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Enhanced Animation variants with modern easing - proper animations that prevent grey flashing
export const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 }
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -5, scale: 0.95 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
  },
  flipUp: {
    hidden: { opacity: 0, rotateX: -30 },
    visible: { opacity: 1, rotateX: 0 }
  },
  elastic: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 }
  }
};

// Enhanced transition definitions
export const transitionTypes = {
  default: { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const },
  spring: { type: "spring" as const, damping: 10, stiffness: 100 },
  smooth: { duration: 0.6, ease: "easeOut" as const },
  bounce: { type: "spring" as const, damping: 8, stiffness: 200 }
};

export const useScrollAnimation = (
  variant: keyof typeof animationVariants = 'fadeInUp', 
  delay = 0,
  threshold = 0.1,
  triggerOnce = true,
  transitionType: keyof typeof transitionTypes = 'default'
) => {
  const controls = useAnimation();
  
  // Mobile-friendly threshold - lower for mobile devices
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const adjustedThreshold = isMobile ? Math.max(0.05, threshold * 0.5) : threshold;
  
  const [ref, inView] = useInView({
    threshold: adjustedThreshold,
    triggerOnce,
    rootMargin: isMobile ? '0px 0px -50px 0px' : '0px 0px -100px 0px', // Earlier trigger on mobile
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const transition = variant === 'elastic' 
    ? { ...transitionTypes.spring, delay }
    : { ...transitionTypes[transitionType], delay };

  return {
    ref,
    controls,
    animate: controls,
    initial: 'hidden',
    variants: animationVariants[variant],
    transition
  };
};

// Hook for parallax scrolling effects - optimized for mobile
export const useParallax = (speed = 0.5) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  
  const controls = useAnimation();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  useEffect(() => {
    if (isMobile) return; // Disable parallax on mobile for performance
    
    const handleScroll = () => {
      if (!inView) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      controls.start({
        y: rate,
        transition: { type: "spring", stiffness: 50, damping: 20 }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, speed, inView, isMobile]);

  return { ref, controls };
};

// Staggered container animation - start visible
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
};

// Counter animation hook
export const useCounterAnimation = (endValue: number, duration = 2) => {
  const controls = useAnimation();
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const [ref, inView] = useInView({
    threshold: isMobile ? 0.2 : 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

// Mobile-optimized touch animations
export const useTouchAnimation = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
        staggerChildren: 0.1
      }
    }
  };

  return { ref, inView, variants };
};

// Enhanced stagger animation for mobile
export const useMobileStagger = (itemCount: number) => {
  const [ref, inView] = useInView({
    threshold: 0.05, // Lower threshold for mobile
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08, // Faster stagger on mobile
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  };

  return { ref, inView, containerVariants, itemVariants };
};