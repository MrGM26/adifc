import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LogoIcon } from '@/components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Prevent flash during initial load
  useEffect(() => {
    setIsLoaded(true);
  }, [language]);

  const navigationItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.platform', href: '#platform' },
    { key: 'vision.title', href: '#vision' },
    { key: 'nav.products', href: '#products' },
    { key: 'partners.title', href: '#partners' },
    { key: 'team.title', href: '#team' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.quality', href: '#quality' },
    { key: 'nav.cases', href: '#cases' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <motion.header 
      className="bg-background/95 backdrop-blur-md sticky top-0 z-50 transition-all duration-300"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
          >
            <LogoIcon size="sm" />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className={`hidden lg:flex items-center ${language === 'ar' ? 'space-x-reverse space-x-6 xl:space-x-8' : 'space-x-6 xl:space-x-8'}`}>
            {navigationItems.map((item, index) => (
              <motion.a
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium cursor-pointer whitespace-nowrap relative"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0 }}
                animate={{ opacity: isLoaded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.replace('#', '');
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    // Much larger mobile offset to show section from beginning
                    const isMobile = window.innerWidth < 1024;
                    const headerHeight = isMobile ? 300 : 80; // Increased mobile offset
                    const elementPosition = targetElement.offsetTop - headerHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {t(item.key)}
                <motion.div
                  className={`absolute -bottom-1 w-full h-0.5 bg-primary ${language === 'ar' ? 'right-0' : 'left-0'}`}
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-2 sm:space-x-4' : 'space-x-2 sm:space-x-4'}`}>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className={`flex items-center px-2 sm:px-3 ${language === 'ar' ? 'space-x-reverse space-x-1 sm:space-x-2' : 'space-x-1 sm:space-x-2'}`}
              >
                <Globe className="h-4 w-4" />
                <span className="text-xs sm:text-sm font-medium">{language.toUpperCase()}</span>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden p-2"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <AnimatePresence mode="wait">
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 90 }}
                      exit={{ rotate: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 90 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="lg:hidden bg-background/95 backdrop-blur-md"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            >
              <nav className="py-4 space-y-1">
                {navigationItems.map((item, index) => (
                  <motion.a
                    key={item.key}
                    href={item.href}
                    className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors text-sm font-medium cursor-pointer touch-friendly"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isLoaded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    whileTap={{ scale: 0.98, backgroundColor: 'hsl(var(--muted) / 0.8)' }}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      const targetId = item.href.replace('#', '');
                      const targetElement = document.getElementById(targetId);
                      if (targetElement) {
                        // Much larger mobile offset to show section from beginning
                        const isMobile = window.innerWidth < 1024;
                        const headerHeight = isMobile ? 300 : 80; // Increased mobile offset
                        const elementPosition = targetElement.offsetTop - headerHeight;
                        window.scrollTo({
                          top: elementPosition,
                          behavior: 'smooth'
                        });
                      }
                    }}
                  >
                    {t(item.key)}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;