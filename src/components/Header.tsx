import React from 'react';

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo-group">
        <div className="logo-shield">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L3 7v10l9 5 9-5V7l-9-5z"/></svg>
        </div>
        <span className="logo-text">Capella R&D Lab</span>
      </div>
      
      <div className="nav-links">
        <span>Features</span>
        <span>Pricing</span>
        <span>Contact</span>
      </div>
      
      <button className="btn-support">
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/></svg>
        Contact Support
      </button>
    </nav>
  );
}
