import { useState, useEffect } from 'react';

interface GifSlideshowProps {
  gifs: string[];
  interval?: number;
  className?: string;
}

export default function GifSlideshow({ gifs, interval = 3000, className = '' }: GifSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (gifs.length <= 1) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, interval);

    return () => clearInterval(timer);
  }, [gifs.length, interval]);

  if (gifs.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <img
        src={gifs[currentIndex]}
        alt={`Animated GIF ${currentIndex + 1}`}
        className="w-full h-auto rounded-3xl shadow-2xl border-8 border-pink-300 dark:border-pink-600 animate-fade-in"
        key={currentIndex}
      />
    </div>
  );
}
