'use client';

import React from 'react';
import BaseModal from './BaseModal';

interface ProjectsModalProps {
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ onClose }) => {
  return (
    <BaseModal isOpen={true} onClose={onClose} title="PROJECTS">
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <div className="text-6xl mb-6">💻</div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Coming Soon</h2>
          <p className="text-gray-600 text-lg">
            My latest projects and development work will be showcased here.
          </p>
        </div>
      </div>
    </BaseModal>
  );
};

export default ProjectsModal; 