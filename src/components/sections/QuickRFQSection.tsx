import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Clock, FileText } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">
            {t('rfq.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            {t('rfq.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Process Steps */}
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{t('rfq.process.submit')}</h3>
                <p className="text-sm text-muted-foreground">{t('rfq.process.submitDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">{t('rfq.process.analysis')}</h3>
                <p className="text-sm text-muted-foreground">{t('rfq.process.analysisDesc')}</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Upload className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">{t('rfq.process.receive')}</h3>
                <p className="text-sm text-muted-foreground">{t('rfq.process.receiveDesc')}</p>
              </CardContent>
            </Card>
          </div>

          {/* RFQ Form */}
          <Card className="shadow-xl">
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
                  className="w-full text-lg py-6 bg-accent hover:bg-accent/90"
                  size="lg"
                >
                  {t('rfq.cta')} - {t('rfq.form.submitBtn')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default QuickRFQSection;