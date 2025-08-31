import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Clock, FileText, Quote, FileCheck } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedSection, AnimatedElement } from '@/components/animations/AnimatedSection';

const QuickRFQSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    projectName: '',
    contactName: '',
    email: '',
    phone: '',
    projectDescription: '',
    boqFile: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      boqFile: file
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('RFQ submitted:', formData);
  };

  return (
    <section id="pricing" className="py-20 bg-background">
      <AnimatedSection className="">
        <div className="container mx-auto px-4">
        <AnimatedElement variant="fadeInUp" className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('rfq.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('rfq.subtitle')}
          </p>
        </AnimatedElement>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Process Steps */}
            <AnimatedElement variant="fadeInUp" delay={0.1}>
              <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-primary/5 to-primary/10 hover:from-primary/10 hover:to-primary/20">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FileText className="h-10 w-10 text-white animate-pulse group-hover:animate-none" />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-primary">{t('rfq.process.submit')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t('rfq.process.submitDesc')}</p>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement variant="fadeInUp" delay={0.2}>
              <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-accent/5 to-accent/10 hover:from-accent/10 hover:to-accent/20">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <Clock className="h-10 w-10 text-white animate-spin group-hover:animate-pulse" style={{animationDuration: '3s'}} />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-accent">{t('rfq.process.analysis')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t('rfq.process.analysisDesc')}</p>
                </CardContent>
              </Card>
            </AnimatedElement>

            <AnimatedElement variant="fadeInUp" delay={0.3}>
              <Card className="text-center group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 dark:from-green-900/20 dark:to-green-800/20 dark:hover:from-green-800/30 dark:hover:to-green-700/30">
                <CardContent className="p-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <FileCheck className="h-10 w-10 text-white animate-bounce group-hover:animate-pulse" style={{animationDuration: '2s'}} />
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-green-700 dark:text-green-400">{t('rfq.process.receive')}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{t('rfq.process.receiveDesc')}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>

          {/* RFQ Form */}
          <AnimatedElement variant="fadeInUp" delay={0.4}>
            <Card className="shadow-xl border-0 bg-gradient-to-br from-background to-muted/20">
            <CardHeader>
              <CardTitle className="text-2xl text-center">{t('rfq.form.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="projectName">{t('rfq.form.projectName')} *</Label>
                    <Input
                      id="projectName"
                      name="projectName"
                      value={formData.projectName}
                      onChange={handleInputChange}
                      required
                      placeholder={t('rfq.form.projectNamePlaceholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="contactName">{t('rfq.form.contactName')} *</Label>
                    <Input
                      id="contactName"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      placeholder={t('rfq.form.contactNamePlaceholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">{t('rfq.form.email')} *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      placeholder={t('rfq.form.emailPlaceholder')}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">{t('rfq.form.phone')} *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder={t('rfq.form.phonePlaceholder')}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="projectDescription">{t('rfq.form.description')} *</Label>
                  <Textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    required
                    placeholder={t('rfq.form.descriptionPlaceholder')}
                    className="min-h-[120px]"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="boqFile">{t('rfq.form.boqFile')}</Label>
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors">
                    <Input
                      id="boqFile"
                      name="boqFile"
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.xlsx,.xls,.doc,.docx"
                      className="hidden"
                    />
                    <Label
                      htmlFor="boqFile"
                      className="cursor-pointer flex flex-col items-center space-y-2"
                    >
                      <Upload className="h-10 w-10 text-muted-foreground" />
                      <span className="text-sm text-muted-foreground">
                        {formData.boqFile ? formData.boqFile.name : t('rfq.form.uploadText')}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {t('rfq.form.uploadFormats')}
                      </span>
                    </Label>
                  </div>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full text-sm sm:text-base lg:text-lg py-4 sm:py-5 lg:py-6 bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  <span className="text-center">
                    {t('rfq.cta')} - {t('rfq.form.submitBtn')}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>
          </AnimatedElement>
        </div>
        </div>
      </AnimatedSection>
    </section>
  );
};

export default QuickRFQSection;