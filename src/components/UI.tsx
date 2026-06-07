import React from 'react';
import { motion } from 'motion/react';

export const GlassCard = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <div className={`glass-panel p-6 rounded-xl transition-all duration-300 relative overflow-hidden group ${className}`}>
    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/[0.03] transition-colors duration-300 z-0 pointer-events-none"></div>
    <div className="relative z-10 h-full flex flex-col">
      {children}
    </div>
  </div>
);

export const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono text-xs px-2.5 py-1 rounded bg-white/5 border border-white/10 text-on-surface hover:border-primary/50 transition-colors cursor-default whitespace-nowrap">
    {children}
  </span>
);

export const SectionHeader = ({ icon: Icon, title, subtitle }: { icon: any, title: string, subtitle?: string }) => (
  <div className="mb-10">
    <h2 className="font-mono text-2xl md:text-3xl text-on-surface flex items-center gap-3 mb-3 font-semibold tracking-tight">
      <Icon className="text-primary w-7 h-7" />
      {title}
    </h2>
    {subtitle && <p className="text-on-surface-variant font-sans max-w-2xl text-base">{subtitle}</p>}
  </div>
);

export const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode, delay?: number, className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
);
