import { Heart, Sparkles } from 'lucide-react';
import GifSlideshow from './GifSlideshow';

export default function ValentineSuccessView() {
  const gifs = ['/assets/img3.gif', '/assets/img1.gif'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-pink-950 p-4 overflow-hidden relative">
      {/* Animated hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300/40 dark:text-pink-400/30 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 30 + 20}px`,
              height: `${Math.random() * 30 + 20}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 3}s`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto space-y-8 animate-fade-in">
        <div className="flex items-center justify-center gap-3 mb-6">
          <Sparkles className="w-12 h-12 text-pink-500 dark:text-pink-400 animate-pulse" />
          <Heart className="w-16 h-16 text-pink-500 dark:text-pink-400 fill-pink-500 dark:fill-pink-400 animate-bounce" />
          <Sparkles className="w-12 h-12 text-pink-500 dark:text-pink-400 animate-pulse" />
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-pink-600 dark:text-pink-300 tracking-tight animate-scale-in font-heading">
          I love you
        </h1>

        <div className="mt-12 flex justify-center animate-slide-up">
          <GifSlideshow gifs={gifs} interval={3000} className="w-[300px] max-w-[500px]" />
        </div>

        <p className="text-3xl md:text-4xl text-pink-600 dark:text-pink-300 font-bold mt-8 animate-fade-in-delay">
          I love you Himani Chauhan
        </p>

        <p className="text-2xl md:text-3xl text-pink-500 dark:text-pink-400 font-light mt-6 animate-fade-in-delay">
          You made the right choice! 💕
        </p>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-4 left-0 right-0 text-center text-sm text-pink-400/50 dark:text-pink-500/50">
        © 2026. Built with <Heart className="inline w-4 h-4 fill-pink-400 text-pink-400" /> using{' '}
        <a
          href="https://caffeine.ai"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 dark:hover:text-pink-400 transition-colors underline"
        >
          caffeine.ai
        </a>
      </footer>
    </div>
  );
}
