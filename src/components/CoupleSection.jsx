import React from 'react';
import { Heart, Instagram, Music2 } from 'lucide-react';

const CoupleSection = () => {
  return (
    <section id="couple" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-transparent to-purple-900/10" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-center gap-3">
          <Heart className="h-5 w-5 text-purple-400" />
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">The Couple</h2>
          <Heart className="h-5 w-5 text-purple-400" />
        </div>
        <p className="mx-auto max-w-3xl text-center text-zinc-300">
          From late-night playlists to sunrise coffee runs, our story is a blend of tiny moments and big dreams. We can’t wait to celebrate with you.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6">
            <h3 className="text-2xl font-semibold">Ava</h3>
            <p className="mt-2 text-zinc-300">
              A creative at heart, lover of moody playlists and modern art. Believes in purple sunsets and conversations that last for hours.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-purple-300">
              <Instagram className="h-4 w-4" /> @ava
            </div>
          </div>
          <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6">
            <h3 className="text-2xl font-semibold">Noah</h3>
            <p className="mt-2 text-zinc-300">
              Tech enthusiast with a soft spot for classic vinyls and midnight drives. Always finding new ways to make life a little brighter.
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-purple-300">
              <Music2 className="h-4 w-4" /> Favorite track: Electric Love
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
