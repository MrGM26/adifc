import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { motion } from 'framer-motion';
import logoImage from '@/assets/adifc-logo.png';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

export const Logo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true,
  size = 'md' 
}) => {
  const { t, language } = useLanguage();

  const sizeClasses = {
    sm: 'h-10 sm:h-12',
    md: 'h-14 sm:h-16',
    lg: 'h-18 sm:h-20'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl'
  };

  return (
    <motion.div 
      className={`flex items-center space-x-3 ${language === 'ar' ? 'space-x-reverse' : ''} ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Logo Image */}
      <div className="flex-shrink-0">
        <img 
          src={logoImage} 
          alt="ADIFC Logo" 
          className={`${sizeClasses[size]} w-auto object-contain`}
        />
      </div>

      {/* Company Text */}
      {showText && (
        <div className="flex flex-col">
          <h1 className={`${textSizeClasses[size]} font-bold text-primary leading-tight`}>
            {language === 'en' ? 'ADIFC' : 'م.أ.د'}
          </h1>
          <p className={`text-xs text-muted-foreground leading-tight ${language === 'ar' ? 'text-right' : 'text-left'}`}>
            {language === 'en' 
              ? 'AbuDhabi International Factory' 
              : 'مصنع أبوظبي الدولي'
            }
          </p>
        </div>
      )}
    </motion.div>
  );
};

export const LogoIcon: React.FC<{ className?: string; size?: 'sm' | 'md' | 'lg' }> = ({ 
  className = '', 
  size = 'md' 
}) => {
  const sizeClasses = {
    sm: 'h-10 w-auto sm:h-12',
    md: 'h-14 w-auto sm:h-16',
    lg: 'h-18 w-auto sm:h-20'
  };

  const handleLogoClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.div 
      className={`${className} cursor-pointer`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.2 }}
      onClick={handleLogoClick}
      role="button"
      aria-label="Go to top"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleLogoClick();
        }
      }}
    >
      <img 
        src={logoImage} 
        alt="ADIFC Logo - Home" 
        className={`${sizeClasses[size]} object-contain transition-opacity hover:opacity-90`}
      />
    </motion.div>
  );
};