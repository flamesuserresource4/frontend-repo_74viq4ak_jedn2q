import React from 'react';

function Plan({ name, price, features }) {
  return (
    <div className="flex flex-col rounded-xl border border-neutral-200 bg-white p-6 shadow-sm">
      <h3 className="text-base font-medium text-neutral-900">{name}</h3>
      <div className="mt-2 text-3xl font-semibold text-neutral-900">{price}</div>
      <ul className="mt-4 space-y-2 text-sm text-neutral-700">
        {features.map((f) => (
          <li key={f}>• {f}</li>
        ))}
      </ul>
      <a
        href="#get-started"
        className="mt-6 inline-flex items-center justify-center rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-800"
      >
        Choose {name}
      </a>
    </div>
  );
}

export default function Pricing() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-center text-2xl font-semibold text-neutral-900">Simple pricing</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Plan name="Free" price="$0" features={["1 active flow", "Basic triggers", "Community support"]} />
        <Plan name="Pro" price="$29" features={["Unlimited flows", "Keyword + intent triggers", "Priority support"]} />
        <Plan name="Business" price="$99" features={["Team seats", "Advanced routing", "SLA support"]} />
      </div>
    </section>
  );
}
