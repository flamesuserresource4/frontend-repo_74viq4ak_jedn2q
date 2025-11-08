import React from 'react';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Benefits from './components/Benefits';
import DemoBlock from './components/DemoBlock';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900">
      <Hero />
      <ValueProp />
      <Benefits />
      <DemoBlock />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}
