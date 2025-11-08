import React from 'react';

export default function Footer() {
  return (
    <footer className="mx-auto max-w-6xl px-6 py-12 text-center">
      <p className="text-sm text-neutral-500">Built with care. Privacy-first. Respect for your time and your audience.</p>
      <p className="mt-2 text-xs text-neutral-400">© {new Date().getFullYear()} [YOUR PRODUCT NAME]. All rights reserved.</p>
    </footer>
  );
}
