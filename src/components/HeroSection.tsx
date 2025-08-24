import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import MeEdit from './MeEdit.jpg';

export const HeroSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id="intro"
      ref={ref}
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      tabIndex={-1}
    >
      <div className="max-w-[1140px] w-full mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {/* Avatar (badge removed) */}
          <div className={`relative inline-flex items-center justify-center w-24 h-24 mb-8 rounded-full shadow-lg ${isIntersecting ? 'animate-float' : ''}`}>
            <img
              src={MeEdit}
              alt="Nabeel Syed Hasan"
              className="w-24 h-24 rounded-full object-cover ring-4 ring-brand-accent/20"
              loading="eager"
            />
          </div>

          {/* Greeting */}
          <div className="mb-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-2 text-brand-text dark:text-gray-100">
              Hi, I'm{' '}
              <span className="text-brand-accent drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
                Nabeel Syed
              </span>{' '}
              <span aria-hidden>👋</span>
            </h1>
          </div>

          {/* Title */}
          <p className="text-xl sm:text-2xl lg:text-3xl text-brand-text-muted dark:text-gray-300 mb-4 font-light">
            Full-stack agentic AI developer
          </p>

          {/* Description */}
          <p className="text-lg sm:text-xl text-brand-text-muted dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            I build agents that browse, plan, and get things done.
          </p>

          {/* CTA Button */}
          <div className="mb-12">
            <a
              href="https://teams.microsoft.com/l/chat/0/0?users=nabeel.syed@transmissionagency.com"
              className="inline-flex items-center px-8 py-4 bg-brand-accent hover:bg-brand-accent-hover text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-accent/20 glow-button"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on Teams
            </a>
          </div>

          {/* Chips */}
          <div className="flex flex-wrap justify-center gap-3">
            {['Agentic AI', 'TypeScript & Python', 'IST (UTC+5:30)', 'Amateur Trekker'].map((chip, index) => (
              <div
                key={chip}
                className={`px-4 py-2 bg-brand-muted dark:bg-gray-800 text-brand-text-muted dark:text-gray-300 rounded-full text-sm font-medium border border-brand-border dark:border-gray-600 hover:border-brand-accent/30 transition-all duration-200 ${
                  isIntersecting ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${(index + 1) * 100}ms` }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
