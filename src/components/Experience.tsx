import React from 'react';
import { PORTFOLIO_DATA } from '../data';
import { SectionHeader, FadeIn, GlassCard, Badge } from './UI';
import { Milestone, Briefcase, GraduationCap } from 'lucide-react';

export const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <SectionHeader 
        icon={Briefcase} 
        title="Work Experience" 
        subtitle="A chronological journey through professional roles and industry contributions." 
      />
      
      <div className="relative mt-12 max-w-4xl mx-auto">
        {/* Timeline Vertical Line */}
        <div className="absolute left-[15px] md:left-[23px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-primary/50 to-white/5 rounded-full" />
        
        <div className="space-y-12">
          {PORTFOLIO_DATA.experience.map((exp, idx) => {
            return (
              <FadeIn key={idx} delay={idx * 0.1} className="relative pl-12 md:pl-16">
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-[8px] md:left-[16px] top-6 w-4 h-4 rounded-full border-2 bg-background z-10 transition-colors duration-300 border-outline group-hover:border-primary`} 
                />
                
                <GlassCard>
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2 mb-4">
                    <div className="flex items-center gap-2 opacity-80">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span className="font-mono text-xs tracking-widest uppercase text-on-surface-variant">
                        {exp.date}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-mono text-2xl font-bold text-on-surface mb-1 group-hover:text-primary transition-colors">
                    {exp.role}
                  </h3>
                  <div className="font-mono text-sm text-primary mb-4 flex items-center gap-2">
                    {exp.company} <span className="text-on-surface-variant">· {exp.location}</span>
                  </div>
                  
                  <ul className="font-sans text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base list-disc pl-5 space-y-2">
                    {Array.isArray(exp.description) ? exp.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    )) : <li>{exp.description}</li>}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map(tag => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                </GlassCard>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
};
