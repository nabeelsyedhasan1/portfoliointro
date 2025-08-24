import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const AboutSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const hobbies = [
    {
      emoji: '📺',
      title: 'Anime Nerd',
      description: 'Devoured over 50 series and counting – because epic stories fuel my imagination!'
    },
    {
      emoji: '🏔️',
      title: 'Trekking Enthusiast',
      description: 'Always chasing those breathtaking mountain views that make every climb worth it.'
    },
    {
      emoji: '🎵',
      title: 'Hip-Hop Head',
      description: 'From Kendrick to old-school classics – keeps the energy up.'
    }
  ];

  return (
    <section 
      id="about" 
      ref={ref}
      className="py-24 bg-brand-muted dark:bg-gray-800/50"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-6 font-sora text-brand-text dark:text-gray-100">
            About me
          </h2>
          
          {/* Intro */}
          <p className="text-lg text-center text-brand-text-muted dark:text-gray-300 mb-16 max-w-3xl mx-auto">
            Born and brought up in Bahrain; moved to India in 2016 to continue my studies.
          </p>
          
          {/* Two Column Layout */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div className={`transition-all duration-1000 delay-200 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}>
              <h3 className="text-xl font-semibold mb-4 text-brand-accent font-sora">
                What I'm great at:
              </h3>
              <p className="text-brand-text-muted dark:text-gray-300 leading-relaxed">
                Brainstorming new ideas, creating end-to-end agentic apps, and clean APIs.
              </p>
            </div>
            
            <div className={`transition-all duration-1000 delay-300 ${
              isIntersecting ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}>
              <h3 className="text-xl font-semibold mb-4 text-brand-accent font-sora">
                What I'm exploring next:
              </h3>
              <p className="text-brand-text-muted dark:text-gray-300 leading-relaxed">
                Multi-agent orchestration and reliable eval loops for task completion.
              </p>
            </div>
          </div>
          
          {/* Hobby Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hobbies.map((hobby, index) => (
              <div
                key={hobby.title}
                className={`bg-brand-bg dark:bg-gray-900 p-6 rounded-2xl border border-brand-border dark:border-gray-700 hover:border-brand-accent/30 dark:hover:border-brand-accent/30 hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer ${
                  isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${(index + 1) * 150}ms` }}
              >
                <div className="text-4xl mb-4 transform hover:scale-110 hover:rotate-6 transition-transform duration-200">
                  {hobby.emoji}
                </div>
                <h3 className="font-semibold mb-2 font-sora">{hobby.title}</h3>
                <p className="text-brand-text-muted dark:text-gray-300 text-sm leading-relaxed">
                  {hobby.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};