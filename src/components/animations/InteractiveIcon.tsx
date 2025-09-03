import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface InteractiveIconProps {
  icon: LucideIcon;
  size?: number;
  className?: string;
  variant?: 'float' | 'bounce' | 'rotate' | 'pulse' | 'scale';
  delay?: number;
}

export const InteractiveIcon: React.FC<InteractiveIconProps> = ({
  icon: Icon,
  size = 24,
  className = '',
  variant = 'float',
  delay = 0
}) => {
  const variants = {
    float: {
      y: [0, -8, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay
      }
    },
    bounce: {
      y: [0, -12, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeOut" as const,
        delay
      }
    },
    rotate: {
      rotate: [0, 360],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "linear" as const,
        delay
      }
    },
    pulse: {
      scale: [1, 1.1, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay
      }
    },
    scale: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut" as const,
        delay
      }
    }
  };

  return (
    <motion.div
      animate={variants[variant]}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block ${className}`}
    >
      <Icon size={size} />
    </motion.div>
  );
};

interface AnimatedIconContainerProps {
  children: React.ReactNode;
  className?: string;
  hoverScale?: number;
  hoverRotate?: number;
}

export const AnimatedIconContainer: React.FC<AnimatedIconContainerProps> = ({
  children,
  className = '',
  hoverScale = 1.1,
  hoverRotate = 0
}) => {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: hoverScale,
        rotate: hoverRotate,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
};