import React from 'react';
import { Sun, Moon } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const navItems = [
  { id: 'intro', label: 'Intro' },
  { id: 'about', label: 'About' },
  { id: 'photos', label: 'Photos' },
  { id: 'live', label: 'Live' },
  { id: 'learnings', label: 'Learnings' },
  { id: 'quirky', label: 'Quirky' },
  { id: 'connect', label: 'Connect' },
];

export const Navigation: React.FC<NavigationProps> = ({ activeSection, darkMode, setDarkMode }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="sticky top-0 z-40 bg-brand-bg/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-brand-border dark:border-gray-700">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/20 ${
                  activeSection === item.id
                    ? 'bg-brand-accent text-white shadow-sm'
                    : 'text-brand-text-muted dark:text-gray-300 hover:text-brand-text hover:bg-brand-muted dark:hover:bg-gray-800 dark:hover:text-gray-100'
                }`}
                aria-current={activeSection === item.id ? 'page' : undefined}
              >
                {item.label}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-lg bg-brand-muted dark:bg-gray-800 text-brand-text-muted dark:text-gray-300 hover:text-brand-text hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-100 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </button>
        </div>
      </div>
    </nav>
  );
};