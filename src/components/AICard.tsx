import React, { useState, useEffect } from 'react';
import { ExternalLink, Play } from 'lucide-react';
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
      <div className="group relative bg-gradient-to-br from-white/10 to-white/5 rounded-xl 
        border border-white/20 overflow-hidden transition-all duration-300
        hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/10">
        <div className="aspect-video w-full overflow-hidden">
          <img
            src={app.imageUrl}
            alt={app.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">{app.title}</h2>
              <p className="text-gray-400 text-sm mb-4">{app.description}</p>
              {app.tags && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {app.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-purple-500/20 rounded-full text-xs text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
            >
              <Play className="w-4 h-4" />
              Try it out
            </button>
            <a
              href={app.creatorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 border border-white/20 hover:border-purple-500 rounded-lg transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
             Creator
            </a>
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