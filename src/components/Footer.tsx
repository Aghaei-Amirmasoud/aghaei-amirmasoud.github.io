import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/10 py-12 mt-20 relative z-10 text-center flex flex-col items-center">
      <div className="font-mono text-xl text-primary font-bold tracking-tighter mb-6 opacity-80 uppercase">
        AI_ML_ENGINEERING
      </div>
      
      <div className="flex flex-wrap justify-center gap-6 mb-8">
        <a href="https://github.com/Aghaei-Amirmasoud" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors font-mono text-sm underline decoration-primary/30 underline-offset-4 uppercase">
          GitHub
        </a>
        <a href="https://it.linkedin.com/in/amirmasoud-aghaei-a40917312" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors font-mono text-sm underline decoration-primary/30 underline-offset-4 uppercase">
          LinkedIn
        </a>
        <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors font-mono text-sm underline decoration-primary/30 underline-offset-4 uppercase">
          CV_PDF
        </a>
      </div>
      
      <p className="font-mono text-xs text-on-surface-variant/50 uppercase">
        © {new Date().getFullYear()} Amir Masoud Aghaei. All Rights Reserved.
      </p>
    </footer>
  );
};
