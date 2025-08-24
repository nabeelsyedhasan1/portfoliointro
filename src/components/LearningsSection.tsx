import React from 'react';
import { Zap, Code, Heart } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const LearningsSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const learnings = [
    {
      icon: Zap,
      title: 'Feedback loops make it really useful',
      description: "Quick 'Was this helpful?' makes results better fast."
    },
    {
      icon: Code,
      title: 'Modular code design makes scaling AI agents easier',
      description: 'Smaller pieces = easier to extend and maintain.'
    },
    {
      icon: Heart,
      title: 'Extra activities beyond official work matter',
      description: 'Keeps balance and boosts creativity/growth.'
    }
  ];

  return (
    <section 
      id="learnings" 
      ref={ref}
      className="py-24 bg-brand-bg dark:bg-gray-900"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 font-sora">
            3 New Things I Learned in Week 1
          </h2>
          
          {/* Learning Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {learnings.map((learning, index) => {
              const IconComponent = learning.icon;
              
              return (
                <div
                  key={learning.title}
                  className={`bg-brand-muted dark:bg-gray-800 p-8 rounded-2xl border border-brand-border dark:border-gray-700 hover:border-brand-accent/30 dark:hover:border-brand-accent/30 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Icon */}
                  <div className="mb-6 inline-flex p-4 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-full">
                    <IconComponent className="h-8 w-8 text-brand-accent transform hover:scale-110 hover:rotate-12 transition-transform duration-200" />
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-lg font-semibold mb-4 font-sora">
                    {learning.title}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-brand-text-muted dark:text-gray-300 leading-relaxed">
                    {learning.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};