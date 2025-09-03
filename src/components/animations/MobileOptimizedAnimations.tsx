import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Mobile-optimized animation wrapper
interface MobileAnimatedProps {
  children: React.ReactNode;
  variant?: 'fadeUp' | 'fadeDown' | 'slideLeft' | 'slideRight' | 'scale' | 'bounce';
  delay?: number;
  className?: string;
  duration?: number;
}

export const MobileAnimated: React.FC<MobileAnimatedProps> = ({
  children,
  variant = 'fadeUp',
  delay = 0,
  className = '',
  duration = 0.6
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-50px 0px'
  });

  const variants: Variants = {
    hidden: { opacity: 0, y: variant === 'fadeUp' ? 30 : variant === 'fadeDown' ? -30 : 0, x: variant === 'slideLeft' ? -40 : variant === 'slideRight' ? 40 : 0, scale: variant === 'scale' || variant === 'bounce' ? 0.9 : 1 },
    visible: { 
      opacity: 1, 
      y: 0, 
      x: 0, 
      scale: 1,
      transition: variant === 'bounce' ? {
        type: "spring" as const,
        damping: 12,
        stiffness: 200
      } : {
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1] as const
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      transition={variant !== 'bounce' ? {
        duration,
        delay,
        ease: [0.23, 1, 0.32, 1] as const
      } : undefined}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// Staggered children animation for mobile
interface MobileStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
}

export const MobileStagger: React.FC<MobileStaggerProps> = ({
  children,
  className = '',
  staggerDelay = 0.1
}) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '-30px 0px'
  });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1] as const
      }
    }
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className={className}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={itemVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
};

// Touch-responsive button animation
interface TouchButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
}

export const TouchButton: React.FC<TouchButtonProps> = ({
  children,
  onClick,
  className = '',
  variant = 'primary'
}) => {
  return (
    <motion.button
      className={`touch-friendly ${className}`}
      onClick={onClick}
      whileTap={{ scale: 0.95, opacity: 0.8 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.button>
  );
};

// Loading skeleton with animation
interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  rounded?: boolean;
}

export const AnimatedSkeleton: React.FC<SkeletonProps> = ({
  width = '100%',
  height = '20px',
  className = '',
  rounded = false
}) => {
  return (
    <motion.div
      className={`opacity-0 invisible ${rounded ? 'rounded-full' : 'rounded'} ${className}`}
      style={{ width, height }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0 }}
      transition={{
        duration: 0,
      }}
    />
  );
};

// Progressive image loading with animation
interface ProgressiveImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
}

export const ProgressiveImage: React.FC<ProgressiveImageProps> = ({
  src,
  alt,
  className = '',
  placeholder
}) => {
  const [imageLoaded, setImageLoaded] = React.useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder */}
      <motion.div
        className="absolute inset-0 bg-muted"
        initial={{ opacity: 1 }}
        animate={{ opacity: imageLoaded ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        {placeholder && (
          <div className="flex items-center justify-center h-full text-muted-foreground">
            {placeholder}
          </div>
        )}
      </motion.div>

      {/* Actual Image */}
      {inView && (
        <motion.img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: imageLoaded ? 1 : 0,
            scale: imageLoaded ? 1 : 1.1
          }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as const }}
          onLoad={() => setImageLoaded(true)}
          loading="eager"
        />
      )}
    </div>
  );
};

// Count-up animation for numbers
interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const CountUp: React.FC<CountUpProps> = ({
  end,
  duration = 2,
  suffix = '',
  className = ''
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (inView) {
      let startTime: number;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [inView, end, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        initial={{ textShadow: "0px 0px 0px rgba(0,0,0,0)" }}
        animate={inView ? {
          textShadow: "0px 0px 8px rgba(59, 130, 246, 0.3)"
        } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        {count}
      </motion.span>
      {suffix}
    </motion.span>
  );
};

// Floating action button with pulse animation
interface FloatingButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  pulse?: boolean;
}

export const FloatingButton: React.FC<FloatingButtonProps> = ({
  children,
  onClick,
  className = '',
  pulse = false
}) => {
  return (
    <motion.button
      className={`fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-lg z-50 ${className}`}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      animate={pulse ? {
        boxShadow: [
          "0 4px 20px rgba(59, 130, 246, 0.3)",
          "0 8px 30px rgba(59, 130, 246, 0.6)",
          "0 4px 20px rgba(59, 130, 246, 0.3)"
        ]
      } : {}}
      transition={pulse ? {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      } : { duration: 0.2 }}
    >
      {children}
    </motion.button>
  );
};