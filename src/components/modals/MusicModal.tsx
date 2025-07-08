'use client';

import React from 'react';
import BaseModal from './BaseModal';

interface MusicModalProps {
  onClose: () => void;
}

const MusicModal: React.FC<MusicModalProps> = ({ onClose }) => {
  return (
    <BaseModal isOpen={true} onClose={onClose} title="ABOUT ME">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-6xl mb-6">👤</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-gray-600 text-lg">
            Personal background, experiences, and story will be shared here.
          </p>
        </div>
      </div>
    </BaseModal>
  );
};

export default MusicModal; 