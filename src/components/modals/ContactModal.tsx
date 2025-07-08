'use client';

import React from 'react';
import BaseModal from './BaseModal';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <BaseModal isOpen={true} onClose={onClose} title="CONTACT">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-6xl mb-6">📧</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-gray-600 text-lg">
            Contact information and ways to get in touch will be available here.
          </p>
        </div>
      </div>
    </BaseModal>
  );
};

export default ContactModal; 