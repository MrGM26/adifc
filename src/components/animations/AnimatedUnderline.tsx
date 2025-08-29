import React, { useState } from 'react';

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
  underlineColor?: string;
  animationDelay?: number;
}

const AnimatedUnderline: React.FC<AnimatedUnderlineProps> = ({ 
  children, 
  className = "",
  underlineColor = "bg-gradient-to-r from-accent via-primary to-accent",
  animationDelay = 0
}) => {
  const [isVisible, setIsVisible] = useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, animationDelay);

    return () => clearTimeout(timer);
  }, [animationDelay]);

  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <span 
        className={`absolute bottom-0 left-0 h-1 ${underlineColor} transition-all duration-1000 ease-out ${
          isVisible ? 'w-full opacity-100' : 'w-0 opacity-0'
        }`}
      />
      {/* Glow effect */}
      <span 
        className={`absolute bottom-0 left-0 h-1 ${underlineColor} blur-sm transition-all duration-1000 ease-out ${
          isVisible ? 'w-full opacity-60' : 'w-0 opacity-0'
        }`}
      />
    </span>
  );
};

export default AnimatedUnderline;