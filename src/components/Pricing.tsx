import React from 'react';

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
    <section style={{ padding: '60px 10px', backgroundColor: '#000', color: '#fff', textAlign: 'center' }}>
      <div style={{ marginBottom: '40px' }}>
        <h2 style={{ fontSize: '32px', fontWeight: '900' }}>
          Choose Your <span style={{ color: '#2563eb' }}>Protocol</span>
        </h2>
      </div>

      {/* Conteneur resserré */}
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        gap: '15px', 
        maxWidth: '1000px', // Largeur totale diminuée (au lieu de 1200px)
        margin: '0 auto',
        flexWrap: 'nowrap' 
      }}>
        {PRICING_PLANS.map((plan, i) => (
          <div key={i} style={{
            backgroundColor: '#0a0a0a',
            border: plan.isPopular ? '2px solid #2563eb' : '1px solid #1a1a1a',
            borderRadius: '20px',
            padding: '30px 20px', // Padding réduit pour gagner de la place
            flex: '0 1 300px', // Largeur de base plus petite
            textAlign: 'left',
            position: 'relative'
          }}>
            {plan.isPopular && (
              <div style={{
                position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                backgroundColor: '#2563eb', color: '#fff', padding: '4px 12px',
                borderRadius: '8px', fontSize: '10px', fontWeight: '900'
              }}>
                MOST POPULAR
              </div>
            )}

            <h3 style={{ fontSize: '18px', fontWeight: '800', marginBottom: '5px' }}>{plan.title}</h3>
            <p style={{ color: '#71717a', fontSize: '12px', marginBottom: '15px' }}>{plan.desc}</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '20px' }}>
              <span style={{ fontSize: '36px', fontWeight: '900' }}>${plan.price}</span>
              <span style={{ fontSize: '12px', color: '#71717a' }}>CAD</span>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 25px 0' }}>
              {plan.features.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px', color: '#e4e4e7', fontSize: '12px' }}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="4">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {feat}
                </li>
              ))}
            </ul>

            <button style={{
              width: '100%', padding: '12px', borderRadius: '10px', border: 'none',
              backgroundColor: plan.isPopular ? '#2563eb' : '#1a1a1a',
              color: '#fff', fontWeight: '700', fontSize: '13px', cursor: 'pointer'
            }}>
              Get Started →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
