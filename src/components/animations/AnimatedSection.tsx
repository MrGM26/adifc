import React from 'react';
import { motion } from 'framer-motion';
import { useScrollAnimation, staggerContainer } from '@/hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: boolean;
}

export const AnimatedSection: React.FC<AnimatedSectionProps> = ({ 
  children, 
  className = '', 
  stagger = false 
}) => {
  const animation = useScrollAnimation('fadeInUp');

  if (stagger) {
    return (
      <motion.section
        ref={animation.ref}
        variants={stagger ? staggerContainer : animation.variants}
        initial="hidden"
        animate={animation.animate}
        className={className}
      >
        {children}
      </motion.section>
    );
  }

  return (
    <motion.section
      ref={animation.ref}
      variants={animation.variants}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
      className={className}
    >
      {children}
    </motion.section>
  );
};

interface AnimatedElementProps {
  children: React.ReactNode;
  variant?: 'fadeInUp' | 'fadeInDown' | 'slideInLeft' | 'slideInRight' | 'zoomIn' | 'scaleUp' | 'rotateIn' | 'flipUp' | 'elastic';
  delay?: number;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({ 
  children, 
  variant = 'fadeInUp', 
  delay = 0, 
  className = '',
  as: Component = 'div'
}) => {
  const animation = useScrollAnimation(variant, delay);

  return (
    <motion.div
      ref={animation.ref}
      variants={animation.variants}
      initial={animation.initial}
      animate={animation.animate}
      transition={animation.transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Parallax background component
interface ParallaxBackgroundProps {
  children: React.ReactNode;
  className?: string;
  offset?: number;
}

export const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ 
  children, 
  className = '',
  offset = -50 
}) => {
  return (
    <motion.div
      className={className}
      initial={{ y: offset }}
      whileInView={{ y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};