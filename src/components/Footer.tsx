import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-muted dark:bg-gray-800 border-t border-brand-border dark:border-gray-700">
      <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between">
          <div className="text-brand-text-muted dark:text-gray-400 mb-4 sm:mb-0">
            © 2025 Nabeel • Built with ❤️ for Gears
          </div>
          
          <div className="flex items-center space-x-4">
            <a
              href="mailto:nabeel.syed@transmissionagency.com"
              className="p-2 text-brand-text-muted dark:text-gray-400 hover:text-brand-accent dark:hover:text-brand-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/20 rounded-lg"
              aria-label="Send email to Nabeel"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://teams.microsoft.com/l/chat/0/0?users=nabeel.syed@transmissionagency.com"
              className="p-2 text-brand-text-muted dark:text-gray-400 hover:text-brand-accent dark:hover:text-brand-accent transition-colors focus:outline-none focus:ring-2 focus:ring-brand-accent/20 rounded-lg"
              aria-label="Chat with Nabeel on Teams"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageSquare className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};