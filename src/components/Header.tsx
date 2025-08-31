import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { LogoIcon } from '@/components/ui/logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { language, toggleLanguage, t } = useLanguage();

  const navigationItems = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.platform', href: '#platform' },
    { key: 'nav.products', href: '#products' },
    { key: 'nav.pricing', href: '#pricing' },
    { key: 'nav.quality', href: '#quality' },
    { key: 'nav.cases', href: '#cases' },
    { key: 'nav.opportunities', href: '#opportunities' },
    { key: 'nav.account', href: '#account' },
    { key: 'nav.contact', href: '#contact' },
  ];

  return (
    <header className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <div className="flex items-center">
            <LogoIcon size="sm" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm font-medium cursor-pointer whitespace-nowrap"
                onClick={(e) => {
                  e.preventDefault();
                  const targetId = item.href.replace('#', '');
                  const targetElement = document.getElementById(targetId);
                  if (targetElement) {
                    // Increased mobile offset to show section from beginning
                    const isMobile = window.innerWidth < 1024;
                    const headerHeight = isMobile ? 100 : 80; // Much larger offset for mobile
                    const elementPosition = targetElement.offsetTop - headerHeight;
                    window.scrollTo({
                      top: elementPosition,
                      behavior: 'smooth'
                    });
                  }
                }}
              >
                {t(item.key)}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-3"
            >
              <Globe className="h-4 w-4" />
              <span className="text-xs sm:text-sm font-medium">{language.toUpperCase()}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-md">
            <nav className="py-4 space-y-1">
              {navigationItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="block px-4 py-3 text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors text-sm font-medium cursor-pointer"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMenuOpen(false);
                    const targetId = item.href.replace('#', '');
                    const targetElement = document.getElementById(targetId);
                    if (targetElement) {
                      // Increased mobile offset to show section from beginning
                      const isMobile = window.innerWidth < 1024;
                      const headerHeight = isMobile ? 100 : 80; // Much larger offset for mobile
                      const elementPosition = targetElement.offsetTop - headerHeight;
                      window.scrollTo({
                        top: elementPosition,
                        behavior: 'smooth'
                      });
                    }
                  }}
                >
                  {t(item.key)}
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;