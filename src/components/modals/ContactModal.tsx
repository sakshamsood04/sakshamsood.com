'use client';

import React from 'react';
import BaseModal from './BaseModal';
import { Mail, Github, Linkedin } from 'lucide-react';

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
            I&apos;d love to hear from you. Feel free to reach out through any of the channels below.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center justify-center hover:scale-105 transition-all duration-200">
            <Mail className="w-5 h-5 mr-8 text-gray-600" />
            <a 
              href="mailto:ss3296@cornell.edu" 
              className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium inline-block no-underline"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              ss3296@cornell.edu
            </a>
          </div>

          <div className="flex items-center justify-center hover:scale-105 transition-all duration-200">
            <Github className="w-5 h-5 mr-8 text-gray-600" />
            <a
              href="https://github.com/sakshamsood04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium inline-block no-underline"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              github.com/sakshamsood04
            </a>
          </div>

          <div className="flex items-center justify-center hover:scale-105 transition-all duration-200">
            <Linkedin className="w-5 h-5 mr-8 text-gray-600" />
            <a
              href="https://www.linkedin.com/in/saksham-sood/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium inline-block no-underline"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              linkedin.com/in/saksham-sood
            </a>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default ContactModal; 