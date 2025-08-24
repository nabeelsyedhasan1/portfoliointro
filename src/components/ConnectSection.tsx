import React from 'react';
import { MessageSquare, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const ConnectSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();

  return (
    <section 
      id="connect" 
      ref={ref}
      className="py-24 bg-brand-bg dark:bg-gray-900"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 font-sora">
            Connect With Me
          </h2>
          
          {/* Subtitle */}
          <p className="text-center text-brand-text-muted dark:text-gray-300 mb-12">
            <span className="font-semibold text-brand-accent">Fastest channel:</span> Teams
          </p>
          
          {/* Connect Cards */}
          <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            {/* Teams Card */}
            <div className={`bg-brand-muted dark:bg-gray-800 p-8 rounded-2xl border border-brand-border dark:border-gray-700 hover:border-brand-accent/30 dark:hover:border-brand-accent/30 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '200ms' }}
            >
              <div className="mb-6 inline-flex p-4 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-full">
                <MessageSquare className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-sora">Teams Chat</h3>
              <a
                href="https://teams.microsoft.com/l/chat/0/0?users=nabeel.syed@transmissionagency.com"
                className="inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
                target="_blank"
                rel="noopener noreferrer"
              >
                Start Chat
              </a>
            </div>
            
            {/* Email Card */}
            <div className={`bg-brand-muted dark:bg-gray-800 p-8 rounded-2xl border border-brand-border dark:border-gray-700 hover:border-brand-accent/30 dark:hover:border-brand-accent/30 hover:shadow-xl hover:scale-105 transition-all duration-300 text-center ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ animationDelay: '300ms' }}
            >
              <div className="mb-6 inline-flex p-4 bg-brand-accent/10 dark:bg-brand-accent/20 rounded-full">
                <Mail className="h-8 w-8 text-brand-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4 font-sora">Email</h3>
              <a
                href="mailto:nabeel.syed@transmissionagency.com"
                className="inline-flex items-center px-6 py-3 bg-brand-accent hover:bg-brand-accent-hover text-white font-medium rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/20"
              >
                Send Email
              </a>
            </div>
          </div>
          
          {/* Happy to jam on */}
          <div className="text-center">
            <p className="text-lg text-brand-text-muted dark:text-gray-300">
              <span className="font-semibold text-brand-accent">Happy to jam on:</span> Agent ideas, quick prototypes, anime recs & soundtracks for focus
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};