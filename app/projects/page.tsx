export default function Projects() {
  const projects = [
    {
      title: "project one",
      description: "a brief description of your first project and what technologies you used.",
      year: "2023",
    },
    {
      title: "project two",
      description: "details about your second project, highlighting your role and the impact it made.",
      year: "2022",
    },
    {
      title: "project three",
      description: "information about another significant project in your portfolio.",
      year: "2021",
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

