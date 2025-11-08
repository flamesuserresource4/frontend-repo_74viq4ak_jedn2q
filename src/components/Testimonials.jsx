import React from 'react';

const testimonials = [
  {
    quote:
      'Booked 7 discovery calls in a week from DMs I would have missed. It just… runs.',
    name: 'Maya R.',
    role: 'Creator & Coach',
  },
  {
    quote:
      'Feels human, not spammy. Clients get answers fast and I stay out of the inbox.',
    name: 'Leo S.',
    role: 'Agency Owner',
  },
  {
    quote:
      'Setup took 15 minutes. Follow-ups now happen automatically and politely.',
    name: 'Anika T.',
    role: 'Small Business',
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-2xl font-semibold text-neutral-900">What customers say</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {testimonials.map((t) => (
          <figure key={t.name} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <blockquote className="text-neutral-700">“{t.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-neutral-500">
              {t.name} · {t.role}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
