import React from 'react';
import { PORTFOLIO_DATA } from '../data';
import { SectionHeader, FadeIn, GlassCard } from './UI';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates = () => {
  return (
    <section id="certificates" className="py-20">
      <SectionHeader 
        icon={Award} 
        title="Certificates" 
        subtitle="Professional certifications and continuous learning milestones." 
      />
      <div className="flex flex-col gap-6 mt-12">
        {PORTFOLIO_DATA.certificates.map((cert, idx) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <GlassCard className="relative flex flex-col pt-6">
              <a 
                href={cert.link} 
                className="absolute top-6 right-6 text-on-surface-variant hover:text-primary transition-colors"
                aria-label="View Credential"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
              <div className="pr-12">
                <h3 className="font-mono text-xl md:text-2xl font-bold text-on-surface mb-2">{cert.title}</h3>
                <div className="font-mono text-sm text-primary mb-4">
                  {cert.issuer} <span className="text-on-surface-variant">· {cert.date}</span>
                </div>
                <ul className="font-sans text-on-surface-variant text-sm md:text-base max-w-3xl leading-relaxed list-disc pl-5 space-y-1">
                  {Array.isArray(cert.description) ? cert.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  )) : <li>{cert.description}</li>}
                </ul>
              </div>
            </GlassCard>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};
