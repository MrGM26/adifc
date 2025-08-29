import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.platform': 'Platform',
    'nav.products': 'Products & Solutions',
    'nav.pricing': 'Pricing & RFQ',
    'nav.quality': 'Quality & Compliance',
    'nav.cases': 'Case Studies',
    'nav.opportunities': 'Opportunities',
    'nav.account': 'Account',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'ADIFC — Quality you trust, the partner you rely on.',
    'hero.subtitle': 'We manufacture and supply building materials to global standards, making us the first choice for major projects in the UAE and beyond.',
    'hero.cta': 'Get Quote',
    
    // Highlights
    'highlights.productivity.title': 'Productivity',
    'highlights.productivity.desc': 'Manufacturing capabilities serving mega projects since 2008',
    'highlights.coverage.title': 'Coverage',
    'highlights.coverage.desc': 'Fast delivery across all Emirates & globally',
    'highlights.quality.title': 'Quality',
    'highlights.quality.desc': 'Globally certified products',
    'highlights.trust.title': 'Trust',
    'highlights.trust.desc': 'Preferred partner for major projects',
    
    // Quick RFQ
    'rfq.title': 'Quick RFQ',
    'rfq.subtitle': 'Do you have a project that needs fast, precise building solutions? With ADIFC, you can upload a BOQ file or enter requirements via our quick request tool and receive a custom quote within just 24 hours.',
    'rfq.cta': 'Request Quote',
    
    // Products
    'products.title': 'Our Products',
    'products.concrete': 'Concrete Blocks',
    'products.interlock': 'Interlock Pavers',
    'products.panels': 'Lightweight Panels',
    'products.prefab': 'Prefab & Modular Buildings',
    'products.steel': 'Steel & LGS Structures',
    'products.portable': 'Portable Units',
    'products.bathroom': 'Bathroom Pods',
    'products.facade': 'Unitized Facade Systems',
    
    // Solutions
    'solutions.title': 'Solutions by Sector',
    'solutions.residential': 'Residential',
    'solutions.commercial': 'Commercial',
    'solutions.infrastructure': 'Infrastructure',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.whatsapp': 'WhatsApp',
    'contact.address': 'Address',
    'contact.form.title': 'Get in Touch',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    
    // Platform/About
    'platform.title': 'About ADIFC',
    'platform.description': 'Since 2008, Abu Dhabi International Factory (ADIFC) has been synonymous with quality and trust, providing integrated building materials solutions to support major projects in the UAE.',
    
    // Quality & Compliance
    'quality.title': 'Quality & Compliance',
    'quality.description': 'Certified by ESMA and ISO. Every batch undergoes rigorous lab testing—strength, durability, dimension accuracy.',
    'quality.download': 'Download Certificates Pack',
    
    // Case Studies
    'casestudies.title': 'Case Studies',
    'casestudies.residential': 'Residential Mega Projects',
    'casestudies.commercial': 'Commercial & Service Facilities', 
    'casestudies.infrastructure': 'National Infrastructure',
    'casestudies.metrics.cost': '15% cost saved',
    'casestudies.metrics.time': '30% faster build',
    'casestudies.metrics.compliance': '100% ISO compliance',
  },
  ar: {
    // Navigation
    'nav.home': 'الصفحة الرئيسية',
    'nav.platform': 'عن ADIFC والمنظومة',
    'nav.products': 'النظام والمنتجات + الحلول',
    'nav.pricing': 'هيكلية الأسعار + RFQ',
    'nav.quality': 'الجودة والاعتمادات',
    'nav.cases': 'دراسات الحالة',
    'nav.opportunities': 'فرص التعاون',
    'nav.account': 'الحساب',
    'nav.contact': 'تواصل معنا',
    
    // Hero
    'hero.title': 'ADIFC — الجودة التي تثق بها، والشريك الذي تعتمد عليه.',
    'hero.subtitle': 'نصنع ونورد مواد البناء بمعايير عالمية لنكون الخيار الأول للمشاريع الكبرى في الإمارات وخارجها.',
    'hero.cta': 'احصل على عرض سعر',
    
    // Highlights
    'highlights.productivity.title': 'الإنتاجية',
    'highlights.productivity.desc': 'قدرات تصنيع تلبي المشاريع العملاقة منذ 2008',
    'highlights.coverage.title': 'التغطية',
    'highlights.coverage.desc': 'تسليم سريع يشمل جميع الإمارات وعالميا',
    'highlights.quality.title': 'الجودة',
    'highlights.quality.desc': 'منتجات معتمدة بمعايير عالمية',
    'highlights.trust.title': 'الثقة',
    'highlights.trust.desc': 'الشريك المفضل للمشاريع الكبرى',
    
    // Quick RFQ
    'rfq.title': 'طلب عرض سعر سريع',
    'rfq.subtitle': 'هل لديك مشروع يحتاج إلى حلول بناء سريعة ودقيقة؟ مع ADIFC، يمكنك رفع ملف الكميات (BOQ) أو إدخال متطلباتك عبر أداة الطلب السريع، لتحصل على عرض سعر مخصص خلال 24 ساعة فقط.',
    'rfq.cta': 'اطلب عرض سعر',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.concrete': 'الطابوق الخرساني',
    'products.interlock': 'الإنترلوك',
    'products.panels': 'ألواح البناء خفيفة الوزن',
    'products.prefab': 'المباني الجاهزة والمسبقة الصنع',
    'products.steel': 'الهياكل الفولاذية والخفيفة',
    'products.portable': 'الوحدات الجاهزة',
    'products.bathroom': 'الحمامات الجاهزة',
    'products.facade': 'أنظمة الواجهات الحديثة',
    
    // Solutions
    'solutions.title': 'الحلول حسب القطاع',
    'solutions.residential': 'سكنية',
    'solutions.commercial': 'تجارية',
    'solutions.infrastructure': 'بنية تحتية',
    
    // Contact
    'contact.title': 'تواصل معنا',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.whatsapp': 'واتساب',
    'contact.address': 'العنوان',
    'contact.form.title': 'تواصل معنا',
    'contact.form.name': 'الاسم الكامل',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    
    // Platform/About
    'platform.title': 'عن ADIFC',
    'platform.description': 'منذ عام 2008، ارتبط اسم (ADIFC) شركة مصنع أبوظبي الدولي بالجودة والثقة، ومسيرة نجاح كأحد روّاد تصنيع وتوريد مواد البناء في الإمارات.',
    
    // Quality & Compliance
    'quality.title': 'الجودة والاعتمادات',
    'quality.description': 'في ADIFC نلتزم بتقديم منتجات بمعايير عالمية معتمدة رسميًا من هيئات مثل ESMA و ISO.',
    'quality.download': 'تحميل ملف الشهادات',
    
    // Case Studies
    'casestudies.title': 'دراسات الحالة',
    'casestudies.residential': 'مشاريع سكنية كبرى',
    'casestudies.commercial': 'مشاريع تجارية وخدمية',
    'casestudies.infrastructure': 'مشاريع بنية تحتية وطنية',
    'casestudies.metrics.cost': '15% تقليص التكاليف',
    'casestudies.metrics.time': '30% اختصار زمن التنفيذ',
    'casestudies.metrics.compliance': '100% التزام بالمعايير',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ar' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      <div 
        dir={language === 'ar' ? 'rtl' : 'ltr'} 
        className={language === 'ar' ? 'font-arabic text-right' : 'font-sans text-left'}
        lang={language}
      >
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};