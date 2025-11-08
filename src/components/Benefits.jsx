import React from 'react';
import { Rocket, Clock, Handshake } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'More replies',
    text: 'Auto-respond in seconds so warm leads stay warm and keep moving.',
  },
  {
    icon: Clock,
    title: 'Save hours',
    text: 'Replace manual follow-ups with quiet, reliable workflows.',
  },
  {
    icon: Handshake,
    title: 'Win trust',
    text: 'Personalized messages that feel human, not robotic.',
  },
];

export default function Benefits() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-10 sm:py-16">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-50">
                <Icon className="h-5 w-5 text-neutral-700" />
              </div>
              <h3 className="text-base font-medium text-neutral-900">{title}</h3>
            </div>
            <p className="mt-3 text-sm leading-6 text-neutral-600">{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
