import React from 'react';
import '../styles/index.css';

export default function App() {
  return (
    <div className="app-content">
      <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 60px' }}>
        <div style={{ fontWeight: 'bold', fontSize: '20px' }}>Capella R&D Lab</div>
        <div style={{ display: 'flex', gap: '20px' }}><span>Features</span><span>Pricing</span></div>
      </nav>

      <h1 className="hero-title">
        NEXT-GEN MEDIA <br/>
        <span>OPTIMIZATION PROTOCOL</span>
      </h1>

      <div className="pricing-grid">
        <div className="card">
          <h3>Basic Access</h3>
          <p className="price">$15 <span>CAD</span></p>
          <button className="btn btn-dark">Get Started</button>
        </div>

        <div className="card popular">
          <div className="badge">Most Popular</div>
          <h3>Elite Protocol</h3>
          <p className="price">$89 <span>CAD</span></p>
          <button className="btn btn-blue">Get Started</button>
        </div>
      </div>

      <div className="support-btn">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="white"><path d="M12 1c-4.97 0-9 4.03-9 9v7c0 1.66 1.34 3 3 3h3v-8H5v-2c0-3.87 3.13-7 7-7s7 3.13 7 7v2h-4v8h3c1.66 0 3-1.34 3-3v-7c0-4.97-4.03-9-9-9z"/></svg>
      </div>
    </div>
  );
}
