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
        <p>Nihilism says nothing matters—but if nothing matters, then all of a sudden, everything matters. That's the idea behind optimistic nihilism, a way of looking at life that turns meaninglessness into something freeing and exciting. If the universe doesn't hand us a purpose, that means we get to make our own.</p>
        
        <p>Traditional nihilism can be pretty depressing. If life has no inherent meaning, what's the point of anything? But optimistic nihilism flips this perspective on its head. Instead of seeing meaninglessness as a dead end, it sees it as an open field of possibilities.</p>
        
        <p>Think about it—if there's no cosmic scorecard, no ultimate judgment waiting for us, then we're free to create meaning however we want. We can decide what matters to us, what we value, and how we want to spend our brief time in existence. That freedom can be incredibly liberating.</p>
        
        <p>In a way, optimistic nihilism is about embracing the absurdity of existence with a smile. Yes, we're tiny specks in an indifferent universe. Yes, everything we build will eventually turn to dust. But between now and then, we get to experience consciousness, connection, beauty, and love—rare and precious things in this vast cosmos.</p>
        
        <p>Optimistic nihilism doesn't mean we should be reckless or selfish. In fact, it can inspire the opposite reaction. If there's no higher authority dictating our morality, then it's up to us to create a world worth living in. Many who embrace this philosophy choose to prioritize reducing suffering, finding joy, and building meaningful connections precisely because they see these things as valuable in a universe that offers no inherent values.</p>
        
        <p>Rather than letting the lack of cosmic meaning lead to despair, optimistic nihilism asks: "If nothing matters in the grand scheme, why not make the most of the experience we have?" It's about finding freedom in the void, possibility in the absence of purpose, and ultimately, creating meaning in a meaningless universe simply because we can.</p>
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
          <div className="bg-white max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative rounded shadow-lg">
            <button 
              onClick={() => setExpandedWriting(null)}
              className="absolute top-4 right-4 text-sm hover:text-gray-600 transition-colors"
            >
              ✕
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