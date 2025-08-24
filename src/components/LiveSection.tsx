import React, { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

interface Question {
  id: string;
  person: string;
  question: string;
}

export const LiveSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  const [liveQuestion, setLiveQuestion] = useState<string>('felicia');

  const questions: Question[] = [
    {
      id: 'felicia',
      person: 'Felicia Lim',
      question: 'Which fictional character would make the best colleague at Transmission?'
    },
    {
      id: 'alex',
      person: 'Alex Roy',
      question: 'If you could only eat one snack during work hours forever, what would you choose?'
    },
    {
      id: 'emily',
      person: 'Emily Gan',
      question: 'If you could turn any everyday task into an Olympic sport, what would you win gold in?'
    }
  ];

  const toggleLive = (questionId: string) => {
    setLiveQuestion(liveQuestion === questionId ? '' : questionId);
  };

  return (
    <section 
      id="live" 
      ref={ref}
      className="py-24 bg-brand-muted dark:bg-gray-800/50"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-sora">
            Teammates • Questions
          </h2>
          <p className="text-center text-brand-text-muted dark:text-gray-300 mb-16">
            I picked some random questions for a few people.
          </p>
          
          {/* Question Cards */}
          <div className="grid gap-6 max-w-4xl mx-auto">
            {questions.map((q, index) => {
              const isLive = liveQuestion === q.id;
              
              return (
                <div
                  key={q.id}
                  className={`bg-brand-bg dark:bg-gray-900 p-6 rounded-2xl border border-brand-border dark:border-gray-700 hover:border-brand-accent/30 dark:hover:border-brand-accent/30 hover:shadow-lg transition-all duration-300 ${
                    isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-lg font-sora">
                      {q.person}
                    </h3>
                    
                    {/* Toggle Button */}
                    <button
                      onClick={() => toggleLive(q.id)}
                      className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                        isLive
                          ? 'bg-green-100 text-green-800 border-2 border-green-300 animate-pulse focus:ring-green-500'
                          : 'bg-red-100 text-red-800 border-2 border-red-300 focus:ring-red-500'
                      }`}
                    >
                      {isLive ? 'Live' : 'Not Live'}
                    </button>
                  </div>
                  
                  <p className="text-brand-text-muted dark:text-gray-300 leading-relaxed">
                    {q.question}
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