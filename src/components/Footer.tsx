import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/ui/logo';

const Footer = () => {
  const { t } = useLanguage();

  const navigationLinks = [
    { name: t('footer.quicklinks.about'), href: '#platform' },
    { name: t('footer.quicklinks.products'), href: '#products' },
    { name: t('footer.quicklinks.solutions'), href: '#solutions' },
    { name: t('footer.quicklinks.quality'), href: '#quality' },
    { name: t('footer.quicklinks.cases'), href: '#cases' },
    { name: t('footer.quicklinks.careers'), href: '#careers' },
  ];

  const services = [
    t('footer.services.concrete'),
    t('footer.services.interlock'),
    t('footer.services.panels'),
    t('footer.services.prefab'),
    t('footer.services.steel'),
    t('footer.services.consultation'),
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo size="md" showText={true} className="text-primary-foreground [&>*]:text-primary-foreground [&_p]:text-primary-foreground/80" />
            <p className="text-primary-foreground/80 leading-relaxed">
              {t('footer.company.desc')}
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10">
                <Linkedin className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2 h-auto hover:bg-primary-foreground/10">
                <Instagram className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.quicklinks.title')}</h3>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors cursor-pointer"
                    onClick={(e) => {
                      e.preventDefault();
                      const targetId = link.href.replace('#', '');
                      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.services.title')}</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">{t('footer.connect.title')}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">+971 XXX XXX XXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">info@adifc.ae</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/80 text-sm">Abu Dhabi, UAE</span>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="pt-4">
              <h4 className="font-medium mb-3">{t('footer.newsletter.title')}</h4>
              <div className="flex space-x-2">
                <Input 
                  type="email" 
                  placeholder={t('footer.newsletter.placeholder')} 
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                />
                <Button variant="secondary" size="sm">
                  {t('footer.newsletter.subscribe')}
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-primary-foreground/80">
              {t('footer.copyright').replace('ADIFC', t('footer.company.name'))}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('footer.cookies')}
              </a>
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                {t('footer.accessibility')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;