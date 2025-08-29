import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingDown, Clock, Shield } from 'lucide-react';

const CaseStudiesSection = () => {
  const caseStudies = [
    {
      category: 'Residential Mega Projects',
      title: 'UAE Villa Communities',
      description: 'Supplied concrete blocks and interlock pavers for major residential developments in Abu Dhabi and Dubai.',
      image: '/api/placeholder/600/400',
      results: [
        { icon: TrendingDown, label: 'Cost Reduction', value: '15%' },
        { icon: Clock, label: 'Time Saved', value: '30%' },
        { icon: Shield, label: 'Quality Compliance', value: '100%' },
      ],
      location: 'Abu Dhabi & Dubai',
      duration: '18 months',
    },
    {
      category: 'Commercial & Service Facilities',
      title: 'Shopping Mall Construction',
      description: 'Provided prefab systems and facade solutions for major commercial developments across the UAE.',
      image: '/api/placeholder/600/400',
      results: [
        { icon: TrendingDown, label: 'Cost Reduction', value: '20%' },
        { icon: Clock, label: 'Time Saved', value: '25%' },
        { icon: Shield, label: 'Quality Compliance', value: '100%' },
      ],
      location: 'UAE',
      duration: '12 months',
    },
    {
      category: 'National Infrastructure',
      title: 'Highway & Roads Project',
      description: 'Delivered high-durability interlock pavers and concrete solutions for national infrastructure projects.',
      image: '/api/placeholder/600/400',
      results: [
        { icon: TrendingDown, label: 'Cost Reduction', value: '12%' },
        { icon: Clock, label: 'Time Saved', value: '35%' },
        { icon: Shield, label: 'Quality Compliance', value: '100%' },
      ],
      location: 'UAE National Projects',
      duration: '24 months',
    },
  ];

  return (
    <section id="cases" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Case Studies</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real results from our major projects across the UAE, demonstrating our commitment to quality, efficiency, and excellence.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 relative overflow-hidden">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/90 text-primary">
                    {study.category}
                  </Badge>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white">
                    <div className="text-sm opacity-90">{study.location}</div>
                    <div className="text-xs opacity-75">{study.duration}</div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground">{study.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {study.description}
                </p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Results:</h4>
                  <div className="grid grid-cols-3 gap-4">
                    {study.results.map((result, resultIndex) => {
                      const IconComponent = result.icon;
                      return (
                        <div key={resultIndex} className="text-center">
                          <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                            <IconComponent className="h-6 w-6 text-primary" />
                          </div>
                          <div className="text-2xl font-bold text-accent">{result.value}</div>
                          <div className="text-xs text-muted-foreground">{result.label}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Customer Testimonial Section */}
        <div className="mt-20">
          <Card className="bg-gradient-to-r from-primary/5 to-accent/5 border-0">
            <CardContent className="p-12 text-center">
              <div className="max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
                  "ADIFC's commitment to quality and timely delivery made them our preferred partner for major construction projects. Their innovative solutions helped us achieve significant cost and time savings."
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold">AE</span>
                  </div>
                  <div className="text-left">
                    <div className="font-semibold text-foreground">Ahmed Al-Emirati</div>
                    <div className="text-sm text-muted-foreground">Project Manager, Major Construction Company</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;