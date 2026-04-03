import React from 'react';

// Essaye ce chemin, s'il fait encore une erreur Vercel, retire la ligne.
import "../../../default_shadcn_theme.css"; 

import Header from '../components/Header';
import { Hero } from '../components/Hero';
import { QuickIntro } from '../components/QuickIntro';
import { Pricing } from '../components/Pricing';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { FloatingSupport } from '../components/FloatingSupport';

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <Header />
      <main style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
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
