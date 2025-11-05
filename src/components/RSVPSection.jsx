import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';

const RSVPSection = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [attending, setAttending] = useState('Yes');

  const onSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Wedding RSVP');
    const body = encodeURIComponent(
      `Name: ${name}\nAttending: ${attending}\nEmail: ${email}\nMessage: ${message}`
    );
    window.location.href = `mailto:ourwedding@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="rsvp" className="relative w-full bg-black py-20 text-white">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-purple-900/10" />
      <div className="relative mx-auto max-w-3xl px-6">
        <div className="mb-8 flex items-center justify-center gap-3">
          <Mail className="h-5 w-5 text-purple-400" />
          <h2 className="text-center text-3xl font-semibold sm:text-4xl">RSVP</h2>
        </div>
        <form onSubmit={onSubmit} className="grid grid-cols-1 gap-4">
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-xl border border-purple-500/30 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-purple-400 focus:outline-none"
              placeholder="Jane Doe"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-xl border border-purple-500/30 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-purple-400 focus:outline-none"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Will you attend?</label>
            <select
              value={attending}
              onChange={(e) => setAttending(e.target.value)}
              className="w-full rounded-xl border border-purple-500/30 bg-zinc-900 px-4 py-3 text-white focus:border-purple-400 focus:outline-none"
            >
              <option>Yes</option>
              <option>No</option>
            </select>
          </div>
          <div>
            <label className="mb-1 block text-sm text-zinc-300">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full rounded-xl border border-purple-500/30 bg-zinc-900 px-4 py-3 text-white placeholder-zinc-500 focus:border-purple-400 focus:outline-none"
              placeholder="Leave a note for the couple"
            />
          </div>
          <button
            type="submit"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-purple-600 px-6 py-3 font-medium text-white shadow-lg shadow-purple-600/30 transition hover:bg-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            <Send className="h-4 w-4" /> Send RSVP
          </button>
        </form>
        <p className="mt-4 text-center text-sm text-zinc-400">
          Prefer a form? Replace the email above with your link, and this button can submit to it.
        </p>
      </div>
    </section>
  );
};

export default RSVPSection;
