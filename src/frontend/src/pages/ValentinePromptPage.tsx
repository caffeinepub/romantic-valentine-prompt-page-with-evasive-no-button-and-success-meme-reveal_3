import { useState } from 'react';
import { Heart } from 'lucide-react';
import ValentineSuccessView from '../components/ValentineSuccessView';

export default function ValentinePromptPage() {
  const [accepted, setAccepted] = useState(false);
  const [noClickCount, setNoClickCount] = useState(0);

  if (accepted) {
    return <ValentineSuccessView />;
  }

  // Calculate Yes button scale based on No clicks
  // Start at 1, increase by 0.3 per click, cap at 3x
  const yesButtonScale = Math.min(1 + noClickCount * 0.3, 3);

  const handleNoClick = () => {
    setNoClickCount(prev => prev + 1);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-pink-950 p-4 overflow-hidden relative">
      {/* Decorative hearts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-10 left-10 w-8 h-8 text-pink-300/30 dark:text-pink-400/20 animate-pulse" />
        <Heart className="absolute top-20 right-20 w-6 h-6 text-pink-400/40 dark:text-pink-300/30 animate-pulse delay-100" />
        <Heart className="absolute bottom-20 left-20 w-10 h-10 text-pink-200/30 dark:text-pink-500/20 animate-pulse delay-200" />
        <Heart className="absolute bottom-32 right-32 w-7 h-7 text-pink-300/35 dark:text-pink-400/25 animate-pulse delay-300" />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-2xl mx-auto">
        <div className="mb-12 space-y-4">
          <Heart className="w-20 h-20 mx-auto text-pink-500 dark:text-pink-400 fill-pink-500 dark:fill-pink-400 animate-pulse" />
          <h1 className="text-5xl md:text-7xl font-bold text-[#d32f2f] dark:text-pink-300 tracking-tight font-heading">
            Will you be my Valentine?
          </h1>
          <p className="text-xl md:text-2xl text-pink-500/80 dark:text-pink-400/80 font-light">
            Choose wisely... 💕
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center mt-16 relative">
          {/* Yes button - grows with No clicks */}
          <button
            onClick={() => setAccepted(true)}
            style={{
              transform: `scale(${yesButtonScale})`,
              transition: 'transform 0.3s ease-out',
            }}
            className="px-12 py-6 text-2xl font-bold rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-2xl hover:shadow-pink-500/50 hover:scale-110 transition-all duration-300 hover:from-pink-600 hover:to-rose-600 active:scale-95 z-10"
          >
            Yes! 💖
          </button>

          {/* No button - static, triggers Yes growth */}
          <button
            onClick={handleNoClick}
            className="px-12 py-6 text-2xl font-bold rounded-full bg-white dark:bg-pink-950 text-pink-500 dark:text-pink-300 border-4 border-pink-300 dark:border-pink-600 shadow-lg hover:shadow-pink-300/50 dark:hover:shadow-pink-600/50 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            No 😢
          </button>
        </div>

        {noClickCount > 0 && (
          <p className="mt-12 text-sm text-pink-400/60 dark:text-pink-500/60 italic animate-fade-in">
            {noClickCount === 1 && "Are you sure? Look how much bigger Yes is now! 💗"}
            {noClickCount === 2 && "The Yes button is getting really big... 💕"}
            {noClickCount === 3 && "Come on, you know you want to say Yes! 💖"}
            {noClickCount >= 4 && "The Yes button can't get any bigger! Just click it! 💝"}
          </p>
        )}
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
