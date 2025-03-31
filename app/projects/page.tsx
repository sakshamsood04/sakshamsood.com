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
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

