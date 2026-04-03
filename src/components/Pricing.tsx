import React, { useState, useEffect } from 'react';

export default function Pricing() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const plans = [
    {
      name: "Basic Access",
      price: "15",
      period: "/month",
      desc: "Perfect for getting started",
      features: ["1 Month Access", "4K Quality", "Standard Support", "5,000 Channels"],
      popular: false
    },
    {
      name: "Standard Pack",
      price: "60",
      period: "/6 months",
      desc: "Balanced choice for users",
      features: ["6 Months Access", "Priority Bandwidth", "24/7 Support", "10,000 Channels"],
      popular: false
    },
    {
      name: "Elite Protocol",
      price: "89",
      period: "/year",
      desc: "Best Value Protocol", // Texte amélioré ici
      features: ["12 Months + 1 Free", "Maximum Stability", "Instant Activation", "15,000 Channels"],
      popular: true
    }
  ];

  return (
    <section id="pricing" style={{
      backgroundColor: '#000',
      color: '#fff',
      // Distance en haut diminuée (de 100px à 40px)
      padding: isMobile ? '30px 15px' : '40px 20px', 
      fontFamily: 'Inter, sans-serif',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundImage: 'linear-gradient(rgba(26, 32, 44, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(26, 32, 44, 0.2) 1px, transparent 1px)',
      backgroundSize: '40px 40px'
    }}>
      <h2 style={{ fontSize: isMobile ? '32px' : '48px', fontWeight: '900', marginBottom: '8px' }}>
        Choose Your <span style={{ color: '#2563eb' }}>Protocol</span>
      </h2>
      <p style={{ color: '#71717a', marginBottom: '40px', fontSize: '15px' }}>Select the plan that fits your needs</p>

      <div style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: '20px',
        maxWidth: '1200px',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        {plans.map((plan, index) => (
          <div key={index} style={{
            flex: 1,
            backgroundColor: '#0a0a0a',
            borderRadius: '24px',
            padding: '35px 25px',
            border: plan.popular ? '2px solid #2563eb' : '1px solid #1a1a1a',
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: plan.popular ? '0 0 40px rgba(37, 99, 235, 0.15)' : 'none'
          }}>
            {plan.popular && (
              <div style={{
                position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)',
                backgroundColor: '#2563eb', color: 'white', padding: '5px 18px',
                borderRadius: '99px', fontSize: '11px', fontWeight: '800'
              }}>
                MOST POPULAR
              </div>
            )}

            <h3 style={{ fontSize: '19px', fontWeight: '700', marginBottom: '6px' }}>{plan.name}</h3>
            <p style={{ color: '#71717a', fontSize: '13px', marginBottom: '20px' }}>{plan.desc}</p>
            
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px', marginBottom: '4px' }}>
              <span style={{ fontSize: '38px', fontWeight: '900' }}>${plan.price}</span>
              <span style={{ fontSize: '14px', color: '#a1a1aa', fontWeight: '600' }}>CAD</span>
            </div>
            <p style={{ color: '#71717a', fontSize: '13px', marginBottom: '25px' }}>{plan.period}</p>

            <div style={{ flex: 1, marginBottom: '30px' }}>
              {plan.features.map((feature, fIndex) => (
                <div key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{ 
                    backgroundColor: 'rgba(37, 99, 235, 0.12)', borderRadius: '50%', 
                    width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' 
                  }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="4">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <span style={{ color: '#e4e4e7', fontSize: '13.5px' }}>{feature}</span>
                </div>
              ))}
            </div>

            <button style={{
              backgroundColor: plan.popular ? '#2563eb' : '#1e293b',
              color: 'white', padding: '14px', borderRadius: '10px', border: 'none',
              fontWeight: '700', fontSize: '14px', cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px'
            }}>
              Get Started
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
