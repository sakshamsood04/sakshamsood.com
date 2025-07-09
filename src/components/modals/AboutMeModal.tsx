'use client';

import React from 'react';
import BaseModal from './BaseModal';

interface AboutMeModalProps {
  onClose: () => void;
}

const AboutMeModal: React.FC<AboutMeModalProps> = ({ onClose }) => {
  return (
    <BaseModal isOpen={true} onClose={onClose} title="ABOUT ME">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-6">👤</div>
        </div>
        
        <div className="space-y-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Hi, I&apos;m Saksham</h1>
          
          <p className="text-lg text-gray-700 mb-4">
            Welcome to a glimpse into my mind
          </p>
          
          <p className="text-lg text-gray-700 mb-4">
            I&apos;m a CS major at Cornell University who loves building software
          </p>
          
          <p className="text-lg text-gray-700">
            Currently based in Ithaca, NY
          </p>
        </div>
      </div>
    </BaseModal>
  );
};

export default AboutMeModal; 