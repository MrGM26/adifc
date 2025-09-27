import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/ui/logo';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="futuristic-footer text-white relative">
      <div className="futuristic-grid"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Company Logo & Social */}
          <div className="text-center md:text-left space-y-6">
            <Logo size="md" showText={true} className="text-white [&>*]:text-white [&_p]:text-white/80 mx-auto md:mx-0" />
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="ghost" size="sm" className="social-icon p-3 h-auto w-auto rounded-lg">
                <Facebook className="h-5 w-5 text-white relative z-10" />
              </Button>
              <Button variant="ghost" size="sm" className="social-icon p-3 h-auto w-auto rounded-lg">
                <Twitter className="h-5 w-5 text-white relative z-10" />
              </Button>
              <Button variant="ghost" size="sm" className="social-icon p-3 h-auto w-auto rounded-lg">
                <Linkedin className="h-5 w-5 text-white relative z-10" />
              </Button>
              <Button variant="ghost" size="sm" className="social-icon p-3 h-auto w-auto rounded-lg">
                <Instagram className="h-5 w-5 text-white relative z-10" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-6">
            <h3 className="holographic-text text-xl font-bold mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 group">
                <div className="neon-border p-2 rounded-lg">
                  <Phone className="h-4 w-4 flex-shrink-0 text-red-400" />
                </div>
                <span className="text-white/90 text-sm font-medium group-hover:text-red-400 transition-colors">+971 XXX XXX XXX</span>
              </div>
              <div className="flex items-center justify-center space-x-3 group">
                <div className="neon-border p-2 rounded-lg">
                  <Mail className="h-4 w-4 flex-shrink-0 text-red-400" />
                </div>
                <span className="text-white/90 text-sm font-medium group-hover:text-red-400 transition-colors">info@adifc.ae</span>
              </div>
              <div className="flex items-center justify-center space-x-3 group">
                <div className="neon-border p-2 rounded-lg">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-red-400" />
                </div>
                <span className="text-white/90 text-sm font-medium group-hover:text-red-400 transition-colors">Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center md:text-right space-y-6">
            <h3 className="cyber-glow text-xl font-bold text-red-400">Ready to Build?</h3>
            <Button 
              className="tech-button px-6 py-3 text-sm font-semibold rounded-lg relative"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="relative z-10">{t('nav.contact')}</span>
            </Button>
            <div className="text-xs text-white/60 max-w-xs mx-auto md:mx-0 md:ml-auto">
              Building the future with innovative materials since 2008
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-white/70">
              {t('footer.copyright').replace('ADIFC', t('footer.company.name'))}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-white/70 hover:text-red-400 transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-white/70 hover:text-red-400 transition-colors">
                {t('footer.privacy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;