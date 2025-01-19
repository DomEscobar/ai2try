import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-white/10 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <p className="text-sm text-gray-400">© 2024 AI2Try. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Terms</Link>
            <Link to="/contact" className="text-sm text-gray-400 hover:text-purple-400 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};