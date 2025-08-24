import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { PhotosSection } from './components/PhotosSection';
import { LiveSection } from './components/LiveSection';
import { LearningsSection } from './components/LearningsSection';
import { QuirkySection } from './components/QuirkySection';
import { ConnectSection } from './components/ConnectSection';
import { ThankYouSection } from './components/ThankYouSection';
import { Footer } from './components/Footer';
import { SkipToContent } from './components/SkipToContent';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    // Check for user's preference
    const isDark = localStorage.getItem('darkMode') === 'true' || 
                   (!localStorage.getItem('darkMode') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
  }, []);

  useEffect(() => {
    // Apply dark mode class
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', darkMode.toString());
  }, [darkMode]);

  useEffect(() => {
    // Intersection Observer for active section
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5, rootMargin: '-100px 0px -100px 0px' }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg dark:bg-gray-900 text-brand-text dark:text-gray-100 transition-colors">
      <SkipToContent />
      <Navigation 
        activeSection={activeSection} 
        darkMode={darkMode} 
        setDarkMode={setDarkMode} 
      />
      
      <main>
        <HeroSection />
        <AboutSection />
        <PhotosSection />
        <LiveSection />
        <LearningsSection />
        <QuirkySection />
        <ConnectSection />
        <ThankYouSection />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;