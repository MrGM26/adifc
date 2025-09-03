import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, Phone, Users, Settings, TrendingUp, Shield } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedElement } from '@/components/animations/AnimatedSection';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';

interface TeamMember {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  role: {
    en: string;
    ar: string;
  };
  department: 'leadership' | 'operations' | 'sales' | 'quality';
  photo: string;
  bio: {
    en: string;
    ar: string;
  };
  extendedBio: {
    en: string;
    ar: string;
  };
  email?: string;
  linkedin?: string;
  phone?: string;
}

// Mock team data - in real app this would come from API/CMS
const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: {
      en: 'Ahmed Al Mansouri',
      ar: 'أحمد المنصوري'
    },
    role: {
      en: 'CEO & Founder',
      ar: 'الرئيس التنفيذي والمؤسس'
    },
    department: 'leadership',
    photo: '/public/lovable-uploads/011534d8-8a9a-47d9-862f-cf7e0736f8e8.png',
    bio: {
      en: 'Leading ADIFC with 20+ years in construction materials industry.',
      ar: 'يقود ADIFC بخبرة تزيد عن 20 عاماً في صناعة مواد البناء.'
    },
    extendedBio: {
      en: 'Ahmed founded ADIFC in 2008 with a vision to transform the UAE construction industry through innovative, high-quality building materials. Under his leadership, the company has grown to become one of the region\'s most trusted manufacturers.',
      ar: 'أسس أحمد ADIFC في عام 2008 برؤية لتحويل صناعة البناء في الإمارات من خلال مواد البناء المبتكرة وعالية الجودة. تحت قيادته، نمت الشركة لتصبح واحدة من أكثر الشركات المصنعة الموثوقة في المنطقة.'
    },
    email: 'ahmed@adifc.ae',
    linkedin: 'https://linkedin.com/in/ahmed-almansouri',
    phone: '+971 2 XXX XXXX'
  },
  {
    id: '2',
    name: {
      en: 'Sarah Johnson',
      ar: 'سارة جونسون'
    },
    role: {
      en: 'Head of Operations',
      ar: 'رئيس العمليات'
    },
    department: 'operations',
    photo: '/public/lovable-uploads/317391a5-5ed3-40a2-a775-b581865ea82a.png',
    bio: {
      en: 'Optimizing production processes and ensuring operational excellence.',
      ar: 'تحسين عمليات الإنتاج وضمان التميز التشغيلي.'
    },
    extendedBio: {
      en: 'Sarah brings 15 years of operational expertise to ADIFC. She oversees all manufacturing processes, quality control systems, and supply chain optimization to ensure our products meet the highest international standards.',
      ar: 'تجلب سارة 15 عاماً من الخبرة التشغيلية إلى ADIFC. تشرف على جميع عمليات التصنيع وأنظمة مراقبة الجودة وتحسين سلسلة التوريد لضمان تلبية منتجاتنا لأعلى المعايير الدولية.'
    },
    email: 'sarah@adifc.ae',
    linkedin: 'https://linkedin.com/in/sarah-johnson'
  },
  {
    id: '3',
    name: {
      en: 'Omar Al Zaabi',
      ar: 'عمر الزعابي'
    },
    role: {
      en: 'Sales Director',
      ar: 'مدير المبيعات'
    },
    department: 'sales',
    photo: '/public/lovable-uploads/d49d2281-ee9c-4993-8a06-33c78a1c3972.png',
    bio: {
      en: 'Building strategic partnerships and driving revenue growth across the UAE.',
      ar: 'بناء الشراكات الاستراتيجية ودفع نمو الإيرادات في جميع أنحاء الإمارات.'
    },
    extendedBio: {
      en: 'Omar leads our sales initiatives with a deep understanding of the regional construction market. His strategic approach has helped ADIFC establish partnerships with major construction companies throughout the Emirates.',
      ar: 'يقود عمر مبادرات المبيعات لدينا بفهم عميق لسوق البناء الإقليمي. ساعد نهجه الاستراتيجي ADIFC في إقامة شراكات مع شركات البناء الكبرى في جميع أنحاء الإمارات.'
    },
    email: 'omar@adifc.ae',
    phone: '+971 2 XXX XXXX'
  },
  {
    id: '4',
    name: {
      en: 'Dr. Fatima Al Rashid',
      ar: 'د. فاطمة الراشد'
    },
    role: {
      en: 'Quality Assurance Manager',
      ar: 'مدير ضمان الجودة'
    },
    department: 'quality',
    photo: '/public/lovable-uploads/e5036fc8-ed06-41bf-bae8-6054b8045b47.png',
    bio: {
      en: 'Ensuring ESMA and ISO compliance through rigorous testing protocols.',
      ar: 'ضمان الامتثال لـ ESMA و ISO من خلال بروتوكولات الاختبار الصارمة.'
    },
    extendedBio: {
      en: 'Dr. Fatima holds a PhD in Materials Engineering and oversees all quality assurance processes at ADIFC. Her expertise ensures our products consistently meet and exceed international quality standards.',
      ar: 'تحمل د. فاطمة درجة الدكتوراه في هندسة المواد وتشرف على جميع عمليات ضمان الجودة في ADIFC. خبرتها تضمن أن منتجاتنا تلبي باستمرار وتتجاوز معايير الجودة الدولية.'
    },
    email: 'fatima@adifc.ae',
    linkedin: 'https://linkedin.com/in/fatima-alrashid'
  },
  {
    id: '5',
    name: {
      en: 'Michael Chen',
      ar: 'مايكل تشين'
    },
    role: {
      en: 'Technical Director',
      ar: 'المدير التقني'
    },
    department: 'operations',
    photo: '/public/lovable-uploads/f2ab887b-e63d-4553-9767-8f8493b0b2a1.png',
    bio: {
      en: 'Driving innovation in manufacturing processes and product development.',
      ar: 'قيادة الابتكار في عمليات التصنيع وتطوير المنتجات.'
    },
    extendedBio: {
      en: 'Michael leads our technical innovation initiatives, focusing on sustainable manufacturing practices and next-generation building materials. His engineering background drives continuous improvement across all product lines.',
      ar: 'يقود مايكل مبادرات الابتكار التقني لدينا، مع التركيز على ممارسات التصنيع المستدامة ومواد البناء من الجيل القادم. خلفيته الهندسية تدفع التحسين المستمر عبر جميع خطوط المنتجات.'
    },
    email: 'michael@adifc.ae',
    linkedin: 'https://linkedin.com/in/michael-chen'
  },
  {
    id: '6',
    name: {
      en: 'Aisha Al Nuaimi',
      ar: 'عائشة النعيمي'
    },
    role: {
      en: 'Business Development Manager',
      ar: 'مدير تطوير الأعمال'
    },
    department: 'sales',
    photo: '/public/lovable-uploads/011534d8-8a9a-47d9-862f-cf7e0736f8e8.png', 
    bio: {
      en: 'Expanding market presence and developing new business opportunities.',
      ar: 'توسيع الحضور في السوق وتطوير فرص أعمال جديدة.'
    },
    extendedBio: {
      en: 'Aisha focuses on identifying new market opportunities and building strategic relationships. Her market insights have been instrumental in ADIFC\'s expansion into new segments of the construction industry.',
      ar: 'تركز عائشة على تحديد فرص السوق الجديدة وبناء العلاقات الاستراتيجية. كانت رؤاها السوقية مفيدة في توسع ADIFC في قطاعات جديدة من صناعة البناء.'
    },
    email: 'aisha@adifc.ae',
    phone: '+971 2 XXX XXXX'
  }
];

type FilterType = 'all' | 'leadership' | 'operations' | 'sales' | 'quality';

const TeamMembersSection = () => {
  const { t, language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [imageLoadStates, setImageLoadStates] = useState<Record<string, boolean>>({});

  const filteredMembers = teamMembers.filter(member => 
    activeFilter === 'all' || member.department === activeFilter
  );

  const departmentIcons = {
    leadership: Users,
    operations: Settings,
    sales: TrendingUp,
    quality: Shield
  };

  const handleImageLoad = (memberId: string) => {
    setImageLoadStates(prev => ({ ...prev, [memberId]: true }));
  };

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <AnimatedElement variant="fadeInUp" className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {t('team.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('team.subtitle')}
          </p>
        </AnimatedElement>

        {/* Department Filters */}
        <AnimatedElement variant="zoomIn" delay={0.2} className="flex flex-wrap justify-center gap-2 mb-12">
          {(['all', 'leadership', 'operations', 'sales', 'quality'] as FilterType[]).map((filter) => {
            const Icon = filter !== 'all' ? departmentIcons[filter as keyof typeof departmentIcons] : Users;
            return (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveFilter(filter)}
                className="flex items-center gap-2"
              >
                <Icon className="w-4 h-4" />
                {t(`team.filter.${filter}`)}
              </Button>
            );
          })}
        </AnimatedElement>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10 border-border/50 hover:border-primary/30">
                  <CardContent className="p-6">
                    
                    {/* Member Photo */}
                    <div className="relative mb-4 overflow-hidden rounded-xl">
                      {!imageLoadStates[member.id] && (
                        <Skeleton className="w-full aspect-square" />
                      )}
                      <img
                        src={member.photo}
                        alt={member.name[language]}
                        className={`
                          w-full aspect-square object-cover 
                          transition-all duration-500 group-hover:scale-105
                          ${imageLoadStates[member.id] ? 'opacity-100' : 'opacity-0'}
                        `}
                        onLoad={() => handleImageLoad(member.id)}
                        loading="lazy"
                      />
                      
                      {/* Department Badge */}
                      <div className="absolute top-3 right-3">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                          {React.createElement(departmentIcons[member.department], { 
                            className: "w-3 h-3 mr-1" 
                          })}
                          {t(`team.filter.${member.department}`)}
                        </Badge>
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {member.name[language]}
                      </h3>
                      <p className="text-primary font-medium">
                        {member.role[language]}
                      </p>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {member.bio[language]}
                      </p>
                    </div>

                    {/* Contact Icons */}
                    <div className="flex gap-2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      {member.email && (
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <Mail className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                      {member.linkedin && (
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <Linkedin className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                      {member.phone && (
                        <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
                          <Phone className="w-4 h-4 text-muted-foreground" />
                        </div>
                      )}
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Member Detail Modal */}
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedMember && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    {selectedMember.name[language]}
                  </DialogTitle>
                  <p className="text-primary font-medium">
                    {selectedMember.role[language]}
                  </p>
                </DialogHeader>
                
                <div className="space-y-6">
                  {/* Photo */}
                  <div className="w-32 h-32 mx-auto overflow-hidden rounded-xl">
                    <img
                      src={selectedMember.photo}
                      alt={selectedMember.name[language]}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Extended Bio */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedMember.extendedBio[language]}
                    </p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3">
                    <h4 className="font-semibold">{t('team.modal.contact')}</h4>
                    <div className="space-y-2">
                      {selectedMember.email && (
                        <div className="flex items-center gap-3">
                          <Mail className="w-5 h-5 text-muted-foreground" />
                          <a 
                            href={`mailto:${selectedMember.email}`}
                            className="text-primary hover:underline"
                          >
                            {selectedMember.email}
                          </a>
                        </div>
                      )}
                      {selectedMember.linkedin && (
                        <div className="flex items-center gap-3">
                          <Linkedin className="w-5 h-5 text-muted-foreground" />
                          <a 
                            href={selectedMember.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:underline"
                          >
                            LinkedIn Profile
                          </a>
                        </div>
                      )}
                      {selectedMember.phone && (
                        <div className="flex items-center gap-3">
                          <Phone className="w-5 h-5 text-muted-foreground" />
                          <a 
                            href={`tel:${selectedMember.phone}`}
                            className="text-primary hover:underline"
                          >
                            {selectedMember.phone}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Close Button */}
                  <div className="flex justify-end">
                    <Button variant="outline" onClick={() => setSelectedMember(null)}>
                      {t('team.modal.close')}
                    </Button>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
};

export default TeamMembersSection;