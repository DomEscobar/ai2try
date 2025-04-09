import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />
      <div className="relative w-full h-full max-w-6xl mx-auto my-4 bg-gray-950 overflow-hidden rounded-lg border border-cyan-500/20 shadow-[0_0_30px_rgba(100,210,255,0.15)]">
        <div className="flex items-center justify-between p-3 border-b border-cyan-500/10 bg-gray-900/50">
          <h3 className="text-lg font-light text-cyan-100">{title}</h3>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-cyan-500/10 transition-colors"
          >
            <X className="w-5 h-5 text-cyan-300" />
          </button>
        </div>
        <div className="h-[calc(100vh-4rem)]">
          {children}
        </div>
      </div>
    </div>
  );
};