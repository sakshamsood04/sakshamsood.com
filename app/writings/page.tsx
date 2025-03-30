export default function Writings() {
  const writings = [
    {
      title: "test",
      excerpt: "test",
      date: "march 30, 2025",
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

