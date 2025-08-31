import { useInView } from 'react-intersection-observer';
import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Enhanced Animation variants with modern easing
export const animationVariants = {
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0 }
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.6 },
    visible: { opacity: 1, scale: 1 }
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  rotateIn: {
    hidden: { opacity: 0, rotate: -10, scale: 0.9 },
    visible: { opacity: 1, rotate: 0, scale: 1 }
  },
  flipUp: {
    hidden: { opacity: 0, rotateX: -90 },
    visible: { opacity: 1, rotateX: 0 }
  },
  elastic: {
    hidden: { opacity: 0, scale: 0.3 },
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
  const [ref, inView] = useInView({
    threshold,
    triggerOnce,
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

// Hook for parallax scrolling effects
export const useParallax = (speed = 0.5) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: false,
  });
  
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!inView) return;
      
      const scrolled = window.pageYOffset;
      const rate = scrolled * speed;
      
      controls.start({
        y: rate,
        transition: { type: "spring", stiffness: 50, damping: 20 }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls, speed, inView]);

  return { ref, controls };
};

// Staggered container animation
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
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};