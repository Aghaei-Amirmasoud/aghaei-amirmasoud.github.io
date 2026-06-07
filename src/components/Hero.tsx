import React from 'react';
import { Terminal, Database, BrainCircuit, Network, Github, Linkedin, FileText } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data';
import { Badge, GlassCard, SectionHeader, FadeIn } from './UI';

export const Hero = () => {
  const { profile } = PORTFOLIO_DATA;

  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col items-center justify-center min-h-[80vh] relative">
      {/* Decorative Blur Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10" />

      <FadeIn className="text-center max-w-4xl space-y-6 w-full">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary font-mono text-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          SYSTEM_ONLINE
        </div>
        
        <h1 className="font-mono text-4xl md:text-6xl font-bold text-on-surface tracking-tighter text-glow">
          {profile.name}
        </h1>
        <h2 className="font-mono text-xl md:text-2xl text-on-surface-variant font-medium">
          {profile.role} · {profile.tagline}
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch text-left">
          {/* Terminal / About Me JSON */}
          <GlassCard className="col-span-1 md:col-span-8 group">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-3">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-error" />
                <div className="w-3 h-3 rounded-full bg-tertiary" />
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>
              <span className="ml-3 font-mono text-xs text-on-surface-variant">about_me.json</span>
            </div>
            
            <pre className="font-mono text-sm text-on-surface-variant overflow-x-auto whitespace-pre-wrap leading-relaxed">
              <span className="text-primary">{"{"}</span>{`\n`}
              {`  `}<span className="text-tertiary">"name"</span>: <span className="text-primary">"{profile.name}"</span>,{`\n`}
              {`  `}<span className="text-tertiary">"role"</span>: <span className="text-primary">"{profile.role}"</span>,{`\n`}
              {`  `}<span className="text-tertiary">"education"</span>: <span className="text-primary">"{profile.education}"</span>,{`\n`}
              {`  `}<span className="text-tertiary">"core_stack"</span>: <span className="text-primary">[{profile.coreStack.map(s => `"${s}"`).join(', ')}]</span>,{`\n`}
              {`  `}<span className="text-tertiary">"status"</span>: <span className="text-primary">"{profile.status}"</span><span className="inline-block w-2 h-4 bg-primary align-middle ml-1 animate-pulse" />{`\n`}
              <span className="text-primary">{"}"}</span>
            </pre>
          </GlassCard>

          {/* Quick Stats Column */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-4">
            <GlassCard className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Terminal className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-on-surface">{profile.yearsExperience}</div>
                  <div className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Years Exp</div>
                </div>
              </div>
            </GlassCard>
            
            <GlassCard className="flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                  <Database className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-mono text-3xl font-bold text-on-surface">{profile.projectCount}</div>
                  <div className="font-mono text-xs text-on-surface-variant uppercase tracking-wider">Deployments</div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="#projects" className="bg-primary hover:bg-primary/90 text-on-primary font-mono text-sm px-6 py-3 rounded transition-all duration-300 font-semibold flex items-center gap-2 shadow-[0_0_15px_rgba(192,193,255,0.3)]">
            <Network className="w-4 h-4" />
            Explore Projects
          </a>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-outline hover:border-primary text-on-surface font-mono text-sm px-6 py-3 rounded transition-all duration-300 flex items-center gap-2 bg-white/5 hover:bg-white/10">
            <FileText className="w-4 h-4" />
            Download Resume
          </a>
        </div>
      </FadeIn>
    </section>
  );
};
