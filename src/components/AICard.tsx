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
      <div className="relative overflow-hidden rounded-2xl group">
        {/* Card Background with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900/40 to-black z-0" />
        
        {/* Glowing Border Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 
          p-[1px] opacity-70 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Creator Badge */}
          <a
            href={app.creatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 z-20 flex items-center gap-1 bg-gray-900/80 backdrop-blur-md 
              py-1 px-2 rounded-full text-xs text-gray-300 transition-all duration-200 hover:bg-purple-800/90 hover:text-white"
          >
            <ExternalLink className="w-3 h-3" />
            <span className="opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[80px] transition-all duration-300 overflow-hidden whitespace-nowrap">
              Creator
            </span>
          </a>

          {/* Image Section with Frosted Glass Overlay */}
          <div className="relative aspect-video w-full overflow-hidden">
            <img
              src={app.imageUrl}
              alt={app.title}
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-gray-900/90 backdrop-blur-[1px]" />
            
            {/* Title on Image */}
            <div className="absolute bottom-0 left-0 w-full p-4 pb-2">
              <h2 className="text-xl font-bold text-white drop-shadow-md">{app.title}</h2>
            </div>
          </div>

          {/* Content Area */}
          <div className="relative p-4 flex-grow flex flex-col">
            {/* Description */}
            <p className="text-gray-300 text-sm mb-3 line-clamp-2">{app.description}</p>
            
            {/* Tags */}
            {app.tags && (
              <div className="flex flex-wrap gap-1.5 mb-4">
                {app.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-purple-900/30 border border-purple-500/30
                      rounded-md text-xs font-medium text-purple-200"
                  >
                    <Tag className="w-3 h-3" />
                    {tag}
                  </span>
                ))}
              </div>
            )}
            
            {/* Try It Out Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-auto flex items-center justify-center gap-2 py-3 px-4 w-full
                bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700
                rounded-xl text-white font-medium shadow-lg shadow-purple-900/20
                transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-purple-500/40"
            >
              <Play className="w-4 h-4 fill-white" />
              Try it out
            </button>
          </div>
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