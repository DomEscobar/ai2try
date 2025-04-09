import React from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { AICard } from '../components/AICard';
import { NeuralBackground } from '../components/NeuralBackground';
import { aiApps } from '../data/aiApps';

export const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-black text-white relative overflow-hidden">
      <NeuralBackground />
      <div className="relative z-10">
        <Header />
        
        <main className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="ai-float">
            <h1 className="text-3xl font-extralight text-center mb-2 ai-gradient-text">
              Discover AI Apps
            </h1>
            <p className="text-gray-400 text-center mb-12 font-light max-w-2xl mx-auto">
              Explore and try out the latest AI applications without any signup or installation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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