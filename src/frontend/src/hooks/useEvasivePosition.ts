import { useState, useRef, useCallback } from 'react';

interface Position {
  x: number;
  y: number;
}

export function useEvasivePosition() {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleEvasion = useCallback((e: React.PointerEvent | React.TouchEvent) => {
    e.preventDefault();
    
    if (!buttonRef.current) return;

    const button = buttonRef.current;
    const buttonRect = button.getBoundingClientRect();
    
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Button dimensions
    const buttonWidth = buttonRect.width;
    const buttonHeight = buttonRect.height;
    
    // Safe zones to avoid (question area at top center, Yes button area)
    const safeMargin = 50;
    const topSafeZone = viewportHeight * 0.4; // Top 40% for question
    const centerX = viewportWidth / 2;
    const yesButtonZone = 200; // Radius around center for Yes button
    
    let newX: number;
    let newY: number;
    let attempts = 0;
    const maxAttempts = 20;
    
    // Try to find a valid position
    do {
      // Generate random position within viewport bounds
      newX = Math.random() * (viewportWidth - buttonWidth - safeMargin * 2) + safeMargin;
      newY = Math.random() * (viewportHeight - buttonHeight - safeMargin * 2) + safeMargin;
      
      // Check if position is safe (not overlapping question or Yes button)
      const isSafe = 
        newY > topSafeZone && // Below question area
        (Math.abs(newX + buttonWidth / 2 - centerX) > yesButtonZone || 
         Math.abs(newY - viewportHeight / 2) > yesButtonZone); // Away from Yes button
      
      if (isSafe) break;
      
      attempts++;
    } while (attempts < maxAttempts);
    
    // Ensure button stays within viewport
    newX = Math.max(safeMargin, Math.min(newX, viewportWidth - buttonWidth - safeMargin));
    newY = Math.max(topSafeZone + safeMargin, Math.min(newY, viewportHeight - buttonHeight - safeMargin));
    
    setPosition({ x: newX, y: newY });
  }, []);

  return {
    position,
    handleEvasion,
    buttonRef,
  };
}
