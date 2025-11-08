import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="h-[68vh] min-h-[520px] w-full relative">
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/xzUirwcZB9SOxUWt/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/60 via-white/70 to-white" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center">
          <p className="text-sm text-neutral-500">Instagram DM Automation Tool</p>
          <h1 className="mt-2 text-4xl font-semibold leading-tight text-neutral-900 sm:text-5xl">
            [YOUR PRODUCT NAME]
          </h1>
          <p className="mt-4 max-w-2xl text-base text-neutral-600 sm:text-lg">
            Turn inbox chaos into calm, consistent conversations. Replies go out. Leads move forward. You stay in flow.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center rounded-md bg-neutral-900 px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-neutral-800"
            >
              Start free
            </a>
            <span className="text-xs text-neutral-500">No credit card required</span>
          </div>
        </div>
      </div>
    </section>
  );
}
