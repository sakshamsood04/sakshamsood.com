'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const BaseModal: React.FC<BaseModalProps> = ({ isOpen, onClose, title, children }) => {
  // Handle ESC key press
  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ 
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(5px)'
      }}
      onClick={onClose} // Close on backdrop click
    >
      {/* Modal Container */}
      <div 
        className="relative bg-white rounded-xl shadow-2xl overflow-hidden"
        style={{
          width: '85vw',
          maxWidth: '1200px',
          height: '80vh',
          maxHeight: '800px',
          border: '3px solid #333',
          animation: 'modalSlideIn 0.3s ease-out'
        }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        {/* Header */}
        <div 
          className="bg-gray-100 border-b-2 border-gray-300 px-6 py-4 flex justify-between items-center"
          style={{ borderBottom: '2px solid #ddd' }}
        >
          <h2 
            className="text-2xl font-bold text-white pixel-font"
            style={{ letterSpacing: '1px' }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-black transition-colors p-1 rounded-md hover:bg-gray-200"
            style={{ 
              backgroundColor: 'transparent',
              border: '2px solid #ccc',
              padding: '8px',
              borderRadius: '6px'
            }}
            title="Press ESC or click to close"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content Area */}
        <div 
          className="flex-1 overflow-y-auto"
          style={{
            height: 'calc(80vh - 80px)', // Subtract header height
            padding: '24px',
            backgroundColor: '#fafafa'
          }}
        >
          {children}
        </div>
      </div>

      {/* CSS Animation */}
      <style jsx>{`
        @keyframes modalSlideIn {
          from {
            opacity: 0;
            transform: translateY(-20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </div>
  );
};

export default BaseModal; 