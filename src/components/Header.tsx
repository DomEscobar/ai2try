import React from 'react';
import { Brain, Github } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-white/10 backdrop-blur-lg bg-black/20 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
           <img src='logo.png' className='h-8' />
          </div>
          <nav className="flex items-center gap-6">
            <a href="https://github.com/DomEscobar/ai2try" className="text-sm hover:text-purple-400 transition-colors">Submit AI</a>
            <a
              href="https://github.com/DomEscobar/ai2try"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm hover:text-purple-400 transition-colors flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};