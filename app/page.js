'use client'

import { useState, useEffect } from 'react';
import NavItem from './components/NavItem';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import QuotesSection from './components/QuotesSection';
import WritingsSection from './components/WritingsSection';
import ContactSection from './components/ContactSection';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const navigateTo = (section) => {
    setActiveSection(section);
    window.location.hash = section;
  };

  return (
    <div className="min-h-screen font-light text-gray-800" style={{ backgroundColor: '#f2e9de' }}>
      <div className="max-w-4xl mx-auto p-8">
        <header className="mb-12 mt-8">
          {/* Portfolio title removed as requested */}
        </header>

        <div className="flex">
          {/* Vertical Navigation */}
          <nav className="w-32 pr-8">
            {['home', 'projects', 'quotes', 'writings', 'contact'].map((section) => (
              <NavItem 
                key={section}
                section={section}
                isActive={activeSection === section}
                onClick={() => navigateTo(section)}
              />
            ))}
          </nav>

          {/* Main Content */}
          <main className="flex-1">
            <div>
              {activeSection === 'home' && <HomeSection />}
              {activeSection === 'projects' && <ProjectsSection />}
              {activeSection === 'quotes' && <QuotesSection />}
              {activeSection === 'writings' && <WritingsSection />}
              {activeSection === 'contact' && <ContactSection />}
            </div>
          </main>
        </div>

        <footer className="text-center text-sm text-gray-500 pt-8 border-t border-gray-300 mt-16">
          <p>&copy; 2025 all rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}