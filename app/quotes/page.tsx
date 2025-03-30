export default function Quotes() {
  const quotes = [
    {
      text: "test",
      author: "test",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl mb-8">quotes</h1>
      <div className="space-y-10">
        {quotes.map((quote, index) => (
          <div key={index} className="border-l-2 border-amber-200 pl-6 py-2">
            <p className="mb-2 italic">"{quote.text}"</p>
            <p className="text-sm text-gray-600">— {quote.author}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

