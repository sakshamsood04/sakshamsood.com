export default function Quotes() {
  const quotes = [
    {
      text: "simplicity is the ultimate sophistication.",
      author: "leonardo da vinci",
    },
    {
      text: "less is more.",
      author: "ludwig mies van der rohe",
    },
    {
      text: "perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.",
      author: "antoine de saint-exupéry",
    },
    {
      text: "simplicity is about subtracting the obvious and adding the meaningful.",
      author: "john maeda",
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

