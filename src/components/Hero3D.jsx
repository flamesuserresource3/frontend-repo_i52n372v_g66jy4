import React from 'react';
import Spline from '@splinetool/react-spline';
import { Heart } from 'lucide-react';

const Hero3D = () => {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/Y7DK6OtMHusdC345/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient vignette to improve text readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-600/10 px-4 py-2 text-sm text-purple-200 backdrop-blur">
          <Heart className="h-4 w-4 text-purple-300" />
          We are getting married
        </div>
        <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight">
          Ava & Noah
        </h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-zinc-300">
          Join us for a modern celebration of love, surrounded by purple neon and a touch of digital magic.
        </p>
        <a
          href="#details"
          className="mt-8 inline-flex items-center rounded-full bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
        >
          View Details
        </a>
      </div>
    </section>
  );
};

export default Hero3D;
