import React from 'react';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { QuickIntro } from '../components/QuickIntro';
import { Pricing } from '../components/Pricing';
import { Features } from '../components/Features';
import { Footer } from '../components/Footer';
import { FloatingSupport } from '../components/FloatingSupport';

export default function App() {
  return (
    <div style={{ 
      backgroundColor: '#0a0a0a', 
      color: '#ffffff', 
      minHeight: '100vh', 
      fontFamily: 'sans-serif',
      margin: 0,
      padding: 0
    }}>
      <Header />
      
      <main style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '40px',
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
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
