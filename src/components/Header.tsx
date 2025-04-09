import React from 'react';
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
          </div>

          <nav className="flex items-center gap-6">
          </nav>
        </div>
      </div>
    </header>
  );
};