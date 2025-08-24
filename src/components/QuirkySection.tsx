import React from 'react';
import { Film } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const QuirkySection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="quirky" 
      ref={ref}
      className="py-24 bg-brand-muted dark:bg-gray-800/50"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 font-sora">
            Quirkiest Thing I've Done So Far
          </h2>
          
          {/* Quirky Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-brand-bg dark:bg-gray-900 p-8 rounded-2xl border border-brand-border dark:border-gray-700 hover:border-brand-accent/30 dark:hover:border-brand-accent/30 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center">
              {/* Film Icon */}
              <div className="mb-6 inline-flex p-6 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-full">
                <Film className="h-12 w-12 text-brand-accent transform hover:scale-110 hover:rotate-12 transition-transform duration-200" />
              </div>
              
              {/* Quirky Story */}
              <p className="text-xl text-brand-text dark:text-gray-100 leading-relaxed">
                Pulled an all-nighter binge-watching two full seasons of Game of Thrones.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};