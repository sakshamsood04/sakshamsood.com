import React, { useState } from 'react';
import { Menu, X, Github, Mail, ExternalLink } from 'lucide-react';

type Tab = 'home' | 'projects' | 'quotes' | 'writings' | 'contact';

function App() {
  const [activeTab, setActiveTab] = useState<Tab>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const content = {
    home: (
      <div className="space-y-6">
        <h1 className="text-2xl font-normal">hello, i'm saksham</h1>
        <p className="leading-relaxed">
          i'm a cs major at cornell university. here is a glimpse of my work and thoughts.
        </p>
      </div>
    ),
    projects: (
      <div className="space-y-8">
        <h2 className="text-xl font-normal">selected works</h2>
        {[
          {
            title: 'FitMatch!',
            description: 'sizing tool',
            link: '#'
          },
          {
            title: 'podcast summarizer',
            description: 'summarizing podcasts with LLMs',
            link: '#'
          }
        ].map((project, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-normal flex items-center gap-2">
              {project.title}
              <a href={project.link} className="inline-flex">
                <ExternalLink size={16} />
              </a>
            </h3>
            <p className="text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    ),
    quotes: (
      <div className="space-y-8">
        <h2 className="text-xl font-normal">stoic wisdom</h2>
        {[
          {
            quote: "test",
            author: "test"
          }
        ].map((item, index) => (
          <div key={index} className="space-y-2">
            <p className="italic">"{item.quote}"</p>
            <p className="text-sm">— {item.author}</p>
          </div>
        ))}
      </div>
    ),
    writings: (
      <div className="space-y-8">
        <h2 className="text-xl font-normal">thoughts & essays</h2>
        {[
          {
            title: "test",
            date: "2024",
            excerpt: "test"
          }
        ].map((post, index) => (
          <div key={index} className="space-y-2">
            <h3 className="text-lg font-normal">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.date}</p>
            <p className="text-sm">{post.excerpt}</p>
          </div>
        ))}
      </div>
    ),
    contact: (
      <div className="space-y-6">
        <h2 className="text-xl font-normal">get in touch</h2>
        <div className="space-y-4">
          <a href="mailto:your@email.com" className="flex items-center gap-2 hover:text-gray-600">
            <Mail size={18} />
            <span>your@email.com</span>
          </a>
          <a href="https://github.com/yourusername" className="flex items-center gap-2 hover:text-gray-600">
            <Github size={18} />
            <span>github</span>
          </a>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-[#F5F3EF] text-gray-700">
      {/* Mobile Menu Button */}
      <div className="md:hidden p-4">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <div className="flex flex-col md:flex-row">
        {/* Navigation */}
        <nav className={`
          md:w-64 md:min-h-screen md:p-12
          ${isMenuOpen ? 'block' : 'hidden'} md:block
          p-4 bg-[#F5F3EF]
        `}>
          <div className="space-y-4 sticky top-12">
            {(['home', 'projects', 'quotes', 'writings', 'contact'] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMenuOpen(false);
                }}
                className={`block hover:text-gray-900 ${
                  activeTab === tab ? 'text-gray-900' : 'text-gray-500'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-12 max-w-2xl">
          {content[activeTab]}
        </main>
      </div>
    </div>
  );
}

export default App;