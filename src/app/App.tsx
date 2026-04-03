import React from 'react';
import '../styles/index.css';

export default function App() {
  return (
    <div>
      <h1 className="hero-title">
        NEXT-GEN MEDIA <br/>
        <span>OPTIMIZATION PROTOCOL</span>
      </h1>

      <div className="pricing-grid">
        <div className="card">
          <h3>Basic Access</h3>
          <p className="price">$15 <span>CAD</span></p>
          <p>/month</p>
          <button className="btn btn-blue">Get Started</button>
        </div>

        <div className="card popular">
          <div className="badge">Most Popular</div>
          <h3>Elite Protocol</h3>
          <p className="price">$89 <span>CAD</span></p>
          <p>/year</p>
          <button className="btn btn-blue">Get Started</button>
        </div>
      </div>
    </div>
  );
}
