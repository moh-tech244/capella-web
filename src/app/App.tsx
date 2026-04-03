import React from 'react';

const PRICING_PLANS = [
  {
    title: "Basic Access",
    price: "15",
    period: "/month",
    description: "Perfect for getting started",
    features: ["1 Month Access", "4K Quality", "Standard Support", "5,000 Channels"],
    isPopular: false
  },
  {
    title: "Standard Pack",
    price: "60",
    period: "/6 months",
    description: "High-fidelity protocol",
    features: ["6 Months Access", "Priority Bandwidth", "24/7 Support", "10,000 Channels"],
    isPopular: false
  },
  {
    title: "Elite Protocol",
    price: "89",
    period: "/year",
    description: "Most popular choice",
    features: ["12 Months + 1 Free", "Maximum Stability", "Instant Activation", "15,000 Channels"],
    isPopular: true
  }
];

export default function App() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '40px', fontFamily: 'sans-serif' }}>
      
      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h2 style={{ fontSize: '48px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '-2px', fontStyle: 'italic', margin: '0' }}>
          Choose Your <span style={{ color: '#2563eb' }}>Protocol</span>
        </h2>
        <p style={{ color: '#71717a', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px', marginTop: '10px' }}>
          Optimized tiers for global digital media infrastructure.
        </p>
      </div>

      {/* Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {PRICING_PLANS.map((plan, index) => (
          <div 
            key={index} 
            style={{
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
              padding: '40px',
              borderRadius: '40px',
              border: plan.isPopular ? '2px solid #2563eb' : '1px solid #27272a',
              backgroundColor: plan.isPopular ? 'rgba(24, 24, 27, 0.8)' : '#09090b',
              transition: 'all 0.3s ease',
              transform: plan.isPopular ? 'scale(1.05)' : 'scale(1)',
              boxShadow: plan.isPopular ? '0 0 40px rgba(37, 99, 235, 0.2)' : 'none'
            }}
          >
            {plan.isPopular && (
              <div style={{
                position: 'absolute',
                top: '-15px',
                left: '50%',
                transform: 'translateX(-50%)',
                backgroundColor: '#2563eb',
                padding: '6px 20px',
                borderRadius: '99px',
                fontSize: '10px',
                fontWeight: '900',
                textTransform: 'uppercase',
                whiteSpace: 'nowrap'
              }}>
                Most Popular
              </div>
            )}

            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 10px 0' }}>{plan.title}</h3>
              <p style={{ color: '#71717a', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase' }}>{plan.description}</p>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'baseline', gap: '8px' }}>
                <span style={{ fontSize: '56px', fontWeight: '900' }}>${plan.price}</span>
                <span style={{ color: '#a1a1aa', fontWeight: 'bold', fontSize: '14px' }}>CAD</span>
              </div>
              <div style={{ color: '#71717a', fontSize: '14px', fontWeight: 'bold' }}>{plan.period}</div>
            </div>

            <ul style={{ listStyle: 'none', padding: '0', margin: '0 0 40px 0', flexGrow: '1' }}>
              {plan.features.map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '15px', color: '#d4d4d8', marginBottom: '15px', fontSize: '14px', fontWeight: '600' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', backgroundColor: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(37, 99, 235, 0.2)' }}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="4"><path d="M5 13l4 4L19 7" /></svg>
                  </div>
                  {feat}
                </li>
              ))}
            </ul>

            <button style={{
              width: '100%',
              padding: '20px',
              borderRadius: '16px',
              fontWeight: '900',
              fontSize: '14px',
              textTransform: 'uppercase',
              border: 'none',
              cursor: 'pointer',
              backgroundColor: plan.isPopular ? '#2563eb' : '#fff',
              color: plan.isPopular ? '#fff' : '#000',
              transition: 'transform 0.2s ease'
            }}>
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
