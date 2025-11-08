import React from 'react';

export default function DemoBlock() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-900">See it in action</h2>
          <p className="mt-3 text-neutral-600">
            Build a simple flow in minutes. Pick a trigger, choose a reply, set a follow-up. Drag. Drop. Done.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-neutral-700">
            <li>• Keyword triggers that route conversations</li>
            <li>• Smart delays that feel natural</li>
            <li>• Tags to segment and prioritize</li>
            <li>• Handoff to human when it matters</li>
          </ul>
        </div>
        <div className="rounded-xl border border-neutral-200 bg-white p-4 shadow-sm">
          <div className="aspect-video w-full rounded-lg bg-neutral-50">
            <div className="flex h-full items-center justify-center text-neutral-400">
              Minimal, focused interface preview
            </div>
          </div>
          <p className="mt-3 text-xs text-neutral-500">A clean canvas with blocks, triggers, and replies. No clutter.</p>
        </div>
      </div>
    </section>
  );
}
