import React from 'react';
import { Heart, Sparkles, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export const ThankYouSection: React.FC = () => {
  const { ref, isIntersecting } = useIntersectionObserver();
  return (
    <section
      id="thanks"
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-1 h-1 bg-pink-300 rounded-full animate-ping"></div>
        <div className="absolute bottom-32 left-40 w-3 h-3 bg-blue-300 rounded-full animate-bounce"></div>
        <div className="absolute top-60 left-1/3 w-1 h-1 bg-green-300 rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-2 h-2 bg-purple-300 rounded-full animate-ping"></div>

        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className={`text-center z-10 transition-all duration-1000 ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Decorative icons */}
        <div className="flex justify-center items-center gap-4 mb-8">
          <Star className={`w-8 h-8 text-yellow-300 transition-all duration-1000 delay-300 ${isIntersecting ? 'animate-spin' : ''}`} />
          <Sparkles className={`w-10 h-10 text-pink-300 transition-all duration-1000 delay-500 ${isIntersecting ? 'animate-pulse' : ''}`} />
          <Heart className={`w-8 h-8 text-red-300 transition-all duration-1000 delay-700 ${isIntersecting ? 'animate-bounce' : ''}`} />
        </div>

        <h2 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent animate-pulse">
          Thank You
        </h2>

        <div className="relative">
          <p className="text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto leading-relaxed mb-6">
            I appreciate your time and attention.
          </p>
          <p className="text-lg md:text-xl text-purple-200 max-w-xl mx-auto">
            Looking forward to connecting with you! ✨
          </p>
        </div>

        {/* Decorative bottom element */}
        <div className={`mt-12 flex justify-center transition-all duration-1000 delay-1000 ${isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 rounded-full"></div>
        </div>
      </div>
    </section>
  );
};
