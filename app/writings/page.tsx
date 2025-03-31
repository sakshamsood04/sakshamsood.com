export default function Writings() {
  const writings = [
    {
      title: "Optimistic Nihilism",
      excerpt: "Nihilism says nothing matters—but if nothing matters, then all of a sudden, everything matters. That’s the idea behind optimistic nihilism, a way of looking at life that turns meaninglessness into something freeing and exciting. If the universe doesn’t hand us a purpose, that means we get to make our own",
      date: "August 26, 2024",
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

