import React from 'react';

// Configuration des paliers pour une maintenance facile
const PRICING_PLANS = [
  {
    title: "Basic Access",
    desc: "Perfect for getting started",
    price: "15",
    unit: "/month",
    features: ["1 Month Access", "4K Quality", "Standard Support", "5,000 Channels"],
    isPopular: false
  },
  {
    title: "Standard Pack",
    desc: "Most popular choice",
    price: "60",
    unit: "/6 months",
    features: ["6 Months Access", "Priority Bandwidth", "24/7 Support", "10,000 Channels"],
    isPopular: true
  },
  {
    title: "Elite Protocol",
    desc: "Maximum performance",
    price: "89",
    unit: "/year",
    features: ["12 Months + 1 Free", "Maximum Stability", "Instant Activation", "15,000 Channels"],
    isPopular: false
  }
];

export default function Pricing() {
  return (
    <section style={{ padding: '100px 20px', backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
      {/* Header de la section */}
      <div style={{ marginBottom: '60px' }}>
        <p style={{ color: '#a1a1aa', fontSize: '14px', marginBottom: '10px' }}>Capella offers three premium access tiers tailored for your needs.</p>
        <h2 style={{ fontSize: '48px', fontWeight: '900', margin: '0 0 10px 0' }}>
          Choose Your <span style={{ color: '#2563eb' }}>Protocol</span>
        </h2>
        <p style={{ color: '#71717a' }}>Select the plan that fits your needs</p>
      </div>

      {/* Grille des cartes */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '24px', 
        flexWrap: 'wrap', 
        maxWidth: '1200px', 
        margin: '0 auto' 
      }}>
        {PRICING_PLANS.map((plan, i) => (
          <div key={i} style={{
            backgroundColor: '#0a0a0a',
            border: plan.isPopular ? '2px solid #2563eb' : '1px solid #1a1a1a',
            borderRadius: '24px',
            padding: '40px 32px',
            width: '340px',
            textAlign: 'left',
            position: 'relative',
            transition: 'transform 0.2s ease',
            boxShadow: plan.isPopular ? '0 0 40px rgba(37, 99, 235, 0.15)' : 'none'
          }}>
            {/* Badge "Most Popular" stylisé */}
            {plan.isPopular && (
              <div style={{
                position: 'absolute', top: '-18px', left: '50%', transform: 'translateX(-50%)',
                backgroundColor: '#2563eb', color: '#fff', padding: '6px 16px',
                borderRadius: '12px', fontSize: '12px', fontWeight: '900', lineHeight: '1.2', textAlign: 'center'
              }}>
                MOST<br/>POPULAR
              </div>
            )}

            <h3 style={{ fontSize: '22px', fontWeight: '800', marginBottom: '8px' }}>{plan.title}</h3>
            <p style={{ color: '#71717a', fontSize: '14px', marginBottom: '24px' }}>{plan.desc}</p>
            
            <div style={{ marginBottom: '32px' }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
                <span style={{ fontSize: '56px', fontWeight: '900' }}>${plan.price}</span>
                <span style={{ fontSize: '16px', color: '#71717a', fontWeight: '600' }}>CAD</span>
              </div>
              <p style={{ color: '#71717a', fontSize: '14px', marginTop: '-4px' }}>{plan.unit}</p>
            </div>

            {/* Liste des fonctionnalités avec icônes */}
            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 40px 0' }}>
              {plan.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px', color: '#e4e4e7', fontSize: '14px' }}>
                  <div style={{ display: 'flex', backgroundColor: '#1a1a1a', borderRadius: '50%', padding: '4px' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="4">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            {/* Bouton CTA */}
            <button style={{
              width: '100%', padding: '16px', borderRadius: '12px', border: 'none',
              backgroundColor: plan.isPopular ? '#2563eb' : '#1a1a1a',
              color: '#fff', fontWeight: '700', fontSize: '15px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px'
            }}>
              Get Started <span style={{ fontSize: '18px' }}>→</span>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
