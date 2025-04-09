import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/5 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400 font-light">
            © 2024 <span className="text-cyan-300 font-normal">AI</span>2Try. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-cyan-300 transition-colors font-light">Privacy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-cyan-300 transition-colors font-light">Terms</Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-cyan-300 transition-colors font-light">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};