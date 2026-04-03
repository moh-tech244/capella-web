import React from 'react';
import '../styles/index.css'; // On lie le fichier de style externe

export default function App() {
  return (
    <div className="app-container">
      {/* Header / Navigation */}
      <nav className="navbar">
        <div className="logo">Capella R&D Lab</div>
        <div className="nav-links">
          <span>Features</span>
          <span>Pricing</span>
          <button className="btn-contact">Contact Support</button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1 className="hero-title">
          NEXT-GEN MEDIA <br/>
          <span>OPTIMIZATION PROTOCOL</span>
        </h1>
      </header>

      {/* Grille de prix */}
      <main className="pricing-grid">
        <div className="card">
          <h3>Basic Access</h3>
          <p className="price">$15 <span>CAD</span></p>
          <button className="btn-card">Get Started</button>
        </div>

        <div className="card popular">
          <div className="badge">MOST POPULAR</div>
          <h3>Elite Protocol</h3>
          <p className="price">$89 <span>CAD</span></p>
          <button className="btn-card blue">Get Started</button>
        </div>
      </main>

      {/* Support Flottant */}
      <div className="support-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
      </div>
    </div>
  );
}
