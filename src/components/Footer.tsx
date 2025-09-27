import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/ui/logo';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-r from-primary to-primary/90 text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Company Logo & Info */}
          <div className="text-center md:text-left space-y-4">
            <Logo size="md" showText={true} className="text-primary-foreground [&>*]:text-primary-foreground [&_p]:text-primary-foreground/80 mx-auto md:mx-0" />
            <div className="flex justify-center md:justify-start space-x-4 pt-2">
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10 hover:scale-110 transition-all duration-300">
                <Instagram className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-3">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-4 w-4 flex-shrink-0" />
              <span className="text-primary-foreground/90 text-sm font-medium">+971 XXX XXX XXX</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Mail className="h-4 w-4 flex-shrink-0" />
              <span className="text-primary-foreground/90 text-sm font-medium">info@adifc.ae</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-4 w-4 flex-shrink-0" />
              <span className="text-primary-foreground/90 text-sm font-medium">Abu Dhabi, UAE</span>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="text-center md:text-right space-y-4">
            <Button 
              variant="secondary" 
              size="sm" 
              className="bg-primary-foreground/10 hover:bg-primary-foreground/20 text-primary-foreground border-primary-foreground/20 hover:border-primary-foreground/30 transition-all duration-300"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.contact')}
            </Button>
            <div className="text-xs text-primary-foreground/70">
              {t('footer.copyright').replace('ADIFC', t('footer.company.name'))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;