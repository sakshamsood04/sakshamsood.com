export default function Quotes() {
  const quotes = [
    {
      text: "LISTEN TO ME, MORTY. I KNOW THAT NEW SITUATIONS CAN BE INTIMIDATING. YOU'RE LOOKING AROUND, AND IT'S ALL SCARY AND DIFFERENT, BUT, YOU KNOW, M-MEETING THEM HEAD ON, CHARGING RIGHT INTO THEM LIKE A BULL THAT'S HOW WE GROW AS PEOPLE",
      author: "Rick Sanchez",
    },
    {
      text: "Hyperbole isn't the worst crime. Men suffer more from imagining too little than too much",
      author: "The Greatest Showman",
    },
    {
      text: "Sic Parvis Magna",
      author: "Sir Francis Drake",
    },
    {
      text: "Do or do not, there is no try",
      author: "Yoda",
    },
    {
      text: "All men dream, but not equally. Those who dream by night in the dusty recesses of their minds wake in the day to find that it was vanity: but the dreamers of the day are dangerous men, for they may act out their dream with open eyes, to make it possible",
      author: "T.E. Lawrence",
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

