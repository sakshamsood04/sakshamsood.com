'use client';

import React from 'react';
import BaseModal from './BaseModal';

interface CoolModalProps {
  onClose: () => void;
}

const CoolModal: React.FC<CoolModalProps> = ({ onClose }) => {
  return (
    <BaseModal isOpen={true} onClose={onClose} title="COOL THINGS">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-6xl mb-6">📜</div>
          <p className="text-gray-600 text-lg mb-8">
            This room is a collection of stuff both on and off the internet that I think is cool
          </p>
        </div>
        
        {/* Scrapbook grid layout */}
        <div className="grid grid-cols-12 gap-8 mb-12">
          {/* Movies */}
          <div className="col-span-4 col-start-1 row-start-1">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform rotate-2 hover:rotate-3 hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Movies</h3>
                <a 
                  href="https://letterboxd.com/silhouette08/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105 inline-block no-underline"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  → Check it out
                </a>
              </div>
            </div>
          </div>

          {/* Food */}
          <div className="col-span-4 col-start-8 row-start-1">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform -rotate-3 hover:-rotate-2 hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-4">🍕</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Food</h3>
                <a 
                  href="https://beliapp.co/app/sakshamsood" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105 inline-block no-underline"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  → Check it out
                </a>
              </div>
            </div>
          </div>

          {/* Project of a Lifetime */}
          <div className="col-span-5 col-start-2 row-start-3">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform rotate-1 hover:rotate-2 hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-4">🚶‍♂️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Walk around the World</h3>
                <a 
                  href="https://outofedenwalk.nationalgeographic.org/#section-0" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105 inline-block no-underline"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  → Check it out
                </a>
              </div>
            </div>
          </div>

          {/* RIP Virgil */}
          <div className="col-span-4 col-start-8 row-start-3">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform -rotate-2 hover:-rotate-1 hover:scale-105">
              <div className="text-center">
                <div className="text-4xl mb-4">👑</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">FREE GAME</h3>
                <a 
                  href="https://virgilabloh.com/free-game/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900 transition-all duration-200 font-medium hover:scale-105 inline-block no-underline"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  → Check it out
                </a>
              </div>
            </div>
          </div>

          {/* Dream 3-car garage */}
          <div className="col-span-8 col-start-3 row-start-5">
            <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-all duration-300 transform rotate-1 hover:rotate-2 hover:scale-105">
              <div className="text-center mb-6">
                <div className="text-4xl mb-4">🏎️</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Dream 3-car garage</h3>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <img 
                    src="/images/cool-things/pink-porsche.jpg" 
                    alt="Pink RWB Porsche 911"
                    className="w-full h-24 object-cover rounded-lg border-2 border-gray-300 aspect-[16/9]"
                  />
                </div>
                <div className="text-center">
                  <img 
                    src="/images/cool-things/gwagon.jpg" 
                    alt="Mercedes G500 4x4²"
                    className="w-full h-24 object-cover rounded-lg border-2 border-gray-300 aspect-[16/9]"
                  />
                </div>
                <div className="text-center">
                  <img 
                    src="/images/cool-things/lancia-stratos.jpg" 
                    alt="Lancia Stratos Rally"
                    className="w-full h-24 object-cover rounded-lg border-2 border-gray-300 aspect-[16/9]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseModal>
  );
};

export default CoolModal; 