import React from 'react';
import Hero3D from './components/Hero3D';
import CoupleSection from './components/CoupleSection';
import DetailsSection from './components/DetailsSection';
import RSVPSection from './components/RSVPSection';

function App() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Hero3D />
      <CoupleSection />
      <DetailsSection />
      <RSVPSection />

      <footer className="border-t border-purple-500/20 bg-zinc-950 py-8">
        <div className="mx-auto max-w-6xl px-6 text-center text-sm text-zinc-400">
          © {new Date().getFullYear()} Ava & Noah — With love in purple and black.
        </div>
      </footer>
    </div>
  );
}

export default App;
