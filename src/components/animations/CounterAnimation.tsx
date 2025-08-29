import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform, animate } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface CounterAnimationProps {
  from?: number;
  to: number;
  duration?: number;
  suffix?: string;
  className?: string;
}

export const CounterAnimation: React.FC<CounterAnimationProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  className = ''
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    const unsubscribe = rounded.onChange(setDisplayValue);
    return unsubscribe;
  }, [rounded]);

  useEffect(() => {
    if (inView) {
      animate(count, to, { duration, ease: "easeOut" });
    }
  }, [inView, count, to, duration]);

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      {displayValue}{suffix}
    </motion.span>
  );
};