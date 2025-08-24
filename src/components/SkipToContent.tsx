import React from 'react';

export const SkipToContent: React.FC = () => {
  const handleSkip = () => {
    const main = document.querySelector('main');
    main?.focus();
    main?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleSkip}
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-brand-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-brand-accent-hover transition-colors"
    >
      Skip to main content
    </button>
  );
};