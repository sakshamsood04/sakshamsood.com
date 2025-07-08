'use client';

import React from 'react';
import BaseModal from './BaseModal';

interface QuotesModalProps {
  onClose: () => void;
}

const QuotesModal: React.FC<QuotesModalProps> = ({ onClose }) => {
  return (
    <BaseModal isOpen={true} onClose={onClose} title="COOL THINGS">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-6xl mb-6">📜</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-gray-600 text-lg">
            Cool discoveries, interesting finds, and awesome things will be collected here.
          </p>
        </div>
      </div>
    </BaseModal>
  );
};

export default QuotesModal; 