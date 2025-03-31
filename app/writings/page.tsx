'use client';
import { useState } from 'react';

export default function Writings() {
  // Add state to track which writing is expanded
  const [expandedWriting, setExpandedWriting] = useState(null);
  
  const writings = [
    {
      title: "Optimistic Nihilism",
      excerpt: "Nihilism says nothing matters—but if nothing matters, then all of a sudden, everything matters. That's the idea behind optimistic nihilism, a way of looking at life that turns meaninglessness into something freeing and exciting. If the universe doesn't hand us a purpose, that means we get to make our own",
      date: "August 26, 2024",
      fullContent: `
        <p>Nihilism says nothing matters—but if nothing matters, then all of a sudden, everything matters. That's the idea behind optimistic nihilism, a way of looking at life that turns meaninglessness into something freeing and exciting. If the universe doesn't hand us a purpose, that means we get to make our own. We can create meaning out of anything—something as small as enjoying a sunny day or as big as chasing a dream—and there’s something really cool about that.</p>
        
        <p>Optimistic nihilism is freeing because it takes the pressure off. There’s no cosmic scoreboard keeping track of whether you’re doing life "right." Instead, you get to decide what matters to you personally and focus on that. It’s not about finding some ultimate purpose; it’s about creating one, and that can be anything you want it to be. Life becomes less about searching for answers and more about enjoying the ride, making your own rules, and finding joy in the things that matter to you.</p>

        <p>In a weird way, optimistic nihilism makes life more meaningful and makes it matter more. Nothing matters, sure—but that means anything can matter. And that’s great.</p>
      `
    },
  ];

  return (
    <div className="max-w-2xl">
      <h1 className="text-3xl mb-8">writings</h1>
      <div className="space-y-12">
        {writings.map((writing, index) => (
          <div key={index} className="border-b border-amber-100 pb-8">
            <h2 className="text-xl mb-2">{writing.title}</h2>
            <p className="text-sm text-gray-500 mb-3">{writing.date}</p>
            <p>{writing.excerpt}</p>
            <button 
              className="mt-4 text-amber-800 hover:underline"
              onClick={() => setExpandedWriting(index)}
            >
              read more
            </button>
          </div>
        ))}
      </div>

      {/* Modal for full essay */}
      {expandedWriting !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#f2e9de] max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative rounded shadow-lg 
                        scrollbar-thin scrollbar-thumb-amber-200 scrollbar-track-amber-50">
            <button 
              onClick={() => setExpandedWriting(null)}
              className="absolute top-4 right-4 text-amber-800 border border-amber-200 px-2 py-1 text-xs 
                         hover:bg-amber-100 transition-colors duration-300 rounded-sm"
            >
              close
            </button>
            <h3 className="text-2xl mb-2">{writings[expandedWriting].title}</h3>
            <p className="text-sm text-gray-500 mb-6">{writings[expandedWriting].date}</p>
            <div 
              className="prose prose-sm space-y-4"
              dangerouslySetInnerHTML={{ __html: writings[expandedWriting].fullContent }}
            />
          </div>
        </div>
      )}
    </div>
  );
}