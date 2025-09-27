import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Logo } from '@/components/ui/logo';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 via-transparent to-green-500/5"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          {/* Company Logo & Social */}
          <div className="text-center md:text-left space-y-6">
            <Logo size="md" showText={true} className="mx-auto md:mx-0" />
            <div className="flex justify-center md:justify-start space-x-4">
              <Button variant="outline" size="sm" className="p-3 h-auto w-auto rounded-xl border-red-200 hover:border-red-400 hover:bg-red-50 dark:border-red-700 dark:hover:border-red-500 dark:hover:bg-red-900/20 transition-all duration-300 group">
                <Facebook className="h-5 w-5 text-slate-600 group-hover:text-red-600 dark:text-slate-400 dark:group-hover:text-red-400 transition-colors" />
              </Button>
              <Button variant="outline" size="sm" className="p-3 h-auto w-auto rounded-xl border-red-200 hover:border-red-400 hover:bg-red-50 dark:border-red-700 dark:hover:border-red-500 dark:hover:bg-red-900/20 transition-all duration-300 group">
                <Twitter className="h-5 w-5 text-slate-600 group-hover:text-red-600 dark:text-slate-400 dark:group-hover:text-red-400 transition-colors" />
              </Button>
              <Button variant="outline" size="sm" className="p-3 h-auto w-auto rounded-xl border-red-200 hover:border-red-400 hover:bg-red-50 dark:border-red-700 dark:hover:border-red-500 dark:hover:bg-red-900/20 transition-all duration-300 group">
                <Linkedin className="h-5 w-5 text-slate-600 group-hover:text-red-600 dark:text-slate-400 dark:group-hover:text-red-400 transition-colors" />
              </Button>
              <Button variant="outline" size="sm" className="p-3 h-auto w-auto rounded-xl border-red-200 hover:border-red-400 hover:bg-red-50 dark:border-red-700 dark:hover:border-red-500 dark:hover:bg-red-900/20 transition-all duration-300 group">
                <Instagram className="h-5 w-5 text-slate-600 group-hover:text-red-600 dark:text-slate-400 dark:group-hover:text-red-400 transition-colors" />
              </Button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center space-y-6">
            <h3 className="text-xl font-bold text-foreground mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-center space-x-3 group">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <Phone className="h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">+971 XXX XXX XXX</span>
              </div>
              <div className="flex items-center justify-center space-x-3 group">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <Mail className="h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">info@adifc.ae</span>
              </div>
              <div className="flex items-center justify-center space-x-3 group">
                <div className="bg-red-100 dark:bg-red-900/30 p-2 rounded-lg group-hover:bg-red-200 dark:group-hover:bg-red-900/50 transition-colors">
                  <MapPin className="h-4 w-4 flex-shrink-0 text-red-600 dark:text-red-400" />
                </div>
                <span className="text-slate-700 dark:text-slate-300 text-sm font-medium group-hover:text-red-600 dark:group-hover:text-red-400 transition-colors">Abu Dhabi, UAE</span>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center md:text-right space-y-6">
            <h3 className="text-xl font-bold text-foreground">Ready to Build?</h3>
            <Button 
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 text-sm font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              onClick={() => {
                const contactSection = document.getElementById('contact');
                contactSection?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {t('nav.contact')}
            </Button>
            <div className="text-xs text-muted-foreground max-w-xs mx-auto md:mx-0 md:ml-auto">
              Building the future with innovative materials since 2008
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              {t('footer.copyright').replace('ADIFC', t('footer.company.name'))}
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
                {t('footer.terms')}
              </a>
              <a href="#" className="text-muted-foreground hover:text-red-600 transition-colors">
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