import React from 'react';
import '../styles/index.css'; // Importation cruciale pour le design sombre

export default function App() {
  return (
    <div className="app-container">
      {/* Header */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/></svg>
          </div>
          <span className="brand-name">Capella R&D Lab</span>
        </div>
        <div className="nav-links">
          <span>Features</span>
          <span>Pricing</span>
          <span>Contact</span>
        </div>
        <button className="contact-btn">
          <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
          Contact Support
        </button>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="hero-badge">✨ Enterprise-Grade Performance</div>
        <h1 className="hero-title">
          NEXT-GEN MEDIA <br/>
          <span className="highlight">OPTIMIZATION PROTOCOL</span>
        </h1>
        <p className="hero-subtitle">
          Experience Ultra-HD stability and 4K performance. Optimized for global networks.
        </p>
      </header>

      {/* Pricing Grid */}
      <div className="pricing-grid">
        {/* Basic Access */}
        <div className="card">
          <h3 className="card-title">Basic Access</h3>
          <p className="card-subtitle">PERFECT FOR GETTING STARTED</p>
          <div className="price-tag">
            <span className="amount">$15</span>
            <span className="currency">CAD</span>
          </div>
          <p className="period">/month</p>
          <ul className="feature-list">
            <li>1 Month Access</li>
            <li>4K Quality</li>
            <li>Standard Support</li>
            <li>5,000 Channels</li>
          </ul>
          <button className="btn-secondary">GET STARTED →</button>
        </div>

        {/* Elite Protocol (Popular) */}
        <div className="card popular">
          <div className="popular-badge">MOST POPULAR</div>
          <h3 className="card-title">Elite Protocol</h3>
          <p className="card-subtitle">MOST POPULAR CHOICE</p>
          <div className="price-tag">
            <span className="amount">$89</span>
            <span className="currency">CAD</span>
          </div>
          <p className="period">/year</p>
          <ul className="feature-list">
            <li>12 Months + 1 Free</li>
            <li>Maximum Stability</li>
            <li>Instant Activation</li>
            <li>15,000 Channels</li>
          </ul>
          <button className="btn-primary">GET STARTED →</button>
        </div>
      </div>

      {/* Support Floating Button */}
      <div className="support-float">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="white"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
      </div>
    </div>
  );
}
