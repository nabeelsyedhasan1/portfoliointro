import React from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const ThankYouSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  return (
    <section
      id="thanks"
      ref={ref}
      className="py-24 bg-brand-muted dark:bg-gray-800 border-t border-brand-border dark:border-gray-700"
    >
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={`transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-4xl sm:text-5xl font-extrabold font-sora mb-4">
            <span className="bg-gradient-to-r from-brand-accent via-pink-500 to-rose-400 bg-clip-text text-transparent">
              Thank you for visiting!
            </span>
          </h2>
          <p className="text-brand-text-muted dark:text-gray-300 max-w-2xl mx-auto mb-8">
            Appreciate your time — excited to connect and collaborate.
          </p>
          <div className="flex justify-center gap-3">
            <span className="text-2xl animate-bounce" aria-hidden>🎉</span>
            <span className="text-2xl animate-bounce [animation-delay:120ms]" aria-hidden>✨</span>
            <span className="text-2xl animate-bounce [animation-delay:240ms]" aria-hidden>🙌</span>
          </div>
        </div>
      </div>
    </section>
  );
};
