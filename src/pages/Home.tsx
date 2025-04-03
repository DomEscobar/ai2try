import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AICard } from '../components/AICard';
import { StarBackground } from '../components/StarBackground';
import { aiApps } from '../data/aiApps';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900 via-gray-900 to-black text-white relative overflow-hidden">
      <StarBackground />
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
            {aiApps.map((app) => (
              <AICard key={app.id} app={app} />
            ))}
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};