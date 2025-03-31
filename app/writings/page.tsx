'use client';

import React, { useState } from 'react';

interface Writing {
  title: string;
  date: string;
  excerpt: string;
  fullContent: string;
}

const WritingsSection = () => {
  const [expandedEssay, setExpandedEssay] = useState<number | null>(null);
t
  const writings: Writing[] = [
    {
      title: "on the value of empty space",
      date: "03.2025",
      excerpt: "the space between elements is as important as the elements themselves. emptiness creates room for interpretation and thought.",
      fullContent: `
        <p>The space between elements is as important as the elements themselves. Emptiness creates room for interpretation and thought.</p>
        <p>In design, negative space is not merely absence but a powerful presence. It guides the eye, creates balance, and allows the mind to complete patterns. This principle extends beyond visual arts to music, architecture, and even conversation.</p>
        <p>Consider Japanese gardens, where carefully placed rocks are defined by the empty space surrounding them. Or musical compositions, where pauses and silence give meaning to notes. In our increasingly cluttered digital lives, the value of emptiness becomes even more profound.</p>
        <p>As designers and creators, we must resist the urge to fill every corner. Instead, we should embrace restraint, allowing elements to breathe and thoughts to form in the spaces between. The most eloquent statement is often the one left unsaid.</p>
      `
    },
  ];

  return (
    <div className="mt-8 opacity-100 transform translate-y-0 transition-all duration-500" style={{fontFamily: '"Cormorant Garamond", serif'}}>
      <h2 className="text-xl tracking-wider font-extralight mb-8">writings</h2>
      
      <div className="space-y-12">
        {writings.map((writing, index) => (
          <div key={index} className="group">
            <div className="text-xs text-gray-500 mb-1">{writing.date}</div>
            <h3 className="text-base tracking-wide mb-2">{writing.title}</h3>
            <p className="text-sm tracking-wide font-extralight">{writing.excerpt}</p>
            <div 
              className="mt-4 inline-flex items-center text-xs tracking-wider group-hover:translate-x-1 transition-transform duration-300 cursor-pointer"
              onClick={() => setExpandedEssay(index)}
            >
              <span>read</span>
              <span className="ml-2">→</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Modal for full essay */}
      {expandedEssay !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-[#f2e9de] max-w-2xl max-h-[90vh] overflow-y-auto p-8 relative">
            <button 
              onClick={() => setExpandedEssay(null)}
              className="absolute top-4 right-4 text-sm hover:text-gray-600 transition-colors"
            >
              close ×
            </button>
            <div className="text-xs text-gray-500 mb-1">{writings[expandedEssay].date}</div>
            <h3 className="text-xl tracking-wide mb-6">{writings[expandedEssay].title}</h3>
            <div 
              className="text-sm tracking-wide font-extralight space-y-4"
              dangerouslySetInnerHTML={{ __html: writings[expandedEssay].fullContent }}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default WritingsSection;