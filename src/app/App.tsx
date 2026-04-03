import React from 'react';

// CORRECTION DU CHEMIN ICI :
import "../../default_shadcn_theme.css"; 

import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { QuickIntro } from '../components/QuickIntro';
import { Pricing } from '../components/Pricing';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { FloatingSupport } from '../components/FloatingSupport';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Header />
      <main className="flex flex-col">
        <Hero />
        <QuickIntro />
        <Features />
        <Pricing />
      </main>
      <Footer />
      <FloatingSupport />
    </div>
  );
}
