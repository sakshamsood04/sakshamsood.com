export default function Projects() {
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
      year: "2025",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl mb-8">projects</h1>
      <div className="space-y-12">
        {projects.map((project, index) => (
          <div key={index} className="border-b border-amber-100 pb-8">
            <h2 className="text-xl mb-2">{project.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{project.year}</p>
            <p className="mb-3">{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-amber-700 hover:text-amber-900 transition-colors flex items-center"
            >
              View on GitHub 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

