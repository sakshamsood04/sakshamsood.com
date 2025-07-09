'use client';

import React from 'react';
import BaseModal from './BaseModal';
import { Mail, Github } from 'lucide-react';

interface ContactModalProps {
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ onClose }) => {
  return (
    <BaseModal isOpen={true} onClose={onClose} title="CONTACT">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-6">📧</div>
          <p className="text-gray-600 text-lg mb-8">
            I'd love to hear from you. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-center">
            <Mail className="w-5 h-5 mr-4 text-gray-600" />
            <a 
              href="mailto:ss3296@cornell.edu" 
              className="hover:text-blue-600 transition-colors text-lg"
            >
              ss3296@cornell.edu
            </a>
          </div>

          <div className="flex items-center justify-center">
            <Github className="w-5 h-5 mr-4 text-gray-600" />
            <a
              href="https://github.com/sakshamsood04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 transition-colors text-lg"
            >
              github.com/sakshamsood04
            </a>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default ContactModal; 