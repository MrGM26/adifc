import { useEffect, useRef, useState } from 'react';

export const useScrollAnimation = (threshold = 0.1, rootMargin = '0px') => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};

export const useStaggeredAnimation = (itemCount: number, delay = 100) => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Trigger staggered animation
          for (let i = 0; i < itemCount; i++) {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, i]);
            }, i * delay);
          }
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [itemCount, delay]);

  return { ref, visibleItems };
};

// Animation utility component
export const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'scale-up' | 'slide-in';
}> = ({ children, className = '', animation = 'fade-up' }) => {
  const { ref, isVisible } = useScrollAnimation();
  
  const animationClass = {
    'fade-up': 'reveal-fade-up',
    'scale-up': 'reveal-scale-up',
    'slide-in': 'reveal-on-scroll'
  }[animation];

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? 'revealed' : ''} ${className}`}
    >
      {children}
    </div>
  );
};