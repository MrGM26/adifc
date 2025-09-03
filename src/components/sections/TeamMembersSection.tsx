import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, Phone, Users, Settings, TrendingUp, Shield, Filter } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { AnimatedElement } from '@/components/animations/AnimatedSection';
import { MobileAnimated } from '@/components/animations/MobileOptimizedAnimations';
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

  const departmentColors = {
    leadership: 'from-blue-500 to-purple-600',
    operations: 'from-green-500 to-teal-600',
    sales: 'from-orange-500 to-pink-600',
    quality: 'from-red-500 to-rose-600'
  };

  const handleImageLoad = (memberId: string) => {
    setImageLoadStates(prev => ({ ...prev, [memberId]: true }));
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto px-4 relative">
        
        {/* Section Header */}
        <MobileAnimated variant="fadeUp" className="text-center mb-12 lg:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl lg:text-5xl font-bold gradient-text mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {t('team.title')}
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
            viewport={{ once: true, margin: "-50px" }}
          >
            {t('team.subtitle')}
          </motion.p>
        </MobileAnimated>

        {/* Enhanced Department Filters */}
        <MobileAnimated variant="scale" delay={0.2} className="flex flex-wrap justify-center gap-3 mb-12">
          <motion.div 
            className="flex items-center gap-2 bg-muted/50 rounded-full p-1 backdrop-blur-sm border border-border/50"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Filter className="w-4 h-4 text-muted-foreground ml-3" />
            {(['all', 'leadership', 'operations', 'sales', 'quality'] as FilterType[]).map((filter, index) => {
              const Icon = filter !== 'all' ? departmentIcons[filter as keyof typeof departmentIcons] : Users;
              const isActive = activeFilter === filter;
              return (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${isActive 
                      ? 'bg-primary text-primary-foreground shadow-lg' 
                      : 'hover:bg-muted text-muted-foreground hover:text-foreground'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: language === 'ar' ? 20 : -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.05 }}
                >
                  <Icon className="w-4 h-4" />
                  {t(`team.filter.${filter}`)}
                </motion.button>
              );
            })}
          </motion.div>
        </MobileAnimated>

        {/* Enhanced Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <AnimatePresence mode="wait">
            {filteredMembers.map((member, index) => (
              <motion.div
                key={member.id}
                layout
                initial={{ opacity: 0, scale: 0.8, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -40 }}
                transition={{ 
                  delay: index * 0.1, 
                  duration: 0.6, 
                  ease: [0.23, 1, 0.32, 1],
                  layout: { duration: 0.4 }
                }}
                whileHover={{ y: -12 }}
                className="group cursor-pointer"
                onClick={() => setSelectedMember(member)}
              >
                <Card className="modern-card glass-card overflow-hidden h-full transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 border-border/50 hover:border-primary/30 backdrop-blur-sm">
                  <CardContent className="p-0">
                    
                    {/* Enhanced Member Photo */}
                    <div className="relative overflow-hidden">
                      {!imageLoadStates[member.id] && (
                        <Skeleton className="w-full aspect-square" />
                      )}
                      <motion.img
                        src={member.photo}
                        alt={member.name[language]}
                        className={`
                          w-full aspect-square object-cover 
                          transition-all duration-700 group-hover:scale-110
                          ${imageLoadStates[member.id] ? 'opacity-100' : 'opacity-0'}
                        `}
                        onLoad={() => handleImageLoad(member.id)}
                        loading="lazy"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Department Badge */}
                      <motion.div 
                        className="absolute top-4 right-4"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 + index * 0.05 }}
                      >
                        <Badge className={`bg-gradient-to-r ${departmentColors[member.department]} text-white border-0 shadow-lg backdrop-blur-sm`}>
                          {React.createElement(departmentIcons[member.department], { 
                            className: "w-3 h-3 mr-1" 
                          })}
                          {t(`team.filter.${member.department}`)}
                        </Badge>
                      </motion.div>
                      
                      {/* Contact Icons Overlay */}
                      <motion.div 
                        className="absolute bottom-4 left-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500"
                        initial={{ y: 20 }}
                        whileHover={{ y: 0 }}
                      >
                        {member.email && (
                          <motion.div 
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Mail className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                        {member.linkedin && (
                          <motion.div 
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Linkedin className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                        {member.phone && (
                          <motion.div 
                            className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Phone className="w-4 h-4 text-white" />
                          </motion.div>
                        )}
                      </motion.div>
                    </div>

                    {/* Enhanced Member Info */}
                    <div className="p-6 space-y-3">
                      <motion.h3 
                        className="text-xl font-bold text-foreground group-hover:text-primary transition-colors"
                        whileHover={{ scale: 1.02 }}
                      >
                        {member.name[language]}
                      </motion.h3>
                      <motion.p 
                        className="text-primary font-medium"
                        initial={{ opacity: 0.8 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {member.role[language]}
                      </motion.p>
                      <motion.p 
                        className="text-muted-foreground text-sm leading-relaxed"
                        initial={{ opacity: 0.6 }}
                        whileHover={{ opacity: 1 }}
                      >
                        {member.bio[language]}
                      </motion.p>
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Enhanced Member Detail Modal */}
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto border-0 bg-card/95 backdrop-blur-md">
            {selectedMember && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              >
                <DialogHeader>
                  <motion.div
                    initial={{ y: -20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    <DialogTitle className="text-2xl gradient-text">
                      {selectedMember.name[language]}
                    </DialogTitle>
                    <p className="text-primary font-medium mt-2">
                      {selectedMember.role[language]}
                    </p>
                  </motion.div>
                </DialogHeader>
                
                <div className="space-y-6 mt-6">
                  {/* Photo */}
                  <motion.div 
                    className="w-32 h-32 mx-auto overflow-hidden rounded-2xl shadow-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <img
                      src={selectedMember.photo}
                      alt={selectedMember.name[language]}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>

                  {/* Extended Bio */}
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <p className="text-muted-foreground leading-relaxed text-center">
                      {selectedMember.extendedBio[language]}
                    </p>
                  </motion.div>

                  {/* Contact Info */}
                  <motion.div 
                    className="space-y-3"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    <h4 className="font-semibold text-center">{t('team.modal.contact')}</h4>
                    <div className="flex justify-center gap-4">
                      {selectedMember.email && (
                        <motion.a 
                          href={`mailto:${selectedMember.email}`}
                          className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Mail className="w-4 h-4" />
                          <span className="text-sm">Email</span>
                        </motion.a>
                      )}
                      {selectedMember.linkedin && (
                        <motion.a 
                          href={selectedMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Linkedin className="w-4 h-4" />
                          <span className="text-sm">LinkedIn</span>
                        </motion.a>
                      )}
                      {selectedMember.phone && (
                        <motion.a 
                          href={`tel:${selectedMember.phone}`}
                          className="flex items-center gap-2 px-4 py-2 bg-muted rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Phone className="w-4 h-4" />
                          <span className="text-sm">Call</span>
                        </motion.a>
                      )}
                    </div>
                  </motion.div>

                  {/* Close Button */}
                  <motion.div 
                    className="flex justify-center pt-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedMember(null)}
                      className="px-8"
                    >
                      {t('team.modal.close')}
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </DialogContent>
        </Dialog>

      </div>
    </section>
  );
};

export default TeamMembersSection;