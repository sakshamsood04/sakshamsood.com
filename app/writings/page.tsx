export default function Writings() {
  const writings = [
    {
      title: "thoughts on minimalism",
      excerpt: "exploring how minimalism extends beyond aesthetics into a philosophy of life and work.",
      date: "march 15, 2023",
    },
    {
      title: "the value of simplicity in design",
      excerpt: "discussing why simplicity matters in design and how it improves user experience.",
      date: "february 2, 2023",
    },
    {
      title: "finding inspiration in everyday objects",
      excerpt: "reflections on discovering creative inspiration in the mundane aspects of daily life.",
      date: "december 10, 2022",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl mb-8">writings</h1>
      <div className="space-y-12">
        {writings.map((writing, index) => (
          <div key={index} className="border-b border-amber-100 pb-8">
            <h2 className="text-xl mb-2">{writing.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{writing.date}</p>
            <p>{writing.excerpt}</p>
            <button className="mt-4 text-amber-800 hover:underline">read more</button>
          </div>
        ))}
      </div>
    </div>
  )
}

