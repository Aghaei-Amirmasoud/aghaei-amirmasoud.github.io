import React from 'react';
import { PORTFOLIO_DATA } from '../data';
import { SectionHeader, FadeIn, GlassCard, Badge } from './UI';
import { GraduationCap } from 'lucide-react';

export const Education = () => {
  return (
    <section id="education" className="py-20">
      <SectionHeader 
        icon={GraduationCap} 
        title="Education" 
        subtitle="Academic milestones in computer science and artificial intelligence." 
      />
      
      <div className="relative mt-12 max-w-4xl mx-auto">
        {/* Timeline Vertical Line */}
        <div className="absolute left-[15px] md:left-[23px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-tertiary/50 to-white/5 rounded-full" />
        
        <div className="space-y-12">
          {PORTFOLIO_DATA.education.map((edu, idx) => {
            return (
              <FadeIn key={idx} delay={idx * 0.1} className="relative pl-12 md:pl-16">
                {/* Timeline Dot */}
                <div 
                  className={`absolute left-[8px] md:left-[16px] top-6 w-4 h-4 rounded-full border-2 bg-background z-10 transition-colors duration-300 border-outline group-hover:border-tertiary`} 
                />
                
                <GlassCard>
                  <div className="flex flex-col md:flex-row md:justify-between items-start md:items-center gap-2 mb-4">
                    <div className="flex items-center gap-2 opacity-80">
                      <GraduationCap className="w-4 h-4 text-tertiary" />
                      <span className="font-mono text-xs tracking-widest uppercase text-on-surface-variant">
                        {edu.date}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="font-mono text-2xl font-bold text-on-surface mb-1 group-hover:text-tertiary transition-colors">
                    {edu.degree}
                  </h3>
                  <div className="font-mono text-sm text-tertiary mb-4 flex items-center gap-2">
                    {edu.university} <span className="text-on-surface-variant">· {edu.location}</span>
                  </div>
                  
                  <ul className="font-sans text-on-surface-variant mb-6 leading-relaxed text-sm md:text-base list-disc pl-5 space-y-2">
                    {Array.isArray(edu.description) ? edu.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    )) : <li>{edu.description}</li>}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map(tag => (
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
