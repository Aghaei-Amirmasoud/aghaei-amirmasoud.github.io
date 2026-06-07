import React from 'react';
import { NavBar } from './components/NavBar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Certificates } from './components/Certificates';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="tech-grid-bg min-h-screen flex flex-col selection:bg-primary/30 selection:text-primary relative">
      <NavBar />
      
      <main className="flex-1 max-w-7xl mx-auto w-full px-6 flex flex-col">
        <Hero />
        <Projects />
        <Education />
        <Experience />
        <Certificates />
        <Skills />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

