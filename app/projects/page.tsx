export default function Projects() {
  const projects = [
    {
      title: "test",
      description: "test",
      year: "2023",
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

