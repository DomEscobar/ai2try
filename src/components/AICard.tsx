import React, { useState, useEffect } from 'react';
import { ExternalLink, Play, Tag } from 'lucide-react';
import getBrowserFingerprint from 'get-browser-fingerprint';
import { AIApp } from '../types';
import { Modal } from './Modal';

interface AICardProps {
  app: AIApp;
}

export const AICard: React.FC<AICardProps> = ({ app }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fingerprint, setFingerprint] = useState<number | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const initFingerprint = async () => {
      const fp = await getBrowserFingerprint();
      setFingerprint(fp);
    };
    
    initFingerprint();
  }, []);

  const getIframeUrl = () => {
    const url = new URL(app.url);
    if (fingerprint) {
      url.searchParams.append('fp', fingerprint.toString());
    }
    return url.toString();
  };

  return (
    <>
      <div 
        className="relative backdrop-blur-sm bg-white/5 rounded-xl overflow-hidden border border-white/10 transition-all duration-300 hover:shadow-[0_0_15px_rgba(100,210,255,0.25)] hover:border-cyan-400/20 flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Subtle Animated Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none" 
          style={{ 
            opacity: isHovered ? 0.07 : 0,
            background: 'linear-gradient(120deg, rgba(80,214,255,1) 0%, rgba(127,107,255,1) 50%, rgba(174,68,255,1) 100%)',
            backgroundSize: '200% 200%',
            animation: 'gradientBG 15s ease infinite'
          }}
        />
        
        {/* Creator Badge with simplified look */}
        <a
          href={app.creatorUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 right-3 z-20 p-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center transition-all duration-200 hover:bg-cyan-400/10"
          style={{ 
            boxShadow: isHovered ? '0 0 5px rgba(100,210,255,0.3)' : 'none',
            borderColor: isHovered ? 'rgba(100,210,255,0.3)' : 'rgba(255,255,255,0.1)',
          }}
        >
          <ExternalLink className="w-3 h-3 text-cyan-300" />
        </a>

        {/* Clean Image Section */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={app.imageUrl}
            alt={app.title}
            className="w-full h-full object-cover transform transition-transform duration-500"
            style={{
              transform: isHovered ? 'scale(1.03)' : 'scale(1)',
              filter: 'grayscale(0.1) brightness(0.85)'
            }}
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
          
          {/* Title positioned at bottom of image with subtle glow */}
          <div className="absolute bottom-0 left-0 w-full p-4 pb-3 pointer-events-none">
            <h2 
              className="text-xl font-medium text-white" 
              style={{ 
                textShadow: isHovered ? '0 0 10px rgba(100,210,255,0.5)' : 'none',
                color: isHovered ? 'rgba(210,240,255,1)' : 'white'
              }}
            >
              {app.title}
            </h2>
          </div>
        </div>

        {/* Content Area with cleaner spacing */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Simplified description */}
          <p className="text-sm text-gray-300 mb-4 line-clamp-2">{app.description}</p>
          
          {/* Minimal Tags */}
          {app.tags && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {app.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-light"
                  style={{ 
                    background: 'rgba(100,210,255,0.08)',
                    color: 'rgb(180,230,255)',
                    border: '1px solid rgba(100,210,255,0.15)'
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          
          {/* Minimalist Try Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="mt-auto w-full flex items-center justify-center gap-2 py-3 px-4 rounded-lg text-sm font-medium transition-all duration-300 z-10 relative"
            style={{
              background: isHovered ? 'rgba(100,210,255,0.15)' : 'rgba(255,255,255,0.05)',
              color: isHovered ? 'rgb(180,230,255)' : 'white',
              border: isHovered ? '1px solid rgba(100,210,255,0.25)' : '1px solid rgba(255,255,255,0.1)'
            }}
          >
            <Play className="w-3.5 h-3.5" />
            Try
          </button>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={app.title}
      >
        <iframe
          src={getIframeUrl()}
          className="w-full h-full border-0"
          title={app.title}
          allow="accelerometer; camera; microphone; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    </>
  );
};