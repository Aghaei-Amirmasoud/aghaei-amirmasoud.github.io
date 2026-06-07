import React from 'react';
import { Mail, Send } from 'lucide-react';
import { SectionHeader, FadeIn, GlassCard } from './UI';

export const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center w-full flex flex-col items-center">
      <FadeIn>
        <GlassCard className="max-w-2xl mx-auto w-full flex flex-col items-center justify-center p-8 md:p-12 text-center">
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 mx-auto">
            <Mail className="w-8 h-8" />
          </div>
          <h2 className="font-mono text-3xl md:text-4xl text-on-surface font-bold mb-4 tracking-tight">
            Get in Touch
          </h2>
          <p className="font-sans text-on-surface-variant text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto">
            I'm currently open to new opportunities in AI/ML Engineering. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          <a 
            href="mailto:amirmasoud.aghaei@studio.unibo.it" 
            className="inline-flex justify-center items-center gap-2 bg-primary text-on-primary font-mono font-bold text-sm px-6 py-3 rounded hover:brightness-110 active:scale-95 transition-all shadow-[0_0_15px_rgba(192,193,255,0.3)] mx-auto"
          >
            <Send className="w-4 h-4" />
            Say Hello
          </a>
        </GlassCard>
      </FadeIn>
    </section>
  );
};
