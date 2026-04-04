import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Pricing from '../components/Pricing';

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', color: '#fff', margin: 0, padding: 0, overflowX: 'hidden' }}>
      <Header />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <footer style={{ padding: '40px 20px', textAlign: 'center', borderTop: '1px solid #111', color: '#71717a', fontSize: '13px' }}>
        © 2026 Capella R&D Lab. All rights reserved.
      </footer>
    </div>
  );
}
