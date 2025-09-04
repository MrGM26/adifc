import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LogoIcon } from '@/components/ui/logo';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  // Handle scroll effect and menu visibility
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleNavClick = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerHeight = 80; // Fixed header height
      const elementPosition = targetElement.offsetTop - headerHeight;
      window.scrollTo({
        top: Math.max(0, elementPosition),
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg' 
          : 'bg-background/80 backdrop-blur-md'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
    >
      <div className="container mx-auto px-4 lg:px-6 max-w-7xl">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center flex-shrink-0 z-10"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <LogoIcon size="sm" className="opacity-100" />
          </motion.div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className={`flex items-center ${language === 'ar' ? 'space-x-reverse space-x-6 xl:space-x-8' : 'space-x-6 xl:space-x-8'}`}>
              {navigationItems.map((item, index) => (
                <motion.button
                  key={item.key}
                  onClick={() => handleNavClick(item.href)}
                  className="text-muted-foreground hover:text-primary transition-all duration-300 text-sm lg:text-base font-medium cursor-pointer whitespace-nowrap relative bg-transparent border-none focus:outline-none"
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {t(item.key)}
                  <motion.div
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent origin-left`}
                    initial={{ scaleX: 0, opacity: 0 }}
                    whileHover={{ scaleX: 1, opacity: 1 }}
                    transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                  />
                </motion.button>
              ))}
            </div>
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className={`flex items-center flex-shrink-0 z-10 ${language === 'ar' ? 'space-x-reverse space-x-3' : 'space-x-3'}`}>
            {/* Language Toggle */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                onClick={toggleLanguage}
                className={`flex items-center px-3 py-2 h-10 rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 bg-background/50 backdrop-blur-sm ${language === 'ar' ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
              >
                <Globe className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold text-primary min-w-[24px]">{language.toUpperCase()}</span>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="sm"
                className="lg:hidden p-3 h-10 w-10 rounded-lg border-2 border-primary/20 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 bg-background/50 backdrop-blur-sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                <AnimatePresence mode="wait" initial={false}>
                  {isMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: 0, opacity: 0 }}
                      animate={{ rotate: 90, opacity: 1 }}
                      exit={{ rotate: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X className="h-5 w-5 text-primary" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu className="h-5 w-5 text-primary" />
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
              className="lg:hidden bg-background/98 backdrop-blur-lg border-t border-border/50 shadow-lg rounded-b-xl mt-1"
              initial={{ opacity: 0, height: 0, y: -10 }}
              animate={{ opacity: 1, height: 'auto', y: 0 }}
              exit={{ opacity: 0, height: 0, y: -10 }}
              transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            >
              <nav className="py-4 px-2">
                <div className="space-y-1">
                  {navigationItems.map((item, index) => (
                    <motion.button
                      key={item.key}
                      onClick={() => handleNavClick(item.href)}
                      className="w-full text-left px-4 py-3 text-muted-foreground hover:text-primary hover:bg-gradient-to-r hover:from-primary/5 hover:to-accent/5 transition-all duration-300 text-base font-medium cursor-pointer rounded-lg bg-transparent border-none focus:outline-none focus:ring-2 focus:ring-primary/20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.02, x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {t(item.key)}
                    </motion.button>
                  ))}
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;