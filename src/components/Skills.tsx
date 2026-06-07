import React from 'react';
import { PORTFOLIO_DATA } from '../data';
import { SectionHeader, FadeIn, GlassCard, Badge } from './UI';
import { Layers, TerminalSquare, BrainCircuit, Sparkles, Server, Globe, Layout } from 'lucide-react';

const getIcon = (name: string) => {
  switch (name) {
    case 'variable': return TerminalSquare;
    case 'brain': return BrainCircuit;
    case 'sparkles': return Sparkles;
    case 'server': return Server;
    case 'globe': return Globe;
    case 'layout': return Layout;
    default: return Layers;
  }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <SectionHeader 
        icon={Layers} 
        title="Skills" 
        subtitle="A structured overview of core competencies and tools." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
        {PORTFOLIO_DATA.skills.map((skillGroup, idx) => {
          const Icon = getIcon(skillGroup.icon);
          
          return (
            <FadeIn key={idx} delay={idx * 0.1}>
              <GlassCard className="h-full">
                <div className="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
                  <div className="p-2 rounded bg-primary/10 text-primary">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-mono text-lg font-semibold text-on-surface">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map(item => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </GlassCard>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
};
