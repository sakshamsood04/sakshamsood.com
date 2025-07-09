'use client';

import React from 'react';
import BaseModal from './BaseModal';

interface ProjectsModalProps {
  onClose: () => void;
}

const ProjectsModal: React.FC<ProjectsModalProps> = ({ onClose }) => {
  const projects = [
    {
      title: "News Agents",
      description: "A multi-agent system for news aggregation that gives unbiased news to users for any story",
      link: "https://github.com/sakshamsood04/news-agents",
      year: "2025",
    },
    {
      title: "Podcast Summarizer",
      description: "A podcast summarizer that takes in a YouTube link and gives a summary of the podcast",
      link: "https://github.com/sakshamsood04/podcast-summarizer",
      year: "2025",
    },
    {
      title: "FitMatch",
      description: "A browser extension that helps users find the perfect size while shopping for clothes online",
      link: "https://github.com/sakshamsood04/fitmatch",
      year: "2024",
    },
  ];

  return (
    <BaseModal isOpen={true} onClose={onClose} title="PROJECTS">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="text-6xl mb-6">💻</div>
        </div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="border-b border-gray-200 pb-8">
              <h2 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h2>
              <p className="text-sm text-gray-500 mb-3">{project.year}</p>
              <p className="mb-4 text-gray-700 text-lg">{project.description}</p>
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105 inline-block no-underline"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                &gt; View on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </BaseModal>
  );
};

export default ProjectsModal; 