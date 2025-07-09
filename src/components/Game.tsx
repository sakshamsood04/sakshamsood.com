'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import ContactModal from './modals/ContactModal';
import ProjectsModal from './modals/ProjectsModal';
import AboutMeModal from './modals/AboutMeModal';
import CoolModal from './modals/CoolModal';

interface Position {
  x: number;
  y: number;
}

interface Checkpoint {
  x: number;
  y: number;
  page: string;
  label: string;
  icon: string;
  color: string;
}

// Much larger sizes for better visibility
const CELL_SIZE = 80;
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 640;

// Compact 2x2 room layout: 0 = path, 1 = wall
const MAZE = [
  [1,1,1,1,1,1,1,1,1,1,1,1],
  [1,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,1,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,0,0,1,1,1,1,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,0,0,0,0,0,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,1,1,1,1,1],
];

const CHECKPOINTS: Checkpoint[] = [
  { x: 2.5, y: 1.5, page: 'contact', label: 'Contact', icon: '📧', color: '#00ff00' },
  { x: 8.5, y: 1.5, page: 'projects', label: 'Projects', icon: '💻', color: '#ffff00' },
  { x: 2.5, y: 5.5, page: 'music', label: 'About Me', icon: '👤', color: '#ff0080' },
  { x: 8.5, y: 5.5, page: 'quotes', label: 'Cool Things', icon: '📜', color: '#ff8000' },
];

const Game: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playerPos, setPlayerPos] = useState<Position>({ x: 5.5, y: 3.5 });
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [nearCheckpoint, setNearCheckpoint] = useState<string | null>(null);
  const keysRef = useRef<Set<string>>(new Set());
  const animationRef = useRef<number | undefined>(undefined);

  // Improved collision detection - check if position would intersect with wall
  const isValidPosition = useCallback((x: number, y: number) => {
    const playerSize = 0.3; // Player has some size, not just a point
    
    // Check all four corners of the player
    const corners = [
      { x: x - playerSize, y: y - playerSize }, // top-left
      { x: x + playerSize, y: y - playerSize }, // top-right
      { x: x - playerSize, y: y + playerSize }, // bottom-left
      { x: x + playerSize, y: y + playerSize }  // bottom-right
    ];
    
    for (const corner of corners) {
      const gridX = Math.floor(corner.x);
      const gridY = Math.floor(corner.y);
      
      // Check bounds
      if (gridX < 0 || gridX >= MAZE[0].length || gridY < 0 || gridY >= MAZE.length) {
        return false;
      }
      
      // Check if this corner hits a wall
      if (MAZE[gridY][gridX] === 1) {
        return false;
      }
    }
    
    return true;
  }, []);

  const movePlayer = useCallback((dx: number, dy: number) => {
    setPlayerPos(prev => {
      const newX = prev.x + dx;
      const newY = prev.y + dy;
      
      if (isValidPosition(newX, newY)) {
        return { x: newX, y: newY };
      }
      return prev;
    });
  }, [isValidPosition]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // ESC key to close modal
      if (e.key === 'Escape' && activeModal) {
        setActiveModal(null);
        return;
      }
      
      keysRef.current.add(e.key.toLowerCase());
      
      if (e.key === 'Enter' && nearCheckpoint) {
        setActiveModal(nearCheckpoint);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysRef.current.delete(e.key.toLowerCase());
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [nearCheckpoint, activeModal]);

  useEffect(() => {
    const gameLoop = () => {
      const speed = 0.08; // Adjusted speed for larger canvas
      
      // Continuous movement while keys are held
      if (keysRef.current.has('w') || keysRef.current.has('arrowup')) {
        movePlayer(0, -speed);
      }
      if (keysRef.current.has('s') || keysRef.current.has('arrowdown')) {
        movePlayer(0, speed);
      }
      if (keysRef.current.has('a') || keysRef.current.has('arrowleft')) {
        movePlayer(-speed, 0);
      }
      if (keysRef.current.has('d') || keysRef.current.has('arrowright')) {
        movePlayer(speed, 0);
      }

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [movePlayer]);

  useEffect(() => {
    // Check if player is near a checkpoint
    const checkpoint = CHECKPOINTS.find(cp => 
      Math.abs(cp.x - playerPos.x) <= 1.2 && Math.abs(cp.y - playerPos.y) <= 1.2
    );
    setNearCheckpoint(checkpoint ? checkpoint.page : null);
  }, [playerPos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas with light grey background for floors
    ctx.fillStyle = '#d3d3d3';
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);

    // Draw maze
    for (let y = 0; y < MAZE.length; y++) {
      for (let x = 0; x < MAZE[y].length; x++) {
        const cell = MAZE[y][x];
        
        if (cell === 1) {
          // Red brick wall pattern
          ctx.fillStyle = '#8B4513';
          ctx.fillRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
          
          // Brick pattern
          ctx.strokeStyle = '#654321';
          ctx.lineWidth = 2;
          ctx.strokeRect(x * CELL_SIZE, y * CELL_SIZE, CELL_SIZE, CELL_SIZE);
          
          // Add brick texture
          ctx.strokeStyle = '#A0522D';
          ctx.lineWidth = 1;
          // Horizontal lines
          ctx.beginPath();
          ctx.moveTo(x * CELL_SIZE, y * CELL_SIZE + CELL_SIZE/2);
          ctx.lineTo(x * CELL_SIZE + CELL_SIZE, y * CELL_SIZE + CELL_SIZE/2);
          ctx.stroke();
          
          // Vertical line (offset for brick pattern)
          const offset = (y % 2) * (CELL_SIZE / 2);
          ctx.beginPath();
          ctx.moveTo(x * CELL_SIZE + CELL_SIZE/2 + offset, y * CELL_SIZE);
          ctx.lineTo(x * CELL_SIZE + CELL_SIZE/2 + offset, y * CELL_SIZE + CELL_SIZE);
          ctx.stroke();
        }
      }
    }

    // Draw checkpoints with icons and labels
    CHECKPOINTS.forEach(checkpoint => {
      const isNear = Math.abs(checkpoint.x - playerPos.x) <= 1.2 && 
                    Math.abs(checkpoint.y - playerPos.y) <= 1.2;
      
      const x = checkpoint.x * CELL_SIZE;
      const y = checkpoint.y * CELL_SIZE;
      
      // Icon with subtle grow animation when near
      const iconSize = isNear ? '42px' : '36px';
      ctx.font = `${iconSize} Arial`;
      ctx.textAlign = 'center';
      ctx.fillStyle = '#000000';
      ctx.fillText(checkpoint.icon, x, y + 12);
      
      // Label (closer to icon)
      ctx.font = 'bold 18px Arial';
      ctx.fillStyle = '#000000';
      ctx.fillText(checkpoint.label, x, y + 50);
    });

    // Draw player as a larger character sprite
    const playerX = playerPos.x * CELL_SIZE;
    const playerY = playerPos.y * CELL_SIZE;
    
    // Player character (made larger)
    ctx.font = '48px Arial';
    ctx.textAlign = 'center';
    ctx.fillStyle = '#ffff00';
    ctx.fillText('🚶', playerX, playerY + 16);
    
    // Player name
    ctx.font = 'bold 16px Arial';
    ctx.fillStyle = '#000000';
    ctx.fillText('YOU', playerX, playerY - 40);
    
    // Show "Press Enter to View" text under player when near any checkpoint
    if (nearCheckpoint) {
      ctx.font = 'bold 14px Arial';
      ctx.fillStyle = '#333333';
      ctx.textAlign = 'center';
      ctx.fillText('Press ENTER to View', playerX, playerY + 60);
    }
  }, [playerPos, nearCheckpoint]);

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4" style={{ backgroundColor: '#F5F5DC' }}>
      <div className="mb-6 text-center">
        <h1 className="text-5xl font-bold text-black mb-3 pixel-font">SAKSHAM SOOD</h1>
        <p className="text-black pixel-font select-none text-lg">Use WASD to move • Press ENTER at rooms to explore</p>
      </div>
      
      <canvas
        ref={canvasRef}
        width={CANVAS_WIDTH}
        height={CANVAS_HEIGHT}
        className="rounded-lg"
        style={{ imageRendering: 'pixelated' }}
      />

      <div className="mt-6 text-base text-black pixel-font text-center select-none">
        <p>Navigate through the house to discover different sections</p>
        <p className="text-sm text-gray-600 mt-2">Press ESC to close any room</p>
      </div>

      {/* Modals */}
      {activeModal === 'contact' && <ContactModal onClose={closeModal} />}
      {activeModal === 'projects' && <ProjectsModal onClose={closeModal} />}
      {activeModal === 'music' && <AboutMeModal onClose={closeModal} />}
      {activeModal === 'quotes' && <CoolModal onClose={closeModal} />}
    </div>
  );
};

export default Game; 