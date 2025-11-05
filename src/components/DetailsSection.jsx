import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const DetailItem = ({ icon: Icon, title, children }) => (
  <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-b from-zinc-900 to-zinc-950 p-6">
    <div className="flex items-start gap-4">
      <div className="rounded-xl bg-purple-600/20 p-3 text-purple-300">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <div className="mt-1 text-zinc-300">{children}</div>
      </div>
    </div>
  </div>
);

const DetailsSection = () => {
  return (
    <section id="details" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(147,51,234,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl font-semibold sm:text-4xl">Event Details</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-zinc-300">
          Dress to glow in shades of black, silver, and purple. We’ll dance under neon lights and celebrate love.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
          <DetailItem icon={Calendar} title="Date">
            Saturday, September 20, 2025
          </DetailItem>
          <DetailItem icon={Clock} title="Time">
            Ceremony at 5:00 PM • Reception to follow
          </DetailItem>
          <DetailItem icon={MapPin} title="Location">
            Aurora Hall, Downtown
            <div className="mt-2">
              <a
                href="https://maps.google.com?q=Aurora+Hall+Downtown"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-purple-300 underline hover:text-purple-200"
              >
                Open in Google Maps
              </a>
            </div>
          </DetailItem>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
