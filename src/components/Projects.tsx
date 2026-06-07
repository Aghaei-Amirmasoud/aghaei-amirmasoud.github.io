import React from 'react';
import { PORTFOLIO_DATA } from '../data';
import { GlassCard, Badge, SectionHeader, FadeIn } from './UI';
import { Code2, Github } from 'lucide-react';

export const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <SectionHeader 
        icon={Code2} 
        title="Selected Works" 
        subtitle="Synthesized models and structural engineering for complex systems." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {PORTFOLIO_DATA.projects.map((project, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <GlassCard className="h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-mono text-xl font-semibold text-on-surface group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <a href={project.github} className="text-on-surface-variant hover:text-primary transition-colors" aria-label="View Source">
                  <Github className="w-5 h-5" />
                </a>
              </div>
              
              <p className="font-sans text-on-surface-variant mb-6 leading-relaxed flex-grow text-sm md:text-base">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map(tag => (
                  <Badge key={tag}>{tag}</Badge>
                ))}
              </div>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
