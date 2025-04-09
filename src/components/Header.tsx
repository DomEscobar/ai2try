import React from 'react';
import { Github } from 'lucide-react';

export const Header: React.FC = () => {
  return (
    <header className="border-b border-white/5 backdrop-blur-md bg-black/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative ai-glow">
              <img src='logo.png' className='h-8 brightness-110' />
              <div className="absolute -inset-1 rounded-full opacity-50 filter blur-md bg-gradient-to-r from-cyan-400 to-purple-600 -z-10" />
            </div>
            <span className="text-lg font-extralight tracking-wide text-white">
              <span className="text-cyan-300 font-normal">AI</span>2Try
            </span>
          </div>
          
          <nav className="flex items-center gap-6">
            <a 
              href="https://github.com/DomEscobar/ai2try" 
              className="text-sm hover:text-cyan-300 transition-colors font-light text-gray-300"
            >
              Submit AI
            </a>
            <a
              href="https://github.com/DomEscobar/ai2try"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-cyan-500/10 transition-colors border border-transparent hover:border-cyan-500/20"
            >
              <Github className="w-5 h-5 text-cyan-300" />
              <span className="sr-only">GitHub</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};