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
    'hero.title': 'AbuDhabi International Factory Company — Quality you trust, the partner you rely on.',
    'hero.subtitle': 'We manufacture and supply building materials to global standards, making us the first choice for major projects in the UAE and beyond.',
    'hero.cta': 'Get Quote',
    
    // Hero Trust Indicators
    'hero.stats.established': 'Established',
    'hero.stats.coverage': 'Coverage', 
    'hero.stats.certified': 'Certified',
    'hero.stats.projects': 'Projects',
    
    // Highlights
    'highlights.title': 'Why Choose Us',
    'highlights.subtitle': 'Discover what makes us the preferred construction partner across the UAE',
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
    'rfq.process.submit': 'Submit Requirements',
    'rfq.process.submitDesc': 'Upload BOQ or describe your project needs',
    'rfq.process.analysis': '24-Hour Analysis',
    'rfq.process.analysisDesc': 'Our team analyzes and prepares your custom quote',
    'rfq.process.receive': 'Receive Quote',
    'rfq.process.receiveDesc': 'Get your detailed, competitive pricing proposal',
    'rfq.form.title': 'Request Your Quote',
    'rfq.form.projectName': 'Project Name',
    'rfq.form.contactName': 'Contact Name',
    'rfq.form.email': 'Email Address',
    'rfq.form.phone': 'Phone Number',
    'rfq.form.description': 'Project Description',
    'rfq.form.boqFile': 'BOQ File (Optional)',
    'rfq.form.projectNamePlaceholder': 'Enter your project name',
    'rfq.form.contactNamePlaceholder': 'Your full name',
    'rfq.form.emailPlaceholder': 'your.email@company.com',
    'rfq.form.phonePlaceholder': '+971 XX XXX XXXX',
    'rfq.form.descriptionPlaceholder': 'Describe your project requirements, quantities, timeline, and any specific needs...',
    'rfq.form.uploadText': 'Click to upload BOQ file or drag and drop',
    'rfq.form.uploadFormats': 'PDF, Excel, Word files up to 10MB',
    'rfq.form.submitBtn': 'Get Quote in 24 Hours',
    
    // Products
    'products.title': 'Our Products',
    'products.subtitle': 'Premium Building Materials',
    'products.description': 'Engineered to international standards with cutting-edge technology and sustainable manufacturing processes',
    'products.concrete': 'Concrete Blocks',
    'products.concrete.desc': 'High-strength concrete blocks engineered for superior durability and performance in construction projects',
    'products.interlock': 'Interlock Pavers',
    'products.interlock.desc': 'Premium interlocking pavers designed for durability, aesthetics, and easy installation',
    'products.panels': 'Lightweight Panels',
    'products.panels.desc': 'Fortis Easy Panels - Revolutionary lightweight solutions for rapid construction and superior insulation',
    'products.prefab': 'Prefab & Modular Buildings',
    'products.prefab.desc': 'Complete modular building solutions with precision engineering and sustainable construction methods',
    'products.steel': 'Steel & LGS Structures',
    'products.portable': 'Portable Units',
    'products.bathroom': 'Bathroom Pods',
    'products.bathroom.desc': 'Fully integrated prefabricated bathroom solutions with premium finishes and efficient plumbing systems',
    'products.facade': 'Unitized Facade Systems',
    'products.facade.desc': 'Advanced curtain wall systems combining glass and steel for modern architectural excellence',
    'products.explore': 'Explore Product',
    'products.catalog.title': 'Need Our Complete Product Catalog?',
    'products.catalog.desc': 'Download our comprehensive catalog with specifications, pricing, and technical details',
    'products.catalog.download': 'Download Catalog',
    
    // Solutions
    'solutions.title': 'Solutions by Sector',
    'solutions.subtitle': 'Comprehensive Building Solutions',
    'solutions.description': 'Tailored construction solutions designed to meet the unique demands of each sector',
    'solutions.residential': 'Residential',
    'solutions.residential.desc': 'Complete residential solutions from foundation to finish with sustainable materials and modern design',
    'solutions.commercial': 'Commercial',
    'solutions.commercial.desc': 'Scalable commercial building solutions optimized for efficiency, durability, and aesthetic appeal',
    'solutions.infrastructure': 'Infrastructure',
    'solutions.infrastructure.desc': 'Heavy-duty infrastructure solutions meeting the highest standards for public and private projects',
    'solutions.explore': 'Explore Solutions',
    'solutions.cta.title': 'Ready to Build Something Extraordinary?',
    'solutions.cta.subtitle': 'Our engineering team is standing by to create custom solutions for your unique project requirements',
    'solutions.cta.button': 'Contact Our Engineers',
    
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
    'contact.getInTouch': 'Get in Touch',
    'contact.businessHours': 'Business Hours',
    'contact.hours.sunThu': 'Sunday - Thursday: 8:00 AM - 6:00 PM',
    'contact.hours.fri': 'Friday: 8:00 AM - 12:00 PM',
    'contact.hours.sat': 'Saturday: Closed',
    'contact.form.namePlaceholder': 'Enter your full name',
    'contact.form.emailPlaceholder': 'your.email@company.com',
    'contact.form.phonePlaceholder': '+971 XX XXX XXXX',
    'contact.form.messagePlaceholder': 'Tell us about your project requirements...',
    'contact.map.title': 'Interactive Map',
    'contact.map.subtitle': 'Abu Dhabi International Factory Location',
    
    // Platform/About
    'platform.title': 'About ADIFC',
    'platform.description': 'Since 2008, Abu Dhabi International Factory (ADIFC) has been synonymous with quality and trust, providing integrated building materials solutions to support major projects in the UAE.',
    
    // Quality & Compliance
    'quality.title': 'Quality & Compliance',
    'quality.description': 'Certified by ESMA and ISO. Every batch undergoes rigorous lab testing—strength, durability, dimension accuracy.',
    'quality.download': 'Download Certificates Pack',
    'quality.facility.title': 'Advanced Testing Facility',
    'quality.facility.desc': 'Rigorous quality control at every stage',
    'quality.esma.name': 'ESMA',
    'quality.esma.desc': 'Emirates Authority for Standardization and Metrology',
    'quality.iso9001.name': 'ISO 9001',
    'quality.iso9001.desc': 'Quality Management System',
    'quality.iso14001.name': 'ISO 14001',
    'quality.iso14001.desc': 'Environmental Management System',
    'quality.process.title': 'Quality Process',
    'quality.process.step1.title': 'Raw Material Testing',
    'quality.process.step1.desc': 'Comprehensive testing of all raw materials before production',
    'quality.process.step2.title': 'Production Monitoring',
    'quality.process.step2.desc': 'Continuous quality monitoring during manufacturing process',
    'quality.process.step3.title': 'Final Inspection',
    'quality.process.step3.desc': 'Rigorous final inspection before product delivery',
    
    // Case Studies
    'casestudies.title': 'Case Studies',
    'casestudies.subtitle': 'Delivering exceptional results across major UAE projects',
    'casestudies.residential': 'Residential Mega Projects',
    'casestudies.commercial': 'Commercial & Service Facilities', 
    'casestudies.infrastructure': 'National Infrastructure',
    'casestudies.metrics.cost': '15% cost saved',
    'casestudies.metrics.time': '30% faster build',
    'casestudies.metrics.compliance': '100% ISO compliance',
    'casestudies.project1.title': 'Al Reem Island Residential Development',
    'casestudies.project1.desc': 'Large-scale residential project with 500+ villas using our concrete blocks and interlock pavers.',
    'casestudies.project2.title': 'Dubai Mall Extension Project',
    'casestudies.project2.desc': 'Commercial expansion using lightweight panels and steel structures for rapid construction.',
    'casestudies.project3.title': 'Sheikh Zayed Road Enhancement',
    'casestudies.project3.desc': 'Major highway infrastructure project featuring our premium interlock pavers and concrete solutions.',
    'casestudies.testimonial': '"ADIFC has been our trusted partner for over 5 years. Their quality products and reliable delivery have been crucial to our project success."',
    'casestudies.testimonial.name': 'Ahmed Al Mansouri',
    'casestudies.testimonial.title': 'Project Director, Emirates Construction',
    
    // Footer
    'footer.company.name': 'AbuDhabi International Factory Company',
    'footer.company.desc': 'AbuDhabi International Factory Company - Quality building materials manufacturer serving the UAE and beyond since 2008.',
    'footer.quicklinks.title': 'Quick Links',
    'footer.quicklinks.about': 'About Us',
    'footer.quicklinks.products': 'Products',
    'footer.quicklinks.solutions': 'Solutions',
    'footer.quicklinks.quality': 'Quality',
    'footer.quicklinks.cases': 'Case Studies',
    'footer.quicklinks.careers': 'Careers',
    'footer.services.title': 'Our Services',
    'footer.services.concrete': 'Concrete Blocks',
    'footer.services.interlock': 'Interlock Pavers',
    'footer.services.panels': 'Lightweight Panels',
    'footer.services.prefab': 'Prefab Buildings',
    'footer.services.steel': 'Steel Structures',
    'footer.services.consultation': 'Consultation',
    'footer.connect.title': 'Stay Connected',
    'footer.newsletter.title': 'Newsletter',
    'footer.newsletter.placeholder': 'Your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 AbuDhabi International Factory Company. All rights reserved.',
    'footer.terms': 'Terms & Conditions',
    'footer.privacy': 'Privacy Policy',
    'footer.cookies': 'Cookies Policy',
    'footer.accessibility': 'Accessibility',
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
    'hero.title': 'شركة مصنع أبوظبي الدولي — الجودة التي تثق بها، والشريك الذي تعتمد عليه.',
    'hero.subtitle': 'نصنع ونورد مواد البناء بمعايير عالمية لنكون الخيار الأول للمشاريع الكبرى في الإمارات وخارجها.',
    'hero.cta': 'احصل على عرض سعر',
    
    // Hero Trust Indicators  
    'hero.stats.established': 'تأسست',
    'hero.stats.coverage': 'التغطية',
    'hero.stats.certified': 'معتمد',
    'hero.stats.projects': 'المشاريع',
    
    // Highlights
    'highlights.title': 'لماذا تختارنا',
    'highlights.subtitle': 'اكتشف ما يجعلنا الشريك المفضل للبناء في جميع أنحاء الإمارات',
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
    'rfq.process.submit': 'قدم المتطلبات',
    'rfq.process.submitDesc': 'ارفع ملف الكميات أو اوصف احتياجات مشروعك',
    'rfq.process.analysis': 'تحليل خلال 24 ساعة',
    'rfq.process.analysisDesc': 'فريقنا يحلل ويعد عرض السعر المخصص لك',
    'rfq.process.receive': 'استلم العرض',
    'rfq.process.receiveDesc': 'احصل على عرض الأسعار التفصيلي والتنافسي',
    'rfq.form.title': 'اطلب عرض السعر',
    'rfq.form.projectName': 'اسم المشروع',
    'rfq.form.contactName': 'اسم المسؤول',
    'rfq.form.email': 'البريد الإلكتروني',
    'rfq.form.phone': 'رقم الهاتف',
    'rfq.form.description': 'وصف المشروع',
    'rfq.form.boqFile': 'ملف الكميات (اختياري)',
    'rfq.form.projectNamePlaceholder': 'أدخل اسم المشروع',
    'rfq.form.contactNamePlaceholder': 'اسمك الكامل',
    'rfq.form.emailPlaceholder': 'البريد.الإلكتروني@الشركة.com',
    'rfq.form.phonePlaceholder': '٩٧١ XX XXX XXXX+',
    'rfq.form.descriptionPlaceholder': 'اوصف متطلبات مشروعك والكميات والجدول الزمني وأي احتياجات خاصة...',
    'rfq.form.uploadText': 'انقر لرفع ملف الكميات أو اسحب واسقط',
    'rfq.form.uploadFormats': 'ملفات PDF، إكسل، ووردمحجم أقصى 10 ميجابايت',
    'rfq.form.submitBtn': 'احصل على عرض سعر خلال 24 ساعة',
    
    // Products
    'products.title': 'منتجاتنا',
    'products.subtitle': 'مواد البناء الممتازة',
    'products.description': 'مُصنّعة وفقاً للمعايير الدولية بتقنية متطورة وعمليات تصنيع مستدامة',
    'products.concrete': 'الطابوق الخرساني',
    'products.concrete.desc': 'طابوق خرساني عالي القوة مُصمم للمتانة الفائقة والأداء المتميز في مشاريع البناء',
    'products.interlock': 'الإنترلوك',
    'products.interlock.desc': 'بلاط إنترلوك متطور مصمم للمتانة والجمالية وسهولة التركيب',
    'products.panels': 'ألواح البناء خفيفة الوزن',
    'products.panels.desc': 'ألواح فورتيس السهلة - حلول ثورية خفيفة الوزن للبناء السريع والعزل المتفوق',
    'products.prefab': 'المباني الجاهزة والمسبقة الصنع',
    'products.prefab.desc': 'حلول بناء معيارية كاملة بهندسة دقيقة وطرق بناء مستدامة',
    'products.steel': 'الهياكل الفولاذية والخفيفة',
    'products.portable': 'الوحدات الجاهزة',
    'products.bathroom': 'الحمامات الجاهزة',
    'products.bathroom.desc': 'حلول حمامات جاهزة متكاملة بتشطيبات متقدمة وأنظمة سباكة فعالة',
    'products.facade': 'أنظمة الواجهات الحديثة',
    'products.facade.desc': 'أنظمة الستائر الزجاجية المتطورة التي تجمع بين الزجاج والصلب للتميز المعماري الحديث',
    'products.explore': 'استكشف المنتج',
    'products.catalog.title': 'تحتاج كتالوج منتجاتنا الكامل؟',
    'products.catalog.desc': 'حمل كتالوجنا الشامل مع المواصفات والأسعار والتفاصيل التقنية',
    'products.catalog.download': 'تحميل الكتالوج',
    
    // Solutions
    'solutions.title': 'الحلول حسب القطاع',
    'solutions.subtitle': 'حلول البناء الشاملة',
    'solutions.description': 'حلول بناء مخصصة مصممة لتلبية المتطلبات الفريدة لكل قطاع',
    'solutions.residential': 'سكنية',
    'solutions.residential.desc': 'حلول سكنية كاملة من الأساس إلى التشطيب بمواد مستدامة وتصميم عصري',
    'solutions.commercial': 'تجارية',
    'solutions.commercial.desc': 'حلول مباني تجارية قابلة للتوسع محسنة للكفاءة والمتانة والجاذبية الجمالية',
    'solutions.infrastructure': 'بنية تحتية',
    'solutions.infrastructure.desc': 'حلول بنية تحتية فائقة التحمل تلبي أعلى المعايير للمشاريع العامة والخاصة',
    'solutions.explore': 'استكشف الحلول',
    'solutions.cta.title': 'مستعد لبناء شيء استثنائي؟',
    'solutions.cta.subtitle': 'فريق المهندسين لدينا جاهز لإنشاء حلول مخصصة لمتطلبات مشروعك الفريد',
    'solutions.cta.button': 'تواصل مع مهندسينا',
    
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
    'contact.getInTouch': 'تواصل معنا',
    'contact.businessHours': 'ساعات العمل',
    'contact.hours.sunThu': 'الأحد - الخميس: 8:00 صباحاً - 6:00 مساءً',
    'contact.hours.fri': 'الجمعة: 8:00 صباحاً - 12:00 ظهراً',
    'contact.hours.sat': 'السبت: مغلق',
    'contact.form.namePlaceholder': 'أدخل اسمك الكامل',
    'contact.form.emailPlaceholder': 'البريد.الإلكتروني@الشركة.com',
    'contact.form.phonePlaceholder': '٩٧١ XX XXX XXXX+',
    'contact.form.messagePlaceholder': 'أخبرنا عن متطلبات مشروعك...',
    'contact.map.title': 'خريطة تفاعلية',
    'contact.map.subtitle': 'موقع مصنع أبوظبي الدولي',
    
    // Platform/About
    'platform.title': 'عن ADIFC',
    'platform.description': 'منذ عام 2008، ارتبط اسم (ADIFC) شركة مصنع أبوظبي الدولي بالجودة والثقة، ومسيرة نجاح كأحد روّاد تصنيع وتوريد مواد البناء في الإمارات.',
    
    // Quality & Compliance
    'quality.title': 'الجودة والاعتمادات',
    'quality.description': 'في ADIFC نلتزم بتقديم منتجات بمعايير عالمية معتمدة رسميًا من هيئات مثل ESMA و ISO.',
    'quality.download': 'تحميل ملف الشهادات',
    'quality.facility.title': 'مختبر اختبار متطور',
    'quality.facility.desc': 'مراقبة جودة صارمة في كل مرحلة',
    'quality.esma.name': 'ESMA',
    'quality.esma.desc': 'هيئة الإمارات للمواصفات والمقاييس',
    'quality.iso9001.name': 'ISO 9001',
    'quality.iso9001.desc': 'نظام إدارة الجودة',
    'quality.iso14001.name': 'ISO 14001',
    'quality.iso14001.desc': 'نظام الإدارة البيئية',
    'quality.process.title': 'عملية ضمان الجودة',
    'quality.process.step1.title': 'اختبار المواد الخام',
    'quality.process.step1.desc': 'اختبار شامل لجميع المواد الخام قبل الإنتاج',
    'quality.process.step2.title': 'مراقبة الإنتاج',
    'quality.process.step2.desc': 'مراقبة مستمرة للجودة أثناء عملية التصنيع',
    'quality.process.step3.title': 'التفتيش النهائي',
    'quality.process.step3.desc': 'فحص نهائي صارم قبل تسليم المنتج',
    
    // Case Studies
    'casestudies.title': 'دراسات الحالة',
    'casestudies.subtitle': 'تحقيق نتائج استثنائية عبر مشاريع الإمارات الكبرى',
    'casestudies.residential': 'مشاريع سكنية كبرى',
    'casestudies.commercial': 'مشاريع تجارية وخدمية',
    'casestudies.infrastructure': 'مشاريع بنية تحتية وطنية',
    'casestudies.metrics.cost': '15% تقليص التكاليف',
    'casestudies.metrics.time': '30% اختصار زمن التنفيذ',
    'casestudies.metrics.compliance': '100% التزام بالمعايير',
    'casestudies.project1.title': 'مشروع جزيرة الريم السكني',
    'casestudies.project1.desc': 'مشروع سكني واسع النطاق يضم أكثر من 500 فيلا باستخدام الطابوق الخرساني والإنترلوك.',
    'casestudies.project2.title': 'مشروع توسعة دبي مول',
    'casestudies.project2.desc': 'توسعة تجارية باستخدام الألواح خفيفة الوزن والهياكل الفولاذية للبناء السريع.',
    'casestudies.project3.title': 'مشروع تطوير شارع الشيخ زايد',
    'casestudies.project3.desc': 'مشروع بنية تحتية رئيسي يضم الإنترلوك المتطور والحلول الخرساנية.',
    'casestudies.testimonial': '"كان ADIFC شريكنا الموثوق لأكثر من 5 سنوات. منتجاتهم عالية الجودة والتسليم الموثوق كانا أساسيين لنجاح مشاريعنا."',
    'casestudies.testimonial.name': 'أحمد المنصوري',
    'casestudies.testimonial.title': 'مدير المشاريع، شركة الإمارات للإنشاءات',
    
    // Footer
    'footer.company.name': 'شركة مصنع أبوظبي الدولي',
    'footer.company.desc': 'شركة مصنع أبوظبي الدولي - مصنع مواد البناء عالية الجودة يخدم دولة الإمارات وخارجها منذ عام 2008.',
    'footer.quicklinks.title': 'روابط سريعة',
    'footer.quicklinks.about': 'عن ADIFC',
    'footer.quicklinks.products': 'المنتجات',
    'footer.quicklinks.solutions': 'الحلول',
    'footer.quicklinks.quality': 'الجودة',
    'footer.quicklinks.cases': 'دراسات الحالة',
    'footer.quicklinks.careers': 'الوظائف',
    'footer.services.title': 'خدماتنا',
    'footer.services.concrete': 'الطابوق الخرساني',
    'footer.services.interlock': 'الإنترلوك',
    'footer.services.panels': 'ألواح خفيفة الوزن',
    'footer.services.prefab': 'المباني الجاهزة',
    'footer.services.steel': 'الهياكل الفولاذية',
    'footer.services.consultation': 'الاستشارات',
    'footer.connect.title': 'ابق على تواصل',
    'footer.newsletter.title': 'النشرة الإخبارية',
    'footer.newsletter.placeholder': 'بريدك الإلكتروني',
    'footer.newsletter.subscribe': 'اشتراك',
    'footer.copyright': '© 2024 شركة مصنع أبوظبي الدولي. جميع الحقوق محفوظة.',
    'footer.terms': 'الشروط والأحكام',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
    'footer.accessibility': 'إمكانية الوصول',
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